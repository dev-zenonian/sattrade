import { Box, Typography } from '@mui/material';

import Connect from './Connect';
import Search from './Search';

export const Header = () => {
	return (
		<Box
			display={'flex'}
			alignItems={'center'}
			justifyContent={'space-between'}
			paddingY={2}
		>
			<Typography fontWeight={'600'} fontSize={24}>
				Sattrade
			</Typography>
			<Box display={'flex'} alignItems={'center'} gap={4}>
				<Typography variant="subtitle2">Solana</Typography>
				<Typography variant="subtitle2">Virtual Trade</Typography>
				<Typography variant="subtitle2">Statistic</Typography>
				<Typography variant="subtitle2">Trends</Typography>
			</Box>

			<Search />

			<Box display={'flex'} alignItems={'center'} gap={2}>
				{/* <Typography>Tan Le</Typography>
				<Avatar sx={{ width: 30, height: 30 }} /> */}
				<Connect />
			</Box>
		</Box>
	);
};
