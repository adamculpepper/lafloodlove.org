module.exports = {
	environment: process.env.ELEVENTY_ENV,
	asset_path: process.env.ASSET_PATH,
	date: new Date(),
	date_month: new Date().getMonth() + 1,	
	date_day: new Date().getDate(),
	date_year: new Date().getFullYear()
};
