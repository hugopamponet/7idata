import styles from "./styles.module.css";

export function Header() {
  return (
    <>
      <header>
        <div className={styles.containerHeader}>
          <div className={styles.logo}>
            <img src="image/Logo.png" alt="Logo" className={styles.logoImg} />
            <h1 className={styles.textoLogo}>iData</h1>
          </div>
          <nav className={styles.menu}>
            <ul>
              <li>Inicio</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
          </nav>
        </div>
        <section>
          <div className={styles.containerMain}>
            <div className="texto">
              <h2 className={styles.titulo}>Soluções em infraestrutura de redes</h2>
              <h3 className={styles.subTitulo}>
                Estabilidade, segurança e desempenho para sua empresa
              </h3>
              <button className={styles.buttonComunicacao}>Fale conosco</button>
            </div>
            <img
              src="image/Switch.png"
              alt="Switch CISCO"
              className="switchLateral"
            />
          </div>
        </section>
      </header>
    </>
  );
}
