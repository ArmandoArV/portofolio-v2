import { NextApiRequest, NextApiResponse } from "next";
import { loadLanguages } from "@/app/utils/loadLanguages"; // Import your function

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const languages = loadLanguages(); // Get the list of languages
    res.status(200).json(languages);
  } catch (error) {
    res.status(500).json({ error: "Error loading languages" });
  }
}
