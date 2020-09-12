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
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    const render = (text) => <ReactMarkdown source={text} renderers={{heading: (props) => React.createElement(`h${props.level+1}`, props.level === 1 ? {className: 'major'} : {}, props.children)}} />

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="quienes_somos" className={`${this.props.article === 'quienes_somos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          {render(QuienesSomos)}
          {close}
        </article>

        <article id="trabajo" className={`${this.props.article === 'trabajo' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          {render(Trabajo)}
          {close}
        </article>

        <article id="debates" className={`${this.props.article === 'debates' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          {render(Debates)}
          {close}
        </article>

        <article id="colaboracion" className={`${this.props.article === 'colaboracion' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          {render(Colaboracion)}
          {close}
        </article>
        <article id="redes_sociales" className={`${this.props.article === 'redes_sociales' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Redes Sociales</h2>
          <ul className="icons">
            <li><a href="https://twitter.com/odiaasoc" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="https://www.facebook.com/ODIAasoc" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="https://www.linkedin.com/company/odiaasoc/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a></li>
            <li><a href="https://github.com/odia/" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
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
