import * as fs from "fs";

let accountData = {
  empCode: "",
  password: "",
  totpSecret: "",
};

try {
  accountData = JSON.parse(fs.readFileSync("account.json", "utf8"));
} catch (e) {
  accountData.empCode = process.env.EMP_CODE;
  accountData.password = process.env.PASSWORD;
  accountData.totpSecret = process.env.TOTP_SECRET;
}

export { accountData };

