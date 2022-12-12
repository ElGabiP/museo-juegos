
import PortadaJuego from './portadaJuego';
import juegos from '../juegos.json';
import './presentacionJuegos.css';
import PiePagina from './piePagina';

function presentacionJuegos() {
    return (
        <>
        <ul className='presentacion-juego'>

            {juegos.map((juego) => (
                <PortadaJuego key={juego.id} juego={juego} />
            ))
            }

        </ul>
        <PiePagina creador="©2022 -  Desarrollada por Gabriel Pescio con ❤️ y 🧠"></PiePagina>
        </>
    );
}

export default presentacionJuegos;