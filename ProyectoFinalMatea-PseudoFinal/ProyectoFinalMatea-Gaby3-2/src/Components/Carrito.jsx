import React from 'react'
import { Card, Button} from 'react-bootstrap';
import FormCarrito from './FormCarrito';




export default function Carrito() {
  return (
    <div className='d-flex'>
      <FormCarrito />
    <section className='p-4' >
      <article >

          <Card className="border-dark bg-light text-white m-2">
            <div className='d-flex justify-content'>
              <Card.Img style={{ width: "300px" }} src="img/e1.jpg" alt="Card image" />
              <div className='p-2'>
                <Card.Title className="text-dark">Billie Eilish</Card.Title>
                <Card.Title className="text-dark">22/02/2022</Card.Title>
                <Card.Text className='text-dark'>Montevideo xdd te imaginas...estaria bueno la verda</Card.Text>
                <br />
                <div className='d-flex flex-row-reverse m-1'>
                  <Button variant="outline-dark" size='sm' className='p-2'>Eliminar del carrito</Button>
                </div>
              </div>
            </div>
          </Card>
      
          <Card className="border-dark bg-light text-white m-2">
            <div className='d-flex justify-content'>
              <Card.Img style={{ width: "300px" }} src="img/e1.jpg" alt="Card image" />
              <div className='p-2'>
                <Card.Title className="text-dark">Billie Eilish</Card.Title>
                <Card.Title className="text-dark">22/02/2022</Card.Title>
                <Card.Text className='text-dark'>Montevideo xdd te imaginas...estaria bueno la verda</Card.Text>
                <br />
                <div className='d-flex flex-row-reverse m-1'>
                  <Button variant="outline-dark" size='sm' className='p-2'>Eliminar del carrito</Button>
                </div>
              </div>
            </div>
          </Card>
       
      
          <Card className="border-dark bg-light text-white m-2">
            <div className='d-flex justify-content'>
              <Card.Img style={{ width: "300px" }} src="img/e1.jpg" alt="Card image" />
              <div className='p-2'>
                <Card.Title className="text-dark">Billie Eilish</Card.Title>
                <Card.Title className="text-dark">22/02/2022</Card.Title>
                <Card.Text className='text-dark'>Montevideo xdd te imaginas...estaria bueno la verda</Card.Text>
                <br />
                <div className='d-flex flex-row-reverse m-1'>
                  <Button variant="outline-dark" size='sm' className='p-2'>Eliminar del carrito</Button>
                </div>
              </div>
            </div>
          </Card>
       
      
          <Card className="border-dark bg-light text-white m-2">
            <div className='d-flex justify-content'>
              <Card.Img style={{ width: "300px" }} src="img/e1.jpg" alt="Card image" />
              <div className='p-2'>
                <Card.Title className="text-dark">Billie Eilish</Card.Title>
                <Card.Title className="text-dark">22/02/2022</Card.Title>
                <Card.Text className='text-dark'>Montevideo xdd te imaginas...estaria bueno la verda</Card.Text>
                <br />
                <div className='d-flex flex-row-reverse m-1'>
                  <Button variant="outline-dark" size='sm' className='p-2'>Eliminar del carrito</Button>
                </div>
              </div>
            </div>
          </Card>
        
      </article>
    </section>
    </div>
  )
};

