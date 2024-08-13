import ToggleSwitch from '../component/toggle_switch';
import './main.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [bannerData, setBannerData] = useState({
    bannerName: '',
    description: '',
    showBanner: 0,
    hour: 0,
    minute: 0,
    second: 0,
    link: ''
  });

  const [showData, setShowData] = useState([]);
  useEffect(() => {
    // Fetch banner data from the backend when the component mounts
    axios.get('http://localhost:3001/api/banner')
      .then(response => {
        setShowData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the banner data!', error);
      });

    console.log(showData);
  }, []);

  const handleToggle = (data) => {
    console.log(data + " " + bannerData.showBanner);
    setBannerData(prevData => ({
      ...prevData,
      showBanner: data
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBannerData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bannerData);
    axios.post('http://localhost:3001/api/banner', bannerData)
      .then(response => {
        alert('Banner updated successfully!');
      })
      .catch(error => {
        console.error('There was an error updating the banner!', error);
      });
  };

  return (
    <div className="container">
      <div className='card'>
        <h3>Do you want to show the banner?</h3>
        <ToggleSwitch isOn={bannerData.showBanner} handleToggle={handleToggle} /><br />

        <h3>Enter Banner Name</h3>
        <input type="text" name="bannerName" value={bannerData.bannerName || ''} onChange={handleChange} />

        <h3>Enter Description</h3>
        <input
          type="text"
          name="description"
          value={bannerData.description || ''}
          onChange={handleChange}
          className='textbox'
          placeholder='Enter Description for banner'
          style={{ height: '100px', marginBottom: '2%' }}
        /><br />
        <h3>Set Timer</h3>
        <div style={{ display: "flex", justifyContent: 'flex-start' }}>
          <input type="text" name="hour" value={bannerData.hour || ''} onChange={handleChange} placeholder='Hour' />
          <input type="text" name="minute" value={bannerData.minute || ''} onChange={handleChange} placeholder='Minute' />
          <input type="text" name="second" value={bannerData.second || ''} onChange={handleChange} placeholder='Second' />
        </div><br />

        <h3>Enter Clickable Link</h3>
        <input type="text" name="link" value={bannerData.link || ''} onChange={handleChange} placeholder='Enter URL' /><br />

        <input type="submit" className="submit" value="Add" onClick={handleSubmit} /><br />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Table To show All banner Details</h3>
        <table>
          <tr>
            <th>Banner Id</th>
            <th>Banner Name</th>
            <th>Banner Description</th>
            <th>Banner Timing</th>
            <th>Link</th>
          </tr>
          {Array.isArray(showData) && showData.map((data, index) =>
            <tr key={index}>{console.log(data)}
              <td>{data.id}</td>
              <td>{data.bannerName}</td>
              <td>{data.description}</td>
              <td>{data.hour} : {data.minute} : {data.second}</td>
              <td>{data.link}</td>
            </tr>
          )}
        </table>
        <h3><Link to="/main">Click here to view main page </Link></h3>
      </div>
    </div>

  );
};

export default Dashboard;