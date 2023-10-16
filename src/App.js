import './App.css';
import faceimage from './images/image-victor.jpg';
import CardPattern from './images/bg-pattern-card.svg';

function App() {
  return (
   
  <div className="container">
        <div className="card">
          <div className="card__header">
            <img src={CardPattern} alt="Background Pattern" className="bg-card" />
            <img src={faceimage} alt="Victor's Image" className="card-face" />
            <div className="content">
            <div className="intro">
              <span className="head">Victor Crest</span>
              <span className="number"> 26</span>
              <p className="location">London</p>
            </div>
            <hr />
            <div className="stats">
              <div className="stats1">
                <ul>
                  <li className="stats-head">80K</li>
                  <li className="stats-txt1 stats-txt">Followers</li>
                </ul>
              </div>
              <div className="stats2">
                <ul>
                  <li className="stats-head">803K</li>
                  <li className="stats-txt2 stats-txt">Likes</li>
                </ul>
              </div>
              <div className="stats3">
                <ul>
                  <li className="stats-head">1.4K</li>
                  <li className="stats-txt3 stats-txt">Photos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
