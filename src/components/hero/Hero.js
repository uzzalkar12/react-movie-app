import movieHero from '../../assets/imgs/movieHero.jpg'
import './Hero.scss'

function Hero() {

    return (
        <div className="hero">
            <img src={movieHero} alt="" />
            <div className="text-container">
                <div className="text">
                    <span className="mini-heading">Now Streaming</span>
                    <h1><span>Now</span> Streaming</h1>
                    <a href="#movie-grid" className="button">View Movies</a>
                </div>
            </div>
        </div>
    )
}
export default Hero
