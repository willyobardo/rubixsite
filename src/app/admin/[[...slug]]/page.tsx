'use client'

import { useEffect } from 'react'

// Redireciona para o admin estático gerado pelo tinacms build (public/admin/index.html)
export default function AdminPage() {
  useEffect(() => {
    window.location.href = '/admin/index.html'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#002f43]">
      <p className="text-white font-[family-name:var(--font-inter)] text-lg">
        Carregando admin...
      </p>
    </div>
  )
}
