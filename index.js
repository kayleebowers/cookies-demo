const express = require("express");
const Cookies = require("cookies");

const app = express();
let cookies = null;

// initialize the cookies handler by creating middleware and forward req/res to the next one
app.use((req, res, next) => {
    cookies = new Cookies(req, res)
    cookies.set("name", "Sabrina", {expires: new Date("December 17, 2023 03:24:00")});
    next();
})

// check that cookie is returned to server
app.get("/", (req, res) => {
    let responseText = "Hello, ";
    if (cookies) responseText += cookies.get("name");
    res.send(responseText);
});

app.listen(8080, () => {
    console.log("Server is running");
});