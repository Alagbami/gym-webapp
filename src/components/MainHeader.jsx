import { Link } from "react-router-dom"
import Basketballer from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
        <div className="container main__header-container">
          <div className="main__header-left">
            <h4>#100DaysOfWorkOut</h4>
            <h1>Join the Legends of The Fitnees World</h1>
            <p>s
              Lorem, ipsum dolor sit amet consectetur adipisicing elit Praesentium 
              quibusdam earum perspiciatis id suscipit nostrum numquam esse sint natus accusantium!
            </p>
            <Link to='/plan' className="btn lg">Get Started</Link>
          </div>
          <div className="main__header-right">
            <div className="main__header-circle"></div>
            <div className="main__header-image">
              <img src={Basketballer} alt="Main Header" />
            </div>
          </div>
        </div>
    </header>
  )
}

export default MainHeader