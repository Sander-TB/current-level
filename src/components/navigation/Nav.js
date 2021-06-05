import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

export default function Nav() {
	return (
		<header className='flex flex-col'>
			<nav className='flex flex-col md:flex-row items-center py-5 justify-between px-20 w-full bg-gray'>
				<div className='lg:w-1/3 md:w-1/2 justify-start'>
					<Link to='/' className='flex flex-row items-center'>
						<img src={Logo} alt='Logo' className='lg:w-20 w-16' />
						<p className='pl-3 text-3xl md:text-4xl lg:text-5xl text-white font-thin'>
							Current Level
						</p>
					</Link>
				</div>
				<div className='flex flex-row items-center justify-center md:justify-end md:items-end text-lg uppercase font-thin w-full mt-5 md:mt-0 md:w-1/2 lg:w-1/3 text-white'>
					<Link
						to='/products'
						className='hover:text-success transition ease-in-out duration-500'>
						Products
					</Link>
					<Link
						to='/login'
						className='flex flex-col items-center px-10 hover:text-success transition ease-in-out duration-500'>
						<p>Log In</p>
					</Link>
					<Link
						to='/cart'
						className='flex items-center hover:text-success transition ease-in-out duration-500'>
						<MdShoppingCart className='mb-1' />
					</Link>
				</div>
			</nav>
		</header>
	);
}
