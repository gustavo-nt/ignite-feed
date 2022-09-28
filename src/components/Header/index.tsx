import igniteLogo from "../../assets/ignite-logo.svg";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <strong className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </strong>
  );
}
