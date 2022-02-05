import styled from 'styled-components';
import bg from '../styles/WP1.gif';
import bg1 from '../styles/WP3.gif';
import '../styles/about.css';
import { Grid, Image, List } from 'semantic-ui-react';
import Marquee from "react-fast-marquee";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import useWindowDimensions from '../hooks/useWindowDimensions'

const About = () => {
  const { width } = useWindowDimensions();

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
          {width < 480 && <br/>}

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
                <hr style={{ color: 'aqua', backgroundColor: 'aqua', height: 2, width: "80%", margin: 0, padding: 0}} />
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cumque delectus deleniti est, fugit hic ipsa laboriosam</h3>
              <SocialHeading>Socials</SocialHeading>
              <SocialLinks>
                <div className='social-btn flex-center' id="twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  <span>@SquiresChance</span>
                </div>
                <div className='social-btn flex-center' id="linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                  <span>in/chancesquires</span>
                </div>
                <div className='social-btn flex-center' id="github">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>ChanceSQ</span>
                </div>
              </SocialLinks>
              <SocialLinks>
                <div className='social-btn flex-center' id="twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  <span>@SquiresChance</span>
                </div>
                <div className='social-btn flex-center' id="linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                  <span>in/chancesquires</span>
                </div>
                <div className='social-btn flex-center' id="github">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>ChanceSQ</span>
                </div>
              </SocialLinks>
            </LeftBox>
            <RightBox>
              <h2>About Me</h2>
              <img src='/Images/demo.jpg' alt='Demo'/>
            </RightBox>
        </InfoContainer>
      </Container>
      <DataContainer>
        <h1>SkillSet</h1>
        <SkillContainer>
          <LeftBox>
            <h2>Libraries & Framework</h2>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </LeftBox>
          <RightBox>
            <h3>Qualities</h3>
            <List style={{marginTop: 10}}>
              <List.Item size={'small'} style={{padding: 0}}>
                <List.Icon size={'small'} name='codiepie' style={{verticalAlign: 'middle'}}/>
                <List.Content style={{padding: 0}}>
                  <List.Description style={{fontSize: '0.4em'}}>
                    Quality
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item size={'small'} style={{padding: 0}}>
                <List.Icon size={'small'} name='codiepie' style={{verticalAlign: 'middle'}}/>
                <List.Content style={{padding: 0}}>
                  <List.Description style={{fontSize: '0.4em'}}>
                    Quality
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item size={'small'} style={{padding: 0}}>
                <List.Icon size={'small'} name='codiepie' style={{verticalAlign: 'middle'}}/>
                <List.Content style={{padding: 0}}>
                  <List.Description style={{fontSize: '0.4em'}}>
                    Quality
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item size={'small'} style={{padding: 0}}>
                <List.Icon size={'small'} name='codiepie' style={{verticalAlign: 'middle'}}/>
                <List.Content style={{padding: 0}}>
                  <List.Description style={{fontSize: '0.4em'}}>
                    Quality
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item size={'small'} style={{padding: 0}}>
                <List.Icon size={'small'} name='codiepie' style={{verticalAlign: 'middle'}}/>
                <List.Content style={{padding: 0}}>
                  <List.Description style={{fontSize: '0.4em'}}>
                    Quality
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item size={'small'} style={{padding: 0}}>
                <List.Icon size={'small'} name='codiepie' style={{verticalAlign: 'middle'}}/>
                <List.Content style={{padding: 0}}>
                  <List.Description style={{fontSize: '0.4em'}}>
                    Quality
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </RightBox>
        </SkillContainer>
      </DataContainer>
      <Container image={bg1}>
        <Marquee speed='85' gradient={false} style={{overflowY: 'hidden'}}>
          <Heading>DESIGNED.DEVELOPED.DEPLOYED.</Heading>
        </Marquee>
        <ThankYouBox>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets9.lottiefiles.com/packages/lf20_iqhd0uv0.json"
            style={{ width: `${width < 480 ? '300px': '480px'}` }} />
          <h2>Thank <br/> You</h2>
        </ThankYouBox>
      </Container>
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

  @media screen and (max-width: 580px) {
    flex-direction: column;
    height: fit-content !important;
  }
`;

const DataContainer = styled(Container)`
  background: #ebfbfa;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;  
  flex-direction: column;
  
  h1 {
    margin-top: 30px;
    color: black;
    font-size: 1em;
  }

  @media screen and (max-width: 580px) {
    height: fit-content;
    
    h1 {
      font-size: 0.8em;
    }
  }
`;

const InfoContainer = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  margin-top: 55px;

  @media screen and (min-width: 1000px) {
    margin-top: 50px;
    width: 55%;
  }

  @media screen and (max-width: 580px) {
    flex-direction: column-reverse;
    justify-content: center;
    margin-top: 90px;
  }
`;

const LeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  
  h2 {
    color: black;
    font-size: 0.5em;
  }
  
  h3 {
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.1em;
    font-size: 18px;
    color: white;
    
    @media screen and (min-width: 1000px) {
      margin: 10px 50px;
    }
  }

  @media screen and (max-width: 580px) {
    width: 95%;
    margin-top: 20px;
    
    h3 {
      color: black;
    }
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
    color: white;
  }

  h3 {
    color: black;
    font-size: 0.5em;
  }
  
  img {
    height: 400px;
    width: 300px;
  }

  @media screen and (max-width: 580px) {
    width: 95%;
    height: auto;
    
    h2 {
      margin: 0;
      font-size: 0.5em !important;
      color: black;
    }
  }
`;

const SocialHeading = styled.h1`
  font-size: 0.5em;
  color: white;
  margin-top: 20px;
  letter-spacing: 1px;
`;

const SocialLinks = styled.div`
  display: flex;
  
  span {
    color: black;
    font-size: 12px;
    letter-spacing: 1px;   
  }
 `;

const SkillContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: 75%;
  margin-top: 40px;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    margin: 0;
    padding-bottom: 100px;
    width: 95%;
    
    h2 {
      font-size: 0.5em !important;
    }
    
    h3 {
      margin-top: 20px;
      margin-bottom: 0;
    }
  }
`;

const Heading = styled.h1`
  font-family: 'Bungee', cursive !important;
  letter-spacing: 0.01em !important;
  font-size: 3em !important;
  margin: 0 !important;
  color: black;

  @media screen and (max-width: 580px) {
    font-size: 0.8em !important;
  }
`;

const ThankYouBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 550px;
  width: 60%;
  color: black;
  
  h2 {
    font-family: 'Rock Salt', sans-serif;
    text-align: right;
    font-size: 1.5em;
    line-height: 1.2em;

    @media screen and (max-width: 580px) {
      text-align: center;
      font-size: 0.7em !important;
      margin: 0 !important;
      padding-bottom: 30px;
    }
  }

  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`;
