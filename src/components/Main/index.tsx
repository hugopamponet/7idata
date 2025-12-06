import styles from './styles.module.css'

export function Main() {
    return(
        <>
        <main>
            <div className={styles.containeir}>
                <div className={styles.escolherEmpresa}>
                    <h1>Por que escolher a 7iData?</h1>
                    <p>Na 7iData entregamos soluções inteligentes em infraestrutura</p>
                        <p>e tecnologia para impulsionar o crescimento da sua empresa</p>
                </div>
                <h1 className={styles.titulo}>Nossos Serviços</h1>
                <div className={styles.servicosOferecidos}>
                    <div className={styles.infraestrutura}>
                        <img src="image/infraestrutura.png" alt="Infraestrutura" className={styles.foto} />
                        <h2>Infraestrutura de Redes</h2>
                        <p>Planejamos, implementamos e otimizamos a sua rede para garantir alta performasse e segurança.</p>
                    </div>
                    <div className={styles.consultoria}>
                        <img src="image/consultoria.png" alt="Consultoria de TI" className={styles.foto} />
                        <h2>Consultoria em TI</h2>
                        <p>Oferecemos assessoria especializada para melhorar a eficiência e produtividade da sua empresa.</p>
                    </div>
                    <div className={styles.suporte}>
                        <img src="image/suporte.png" alt="Suporte Técnico" className={styles.foto} />
                        <h2>Suporte Técnico</h2>
                        <p>Suporte rápido e eficiente para resolver problemas e garantir continuidade dos serviços.</p>
                    </div>
                </div>
                <div className={styles.entrarContato}>
                    <div className="convite">
                        <h1 className={styles.tituloConvite}>Vamos Conversar?</h1>
                        <p>Entre em contato para saber como a 7iData pode melhorar a rede e a infraestrutura de TI da sua empresa.</p>
                        <button className={styles.buttonComunicacao}>Fale conosco</button>
                    </div>
                    <div className={styles.imgConvite}>
                        <img src="image/EntrarContato.png" alt="Entrar em contato" />
                    </div>
                    
                </div>
            </div>
        </main>
        </>
    );
}