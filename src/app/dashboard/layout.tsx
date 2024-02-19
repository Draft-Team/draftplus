import { Sidebar } from '@/widgets/side-bar/side-bar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='grid min-h-screen lg:grid-cols-dashboard'>
				<Sidebar />
				<main className='mt-10 px-4 pb-12 pt-8 lg:col-start-2 lg:mt-0'>{children}</main>
			</div>
		</>
	)
}
