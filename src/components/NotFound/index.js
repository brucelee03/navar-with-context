import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div
            className={
              isDarkTheme
                ? 'dark-not-found-background not-found-container'
                : 'not-found-container'
            }
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1
              className={
                isDarkTheme
                  ? 'dark-theme not-found-heading'
                  : 'not-found-heading'
              }
            >
              Lost Your Way?
            </h1>
            <p
              className={
                isDarkTheme
                  ? 'dark-theme not-found-description'
                  : 'not-found-description'
              }
            >
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
