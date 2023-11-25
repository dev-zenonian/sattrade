import { Button } from '@mui/material';

export default function Home() {
	return (
		<main>
			<h1>Sattrade</h1>
			<p>Simplest trading portfolio</p>
			<Button style={{ textTransform: 'none' }} variant="outlined">
				Start now
			</Button>
		</main>
	);
}
