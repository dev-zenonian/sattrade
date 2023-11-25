'use client';
import type { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

import NextAppDirEmotionCacheProvider from './EmotionCache';

interface Props {
	children: React.ReactNode;
}

export const MUIProvider: FC<Props> = ({ children }) => {
	return (
		<NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				{children}
			</ThemeProvider>
		</NextAppDirEmotionCacheProvider>
	);
};

const montserrat = Montserrat({ subsets: ['latin'] });

const theme = createTheme({
	palette: {
		primary: {
			main: blue[700],
		},
		mode: 'dark',
		background: {
			default: '#101418',
		},
	},
	typography: {
		fontFamily: montserrat.style.fontFamily,
	},
});

export default MUIProvider;
