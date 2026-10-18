import { useParams } from 'react-router'
import { DEFAULT_LANG, isLang, type Lang } from '../lib/lang'

export function useLang(): Lang {
  const { lang } = useParams()
  return isLang(lang) ? lang : DEFAULT_LANG
}
