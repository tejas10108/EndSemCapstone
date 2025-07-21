import React from 'react';
import Navbar from './Navbar.jsx';
import './About.css';

function About() {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                <h1>ABOUT US</h1>
                <p>Hello! I'm Tejas Tyagi, a 2nd-year undergraduate student passionate about web development and productivity tools. This Pomodoro App is a personal project built to help individuals stay focused and manage their time effectively.</p>
                <p>The Pomodoro Technique is a proven time management method that uses a timer to break work into intervals, typically 25 minutes in length, separated by short breaks.</p>
                <p>This app allows you to customize your focus sessions, track your progress, and build healthy work habits.</p>
                <p>Whether you're a student, developer, or just someone looking to boost your productivity, this app is designed to keep you on track and reduce burnout.</p>
                <p>Thank you for using the app. Happy focusing!</p>
            </div>
        </div>
    );
}

export default About;
