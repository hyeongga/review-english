// http://localhost:3000/api/auth
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

//POST함수명 대문자로 맞춰줘야 함
export const POST = async (req: NextRequest) => {
  try {
    const { text } = await req.json();
    const response = await axios.post(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        input: { text },
        voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
        audioConfig: { audioEncoding: "MP3" },
      },
      {
        headers: {
          "Content-Type": "applicaion/json",
        },
      }
    );

    return NextResponse.json({
      ok: true,
      audioContent: response.data.audioContent,
    });
  } catch (error) {
    console.error(error);
  }
};
