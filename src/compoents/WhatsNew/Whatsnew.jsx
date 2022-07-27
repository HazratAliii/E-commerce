import "./Whatsnew.css";
import Slider from '../Slider/Slider'

export default function Whatsnew() {
  return (
    <div>
      <div className="w-header">
        <h1> What's new </h1>
      </div>
      <div className="slider">
        <Slider />
      </div>
    </div>
  );
}
