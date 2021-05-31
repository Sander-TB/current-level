import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<header className='flex flex-col'>
			<nav className='flex flex-row items-center py-5 justify-between px-20 w-full bg-gray'>
				<div className='w-1/3 justify-start'>
					<Link to='/' className='flex flex-row items-center'>
						<img src={Logo} alt='Logo' className='w-20' />
						<p className='pl-3 text-5xl text-white font-thin'>Current Level</p>
					</Link>
				</div>
				<div className='flex flex-row justify-end items-end text-lg uppercase font-thin w-1/3 text-white'>
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
						className='flex flex-col items-center hover:text-success transition ease-in-out duration-500'>
						<p>Cart{}</p>
					</Link>
					<Link
						to='/contact'
						className='pl-10 hover:text-success transition ease-in-out duration-500'>
						Contact
					</Link>
				</div>
			</nav>
		</header>
	);
}
