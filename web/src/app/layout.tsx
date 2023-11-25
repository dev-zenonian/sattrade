import { MUIProvider } from 'components/Providers';
import type { Metadata } from 'next';

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
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</head>
			<body>
				<MUIProvider>{children}</MUIProvider>
			</body>
		</html>
	);
}
