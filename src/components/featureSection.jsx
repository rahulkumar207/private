import Link from "next/link";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

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
        const featuresRef = collection(db, "cmtaiProducts");
        const snapshot = await getDocs(featuresRef);
        
        if (!snapshot.empty) {
          const firstDoc = snapshot.docs[0];
          const data = firstDoc.data();
          console.log('Firestore data:', data);
          
          // Check if features array exists in the data
          if (Array.isArray(data.features)) {
            // Split features into columns
            const columns = [];
            const itemsPerColumn = Math.ceil(data.features.length / 2);
            for (let i = 0; i < data.features.length; i += itemsPerColumn) {
              columns.push(data.features.slice(i, i + itemsPerColumn));
            }

            setFeatureData({
              subTitle: "Features",
              features: columns,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching features from Firestore:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

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
                        <li key={idx}>{item}</li>
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

          {/* Image Section */}
          <div className="col-lg-10">
            <div className="image pt-30 wow fadeInUp delay-0-2s">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
