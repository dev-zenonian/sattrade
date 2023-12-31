'use client';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
				<Typography
					variant="h1"
					fontWeight={'700'}
					component={motion.h1}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					Sattrade
				</Typography>
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyContent={'center'}
					alignItems={'center'}
					component={motion.div}
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
				>
					<Typography variant="h4" textAlign={'center'} mb={8}>
						An AI-powered, simplest, efficient tools for building trading
						portfolio
					</Typography>
					<Link href={'/dashboard'}>
						<Button variant="outlined" size="large">
							Start now
						</Button>
					</Link>
				</Box>
			</Box>
		</Container>
	);
}
