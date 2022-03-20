import { useState } from 'react'
import { BiHomeAlt, BiMoviePlay, BiInfoCircle, BiMenu } from 'react-icons/bi'
import NavItem, { Item } from './NavItem'

const defaultIconSize = { size: '1.875rem' }

const items: Item[] = [
	{ label: 'Home', icon: <BiHomeAlt {...defaultIconSize} />, active: true },
	{ label: 'Movies', icon: <BiMoviePlay {...defaultIconSize} /> },
	{ label: 'About', icon: <BiInfoCircle {...defaultIconSize} /> }
]

const NavMenu = () => (
	<>
		{items.map((item, index) => (
			<NavItem item={item} key={index} />
		))}
	</>
)

const Index = () => {
	const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false)

	return (
		<nav className='col-span-1 bg-cyan-200 '>
			<div className='flex mx-4 justify-between items-center md:block'>
				<h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right'>
					Phimmoi.net
				</h4>
				{/* <ul className='hidden mt-2 md:block'>
					<NavMenu />
				</ul> */}
				<BiMenu
					className='cursor-pointer md:hidden'
					size='1.875rem'
					onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
				/>
			</div>
			<ul
				className={`mx-4 my-2${isNavMenuMobileOpen ? '' : ' hidden'} md:block`}
			>
				<NavMenu />
			</ul>
		</nav>
	)
}

export default Index
