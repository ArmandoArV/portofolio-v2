import fs from "fs";
import path from "path";

export const loadLanguages = (): { label: string; name: string }[] => {
  const languagesDir = path.join(process.cwd(), "src/app/languageJsons");
  const files = fs.readdirSync(languagesDir);

  return files
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const label = file.replace(".json", "");
      const filePath = path.join(languagesDir, file);
      const languageData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      return {
        label,
        name: languageData.languageName || label, // Fallback to label if name is missing
      };
    });
};
