import React from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css'

const JobCard = ({ job,displayCount, setDisplayCount, index}) => {
  let loadMore = true;

  if(displayCount<index+1){
    loadMore = false;
  }

  return (
    <>
    { (loadMore) && 
        <div className='job-card'>
          <div className='job-header'>
            <span className='job-d1'>{job.time}</span>
          </div>
          <Link to={`jobDetails/${job.id}`}>
          <h3>{job.title}</h3>
          </Link>
          <p className='job-d1'>{job.company}</p>
          <p className='job-d2'>{job.location}</p>
       </div>
    } 
    {  (!loadMore && index===displayCount) &&
    <button className='lmButton' onClick={() => setDisplayCount(displayCount+3)}>Load More</button>
    }
    </>
  );
};

export default JobCard;
