import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div
            className={isDarkTheme ? 'dark-home-background' : 'home-container'}
          >
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-img"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-img"
              />
            )}
            <h1
              className={
                isDarkTheme ? 'dark-theme home-heading' : 'home-heading'
              }
            >
              Home
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
