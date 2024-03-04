import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

const postsDirectory = path.join(process.cwd(), "lib");

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang");
  const postType = searchParams.get("postType");
  const id = decodeURI(searchParams.get("id")??"");
  const fullPath = path.join(postsDirectory, `${lang}/${postType}/${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return NextResponse.json({ content: fileContents });
}
