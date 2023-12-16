import { Container } from '@mui/material';

import { Header, MainChart } from './components';

const Dashboard = () => {
	return (
		<Container maxWidth={false}>
			<Header />
			<MainChart />
		</Container>
	);
};

export default Dashboard;
