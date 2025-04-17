import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Personnel Management | Defence Management System",
  description: "Manage military personnel",
}

export default function PersonnelPage() {
  return (
    <div className="flex flex-col">
      <div className="relative w-full bg-gradient-to-r from-purple-800 to-slate-800 py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-slate-900/70"></div>
        <div className="relative container py-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-white mb-2">Personnel Management</h1>
            <p className="text-slate-200 mb-4">Track and manage all personnel in the base</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950"></div>
      </div>

      <div className="container py-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Personnel Directory</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-slate-300 hover:border-slate-400">
              Export Data
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Personnel
            </Button>
          </div>
        </div>

        <Card className="shadow-md border-slate-200 dark:border-slate-700">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-b">
            <CardTitle className="text-xl text-purple-800 dark:text-purple-400">Personnel Directory</CardTitle>
            <CardDescription>Manage all personnel and their assignments</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center py-10">
              <p className="text-muted-foreground">Personnel management functionality coming soon.</p>
              <p className="text-sm text-muted-foreground mt-2">This feature is under development.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
