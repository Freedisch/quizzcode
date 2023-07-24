import { DashboardConfig } from '@/types'
export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Courses',
      href: '/courses',
    },
    {
      title: 'Quizzes',
      href: '/quizz',
    },
  ],
  sidebarNav: [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: 'users',
    },
    {
      title: 'List of courses',
      href: '/courses',
      icon: 'package',
    },
    {
      title: 'View quizzes',
      href: '/quizzes',
      icon: 'package',
    },
    {
      title: 'View scores',
      href: '/scores',
      icon: 'package',
    },
  ],
  sidebarNavBidder: [
    {
      title: 'My Courses',
      href: '/courses',
      icon: 'package',
    },
    {
      title: 'View quizzes',
      href: '/quizzes',
      icon: 'package',
    },
    {
      title: 'View scores',
      href: '/scores',
      icon: 'package',
    },
  ],
}
