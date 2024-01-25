'use client'

import { usePathname } from 'next/navigation'
import { Tabs, Tab } from '@nextui-org/tabs'

const AdminTabs = () => {
	const pathname = usePathname()
	console.log(pathname)

	return (
		<Tabs
			aria-label='Settings tabs'
			selectedKey={pathname}
			items={TABS}
		>
			{(item) => (
				<Tab
					key={item.path}
					title={item.title}
					href={item.path}
				/>
			)}
		</Tabs>
	)
}

export default AdminTabs

const TABS = [
	{
		path: '/admin',
		title: 'Manage Admins',
	},
	{
		path: '/admin/bans',
		title: 'Manage Bans',
	},
	{
		path: '/admin/mutes',
		title: 'Manage Mutes',
	},
	{
		path: '/admin/logs',
		title: 'Logs',
	},
	{
		path: '/admin/settings',
		title: 'Panel Settings',
	},
]
