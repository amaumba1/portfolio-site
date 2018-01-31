import React from 'react';
import Sidebar from '../components/Sidebar';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import StoryContent from '../components/StoryContent';
import StoryPic from '../components/StoryPic';
import Homes from '../components/Homes';
import Realtors from '../components/Realtors';

const HomePage = () => (
    <div>
        <h1>Welcome</h1>
            <Sidebar />
            <Features />
            <Gallery />
            <Footer />
            <Homes /> 
            <Realtors /> 
            <Sidebar /> 
            <StoryContent />
            <StoryPic /> 
        <p>This is my  site. Take a look around</p>
    </div>
)

export default HomePage; 