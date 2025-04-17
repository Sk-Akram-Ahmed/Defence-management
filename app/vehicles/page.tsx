import Link from "next/link"
import { Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import VehicleInventory from "@/components/vehicle-inventory"

export default function VehiclesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 font-bold">
            <Shield className="h-6 w-6 text-emerald-600" />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Defence Management System
            </span>
          </div>
          <nav className="ml-auto flex gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-emerald-600 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/weapons"
              className="text-sm font-medium text-muted-foreground hover:text-emerald-600 transition-colors"
            >
              Weapons
            </Link>
            <Link href="/vehicles" className="text-sm font-medium relative group">
              Vehicles
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 transform scale-x-100"></span>
            </Link>
            <Link
              href="/personnel"
              className="text-sm font-medium text-muted-foreground hover:text-emerald-600 transition-colors"
            >
              Personnel
            </Link>
            <Link
              href="/reports"
              className="text-sm font-medium text-muted-foreground hover:text-emerald-600 transition-colors"
            >
              Reports
            </Link>
          </nav>
          <div className="ml-4 flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
            >
              Log Out
            </Button>
          </div>
        </div>
      </header>
      <div className="relative w-full bg-gradient-to-r from-blue-800 to-slate-800 py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/70"></div>
        <div className="relative container py-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-white mb-2">Vehicle Management</h1>
            <p className="text-slate-200 mb-4">Track and manage all vehicles in the base fleet</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950"></div>
      </div>
      <main className="flex-1">
        <div className="container py-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Truck className="h-4 w-4 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Vehicle Fleet</h2>
              </div>
              <p className="text-muted-foreground mt-1">Manage all vehicles and their deployment status</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-slate-300 hover:border-slate-400">
                Generate Report
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Add New Vehicle
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <VehicleInventory />
          </div>
        </div>
      </main>
      <footer className="border-t py-4 bg-slate-800 text-white">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-slate-300">Defence Management System v1.0</p>
          <p className="text-sm text-slate-300">© {new Date().getFullYear()} Military Command</p>
        </div>
      </footer>
    </div>
  )
}
