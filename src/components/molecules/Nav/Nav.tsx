import { Typography } from '../../atoms'
import * as classes from './Nav.module.css'

/**
 * The prefix for the path. Deployed to GitHub Pages, the prefix is '/poe2-tools'.
 */
const prefix = process.env.NODE_ENV === 'development' ? '' : '/poe2-tools'

/**
 * The links in the navigation.
 */
const links = [{ href: '/', label: 'DPS Calculator' }]

const Nav = (): React.JSX.Element => {
  return (
    <nav>
      <h2>Path of Exile 2</h2>
      <Typography variant="subtitle">Tool kit</Typography>
      <hr />
      {links.map((link) => {
        const to = prefix + link.href
        const className = to === window.location.pathname ? classes.active : ''
        console.log(to)
        console.log(prefix + window.location.pathname)
        return (
          <a key={link.href} href={to} className={className}>
            {link.label}
          </a>
        )
      })}
    </nav>
  )
}

export default Nav
