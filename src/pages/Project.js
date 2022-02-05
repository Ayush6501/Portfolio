import styled from 'styled-components';
import { Grid, Image } from 'semantic-ui-react'


const Project = () => {
  return (
   <>
     <TitleContainer>
        <Title>Project One</Title>
       <img
         src='/Images/demo.jpg'
         alt='Demo'
         style={{
           width: '100%',
           height: '100%',
           zIndex: '-1',
         }}
       />
     </TitleContainer>
     <ProjectDetailContainer>
       <ProjectTitle>Project Name</ProjectTitle>
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
           {<br/>}
           <Addlist>
             <span />
             <span />
           </Addlist>
           <GroupWatch>
             <div>
               <img src="/Images/group-icon.png" alt=""/>
             </div>
           </GroupWatch>
         </Controls>
         <Skills>
           ReactJs, Firebase, Material Ui, Graphql
         </Skills>
         <Description>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi culpa cumque ea eaque eligendi exercitationem fuga,
           illum inventore laboriosam nemo nesciunt numquam optio saepe sapiente similique temporibus. Rem, sunt!
           illum inventore laboriosam nemo nesciunt numquam optio saepe sapiente similique temporibus. Rem, sunt!
         </Description>

         <ImageContainer>
           <Image spaced size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
           <Image spaced size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
           <Image spaced size='large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
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

const Title = styled.h1`
  font-size: 100px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;

  @media screen and (max-width: 480px) {
    font-size: 60px;
    letter-spacing: 2px;
  }
`;

const ProjectDetailContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10vh;
`;

const ProjectTitle = styled.h1`
  font-size: 4em;
  color: black;
`;

const DetailContainer = styled.div`
  width: 75%;
  height: 80%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media screen and (max-width: 480px) {
    justify-content: flex-start;
    width: 85%;
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
  background: rgb(249, 249, 249);
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
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid white;
  color: white;
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
