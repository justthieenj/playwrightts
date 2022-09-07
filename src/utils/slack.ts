import { APIRequestContext, TestInfo } from "@playwright/test";

export async function sendMessage(request: APIRequestContext, message: string) {
  if (process.env.CI) {
    await request.post(process.env.SLACK_WEBHOOK_URL, {
      data: {
        type: "mrkdwn",
        text: `${message}`,
      },
    });
  }
}

export async function sendResultNoti(request: APIRequestContext, testResult: TestInfo) {
  await sendMessage(
    request,
    `*Test*: ${testResult.title}.\n*Status*: _*${testResult.status.toUpperCase()}*_ on _${testResult.project.name}_\nView report and trace log <https://justthieenj.github.io/playwrightts/|here>\n----------`,
  );
}
