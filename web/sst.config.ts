import type { SSTConfig } from 'sst';
import { NextjsSite } from 'sst/constructs';

export default {
	config() {
		return {
			name: 'sattrade',
			region: 'ap-south-1',
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const site = new NextjsSite(stack, 'site', {
				customDomain: {
					domainName: 'sattrade.xyz',
					hostedZone: 'sattrade.xyz',
				},
			});

			stack.addOutputs({
				SiteUrl: site.url,
			});
		});
	},
} satisfies SSTConfig;
