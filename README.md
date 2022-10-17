# Playwright - Page object model

## Setup

- Install [nodejs](https://nodejs.org/en/)
- Clone source code
- Install dependencies `npm install`
- Install supported browsers `npx playwright`
- Install recommended VS Code extensions
- Make a copy of `account-sample.json` and rename it to `account.json` _(input valid user data to login)_

## Running tests ([docs](https://playwright.dev/docs/running-tests))

- Running all tests `npx playwright test`
- Running a single test file `npx playwright test login.spec.ts`
  - or without the filename suffix `npx playwright test login`
- Common flags:
  - debug mode `--debug`
  - run with specific browser profile `--project=chromium`

## View report

To open last report run: `npx playwright show-report`

## Additions

- [Playwright](https://github.com/microsoft/playwright) github repository.

- Recommend to install `Playwright Test for VSCode` [extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

- Use emojis for better commit message refs [here](https://dev.to/babakks/emojis-for-better-git-commit-messages-52fa)
