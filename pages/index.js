import { useState } from "react";

function Home() {
    return (
        <div>
            <h4>Página inicial</h4>

            <Contador />

            nova branch Teste
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}


export default Home;