// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Airtable from "airtable";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(404).json({ error: "Not found" });

  const baseId = "appiOdXce8OyHNUH3";
  const tableName = "Contact";

  const db = Airtable.base(baseId);
  const table = db(tableName);

  const record = await table.create({
    Name: req.body.name,
    Email: req.body.email,
    Message: req.body.message,
  });

  res.status(200).json(record.fields);
}
