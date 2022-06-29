import React from 'react'
import { Card } from 'react-bootstrap'
export default function Carrito() {
  return (
    <Card className="bg-secondary text-white">
      <Card.Img style={{ width: '21rem' }} src="img/e1.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Billie Eilish</Card.Title>
        <Card.Title>22/02/2022</Card.Title>
        <Card.Text>Montevideo xdd te imaginas...estaria bueno la verda</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}
