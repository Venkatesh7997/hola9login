import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./UesrDashboard.css"

const UesrDashboard = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
  
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];   
      setSelectedFile(file);
    }
  return (
    <div>
      <main>
        <div className="container">
          <header className="heading">
            <div className="green-bar" />
            <h1 id="title" className="main-heading">
              Empolyee Details
            </h1>
            <p id="description" className="main-description">
              HOLA9 CLASSIFIEDS INDIA PRIVATE LIMITED
            </p>
            <hr />
          </header>
          <form action="#" method="post" id="survey-form" className="survey-form">
            <label htmlFor="name" id="name-label">
              Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="name"
              placeholder="Enter your full name"
              required=""
            />
            <label htmlFor="email" id="email-label">
              Task<span className="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="name"
              placeholder="Enter your Task"
              required=""
            />
            <label>Select a date range:</label>
            <div>
              <span>From :{" "}</span>
              <DatePicker 
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd-MM-yyyy"
                required
                className='date'
                
              />
            </div>
            <div>
              <span style={{paddingRight:"20px"}}>To : {" "}</span>
              <DatePicker 
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="dd-MM-yyyy"
                required
                className='date'
                
              />
            </div>

            <label htmlFor="dropdown" id="dropdown-label">
              Report of Work?<span className="required">*</span>
            </label>
            <select name="dropdown" id="dropdown" className="dropdown" required="">
              <option value="">Select an option</option>
              <option value={1}>Daily</option>
              <option value={2}>Weekly</option>
              <option value={3}>15days</option>
              <option value={4}>monthly</option>
            </select>
            <p className="radio-btn-description">
              How much complate work?<span className="required">*</span>
            </p>
            <label className="radio-btn-label" htmlFor="very-easy">
              <input
                type="radio"
                id="very-easy"
                name="ease-of-use"
                className="ease-of-use"
                defaultValue="very easy"
                defaultChecked=""
              />{" "}
              25%
            </label>
            <label className="radio-btn-label" htmlFor="easy">
              <input
                type="radio"
                id="easy"
                name="ease-of-use"
                className="ease-of-use"
                defaultValue="easy"
              />{" "}
              50%
            </label>
            <label className="radio-btn-label" htmlFor="intermediate">
              <input
                type="radio"
                id="intermediate"
                name="ease-of-use"
                className="ease-of-use"
                defaultValue="intermediate"
              />{" "}
              75%
            </label>
            <label className="radio-btn-label" htmlFor="difficult">
              <input
                type="radio"
                id="difficult"
                name="ease-of-use"
                className="ease-of-use"
                defaultValue="difficult"
              />{" "}
              100%
            </label>
            <label>File Upload</label>
            <input type="file" onChange={handleFileChange} />
            <button  type="submit" id="submit"
            className="submit1" disabled={!selectedFile}>
              Upload your file
            </button>

            <label htmlFor="comments">Any comments or suggestions?</label>
            <textarea
              name="comments"
              id="comments"
              cols={30}
              rows={5}
              placeholder="Enter your suggestions here"
              defaultValue={""}
            />
            <Link to="/AdminDashboard">
            <input
              type="submit"
              id="submit"
              className="submit"
              defaultValue="Submit"
            />
            </Link>
          </form>
          <footer>
            <p>
              Created by{" "}
              <a href="">Akhil Goud</a>
            </p>
          </footer>
        </div>
      </main>

    </div>
  )
}

export default UesrDashboard