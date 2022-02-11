export function getImgFromPublic(lowerDirectory: string): string {
  const imgSrc = process.env.PUBLIC_URL + lowerDirectory;
  return imgSrc;
}
