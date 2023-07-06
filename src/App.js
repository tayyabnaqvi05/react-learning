import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import AppRouter from './Router';
import './App.css';

const items = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About Us',
    to: '/about'
  },
  {
    label: 'Contact',
    to: '/contact'
  },
];

const App = () => {
  return (
    <>
      <Menubar
        model={items.map(item => ({
          ...item,
          template: (
            <Link to={item.to} className="p-menuitem-link">
              <i className={`pi ${item.icon}`} />
              <span>{item.label}</span>
            </Link>
          )
        }))}
      />
      <AppRouter />
    </>
  );
};

export default App;
