'use client'

import { useState, useEffect } from 'react'
import { Download, Users, TrendingUp, Award, RefreshCw, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

interface Stats {
  exhibitors: number
  visitors: number
  sponsors: number
  workshops: number
  total: number
  byCountry?: Record<string, number>
  byIndustry?: Record<string, number>
  boothSizes?: Record<string, number>
  sponsorshipLevels?: Record<string, number>
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [exporting, setExporting] = useState(false)

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {
    setLoading(true)
    try {
      const response = await fetch('/api/stats')
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleExport() {
    setExporting(true)
    try {
      const response = await fetch('/api/export/excel')
      if (!response.ok) throw new Error('Export failed')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `DoExim_Registrations_${new Date().toISOString().split('T')[0]}.xlsx`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error exporting:', error)
      alert('Failed to export data')
    } finally {
      setExporting(false)
    }
  }

  if (loading) {
    return (
      <main className="pt-32 pb-20 px-4 md:px-8 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground/60">Loading statistics...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-32 pb-20 px-4 md:px-8 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-light mb-2">Admin Dashboard</h1>
            <p className="text-foreground/60">DoExim Expo Registration Analytics</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={fetchStats}
              disabled={loading}
              className="px-4 py-2 bg-foreground text-primary-foreground rounded-sm hover:shadow-lg disabled:opacity-50 flex items-center gap-2 transition-shadow"
            >
              <RefreshCw size={18} />
              Refresh
            </button>
            <button
              onClick={handleExport}
              disabled={exporting}
              className="px-4 py-2 bg-accent text-white rounded-sm hover:shadow-lg disabled:opacity-50 flex items-center gap-2 transition-shadow"
            >
              <Download size={18} />
              {exporting ? 'Exporting...' : 'Export to Excel'}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Award, label: 'Exhibitors', value: stats?.exhibitors || 0 },
            { icon: Users, label: 'Visitors', value: stats?.visitors || 0 },
            { icon: TrendingUp, label: 'Sponsors', value: stats?.sponsors || 0 },
            { icon: BarChart3, label: 'Workshops', value: stats?.workshops || 0 },
          ].map((kpi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 bg-card border border-border rounded-sm hover:border-accent/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-foreground/60">{kpi.label}</h3>
                <kpi.icon size={20} className="text-accent" />
              </div>
              <p className="text-3xl font-light text-foreground">{kpi.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-card border border-border rounded-sm"
        >
          <h2 className="text-lg font-medium text-foreground mb-2">Total Registrations</h2>
          <p className="text-5xl font-light text-accent">{stats?.total || 0}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-card border border-border rounded-sm"
          >
            <h2 className="text-lg font-medium text-foreground mb-4">Exhibitors by Country</h2>
            <div className="space-y-2">
              {stats?.byCountry &&
                Object.entries(stats.byCountry).map(([country, count]) => (
                  <div key={country} className="flex justify-between items-center">
                    <span className="text-sm text-foreground/70">{country}</span>
                    <span className="font-medium text-foreground">{count}</span>
                  </div>
                ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-card border border-border rounded-sm"
          >
            <h2 className="text-lg font-medium text-foreground mb-4">Booth Sizes Distribution</h2>
            <div className="space-y-2">
              {stats?.boothSizes &&
                Object.entries(stats.boothSizes).map(([size, count]) => (
                  <div key={size} className="flex justify-between items-center">
                    <span className="text-sm text-foreground/70">{size}</span>
                    <span className="font-medium text-foreground">{count}</span>
                  </div>
                ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-card border border-border rounded-sm"
          >
            <h2 className="text-lg font-medium text-foreground mb-4">Exhibitor Industries</h2>
            <div className="space-y-2">
              {stats?.byIndustry &&
                Object.entries(stats.byIndustry).map(([industry, count]) => (
                  <div key={industry} className="flex justify-between items-center">
                    <span className="text-sm text-foreground/70">{industry}</span>
                    <span className="font-medium text-foreground">{count}</span>
                  </div>
                ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-card border border-border rounded-sm"
          >
            <h2 className="text-lg font-medium text-foreground mb-4">Sponsorship Levels</h2>
            <div className="space-y-2">
              {stats?.sponsorshipLevels &&
                Object.entries(stats.sponsorshipLevels).map(([level, count]) => (
                  <div key={level} className="flex justify-between items-center">
                    <span className="text-sm text-foreground/70">{level}</span>
                    <span className="font-medium text-foreground">{count}</span>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-accent/5 border border-accent/20 rounded-sm"
        >
          <h3 className="font-medium text-foreground mb-2">Data Export</h3>
          <p className="text-sm text-foreground/60 mb-4">
            Click the "Export to Excel" button to download all registration data in a formatted spreadsheet with separate sheets for each registration type.
          </p>
          <button
            onClick={handleExport}
            disabled={exporting}
            className="px-6 py-2 bg-accent text-white font-medium rounded-sm hover:shadow-lg disabled:opacity-50 flex items-center gap-2 transition-shadow"
          >
            <Download size={18} />
            {exporting ? 'Exporting...' : 'Download Excel Report'}
          </button>
        </motion.div>
      </div>
    </main>
  )
}
