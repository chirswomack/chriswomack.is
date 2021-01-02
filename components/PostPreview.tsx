import Post from './Post';

export default function PostPreview({ entry }) {
    const title = entry.getIn(['data', 'title']);
    const date = entry.getIn(['data', 'date']);
    const body = entry.getIn(['data', 'body']);
    const postData = { title, date, content: body };

    return (
        <Post {...postData} />
    );
}