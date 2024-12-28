"use client"

import * as React from "react"
import { AudioWaveform, BookOpen, Bot, Command, Frame, GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal, Briefcase, CheckSquare, Users, Settings, BarChart } from 'lucide-react'

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/john-doe.jpg",
    role: "Manager",
  },
  teams: [
    {
      name: "Development Team",
      logo: Briefcase,
      members: 8,
    },
    {
      name: "Design Team",
      logo: Briefcase,
      members: 5,
    },
    {
      name: "Marketing Team",
      logo: Briefcase,
      members: 4,
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: BarChart,
      isActive: true,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: Briefcase,
      items: [
        {
          title: "All Projects",
          url: "/projects",
        },
        {
          title: "Create Project",
          url: "/projects/create",
        },
      ],
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: CheckSquare,
      items: [
        {
          title: "My Tasks",
          url: "/tasks/my-tasks",
        },
        {
          title: "Assigned Tasks",
          url: "/tasks/assigned",
        },
        {
          title: "Completed Tasks",
          url: "/tasks/completed",
        },
      ],
    },
    {
      title: "Team",
      url: "/team",
      icon: Users,
      items: [
        {
          title: "Members",
          url: "/team/members",
        },
        {
          title: "Roles",
          url: "/team/roles",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Notifications",
          url: "/settings/notifications",
        },
        {
          title: "Security",
          url: "/settings/security",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Website Redesign",
      url: "/projects/website-redesign",
      icon: Briefcase,
    },
    {
      name: "Mobile App",
      url: "/projects/mobile-app",
      icon: Briefcase,
    },
    {
      name: "CRM Integration",
      url: "/projects/crm-integration",
      icon: Briefcase,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

