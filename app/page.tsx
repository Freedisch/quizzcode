'use client'

import { DashboardHeader } from '@/components/header'
import { Icons } from '@/components/icons'
import DashboardLayout from '@/components/layout/dashboard-layout'
import Navbar from '@/components/navbar'
import { DashboardShell } from '@/components/shell'
import Sidebar from '@/components/sidebar'
import { Button } from '@/components/ui/Button'
import Dashboard from '@/pages/dashboard'
import { Link } from 'lucide-react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

const stars = 0
export default function Test() {
  const loading = true
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/courses" element={<Dashboard />} />
        <Route path="/quizzes" element={<Dashboard />} />
        <Route path="/scores" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
