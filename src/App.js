import React from "react";
import Home from "./view/Home";
import { Routes, Route } from "react-router-dom";
// import Login from "./component/Login";
import ProtectedRoute from "./component/ProtectedRoute";
import PrivacyPolicy from "./view/PrivacyPolicy";
import UserDetails from './view/UserDetails';
import Users from './view/Users'
import TermsAndConditions from './view/TermsAndConditions';
import BlogDetails from './view/BlogDetails';
import ProductDetails from './view/ProductDetails';
import CourseDetails from './view/CourseDetails'
import AddBanner from './view/AddBanners'
import AddTicket from './view/AddTicket'
import TicketDetails from './view/TicketDetails'
import AllBlogs from './view/AllBlogs'
import MoonCalender from './view/MoonCalander'
import AllUsers from './view/AppUsers'
import AppUserDetails from './view/AppUserDetails'
import MoonCalenderBlogDeatils from "./view/MoonCalenderBlogDeatils";
import Login from "./Pages/Login/Login";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/home/:id" element={<UserDetails />} />
          <Route path="/users" element={<Users />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/blog-detail/:id" element={<BlogDetails />} />
          <Route path="/product-detail/:userName" element={<ProductDetails />} />
          <Route path="/course-detail/:id" element={<CourseDetails />} />
          <Route path="/addBanners" element={<AddBanner />} />
          <Route path="/addTicket" element={<AddTicket />} />
          <Route path="/ticketDetails/:id" element={<TicketDetails />} />
          <Route path="/allBlogs/" element={<AllBlogs />} />
          <Route path="/moonCalender/" element={<MoonCalender />} />
          <Route path="/moonCalenderBlogDeatils/:id" element={<MoonCalenderBlogDeatils />} />

          <Route path="/appUsers/" element={<AllUsers />} />
          <Route path="/appUsersDetails/:id" element={<AppUserDetails />} />


        </Route>
      </Routes>
    </div>
  );
}

export default App;
