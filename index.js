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

app.get("/", (req, res) => {
    res.send("Hello test");
});

app.listen(8080, () => {
    console.log("Server is running");
});