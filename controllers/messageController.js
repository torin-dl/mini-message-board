const db = require("../db/queries");

function addMessageGet(req, res) {
    res.render("form");
}

async function addMessagePost(req, res) {
    await db.addMessage(req.body.messageText, req.body.messageUser, new Date());
    res.redirect("/");
}

async function showMessages(req, res) {
    const messages = await db.getMessages();
    res.render("index", { title: "Mini Message Board", messages: messages });
}

module.exports = {
    addMessageGet,
    addMessagePost,
    showMessages,
};
