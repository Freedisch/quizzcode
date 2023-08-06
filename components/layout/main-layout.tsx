import Courses from '@/pages/courses'
import Quizzes from '@/pages/quizzes'
import Scores from '@/pages/scores'
import { Home } from 'lucide-react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function Mainlayout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/scores" element={<Scores />} />
    </Routes>
  )
}
