'use client';
import React, { useEffect, useState } from 'react';
import Layout from "@/src/layout/Layout";
import PageBanner from "@/src/components/PageBanner";
import JobSection1 from "@/src/components/jobSection1";
import Link from 'next/link';

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
                                <div className="card shadow-sm h-100"
                                    style={{ backgroundColor: "black", borderColor: "#00c3d1", borderRadius: "25px" }}>
                                    <div className="card-body position-relative d-flex flex-column">
                                        <span className="badge position-absolute top-0 end-0 mt-2 me-2"
                                            style={{ backgroundColor: "#00c3d1", borderRadius: "15px" }}>
                                            {job.Type || "N/A"}
                                        </span>

                                        <h5 className="card-title mt-2 text-white">{job.Title || "N/A"}</h5>
                                        <p className="mt-2" style={{ color: "#00c3d1" }}>Skills Required:</p>
                                        <ul className="list-unstyled ms-3 text-white">
                                            {Array.isArray(job.requiredSkills) && job.requiredSkills.length > 0 ? (
                                                job.requiredSkills.map((skill, idx) => (
                                                    <li key={idx}>• {skill}</li>
                                                ))
                                            ) : (
                                                <li>No skills listed</li>
                                            )}
                                        </ul>

                                        <p className="mt-4" style={{ color: "#00c3d1" }}>SALARY:</p>
                                        <p className="fw-bold text-white">{job.Salary ? `$${job.Salary}` : "Not specified"}</p>

                                        <p className="mt-2 d-flex align-items-center" style={{ color: "#00c3d1" }}>
                                            <span className="me-2">📍</span>{job.Location || "Location not available"}
                                        </p>

                                        <Link href={`/jobDetailsPage?id=${job.id}`}>
                                            <button className="btn btn-primary w-100 mt-auto"
                                                style={{ backgroundColor: "#00c3d1", borderRadius: "20px" }}>
                                                Explore More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white text-center">No jobs available.</p>
                    )}
                </div>
            </div>
        </Layout>
    );
}
