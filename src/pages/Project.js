import React, {Component, useState} from 'react';
import styled from 'styled-components';
import { Grid, Image, Divider } from 'semantic-ui-react';
import useWindowDimensions from '../hooks/useWindowDimensions'
import {useLocation} from "react-router-dom";
import {websiteData} from "../data/data";


const Project = () => {
    const { width } = useWindowDimensions();
    const location = useLocation()
    //const[pgData, setPgData] = useState()
    console.log(location.pathname)
    let pgData = websiteData.find(el => location.pathname === '/Project/'+ el.urlLink)
    console.log(pgData)

  return (
   <>
     <TitleContainer>
        <ProjectFooter>
          <hr
            style={{
              width: '95%',
              color: 'white',
              backgroundColor: 'white',
              height: 2
            }}
          />
          <FooterInfo>
            <TitleSubtitle>
              <h1>{pgData.title}</h1>
              <h2>{pgData.stack}</h2>
            </TitleSubtitle>
            {width > 800 && <lottie-player
              autoplay
              loop
              mode='normal'
              src='https://assets2.lottiefiles.com/packages/lf20_66CQcm.json'
              style={{ height: '100px', width: '150px' }} />}
          </FooterInfo>
          <hr
            style={{
              width: '95%',
              color: 'white',
              backgroundColor: 'white',
              height: 2
            }}
          />
        </ProjectFooter>
       <img
         src={pgData.img1}
         alt='Demo'
         style={{
           width: '100%',
           height: '100%',
           zIndex: '-100',
             opacity: '0.8'
         }}
       />
     </TitleContainer>
     <ProjectDetailContainer>
       <ProjectTitle>{pgData.title}</ProjectTitle>
       <DetailContainer>
         <Controls>
           <Player>
             <img src='/Images/play-icon-black.png' alt=""/>
             <span>Play</span>
           </Player>
           <Trailer>
             <img src='/Images/play-icon-white.png' alt=""/>
             <span>Trailer</span>
           </Trailer>
           <Addlist>
             <span />
             <span />
           </Addlist>
           <GroupWatch>
             <h4>{pgData.team}</h4>
           </GroupWatch>
         </Controls>
         <Skills>
             {pgData.stack}
         </Skills>
         <Description>
             {pgData.details}
         </Description>

         <ImageContainer>
           <Image spaced size='large' src={pgData.img2} />
           <Image spaced size='large' src={pgData.img3} />
           <Image spaced size='large' src={pgData.img4} />
         </ImageContainer>
       </DetailContainer>
     </ProjectDetailContainer>
   </>
  )
}

export default Project;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ProjectFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;         
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
  
  h1 {
    font-size: 5em;
    color: white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;

    @media screen and (max-width: 480px) {
      font-size: 60px;
      letter-spacing: 2px;
    }
  }

  @media screen and (max-width: 480px) {
    height: 150px;
  }
`;

const FooterInfo = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    color: white;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 480px) {
      font-size: 2.5em;
    }
  }
  
  h2 {
    color: white;
    margin: 0;

    @media screen and (max-width: 480px) {
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
  } 
`;

const ProjectDetailContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h1`
  font-size: 4em;
  color: black;
`;

const DetailContainer = styled.div`
  width: 75%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media screen and (max-width: 480px) {
    justify-content: flex-start;
    width: 85%;
  }
`;

const TitleSubtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  
  h1 {
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: medium;
  }
  h2 {
    -webkit-text-stroke-color: black;
  }

  @media screen and (max-width: 480px) {
    align-items: center;
  }
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0 22px 0 0 ;
  padding: 0 24px;
  height: 56px;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: #f0f0f0;
  border: none;
  color: black;
  
  img {
    width: 32px;
  }
  
  &:hover {
    background: rgb(198, 198, 198);
  }
  
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0 10px 0px 0px;
     
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled.button`
  font-size: 15px;
  margin: 0 22px 0 0 ;
  padding: 0 24px;
  height: 56px;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: #f0f0f0;
  border: 1px solid white;
  color: black;
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 13px;
    margin: 0 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;


const Addlist = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    background-color: rgba(0, 0, 0, 0.8);
  }

  span {
    background-color: white;
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled(Addlist)``;


const Skills = styled.div`
  color: black;
  font-size: 20px;
  min-height: 20px;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 24px;
  padding: 16px 0px;
  color: black;
  text-align: center;
  
  @media (max-width: 768px){
    font-size: 18px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    
    img {
      margin-bottom: 15px;
    }
  }
`;
