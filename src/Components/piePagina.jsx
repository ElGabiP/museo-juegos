import './piePagina.css'

function PiePagina({creador}) {

    return (<div className="pie-pagina"><p>{creador}</p>
    <p className="licencia">  -  <a rel="license" href="http://creativecommons.org/licenses/by/2.5/ar/"><img alt="Licencia Creative Commons" src="https://i.creativecommons.org/l/by/2.5/ar/80x15.png" target="_blank"/></a> Esta obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by/2.5/ar/">Licencia Creative Commons Atribución 2.5 Argentina</a>.</p></div>
    )
}

export default PiePagina;