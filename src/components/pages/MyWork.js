import React from 'react';
import { Container, Col } from 'reactstrap';

function MyWork(props) {

  return (

    <Container className="forms-background">
      <Col>
        <ul className='workList'>
          <li>
            <a className='contacts' href=' https://eastonshaum.github.io/Join-Coin/'>
              <h3>JoinCoin</h3>
              <p>A beginner's way of getting into the world of cryptocurrency.</p>
            </a>
          </li>
          <li>
            <a className='contacts' href='https://offline-library.herokuapp.com/'>
              <h3>Spotify Offline Library</h3> 
              <p>As the name suggests, an offline library/vault where your spotify playlists can live.</p>
            </a>
          </li>
          <li>
            <a className='contacts' href='http://evening-citadel-70565.herokuapp.com/'>
              <h3>Recipe Book</h3>
              <p>A blog where users can create and share their own recipes, as well as find recipes from others.</p>
            </a>
          </li>
        </ul>
      </Col>  
    </Container>

  )
};

export default MyWork