import HTML from './img/html.png'
import CSS from './img/css.png'
import JAVASCRIPT from './img/javascript.png'
import REACT from './img/react.png'
import VITE from './img/vite.png'
import VSCODE from './img/vscode.png'
import GIT from './img/git.png'
import GITHUB from './img/github.png'
import TAILWIND from './img/tailwind.png'
import PYTHON from './img/python.png'
import NODE from './img/node.png'
import PHP from './img/php.png'
import styles from './Habilidades.module.css'

export default function Habilidades() {
    return (
        <section id="habilidades" className={styles.habilidades}>
            <h3 className={styles.titulo}>Skills</h3>
            <div className={styles.tecnologias}>
                
                <div className={styles.tecnologia}>
                    <img className={styles.img_html} src={HTML} alt="logo html" />
                    <p>HTML</p>
                    <span className={styles.animaçao_html}></span>
                </div>

                <div className={styles.tecnologia}>
                    <img className={styles.img_css} src={CSS} alt="logo css" />
                    <p>CSS</p>
                    <span className={styles.animaçao_css}></span>
                </div>

                <div className={styles.tecnologia}>
                    <img className={styles.img_js} src={JAVASCRIPT} alt="logo javascript" />
                    <p>JavaScript</p>
                    <span className={styles.animaçao_js}></span>
                </div>

                <div className={styles.tecnologia}>
                    <img className={styles.img_react} src={REACT} alt="logo react.js" />
                    <p>React.js</p>
                    <span className={styles.animaçao_react}></span>
                </div>

                <div className={styles.tecnologia}>
                    <img className={styles.img_tailwind} src={TAILWIND} alt="logo tailwind" />
                    <p>Tailwind</p>
                    <span className={styles.animaçao_tailwind}></span>
                </div>
                
                <div className={styles.tecnologia}>
                    <img className={styles.img_vite} src={VITE} alt="logo vite" />
                    <p>Vite</p>
                    <span className={styles.animaçao_vite}></span>
                </div>

                <div className={styles.tecnologia}>
                    <img className={styles.img_git} src={GIT} alt="logo git" />
                    <p>Git</p>
                    <span className={styles.animaçao_git}></span>
                </div>

                <div className={styles.tecnologia}>
                    <img className={styles.img_github} src={GITHUB} alt="logo github" />
                    <p>GitHub</p>
                    <span className={styles.animaçao_github}></span>
                </div>

                <div className={styles.tecnologia}>
                    <img className={styles.img_vscode} src={VSCODE} alt="logo vscode" />
                    <p>VS Code</p>
                    <span className={styles.animaçao_vscode}></span>
                </div>

                <div className={styles.tecnologia}>
                    <img className={styles.img_git} src={PYTHON} alt="logo git" />
                    <p>Python</p>
                    <span className={styles.animaçao_git}></span>
                </div>

                <div className={styles.tecnologia}>
                    <img className={styles.img_github} src={PHP} alt="logo github" />
                    <p>PHP</p>
                    <span className={styles.animaçao_github}></span>
                </div>

                <div className={styles.tecnologia}>
                    <img className={styles.img_vscode} src={NODE} alt="logo vscode" />
                    <p>NODE JS</p>
                    <span className={styles.animaçao_vscode}></span>
                </div>

            </div>
        </section>
    )
}