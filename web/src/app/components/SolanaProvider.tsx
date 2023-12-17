'use client';
import type { FC, ReactNode } from 'react';
import { useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';
import {
	ConnectionProvider,
	WalletProvider,
} from '@solana/wallet-adapter-react';
import { clusterApiUrl } from '@solana/web3.js';
import dynamic from 'next/dynamic';

type Props = {
	children: ReactNode;
};

export const SolanaProvider: FC<Props> = ({ children }) => {
	const network = WalletAdapterNetwork.Devnet;
	const endpoint = useMemo(() => clusterApiUrl(network), [network]);
	const wallets = useMemo(() => [], [network]);

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} autoConnect>
				<WalletDialogProvider>{children}</WalletDialogProvider>
			</WalletProvider>
		</ConnectionProvider>
	);
};

export const DynamicSolanaProvider = dynamic(async () => SolanaProvider, {
	ssr: false,
});
