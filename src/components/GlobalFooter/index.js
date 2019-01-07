import React from 'react'
import styles from './index.less'

const GlobalFooter = ({links, copyright}) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {links.map(item => {
                    return (
                        <a
                            key={item.key}
                            title={item.key}
                            href={item.href}
                            target={item.blankTarget ? '_black' : '_target'}
                        >
                            {item.title}
                        </a>
                    )
                })
                }
            </div>
            {copyright && <div className={styles.copyright}>{copyright}</div>
        }
        </footer>
    )
}

export default GlobalFooter