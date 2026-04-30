import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // In a real app, you would:
    // 1. Validate the data
    // 2. Send an email using Resend, SendGrid, etc.
    // 3. Store in a database
    
    console.log("Contact form submission received:", data);

    return NextResponse.json({ success: true, message: "Mensaje recibido correctamente" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Hubo un error al procesar tu mensaje" },
      { status: 500 }
    );
  }
}
