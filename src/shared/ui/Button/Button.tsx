import clsx from 'clsx';
import Link from 'next/link';
import type { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  href?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  ...props
}) => {
  const classes = clsx(
    'button',
    `button-${variant}`,
    `button-${size}`,
    className,
  );

  return href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
