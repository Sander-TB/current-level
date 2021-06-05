import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Homepage() {
	const [hero, setHero] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = "http://localhost:1337/home";
	const history = useHistory();

	function handleClick() {
		history.push("/products");
	}

	useEffect(
		() => {
			async function getHeroImage() {
				try {
					const response = await axios.get(url);
					setHero(response.data);
				} catch (e) {
					console.log(e);
					setError(error);
				} finally {
					setLoading(false);
				}
			}
			getHeroImage();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	if (loading) return <div>Loading..</div>;
	if (error) return <div>An error happened</div>;
	return (
		<div>
			<div className='h-64 text-center py-5 flex flex-col items-center justify-center'>
				<h1 className='text-7xl font-thin'>
					Welcome to <span className='font-normal'>Current Level</span>
				</h1>
				<h3 className='text-3xl font-light capitalize pt-3'>
					Delivering the newest tech to sate all your computer needs.
				</h3>
			</div>
			<section className='w-full'>
				<img src={hero.hero_banner} alt={hero.hero_banner_alt_text} />
				<div className='absolute top-2/3 left-1/4 px-16 py-10 bg-blur hero-text text-white font-thin'>
					<p className='text-md uppercase'>Bestseller</p>
					<p className='text-6xl'>Laptop Computer &trade;</p>
				</div>
				<button
					onClick={handleClick}
					className='font-thin text-5xl p-5 uppercase shadow-lg bg-white absolute top-90 left-100 hover:bg-success transition ease-in-out duration-500'>
					Shop Now
				</button>
			</section>
		</div>
	);
}
