import React from 'react'
import { Card } from 'react-bootstrap';

function CyberSec({data}) {
  return<>
   {data.map((e, i) => (
        e.cyberSecEnabler ? (
          <Card style={{ width: '18rem' }} className='cardd' key={i}>
            <Card.Img variant="top" src={e.image} alt="Data Science" className='cardImg' />
            <Card.Body>
              <Card.Text>{e.tittle}</Card.Text>
            </Card.Body>
          </Card>
        ) : null
      ))}
  
  </>
}

export default CyberSec