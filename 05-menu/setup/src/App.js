import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//uniq category look at youtube video on that jS NUggets
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = [allCategories];

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
