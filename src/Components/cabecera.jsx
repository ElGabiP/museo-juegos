import './cabecera.css'
import { Link } from 'react-router-dom';

function cabecera() {

    return (<div className='titulo'><Link to='/'>
        <h1 className='glitch' data-text="El Museo del Jueguito Argento">El Museo del Jueguito Argento</h1>
        <h4>Los videojuegos made in acá</h4>
    </Link></div>
    )
}

export default cabecera;