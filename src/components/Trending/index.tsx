import MovieCard from './MovieCard'
import { moviesData } from './moviesData'

const Index = () => {
	return (
		<>
			<h3 className='border-b border-primary mt-12 mb-6 pb-4'>Trending</h3>
			<div className='grid grid-cols-4 gap-10 '>
				{moviesData.map(movie => (
					<MovieCard movie={movie} />
				))}
			</div>
		</>
	)
}

export default Index
