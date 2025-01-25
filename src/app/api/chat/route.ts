import { google } from "@ai-sdk/google";
import {  streamText } from "ai";

export const maxDuration = 30;

// Add API key here
const model = google('gemini-1.5-flash');

export async function POST(req: Request) {
    console.log("api called")
  const { messages } = await req.json();
  const result = await streamText({
    model,
    messages
  })
  console.log(result)
  return result.toDataStreamResponse();
}