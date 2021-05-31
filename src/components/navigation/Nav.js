import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaUser } from "react-icons/fa";

export default function Nav() {
	return (
		<header className='flex flex-col'>
			<nav className='flex flex-row items-center py-5 justify-between px-20 w-full bg-gray'>
				<div className='w-1/3 justify-start'>
					<Link to='/'>
						<img src={Logo} alt='Logo' className='w-20' />
					</Link>
				</div>
				<div className='w-1/3'>
					<input
						placeholder='Search'
						className='font-thin border border-gray py-2 px-5 w-full justify-center bg-white text-lg'
					/>
				</div>
				<div className='flex flex-row justify-end text-lg uppercase font-thin w-1/3 text-white'>
					<Link to='/login' className='flex flex-col items-center'>
						<FaUser />
						<p>Log In</p>
					</Link>
					<Link to='/cart' className='flex flex-col items-center pl-10'>
						<FaShoppingBag />
						<p>Bag</p>
					</Link>
				</div>
			</nav>
		</header>
	);
}
