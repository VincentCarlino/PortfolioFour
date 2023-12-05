import * as React from 'react'
import { Link } from 'gatsby'
import {container, title} from './styles/layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container} id='three'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/three">Three</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={title}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout