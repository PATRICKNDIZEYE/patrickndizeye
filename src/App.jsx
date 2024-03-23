import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { BsArrowUpSquareFill } from "react-icons/bs";

function App() {

  window.addEventListener("scroll",()=>{
    const botao = document.getElementsByClassName("voltar")

    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
      botao[0].style.display = "block"
    }else{
      botao[0].style.display = "none"
    }
    
  })


  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>

      <a href="#home">
        <BsArrowUpSquareFill className="voltar" />
      </a>
    </>
  )
}

export default App