import './portadaJuego.css';

import { Link } from 'react-router-dom';


function PortadaJuego({ juego }) {

    const imgUrl = './assets' + juego.pantalla_presentacion

    return (
        <li className='portadaJuego'>
            <Link to={`/juego/${juego.id}`}><img className='portadaImagen' src={imgUrl} alt={juego.titulo} title={juego.titulo} /></Link>
            <div>{juego.titulo}</div>
        </li>

    )

}

export default PortadaJuego;