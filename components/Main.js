import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="quienes_somos" className={`${this.props.article === 'quienes_somos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">&iquest;Quiénes somos?</h2>
            <p>ODIA nace del cuestionamiento de los vínculos entre las personas y lo digital. Entendiendo que la ciudadanía no termina donde comienza una pantalla, nuestro compromiso está en investigar y actuar respecto de los derechos vulnerados por quienes sacan provecho del analfabetismo digital que la sociedad presenta.</p>
            <p>Este proyecto se inicia entre un grupo de personas conformado por profesionales del derecho y un grupo de profesionales de sistemas e informática. Sí, nosotres también pensábamos que eran dos mundos diferentes. </p>
            <p>Hoy ODIA cuenta con más de 20 profesionales y se está diversificando en sus ámbitos académicos. Es que el desarrollo y debate de una ciudadanía digital implica la participación de todas las áreas posibles.</p>
            <p>En ese sentido, entendemos que es necesario investigar con rigurosidad técnica todas las situaciones derivadas del uso de nuevas tecnologías y cómo estas afectan nuestras vidas diarias. De esa manera, se podrá tener un entendimiento acabado de las nuevas realidades digitales y podremos entendernos como ciudadanes en esta nueva “virtualidad”. </p>
            <p>Para ello hacemos litigio estratégico, brindamos conferencias, realizamos trabajos de investigación y hacemos proyectos para ayudar a la ciudadanía en general no solo a proteger sus derechos sino también a entenderlos y conocerlos.</p>
            <p>Te esperamos para debatir cuál es el mundo que hay detrás de esta pantalla.</p>
            <ul>
                <li><img src="/static/images/agustin-malpede.jpg" />Agustín Malpede</li>
                <li><img src="/static/images/cynthia-paola-acosta.jpg" />Cynthia Paola Acosta</li>
                <li><img src="/static/images/ezequiel-quaine.jpg" />Ezequiel Quaine</li>
                <li><img src="/static/images/guido-vilariño.jpg" />Guido Vilariño</li>
                <li><img src="/static/images/juan-ribera.jpg" />Juan Ribera</li>
                <li><img src="/static/images/marcela-pallero.jpg" />Marcela Pallero</li>
                <li><img src="/static/images/marina-flego-eiras.jpg" />Marina Flego Eiras</li>
                <li><img src="/static/images/martin-silva-valent.jpg" />Martín Silva Valent</li>
                <li><img src="/static/images/sebastian-waisbrot.jpg" />Sebastián Waisbrot</li>
                <li><img src="/static/images/tomas-pomar.jpg" />Tomás Pomar</li>
                <li><img src="/static/images/victor-atila-castillejo-arias.png" />Victor Atila Castillejo Arias</li>
            </ul>
          {close}
        </article>

        <article id="trabajo" className={`${this.props.article === 'trabajo' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Nuestro trabajo</h2>
          <h3>Reconocimiento facial</h3>
          <p>El 1/10/2019 ODIA presentó una solicitud de Acceso a la Información Pública (de ahora en más “AIP”) en los términos de la Ley 104 de la Ciudad de Buenos Aires contra el Gobierno de la Ciudad. Esto así porque de manera intempestiva, el Ministerio de Justicia y Seguridad de la CABA implementó un Sistema de Reconocimiento Facial de Prófugos (de ahora en más “SRFP”) en las calles de ciudad capitalina con la excusa de mantener a sus ciudadanos “seguros”. No obstante, para ello implementaron un SRFP que viola flagrantemente una cantidad verdaderamente impresionante de derechos personalísimos.</p>
          <p>En virtud de esta situación, realizamos la solicitud de AIP mencionada a efectos de saber más sobre el funcionamiento de esta nueva tecnología que ligeramente se puso en marcha en las calles de nuestra ciudad. Esperamos pacientemente la respuesta que no solo llegó en una fecha posterior a la exigida por ley sino que llegó extremadamente incompleta. Ante esta situación decidimos iniciar un proceso de Amparo ante la justicia de la Ciudad a efectos de obtener las respuestas completas.</p>
          <p>Sin embargo, a lo largo de esta aventura judicial para obtener información que se nos debió haber provisto desde un principio, obtuvimos mucha más información que, como veremos más adelante, nos ayudará a cumplir nuestro objetivo principal. Esto es, desconectar el SRFP implementado.</p>
          <p>De esta manera, descubrimos que el SRFP utiliza un sistema de encriptación para proteger la información que ya no es considerada segura por las empresas de tecnología más avanzadas. Así también logramos obtener información sobre la supuesta eficacia que tendría este sistema para reconocer a alguien en una lista y descubrimos que se encuentra muy por debajo del 95% alegado por las autoridades gubernamentales. Todo esto, entró una gran variedad de hallazgos que apoyan nuestra tesitura de que este SRFP es violatorio del Derecho a la Privacidad, a la Protección de nuestros Datos Personales, a la Autodeterminación Informativa y sobre todo violatorio de nuestra Constitución Nacional.</p>
          <p>Finalmente, el 6/11/2019 obtuvimos una sentencia de primera instancia que nos dió la razón y condenó al Gobierno de la Ciudad de Buenos Aires a que nos dieran la información solicitada. Sin embargo, esta sentencia se encuentra actualmente apelada y en la Cámara de Apelaciones del fuero Contencioso Administrativo a efectos de resolver las apelaciones intentadas por el GCBA.</p>
          <p>El próximo objetivo que tiene ODIA es presentar una nueva acción judicial a efectos de declarar la inconstitucionalidad de la implementación de este SRFP de manera inmediata. Por lo tanto, ¡estén atentos para las próximas noticias!</p>

          <h3>Acceso a la información App CUIDAR</h3>

          <p>Durante el Aislamiento Social Preventivo y Obligatorio por la epidemia de COVID-19, el Gobierno Nacional publicó la aplicación "CUID.AR" para monitorear el estado de salud de los ciudadanos y asistir en la obtención de permisos de circulación. Desde ODIA quisimos averiguar cómo funciona esta aplicación y cómo se guardan sus datos, que son considerados sensibles por su característica médica, demandando así una mayor protección.</p>
          <p>Por ello decidimos presentar el 30/07/2020 una solicitud de Acceso a la Información Pública en conformidad a la ley 27.275. El 03/08/2020 finalmente logramos obtener una respuesta a aquella solicitud. En una primera instancia también pudimos observar incumplimientos al Régimen Protectorio de los Datos Personales y descubrimos con preocupación que la mayoría de los datos se encuentran almacenados en servidores fuera del país, entre otras cosas. Sin embargo, hubieron varias preguntas que no fueron contestadas. Actualmente nos encontramos diseñando una estrategia para insistir con las preguntas que no fueron respondidas y estamos evaluando iniciar acciones legales por algunos puntos problemáticos.</p>
          {close}
        </article>

        <article id="debates" className={`${this.props.article === 'debates' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Debates</h2>
          <h3>Ciberpatrullaje</h3>
          <p>En abril del 2020, ODIA participó de una reunión con la Ministra de Seguridad de la Nación y varias otras asociaciones civiles que se dedican a la protección de los derechos humanos de las personas. En dicha reunión se nos invitó a realizar una discusión de lo que fue el primer proyecto de protocolo de “ciberpatrullaje” o “Protocolo para la Prevención Policial del Delito con Uso de Fuentes Digitales Abiertas” donde pudimos dar nuestra opinión y brindar recomendaciones que finalmente fueron tomadas en cuenta en el Protocolo aprobado por Resolución Ministerial N° 144 del 2020. Pueden ver en <a href="https://drive.google.com/file/d/11tiXJNCfyWi9ymLczhWfMn680nRpXgYu/view" target="_blank">este enlace</a> nuestras recomendaciones.</p>
          <img src="/static/images/ciberpatrullaje.jpeg" />
          <h3>La Desinformación como Distorsión Democrática ¿Qué podemos hacer?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget hendrerit felis. Sed vel nisl vel nisi pharetra porttitor. Fusce sodales nibh nisi, eu facilisis nulla ullamcorper quis. Nunc euismod, magna non rutrum blandit, felis velit rhoncus tellus, sit amet mollis elit urna nec nunc. Proin maximus tincidunt ipsum, in ultrices magna tincidunt ut. Etiam sit amet commodo ipsum. Mauris non euismod neque, eget auctor libero. Curabitur ornare ante non molestie fringilla. Cras ipsum mi, hendrerit sit amet lorem eget, rhoncus venenatis odio. Donec lacinia turpis at gravida eleifend. Donec in augue congue, feugiat justo et, hendrerit purus. </p>
          <h3>Civil Society Strategy Session on Facial Recognition Technology</h3>
          <p>En julio del 2020 ODIA participó del RightsCon junto a decenas de ONGs y otras organizaciones de la sociedad civil mediante la cual planteamos los problemas derivados del uso de los Sistemas de Reconocimiento Facial alrededor del mundo. Asimismo, pudimos brindarle nuestras preocupaciones a las empresas que proveen estas tecnologías bajo el argumento no solo de una moratoria en el uso de esta tecnología sino por la prohibición del uso de ella.</p>
          <img src="/static/images/civilsocialstrategy.jpeg" />
          {close}
        </article>

        <article id="colaboracion" className={`${this.props.article === 'colaboracion' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Colaboración</h2>
          <h3>Justicia Digital</h3>
          <p>Dos veces por semana nos encuentran en las aulas de la Facultad de Derecho (UBA) en la materia Justicia Digital del ciclo profesional orientado. Formando parte del Departamento de Sociales, la materia se vuelve un espacio de discusión y diálogo del derecho informático, su contexto y su implicancia política.</p>
          <p>Tenemos la suerte de contar con invitades de lujo que gracias a su experiencia podemos conocer dónde estamos parados hoy y dialogar hacia dónde queremos ir. Abiertas las puertas a quienes quieran participar de este espacio.</p>
          <h3>Sindical App</h3>
          <p>Sindicapp es una aplicación que permite la carga de denuncias e información sensible para compartir con las personas que trabajan mediante aplicaciones. En este sentido, ODIA participó en el desarrollo una “Licencia de Colaboración Sindical” para asegurar la libertad y el correcto uso del Software.</p>
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
