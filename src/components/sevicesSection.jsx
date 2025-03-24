import React from "react";

const ServicesSection = () => {
  const cardImages = [
    "/assets/images/services/Card.svg",
    "/assets/images/services/Card-1.svg",
    "/assets/images/services/Card-2.svg",
    "/assets/images/services/Card-3.svg",
    "/assets/images/services/Card-4.svg",
    "/assets/images/services/Card-5.svg",
  ];

  return (
    <section className="what-we-provide-area">
      <div className="container">
        <div className="row">
          {cardImages.map((image, index) => (
            <div className="col" key={index}>
              <div className="service-card" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* 🔹 Section Styling */
        .what-we-provide-area {
          padding-top: 70px;
          position: relative;
          z-index: 1;
        }

        /* 🔹 Container */
        .container {
          max-width: 1290px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* 🔹 Row */
        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        /* 🔹 Service Card */
        .service-card {
          width: 100%;
          max-width: 400px;
          height: 400px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
        }

        /* 🔹 Mobile (iPhone SE & Small Devices) */
        @media (max-width: 576px) {
          .service-card {
            max-width: 100%;
            height: 250px;
          }
        }

        /* 🔹 Tablets & Medium Screens */
        @media (min-width: 577px) and (max-width: 991px) {
          .service-card {
            max-width: 100%;
            height: 300px;
          }
        }

        /* 🔹 Large Screens (Desktops) */
        @media (min-width: 992px) {
          .service-card {
            max-width: 350px;
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
