import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';

import CustomLink from '@components/customLink';

export default function Markdown({ markdown }) {

  // Convert the Markdown into React
  const content = unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        // Use CustomLink instead of <a>
        a: CustomLink,
      },
    })
    .processSync(markdown).result;

  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
      {content}
    </div>
  );
}