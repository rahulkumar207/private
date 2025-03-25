'use client';
import React, { useEffect, useState } from 'react';
import Layout from "@/src/layout/Layout";
import PageBanner from "@/src/components/PageBanner";
import JobSection1 from "@/src/components/jobSection1";
import Link from 'next/link';
import { ImLocation } from "react-icons/im";

export default function InternshipCards() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://cmtai-b.vercel.app/v1/jobs/getalljobs');
                const result = await response.json();
                
                console.log("API Response:", result); // ✅ Debugging API response

                if (result.status === "success") {
                    // Ensure result.data is an array
                    const jobList = Array.isArray(result.data) ? result.data : [result.data];
                    console.log("Job List:", jobList); // ✅ Debugging job list
                    setJobs(jobList);
                } else {
                    setError("No job data found");
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
                setError(error.message || "Failed to load jobs");
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <Layout dark>
            <PageBanner pageName="Career" />
            <JobSection1 />

            <div className="container py-5 mt-5" style={{ backgroundColor: "black" }}>
                <div className="row g-4">
                    {loading ? (
                        <p className="text-white text-center">Loading jobs...</p>
                    ) : error ? (
                        <p className="text-white text-center">{error}</p>
                    ) : jobs.length > 0 ? (
                        jobs.map((job) => (
                            <div key={job._id} className="col-12 col-sm-6 col-lg-4">
                                <div className="card shadow-sm h-100 top-0 end-0"
                                    style={{ 
                                        backgroundColor: "black", 
                                        borderColor: "#00a99d", 
                                        borderRadius: "1.5rem", 
                                        overflow: "hidden", 
                                        transition: "transform 0.5s", 
                                        transformStyle: "preserve-3d", 
                                        display: "flex", 
                                        flexDirection: "column"
                                    }}>
                                    <div className="card-body position-relative d-flex flex-column">
                                        <span className="badge position-absolute top-0 end-0"
                                             style={{
                                                position: "absolute",
                                                top: "0",
                                                right: "0",
                                                backgroundColor: "#00A99D",
                                                color: "white",
                                                padding: "10px 22px",
                                                borderBottomLeftRadius: "5px",
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                            }}>
                                            {job.Type || "N/A"}
                                        </span>

                                        <h5 className="card-title mt-4 text-white" style={{fontSize: "17px"}}>{job.Title || "N/A"}</h5>
                                        <span style={{ color: "#00a99d" }}>Skills Required:</span>
                                        <ul className="list-unstyled text-white">
                                            {Array.isArray(job.SKILLS) && job.SKILLS.length > 0 ? (
                                                job.SKILLS.map((skill, idx) => (
                                                    <li key={idx}>•{skill}</li>
                                                ))
                                            ) : typeof job.SKILLS === 'string' ? (
                                                job.SKILLS.split(/,|\n/).map((skill, idx) => (
                                                    <li key={idx}> {skill.trim()}</li>
                                                ))
                                            ) : (
                                                <li>No skills listed</li>
                                            )}
                                        </ul>

                                        <p className="mt-4 mt-auto d-flex justify-content-between align-items-center mb-0" style={{ color: "#00a99d", marginTop:"20px" }}>SALARY:</p>
                                        <p className="fw-bold text-white" style={{ color: "#00a99d", marginBottom: "0" }}>{job.Salary ? `${job.Salary}` : "Not specified"}</p>

                                        <div className="mt-auto d-flex justify-content-between align-items-center mb-0" style={{ width: "100%" }}>
                                            <p className="d-flex align-items-center" style={{ color: "#00a99d",fontWeight: "bolder", fontSize: "20px", color: "#00c3d1"}}>
                                                <span className="me-2"><ImLocation /></span>{job.Location || "Location not available"}
                                            </p>
                                            <Link href={`/jobDetailsPage?id=${job.id}`}>
                                                <button className="btn btn-primary"
                                                    style={{  borderRadius: "0 0 20px 0", padding: "15px 25px",  fontSize: "20px", fontWeight: "bold" }}>
                                                    Explore More
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white text-center">No jobs available.</p>
                    )}
                </div>
            </div>

            <style jsx>{`
                // .card:hover {
                //     transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
                // }

                .card-title {
                    font-size: 1.25rem;
                    font-weight: bold;
                    color: white;
                }

                .card-body {
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    padding-left: 1.25rem;
                    padding-top: 1.25rem;
                }

                .card-body ul {
                    padding-left: 1.25rem;
                }

                .card-body ul li {
                    list-style: none;
                }

                .card-body ul li::before {
                    content: '•';
                    color: #00a99d;
                    margin-right: 0.5rem;
                }

                .card-body .badge {
                    font-size: 0.875rem;
                    font-weight: bold;
                }

              .card-body .btn {
    background: black;
    color: #00c3d1;
    border: 1px solid #00a99d;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.card-body .btn:hover {
    background: #00a99d;
    color: white; }

                
            `}</style>
        </Layout>
    );
}
