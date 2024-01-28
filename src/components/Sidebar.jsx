import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1705905272120-70576178b4d3?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/leonardomperes.png"/>
        <strong>Leonardo Peres</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
        <PencilLine size={20}/>
            Editar Perfil</a>
      </footer>
    </aside>
  );
}
