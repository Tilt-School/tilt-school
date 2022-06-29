import { useTranslation } from 'react-i18next';

export default function useTranslate() {
  const {
    t,
    i18n: { exists },
  } = useTranslation();

  return { t, exists };
}
