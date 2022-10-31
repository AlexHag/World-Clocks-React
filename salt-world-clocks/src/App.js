import { useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [ourTime, setOurTime] = useState(new Date() );  
  const ref = useRef(null);
  const clickButton = () => {
    console.log(ourTime);
  }

  useEffect(() => {
    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    const secondHandLondon = document.querySelector('.second-hand-london');
    const minsHandLondon = document.querySelector('.min-hand-london');
    const hourHandLondon = document.querySelector('.hour-hand-london');

    const secondHandNewYork = document.querySelector('.second-hand-new-york');
    const minsHandNewYork = document.querySelector('.min-hand-new-york');
    const hourHandNewYork = document.querySelector('.hour-hand-new-york');
    
    function setDate() {
      const now = new Date();
      
      // Stockholmn
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
      const hour = now.getHours();
      const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
      // Stockholm


      // London
      const secondsLondon = now.getSeconds();
      const secondsDegreesLondon = ((secondsLondon / 60) * 360) + 90;
      secondHandLondon.style.transform = `rotate(${secondsDegreesLondon}deg)`;

      const minsLondon = now.getMinutes();
      const minsDegreesLondon = ((minsLondon / 60) * 360) + ((secondsLondon/60)*6) + 90;
      minsHandLondon.style.transform = `rotate(${minsDegreesLondon}deg)`;

      const hourLondon = now.getHours() - 1;
      const hourDegreesLondon = ((hourLondon / 12) * 360) + ((minsLondon/60)*30) + 90;
      hourHandLondon.style.transform = `rotate(${hourDegreesLondon}deg)`;
      // London


      // New York
      const secondsNewYork = now.getSeconds();
      const secondsDegreesNewYork = ((secondsNewYork / 60) * 360) + 90;
      secondHandNewYork.style.transform = `rotate(${secondsDegreesNewYork}deg)`;
    
      const minsNewYork = now.getMinutes();
      const minsDegreesNewYork = ((minsNewYork / 60) * 360) + ((secondsNewYork/60)*6) + 90;
      minsHandNewYork.style.transform = `rotate(${minsDegrees}deg)`;
    
      const hourNewYork = now.getHours() - 5;
      const hourDegreesNewYork = ((hourNewYork / 12) * 360) + ((minsNewYork/60)*30) + 90;
      hourHandNewYork.style.transform = `rotate(${hourDegreesNewYork}deg)`;
      // New York
    }

    const interval = setInterval(() => {
      setOurTime(new Date());
      setDate();
      //onsole.log(el);

      
      //console.log(secondHand);
    }, 1000);
    
    

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="App">
      <h1>Time Zones</h1>
      
      {/* <p>Sweden: {ourTime.toLocaleString('en-GB').split(" ")[1]}</p>
      <p>New York: {ourTime.toLocaleString('en-US', { timeZone: 'America/New_York' }).split(" ")[1]}</p>
      <p>London: {ourTime.toLocaleString("en-GB", {timeZone: "Europe/London"}).split(" ")[1]}</p>
      <p>Tokyo: {ourTime.toLocaleString("en-GB", {timeZone: "Asia/Tokyo"}).split(" ")[1]}</p>
      <p>Sydney: {ourTime.toLocaleString("en-GB", {timeZone: "Australia/Sydney"}).split(" ")[1]}</p>
      <button onClick={clickButton}>Click Me</button> */}

      <div className="all-clocks">
        <div className="clock-container">
          <div className="clock" ref={ref} id="container">
            <div className="outer-clock-face">
              <div className="marking marking-one"></div>
              <div className="marking marking-two"></div>
              <div className="marking marking-three"></div>
              <div className="marking marking-four"></div>
              <div className="inner-clock-face">

              </div>
                <div className="hand hour-hand"></div>
                <div className="hand min-hand"></div>
                <div className="hand second-hand"></div>
            </div>
          </div>
          <h2>Stockholm</h2>
        </div>

        <div className="clock-container2">
          <div className="clock" ref={ref} id="container">
            <div className="outer-clock-face">
              <div className="marking marking-one"></div>
              <div className="marking marking-two"></div>
              <div className="marking marking-three"></div>
              <div className="marking marking-four"></div>
              <div className="inner-clock-face">

              </div>
                <div className="hand hour-hand-london"></div>
                <div className="hand min-hand-london"></div>
                <div className="hand second-hand-london"></div>
            </div>
          </div>
          <h2>London</h2>
        </div>

        <div className="clock-container3">
          <div className="clock" ref={ref} id="container">
            <div className="outer-clock-face">
              <div className="marking marking-one"></div>
              <div className="marking marking-two"></div>
              <div className="marking marking-three"></div>
              <div className="marking marking-four"></div>
              <div className="inner-clock-face">

              </div>
                <div className="hand hour-hand-new-york"></div>
                <div className="hand min-hand-new-york"></div>
                <div className="hand second-hand-new-york"></div>
            </div>
          </div>
          <h2>New York</h2>
        </div>
      </div>
      

    </div>
  );
}

export default App;
