const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const validateMessage = [body("messageText").trim(), body("messageUser").trim()];

function addMessageGet(req, res) {
    res.render("form");
}

const addMessagePost = [
    validateMessage,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", {
                errors: errors.array(),
            });
        }

        const { messageText, messageUser } = matchedData(req);
        await db.addMessage(messageText, messageUser, new Date());
        res.redirect("/");
    },
];

async function showMessages(req, res) {
    const messages = await db.getMessages();
    res.render("index", { title: "Mini Message Board", messages: messages });
}

module.exports = {
    addMessageGet,
    addMessagePost,
    showMessages,
};
