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
				<h1 className='text-4xl md:text-5xl lg:text-7xl font-thin'>
					Welcome to <span className='font-normal'>Current Level</span>
				</h1>
				<h3 className='w-3/4 md:w-full  text-lg md:text-xl lg:text-3xl font-light capitalize pt-3'>
					Delivering the newest tech to sate all your computer needs.
				</h3>
			</div>
			<section className='w-full mb-52'>
				<img src={hero.hero_banner} alt={hero.hero_banner_alt_text} />
				<div className='absolute top-97 left-20 md:top-96 md:left-48 lg:top-2/3 lg:left-1/4 p-8 md:px-16 md:py-10 bg-blur hero-text text-white font-thin'>
					<p className='text-md uppercase'>Bestseller</p>
					<p className='text-3xl md:text-4xl lg:text-6xl'>
						Laptop Computer &trade;
					</p>
				</div>
				<button
					onClick={handleClick}
					className='font-thin text-3xl md:text-4xl lg:text-5xl mt-20 md:mt-0 p-4 md:p-5 uppercase shadow-lg bg-white absolute left-36 md:top-3/4 md:left-1/3 lg:top-90 lg:left-100 hover:bg-success transition ease-in-out duration-500'>
					Shop Now
				</button>
			</section>
		</div>
	);
}
