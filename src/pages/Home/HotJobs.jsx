import React, { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://job-portal-server-orpin-seven.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="mt-12">
      <div className="text-center">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Explore the Latest Opportunities
        </h1>
        <p className="w-1/2 mx-auto mt-2">
          Explore the latest job opportunities that match your skills and
          aspirations. Take the next step towards a brighter career today!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
