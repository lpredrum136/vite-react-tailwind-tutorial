import { BiHomeAlt, BiMoviePlay, BiInfoCircle } from 'react-icons/bi'
import NavItem, { Item } from './NavItem'

const defaultIconSize = { size: '1.875rem' }

const items: Item[] = [
	{ label: 'Home', icon: <BiHomeAlt {...defaultIconSize} />, active: true },
	{ label: 'Movies', icon: <BiMoviePlay {...defaultIconSize} /> },
	{ label: 'About', icon: <BiInfoCircle {...defaultIconSize} /> }
]

const Index = () => {
	return (
		<nav className='col-span-1 bg-cyan-200 flex justify-end'>
			<div className='mr-4'>
				<h1 className='uppercase text-primary p-4 border-b border-primary'>
					Phimmoi.net
				</h1>
				<ul className='mt-2'>
					{items.map((item, index) => (
						<NavItem item={item} key={index} />
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Index
