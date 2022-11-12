import Head from 'next/head'
import Header from '../header'

export default function Page({ description = null, children }) {
    return (
        <main>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                {description && <meta name="description" content={description} />}
                <title>Overthinking's blog - 记录思考，让事情持续正确</title>
            </Head>

            <Header />

            {children}
        </main>
    )
}