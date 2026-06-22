import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4000/course')
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
      </div>
      <div className="row g-3">
        {
        courses.map((course) => (
          <div className="col-md-4" key={course._id || course.id}>
            <div className="card h-100">
              <img
                className="card-img-top"
                src={course.imgurl}
                alt={course.cname || 'Course Image'}
              />
              <div className="card-body">
                <h5 className="card-title">{course.cname}</h5>
                <p className="card-text">Category: {course.category}</p>
                <p className="card-text">Duration: {course.duration}</p>
                <p className="card-text">Level: {course.level}</p>
                <div className="d-flex justify-content-center mt-3">
                  <NavLink className="btn btn-primary" to={`/show/${course._id}`}>
                    View
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
