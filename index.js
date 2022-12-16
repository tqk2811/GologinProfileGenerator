const { default: GoLogin } = require("gologin");

const profile = new GoLogin({
	token: process.argv[0],
	profile_id: process.argv[1],
 });

async function Work(){
	const path = await profile.createStartup(false);
	console.log(path);
	process.exit(0);
}
Work();