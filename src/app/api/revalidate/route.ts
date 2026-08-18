import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret != process.env.REVALIDATE_TOKEN) {
    return NextResponse.json(
      { status: 401, message: "Invalid Secret Token" },
      { status: 400 },
    );
  }

  if (!tag) {
    return NextResponse.json(
      { status: 400, message: "missing tag param" },
      { status: 401 },
    );
  }

  revalidateTag(tag, { expire: 30 });

  return NextResponse.json({ revalidate: true, now: Date.now() });
}
