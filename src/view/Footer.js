import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import './css/Footer.css';
import insta from './img/instagram.png';
import wpp from './img/wpp.png';
import fb from './img/facebook.png';
import tt from './img/twitter.png'

const Footer = () => {
    return (
        <MDBFooter className='bg-dark text-center text-white footerStyle'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <a href='#'><img src={insta} className="icon"/></a>
          <a href='#'><img src={wpp} className="icon"/></a>
          <a href='#'><img src={fb} className="icon"/></a>
          <a href='#'><img src={tt} className="icon"/></a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 - BOOK STORE
      </div>
    </MDBFooter>    
    );
  };
  
  export default Footer;