import fs from 'fs';
import path from "path";

const folderPath = "src/content/docs/guides/"
const absolutePath = path.join(process.cwd(), folderPath)

type FileObject = {
  label: string
  slug: string
}

export function getFilesInGuidesFolder(): FileObject[] {
  const fileNames: FileObject[] = [];

  // Read the contents of the folder
  const files = fs.readdirSync(absolutePath);

  // Iterate over each file
  files.forEach((file) => {
    // Get the full path of the file
    const filePath = `${absolutePath}/${file}`;

    // Check if the path points to a file (not a directory)
    if (fs.statSync(filePath).isFile()) {
      const fileName = file.replaceAll(".md", "")
      const fileToPush: FileObject = {
        label: fileName.replaceAll("-", " "),
        slug: "guides/" + fileName

      }
      fileNames.push(fileToPush);
    }
  });

  return fileNames;
}

type PrevAndNext = {
  prev: FileObject | null;
  next: FileObject | null;
}

export function getPrevAndNextPath(currentSlug: string | undefined): PrevAndNext {
  const allGuidesFiles = getFilesInGuidesFolder();
  const currentIndex = allGuidesFiles.findIndex((file) => file.slug === currentSlug);
  let next = null;
  let prev = null;
  if (allGuidesFiles[currentIndex + 1]) {
    next = allGuidesFiles[currentIndex + 1];
  }
  if (allGuidesFiles[currentIndex - 1]) {
    prev = allGuidesFiles[currentIndex - 1];
  }
  return {
    next,
    prev
  }
}
