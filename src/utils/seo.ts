import siteConfig from '../data/site.json';

type BuildTitleOptions = {
  title?: string;
  includeSiteName?: boolean;
};

export function buildTitle({ title, includeSiteName = true }: BuildTitleOptions = {}) {
  if (!title) return siteConfig.defaultTitle;
  return includeSiteName ? `${title} | ${siteConfig.name}` : title;
}

export function buildCanonical(pathname = '/') {
  const baseUrl = siteConfig.url.replace(/\/$/, '');
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;

  return `${baseUrl}${path}`;
}