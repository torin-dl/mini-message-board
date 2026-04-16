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
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
