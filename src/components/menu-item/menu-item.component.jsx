import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ section }) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{section.title}</h1>
      <span className="subtitle">{section.subtitle}</span>
    </div>
  </div>
);

export default MenuItem;
