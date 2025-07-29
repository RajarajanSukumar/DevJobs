import React from 'react'
import './JobDetails.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const JobDetails = ({devJobs, setSuccessMsg}) => {
  const {id} = useParams();
  const currentJob = devJobs.filter((job) => (
    job.id == id
  ))
  
const handleClick = (company) => {
  window.open(`https://${company}.com`, "_blank");
}  
  
  return (
    <div className='jobDetailsBox'>
      <div className="container">
          <div className='jobDescriptionHeader'>
        <div className='cName'>{currentJob[0].company}</div>
        <div className='cSite'>
            <div className='cSite1'>
                <h3 id='title'>{currentJob[0].company}</h3>
                <p id='web'>{currentJob[0].company}.com</p>
            </div>
            <div className='cSite2'>
                <button id='csButton' onClick={() => handleClick(currentJob[0].company)}>Company Site</button>
            </div>
        </div>
      </div>
      </div>
      
      <div className='jobDescriptionBody'>
        <div className='description1'>
          <div className='descTitle'>
            <span className='job-ti'>{currentJob[0].time}</span>
            <h3>{currentJob[0].title}</h3>
            <p className='job-lc'>{currentJob[0].location}</p>
          </div>
          <div className='buttonSpace'>
            <Link to='/apply'>
              <button className='applyButton' onClick={setSuccessMsg('')}>Apply Now</button>
            </Link>
          </div>  
        </div>
        <div className='description2'>
          <p className='descriptionDetails'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum ad quaerat modi placeat rem quo ab? Cumque eos quasi sed placeat, nam molestiae cum rerum assumenda, aliquam sapiente suscipit?
          Quas, necessitatibus ad culpa vitae assumenda voluptates eius maxime, consequatur ratione harum corrupti placeat libero officia autem architecto distinctio sed dolores repudiandae voluptatem labore provident. Ab ex omnis non eos.
          Ducimus repellendus quibusdam eum debitis? Rerum perspiciatis sint, dolorum asperiores maiores, architecto ut amet sunt error ducimus quisquam alias quas impedit accusantium aut. Quo voluptatem numquam, repellendus similique enim quidem?</p>
          <h4>Requirements</h4>
          <p className='descriptionDetails'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit magnam itaque optio debitis voluptas laudantium cum quos vel veritatis, ea assumenda quas veniam maiores doloribus atque dolore dolor nihil. Quia.
          Rerum nostrum doloremque dolorum pariatur incidunt cum doloribus, consectetur at suscipit reiciendis molestias tempora officia eveniet inventore voluptates illum veritatis assumenda vel enim vitae illo cupiditate vero odit ipsa. Quas.</p>
          <ul className='descriptionDetails'>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
            <li>Rerum nostrum doloremque dolorum pariatur incidunt cum doloribus</li>
            <li>molestias tempora officia eveniet inventore voluptates illum veritatis</li>
            <li>doloremque dolorum pariatur incidunt cum doloribus</li>
          </ul>
          <h4>What You Will Do</h4>
          <p className='descriptionDetails'>Eaque harum ad quaerat modi placeat rem quo ab? Cumque eos quasi sed placeat, nam molestiae cum rerum assumenda, aliquam sapiente suscipit?
          Quas, necessitatibus ad culpa vitae assumenda voluptates eius maxime, consequatur ratione harum corrupti placeat libero officia autem architecto distinctio sed dolores repudiandae voluptatem labore provident</p>
          <ol className='descriptionDetails'>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit</li>
            <li>Rerum nostrum doloremque dolorum pariatur incidunt cum doloribus</li>
            <li>molestias tempora officia eveniet inventore voluptates illum veritatis</li>
            <li>doloremque dolorum pariatur incidunt cum doloribus</li>
          </ol>
        </div>
      </div>
    </div>
    
  )
}

export default JobDetails