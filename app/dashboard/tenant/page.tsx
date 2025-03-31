'use client'

import ProtectedRoute from '@/components/protected-route'

export default function TenantDashboard() {
  return (
    <ProtectedRoute allowedRoles={['TENANT']}>
      <main className="min-h-screen bg-[#F8FAFC] p-8">
        <h1 className="text-3xl font-bold mb-8">Tenant Dashboard</h1>
        {/* Dashboard content will be added here */}
      </main>
    </ProtectedRoute>
  )
} 