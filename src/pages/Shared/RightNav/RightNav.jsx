import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZoon from '../QZoon/QZoon';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
          <h4>Login With</h4>
          <Button variant="outline-primary" className='mb-2'> <FaGoogle></FaGoogle> Login with Google</Button>{' '}
          <Button variant="outline-secondary"className='mb-2'> <FaGithub/>Login with GitHub</Button>{' '}
          <div>Find Us On</div>
          <ListGroup>
              <ListGroup.Item><FaFacebookF></FaFacebookF>Facebook</ListGroup.Item>
              <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
              <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>  
          </ListGroup>
    <QZoon></QZoon>
    <div>
      <img className='position-relative' src={bg} alt="" />
      <div className='bg-secondary text-center position-absolute top-100 left-100'>
        <h2>Create an Amazing Newspaper</h2>
        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <Button variant="primary">Primary</Button>{' '}
      </div>
    </div>
        </div>
    );
};

export default RightNav;