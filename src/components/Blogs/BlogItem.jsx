import React from 'react';
import PropTypes from 'prop-types';

const BlogItem = ({ blog, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-600 mb-4">{blog.content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div>
          <span className="font-semibold">Yazar:</span> {blog.author}
        </div>
        <div>
          <span className="font-semibold">Tarih:</span> {blog.date}
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onEdit(blog)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Düzenle
        </button>
        <button
          onClick={() => onDelete(blog.id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Sil
        </button>
      </div>
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