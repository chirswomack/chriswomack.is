import { useEffect } from 'react';

import Head from 'next/head';

import PostPreview from '@components/PostPreview';

export default function Admin() {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();
      CMS.registerPreviewStyle("/admin/main.css");
      CMS.registerPreviewTemplate('posts', PostPreview);
    })();
  }, []);

  return (
    <>
        <Head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <div />
    </>
  );
}