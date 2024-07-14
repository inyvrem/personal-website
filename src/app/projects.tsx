"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const PROJECTS = [
//   {
//     img: "/image/blog-1.svg",
//     title: "Mobile App Development",
//     desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
//   },
//   {
//     img: "/image/blog2.svg",
//     title: "Landing Page Development",
//     desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
//   },
//   {
//     img: "/image/blog3.svg",
//     title: "Mobile App Development",
//     desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
//   },
//   {
//     img: "/image/blog4.svg",
//     title: "E-commerce development",
//     desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
//   },
//   {
//     img: "/image/blog-1.svg",
//     title: "Mobile App Development",
//     desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
//   },
//   {
//     img: "/image/blog2.svg",
//     title: "Landing Page Development",
//     desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
//   },
//   {
//     img: "/image/blog3.svg",
//     title: "Mobile App Development",
//     desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
//   },
//   {
//     img: "/image/blog4.svg",
//     title: "E-commerce development",
//     desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
//   },
// ];

export function Projects() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8082/back-office/admin/web-manage/web-portfolio/details/09e33cad-13d4-483d-ab9e-f76032704ec7');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
        {data? data.title:"title"}
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          {data? data.description:"description"}
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {data?
        data.subPortfolioContents.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        )):"sub"
        }
      </div>
    </section>
  );

}

export default Projects;
