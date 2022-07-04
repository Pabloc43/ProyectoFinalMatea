import React, { useState } from "react";
import LazyHero from "react-lazy-hero/lib/LazyHero";
import "../Components/home.css"
import Fade from "react-bootstrap/Fade";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <article>
        <LazyHero
        className="hero"
          opacity={0.1}
          color={"#251a32"}
          imageSrc="img/home.jpg">
          <h1 className="text-light tuki">Fideos con Tuki</h1>
        <Button
          className="btn btn-danger p-3"
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}>
          More info
        </Button>
        </LazyHero>
      </article>

      <article className="m-3 ">
        <div id="example-fade-text"className=" p-3">
          <Fade className="fade" in={open} dimension="width">
            <Card className="carta text-light">
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Fade>
        </div>
      </article>
    </section>
  );
}
