import styled from 'styled-components';
import '../styles/about.css';
import { Grid, Image, List } from 'semantic-ui-react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react'

const About = () => {
  const { width } = useWindowDimensions();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const images = gsap.utils.toArray('img');
    console.log(images)

    gsap.utils.toArray('section').forEach((section, index) => {
      const w = section.querySelector('.wrapper');
      const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
      gsap.fromTo(w, { x }, {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: 0.01 }
      });
    });
  })

  return (
    <>
      <AboutContainer>
        <LandingContainer>
          <AboutHeader>
            <p>Ayush Majumdar</p>
            <p>Full Stack JS Developer</p>
            <p>Machine Learning Enthusiast</p>
            <p>Based in Mumbai, India</p>
          </AboutHeader>
          <Role alignment='left'>Creative <br/> Developer</Role>
          <img src='/Images/me.jpg' alt='Demo' style={{ height: 'auto', width: '300px'}}/>
          <NameContainer>
            {width > 480 && <lottie-player
              autoplay
              loop
              mode='normal'
              src='https://assets7.lottiefiles.com/packages/lf20_AcUJBF.json'
              style={{ height: '150px', width: '200px' }} />}
            <Info><p>I build robust Full Stack Applications for the web with a focus on clean approachable design.</p></Info>
            <Role style={{paddingLeft: `${width < 480 ? '55px': 0}`}} alignment='right'>Ayush <br/> Majumdar</Role>
          </NameContainer>
        </LandingContainer>
      </AboutContainer>

      {/*https://react.semantic-ui.com/images/wireframe/image.png*/}
      <DataContainer>
        <h1>SkillSet</h1>
        <SkillContainer>
          <LeftBox>
            <h2>Libraries & Framework</h2>
            <Grid verticalAlign='middle' columns={4} centered>
              <Grid.Row>
                <Grid.Column>
                  <Image src='/Images/logos/ts.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='/Images/logos/gql.png' />
                  <br />
                  <Image src='/Images/logos/node.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='/Images/logos/react.png' />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Image src='/Images/logos/pytorch.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='/Images/logos/python.png' />
                  <br />
                  <Image src='/Images/logos/tf.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='/Images/logos/ue.png' />
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
                    Passionate
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item size={'small'} style={{padding: 0}}>
                <List.Icon size={'small'} name='codiepie' style={{verticalAlign: 'middle'}}/>
                <List.Content style={{padding: 0}}>
                  <List.Description style={{fontSize: '0.4em'}}>
                    Driven
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item size={'small'} style={{padding: 0}}>
                <List.Icon size={'small'} name='codiepie' style={{verticalAlign: 'middle'}}/>
                <List.Content style={{padding: 0}}>
                  <List.Description style={{fontSize: '0.4em'}}>
                    Hard Working
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item size={'small'} style={{padding: 0}}>
                <List.Icon size={'small'} name='codiepie' style={{verticalAlign: 'middle'}}/>
                <List.Content style={{padding: 0}}>
                  <List.Description style={{fontSize: '0.4em'}}>
                    Innovative
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item size={'small'} style={{padding: 0}}>
                <List.Icon size={'small'} name='codiepie' style={{verticalAlign: 'middle'}}/>
                <List.Content style={{padding: 0}}>
                  <List.Description style={{fontSize: '0.4em'}}>
                    Creative
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item size={'small'} style={{padding: 0}}>
                <List.Icon size={'small'} name='codiepie' style={{verticalAlign: 'middle'}}/>
                <List.Content style={{padding: 0}}>
                  <List.Description style={{fontSize: '0.4em'}}>
                    Punctual
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </RightBox>
        </SkillContainer>
      </DataContainer>
      <Container>

        {width > 600 &&
            <><section className='demo-text'>
          <div className='wrapper text' style={{ color: 'black'}}>
            DESIGNED.DEVELOPED.
          </div>
        </section>
        <section className='demo-gallery'>
          <ul className='wrapper'>
            <li>
              <img height='456' src='//im.vsco.co/aws-us-west-2/50088a/43265575/6169a5d664e4b014ad000001/vsco6169a5dc66f15.jpg' width='1240' />
            </li>
            <li>
              <img height='456' src='//im.vsco.co/aws-us-west-2/50088a/43265575/5ff09bd664e4b02031000003/vsco5ff09bda787cb.jpg' width='1240'/>
            </li>
            <li>
              <img height='456' src='//im.vsco.co/aws-us-west-2/50088a/43265575/5e4f778e0170e91363000001/vsco5e4f779337524.jpg' width='1240'/>
            </li>
          </ul>
        </section>
        <section className='demo-gallery'>
          <ul className='wrapper'>
            <li>
              <img width='456' src='//im.vsco.co/aws-us-west-2/50088a/43265575/5e4f79690170e92b20000001/vsco5e4f796dd50d3.jpg' width='1240'/>
            </li>
            <li>
              <img width='456' src='//im.vsco.co/aws-us-west-2/50088a/43265575/5e2875130170e93f65000001/vsco5e28752d973ec.jpg' width='1240'/>
            </li>
            <li>
              <img width='456' src='//im.vsco.co/aws-us-west-2/50088a/43265575/5e1184800170e92747000000/vsco5e118486cd907.jpg' width='1240'/>
            </li>
          </ul>
        </section>
        <section className='demo-gallery'>
          <ul className='wrapper'>
            <li>
              <img height='456' src='//im.vsco.co/aws-us-west-2/50088a/43265575/5ae9808892a69e38a5000000/vsco5ae98094cac30.jpg' width='1240'/>
            </li>
            <li>
              <img height='456' src='//im.vsco.co/aws-us-west-2/50088a/43265575/5af4104992a69e350f000002/vsco5af41055e8457.jpg' width='1240'/>
            </li>
            <li>
              <img height='456' src='//im.vsco.co/aws-us-west-2/50088a/43265575/5e1184cc0170e92747000003/vsco5e1184d1b5907.jpg?' width='1240'/>
            </li>
          </ul>
        </section></>}

        <section className='demo-text'>
          <div className='wrapper text' style={{ color: 'black'}}>
            ThankYouThankYouThankYou
          </div>
        </section>

        <div className="blockquote-wrapper">
          <div className="blockquote">
            <h1 >
              I DON'T NEED <span style={{color: '#000'}}>SLEEP,</span> I NEED <span style={{color: '#000'}}>ANSWERS.</span>
            </h1>
            <h4 style={{ color: '#000'}}>&mdash;Sheldon Cooper<br/>
              <em>&nbsp;Rocket Scientist</em>
            </h4>
          </div>
        </div>

      </Container>
    </>
  )
}

