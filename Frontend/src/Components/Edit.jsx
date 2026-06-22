import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const [course, setCourse] = useState({
    id: '',
    cname: '',
    category: '',
    duration: '',
    level: '',
    imgurl: ''
  })
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:4000/course/${id}`)
      .then((res) => {
        if (res.data) {
          setCourse({
            id: res.data.id || '',
            cname: res.data.cname || '',
            category: res.data.category || '',
            duration: res.data.duration?.toString() || '',
            level: res.data.level || '',
            imgurl: res.data.imgurl || ''
          })
        }
      })
      .catch((err) => console.log(err))
  }, [id])

  const handleEdit = (e) => {
    e.preventDefault()
    axios
      .put(`http://localhost:4000/course/${id}`, {
        ...course,
        duration: Number(course.duration)
      })
      .then(() => navigate('/'))
      .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-7">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">Edit Course</h4>
              <form onSubmit={handleEdit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    id="courseId"
                    placeholder="Course Id"
                    value={course.id}
                    onChange={(e) => setCourse({ ...course, id: e.target.value })}
                  />
                  <label htmlFor="courseId">Course Id</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="cname"
                    id="courseName"
                    placeholder="Course Name"
                    value={course.cname}
                    onChange={(e) => setCourse({ ...course, cname: e.target.value })}
                  />
                  <label htmlFor="courseName">Course Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    id="courseCategory"
                    placeholder="Course Category"
                    value={course.category}
                    onChange={(e) => setCourse({ ...course, category: e.target.value })}
                  />
                  <label htmlFor="courseCategory">Course Category</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="duration"
                    id="courseDuration"
                    placeholder="Course Duration"
                    value={course.duration}
                    onChange={(e) => setCourse({ ...course, duration: e.target.value })}
                  />
                  <label htmlFor="courseDuration">Course Duration</label>
                </div>
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="courseLevel"
                    value={course.level}
                    onChange={(e) => setCourse({ ...course, level: e.target.value })}
                  >
                    <option value="">Select level</option>
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
                    name="imgurl"
                    id="courseImageUrl"
                    placeholder="Course Image URL"
                    value={course.imgurl}
                    onChange={(e) => setCourse({ ...course, imgurl: e.target.value })}
                  />
                  <label htmlFor="courseImageUrl">Course Image URL</label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
