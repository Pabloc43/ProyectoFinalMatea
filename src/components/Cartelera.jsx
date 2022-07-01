import React from 'react'
import { useState, useEffect } from 'react';
import items from '../data_eventos.json'
import Menu from '../components/Menu';
import Categories from '../components/Categories';
import  Carrusel from '../components/carrusel';

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
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}