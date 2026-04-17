const pool = require("./pool");

//add message function (insert message to table)
async function addMessage(text, user, date) {
    await pool.query("INSERT INTO messages (text, username, date) VALUES ($1, $2, $3)", [text, user, date]);
}

async function getMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

module.exports = {
    addMessage,
    getMessages,
};
