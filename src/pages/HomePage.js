
import React from 'react';
import Sidebar from '../layout/Sidebar';
import Features from '../layout/Features';
import Gallery from '../layout/Gallery';
import Footer from '../layout/Footer';
import StoryContent from '../layout/StoryContent';
import StoryPic from '../layout/StoryPic';
import Homes from '../layout/Homes';
import Realtors from '../layout/Realtors';
import MainHeader from '../layout/MainHeader';

const HomePage = () => (
    <div className="container">
            <Sidebar />
            <MainHeader/>
            <Realtors /> 
            <Features />
            <StoryPic/>
            <StoryContent />
            <Homes /> 
            <Gallery />
            <Footer /> 
    </div>
)

export default HomePage; 



