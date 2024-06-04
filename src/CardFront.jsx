import React from 'react'
import Card from 'react-bootstrap/Card';


function CardFront({data}) {
  return <>

      <Card style={{ width: '18rem' }} className='cardd'>
      <Card.Img variant="top" src={data.image} alt="Data Science" className='cardImg' />
      <Card.Body>
        <Card.Text>{data.tittle}</Card.Text>
      </Card.Body>
     
    </Card>

  
  </>
}

export default CardFront


