import './ImgSec.css'
import pexels1 from '../../images/pexels1.jpg'
import pexels2 from '../../images/pexels2.jpg'
import pexels3 from '../../images/pexels3.jpg'
import pexels4 from '../../images/pexels4.jpg'
import pexels5 from '../../images/pexels5.jpg'
import pexels6 from '../../images/pexels6.jpg'
import pexels7 from '../../images/pexels7.jpg'
import pexels8 from '../../images/pexels8.jpg'
const ImgSec = () => {
  return (
    <div>
      <div className="imgSec-wrapper">
        <div className="first-row">
          <div className="img1 common-img"><img className='img-sec-img' src={pexels1} alt="" /></div>
          <div className="img2 common-img"><img className='img-sec-img' src={pexels2} alt="" /></div>
          <div className="img3 common-img"><img className='img-sec-img' src={pexels3} alt="" /></div>
          <div className="img4 common-img"><img className='img-sec-img' src={pexels4} alt="" /></div>
        </div>
        <div className="second-row">
          <div className="img1 common-img"><img className='img-sec-img' src={pexels5} alt="" /></div>
          <div className="img2 common-img"><img className='img-sec-img' src={pexels6} alt="" /></div>
          <div className="img3 common-img"><img className='img-sec-img' src={pexels7} alt="" /></div>
          <div className="img4 common-img"><img className='img-sec-img' src={pexels8} alt="" /></div>
          
        </div>
      </div>
    </div>
  );
}

export default ImgSec;
