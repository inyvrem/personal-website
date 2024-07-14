"use client";

import { Typography } from "@material-tailwind/react";
import { SkillCard } from "@/components";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Skills() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8082/back-office/admin/web-manage/web-about/details/C3E7C0F9-8405-499E-925C-57FA6FF9162C'); // Replace with your Java backend API endpoint
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
        {data? data.title:"title"}
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
         {data? data.description:"description"}
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">    
        {data? 
        data.subAboutContent.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        )) 
        : "sub"
        }
      </div>
    </section>
  );
}

export default Skills;
