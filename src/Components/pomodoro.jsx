import React, { useState, useRef, useEffect } from 'react';
import './pomodoro.css';
import './ToDolist.jsx'

import Navbar from './Navbar.jsx';
import ToDolist from './ToDolist.jsx';

function Pomodoro() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                if (seconds > 0) {
                    setSeconds((s) => s - 1);
                } else if (minutes > 0) {
                    setMinutes((m) => m - 1);
                    setSeconds(59);
                } else {
                    clearInterval(intervalRef.current);
                    setIsActive(false);
                    setIsBreak((prev) => !prev);
                    if (!isBreak) {
                        setMinutes(5);
                        setSeconds(0);
                    } else {
                        setMinutes(25); 
                        setSeconds(0);
                    }
                }
            }, 1000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isActive, seconds, minutes, isBreak]);

    const startTimer = () => setIsActive(true);
    const pauseTimer = () => setIsActive(false);
    const resetTimer = () => {
        setIsActive(false);
        setIsBreak(false);
        setMinutes(25);
        setSeconds(0);
    };

    return (
        <div>
        <Navbar/>
        <div className="pomodoro">
            <h1>Pomodoro Timer</h1>
            <div className="timer">
                <span>{minutes.toString().padStart(2, '0')}</span>
                :
                <span>{seconds.toString().padStart(2, '0')}</span>
            </div>
            <div className="status">
                {isBreak ? "Break Time!" : "Work Time!"}
            </div>
            <div className="controls">
                {!isActive ? (
                    <button onClick={startTimer}>Start</button>
                ) : (
                    <button onClick={pauseTimer}>Pause</button>
                )}
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
        <ToDolist/>
        </div>
    );
}

export default Pomodoro;