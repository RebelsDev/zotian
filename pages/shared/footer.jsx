import styles from '../../styles/Footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <p>Política de privacidad</p>
                    <p id={styles.last}>Términos y condiciones</p>

                </div>
                <div className={styles.copyright}>
                    ® 2021 - ZOTIAN
                </div>
            </div>
        </div>
    )
}