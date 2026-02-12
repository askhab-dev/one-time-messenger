'use client';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { useMounted } from '@/shared/lib/hooks/useMounted';
import { AnimatedSwitcher } from '@/shared/ui/AnimatedSwitcher';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { mounted } = useMounted();

  if (!mounted) return null;

  const handleClick = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  const ThemeIcon = theme === 'light' ? Sun : Moon;

  return (
    <button
      type='button'
      onClick={handleClick}
      className={styles.switcher}
      aria-label='Toggle theme'
    >
      <AnimatedSwitcher switcher={theme} className={styles.iconWrapper}>
        <ThemeIcon size={20} className={styles.icon} />
      </AnimatedSwitcher>
    </button>
  );
};
