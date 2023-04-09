import React, { useState } from 'react';
import './App.css';
import Page2 from './Components/page2';
function App() {
  const [meansOfTravel, setMeansOfTravel] = useState('');
  const [distance, setDistance] = useState('');

  const handleMeansOfTravelChange = (event) => {
    setMeansOfTravel(event.target.value);
    if (event.target.value === 'Bus') {
      window.location.href = '#';
    }
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
    if (event.target.value === '5 - 10 km') {
      window.location.href = '# ';
    }
    if (event.target.value === '< 5 km') {
      window.location.href = '#';
    }
  };

  return (
    <div>
      <h1>Respondent Travel Profile</h1>
      <h2>Question 1: What is your most frequently used means of travel from your home to work location?</h2>
      <form>
        <label>
          <input  type="radio" value="Bus" checked={meansOfTravel === 'Bus'} onChange={handleMeansOfTravelChange} />
          Bus
        </label>
        <label>
          <input type="radio" value="Metro" checked={meansOfTravel === 'Metro'} onChange={handleMeansOfTravelChange} />
          Metro
        </label>
        <label>
          <input type="radio" value="Own Two-wheeler" checked={meansOfTravel === 'Own Two-wheeler'} onChange={handleMeansOfTravelChange} />
          Own Two-wheeler
        </label>
        <label>
          <input type="radio" value="Own Car" checked={meansOfTravel === 'Own Car'} onChange={handleMeansOfTravelChange} />
          Own Car
        </label>
        <label>
          <input type="radio" value="Walk / Bicycle" checked={meansOfTravel === 'Walk / Bicycle'} onChange={handleMeansOfTravelChange} />
          Walk / Bicycle
        </label>
        <label>
          <input type="radio" value="Auto" checked={meansOfTravel === 'Auto'} onChange={handleMeansOfTravelChange} />
          Auto
        </label>
        <label>
          <input type="radio" value="App based ride hailing cab services including Ola / Uber" checked={meansOfTravel === 'App based ride hailing cab services including Ola / Uber'} onChange={handleMeansOfTravelChange} />
          App based ride hailing cab services including Ola / Uber
        </label>
      </form>
      <h2>Question 2: What is the total distance between your home and workplace?</h2>
      <form>
        <label>
          <input type="radio" value="< 5 km" checked={distance === '< 5 km'} onChange={handleDistanceChange} />
          &lt; 5 km
        </label>
        <label>
          <input type="radio" value="5 - 10 km" checked={distance === '5 - 10 km'} onChange={handleDistanceChange} />
          5 - 10 km
        </label>
        <label>
          <input type="radio" value="10- 15 km" checked={distance === '10- 15 km'} onChange={handleDistanceChange} />
          10- 15 km
        </label>
        <label>
          <input type="radio" value="15- 20 km" checked={distance === '15- 20 km'} onChange={handleDistanceChange} />
          15- 20 km
        </label>
        <label>
          <input type="radio" value="20- 25 km" checked={distance === '20- 25 km'} onChange={handleDistanceChange} />
          20- 25 km
        </label>
        <label>
          <input type="radio" value="> 25km" checked={distance === '> 25km'} onChange={handleDistanceChange} />
          &gt; 25 km
        </label>
      </form>
      <Page2 />
    </div>
  )
}
export default App;