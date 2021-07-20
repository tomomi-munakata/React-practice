import React from 'react'
import '../css/Contact.css'
import MarkunreadIcon from '@material-ui/icons/Markunread';

class Contact extends React.Component {
   render(){
     return(
       <div className="contact">
        <div className="Contact_inner">
          <div className="title">CONTACT</div>
          <div className="lead">
            <p>サイトをご覧いただきありがとうございます。</p>
            お問い合わせは下記のメールアドレスからお願いいたします。
          </div>
          <div className="contact-list">
            {/* <i className="fas fa-envelope"></i> */}
            <div className="contact-item"><MarkunreadIcon />　　tomomi.munakata@force-corp.co.jp</div>
          </div>
        </div>
      </div>
     )
   }
}

export default Contact;