import { NextResponse } from "next/server";

export async function GET(request) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return NextResponse.redirect(`${baseUrl}/sitemap.xml`, { status: 301 });
}
