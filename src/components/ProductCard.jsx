import React from "react";


const ProductCard = ({product}) => {
  //console.log(props);
  //console.log(props.product);
  //console.log("Image path:", props.product.imageUrl);

  const dateUpload = new Date(product.date).toLocaleDateString("en-Uk", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });

  return (
    <div className="product-card">
      <h6 className="date">{dateUpload}</h6>
      <div className="logo-cart">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios-filled/50/adidas-trefoil.png"
          alt="adidas-trefoil"
        />
      </div>
      <div class="main-image">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="shoe-details">
        <span className="shoe_name">{product.title}</span>
        <p>{product.description}</p>
      </div>
      <div className="color-price">
        <div className="rating">{product.rate} ⭐ </div>
        <div className="price">
          <span className="price_num">{product.price} $</span>
          <span className="price_letter">Nine dollar only</span>
        </div>
      </div>

      <button className="button">
        <svg
          viewBox="0 0 16 16"
          className="bi bi-cart-check"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
        >
          <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
        </svg>
        <p className="text">Buy Now</p>
      </button>
    </div>
  );
};

export default ProductCard;

