import Layout from "@/src/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Get the blog ID from the URL
  const [blog, setBlog] = useState(null); // Store a single blog object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return; // Ensure ID is available before making the request
      try {
        const response = await axios.get(`https://cmtai-b.vercel.app/v1/blogs/getBlogById/${id}`);
        setBlog(response.data.data); // Set the blog data
      } catch (err) {
        setError("Failed to fetch blog details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]); // Dependency array includes id

  if (loading) {
    return <p className="text-center">Loading blog details...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">{error}</p>;
  }

  if (!blog) {
    return <p className="text-center">No blog found.</p>;
  }

  return (
    <Layout dark>
      {/* Page Banner Start */}
      <section
        className="page-banner-area overlay pt-250 pb-50 rel z-1 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/banner/banner-bg-two.jpg)",
        }}
      >
        <div className="container">
          <div className="banner-inner">
            <div className="row">
              <div className="col-xl-12">
              <ul className="blog-meta mb-15 wow fadeInUp delay-0-2s">
                  <li>
                    <i className="fal fa-user-alt" />
                    <a href="#">{blog.author || "Unknown Author"}</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">{new Date(blog.createdAt).toLocaleDateString() || "Unknown Date"}</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">{`Comment (${blog.commentsCount || 0})`}</a>
                  </li>
                </ul>
                <h2 className="page-title wow fadeInUp delay-0-3s">
                  {blog.title || "Untitled"}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Blog Details Page Area start */}
      <section className="blog-details-page py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row gap-60">
            <div className="col-lg-12">
              <div className="blog-single-content">
                <div className="image mb-155 rmb-100 wow fadeInUp delay-0-2s">
                  <img
                    src={blog.blogImage || "assets/images/blog/default.jpg"}
                    alt="Blog Details"
                  />
                </div>
                <h2 className="big-first-letter">
                  {blog.content || "No content available."}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Page Area end */}
      {/* Footer area start */}
    </Layout>
  );
};

export default BlogDetails;