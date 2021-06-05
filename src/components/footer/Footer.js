export default function Footer() {
	return (
		<footer className='bg-gray text-gray-lighter flex justify-evenly font-thin py-10 text-sm md:text-md'>
			<ul>
				<li className='uppercase font-normal'>Made by:</li>
				<li className='py-1'>
					<a
						href='https://www.sandertrolleboe.com'
						target='_blank'
						rel='noopener noreferrer'>
						Sander Trollebø Byrkjeland
					</a>
				</li>
				<li>
					Semester Project for{" "}
					<a
						href='https://www.noroff.no/'
						target='_blank'
						rel='noopener noreferrer'>
						Noroff
					</a>
				</li>
			</ul>
			<ul>
				<li className='uppercase font-normal'>Made Possible By:</li>
				<li className='py-1'>
					<a
						href='https://tailwindcss.com/'
						target='_blank'
						rel='noopener noreferrer'>
						Tailwind CSS
					</a>
				</li>
				<li className=' py-1'>
					<a
						href='https://strapi.io/'
						target='_blank'
						rel='noopener noreferrer'>
						Strapi.io
					</a>
				</li>
				<li>
					{" "}
					<a
						href='https://cloudinary.com/'
						target='_blank'
						rel='noopener noreferrer'>
						Cloudinary.com
					</a>
				</li>
			</ul>
			<ul>
				<li className='uppercase font-normal'>Photos From:</li>
				<li className='py-1'>
					<a
						href='https://www.pexels.com/'
						target='_blank'
						rel='noopener noreferrer'>
						Pexels.com
					</a>
				</li>
				<li>
					<a
						href='https://unsplash.com/'
						target='_blank'
						rel='noopener noreferrer'>
						Unsplash.com
					</a>
				</li>
			</ul>
		</footer>
	);
}
