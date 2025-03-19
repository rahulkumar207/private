'use client';

import Link from 'next/link';
import Image from 'next/image';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Layout from "@/src/layout/Layout";





const AboutSection = () => {
  return (
    <Layout dark>
    <section className="about-area rel z-1">
      <div className="container-fluid">
        <div className="about-four-wrap py-130 rpy-100">
          <div className="container container-1290">
            <div className="row gap-70 align-items-center">
              <div className="col-lg-6">
                <div className="about-four-content rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-35">
                    <span className="sub-title mb-15">We are hiring for: </span>
                    <h2>Angular.js Development</h2>
                    
                  </div>
                  <span className="sub-title mb-15"style={{ color: "#00c3d1",fontSize: "18px"}}>Skills Required: </span>
                  <ul className="list-style-three pt-25 pb-20">
                    <li>Development</li>
                    <li>Custom Support</li>
                    <li>Mobile Apps</li>
                    <li>Product Development</li>
                  </ul>
                  <div className="about-btns">
                    <h5>Location: Noida</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-four-image wow fadeInUp delay-0-4s">
                  <Image src="/assets/images/about/about-four.jpg" alt="About" width={600} height={400} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <h5>An AngularJS developer is responsible for building and maintaining complex web applications.</h5>
      </div>
    </section>

    </Layout>

  );
};

export default AboutSection;
