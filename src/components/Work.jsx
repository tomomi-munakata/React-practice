import React from 'react'
import Card1 from './Card1'
import works from '../images/work-sample.jpg';

import '../css/Work.css';

class Work extends React.Component {
  render(){
    return(
      <div  className="work">
        <div className="work__main">
          <div className="work__container">
            <div className="work__container__head ">WORK</div>
            <div className="work_cards">
              <Card1 img={works} title="Portfolio(このサイト)　Cording/Design"  lead="1ページで全ての情報が得られるようにしました。"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;