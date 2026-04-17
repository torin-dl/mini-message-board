const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  text VARCHAR ( 255 ),
  username VARCHAR ( 255 ),
  date TIMESTAMP
);

INSERT INTO messages (text, username, date) 
VALUES
  ('Hi there!', 'Amando', NOW()),
  ('Hello World!', 'Charles', NOW());
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString:
            "postgresql://postgres:fCEqaWfSIHmsCEmoseCYuYRxJWNfcbSq@centerbeam.proxy.rlwy.net:52929/railway",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
