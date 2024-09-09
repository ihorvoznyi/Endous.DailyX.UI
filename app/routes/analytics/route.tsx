import { json, MetaFunction } from '@remix-run/react';
import { AnalytisPage } from '~/pages/analytics';

export const meta: MetaFunction = () => {
	return [{ title: 'Endous | Analytics' }, { name: 'description', content: 'Analytics' }];
};

export const loader = () => {
	return json({});
};

export const action = () => {
	//
};

export default AnalytisPage;
