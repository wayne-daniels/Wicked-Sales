import React from 'react';
export default function ProductListItem(props) {
  return (
    <div id={props.productId} className="card d-flex flex-row col-lg-3 mb-4 mx-4 shadow">
      <div className="list-item d-flex select align-items-center">
        <div className="d-flex flex-column card-body">
          <img src={props.product.image} className="card-img-top" alt={props.product.name} />
          <h3 className="card-title mt-4">{props.product.name}</h3>
          <p className="card-subtitle text-secondary mt-2">$ {((props.product.price) * 0.01).toFixed(2)}</p>
          <p className="card-text mt-2">{props.product.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
