import Head from "next/head"
import stylesheet from 'styles/main.scss'

import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: "",
            loading: "is-loading"
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: "" })
        }, 100)
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
    }

    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout: !this.state.articleTimeout
            })
        }, 350)
    }

    handleCloseArticle() {
        this.setState({
            articleTimeout: !this.state.articleTimeout
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible: !this.state.isArticleVisible,
                article: ""
            })
        }, 350)
    }
    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? "is-article-visible" : ""}`}>
                <div>
                    <Head>
                        <title>O.D.I.A.</title>
                        <link href="https://fonts.googleapis.com/css?family=Raleway:300,300i,600,600i" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,600,600i" rel="stylesheet" />
                        <meta property="og:title" content="Observatorio de Derecho Informático Argentino" />
                        <meta property="og:locale" content="es_AR" />
                        <meta name="description" content="Ámbito de intercambio y aprendizaje mutuo entre abogades e informátiques." />
                        <meta property="og:description" content="Ámbito de intercambio y aprendizaje mutuo entre abogades e informátiques." />
                        <link rel="canonical" href="https://odia.legal/" />
                        <meta property="og:url" content="https://odia.legal/" />
                        <meta property="og:site_name" content="Observatorio de Derecho Informático Argentino" />
                        <meta property="og:image" content="https://odia.legal/static/images/isotipo.png" />
                        <meta name="twitter:card" content="summary" />
                        <meta property="twitter:image" content="https://odia.legal/static/images/isotipo.png" />
                        <meta property="twitter:title" content="Observatorio de Derecho Informático Argentino" />
                        <meta name="twitter:site" content="@odiaasoc" />
                        <link rel="icon" href="static/images/favicon.ico" type="image/x-icon" />
                    </Head>

                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                    <div id="wrapper">
                        <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                        <Main
                            isArticleVisible={this.state.isArticleVisible}
                            timeout={this.state.timeout}
                            articleTimeout={this.state.articleTimeout}
                            article={this.state.article}
                            onCloseArticle={this.handleCloseArticle}
                        />
                        <Footer timeout={this.state.timeout} />
                    </div>

                    <div id="bg" />
                </div>
            </div>
        )
    }
}

export default IndexPage
