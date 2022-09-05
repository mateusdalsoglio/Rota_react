import { useParams } from 'react-router-dom';

function Produto(){

    const {id} = useParams();

    return(
        <div>
            <h2>Pagina detalhe do produto</h2>
            <strong>Meu Produto é {id}</strong>
        </div>
    )
}

export default Produto;