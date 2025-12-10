import { NextResponse } from "next/server";
import { addRow } from "@/lib/googleSheets";

const verifyRecaptcha = async (token: string) => {
  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return false;
  }
};

export async function POST(request: Request) {
  try {
    const { email, title, description, useCase, recaptchaToken } =
      await request.json();

    // Verify reCAPTCHA
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json({ error: "Invalid reCAPTCHA" }, { status: 400 });
    }

    // Add to Google Sheet
    await addRow({
      email,
      title,
      description,
      useCase,
      timestamp: new Date().toISOString(),
      status: "New",
    });

    return NextResponse.json({
      message: "Feature request submitted successfully",
    });
  } catch (error) {
    console.error("Error handling feature request:", error);
    return NextResponse.json(
      { error: "Error submitting feature request" },
      { status: 500 }
    );
  }
}
