import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import EmptyState from '../../components/common/EmptyState.jsx'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <EmptyState title="Page not found" description="The page you are looking for is not available." />
      <div className="mt-6 flex justify-center">
        <Button as={Link} to="/">Go Home</Button>
      </div>
    </section>
  )
}
