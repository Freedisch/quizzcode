import type { Icon } from 'lucide-react'
import { Icons } from '@/components/icons'

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  sidebarNavBidder: SidebarNavItem[]
}
export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: Link[]
    }
)

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  sidebarNavBidder: SidebarNavItem[]
}
