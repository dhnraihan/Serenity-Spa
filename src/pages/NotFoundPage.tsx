import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-serif text-primary mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center btn btn-primary"
        >
          {FiIcons.FiArrowLeft({className: "mr-2"})} Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage; 