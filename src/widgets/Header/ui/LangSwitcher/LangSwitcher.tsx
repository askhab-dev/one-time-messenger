'use client';
import { LanguagesIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '@/shared/i18n';

import { AnimatedSwitcher } from '@/shared/ui/AnimatedSwitcher';

import slyles from './LangSwitcher.module.scss';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = async () => {
    const lang = i18n.language === 'ru' ? 'en' : 'ru';

    await i18n.changeLanguage(lang);
  };

  return (
    <button
      type='button'
      className={slyles.switcher}
      onClick={changeLanguage}
      aria-label='Change language'
    >
      <AnimatedSwitcher switcher={i18n.language} className={slyles.langWrapper}>
        {<LanguagesIcon size={20} className={slyles.icon} />}
      </AnimatedSwitcher>
    </button>
  );
};
