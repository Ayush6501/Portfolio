import React, { Component }  from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions'


const Contact = () => {
  const { width } = useWindowDimensions();
  console.log(width)
  return (
    <Parent>
      <MapComponent>
        <iframe style={{ border: 'None'}} width='100%' height={'100%'} src="https://api.mapbox.com/styles/v1/ayush6501/ckzr2u0vd002f14jyjle71ax7.html?title=false&access_token=pk.eyJ1IjoiYXl1c2g2NTAxIiwiYSI6ImNreWUxYnVsYjA3dDEycHM4aGpydHMybDMifQ.dD-cifuZPoBrE_Pd6keU7A&zoomwheel=false#13.5/19.014803095020877/73.01102991484166/328.8" title="Basic" />
      </MapComponent>
      <AboutComponent>
        <AboutInfo>
          <ContactInfo>
            <h1>Get In Touch</h1>
            <h2>Wanna Collaborate!</h2>
            <h2>Hit Me Up!</h2>
          </ContactInfo>
          <lottie-player
            autoplay
            loop
            mode='normal'
            src='https://assets5.lottiefiles.com/packages/lf20_e4uqdbmg.json'
            style={{ height: '250px', width: '400px' }} />
          <Socials>
            <h2>Socials</h2>
            <SocialBox>
              <div className='social-btn flex-center' id="twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                <span>@AyushM7</span>
              </div>
              <div className='social-btn flex-center' id="linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                <span>in/ayushmajumdar</span>
              </div>
              <div className='social-btn flex-center' id="github">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Ayush6501</span>
              </div>
              <div className='social-btn flex-center' id="instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M 8 3 C 5.2 3 3 5.2 3 8 L 3 16 C 3 18.8 5.2 21 8 21 L 16 21 C 18.8 21 21 18.8 21 16 L 21 8 C 21 5.2 18.8 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.7 5 19 6.3 19 8 L 19 16 C 19 17.7 17.7 19 16 19 L 8 19 C 6.3 19 5 17.7 5 16 L 5 8 C 5 6.3 6.3 5 8 5 z M 17 6 C 16.4 6 16 6.4 16 7 C 16 7.6 16.4 8 17 8 C 17.6 8 18 7.6 18 7 C 18 6.4 17.6 6 17 6 z M 12 7 C 9.2 7 7 9.2 7 12 C 7 14.8 9.2 17 12 17 C 14.8 17 17 14.8 17 12 C 17 9.2 14.8 7 12 7 z M 12 9 C 13.7 9 15 10.3 15 12 C 15 13.7 13.7 15 12 15 C 10.3 15 9 13.7 9 12 C 9 10.3 10.3 9 12 9 z"/>
                </svg>
                <span>@__ayxsh__</span>
              </div>
              <div className='social-btn flex-center' id="gmail">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                  <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
                </svg>
                <span>in/ayushmajumdar6501</span>
              </div>
              <div className='social-btn flex-center' id="github">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Ayush6501</span>
              </div>
            </SocialBox>
          </Socials>
        </AboutInfo>
      </AboutComponent>
    </Parent>
  )
}

export default Contact;


const Parent = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const MapComponent = styled.div`
  width: 100%;
  height: 65%;
`;

const AboutComponent = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 100%;
  }  
`;

const AboutInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin: 0 100px;
  flex-direction: row;
  
  h1 {
    margin: 0;
    margin-top: 20px;
    color: white;
    font-size: 4.5em;
    font-family: 'Rock Salt', sans-serif;
    letter-spacing: 0.01em;
    text-transform: capitalize;

    @media screen and (max-width: 480px) {
      font-size: 3em;
    }
  }

  @media screen and (max-width: 480px) {
    height: fit-content;
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: white;
    margin: 0;
    font-size: 2em;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: white;
    margin: 0;
    font-size: 3em;

    @media screen and (max-width: 480px) {
      margin-top: 30px;
      font-size: 2em !important;
    }
  }
`;

const SocialBox = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;
