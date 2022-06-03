export function isImagePath(src: string) {
  const modifySrc = src.toLowerCase();
  const isCorrectPath =
    modifySrc.includes(".png") ||
    modifySrc.includes(".jpg") ||
    modifySrc.includes(".jpeg");
  return isCorrectPath;
}
