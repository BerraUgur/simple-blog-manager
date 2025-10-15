import React, { useState } from 'react';
import BlogItem from './BlogItem';
import EditBlogModal from './EditBlogModal';
import PropTypes from 'prop-types';

const BlogList = ({ blogs, setBlogs }) => {
  // State for search term, sort option, and editing blog
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [editingBlog, setEditingBlog] = useState(null);

  // Delete a blog post by id
  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  // Set the blog to be edited
  const handleEdit = (blog) => {
    setEditingBlog(blog);
  };

  // Save the edited blog post
  const handleSaveEdit = (updatedBlog) => {
    setBlogs(blogs.map(blog => 
      blog.id === updatedBlog.id ? updatedBlog : blog
    ));
    setEditingBlog(null);
  };

  // Filter and sort blogs based on search and sort options
  // Filtering checks title, content, and author fields
  // Sorting by date (newest first) or author name (alphabetical)
  const filteredAndSortedBlogs = blogs
    .filter(blog => 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date) - new Date(a.date);
      }
      return a.author.localeCompare(b.author);
    });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search input and sort dropdown */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search blog..."
          className="flex-1 p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Sort by Date</option>
          <option value="author">Sort by Author</option>
        </select>
      </div>
      {/* Blog list grid */}
      <div className="grid gap-6">
        {filteredAndSortedBlogs.map(blog => (
          <BlogItem
            key={blog.id}
            blog={blog}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Edit modal for blog post */}
      {editingBlog && (
        <EditBlogModal
          blog={editingBlog}
          onClose={() => setEditingBlog(null)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  setBlogs: PropTypes.func.isRequired,
};

export default BlogList;