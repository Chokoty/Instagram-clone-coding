import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import styles from './Navigation.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart, faCompass, faSquarePlus, faPaperPlane, faHouse } from '@fortawesome/free-solid-svg-icons';
 
function Navigation(){

  return(
    <Navbar id={styles.navbar}>
      <Container className="top-navbar__container">
        <Navbar.Brand className ="top-navbar__brand" href="#home"><div className="logo"></div></Navbar.Brand>
        <Nav className="me-auto">     
          <input type="text" placeholder='검색' />
          <Nav.Link onClick={()=>{}}><FontAwesomeIcon icon={faHouse} className="house" /></Nav.Link>
          <Nav.Link onClick={()=>{}}><FontAwesomeIcon icon={faPaperPlane} className="paperPlane" /></Nav.Link>
          <Nav.Link onClick={()=>{}}><FontAwesomeIcon icon={faSquarePlus} className="squarePlus" /></Nav.Link>
          <Nav.Link onClick={()=>{}}><FontAwesomeIcon icon={faCompass} className="compass" /></Nav.Link>
          <Nav.Link onClick={()=>{}}><FontAwesomeIcon icon={faHeart} className="heart" /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation;