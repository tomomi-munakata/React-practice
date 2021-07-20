import React from 'react'
import Card6 from './Card6'
// import BorderYellow from './BorderYellow'
import html from '../images/HTML.jpg';
// import rails from '../images/rails.jpg';
import works from '../images/work-sample.jpg';

import '../css/Work.css';

class Work extends React.Component {
  render(){
    return(
      <div  className="work">
        {/* <BorderYellow /> */}
        <div className="work__main">
          <div className="work__container">
            <div className="work__container__head ">WORK</div>
            <div className="work_cards">
              
              <Card6 img={works} title="Portfolio(このサイト)　Cording/Design"  lead="1ページで全ての情報が得られるようにしました。"/>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// class Work extends React.Component {
//     render(){
//       return(
//         <div  className="works">
//           {/* <BorderYellow /> */}
//           <div className="innner">
//           <div className="title">WORK</div>
//             <div className="work">
//               <div className="cards">
                
//                 <Card6 img={works} title="Portfolio(このサイト)　Cording/Design"  lead="1ページで全ての情報が得られるようにしました。"/>
                
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     }
//   }


export default Work;