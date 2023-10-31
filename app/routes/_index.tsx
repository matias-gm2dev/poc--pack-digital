import {useLoaderData} from '@remix-run/react';
import {defer, LoaderArgs} from '@shopify/remix-oxygen';
import {AnalyticsPageType} from '@shopify/hydrogen';
import {RenderSections, useSiteSettings} from '@pack/react';
import * as reactpack from '@pack/react';
import {PackClient} from '@pack/client';

export function meta({data}: any) {
  return [
    {title: data?.page?.title ?? 'Pack Hydrogen Demo'},
    {description: data?.page?.description},
  ];
}

export async function loader({context}: LoaderArgs) {
  const {data} = await context.pack.query(HOME_PAGE_QUERY);
  const analytics = {pageType: AnalyticsPageType.home};

  return defer({
    page: data.page,
    analytics,
  });
}

export default function Index() {
  const {page} = useLoaderData();
  const settings = useSiteSettings();
  // const page_ = usePage();
  console.log(page);

  return (
    <div className="grid gap-4">
      Hola Mundo
      <RenderSections content={page} />
    </div>
  );
}

const SECTION_FRAGMENT = `#graphql
fragment section on Section {
  id
  title
  status
  data
  publishedAt
  createdAt
  updatedAt
  parentContentType
}
`;

const HOME_PAGE_QUERY = `#graphql
query HomePage($version: Version, $cursor: String) {
  page: pageByHandle(handle: "/", version: $version) {
    id
    title
    handle
    description
    status
    seo {
      title
      description
      image
      keywords
      noFollow
      noIndex
    }
    sections(first: 25, after: $cursor) {
      nodes {
        ...section
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
    template {
      id
      title
      type
      status
      publishedAt
      createdAt
      updatedAt
    }
    publishedAt
    createdAt
    updatedAt
  }
}
${SECTION_FRAGMENT}
`;
