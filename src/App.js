import Texto from './componentes/texto'
import Paragrafo from './componentes/paragrafo'
function App() {
     
    return(
        <div>
            <h1>COMENTÁRIOS</h1>
            <p>COMENTÁRIO 1</p>
            <Texto  data ="05/06/2023" />
            <Paragrafo autor = "Estevão Ferreira"/>            
        </div>
    )
}
export default App
