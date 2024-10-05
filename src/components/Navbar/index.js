import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onChangeTheme = () => {
        toggleTheme()
      }

      return (
        <nav
          className={
            isDarkTheme
              ? 'dark-theme-background navbar-container'
              : 'navbar-container'
          }
        >
          {isDarkTheme ? (
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
            </Link>
          ) : (
            <Link to="/" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
            </Link>
          )}
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link
                to="/"
                className={isDarkTheme ? 'dark-theme nav-link' : 'nav-link'}
              >
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link
                to="/about"
                className={isDarkTheme ? 'dark-theme nav-link' : 'nav-link'}
              >
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            data-testid="theme"
            onClick={onChangeTheme}
            className="theme-btn"
          >
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="theme-img"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="theme-img"
              />
            )}
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
