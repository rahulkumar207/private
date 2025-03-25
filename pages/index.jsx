import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import Product from "@/src/components/product";
import Card from "@/src/components/card";
import ServicesSection from "@/src/components/sevicesSection";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const clientLogos = [
  "/assets/images/client-logos/1.png",
  "/assets/images/client-logos/2.png",
  "/assets/images/client-logos/3.png",
  "/assets/images/client-logos/4.png",
  "/assets/images/client-logos/5.png",
  "/assets/images/client-logos/6.png",
  "/assets/images/client-logos/7.png",
  "/assets/images/client-logos/8.png",
  "/assets/images/client-logos/9.png",
  "/assets/images/client-logos/10.png",
  "/assets/images/client-logos/11.png",
  "/assets/images/client-logos/12.png",
  "/assets/images/client-logos/13.png",
  "/assets/images/client-logos/14.png",
  "/assets/images/client-logos/15.png",
  "/assets/images/client-logos/16.png",
  "/assets/images/client-logos/17.png",
  "/assets/images/client-logos/18.png",
  "/assets/images/client-logos/19.png",
  "/assets/images/client-logos/20.png",
  "/assets/images/client-logos/21.png",
  "/assets/images/client-logos/22.png",
  "/assets/images/client-logos/23.png",
  "/assets/images/client-logos/24.png",
];

