"use client";

import React from 'react';
import Image from 'next/image';

const Card = () => {
    const cardData = [
        {
            id: 1,
            title: "Web Development",
            description: "Create stunning, responsive websites with modern technologies",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            features: ["React", "Next.js", "Tailwind CSS"],
            link: "/services/web-development"
        },
        {
            id: 2,
            title: "Mobile Development",
            description: "Build powerful mobile applications for iOS and Android",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            features: ["React Native", "Flutter", "Native Apps"],
            link: "/services/mobile-development"
        },
        {
            id: 3,
            title: "UI/UX Design",
            description: "Design beautiful and intuitive user interfaces",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            features: ["Figma", "Adobe XD", "Prototyping"],
            link: "/services/ui-ux-design"
        },
        {
            id: 4,
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and deployment services",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            features: ["AWS", "Azure", "Google Cloud"],
            link: "/services/cloud-solutions"
        }
    ];

    const styles = {
        section: {
            padding: '5rem 0',
            background: 'linear-gradient(to bottom, #111827, #000000)',
            width: '100%',
            overflow: 'hidden'
        },
        container: {
            width: '80vw',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem'
        },
        header: {
            textAlign: 'center',
            marginBottom: '4rem'
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'white',
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
            minWidth: '280px'
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
        featuresList: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '1rem'
        },
        featureItem: {
            display: 'flex',
            alignItems: 'center',
            color: '#10b981',
            fontSize: '0.75rem',
            background: 'rgba(16, 185, 129, 0.1)',
            padding: '0.25rem 0.5rem',
            borderRadius: '0.25rem'
        },
        featureIcon: {
            width: '0.875rem',
            height: '0.875rem',
            marginRight: '0.25rem'
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
            background: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            fontSize: '0.875rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Our Product</h2>
                    <p style={styles.subtitle}>
                        Discover our comprehensive range of digital solutions
                    </p>
                </div>

                <div style={styles.cardGrid}>
                    {cardData.map((card) => (
                        <div key={card.id} style={styles.cardWrapper}>
                            <div className="card-container" style={{ height: '100%' }}>
                                <div className="card" style={styles.card}>
                                    <div className="card-content" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div className="card-image" style={styles.cardImage}>
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                fill
                                                sizes="25vw"
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <div className="card-overlay" style={styles.cardOverlay}></div>
                                        </div>
                                        <div className="card-body" style={styles.cardBody}>
                                            <h3 style={styles.cardTitle}>{card.title}</h3>
                                            <p style={styles.cardDescription}>{card.description}</p>

                                            <div className="card-actions" style={styles.cardActions}>
                                                <a href={card.link} style={styles.cardLink}>
                                                    Learn More →
                                                </a>
                                                <button style={styles.cardButton}>
                                                    Get Started
                                                </button>
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
      `}</style>
        </section>
    );
};

export default Card;