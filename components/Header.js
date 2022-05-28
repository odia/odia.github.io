import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <img src="/static/images/isotipo.png" alt="O.D.I.A." />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Observatorio de Derecho<br aria-hidden="true" />Informático Argentino</h1>
                <p>Ámbito de intercambio y aprendizaje mutuo entre abogades e informátiques.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><button onClick={(ev) => {ev.preventDefault();props.onOpenArticle('quienes_somos')}}>&iquest;Quiénes somos?</button></li>
                <li><button onClick={(ev) => {ev.preventDefault();props.onOpenArticle('trabajo')}}>Nuestro trabajo</button></li>
                <li><button onClick={(ev) => {ev.preventDefault();props.onOpenArticle('debates')}}>Debates</button></li>
                <li><button onClick={(ev) => {ev.preventDefault();props.onOpenArticle('colaboracion')}}>Colaboración</button></li>
                <li><button onClick={(ev) => {ev.preventDefault();location.href="https://marca.odia.legal/"}}>Marca</button></li>
                <li><button onClick={(ev) => {ev.preventDefault();props.onOpenArticle('redes_sociales')}}>Redes Sociales</button></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
