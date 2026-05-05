import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  console.log("Sell car request", payload);

  return NextResponse.json({ ok: true });
}
