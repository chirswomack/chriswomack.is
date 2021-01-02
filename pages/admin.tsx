import { useEffect } from 'react';

import PostPreview from '@components/PostPreview';

export default function Admin() {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();
      CMS.registerPreviewStyle("/global.css");
      CMS.registerPreviewTemplate('posts', PostPreview);
    })();
  }, []);

  return <div />;
}