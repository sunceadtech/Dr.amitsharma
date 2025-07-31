import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    // Ensure search engines don't index this page
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-2 text-center">
      <img
        src="https://www.shutterstock.com/image-vector/male-doctor-smiling-selfconfidence-flat-600nw-2281709217.jpg"
        alt="Not Found"
        className="w-64 md:w-96 mb-6 object-cover rounded-sm"
        loading="lazy"
      />

      {/* H1 hatake H3 */}
      <h3 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
        Oops! Page not found.
      </h3>

      <p className="text-gray-600 text-base md:text-lg mb-6 max-w-xl">
        The page you're looking for might have been removed or is temporarily
        unavailable. Let’s get you back to health!
      </p>

      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 text-white bg-purple-700 hover:bg-purple-800 font-semibold rounded-lg transition"
        aria-label="Go back to Home"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
    </div>
  );
}
