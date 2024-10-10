import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { FC, PropsWithChildren } from 'react'

export const queryClient = new QueryClient()

const TanstackQuery: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default TanstackQuery
