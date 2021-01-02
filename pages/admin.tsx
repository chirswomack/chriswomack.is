import { useEffect } from 'react';

import ArticlePreview from '@components/articlePreview';

export default function Admin() {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();
      CMS.registerPreviewTemplate('article', ArticlePreview);
    })();
  }, []);

  return <div />;
}