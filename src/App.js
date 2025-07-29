import './App.css';
import Header from './Header';
import JobDetails from './JobDetails';
import Jobs from './Jobs';
import Search from './Search';
import Apply from './Apply';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const[searchDetails, setSearchDetails] = useState('');
  const[searchLocation, setSearchLocation] = useState('');
  const[isFullTime, setIsFullTime] = useState(false);
  const[displayCount,setDisplayCount] = useState(9);
  const[fullName, setFullName] = useState('');
  const[mail, setMail] = useState('');
  const[linkedInPage, setlinkedInPage] = useState('');
  const[message, setMessage] = useState('');
  const[successMsg, setSuccessMsg] = useState('');
  const devJobs = [
    {
      id : 1,
      time: '5h ago • Full Time',
      title: 'Senior Software Engineer',
      company: 'Scoot',
      location: 'United Kingdom',
    },
    {
      id : 2,
      time: '20h ago • Part Time',
      title: 'Haskell and PureScript Dev',
      company: 'Blogr',
      location: 'United States',
    },
    {
      id : 3,
      time: '1d ago • Part Time',
      title: 'Midlevel Back End Engineer',
      company: 'Vector',
      location: 'Russia',
    },
    {
      id : 4,
      time: '2d ago • Full Time',
      title: 'Senior Application Engineer',
      company: 'Office Lite',
      location: 'Japan',
    },
    {
      id : 5,
      time: '2d ago • Part Time',
      title: 'Remote DevOps Engineer',
      company: 'Pod',
      location: 'Thailand',
    },
    {
      id : 6,
      time: '1w ago • Part Time',
      title: 'iOS Engineer',
      company: 'Pomodoro',
      location: 'United States',
    },
    {
      id : 7,
      time: '1w ago • Part Time',
      title: 'Senior EJB Developer',
      company: 'Maker',
      location: 'United Kingdom',
    },
    {
      id : 8,
      time: '2w ago • Part Time',
      title: 'App & Website Desinger',
      company: 'Mastercraft',
      location: 'United States',
    },
    {
      id : 9,
      time: '1m ago • Part Time',
      title: 'Senior Front End Developer',
      company: 'Coffee Roasters',
      location: 'Germany',
    },
    {
      id : 10,
      time: '1m ago • Part Time',
      title: 'FullStack Developer',
      company: 'Crowdfund',
      location: 'New Zeland',
    },
    {
      id : 11,
      time: '2m ago • Part Time',
      title: 'Technical Lead Engineer',
      company: 'TypeMaster',
      location: 'United Kingdom',
    },
    {
      id : 12,
      time: '2m ago • Part Time',
      title: 'Desktop Support Manager',
      company: 'Creative',
      location: 'Germany',
    },
    {
      id : 13,
      time: '2d ago • Full Time',
      title: 'Senior Application Engineer',
      company: 'Office Lite',
      location: 'Japan',
    },
    {
      id : 14,
      time: '2d ago • Part Time',
      title: 'Remote DevOps Engineer',
      company: 'Pod',
      location: 'Thailand',
    },
    {
      id : 15,
      time: '1w ago • Part Time',
      title: 'iOS Engineer',
      company: 'Pomodoro',
      location: 'United States',
    },
    {
      id : 16,
      time: '2d ago • Full Time',
      title: 'Senior Application Engineer',
      company: 'Office Lite',
      location: 'Japan',
    },
    {
      id : 17,
      time: '2d ago • Part Time',
      title: 'Remote DevOps Engineer',
      company: 'Pomodoro',
      location: 'Thailand',
    },
    {
      id : 18,
      time: '1w ago • Part Time',
      title: 'iOS Engineer',
      company: 'Pomodoro',
      location: 'United States',
    }
  ];
  const[filterJobs, setFilterJobs] = useState(devJobs);

  const handleSearch = (e) => {
    e.preventDefault()
    if(searchDetails.length>0 || searchLocation.length>0 || isFullTime){
      var filteredJobsCompany = devJobs.filter((job) => (job.title).toLowerCase().includes(searchDetails.toLowerCase()) || (job.company).toLowerCase().includes(searchDetails.toLowerCase()))
      var filteredJobsLocation = filteredJobsCompany.filter((job) => (job.location).toLowerCase().includes(searchLocation.toLowerCase()))
      if(isFullTime){
        var fullTimeJobs = filteredJobsLocation.filter((job) => (job.time).toLowerCase().includes('full time'))
        setFilterJobs(fullTimeJobs)
      }else{ 
      var filteredJobs = filteredJobsLocation;
        setFilterJobs(filteredJobs)
      }
    }else{
      setFilterJobs(devJobs)
    }
    console.log(filteredJobs)
    
  }

  return (
    <main>
      <Header title = "Dev Jobs"/>
      <Search 
      searchDetails = {searchDetails}
      setSearchDetails = {setSearchDetails}
      searchLocation = {searchLocation} 
      setSearchLocation = {setSearchLocation} 
      isFulltTime = {isFullTime}
      setIsFullTime = {setIsFullTime}
      handleSearch = {handleSearch}/>
      <Routes>
        <Route path='/' element = {<Jobs 
        devJobs = {filterJobs}
        displayCount = {displayCount}
        setDisplayCount = {setDisplayCount}
        />} />
        <Route path='jobDetails/:id' element={<JobDetails 
        devJobs = {devJobs}  
        setSuccessMsg = {setSuccessMsg}
        />} />
        <Route path='apply' element={<Apply 
        fullName = {fullName}
        setFullName = {setFullName}
        mail = {mail}
        setMail = {setMail}
        linkedInPage = {linkedInPage}
        setlinkedInPage = {setlinkedInPage}
        message = {message}
        setMessage = {setMessage}
        successMsg = {successMsg}
        setSuccessMsg = {setSuccessMsg}
        devJobs = {devJobs}
        setFilterJobs = {setFilterJobs}/>} />
      </Routes>
    </main>
  );
}

export default App;
