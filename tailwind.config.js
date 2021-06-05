module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			white: {
				DEFAULT: "#D4DAE5",
				lighter: "#fff",
			},
			black: "#000",
			blur: "rgba(0, 0, 0, 0.3)",
			gray: {
				lighter: "#B1B6BF",
				DEFAULT: "#707070",
				darker: "#3B3D40",
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
				97: "28rem",
				75: "80%",
				90: "90%",
			},
			blur: {
				xs: "2px",
			},
			width: {
				ch: "50ch",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
