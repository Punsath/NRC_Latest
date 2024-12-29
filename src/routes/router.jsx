import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";

import { AboutUs } from "../pages/about-us/AboutUs";


import { Home } from "../pages/home/Home";
import { News } from "../pages/news/News";
import { SiteMap } from "../pages/services/SiteMap";
import { ContactUs } from "../pages/contact-us/ContactUs";



import { Wildlife } from "../pages/main-event/Wildlife";


import { AdminLayout } from "../components/layouts/AdminLayout";

import { Login } from "../pages/admin/Login";
import { SignUp } from "../pages/admin/SignUp";

import { Contactus } from "../pages/admin/contactus/Contactus";
import { Account } from "../pages/admin/account/Account";


import { Locations } from "../pages/admin/location/Locations";
import { AddLocation } from "../pages/admin/location/AddLocation";
import { EditLocation } from "../pages/admin/location/EditLocation";
import { Booking } from "../pages/admin/booking/Booking";

import { ContactDetails } from "../pages/admin/contact-details/ContactDetails";
import { AddContact } from "../pages/admin/contact-details/AddContact";
import { EditContact } from "../pages/admin/contact-details/EditContact";



import { PackagesAdd } from "../pages/admin/travel-package/PackagesAdd";
import { OptionsAdd } from "../pages/admin/travel-package/OptionsAdd";
import { CustomPackage } from "../pages/admin/custom-booking/CustomPackage";

import { Content1 } from "../pages/news/Content1";
import { Content2 } from "../pages/news/Content2";
import { Content3 } from "../pages/news/Content3";
import { Content4 } from "../pages/news/Content4";


import { GeneralTipsAndTricks } from "../pages/products/GeneralTipsAndTricks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      
     
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/products",
        element: <GeneralTipsAndTricks />,
      },
      {
        path: "/services",
        element: <SiteMap />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/main-events",
        element: <Wildlife />,
      },
      
     
     
     
      
     
      
      
      
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      
      {
        path: "/news-contentone",
        element: <Content1 />,
      },
      {
        path: "/news-contenttwo",
        element: <Content2 />,
      },
      {
        path: "/news-contentthree",
        element: <Content3 />,
      },
      {
        path: "/news-contentfour",
        element: <Content4 />,
      },
    
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
     
     
      
      
      {
        path: "contact",
        element: <Contactus />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    
     
      {
        path: "tourism-news",
        element: <News />,
      },
      {
        path: "site-map",
        element: <SiteMap />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "locations/add",
        element: <AddLocation />,
      },
      {
        path: "locations-edit/:id",
        element: <EditLocation />,
      },
      {
        path: "bookings",
        element: <Booking />,
  },
      
      {
        path: "package/package-add",
        element: <PackagesAdd />,
      },
      {
        path: "package/option-add",
        element: <OptionsAdd />,
      },
      {
        path: "custom-booking",
        element: <CustomPackage />,
      },
      {
        path: "contact-details",
        element: <ContactDetails />,
      },
      {
        path: "contact-details/add",
        element: <AddContact />,
      },
      {
        path: "contact-edit/:id",
        element: <EditContact />,
      },
    ],
  },
]);

export default router;
