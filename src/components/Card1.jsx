import React from 'react'
import '../css/Card1.css'

class Card6 extends React.Component {
  render(){
    return(
      <a href={this.props.link} className="card1__link">
        <div className="card1">
          <img
            className="card1__img"
            src={this.props.img}
            alt=""
          />
          <div className="card1__content">
            <div className="card1__title">
            {this.props.title}
            </div>
            <div className="card1__lead">
            {this.props.lead}
            </div>
          </div>
        </div>
      </a>
    )
  }
}


export default Card6;