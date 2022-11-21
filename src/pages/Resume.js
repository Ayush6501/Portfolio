import React, { Component }  from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
import useWindowDimensions from '../hooks/useWindowDimensions'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const { width } = useWindowDimensions();

  const onClickhandler = () => {

  }

  return (
    <MainContainer>
      <h1>Resume</h1>
      {
        width > 800 ?
          <Doc file='/Resume.pdf' >
            <Page style={{ width: 100, height: 150 }} pageNumber={1}/>
          </Doc> :
          <MobileDownloadButton>
            <a href='/Resume.pdf' download>
              <lottie-player
                autoplay
                loop
                mode='normal'
                src='https://assets10.lottiefiles.com/packages/lf20_2ybb5qm7.json'
                style={{ height: '200px', width: '200px' }} />
            </a>
            <h1>Click on the icon to download my resume.</h1>
          </MobileDownloadButton>
      }
    </MainContainer>
  )
}

export default Resume;


const MainContainer = styled.div`
  padding-top: 11vh;
  padding-bottom: 50px;
  width: 100%;
  height: fit-content;
  background: linear-gradient(135deg, #191414 , #fff);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  a {
    position: absolute;
    top: 35%;
    left: 24%;
  }
  
  h1 {
    font-size: 6em;
    font-family: 'Rock Salt', sans-serif;
    color: white;
    margin-bottom: 50px;
    letter-spacing: 0.2em;

    @media screen and (max-width: 480px) {
      font-size: 3em;
    }
  }

  @media screen and (max-width: 480px) {
    height: 100vh;
  }
`;

const Doc = styled(Document)`
  @media screen and (max-width: 480px) {
    height: 500px !important;
    width: 300px !important;
  }
`;


const MobileDownloadButton = styled.div`
  height: 300px;
  width: 100%;
  
  h1 {
    margin: 200px 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5em;
    letter-spacing: 0.01em;
    
    
   &:hover {
     transform: scale(1.1);
   }
  }
`;
