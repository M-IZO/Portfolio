import { useEffect, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { CloseIcon } from './icons'

// Slide-in panel used for the sidebar on small screens.
function Drawer({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  const { t } = useTranslation()

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div className={`fixed inset-0 z-40 lg:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open} inert={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={`absolute inset-y-2 left-2 w-80 max-w-[calc(100%-4rem)] transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-[110%]'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t('menu.close')}
          className="absolute -right-12 top-2 z-10 rounded-full bg-surface p-1.5 text-muted transition-colors hover:bg-hover hover:text-text focus-visible:outline-2 focus-visible:outline-accent"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Drawer
