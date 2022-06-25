import { useTranslation as useTranslationI18Next } from 'react-i18next';

export default function useTranslation() {
  const {
    t,
    i18n: { exists },
  } = useTranslationI18Next();

  return { t, exists };
}
