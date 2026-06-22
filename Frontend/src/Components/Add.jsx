import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {
  const [course, setCourse] = useState({
    id: '',
    cname: '',
    category: '',
    duration: '',
    level: '',
    imgurl: ''
  })
  const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitting Course :', course)
        axios.post('http://localhost:4000/course/', course)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))
    }

  return (
    <div className="container py-4">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Add New Course</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="courseId"
                    placeholder="Course Id"
                    value={course.id}
                    required
                    onChange={(e) => setCourse({ ...course, id: e.target.value })}
                  />
                  <label htmlFor="courseId">Course Id</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="courseName"
                    placeholder="Course Name"
                    value={course.cname}
                    required
                    onChange={(e) => setCourse({ ...course, cname: e.target.value })}
                  />
                  <label htmlFor="courseName">Course Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="courseCategory"
                    placeholder="Course Category"
                    value={course.category}
                    required
                    onChange={(e) => setCourse({ ...course, category: e.target.value })}
                  />
                  <label htmlFor="courseCategory">Course Category</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="courseDuration"
                    placeholder="Course Duration"
                    value={course.duration}
                    required
                    onChange={(e) => setCourse({ ...course, duration: e.target.value })}
                  />
                  <label htmlFor="courseDuration">Course Duration</label>
                </div>
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="courseLevel"
                    value={course.level}
                    required
                    onChange={(e) => setCourse({ ...course, level: e.target.value })}
                  >
                    <option value="">Select Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advance">Advance</option>
                  </select>
                  <label htmlFor="courseLevel">Course Level</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="url"
                    className="form-control"
                    id="courseImageUrl"
                    placeholder="Course Image URL"
                    value={course.imgurl}
                    required
                    onChange={(e) => setCourse({ ...course, imgurl: e.target.value })}
                  />
                  <label htmlFor="courseImageUrl">Course Image URL</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Add Course
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
