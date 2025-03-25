'use client';

import Link from 'next/link';
import Image from 'next/image';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Layout from "@/src/layout/Layout";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const JobDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      if (!id) return;

      try {
        const response = await fetch(`https://cmtai-b.vercel.app/v1/jobs/getjobById/${id}`);
        const result = await response.json();
        
        if (result.status === "success" && result.data) {
          setJob(result.data);
        } else {
          setError("No job data found");
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) {
    return (
      <Layout dark>
        <div className="container">
          <div className="text-center">Loading job details...</div>
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

  if (!job) {
    return (
      <Layout dark>
        <div className="container">
          <div className="text-center">Job not found</div>
        </div>
      </Layout>
    );
  }

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
                      <h2>{job.Title}</h2>
                    </div>
                    <span className="sub-title mb-15" style={{ color: "#00c3d1", fontSize: "18px" }}>Skills Required: </span>
                    <ul className="list-style-three pt-25 pb-20">
                      {Array.isArray(job.SKILLS) && job.SKILLS.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                    <div className="about-btns">
                      <h5>Location: {job.Location}</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-four-image wow fadeInUp delay-0-4s">
                    <Image src={job.jobImage || "/assets/images/about/jobImage.jpg"} alt="Job" width={600} height={400} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-4">
          <h5>{job.Description}</h5>
          <p>Key Responsibilities:</p>
          <ul>
            {Array.isArray(job.jobResponsibilities) && job.jobResponsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
        <div className="container-fluid mt-4" style={{ marginTop: 200 }}>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="p-4 rounded" style={{ border: '2px solid #00c3d1', borderRadius: '15px' }}>
                <h3 className="text-white">Salary: {job.Salary}</h3>
              </div>
            </div>
            <div className="col-md-5">
              <div className="p-4 rounded" style={{ border: '2px solid #00c3d1', borderRadius: '15px' }}>
                <h3 className="text-white">Job Type: {job.Type}</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center" style={{ marginTop: 70, marginBottom: 70 }}>
            <div className="col-md-4 text-center">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSexCX1QRBybspSefAcWthe_dFA9JLHB8mJEwgDFyrK_9-cGKA/viewform" target="_blank" rel="noopener noreferrer">                <button 
                  className="btn" 
                  style={{ 
                    backgroundColor: 'transparent',
                    border: '1px solid #00c3d1',
                    color: '#00c3d1',
                    padding: '15px 40px',
                    fontSize: '20px',
                    borderRadius: '30px',
                    width: '100%',
                    transition: '0.3s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#00c3d1';
                    e.target.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#00c3d1';
                  }}
                >
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JobDetails;
