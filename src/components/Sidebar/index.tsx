import { Avatar } from "../Avatar";
import { PencilLine } from "phosphor-react";

import styles from "./styles.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1608889175638-9322300c46e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar
          src="https://github.com/gustavo-nt.png"
          alt="Imagem de perfil"
        />

        <strong>Gustavo Teixeira</strong>
        <span>Front-End Developer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
