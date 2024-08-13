import React, { useState, useEffect } from 'react';
import '../page/main.css';

const ReverseClock = (props) => {
    console.log(props);

    const [hour, setHour] = useState(props.hour);
    const [minute, setMinute] = useState(props.minute);
    const [second, setSecond] = useState(props.second);
    const [bannerDisplay, setBannerDisplay] = useState("block");
    const secondhand = second*6;
    const minutehand = second * 0.1 + minute * 6;
    const hourhand = minute * 0.5 + hour * 30;
    const [secangle, setSecAngle] = useState(secondhand);
    const [minangle, setMinAngle] = useState(minutehand);
    const [hourangle, setHourAngle] = useState(hourhand);

    useEffect(() => {

        const rotate = () => {
            setSecAngle(prevSecAngle => prevSecAngle > 0 ? prevSecAngle - 6 : 360);
            setSecond(prev => prev > 0 ? prev - 1 : 60);

            if (second === 0 && minute > 0) {
                setMinAngle(prevMinAngle => prevMinAngle - 6);
                setMinute(prev => prev - 1);
            }

            if (minute === 0 && hour > 0 && secangle === 360) {
                setHourAngle(prevhourAngle => prevhourAngle - 30);
                setHour(prev => prev - 1);
            }

        };
        if (hour > 0 || minute > 0 || second > 0) {
            const interval = setInterval(rotate, 1000); // Rotate roughly 60 times per second (16ms)
            return () => clearInterval(interval);
        }
        else{
            setBannerDisplay("none");
        }

    }, [hour, minute, second, secangle,bannerDisplay]);

    return (
        <div className='banner' style={{ display: bannerDisplay }}>
            <div>
                <h3>{props.name}</h3>
                <div>{props.desc}</div>
                <div className="circle">
                    <div className="sec_line" style={{ transform: `rotate(${secangle}deg)` }}></div>
                    <div className="min_line" style={{ transform: `rotate(${minangle}deg)` }}></div>
                    <div className="hour_line" style={{ transform: `rotate(${hourangle}deg)` }}></div>
                </div>
                {/* <div>{hourangle} {minangle} {secangle}</div> */}
                <div> Total hour ={hour} Total minute : {minute} Total Second: {second}</div>
                <a href={props.link}>Click Here</a>
            </div>
        </div>
    );
};
export default ReverseClock;