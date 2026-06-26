import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import SectionHeader from '../../components/common/SectionHeader.jsx'
import StatCard from '../../components/cards/StatCard.jsx'
import { apiEndpoints } from '../../services/api.js'

export default function Home() {
  const [apiStatus, setApiStatus] = useState('Checking API connection...')

  useEffect(() => {
    let isMounted = true

    apiEndpoints.health()
      .then((response) => {
        if (isMounted) setApiStatus(response.data.message || 'API is running')
      })
      .catch(() => {
        if (isMounted) setApiStatus('API will show online after Laravel is running')
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
        <div>
          <SectionHeader
            eyebrow="Transport and logistics"
            title="Shree Sajha Transport"
            description="Clean project foundation for a Nepal-based goods transport company, ready for frontend UI work and Laravel API development."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to="/booking">Start Booking</Button>
            <Button as={Link} to="/estimate" variant="outline">Get Estimate</Button>
          </div>
        </div>
        <div className="grid gap-4">
          <StatCard label="Initial Branches" value="3" helper="Kathmandu, Butwal, Bhairahawa" />
          <StatCard label="API Status" value="Ready" helper={apiStatus} />
          <StatCard label="Stack" value="React + Laravel" helper="REST API with Sanctum planned" />
        </div>
      </div>
    </section>
  )
}
