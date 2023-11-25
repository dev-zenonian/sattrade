'use client';
import type { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

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

const theme = createTheme({
	palette: {
		primary: {
			main: deepPurple[900],
		},
		mode: 'dark',
	},
});

export default MUIProvider;
