# How to install

axios2curl is easy to use. First you'll have to install it.

```shell
npm i @thanhpv3380/axios2curl
```

Then all you have to do is import to your app. Here's a sample:

```javascript
import axios from "axios";
import express from "express";
import axios2curl from "@thanhpv3380/axios2curl";

const app = express();

axios2curl(axios);

app.post("/", (req, res) => {
  res.send({ text: "hello" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
  axios
    .post("http://localhost:3000", { test: "data" })
    .then(res => {
      console.log("success");
    })
    .catch(err => {
      console.log(err);
    });
});
```

If you want to custom command log:

```javascript
axios2curl(axios, result => {
  const { command } = result;
  console.log(`Command: ${command}`);
});
```
