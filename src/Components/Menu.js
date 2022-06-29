import React from 'react'

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { key, title, event_img, event_name, event_price, event_info } = menuItem
        return (
          <article key={key} className="menu-item">
            <img src={event_img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{event_name}</h4>
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
