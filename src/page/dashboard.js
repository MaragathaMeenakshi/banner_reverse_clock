import ToggleSwitch from '../component/toggle_switch';
import './main.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [bannerData, setBannerData] = useState({
        showBanner: false,
        bannerName: '',
        description: '',
        hour: '',
        minute: '',
        second: '',
        link: ''
      });
    
      useEffect(() => {
        // Fetch banner data from the backend when the component mounts
        axios.get('http://localhost:3001/api/banner')
          .then(response => {
            setBannerData(response.data);
          })
          .catch(error => {
            console.error('There was an error fetching the banner data!', error);
          });
      }, []);
    
      const handleToggle = () => {
        setBannerData(prevData => ({
          ...prevData,
          showBanner: !prevData.showBanner
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
            <input type="text" name="bannerName" value={bannerData.bannerName} onChange={handleChange} />
    
            <h3>Enter Description</h3>
            <input 
              type="text" 
              name="description" 
              value={bannerData.description} 
              onChange={handleChange} 
              className='textbox' 
              placeholder='Enter Description for banner' 
              style={{ height:'100px', marginBottom: '2%' }}
            /><br />
    
            <input type="submit" value="Update" onClick={handleSubmit} /><br />
            
            <h3>Set Timer</h3> 
            <div style={{ display: "flex", justifyContent: 'flex-start' }}>
              <input type="text" name="hour" value={bannerData.hour} onChange={handleChange} placeholder='Hour' />
              <input type="text" name="minute" value={bannerData.minute} onChange={handleChange} placeholder='Minute' />
              <input type="text" name="second" value={bannerData.second} onChange={handleChange} placeholder='Second' />
            </div><br />
    
            <h3>Enter Clickable Link</h3>
            <input type="text" name="link" value={bannerData.link} onChange={handleChange} placeholder='Enter URL' /><br />
    
            <input type="submit" className="submit" value="Submit" onClick={handleSubmit} /><br />
          </div>
        </div>
     
    );
};

export default Dashboard;