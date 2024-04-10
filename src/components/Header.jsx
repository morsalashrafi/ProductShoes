import React from 'react'

const productStatus = ["All","Expensive","Cheap","Not available"];
function Header() {
  return (
    <div>
      <h1 className="title">My Adidas Shop 👟</h1>
      <div className="productStatus">
        {productStatus.map((s) => (
          <div className="productStatus-item" key={s}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header
