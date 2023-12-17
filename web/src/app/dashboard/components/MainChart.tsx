'use client';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const defaultOption: ApexOptions = {
	stroke: { curve: 'smooth', width: 2 },
	dataLabels: {
		enabled: false,
	},
	fill: {
		type: 'gradient',
		gradient: {
			shade: 'dark',
			opacityFrom: 0.3,
			opacityTo: 0.5,
			stops: [0, 90, 100],
		},
	},
};

export const MainChart = () => {
	const [series] = useState([
		{
			name: 'Example',
			data: [45, 52, 38, 45, 19, 23, 2, 52, 38, 45, 19, 45, 19, 23, 2, 52],
		},
	]);

	return (
		<Chart
			options={defaultOption}
			height={512}
			width={1024}
			series={series}
			type="area"
		></Chart>
	);
};
