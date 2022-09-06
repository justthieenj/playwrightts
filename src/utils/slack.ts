import { APIRequestContext } from "@playwright/test";

export default async function sendMessage(request: APIRequestContext, message: string) {
  if (process.env.CI) {
    await request.post(process.env.SLACK_WEBHOOK_URL, {
      data: {
        type: "mrkdwn",
        text: `${message}`,
      },
    });
  }
}
