const CourseModel = require('../Model/CourseModel')

const getCourses = async (req, resp) => {
  try {
    const courses = await CourseModel.find({})
    resp.json(courses)
  } catch (error) {
    console.error(error)
    resp.status(500).json({ error: 'Failed to fetch courses' })
  }
}

const addCourse = async (req, resp) => {
  try {
    const data = new CourseModel(req.body)
    const result = await data.save()
    resp.status(201).json(result)
  } catch (error) {
    console.error(error)
    resp.status(500).json({ error: 'Failed to add course' })
  }
}

const editCourse = async (req, resp) => {
  try {
    const data = await CourseModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!data) {
      return resp.status(404).json({ error: 'Course not found' })
    }
    resp.json(data)
  } catch (error) {
    console.error(error)
    resp.status(500).json({ error: 'Failed to update course' })
  }
}

const showCourse = async (req, resp) => {
  try {
    const showc = await CourseModel.findById(req.params.id)
    if (!showc) {
      return resp.status(404).json({ error: 'Course not found' })
    }
    resp.json(showc)
  } catch (error) {
    console.error(error)
    resp.status(500).json({ error: 'Failed to fetch course' })
  }
}

const deleteCourse = async (req, resp) => {
  try {
    const delc = await CourseModel.findByIdAndDelete(req.params.id)
    if (!delc) {
      return resp.status(404).json({ error: 'Course not found' })
    }
    resp.json({ message: 'Course deleted' })
  } catch (error) {
    console.error(error)
    resp.status(500).json({ error: 'Failed to delete course' })
  }
}

module.exports = { getCourses, addCourse, deleteCourse, editCourse, showCourse }