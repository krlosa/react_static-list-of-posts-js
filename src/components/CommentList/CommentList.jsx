import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments = [] }) => (
  <div className="CommentList">
    {/* Se não houver comentários, mostra uma mensagem de estado vazio */}
    {comments.length === 0 ? (
      <div data-cy="NoCommentsMessage">There are no comments yet</div>
    ) : (
      // Renderiza cada comentário como um item individual.
      comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    )}
  </div>
);
