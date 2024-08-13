import React, { useEffect, useState } from 'react';
import './main.css';
import ReverseClock from '../component/reverse_clock';
import axios from 'axios';
import { Link } from "react-router-dom";

const Main = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    // Fetch banner data from the backend when the component mounts
    axios.get('http://localhost:3001/api/banner')
      .then(response => {
        setBannerData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the banner data!', error);
      });
    // console.log(bannerData)
  }, []);


  return (
    <>
      {Array.isArray(bannerData) && bannerData.map((data, index) => (data.showBanner && <div className='card'>
        {/* {console.log(data)} */}
        <ReverseClock hour={data.hour} minute={data.minute} second={data.second} name={data.bannerName}
          desc={data.description} link={data.link} />
      </div>
      ))}
      <Link to="/dashboard">Click here to view Dashboard page </Link>

    </>
  );
}

export default Main;