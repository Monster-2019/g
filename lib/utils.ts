import fs from "fs/promises";
import path from "path";

export const getJson = async (filePath: string) => {
  try {
    console.log(process.cwd());
    console.log(path.join(process.cwd(), filePath));
    const jsonString: string = await fs.readFile(
      path.join(process.cwd(), filePath),
      "utf8",
    );
    return JSON.parse(jsonString);
  } catch {
    return {};
  }
};
