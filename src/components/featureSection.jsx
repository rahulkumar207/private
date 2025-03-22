"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const FeatureSection = () => {
  const [featureData, setFeatureData] = useState({
    subTitle: "Features",
    features: [
      [
        "Responsive Website Design",
        "User Experience Design",
        "CMS and e-Commerce Integration",
        "Website Content Strategy",
      ],
      [
        "Cross Browser and Platform",
        "Responsive Website Design",
        "Usability and Competition",
      ],
    ],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch('https://cmtai-b.vercel.app/v1/products/getProducts');
        const result = await response.json();

        if (result.status === "success" && Array.isArray(result.data) && result.data.length > 0) {
          const firstProduct = result.data[0];
          
          // Extract features from the product
          let features = [];
          if (firstProduct.features && Array.isArray(firstProduct.features)) {
            features = firstProduct.features;
          } else if (firstProduct.features && typeof firstProduct.features === 'object') {
            features = Object.values(firstProduct.features);
          }

          // Split features into two columns
          const columns = [];
          const itemsPerColumn = Math.ceil(features.length / 2);
          for (let i = 0; i < features.length; i += itemsPerColumn) {
            columns.push(features.slice(i, i + itemsPerColumn));
          }

          setFeatureData({
            subTitle: "Features",
            features: columns,
            image: firstProduct.thumbnail || firstProduct.image,
            title: firstProduct.title,
            description: firstProduct.description
          });
        } else {
          setError("No product data available");
        }
      } catch (error) {
        console.error("Error fetching features:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  const renderImage = () => {
    if (!featureData.image) return null;

    const imageUrl = featureData.image.startsWith('http') 
      ? featureData.image 
      : `https://firebasestorage.googleapis.com/v0/b/your-bucket-name.appspot.com/o/${encodeURIComponent(featureData.image)}?alt=media`;

    return (
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '10px' }}>
        <img
          src={imageUrl}
          alt={featureData.title || "Feature Image"}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809";
          }}
        />
      </div>
    );
  };

  if (loading) {
    return (
      <section className="feature-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="text-center">Loading features...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="feature-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="text-center" style={{ color: 'red' }}>Error: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="feature-page-about py-130 rpy-100 rel z-1">
      <div className="container">
        <div className="row gap-90 align-items-center justify-content-end">
          {/* Left Content */}
          <div className="about-content mb-35 wow fadeInUp delay-0-2s">
            <div className="section-title mb-40">
              <span className="sub-title mb-15">{featureData.subTitle}</span>
              {featureData.title && <h2>{featureData.title}</h2>}
              {featureData.description && <p>{featureData.description}</p>}
            </div>
          </div>

          {/* Right Content - Feature Lists */}
          <div className="col-xl-12">
            <div className="row">
              {featureData.features.map((list, index) => (
                <div key={index} className="col-sm-6">
                  <div
                    className={`feature-list mb-35 wow fadeInUp delay-0-${
                      4 + index * 2
                    }s`}
                  >
                    <ul className="list-style-three">
                      {list.map((item, idx) => (
                        <li key={idx}>
                          {typeof item === 'string' ? item : item.name || 'Unknown Feature'}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="about-btns mt-45">
                <Link legacyBehavior href="/about">
                  <a className="theme-btn style-two mt-15 me-3">
                    Link to Demo <i className="far fa-arrow-right" />
                  </a>
                </Link>
                <Link legacyBehavior href="/projects">
                  <a className="theme-btn mt-15">
                    Contact Sales <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
