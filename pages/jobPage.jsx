'use client';
import React, { useEffect, useState } from 'react';
import { db } from "@/utils/firebase"; // Firebase alias
import { collection, getDocs } from 'firebase/firestore';
import Layout from "@/src/layout/Layout";
import PageBanner from "@/src/components/PageBanner";
import JobSection1 from "@/src/components/jobSection1";

export default function InternshipCards() {
    const [internships, setInternships] = useState([]); // Ensure it's always an array
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'cmtaiJobs'));
                const fetchedInternships = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setInternships(fetchedInternships || []); // Ensure it's always an array
            } catch (error) {
                console.error("Error fetching internships: ", error);
                setInternships([]); // Fallback to empty array on error
            } finally {
                setLoading(false);
            }
        };

        fetchInternships();
    }, []);

    return (
        <Layout dark>
            <PageBanner pageName="Career" />
            <JobSection1 />

            <div className="container py-5 mt-5" style={{ backgroundColor: "black" }}>
                <div className="row g-4">
                    {loading ? (
                        <p className="text-white text-center">Loading internships...</p>
                    ) : internships.length > 0 ? (
                        internships.map((internship, index) => (
                            <div key={internship.id || index} className="col-12 col-sm-6 col-lg-4">
                                <div className="card shadow-sm h-100"
                                    style={{ backgroundColor: "black", borderColor: "#00c3d1", borderRadius: "25px" }}>
                                    <div className="card-body position-relative d-flex flex-column" style={{ borderRadius: "25px" }}>
                                        <span className="badge position-absolute top-0 end-0 mt-2 me-2"
                                            style={{ backgroundColor: "#00c3d1", borderRadius: "15px" }}>
                                            {internship.Type || "N/A"}
                                        </span>

                                        <h5 className="card-title mt-2 text-white">{internship.Title || "N/A"}</h5>
                                        <p className="mt-2" style={{ color: "#00c3d1" }}>Skills Required:</p>
                                        <ul className="list-unstyled ms-3 text-white">
                                            {Array.isArray(internship.SKILLS) && internship.skills.length > 0 ? (
                                                internship.skills.map((skill, idx) => (
                                                    <li key={idx}>• {skill}</li>
                                                ))
                                            ) : (
                                                <li>No skills listed</li>
                                            )}
                                        </ul>
                                        <p className="mt-4" style={{ color: "#00c3d1" }}>SALARY:</p>
                                        <p className="fw-bold text-white">{internship.Salary || "Not specified"}</p>
                                        <p className="mt-2 d-flex align-items-center" style={{ color: "#00c3d1" }}>
                                            <span className="me-2">📍</span>{internship.Location || "Location not available"}
                                        </p>

                                        <button className="btn btn-primary w-100 mt-auto"
                                            style={{ backgroundColor: "#00c3d1", borderRadius: "20px" }}>
                                            Explore More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white text-center">No internships available.</p>
                    )}
                </div>
            </div>
        </Layout>
    );
}
