import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, message } = req.body;
      const newFeedback = {
        id: new Date().toISOString(),
        email,
        message
      };
      
      const filePath = path.join(process.cwd(), "_data", "db.json");
      const fileData = fs.readFileSync(filePath);
      const data = JSON.parse(fileData);
      data.push(newFeedback);
      fs.writeFileSync(filePath, JSON.stringify(data));
      
      res.status(201).json({ status: "success", feedback: newFeedback });
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
