import * as fs from 'fs';
import * as readline from 'readline';

export async function readAoCInputFiles(filePath: string): Promise<string[]> {
    var data: string[] = [];

    try {
      const fileStream = fs.createReadStream(filePath);
      const lineReader = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      });
  
      for await (const line of lineReader) {
        data.push(line.toString());
      }
    } catch (err) {
      console.error('Error reading the file:', err);
    }

    return data;
  }
  