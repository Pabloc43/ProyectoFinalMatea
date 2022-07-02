import React from 'react'
import {Link } from "react-router-dom";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { key, title, event_img, event_name, event_price, event_info } = menuItem
        return (
          <article key={key} className="menu-item">
            <Link to={`product${key}`}><img src={event_img} alt={title} className="photo" /></Link>
            <div className="item-info">
              <header>
              <Link to={`product${key}`}><h4>{event_name}</h4></Link>
                <h4 className="price">${event_price}</h4>
              </header>
              <p className="item-text">{event_info}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
