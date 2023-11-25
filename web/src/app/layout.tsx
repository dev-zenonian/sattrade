import { MUIProvider } from 'components/Providers';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

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
			<body className={montserrat.className}>
				<MUIProvider>{children}</MUIProvider>
			</body>
		</html>
	);
}
