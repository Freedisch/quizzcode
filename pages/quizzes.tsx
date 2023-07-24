import { DashboardHeader } from '@/components/header'
import { Icons } from '@/components/icons'
import DashboardLayout from '@/components/layout/dashboard-layout'
import Navbar from '@/components/navbar'
import { DashboardShell } from '@/components/shell'
import Sidebar from '@/components/sidebar'
import { Button } from '@/components/ui/Button'
import { Link } from 'lucide-react'
import React from 'react'

export default function Quizzes() {
  const loading = true
  return (
    <div>
      <div className="mt-20">
        <DashboardLayout
          type="bidder"
          loading={loading}
          heading="My Quizzes"
          text="Leverage your skills by taking a new real-time assessement"
          buttonLabel="Latest updates"
        >
          <DashboardShell>
            <DashboardHeader
              heading="My quizzes"
              text="View and manage your quizzes."
            >
              <Link to="/bid/all">
                <Button variant="outline">
                  <Icons.add className="mr-2 h-4 w-4" />
                  Available Bids
                </Button>
              </Link>
            </DashboardHeader>

            {/* <ContractTable contracts={contracts} /> */}
          </DashboardShell>
        </DashboardLayout>
      </div>
    </div>
  )
}
