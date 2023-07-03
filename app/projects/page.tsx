'use client';
import React, { useState } from 'react'
import './Projects.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Projects() {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    return (
        <main className='projects d-flex jc-center ai-center flex-column '>
            <h1 className='mb-20'>Projects!</h1>
            <div className='d-flex ai-center project p-5 jc-evenly align-self-start'>
                <div>
                    <img alt='Project 1' src='/chatSocket.png' className='proj-img'/>
                </div>
                <div className='w-50 projectText'>
                    <h2 className='mb-20'>Chat Socket </h2>
                    <p>Secure log in and registration using bcrypt and storing user information in a JSON Web token. Sending messages with socket io 4 rooms to choose from messages stored in a MongoDB Database with the ability to leave and join whichever room you want and chat with friends</p>
                    <Link target="_blank" href='https://youtu.be/FSFeyguZFSY'>View Project Demo</Link>
                </div>
            </div>
            <div className='d-flex ai-center project p-5 jc-evenly align-self-end'>
                <div className='d-flex ai-center gap'>
                    <img src='/storyline.png' alt='Project 1' className='proj-img'/>
                </div>
                <div className='w-50 projectText'>
                    <h2 className='mb-20'>Storyline</h2>
                    <p>Create and collaborate on amazing stories posted by the community! In Storyline you can post any and all story ideas. Others can view the stories, comment on them and add them to their favorites. Customize your own profile by adding your own profile picture as well! This was built using Django framework with MySQL & Raw CSS (This was the first big project I built!)</p>
                    <Link target="_blank" href='https://youtu.be/OB0HbUGnU6Q'>View Project Demo</Link>
                </div>
            </div>
            <div className='d-flex ai-center project p-5 jc-evenly align-self-start'>
                <div className='d-flex ai-center gap'>
                    <img src='/imdb.png' alt='Project 1' className='proj-img'/>
                </div>
                <div className='w-50 projectText'>
                    <h2 className='mb-20'>Movie Picker</h2>
                    <p>IMDB clone made with TypeScript, React, TVDB API & Tailwind CSS</p>
                    <Link target="_blank" href='#'>View Project</Link>
                    <br />
                    <Link target="_blank" href='#'>View Code</Link>
                    
                </div>
            </div>
        </main>
    )
}
