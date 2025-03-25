"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
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
        let url = product.thumbnail || product.image;
        if (!url) return "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg";
    
        if (url.includes('firebasestorage.googleapis.com')) {
            if (!url.includes('alt=media')) {
                url += (url.includes('?') ? '&' : '?') + 'alt=media';
            }
        }
    
        return url;
    };
    

    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809";
    };

    const styles = {
        section: {
            padding: '5rem 0',
            background: 'black',
            width: '100%',
            overflow: 'hidden'
        },
        container: {
            width: '100vw',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem'
        },
        header: {
            textAlign: 'center',
            marginBottom: '4rem'
        },
        title: {
            fontSize: '30px',
            color: '#00c3d1',
            marginBottom: '1rem'
        },
        subtitle: {
            color: '#9ca3af',
            fontSize: '1.125rem',
            maxWidth: '42rem',
            margin: '0 auto'
        },
        cardGrid: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center'
        },
        cardWrapper: {
            width: 'calc(25% - 1.5rem)',
            minWidth: '380px'
        },
        card: {
            position: 'relative',
            width: '100%',
            height: '100%',
            background: '#1f2937',
            borderRadius: '1rem',
            overflow: 'hidden',
            transition: 'transform 0.5s',
            transformStyle: 'preserve-3d',
            display: 'flex',
            flexDirection: 'column'
        },
        cardHover: {
            transform: 'translateY(-10px) rotateX(5deg) rotateY(5deg)'
        },
        cardImage: {
            position: 'relative',
            width: '100%',
            height: '200px',
            overflow: 'hidden',
            flexShrink: 0
        },
        cardOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            transition: 'background-color 0.3s'
        },
        cardBody: {
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1
        },
        cardTitle: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '0.5rem'
        },
        cardDescription: {
            color: '#9ca3af',
            fontSize: '0.875rem',
            marginBottom: '1rem',
            flexGrow: 1
        },
        cardActions: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto'
        },
        cardLink: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '0.875rem',
            transition: 'color 0.3s'
        },
        cardButton: {
            padding: '0.375rem 0.75rem',
            background: '#00c3d1',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            fontSize: '0.875rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
        }
    };

    if (loading) {
        return (
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={{ textAlign: 'center', color: 'white' }}>Loading products...</div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={{ textAlign: 'center', color: 'red' }}>Error: {error}</div>
                </div>
            </section>
        );
    }

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Products We Have Developed At CMT AI</h2>
                    {/* <p style={styles.subtitle}>
                        Discover our comprehensive range of digital solutions
                    </p> */}
                </div>

                <div style={styles.cardGrid}>
                    {products.map((product) => (
                        <div key={product.id} style={styles.cardWrapper}>
                            <div className="card-container" style={{ height: '100%' }}>
                                <div className="card" style={styles.card}>
                                    <div className="card-content" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div className="card-image" style={styles.cardImage}>
                                            <img
                                                src={getImageUrl(product)}
                                                alt={product.img_title || "Product Image"}
                                                style={{ 
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover'
                                                }}
                                                onError={handleImageError}
                                            />
                                            <div className="card-overlay" style={styles.cardOverlay}></div>
                                        </div>
                                        <div className="card-body" style={styles.cardBody}>
                                            <h3 style={styles.cardTitle}>
                                                <Link href={`/productDetails?id=${product.id}`} style={styles.cardLink}>
                                                    {product.title || "Untitled Product"}
                                                </Link>
                                            </h3>
                                            <p style={styles.cardDescription}>{product.short_description  || "No description available."}</p>

                                            <div className="card-actions" style={styles.cardActions}>
                                                <Link href={`/productDetails?id=${product.id}`} style={styles.cardLink}>
                                                    
                                                </Link>
                                                <Link href={`/productDetails?id=${product.id}`} style={styles.cardButton}>
                                                Let's Discover
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .card-container {
          perspective: 1000px;
        }

        .card:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
        }

        .card-image img {
          transition: transform 0.5s ease;
        }

        .card:hover .card-image img {
          transform: scale(1.1);
        }

        .card:hover .card-overlay {
          background: rgba(0, 0, 0, 0.2);
        }

        .card-link:hover {
          color: #10b981;
        }

        .card-button:hover {
          background: #059669;
        }

        @media (max-width: 1200px) {
          .card-wrapper {
            width: calc(50% - 1rem);
          }
        }

        @media (max-width: 640px) {
          .card-wrapper {
            width: 100%;
          }
          .container {
            width: 100vw;
            padding: 0 1rem;
            margin: 0;
          }
          .section {
            padding: 3rem 0;
            width: 100vw;
            overflow-x: hidden;
          }
          .header {
            margin-bottom: 2rem;
          }
          .title {
            font-size: 2rem;
          }
          .subtitle {
            font-size: 1rem;
          }
          .card-grid {
            gap: 1rem;
          }
        }

        @media (max-width: 375px) {
          .card-wrapper {
            width: 100%;
          }
          .container {
            width: 100vw;
            padding: 0 0.5rem;
            margin: 0;
          }
          .section {
            padding: 2rem 0;
            width: 100vw;
            overflow-x: hidden;
          }
          .header {
            margin-bottom: 1.5rem;
          }
          .title {
            font-size: 1.5rem;
          }
          .subtitle {
            font-size: 0.875rem;
          }
          .card-grid {
            gap: 0.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Card;