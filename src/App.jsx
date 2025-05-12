import React, { useState } from 'react';
import BlogList from './components/Blogs/BlogList';
import AddNewBlog from './components/Blogs/AddNewBlog';
import { blogData } from './data/blogData';

function App() {
  const [blogs, setBlogs] = useState(blogData);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Yönetimi</h1>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            {showAddForm ? 'Blog Listesine Dön' : 'Yeni Blog Ekle'}
          </button>
        </div>

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
