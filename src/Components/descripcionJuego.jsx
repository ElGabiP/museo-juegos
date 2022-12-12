
import PerfilJuego from './perfilJuego'
import juegos from '../juegos.json';
import './descripcionJuego.css';

function DescripcionJuego() {

    return (
        <ul className='perfil-juego'>

            {juegos.map((juego) => (
                <PerfilJuego key={juego.id} juego={juego}/>
            ))
            }

        </ul>
    );
}

export default DescripcionJuego;