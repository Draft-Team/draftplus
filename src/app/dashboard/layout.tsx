import { Sidebar } from '@/widgets/side-bar/side-bar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='grid-cols-dashboard grid min-h-screen'>
				<Sidebar />
				<main className='px-4 pb-12 pt-8 lg:col-start-2'>{children}</main>
			</div>
		</>
	)
}
