import Fala from './img/fala.png'

import styles from './Sobre.module.css'

export default function Sobre() {
    return (
        <section id="sobremim" className={styles.sobreMim}>
            <h3 className={styles.titulo}>About me</h3>
            <div className={styles.img_texto}>
                <img className={styles.fala} src={Fala} alt="fala" />
                <div className={styles.paragrafos}>
                    
                    <p className={styles.paragrafo}>
                        Hey i am ! <strong>NDIZEYE Patrick</strong>, i am <strong>fullstack developer</strong> i  have 1+ years of experience in this area .i have learned from excellent tutors accross the globe via online courses and youtube videos i know <strong>Javascript</strong>, <strong>Python , PHP , Dart , </strong> and enough frameworks for better products like <strong> React.js , VUE , Laravel , Django , Next , ...</strong>
                    </p>

                    <p className={styles.paragrafo}>
                    I thrive on the pulse of technology, diving deep into the intricacies, and exploring the mechanics behind how things operate. My insatiable curiosity drives me to unravel the mysteries of programming, a journey that began with the web. Though the path was challenging at first, I've embraced each hurdle as an opportunity to evolve. Every day, I grow stronger, more proficient, and more adept at crafting innovative solutions.
                    </p>

                </div>
            </div>
        </section>
    )
}
