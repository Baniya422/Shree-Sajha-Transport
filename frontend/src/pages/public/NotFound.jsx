import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import EmptyState from '../../components/common/EmptyState.jsx'
import PageHeader from '../../components/common/PageHeader.jsx'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl py-20 sm:py-24 lg:py-28">
      <PageHeader
        eyebrow="404"
        title="This route does not exist"
        description="The requested page is not available, but the rest of the transport experience is one click away."
      />
      <div className="mt-8">
        <EmptyState title="Page not found" description="The page you are looking for is not available." />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button as={Link} to="/">Go Home</Button>
        <Button as={Link} to="/contact" variant="outline">Contact Support</Button>
      </div>
    </section>
  )
}
