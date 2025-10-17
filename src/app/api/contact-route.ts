import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const payload = {
    name: String(form.get("name") || ""),
    email: String(form.get("email") || ""),
    message: String(form.get("message") || ""),
  };

  // TODO: validate input (zod) and call your backend mailer
  // Example forward:
  // const resp = await fetch(process.env.BACKEND_BASE_URL + "/contact", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json", "x-api-key": process.env.BACKEND_API_KEY! },
  //   body: JSON.stringify(payload),
  // });

  // For now, just pretend it's OK:
  return NextResponse.json({ ok: true });
}
