const express = require('express')
const { getCourses, addCourse, editCourse, deleteCourse, showCourse } = require('../Controller/Course')
const router = express.Router()

router.get('/', getCourses)
router.get('/:id', showCourse)
router.post('/', addCourse)
router.put('/:id', editCourse)
router.delete('/:id', deleteCourse)

module.exports = router