import React from 'react'
import { Card, Button } from 'react-bootstrap'
export default function Carrito() {
  return (
    <section>
      <article className='d-flex align-items-end flex-column mb-3 p-4'>
        <div className='p-2' style={{ width: "50%" }}>
          <Card className="border-dark bg-light text-white">
            <div className='d-flex justify-content'>
              <Card.Img style={{ width: "350px" }} src="img/e1.jpg" alt="Card image" />
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
        </div>
        <div className='p-2' style={{ width: "50%" }}>
          <Card className="border-dark bg-light text-white">
            <div className='d-flex justify-content'>
              <Card.Img style={{ width: "350px" }} src="img/e1.jpg" alt="Card image" />
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
        </div>
        <div className='p-2' style={{ width: "50%" }}>
          <Card className="border-dark bg-light text-white">
            <div className='d-flex justify-content'>
              <Card.Img style={{ width: "350px" }} src="img/e1.jpg" alt="Card image" />
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
        </div>
        <div className='p-2' style={{ width: "50%" }}>
          <Card className="border-dark bg-light text-white">
            <div className='d-flex justify-content'>
              <Card.Img style={{ width: "350px" }} src="img/e1.jpg" alt="Card image" />
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
        </div>
      </article>
    </section>
  )
}
