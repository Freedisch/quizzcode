import React, { FunctionComponent } from 'react'
import Navbar from '../navbar'
import { DashboardNav } from '../navdash'
import { type } from 'os'
import { dashboardConfig } from '@/config/dashboard'
import { SiteFooter } from '../site-footer'
import DashboardSkeleton from '../ui/dashboard-skeleton'

interface DashboardLayoutProps {
  type: 'lister' | 'bidder' | 'none'
  loading: boolean
  heading: string
  text: string
  buttonLabel: string
  children?: React.ReactNode
}

const DashboardLayout: FunctionComponent<DashboardLayoutProps> = ({
  type,
  children,
  loading,
  text,
  buttonLabel,
  heading,
}) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background"></header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav
            items={
              type === 'none'
                ? []
                : type === 'lister'
                ? dashboardConfig.sidebarNav
                : dashboardConfig.sidebarNavBidder
            }
          />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {loading ? (
            <DashboardSkeleton
              text={text}
              buttonLabel={buttonLabel}
              heading={heading}
            />
          ) : (
            children
          )}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  )
}

export default DashboardLayout
