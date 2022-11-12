import Head from 'next/head'
import Page from './page'
import styles from '../../styles/posts.module.css';

export default function PostLayout({ title, description, keywords, children }) {
    return (
        <Page>
            <Head>
                {title && <meta name="title" content={title} />}
                {keywords && <meta name="keywords" content={keywords} />}
                {description && <meta name="description" content={description} />}
                <meta property="og:title" content={title} />
                <meta property="og:site_name" content="Overthinking's blog" />
                <meta property="og:description" content={description} />
            </Head>
            <div className={styles.main}>
                <article>
                    {children}
                </article>
            </div>
        </Page>
    )
}