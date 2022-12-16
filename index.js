import { GoLogin } from 'gologin';

const profile = new GoLogin({
	token: process.argv[2],
	profile_id: process.argv[3],
 });

async function Work(){
	const path = await profile.createStartup(false);
	console.log(path);
	process.exit(0);
}
Work();