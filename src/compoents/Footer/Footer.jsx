import './Footer.css'
import applePay from  '../../images/applepay.png'
import klarna from '../../images/klarna.svg'
import mastercard from '../../images/mastercard.png'
import paypal from '../../images/paypal.jpg'

function Footer() {
  return (
    <div>
        <div className="footer-wrapper">
          <p className='footer-p'>2022 facetheory.com. Agden Consulting Limited (t/a facetheory.com). Registered in England 08963089. All products certified cruelty-free by Leaping Bunny International.</p>
          <p>Pay Securely</p>
          <div className='footer-icons'>
            <img src={applePay} alt="" />
            <img src={klarna} alt="" />
            <img src={mastercard} alt="" />
            <img src={paypal} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Footer