import React from 'react'
import Card4 from './Card4'
import '../css/About.css';


class About extends React.Component {
  render(){
    return(
      <div  className="about">
        <div className="about__main">
          <div className="about__container">
          <div className="about__container__head">ABOUT</div>
            <div className="about_cards">
              <Card4 />
            </div>
            <div className="about_item">
                <p>
                  宗像友美
                </p>
                <p>
                  1999年2月19日生まれ。神奈川県在住。
                </p>
                <p>
                  資格取得に向けた勉強もしています。
                </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default About;