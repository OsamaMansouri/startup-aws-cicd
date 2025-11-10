import { NextRequest, NextResponse } from "next/server";
import { uploadToS3, getSignedUrlForFile } from "@/lib/s3";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const key = await uploadToS3(buffer, file.name, file.type);
    const url = await getSignedUrlForFile(key);

    return NextResponse.json({
      success: true,
      key,
      url,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}