const Index2 = () => {
  return (
    <Layout footer={2} dark>
      {/* Hero Section Start */}
      <section
        className="hero-area-two pt-220 rpt-150 pb-80 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <h1 className="hero-title mb-100 rmb-0 wow fadeInUp delay-0-2s">
            <h5>From Concept to Code</h5>
            We craft Technologies<br />
            That defines Excellence
          </h1>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-3 col-lg-4">
              <div className="hero-two-content mb-50 wow fadeInRight delay-0-2s">
                <p>
                  With Precision in Every Pixel,
                  CMT AI Leads the Innovation Wave... <br /> By Bridging the Gap Between Technology & Success!
                </p>
                <img
                  className="mt-20"
                  src="assets/images/hero/arrow.png"
                  alt="Arrow"
                />
                <div className="authors-text mt-45">
                  <img src="assets/images/hero/author1.png" alt="Author" />
                  <img src="assets/images/hero/author2.png" alt="Author" />
                  <img src="assets/images/hero/author3.png" alt="Author" />
                  <img src="assets/images/hero/author4.png" alt="Author" />
                  <i className="fal fa-plus" />
                  <span className="text">1000+ Popular Clients</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-two-image mb-50 wow zoomIn delay-0-2s">
                <video width="100%" height="auto" autoPlay muted loop controls>
                  <source src="assets/images/video/front.mp4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="hero-two-btn mb-50 wow fadeInLeft delay-0-2s">
                <Link legacyBehavior href="/about">
                  <a className="explore-more">
                    <i className="fas fa-arrow-right" />{" "}
                    <span style={{ fontSize: "12px" }}>Discuss your<br /><b style={{ fontSize: "20px" }}>Project</b> </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Advertise Area Start */}
      <section className="advertise-banner-area rel z-1">
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-7 wow fadeInUp delay-0-2s">
              <div
                className="advertise-banner style-one bgc-primary"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/add-banner-bg.png)",
                }}
              >
                <div className="image">
                  <img src="assets/images/banner/add-banner.png" alt="Banner" />
                </div>
                <div className="content mt-20">
                  <span className="number">500+</span>
                  <h6>Project Completed</h6>
                  <hr />
                  <p>Turning Your Ideas into Engaging Experiences</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp delay-0-4s">
              <div
                className="advertise-banner style-two bg-white"
                style={{
                  backgroundImage: "url(assets/images/banner/star-vector.png)",
                }}
              >
                <h3>The Future of Tech is AI.<br /> We Make It Happen!</h3>
                <hr className="mb-35" />
                <div className="authors-text">
                  <img src="assets/images/hero/author1.png" alt="Author" />
                  <img src="assets/images/hero/author2.png" alt="Author" />
                  <img src="assets/images/hero/author3.png" alt="Author" />
                  <img src="assets/images/hero/author4.png" alt="Author" />
                  <i className="fal fa-plus" />
                  <span className="text">
                    We Provide Smart AI Solutions for Businesses!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advertise Area End */}
      {/* Skills Area Start */}
      <section className="skills-area pt-100 rpt-70 rel z-1" style={{ paddingBottom: "0px" }}>
        <div className="container container-1590">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <h2>Our Technology Alliances</h2>
              </div>
            </div>
          </div>
          <div className="skills-wrap">
            <div className="skill-item">
              <img src="assets/images/skills/skill1.png" alt="Skill Icon" />
              <span className="text">Mongo DB</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill2.png" alt="Skill Icon" />
              <span className="text">Express.js</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill3.png" alt="Skill Icon" />
              <span className="text">Next.js</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill4.png" alt="Skill Icon" />
              <span className="text">Kotlin</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill5.png" alt="Skill Icon" />
              <span className="text">React.js</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill6.png" alt="Skill Icon" />
              <span className="text">AWS</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill7.png" alt="Skill Icon" />
              <span className="text">Java</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill8.png" alt="Skill Icon" />
              <span className="text">Node.js</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill9.png" alt="Skill Icon" />
              <span className="text">Flutter</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill10.png" alt="Skill Icon" />
              <span className="text">Angular</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill11.png" alt="Skill Icon" />
              <span className="text">Supabase</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill12.png" alt="Skill Icon" />
              <span className="text">Firebase</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill13.png" alt="Skill Icon" />
              <span className="text">Vue.js</span>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Area End */}

      <section className="row justify-content-center headline-area pt-50" style={{ backgroundImage: "linear-gradient(black, #009da6, black)", marginTop: "90px" }}>
        <div className="col-xl-7 col-lg-9 wow fadeInUp delay-0-2s">
          <div className="section-title style-two text-center mb-45">
            <h3 className="mb-15" style={{ color: "black", fontSize: "30px" }}>Things We Do At CMT AI...</h3>

          </div>
        </div>

      </section>
      
      {/* What We Provide start */}
      {/* <ServicesSection /> */}
      <section className="what-we-provide-area pt-70 rpt-40 rel z-1">
        <div className="container container-1290 ">
          {/* <div className="headline-area bgc-primary pt-80 pb-65"> */}

          {/* <div className="row justify-content-center headline-area pt-50" style={{ backgroundImage: "linear-gradient(black, #00c3d1, black)" }}>
            <div className="col-xl-7 col-lg-9 wow fadeInUp delay-0-2s">
              <div className="section-title style-two text-center mb-45">
                <h3 className="mb-15" style={{ color: "black", fontSize: "30px" }}>Things We Do At CMT AI...</h3>

              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url('/assets/images/services/Card-5.svg')",
                  backgroundSize: "contain", // Ensures the full image is visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "400px", // Adjust as needed
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px", // Rounded corners
                  marginTop: "0px",

                }}
              ></div>
            </div>

            <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="  wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url('/assets/images/services/Card.svg')",
                  backgroundSize: "contain", // Ensures the full image is visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px", // Rounded corners

                }}
              ></div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="  wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url('/assets/images/services/Card-4.svg')",
                  backgroundSize: "contain", // Ensures the full image is visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px", // Rounded corners

                }}
              ></div>
            </div>

          </div>
          <div className="row mt-4">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="  wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url('/assets/images/services/Card-1.svg')",
                  backgroundSize: "contain", // Ensures the full image is visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px", // Rounded corners

                }}
              ></div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="  wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url('/assets/images/services/Card-2.svg')",
                  backgroundSize: "contain", // Ensures the full image is visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px", // Rounded corners

                }}
              ></div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="  wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url('/assets/images/services/Card-3.svg')",
                  backgroundSize: "contain", // Ensures the full image is visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px", // Rounded corners

                }}
              ></div>
            </div>

          </div>
        </div>
        
      </section>
      {/* What We Provide end */}

      {/* Product Style Four start */}
      <Product />
      {/* Product Style Four end */}
      {/* <Card /> */}

      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Design</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Product Design</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>SEO Optimization</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>UX/UI Strategy</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Graphics</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile App Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Digital Marketing</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Software Development</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}

      {/* Why Choose Us start */}
      <section className="demo-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="why-choose-us-content">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Why Choose Us</span>
                  <h2>Powering Businesses with Scalable Solutions...</h2>
                </div>
                <div className="row gap-60">
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Expertise</h5>
                      </div>
                      <p>
                        We have highly skilled Developers from prominent backgrounds with years of expertise.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Client-Centric Approach</h5>
                      </div>
                      <p>
                        We prioritize our clients and their unique needs.
                        We listen to your ideas, challenges, and goals.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Affordability</h5>
                      </div>
                      <p>
                        We Strongly Believe That Technology Should Be Affordable to Everyone in Today's Era.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Collaboration</h5>
                      </div>
                      <p>
                        We value long-term relationships with our clients. We see ourselves as your digital partner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-right wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/services/why-choose-right.png"
                  alt="Why Choose Right"
                />
                <div className="why-choose-border-shape" />
                <div className="text-shape">
                  <img
                    className="text"
                    src="assets/images/services/web-design-text.svg"
                    alt="Web Design Text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      {/* Client Logo Two start */}
      <section
        className="client-logo-area"
        style={{ paddingTop: "50px", paddingBottom: "50px", background: "black" }}
      >
        <div className="container">
          <div
            className="section-title text-center"
            style={{ marginBottom: "60px" }}
          >
            <h4 style={{ color: "white" }}>We Have 1520+ Global Clients</h4>
          </div>
          <div
            className="client-logo-wrap"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              position: "relative",
              padding: "20px 0"
            }}
          >
            <div
              className="marquee-content"
              style={{
                animation: "marquee 20s linear infinite",
                width: "max-content",
                display: "inline-block"
              }}
             
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} style={{ display: "inline-block" }}>
                  {clientLogos.map((logo, index) => (
                    <div key={index} style={{ display: "inline-block", margin: "0 30px" }}>
                      <img
                        src={logo}
                        alt={`Client Logo ${index + 1}`}
                        style={{ 
                          maxHeight: "60px", 
                          width: "auto",
                          transition: "all 0.3s ease"
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .client-logo-wrap {
            position: relative;
            overflow: hidden;
          }
          .client-logo-wrap::before,
          .client-logo-wrap::after {
            content: '';
            position: absolute;
            top: 0;
            width: 150px;
            height: 100%;
            z-index: 2;
          }
          .client-logo-wrap::before {
            left: 0;
            background: linear-gradient(to right, black 0%, transparent 100%);
          }
          .client-logo-wrap::after {
            right: 0;
            background: linear-gradient(to left, black 0%, transparent 100%);
          }
        `}</style>
      </section>



    </Layout>
  );
};
export default Index2;

