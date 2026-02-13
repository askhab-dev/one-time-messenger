'use client';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { useMounted } from '@/shared/lib/hooks/useMounted';
import { BaseCard } from '@/shared/ui/BaseCard';
import { Button } from '@/shared/ui/Button';
import { CreateRoomForm } from '@/widgets/Header/ui/CreateRoomForm';

import styles from './CreateRoomPage.module.scss';

export const CreateRoomPage: React.FC = () => {
  const { t } = useTranslation();
  const { mounted } = useMounted();

  if (!mounted) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.backBtnWrapper}>
        <Button variant='ghost' href='/' className={styles.backBtn}>
          <ArrowLeft />
          <p>{t('common.cancel')}</p>
        </Button>
      </div>
      <BaseCard className={styles.card}>
        <h1 className={styles.title}>{t('create.title')}</h1>
        <CreateRoomForm />
      </BaseCard>
    </div>
  );
};
