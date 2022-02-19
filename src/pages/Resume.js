import styled from 'styled-components';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <MainContainer>
      <h1>Resume</h1>
      <Doc file='/Resume.pdf' >
        <Page style={{ width: 100, height: 150 }} pageNumber={1}/>
      </Doc>
    </MainContainer>
  )
}

export default Resume;


const MainContainer = styled.div`
  padding-top: 11vh;
  padding-bottom: 50px;
  width: 100%;
  height: fit-content;
  background: linear-gradient(135deg, #191414 , #1db954);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  
  h1 {
    font-size: 6em;
    font-family: 'Rock Salt', sans-serif;
    color: white;
    margin-bottom: 50px;

    @media screen and (max-width: 480px) {
      font-size: 3em;
    }
  }
  
`;

const Doc = styled(Document)`
  @media screen and (max-width: 480px) {
    height: 500px !important;
    width: 300px !important;
  }
`;
