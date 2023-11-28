const axios = require("axios");
const axios2curl = require("./src/axios2curl");

axios2curl(axios, function (curlResult, err) {
  const { command } = curlResult;
  console.log(command);
});

try {
  axios({
    method: "GET",
    url: "http://192.168.4.134/restapi/accounts/buyinlist",
    headers: {
      "Content-Type": "application/json"
    },
    params: { name: 1 },
    data: {
      firstName: "Fred",
      lastName: "Flintstone"
    }
  });
} catch (err) {
  console.log("xxx");
}
