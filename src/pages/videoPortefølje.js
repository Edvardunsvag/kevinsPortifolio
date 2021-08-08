import React from 'react';
import BottomNavBar from '../Components/BottomNavBar';
import ReactPlayer from 'react-player';

export default function videoPortefølje() {
    return (
        <div className='videoContainer'>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </div>
    );
}
