import React from 'react';
import ReactMarkdown from "react-markdown";

import QuienesSomos from '/markdown/quienes_somos.md';
import Trabajo from '/markdown/trabajo.md';
import Debates from '/markdown/debates.md';
import Colaboracion from '/markdown/colaboracion.md';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faMedium from '@fortawesome/fontawesome-free-brands/faMedium'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faTelegram from '@fortawesome/fontawesome-free-brands/faTelegram'


class Main extends React.Component {
  render() {

    let close = <button className="close" onClick={() => {this.props.onCloseArticle()}} aria-label="Cerrar" role="button"></button>
    const render = (text) => <ReactMarkdown source={text} renderers={{
        heading: (props) => React.createElement(`h${props.level+1}`, props.level === 1 ? {className: 'major'} : {}, props.children),
        image: (props) => React.createElement('img', {'alt': props.alt || '', 'src': props.src}, props.children),
    }} />

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="quienes_somos" className={`${this.props.article === 'quienes_somos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          {close}
          {render(QuienesSomos)}
        </article>

        <article id="trabajo" className={`${this.props.article === 'trabajo' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          {close}
          {render(Trabajo)}
        </article>

        <article id="debates" className={`${this.props.article === 'debates' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          {close}
          {render(Debates)}
        </article>

        <article id="colaboracion" className={`${this.props.article === 'colaboracion' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          {close}
          {render(Colaboracion)}
        </article>
        <article id="redes_sociales" className={`${this.props.article === 'redes_sociales' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Redes Sociales</h2>
          <ul className="icons">
            <li><a href="https://instagram.com/odiaasoc" target="_blank">
              <FontAwesomeIcon icon={faInstagram} aria-label="instagram" />
            </a></li>
            <li><a href="https://twitter.com/odiaasoc" target="_blank">
              <FontAwesomeIcon icon={faTwitter} aria-label="twitter" />
            </a></li>
            <li><a href="https://www.facebook.com/ODIAasoc" target="_blank">
              <FontAwesomeIcon icon={faFacebook} aria-label="facebook" />
            </a></li>
            <li><a href="https://www.linkedin.com/company/odiaasoc/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} aria-label="linkedin" />
            </a></li>
            <li><a href="https://medium.com/@odiaasoc" target="_blank">
              <FontAwesomeIcon icon={faMedium} aria-label="medium" />
            </a></li>
            <li><a href="https://github.com/odia/" target="_blank">
              <FontAwesomeIcon icon={faGithub} aria-label="github" />
            </a></li>
            <li><a href="https://t.me/odiaasoc" target="_blank">
              <FontAwesomeIcon icon={faTelegram} aria-label="telegram" />
            </a></li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main
