import React from 'react'
import {
  PageSection,
  BGImg,
  Button
} from '../styled-components/styled-components'
import bg1 from '../assets/images/wallpaperflare.com_wallpaper(5).jpg'
import '../css/style.css'
import html from '../assets/icons/akar-icons_html-fill.svg'
import css from '../assets/icons/akar-icons_css-fill.svg'
import js from '../assets/icons/ion_logo-javascript.svg'
import paintbrush from '../assets/icons/dashicons_admin-customizer.svg'
import meter from '../assets/icons/uil_tachometer-fast.svg'
import screens from '../assets/icons/mdi_responsive.svg'
import canvas_dr from '../assets/illustrations/day10-canvas-stand 1.png'

function Home () {
  return (
    <div>
      <BGImg>
        <img src={bg1} alt='' />
      </BGImg>
      <PageSection height={20}>
        <div className='content'>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mi leo
            tellus ultricies ipsum.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            in vehicula odio eget.{' '}
          </p>
          <Button>Get Started</Button>

          <div className='cd_icons'>
            <div className='cd_icon'>
              <img src={html} alt='' />
            </div>
            <div className='cd_icon'>
              <img src={css} alt='' />
            </div>
            <div className='cd_icon'>
              <img src={js} alt='' />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className='ab-section'>
          <div className='left'>
            <h2>We’re giving you all the control.</h2>
            <p className='desc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              nam cursus velit, nam elit sapien quam. Justo tortor nulla sed
              tortor accumsan, aliquam. Fringilla fermentum turpis diam a
              aliquam. Faucibus non leo molestie justo.{' '}
            </p>
            <div className='ab-details'>
              <div className='det-container'>
                <div className='det-item'>
                  <img src={paintbrush} alt='' />
                </div>
                {/* <p>Customizable</p> */}
              </div>
              <div className='det-container'>
                <div className='det-item'>
                  <img src={screens} alt='' />
                </div>
                {/* <p>Fast</p> */}
              </div>
              <div className='det-container'>
                <div className='det-item'>
                  <img src={meter} alt='' />
                </div>
                {/* <p>Responsive</p> */}
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='ill-container'>
              <img src={canvas_dr} alt='' />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className='themeSc'>
          <div className='top_info'>
            <h2>Free and Premium Themes</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam
              euismod bibendum phasellus turpis. Amet id vulputate id elementum
              volutpat. Netus enim eget justo nisl ut mi risus scelerisque eu
              eu.
            </p>
          </div>
          
        </div>
      </PageSection>
    </div>
  )
}

export default Home
