import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './page2.css';

const Page2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios('./Components/db_JSON/sample_db_0km.json');
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Mode Choice</h1>
      <table>
        <thead>
        <tr>
    <th className="blue-bg">Mode</th>
    <th className="ivtt">Total travel time spent while inside the vehicle(s)</th>
    <th className="mode-4">Mode Name</th>
    <th className="walktime-waittime">Total travel time spent outside vehicle(s) = walktime + waittime</th>
    <th className="tvariab">Possible delay due to traffic congestion or other uncertainties</th>
    <th>Total one-way cost of travel</th>
    <th>Extent of crowding in the vehicle</th>
    <th>Service Type</th>
  </tr>
</thead>
<tbody>
  {data.map(({ id, mode, ivtt, mode_4, walktime, waittime, tvariab }) => (
    <tr key={id}>
      <td className="blue-bg">{mode}</td>
      <td className="ivtt">{ivtt}</td>
      <td className="mode-4">{mode_4}</td>
      <td className="walktime-waittime">{walktime + waittime}</td>
      <td className="tvariab">{tvariab}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  ))}
</tbody>
      </table>  
    </div>
  )
}

export default Page2;
