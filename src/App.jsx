import React, { useState } from 'react';
import BlogList from './components/Blogs/BlogList';
import AddNewBlog from './components/Blogs/AddNewBlog';
import { blogData } from './data/blogData';
import Button from './components/UI/Button';

// Main application component
function App() {
  // Get initial blogs from localStorage or default data
  const getInitialBlogs = () => {
    const saved = localStorage.getItem('blogs');
    return saved ? JSON.parse(saved) : blogData;
  };
  // State for blog list and add form visibility
  const [blogs, setBlogs] = useState(getInitialBlogs());
  const [showAddForm, setShowAddForm] = useState(false);

  // Update localStorage whenever blogs change
  React.useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  // Add a new blog post
  const handleAddBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header and add blog button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <Button
            color="blue"
            size="md"
            aria-label={showAddForm ? 'Back to Blog List' : 'Add New Blog'}
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? 'Back to Blog List' : 'Add New Blog'}
          </Button>
        </div>

        {/* Show add blog form or blog list */}
        {showAddForm ? (
          <AddNewBlog onAdd={handleAddBlog} />
        ) : (
          <BlogList blogs={blogs} setBlogs={setBlogs} />
        )}
      </div>
    </div>
  );
}

export default App;
