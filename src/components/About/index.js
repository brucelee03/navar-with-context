import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div
            className={
              isDarkTheme ? 'dark-about-background' : 'about-container'
            }
          >
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about-img"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-img"
              />
            )}
            <h1
              className={
                isDarkTheme ? 'dark-theme about-heading' : 'about-heading'
              }
            >
              About
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
