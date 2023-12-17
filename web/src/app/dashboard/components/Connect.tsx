'use client';
import { Box } from '@mui/material';
import { WalletMultiButton } from '@solana/wallet-adapter-material-ui';

const Connect = () => {
	return (
		<Box>
			<WalletMultiButton />
		</Box>
	);
};

export default Connect;
