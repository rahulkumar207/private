import React, { useState, useEffect } from 'react';

const TextSection = ({ productData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (productData) {
      setTitle(productData.title || '');
      setDescription(productData.long_description || '');
    }
  }, [productData]);

  if (!title && !description) {
    return null;
  }

  return (
    <section className="service-area-four pt-110 rpt-85 pb-100 rpb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section-title mb-60 wow fadeInUp delay-0-2s">
              {description && <p>{description}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
  