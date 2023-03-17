export type Url = {
  shortUrl: string;
};

export type ShortenerFormValues = {
  urlToShorten: string;
};

export type UrlUsageCount = Url & {
  usageCount: number;
};

export type UrlUsageFormValues = Url;