import { createBrowserRouter } from 'react-router'
import About from '../pages/About'
import Home from '../pages/Home'
import NotFound, { StandaloneNotFound } from '../pages/NotFound'
import Project from '../pages/Project'
import LangLayout from './LangLayout'
import LangRedirect from './LangRedirect'

// The router expects no trailing slash, except for the root.
const basename = import.meta.env.BASE_URL.replace(/(.)\/$/, '$1')

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LangRedirect />,
    },
    {
      path: '/:lang',
      element: <LangLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'projects/:slug', element: <Project /> },
        { path: '*', element: <NotFound /> },
      ],
    },
    {
      path: '*',
      element: <StandaloneNotFound />,
    },
  ],
  { basename },
)
