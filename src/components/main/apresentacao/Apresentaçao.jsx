import Dev from './img/dev.png'

import styles from './Apresentaçao.module.css'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Apresentaçao() {
    return (
        <section className={styles.apresentaçao}>
            <div className={styles.texto}>
                <p>the name</p>
                <h1 className={styles.nome}>NDIZEYE Patrick.</h1>
                <h2 className={styles.profissao}>
                    Full stack developer.
                </h2>
                <div className={styles.contatos}>
                    <a href="https://github.com/ndizeye-patrick" target='blanck'>
                        <FaGithub className={styles.contato} />
                    </a>
                    <a href="https://rw.linkedin.com/in/ndizeye-patrick-76718222a" target='blanck'>
                        <FaLinkedin className={styles.contato} />
                    </a>
                </div>
            </div>
            <img className={styles.dev} src={Dev} alt="dev" />
        </section>
    )
}