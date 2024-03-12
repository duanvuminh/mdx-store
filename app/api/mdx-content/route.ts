import { fileService } from "@/lib/services/file-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") ?? "";
  const id = decodeURI(searchParams.get("id") ?? "");
  const fileContents = fileService.getContent(lang, id);
  return NextResponse.json({ content: fileContents });
}
