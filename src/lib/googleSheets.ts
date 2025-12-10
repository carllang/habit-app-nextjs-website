import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

interface FeatureRequest {
  email: string;
  title: string;
  description: string;
  useCase: string;
  timestamp: string;
  status: string;
}

// Initialize the sheet
export const getSheet = async () => {
  try {
    // Create JWT client
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file",
      ],
    });

    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEETS_SHEET_ID!,
      serviceAccountAuth
    );

    // Load the sheet
    await doc.loadInfo();

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];

    // Initialize headers if they don't exist
    try {
      const headers = await sheet.headerValues;
      if (!headers || headers.length === 0) {
        await sheet.setHeaderRow([
          "timestamp",
          "email",
          "title",
          "description",
          "useCase",
          "status",
        ]);
      }
    } catch (error) {
      // If headerValues throws an error, it means no headers exist
      await sheet.setHeaderRow([
        "timestamp",
        "email",
        "title",
        "description",
        "useCase",
        "status",
      ]);
    }

    return sheet;
  } catch (error) {
    console.error("Error initializing Google Sheet:", error);
    throw error;
  }
};

export const addRow = async (data: FeatureRequest) => {
  const sheet = await getSheet();

  try {
    // Add the new row with data
    await sheet.addRow({
      timestamp: new Date().toISOString(),
      email: data.email,
      title: data.title,
      description: data.description,
      useCase: data.useCase,
      status: "New",
    });

    return true;
  } catch (error) {
    console.error("Error adding row to sheet:", error);
    throw error;
  }
};
