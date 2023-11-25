import { Box, Button, Container, Typography } from '@mui/material';

export default function Home() {
	return (
		<Container>
			<Box
				height={'100vh'}
				display={'flex'}
				flexDirection={'column'}
				justifyContent={'center'}
				alignItems={'center'}
				gap={2}
			>
				<Typography variant="h1" fontWeight={'700'}>
					Sattrade
				</Typography>
				<Typography variant="h4" textAlign={'center'} mb={8}>
					An AI-power, simplest, efficient trading portfolio
				</Typography>
				<Button variant="contained" size="large">
					Start now
				</Button>
			</Box>
		</Container>
	);
}
