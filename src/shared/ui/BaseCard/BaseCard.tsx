import { cn } from '@/shared/lib/cn/cn';

import styles from './BaseCard.module.scss';

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}

export const BaseCard: React.FC<BaseCardProps> = (props) => {
  const { children, className } = props;

  return <div className={cn(styles.card, className)}>{children}</div>;
};
