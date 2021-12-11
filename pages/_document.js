import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='es'>
                <Head>
                    <meta name="author" content="Agencia Rebels 247" />

                    <meta name="description" content="Contamos con todo lo necesario para que puedas disfrutar de tu pasión motera sin fronteras. Te ofrecemos motos, repuestos, lubricantes, accesorios y más." />
                    <link rel="icon" href="/favicon.ico" />


                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument