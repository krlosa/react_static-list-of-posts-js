import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts, comments, users }) => (
  <div className="PostList">
    {posts.map(post => {
      const postUser = users.find(u => u.id === post.userId);

      if (!postUser) return null;

      return (
        <PostInfo
          key={post.id}
          post={post}
          comments={comments}
          user={postUser}
        />
      );
    })}
  </div>
);
