import React from 'react';
import { PageSection, BGImg, Button } from '../styled-components/styled-components';
import bg1 from '../assets/images/wallpaperflare.com_wallpaper(5).jpg';
import '../css/style.css';
import html from '../assets/icons/akar-icons_html-fill.svg';
import css from '../assets/icons/akar-icons_css-fill.svg';
import js from '../assets/icons/ion_logo-javascript.svg';

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

                    <div className="cd_icons">
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                    </div>
                </div>
            </PageSection>

            <PageSection className="ab-section">
                <h2>We’re giving you all the control.</h2>

            </PageSection>
        </div>
    )
}

export default Home
