import { Navigate } from 'react-router'
import { detectLang } from '../lib/lang'

// Runs detection on each visit to `/`, so a newly saved choice is picked up.
function LangRedirect() {
  return <Navigate to={`/${detectLang()}`} replace />
}

export default LangRedirect
