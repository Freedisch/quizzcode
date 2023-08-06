'use client'

import { DashboardHeader } from '@/components/header'
import { Icons } from '@/components/icons'
import DashboardLayout from '@/components/layout/dashboard-layout'
import Navbar from '@/components/navbar'
import { DashboardShell } from '@/components/shell'
import Sidebar from '@/components/sidebar'
import { Button } from '@/components/ui/Button'
import Courses from '@/pages/courses'
import Dashboard from '@/pages/dashboard'
import Home from '@/pages/home'
import Quizzes from '@/pages/quizzes'
import Scores from '@/pages/scores'
import { Link } from 'lucide-react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

const stars = 0
export default function Test() {
  const loading = true
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
