import React from 'react'
import JobGrid from './JobGrid'

const Jobs = ({devJobs, displayCount, setDisplayCount}) => {
  return (
    <div>
        {devJobs.length>0 ? (
            <JobGrid devJobs={devJobs}
            displayCount = {displayCount}
            setDisplayCount = {setDisplayCount}
            />
        ) : 
        <p>No Jobs available now</p>}
    </div>
  )
}

export default Jobs