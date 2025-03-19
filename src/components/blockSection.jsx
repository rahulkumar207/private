import React, { useState, useEffect } from 'react';

const BlockSection = ({ productData }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productData?.products) {
      setProducts(productData.products);
    }
  }, [productData]);

  const getColumnClass = (index) => {
    switch (index % 4) {
      case 0:
        return 'col-lg-3';
      case 1:
        return 'col-lg-3';
      case 2:
        return 'col-lg-3';
      case 3:
        return 'col-lg-3';
      default:
        return 'col-lg-3';
    }
  };

  const getAnimationClass = (index) => {
    switch (index % 3) {
      case 0:
        return 'fadeInUp delay-0-2s';
      case 1:
        return 'fadeInUp delay-0-4s';
      case 2:
        return 'fadeInUp delay-0-6s';
      default:
        return 'fadeInUp delay-0-2s';
    }
  };

  if (!products.length) {
    return null;
  }

  return (
    <section className="service-area-four pt-110 rpt-85 pb-100 rpb-70">
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div className={`${getColumnClass(index)}`} key={product.id}>
              <div className={`service-four-item ${getAnimationClass(index)}`}>
                <div className="content">
                  <div className="icon-btn">
                    <h5>{product.tagline}</h5>
                  </div>
                </div>
                {/* <div className="image">
                  <img
                    src={productData.thumbnail || "/assets/images/Products/default.jpg"}
                    alt={product.tagline}
                    onError={(e) => (e.target.src = "/assets/images/Products/default.jpg")}
                  />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockSection;
