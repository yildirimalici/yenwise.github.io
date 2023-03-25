import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className='d-flex justify-content-center align-items-center p-4 bg-dark text-light'>
      <Container>
        <div className="d-flex justify-content-center">
          <div className='text-center'>
            <div>{(new Date().getFullYear())} &copy; all rights reserved</div>
            <div>yenwise technology</div>
            <div><a className='link-info link-offset-2 link-offset-3-hover link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover' href='mailto:info@yenwise.com'>info@yenwise.com</a></div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;