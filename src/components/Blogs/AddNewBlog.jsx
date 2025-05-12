import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddNewBlog = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Başlık zorunludur';
    if (!formData.content.trim()) newErrors.content = 'İçerik zorunludur';
    if (!formData.author.trim()) newErrors.author = 'Yazar zorunludur';
    if (!formData.date) newErrors.date = 'Tarih zorunludur';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onAdd({
        ...formData,
        id: Date.now()
      });
      setFormData({
        title: '',
        content: '',
        author: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Yeni Blog Ekle</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Başlık</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">İçerik</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full p-2 border rounded h-32"
        />
        {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Yazar</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Tarih</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
      >
        Blog Ekle
      </button>
    </form>
  );
};

AddNewBlog.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddNewBlog; 