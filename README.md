# Blog Management Application

## Project Description
This project is a modern blog management application built with React and Tailwind CSS. Users can list blog posts, add new posts, view post details, edit and delete posts. The app includes extra features such as search, filtering, sorting, and form validation.

## Flow Diagram
```
User
  │
  ▼
Home Page (App.jsx)
  │
  ├── Blog List View
  │      │
  │      ├─ BlogList.jsx
  │      │     ├─ Search & Sort
  │      │     ├─ BlogItem.jsx (for each blog)
  │      │     │     ├─ Details (with Modal)
  │      │     │     ├─ Edit (with EditBlogModal.jsx)
  │      │     │     └─ Delete
  │      │     └─ EditBlogModal.jsx (modal for editing)
  │      │
  │      └─ Blog data: localStorage + blogData.js
  │
  └── Add New Blog View
       │
       └─ AddNewBlog.jsx (Form)
           └─ Button.jsx (Form submit)
```

## File and Folder Structure
```
src/
  components/
   Blogs/
    BlogList.jsx
    BlogItem.jsx
    AddNewBlog.jsx
    EditBlogModal.jsx
   UI/
    Button.jsx
  data/
   blogData.js
  App.jsx
  index.css
  main.jsx
```

## Features
- List blog posts
- Search and filter blog posts
- Sort by date or author
- View blog details in a modal
- Add, edit, and delete blog posts
- Form validation for all fields
- Responsive and modern UI (Tailwind CSS)
- Persistent blog data with localStorage
- Reusable Button component

## Installation and Usage
1. **Clone the repository:**
  ```bash
  git clone https://github.com/BerraUgur/simple-blog-manager.git
  cd simple-blog-manager
  ```
2. **Install dependencies:**
  ```bash
  npm install
  ```
3. **Start the project:**
  ```bash
  npm run dev
  ```
4. **Open the app in your browser:**
  - Usually [http://localhost:5173](http://localhost:5173)