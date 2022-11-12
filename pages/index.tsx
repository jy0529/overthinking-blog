import Head from 'next/head'
import Link from 'next/link'
import Page from '../components/layouts/page'

import styles from '../styles/index.module.css'

// posts
import postsData from '../posts.json';
const { posts } = postsData;

export function getStaticProps() {
  return {
    props: {
      posts: posts.map(post => ({
        ...post,
        url: `/posts/${new Date(post.date).getFullYear()}/${post.id}`,
      })),
    }
  }
}

export default function Index({ posts }) {
  return (
    <Page>
      <div className={styles.container}>
        <Head>
          <meta name="description" content="记录思考，让事情持续正确" />
          <meta name="keywords" content="Overthinking" />
          <link rel="icon" href={`${process.env.STATIC_URL || ''}/favicon.ico`} />
        </Head>

        <main>
          <section className={styles.postsWrapper}>
            <ul className={styles.postsContent}>
              {
                posts.map(post => (
                  <li key={post.id} className={styles.postsLink}>
                    <Link className={styles.postsTitle} href={post.url}>
                      { post.title }
                    </Link>
                    <span className={styles.postsDate}>{post.date}</span>
                  </li>
                ))
              }
            </ul>
          </section>
        </main>
      </div>
    </Page>
  )
}
