module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			white: "#D4DAE5",
			black: "#000",
			blur: "rgba(0, 0, 0, 0.3)",
			gray: {
				lighter: "#B1B6BF",
				DEFAULT: "#3B3D40",
			},
			yellow: {
				warning: "#ffc107",
				star: "#fedc45",
			},
			success: "#36af8a",
			danger: "#ff7b7b",
		},
		fontFamily: {
			stack: ["Museo Sans", "sans-serif"],
		},
		extend: {
			inset: {
				100: "36rem",
				75: "90%",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
