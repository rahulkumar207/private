"use client"; // For Next.js App Router

import { useEffect, useState } from "react";
import Link from "next/link";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://cmtai-b.vercel.app/v1/products/getProducts');
        const result = await response.json();
        
        if (result.status === "success" && Array.isArray(result.data)) {
          setProducts(result.data);
        } else {
          setError("No product data found");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getImageUrl = (product) => {
    if (product.thumbnail) {
      return product.thumbnail;
    }
    if (product.image) {
      return product.image;
    }
    return "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
  };

  if (loading) {
    return (
      <section className="service-area-four pt-110 rpt-85 pb-100 rpb-70">
        <div className="container">
          <div className="text-center">Loading products...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="service-area-four pt-110 rpt-85 pb-100 rpb-70">
        <div className="container">
          <div className="text-center" style={{ color: 'red' }}>Error: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="service-area-four pt-110 rpt-85 pb-100 rpb-70"
      style={{ backgroundImage: "url(/assets/images/hero/hero-two-bg.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Popular Products</span>
            </div>
          </div>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-xl-3 col-lg-4 col-sm-6" key={product.id}>
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <h5>
                      <Link href={`/productDetails?id=${product.id}`}>
                        {product.title || "Untitled Product"}
                      </Link>
                    </h5>
                    <Link href={`/productDetails?id=${product.id}`}>
                      <span className="more-btn">
                        <i className="far fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                  <p style={{ fontSize: 12 }}>{product.tegline || "No description available."}</p>
                </div>
                <div className="image">
                  <img
                    src={getImageUrl(product)}
                    alt={product.title || "Product Image"}
                    onError={handleImageError}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
