import styles from './styles.module.css'

export function Footer() {
    return(
        <>
        <footer>
            <div className={styles.container}>
                <p className={styles.textoFooter}>&copy; 2025 - Todos os direitos reservados.</p>
            </div>
        </footer>
        </>
    );
}