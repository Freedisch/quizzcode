import { DashboardConfig } from '@/types'
export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Courses',
      href: '/',
    },
    {
      title: 'Quizzes',
      href: '/quizz',
    },
  ],
  sidebarNav: [
    {
      title: 'Dashboard',
      href: '/',
      icon: 'users',
    },
    {
      title: 'List of courses',
      href: '/',
      icon: 'package',
    },
    {
      title: 'View quizzes',
      href: '/',
      icon: 'package',
    },
    {
      title: 'View scores',
      href: '/',
      icon: 'package',
    },
  ],
  sidebarNavBidder: [
    {
      title: 'My Courses',
      href: '/',
      icon: 'package',
    },
    {
      title: 'View quizzes',
      href: '/',
      icon: 'package',
    },
    {
      title: 'View scores',
      href: '/',
      icon: 'package',
    },
  ],
}
