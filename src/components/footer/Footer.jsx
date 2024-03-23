import REACT from './img/react.png'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer>
            <hr className={styles.linha} />

            <div className={styles.footer}>

                <div className={styles.info_portifolio}>
                    <p>Technologies used in this portifolio: </p>
                    <div className={styles.tecnologias}>
                        <img className={styles.tecnologia} src={REACT} alt="logo react" />
                    </div>
                </div>

                <div className={styles.copy}>
                    <p>&copy; 2024 NDIZEYE Patrick</p>
                </div>
            </div>


        </footer>
    )
}