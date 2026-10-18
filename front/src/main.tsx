import { domAnimation, LazyMotion, MotionConfig } from 'motion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import '@fontsource-variable/roboto'
import { router } from './app/router'
import './i18n'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Movement is dropped when the system asks for reduced motion; fades stay. */}
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <RouterProvider router={router} />
      </MotionConfig>
    </LazyMotion>
  </StrictMode>,
)
