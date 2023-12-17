import { MUIProvider } from 'components/Providers';
import type { Metadata } from 'next';

import { DynamicSolanaProvider } from './components/SolanaProvider';

import './globals.css';

export const metadata: Metadata = {
	title: 'Sattrade',
	description: 'Simple, Efficient, AI-powered, Automated Trading Portfolio',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</head>
			<body>
				<MUIProvider>
					<DynamicSolanaProvider>{children}</DynamicSolanaProvider>
				</MUIProvider>
			</body>
		</html>
	);
}
