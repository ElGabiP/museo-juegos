import './perfilJuego.css';
import { Link, useParams } from 'react-router-dom';

function PerfilJuego({ juego }) {
    const { identificador } = useParams();
    const imgUrl = '../assets' + juego.pantalla_presentacion;
    const capturaUrl = '../assets' + juego.captura_pantalla;

    if (juego.id==Number(identificador)){


    return (
        <li className='fichaJuego'>
            <img className='fichaImagen' src={imgUrl} alt={juego.titulo} title={juego.titulo} />
            <img className='fichaImagen' src={capturaUrl} alt={juego.titulo} title={juego.titulo} />
            <div><table>
            <caption>{juego.titulo}</caption>
	<tbody>
		<tr>
			<td colspan="2">{juego.descripcion}</td>
		</tr>
		<tr>
			<th>Fecha de publicación:</th>
			<td>{juego.fecha_publicacion}</td>
		</tr>
		<tr>
			<th>Plataformas:</th>
			<td>{juego.plataforma.join(' - ')}</td>
		</tr>
		<tr>
			<th>Desarrollador:</th>
			<td>{juego.desarrollador}</td>
		</tr>
		<tr>
			<th>Sito web:</th>
			<td><a href={juego.web} target="_blank">Visitar</a></td>
		</tr>
	</tbody>
</table><Link to="..">
      Volver
    </Link></div>
        </li>

    )}
    else {
        return (
            <li className='fichaJuego-secundario'>
                <img className='fichaImagen' src={imgUrl} alt={juego.titulo} />
            </li>
    
        )

    }

}

export default PerfilJuego;