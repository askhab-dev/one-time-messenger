'use client';
import { LogIn, MessageSquarePlus, Send, UserPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { useMounted } from '@/shared/lib/hooks/useMounted';
import '@/shared/i18n';
import { BaseCard } from '@/shared/ui/BaseCard';
import { Button } from '@/shared/ui/Button';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  const { t } = useTranslation();
  const { mounted } = useMounted();

  if (!mounted) return null;

  return (
    <div className={styles.wrapper}>
      <BaseCard className={styles.card}>
        <Send className={styles.logo} size={60} />
        <h1 className={styles.title}>OneTime Messenger</h1>
        <h2 className={styles.description}>{t('main.description')}</h2>

        <div className={styles.buttonsWrapper}>
          <Button
            className='h-14'
            size='lg'
            href='/create'
            aria-label='Create room'
          >
            <MessageSquarePlus className='mr-2 h-5 w-5' />
            {t('main.createRoom')}
          </Button>

          <Button
            className='h-14'
            size='lg'
            variant='ghost'
            href='/join'
            aria-label='Join room'
          >
            <LogIn className='mr-2 h-5 w-5' />
            {t('main.joinRoom')}
          </Button>

          <Button
            className='h-14'
            size='lg'
            variant='secondary'
            href='auth'
            aria-label='Sign in'
          >
            <UserPlus className='mr-2 h-5 w-5' />
            {t('main.signIn')}
          </Button>
        </div>
      </BaseCard>
    </div>
  );
};
