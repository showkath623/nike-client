import './Hero.css';
import nikead2 from '../../assets/homeimg/nikead2.mp4'; 


const Hero = () => {
  return (
    <div>
      <div className='hero-banner'>
        <video autoPlay loop muted className="hero-video">
          <source src={nikead2} type="video/mp4" />
          
        </video>
      </div>
      <br />
      <div className="description">
        <h4>Nike Pegasus 41</h4>
        <h1>DONT WASTE YOUR ENERGY</h1>
        <h4>Run in Pegasus. Feel the responsive energy return to Air Zoom and all-new ReactX foam</h4>
        <button>Shop</button>
      </div>
    </div>
  );
};

export default Hero;
