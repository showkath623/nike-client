import './Trending.css'
import nikead from '../../assets/homeimg/nikead.mp4'
const Trending = () => {
  return (
    <div>
        <h2>Trending</h2>
        <div className="trending">

            <div className="banner">
            <video autoPlay loop muted className="hero-video">
          <source src={nikead} type="video/mp4" />
          
        </video>
            </div>

            <div className="texts">
                <h1>Nike Jordan 1</h1>
                <h4>A sleek bomber jacket and joggers paired with iconic Air Force 1s for effortless, everyday style.</h4>
            </div>

            <button>Shop</button>

           

        </div>
    </div>
  )
}

export default Trending