export default About;

const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  @media screen and (max-width: 480px) {
    height: fit-content;
    margin-top: 50px;
  }
`;

const LandingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 75%;
  height: 85%;
  margin-top: 40px;
  flex-direction: column;

  img {
    height: 250px;
    width: 450px;
    margin-top: 30px;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    justify-content: flex-start;
    
    img {
      height: 200px;
      width: 250px;
      margin-bottom: 30px;
    }
  }
`;

const Role = styled.h1`
  margin: 0;
  font-size: 6em;
  font-family: 'Poppins', sans-serif;
  line-height: 0.8em;
  letter-spacing: 0.1em;
  text-align:  ${props => props.alignment === 'right' ? 'right': 'left'};

  @media screen and (max-width: 480px) {
    font-size: 3em;
  }
`;

const AboutHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3em;
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const NameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Container = styled.div`
  background: #ddd;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  color: white;
  letter-spacing: 0.1em;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  font-weight: 500;
  z-index: 999999999;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: fit-content !important;
  }
`;

const Info = styled.div`
  max-width: 200px;
  word-wrap: break-word;

  p {
    font-size: 1.2em;
  }

  @media screen and (max-width: 480px) {
    max-width: 250px;
    margin-bottom: 50px;
  }
`;

const DataContainer = styled.div`
  background: #ddd;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-size: 5.5em;
  padding-bottom: 90px;

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

