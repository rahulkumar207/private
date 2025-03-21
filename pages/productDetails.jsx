import React, { useState, useEffect } from 'react'
import Layout from "@/src/layout/Layout";
import Carousel from "@/src/components/Carousel";
import BlockSection from '@/src/components/blockSection';
import TextSection from '@/src/components/textSection';
import FeatureSection from '@/src/components/featureSection';
import { useRouter } from 'next/router';

function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      if (!id) return;

      try {
        const response = await fetch(`https://cmtai-b.vercel.app/v1/products/getProductById/${id}`);
        const result = await response.json();
        
        if (result.status === "success" && result.data) {
          // Transform the data to match the expected structure
          const transformedData = {
            ...result.data,
            products: result.data.tegline.map((tagline, index) => ({
              tagline,
              id: `${result.data.id}-${index}`
            }))
          };
          setProduct(transformedData);
        } else {
          setError("No product data found");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  if (loading) {
    return (
      <Layout dark>
        <div className="container">
          <div className="text-center">Loading product details...</div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout dark>
        <div className="container">
          <div className="text-center" style={{ color: 'red' }}>Error: {error}</div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout dark>
        <div className="container">
          <div className="text-center">Product not found</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout dark>
      <div>
        <Carousel productData={product} />
        <BlockSection productData={product} />
        <TextSection productData={product} />
        <FeatureSection productData={product} />
      </div>
    </Layout>
  );
}

export default ProductDetails;