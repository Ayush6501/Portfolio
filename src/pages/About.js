import styled from 'styled-components';
import bg from '../styles/WP1.gif'
import '../styles/about.css'

const About = () => {
  return (
    <>
      <Container image={bg}>
        <div className="landing-name">
          <span id="A">A</span>
          <span id="Y">Y</span>
          <span id="A">U</span>
          <span id="S">S</span>
          <span id="H">H</span>

          &nbsp;&nbsp;

          <span id="A">M</span>
          <span id="U">A</span>
          <span id="A">J</span>
          <span id="Y">U</span>
          <span id="A">M</span>
          <span id="U">D</span>
          <span id="S">A</span>
          <span id="H">R</span>
        </div>
        <InfoContainer>
            <LeftBox>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cumque delectus deleniti est, fugit hic ipsa laboriosam</h3>

            </LeftBox>
            <RightBox>
              <h2>About Me</h2>
              <img src='/Images/demo.jpg' alt='Demo'/>
            </RightBox>
        </InfoContainer>
      </Container>
      <DataContainer>

      </DataContainer>
    </>
  )
}

export default About;

const Container = styled.div`
  background-image: url(${props => props.image});
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 5.5em;
  color: white;
  letter-spacing: 0.1em;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 120%;
  width: 100%;
  font-weight: 500;
  z-index: 999999999;
`;

const DataContainer = styled(Container)`
  background: #ebfbfa;
  height: 100%;
`;

const InfoContainer = styled.div`
  width: 70%;
  height: 60%;
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LeftBox = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  
  h3 {
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.1em;
    font-size: 20px;
    color: black
  }
`;

const RightBox = styled.div`
  width: 50%;
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  
  h2 {
    margin: 0;
    font-size: 60px;
  }
  
  img {
    height: 400px;
    width: 250px;
  }
`;
