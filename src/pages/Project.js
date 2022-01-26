import styled from 'styled-components';


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
  font-size: 3em;
  color: black;
`;
