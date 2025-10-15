import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button';

const BlogItem = ({ blog, onEdit, onDelete }) => {
  // State for showing blog details modal
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
      {/* Show a short preview of the content (first 120 chars) */}
      <p className="text-gray-600 mb-4 line-clamp-2">{blog.content.length > 120 ? blog.content.slice(0, 120) + '...' : blog.content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div>
          <span className="font-semibold">Author:</span> {blog.author}
        </div>
        <div>
          <span className="font-semibold">Date:</span> {blog.date}
        </div>
      </div>
      {/* Action buttons for details, edit, delete */}
      <div className="mt-4 flex gap-2 flex-wrap">
        <Button color="outline" size="sm" aria-label="Show Details" onClick={() => setShowDetail(true)}>
          Details
        </Button>
        <Button color="blue" size="sm" aria-label="Edit" onClick={() => onEdit(blog)}>
          Edit
        </Button>
        <Button color="red" size="sm" aria-label="Delete" onClick={() => onDelete(blog.id)}>
          Delete
        </Button>
      </div>
      {/* Modal for full blog details */}
      {showDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative">
            <button
              aria-label="Close"
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowDetail(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            {/* Show full blog content in modal */}
            <p className="text-gray-700 mb-4 whitespace-pre-line">{blog.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div>
                <span className="font-semibold">Author:</span> {blog.author}
              </div>
              <div>
                <span className="font-semibold">Date:</span> {blog.date}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BlogItem;