import { json, type MetaFunction } from '@remix-run/node';
import { BudgetPage } from '~/pages/budget';

export const meta: MetaFunction = () => {
	return [{ title: 'Endous | Budget' }, { name: 'description', content: 'Budgeting application' }];
};

export const loader = () => {
	console.info('Budget loading...');
	return json({ data: ['1', '2', '3'] });
};

export default BudgetPage;
