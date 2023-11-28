# How to install

axios2curl is easy to use. First you'll have to install it.

```shell
npm i --save axios2curl@latest
```

Then all you have to do is import to your app. Here's a sample:

```javascript
import axios from "axios";
import express from "express";
import axios2curl from "axios2curl";

const app = express();

axios2curl(axios);

// creating dummy route
app.post("/", (req, res) => {
  res.send({ text: "hello" });
});

// starting server
app.listen(7500, () => {
  console.log("Dummy server started on port 7500");
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
