export const ensureHttpPrefix = (inputUrl: string): string  => {
  const httpPrefixRegex = new RegExp('^https?:\\/\\/', 'i');
  if (!httpPrefixRegex.test(inputUrl)) {
    return `https://${inputUrl}`;
  }
  return inputUrl;
}