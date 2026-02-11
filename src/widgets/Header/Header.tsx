import { Send } from 'lucide-react';
import Link from 'next/link';

import styles from './Header.module.scss';
import { LangSwitcher } from './ui/LangSwitcher';
import { ThemeSwitcher } from './ui/ThemeSwitcher';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.homeLink}>
        <Send className={styles.logo} />
        <h1 className={styles.title}>OneTime Messenger</h1>
      </Link>

      <div className={styles.switchers}>
        <ThemeSwitcher />

        <LangSwitcher />
      </div>
    </header>
  );
};
