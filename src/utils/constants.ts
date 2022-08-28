import * as util from "util";

const urlSaigonTechnology = 'https://%s.saigontechnology.vn/';

const identityURL = util.format(urlSaigonTechnology, 'identity');
const leaveURL = util.format(urlSaigonTechnology, 'leave');
const insiderURL = util.format(urlSaigonTechnology, 'insider');
const empName = ["Ngoc Vu"];

export { identityURL, leaveURL, insiderURL, empName };