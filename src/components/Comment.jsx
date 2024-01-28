import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { useState } from "react";

 function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment (){
    onDeleteComment(content)
  }

  function handleLikeComment () {
    setLikeCount(likeCount+1)
  }

  return (
    <div className={styles.comment}>
      <img src="https://github.com/leonardomperes.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Peres</strong>

              <time
                className={styles.time}
                title="11 de Maio ás 08:13h"
                dateTime="2022-05-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
              </div>
              <button onClick={handleDeleteComment} title="Deletar comnetário">
                <Trash size={24}/>
              </button>
            
          </header>
          <p>{content}</p>
        </div>
        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp />
                Aplaudir <span>{likeCount}</span> 
            </button>
        </footer>
      </div>
    </div>
  );
}
export {Comment};