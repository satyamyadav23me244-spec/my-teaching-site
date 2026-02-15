import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '37f06c5dd0d1497e9ee0e3f1aeeb21d9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Satyam Yadav - Physics & Code',
  domain: 'my-teaching-site.vercel.app',
  author: 'Satyam Yadav',

  // open graph metadata (optional)
  description: 'Physics educator and developer portfolio',

  // social usernames (optional)
  twitter: '23_24459474',
  github: 'satyamyadav23me244-spec',
  linkedin: 'satyam-yadav-dtu',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://www.notion.so/image/attachment%3A986e0bde-a89a-4ca3-9b22-e8f81c965a81%3Aavatar.jpg?table=block&id=57766048-5817-4d6d-876f-ec71f4276937&spaceId=fde5ac74-eea3-4527-8f67-76419856346b&width=250&userId=&cache=v2',
  defaultPageCover: 'https://www.notion.so/image/attachment%3A78855faa-31f0-466a-bc3f-7e04f08e5c33%3Acover.jpg?table=block&id=57766048-5817-4d6d-876f-ec71f4276937&spaceId=fde5ac74-eea3-4527-8f67-76419856346b&width=2000&userId=&cache=v2',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default',
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ],
  isSearchEnabled: false
})
