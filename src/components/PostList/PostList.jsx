import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {/* Renderiza um card de post para cada elemento da lista */}
    {posts.map(post => {
      // Se não houver usuário associado, não renderiza esse post.
      if (!post.user) return null;

      return (
        // O elemento raiz do map recebe a key, não o componente interno.
        <div key={post.id} className="PostList__item">
          <PostInfo post={post} />
        </div>
      );
    })}
  </div>
);
