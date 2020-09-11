import React from 'react';

export default function Header(props) {
  return (
    <header className="header vw-100 bg-dark row pt-3 pb-2 mb-4">
      <div className="col-1"></div>
      <div className="col-5">
        <h4 className="text-white"><i className="fas fa-dollar-sign fa-lg mr-2 mb-2" />Wicked Sales</h4>
      </div>

      <div className="col-1"></div>
    </header>
  );
}