import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import './Follow.css'

const Follow = () => {
    return (
        <div>
           <div className="follow-wrapper">
               <div className="follow-header"><h1>Follow us</h1></div>
               <div className="follow-social">
                   <div className="facebook"><Facebook className='fb'/></div>
                   <div className="facebook"><Instagram className='fb'/></div>
                   <div className="facebook"><Twitter className='fb'/></div>
                   <div className="facebook"><Facebook className='fb'/></div>
               </div>
               <div className="follow-reward">
                   <button className='follow-button'>Earn Reward</button>
               <p className="follow-p">Already have an account? Log in</p>
               </div>
           </div> 
        </div>
    );
}

export default Follow;
