import React from 'react'
import Card5 from './Card5'
import html from '../images/HTML.jpg';
import js from '../images/JS.jpg';
import css from '../images/CSS.jpg'
import '../css/Skill.css';

class Skill extends React.Component {
  render(){
    return(
      <div  className="Skill">
        <div className="skill__main">
          <div className="skill__container">
            <div className="skill__container__head skill">SKILL</div>
            <div className="cards">
              <Card5 img={js} title="JavaScript" lead="学生時代に少し使用したことがありますが、ほとんど未経験のため勉強中です。"/>
              <Card5 img={html} title="HTML" lead="学生時代に少し使用したことがありますが、ほとんど未経験のため勉強中です。"/>
              <Card5 img={css} title="CSS" lead="学生時代に少し使用したことがありますが、ほとんど未経験のため勉強中です。"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Skill;