import React from 'react';
import styles from './index.less';

interface GlobalFooterProps {
  links: Array<{
    key: string,
    href: string,
    blankTarget: boolean,
    title: React.ReactNode | string,
  }>;
  copyright: React.ReactNode
}

const GlobalFooter = ({ links, copyright }: GlobalFooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map(item => {
          return (
            <a
              key={item.key}
              title={item.key}
              href={item.href}
              target={item.blankTarget ? '_black' : '_target'}>
              {item.title}
            </a>
          );
        })}
      </div>
      {copyright && <div className={styles.copyright}>{copyright}</div>}
    </footer>
  );
};

export default GlobalFooter;
