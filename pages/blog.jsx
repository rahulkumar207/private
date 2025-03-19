"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://cmtai-b.vercel.app/v1/blogs/getBlogs");
        console.log("data", response.data);
        setBlogs(response.data?.data || []);
      } catch (err) {
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Layout dark>
      <PageBanner pageName={"Blog Grid"} />
      <section className="blog-page-area py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          {loading && <p className="text-center">Loading blogs...</p>}
          {error && <p className="text-center text-danger">{error}</p>}
          {!loading && !error && (
            <div className="row">
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <div key={blog?.id || index} className="col-xl-4 col-md-6">
                    <div className={`blog-item wow fadeInUp delay-0-${(index % 3) * 2}s`}>
                      <div className="image">
                        <img src={blog?.blogImage || "assets/images/blog/default.jpg"} alt={blog?.title || "Blog Image"} />
                      </div>
                      <hr />
                      <h4>
                        <Link href={`/blog-details/?id=${blog?.id}`}>
                          {blog?.title || "Untitled"}
                        </Link>
                      </h4>
                      <Link href={`/blog-details/?id=${blog?.id}`} className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No blogs found.</p>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
