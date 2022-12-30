
import PortadaJuego from './portadaJuego';
import juegos from '../juegos.json';
import './presentacionJuegos.css';
import PiePagina from './piePagina';

function presentacionJuegos() {
    return (
        <>
        <h3><p>Una lista en constante crecimiento de videojuegos argentinos de ayer y de hoy, para no parar de nostalgiar.</p><p>Hacé clic en cualquier título para ver los detalles:</p></h3>
        <ul className='presentacion-juego'>

            {juegos.map((juego) => (
                <PortadaJuego key={juego.id} juego={juego} />
            ))
            }

        </ul>
        <PiePagina creador="©2022-2023 -  Desarrollada por Gabriel Pescio con ❤️ y 🧠"></PiePagina>
        </>
    );
}

export default presentacionJuegos;