import React from 'react';
import { PageSection, BGImg, Button } from '../styled-components/styled-components';
import bg1 from '../images/wallpaperflare.com_wallpaper(5).jpg';
import '../css/style.css';

function Home() {
    return (
        <div>
            <BGImg>
                <img src={bg1} alt="" />
            </BGImg>
            <PageSection>
                <div className="content">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mi leo tellus ultricies ipsum.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in vehicula odio eget. </p>
                    <Button>Get Started</Button>
                </div>
            </PageSection>
        </div>
    )
}

export default Home
