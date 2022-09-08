import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './index.css';
import App from './App';
import Error from './Layouts/Error'
import Home from './routes/Home';
import CoursePage from './routes/CoursePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="course/:courseId" element={<CoursePage />} />
        <Route
          path="*"
          element={<Error />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);