import React from 'react'
import JobCard from './JobCard'

const JobGrid = ({devJobs, displayCount, setDisplayCount}) => {
  return (
    <div className='job-grid'>
    {devJobs.map((job, index) => (
        <JobCard key={job.id} job={job}  displayCount = {displayCount}
        setDisplayCount = {setDisplayCount} index={index} 
        />
    ))}
    </div>
  )
}

export default JobGrid