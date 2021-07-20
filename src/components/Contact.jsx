// import React from 'react'
// // import BorderYellow from './BorderYellow'
// // import rails from '../images/rails.jpg';

// import '../css/Contact.css';

// class Contact extends React.Component {
//   render(){
//     return(
//       <div  className="wrapper">
//        <div className="contact_main">
//           <div className="contact_container">
//           <div className="contact_container_head">CONTACT</div>
//           <div className="contact_lead">
//             <p>サイトをご覧いただきありがとうございます。</p>
//             お問い合わせは下記のメールアドレスからお願いいたします。
//           </div>
//           <div className="contact-list">
//             <div className="fas fa-envelope"></div>
//             <span className="contact_item">tomomi.munakata@force-corp.co.jp</span>
//           </div>
//         </div>
//       </div>
//       </div>
//     )
//   }
// }


// export default Contact;




import React from 'react'
import '../css/Contact.css'
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
            <div className="contact-item">tomomi.munakata@force-corp.co.jp</div>
          </div>
        </div>
      </div>
     )
   }
}

export default Contact;