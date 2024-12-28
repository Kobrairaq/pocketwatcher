"use client";

import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Briefcase, MoreHorizontal, Plus, Search } from "lucide-react";

// Mock data for projects
const projects = [
  {
    id: 1,
    name: "Website Redesign",
    status: "In Progress",
    tasks: 12,
    completion: 60,
  },
  {
    id: 2,
    name: "Mobile App Development",
    status: "Planning",
    tasks: 8,
    completion: 20,
  },
  {
    id: 3,
    name: "Database Migration",
    status: "Completed",
    tasks: 15,
    completion: 100,
  },
  {
    id: 4,
    name: "E-commerce Platform",
    status: "In Progress",
    tasks: 20,
    completion: 45,
  },
  {
    id: 5,
    name: "CRM Integration",
    status: "On Hold",
    tasks: 10,
    completion: 30,
  },
];

export default function AllProjectsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col h-screen">
          <header className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold">All Projects</h1>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Project
            </Button>
          </header>
          <main className="flex-grow p-6 overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  className="pl-8"
                  placeholder="Search projects..."
                  type="search"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Filter</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>All</DropdownMenuItem>
                  <DropdownMenuItem>In Progress</DropdownMenuItem>
                  <DropdownMenuItem>Planning</DropdownMenuItem>
                  <DropdownMenuItem>Completed</DropdownMenuItem>
                  <DropdownMenuItem>On Hold</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Tasks</TableHead>
                  <TableHead>Completion</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">
                      {project.name}
                    </TableCell>
                    <TableCell>{project.status}</TableCell>
                    <TableCell>{project.tasks}</TableCell>
                    <TableCell>{project.completion}%</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit project</DropdownMenuItem>
                          <DropdownMenuItem>View tasks</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            Delete project
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
