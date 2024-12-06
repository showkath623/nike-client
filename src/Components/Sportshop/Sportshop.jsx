import basketball from '../../assets/homeimg/basketball.png';
import soccer from '../../assets/homeimg/footballimg.png';
import dance from '../../assets/homeimg/dance.png'; 
import './Sportshop.css';

const Sportshop = () => {
  return (
    <div style={{ margin: '40px 0' }}>
      <h2 style={{ marginLeft: '40px' }}>Shop By Sport</h2>
      <div className="sport-grid">
        <div className="sport-card">
          <img src={dance} alt="Running" />
          <p className="sport-tag">Running</p>
        </div>
        <div className="sport-card">
          <img src={soccer} alt="Football" />
          <p className="sport-tag">Football</p>
        </div>
        <div className="sport-card">
          <img src={basketball} alt="Basketball" />
          <p className="sport-tag">Basketball</p>
        </div>
      </div>
    </div>
  );
};

export default Sportshop;
