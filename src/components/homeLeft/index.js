import { Container , Row} from 'react-bootstrap'
import ReactTypingEffect from 'react-typing-effect'
import './style.css'


export default function HomeLeft(){
  return (
    <Container className='home-left-container'>
      <Row className="home-left-main-col">
        <h1>Hallo!</h1>
        <h2>IK BEN <span className='title'>DARIO BRONDERS</span></h2>
        <h3>
          <ReactTypingEffect 
            text="LAATSTEJAARSSTUDENT IN INFORMATICA - SOFTWARE DEVELOPMENT | GEPASSIONEERD DOOR JAVA."
            className='autowriter' 
            speed="50"
            eraseSpeed="20"
          />
        </h3>
      </Row>
     
   </Container>
  )
}