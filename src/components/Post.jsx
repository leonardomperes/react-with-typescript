import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

function Post({ author, publishAt, content }) {
  const [comments, setComments] = useState(['Post muito top'])

  const [newCommentText, setNewCommentText] = useState('')
  const publishedDateFormatted = format(publishAt,"dd 'de' LLLL 'ás' HH:mm'h'",{locale: ptBR,});

  const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentChange(){
    setNewCommentText(event.target.value)
  }
  function handleNewComment(){
    event.preventDefault()
    setComments([...comments, newCommentText]) 
    setNewCommentText('')
  }
  function deleteComment (commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentsWithoutDeletedOne)
  }
  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const isNewCommentEmpty = newCommentText.length == 0;
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <p>{author.role}</p>
          </div>
        </div>

        <time
          className={styles.time}
          title={publishedDateFormatted}
          dateTime={publishAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
        onInvalid={handleNewCommentInvalid} 
        required
        placeholder="Deixe um comentário"
        name="comment"
        value={newCommentText}
        onChange={handleNewCommentChange}
        />

        <footer>  
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
       {comments.map((comment) =>{
        return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
       }
        )}
      </div>
    </article>
  );
}
export { Post };
