import React from 'react';
import './main.css';
import ReverseClock from '../component/reverse_clock';

const Main = ()=>{ 
    return (
      <>
        <div className='card'>
            <ReverseClock/>
        </div>
      </>
    );
}

export default Main;