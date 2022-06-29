// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
  return new Response(
    JSON.stringify({
      name: "Jim Halpert",
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
