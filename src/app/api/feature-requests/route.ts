import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, title, description, useCase, recaptchaToken } = body;

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      {
        method: "POST",
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Validate the input
    // 2. Store the feature request in your database
    // 3. Maybe send an email notification
    // For now, we'll just log it
    console.log("Feature request received:", {
      email,
      title,
      description,
      useCase,
    });

    return NextResponse.json({ message: "Feature request received" });
  } catch (error) {
    console.error("Error processing feature request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
