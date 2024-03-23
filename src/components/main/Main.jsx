import Apresentaçao from "./apresentacao/Apresentaçao";
import Sobre from "./sobre/Sobre";
import Habilidades from "./habilidades/Habilidades";
import Contatos from "./contatos/Contatos";

import styles from './Main.module.css'

export default function Main() {
    return (
        <main className={styles.main}>
            <Apresentaçao></Apresentaçao>
            <Sobre></Sobre>
            <Habilidades></Habilidades>
            <Contatos></Contatos>
        </main>
    )
}