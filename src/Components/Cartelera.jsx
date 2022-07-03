import React from 'react'
import { useState, useEffect } from 'react';
import items from './data_eventos'
import Menu from './Menu';
import Categories from './Categories';
import  Carrusel from './carrusel';

const allCategories = ['all', ...new Set(items.map((item) => item.event_type))]

export default function Cartelera() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.event_type === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <Carrusel eventos={items}></Carrusel>
      <section className="menu section">
        <div className="title text-light">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}