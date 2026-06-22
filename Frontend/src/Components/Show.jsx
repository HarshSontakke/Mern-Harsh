import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Show = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [course, setCourse] = useState()

  useEffect(() => {
    axios
      .get(`http://localhost:4000/course/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.log(err))
  }, [id])

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/course/${id}`)
      .then(() => navigate('/'))
      .catch((err) => console.log(err))
  }

  if (!course) {
    return <div className="container py-4">Loading course...</div>
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-8">
          <div className="card">
            <img
              className="card-img-top"
              src={course.imgurl}
              alt={course.cname || 'Course'}
            />
            <div className="card-body">
              <h4 className="card-title">{course.cname}</h4>
              <h5 className="card-subtitle mb-2 text-muted">{course.category}</h5>
              <p className="card-text">Duration: {course.duration}</p>
              <p className="card-text">Level: {course.level}</p>
               <div className="d-flex justify-content-center mt-3">
                <NavLink className="btn btn-secondary" to="/">
                  Home🏚️
                </NavLink>
                &nbsp;
                <NavLink className="btn btn-primary" to={`/edit/${id}`}>
                  Edit🔧
                </NavLink>
                 &nbsp;
                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show
