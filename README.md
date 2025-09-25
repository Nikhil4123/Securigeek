# Issue Tracker Application

This is a full-stack issue tracker application with:
- Backend: Express.js with MongoDB
- Frontend: React with Vite and Tailwind CSS (with Dark Mode)

## Project Structure

```
.
├── .gitignore
├── backend/
│   ├── models/
│   │   └── Issue.js
│   ├── routes/
│   │   └── issues.js
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── IssueList.jsx
    │   │   ├── IssueDetail.jsx
    │   │   ├── CreateIssueForm.jsx
    │   │   └── EditIssueForm.jsx
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Application Screenshots

### Dashboard with Filters
![Dashboard with all filters](images/image1.png)

### Create Issue Form
![Create Issue Form](images/image2.png)

### Issue Details View
![Issue Details View](images/image3.png)

### JSON Response Format
![JSON Response Format](images/image4.png)

## Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

   Or start the production server:
   ```
   npm start
   ```

4. Seed the database with dummy data:
   ```
   npm run seed
   ```

The backend server will run on http://localhost:5001

## Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

The frontend will run on http://localhost:3000

## API Endpoints

### Health Check
- `GET /health` → Returns `{ "status": "ok" }`

### Issues
- `GET /issues` → Get all issues with search, filter, sort, and pagination support
- `GET /issues/:id` → Get a specific issue by ID
- `POST /issues` → Create a new issue
- `PUT /issues/:id` → Update an existing issue

## Features Implemented

### Backend
- ✅ `GET /health` → Returns `{ "status": "ok" }`
- ✅ `GET /issues` → Supports search by title, filters, sorting, and pagination
- ✅ `GET /issues/:id` → Returns single issue
- ✅ `POST /issues` → Creates new issue with auto-generated id, createdAt, and updatedAt
- ✅ `PUT /issues/:id` → Updates issue and refreshes updatedAt
- ✅ Dummy data seeding script

### Frontend
- ✅ Issues List Page:
  - ✅ Display table with columns: title, status, priority, assignee, updatedAt
  - ✅ Provide filters for status, priority, and assignee
  - ✅ Implement search box
  - ✅ Enable sorting
  - ✅ Support pagination
  - ✅ Include action buttons: Create Issue and Edit Issue
  - ✅ Clicking a row opens Issue Detail view
- ✅ Issue Detail Page:
  - ✅ Show full issue details in a structured view
  - ✅ Display raw JSON data
- ✅ Create and Edit Forms:
  - ✅ Professional form layouts
  - ✅ Validation and error handling
  - ✅ Loading states
- ✅ Dark Mode:
  - ✅ Toggle between light and dark themes
  - ✅ Consistent styling across all components
  - ✅ Proper contrast for readability
- ✅ Full Screen Utilization:
  - ✅ Responsive design that uses the entire screen
  - ✅ Improved spacing and layout
  - ✅ Better visual hierarchy

## UI Improvements with Tailwind CSS

The frontend has been enhanced with Tailwind CSS to provide a modern, responsive, and visually appealing user interface:

- **Modern Design**: Clean, professional interface with consistent spacing and typography
- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop devices
- **Color-coded Statuses**: Visual indicators for issue status (open, in-progress, closed) and priority (low, medium, high)
- **Enhanced Data Visualization**: Improved table design with hover effects and clear visual hierarchy
- **Professional Forms**: Well-structured forms with proper labeling and validation feedback
- **Intuitive Navigation**: Clear navigation between views with consistent button styling
- **Loading States**: Visual feedback during data fetching and form submissions
- **Error Handling**: Clear error messaging with icon indicators
- **Dark Mode**: Toggle between light and dark themes for user preference
- **Full Screen Utilization**: Better use of screen space with improved layouts

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
PORT=5001
MONGODB_URI=mongodb+srv://nikhilsarak612w_db_user:43AdtCjOf9VA0xsV@cluster0.58ijtmc.mongodb.net/issue_tracker?retryWrites=true&w=majority&appName=Cluster0
```

## Requirements Fulfilled

### Part 1: Backend (Express.js)
- ✅ `GET /health` → Returns `{ "status": "ok" }`
- ✅ `GET /issues` → Supports search by title, filters, sorting, and pagination
- ✅ `GET /issues/:id` → Returns single issue
- ✅ `POST /issues` → Creates new issue with auto-generated id, createdAt, and updatedAt
- ✅ `PUT /issues/:id` → Updates issue and refreshes updatedAt

### Part 2: Frontend (React with Vite and Tailwind CSS)
- ✅ Issues List Page:
  - ✅ Display table with columns: title, status, priority, assignee, updatedAt
  - ✅ Provide filters for status, priority, and assignee
  - ✅ Implement search box
  - ✅ Enable sorting
  - ✅ Support pagination
  - ✅ Include action buttons: Create Issue and Edit Issue
  - ✅ Clicking a row opens Issue Detail view
- ✅ Issue Detail Page:
  - ✅ Show full issue details in a structured view
  - ✅ Display raw JSON data
- ✅ Dark Mode Support:
  - ✅ Toggle button in header
  - ✅ Consistent dark theme across all components
- ✅ Full Screen Utilization:
  - ✅ Improved layouts that make better use of screen space
  - ✅ Responsive design for all device sizes