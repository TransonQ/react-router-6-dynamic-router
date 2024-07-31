import { useDynamicRoutes } from '@/hooks'
import { matchRoutes, useLocation } from 'react-router-dom'

export function WildCardPage() {
  const location = useLocation()
  const { dynamicRoutes, isLoading } = useDynamicRoutes()

  if (isLoading) {
    return (
      <div>
        <h1 className="bg-slate-300">{'Checking current route...'}</h1>
      </div>
    )
  }

  const notFound = !matchRoutes(dynamicRoutes, location)

  if (notFound) {
    return (
      <div className="">
        <div className="bg-red-700 rounded-md text-white p-4 w-1/2">
          {'Not Found'}
        </div>
      </div>
    )
  }
}
