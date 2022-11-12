import Link from 'next/link'
import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <header>
            <div className={styles.profile}>
                <Link href='/'>
                    <h1>Overthinking</h1>
                </Link>
                <p>记录思考，让事情持续正确</p>
            </div>
        </header>
    )
}