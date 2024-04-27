import fs from 'fs';
import path from 'path';
import { execFile } from 'child_process';
import util from 'util';

const execFilePromise = util.promisify(execFile);

export const loadEPSFile = async (filePath) => {
  try {
    const outputPath = path.resolve(path.dirname(filePath), 'output.png');

    // Use ImageMagick to convert the EPS file to PNG
    await execFilePromise('convert', [filePath, outputPath]);

    // Read the converted PNG file
    const fileContent = await fs.promises.readFile(outputPath);
    const base64Image = Buffer.from(fileContent).toString('base64');

    return `data:image/png;base64,${base64Image}`;
  } catch (error) {
    console.error('Error converting EPS file:', error);
    throw error;
  }
};
