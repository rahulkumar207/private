import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react"; 
import Product from "@/src/components/product";


const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

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
      <section className="skills-area pt-100 rpt-70 rel z-1">
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

      {/* What We Provide start */}
      <section className="what-we-provide-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 wow fadeInUp delay-0-2s">
              <div className="section-title style-two text-center mb-70">
                <span className="sub-title mb-15">What We Provide</span>
                <h2>
                  Quality Service For Growth Your Branding <i>Identity</i>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div
                className="wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url('/assets/images/services/Card.svg')",
                  backgroundSize: "contain", // Ensures the full image is visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "400px",
                  height: "400px", // Adjust as needed
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px", // Rounded corners
                  marginTop: "0px", 

                }}
              ></div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div
                className="  wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url('/assets/images/services/Card-1.svg')",
                  backgroundSize: "contain", // Ensures the full image is visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "400px",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px", // Rounded corners

                }}
              ></div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="  wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url('/assets/images/services/Card-2.svg')",
                  backgroundSize: "contain", // Ensures the full image is visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "400px",
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
            <div className="col-xl-4 col-md-6">
              <div
                className="  wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url('/assets/images/services/Card-3.svg')",
                  backgroundSize: "contain", // Ensures the full image is visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "400px",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px", // Rounded corners

                }}
              ></div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="  wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url('/assets/images/services/Card-4.svg')",
                  backgroundSize: "contain", // Ensures the full image is visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "400px",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "15px", // Rounded corners

                }}
              ></div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="  wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage: "url('/assets/images/services/Card-5.svg')",
                  backgroundSize: "contain", // Ensures the full image is visible
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "400px",
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

      {/* Service Style Four start */}
      <Product />
      {/* Service Style Four end */}

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

      {/* Team Area start */}
      {/* <section className="team-area pt-75 rpt-45">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Team Members</span>
                <h2>Meet Our Professionals Team</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/team/member6.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Patrick V. Schroeder</h4>
                  <span>UI/UX Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-3s">
                <div className="image">
                  <img src="assets/images/team/member7.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Michael A. Braun</h4>
                  <span>UI/UX Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/team/member8.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>James V. Decastro</h4>
                  <span>Senior Marketer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-5s">
                <div className="image">
                  <img src="assets/images/team/member9.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Troy V. Richardson</h4>
                  <span>Web Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/team/member10.jpg"
                    alt="Team Member"
                  />
                </div>
                <div className="content">
                  <h4>Michael A. Braun</h4>
                  <span>Apps Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Team Area end */}
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
                        <h5>Collaborative &amp; Partnership</h5>
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
      {/* Why Choose Us end */}
      {/* Headline area start */}
      {/* <div className="headline-area style-two bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Clients Say Us</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Global Clients</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Awards Winning</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Clients Say Us</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Global Clients</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Awards Winning</b>
              </span>
            </span>
          </div>
        </div>
      </div> */}
      {/* Headline Area end */}
      {/* Client Logo Two start */}
      <section
        className="client-logo-area"
        style={{ paddingTop: "50px", paddingBottom: "50px", }}
      >
        <div className="container">
          <div
            className="section-title text-center"
            style={{ marginBottom: "60px" }}
          >
            <h4>We Have 1520+ Global Clients</h4>
          </div>
          <div
            className="client-logo-wrap"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              position: "relative",
            }}
          >
            <div
              className="marquee-content"
              style={{
                // display: "flex",
                // gap: "40px",
                animation: "marquee 20s linear infinite",
                width: "max-content",
              }}
            >
              {[...Array(2)].map((_, index) => (
                <>
                  <Link key={index + "-1"} legacyBehavior href="/contact">
                    <a
                      className="client-logo-item"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src="assets/images/client-logos/client-logo1.png"
                        alt="Client Logo"
                        style={{ maxHeight: "80px", width: "auto" }}
                      />
                    </a>
                  </Link>
                  <Link key={index + "-2"} legacyBehavior href="/contact">
                    <a
                      className="client-logo-item"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src="assets/images/client-logos/client-logo2.png"
                        alt="Client Logo"
                        style={{ maxHeight: "80px", width: "auto" }}
                      />
                    </a>
                  </Link>
                  <Link key={index + "-3"} legacyBehavior href="/contact">
                    <a
                      className="client-logo-item"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src="assets/images/client-logos/client-logo3.png"
                        alt="Client Logo"
                        style={{ maxHeight: "80px", width: "auto" }}
                      />
                    </a>
                  </Link>
                  <Link key={index + "-4"} legacyBehavior href="/contact">
                    <a
                      className="client-logo-item"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src="assets/images/client-logos/client-logo4.png"
                        alt="Client Logo"
                        style={{ maxHeight: "80px", width: "auto" }}
                      />
                    </a>
                  </Link>
                  <Link key={index + "-5"} legacyBehavior href="/contact">
                    <a
                      className="client-logo-item"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src="assets/images/client-logos/client-logo5.png"
                        alt="Client Logo"
                        style={{ maxHeight: "80px", width: "auto" }}
                      />
                    </a>
                  </Link>
                  <Link key={index + "-6"} legacyBehavior href="/contact">
                    <a
                      className="client-logo-item"
                      style={{ display: "inline-block" }}
                    >
                      <img
                        src="assets/images/client-logos/client-logo6.png"
                        alt="Client Logo"
                        style={{ maxHeight: "80px", width: "auto" }}
                      />
                    </a>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
    @keyframes marquee {
      from {
        transform: translateX(0); 
      }
      to {
        transform: translateX(-150%);
      }
    }
  `}</style>
      </section>



    </Layout>
  );
};
export default Index2;

