import { useState } from "react"
import "./app.css"

function App() {
  const urls = [
    'image1.png',
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png'
  ]

  const [texto, setTexto] = useState("")

  const discover = () => {
    const container = document.getElementById("container") as HTMLElement
    container.style.setProperty("--opacity", "0")
    setTexto("Sim, a 8ª maravilha do mundo é você! 😍")
    document.getElementById("button")?.style.setProperty("display", "none")
  }

  return (
    <main>
      <div id="container">
        <div id="carrousel">
          {urls.map((url, index) => (
            <div key={index} className="images" style={{ "--image": `./url(${url})` } as React.CSSProperties}></div>
          ))}
        </div>
      </div>
      {texto ? (<p>{texto}</p>) : null}
      <button id="button" onClick={discover}>Aperte aqui pra descobrir a 8ª maravilha do mundo!</button>
    </main>
  )
}

export default App
