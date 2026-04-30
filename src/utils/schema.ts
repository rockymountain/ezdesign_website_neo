import siteConfig from '../data/site.json';

type BreadcrumbItem = {
  name: string;
  url: string;
};

type ServiceSchemaInput = {
  name: string;
  description: string;
  url: string;
  image?: string;
};

type ArticleSchemaInput = {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
};

function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http')) return pathOrUrl;

  const siteUrl = siteConfig.url.replace(/\/$/, '');
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;

  return `${siteUrl}${path}`;
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl('/favicon.svg'),
    description: siteConfig.description,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: siteConfig.contact.email,
        contactType: 'customer support',
        availableLanguage: ['vi'],
      },
    ],
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    description: siteConfig.description,
  };
}

export function buildServiceSchema(input: ServiceSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    image: input.image ? absoluteUrl(input.image) : undefined,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam',
    },
    serviceType: input.name,
  };
}

export function buildArticleSchema(input: ArticleSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    url: absoluteUrl(input.url),
    image: input.image ? absoluteUrl(input.image) : undefined,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/favicon.svg'),
      },
    },
    inLanguage: siteConfig.language,
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function stringifyJsonLd(schema: unknown) {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}