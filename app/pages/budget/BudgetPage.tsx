import { useLoaderData } from '@remix-run/react';
import { loader } from '~/routes/budget/route';

const BudgetPage = () => {
	const { data } = useLoaderData<typeof loader>();
	return (
		<div>
			<h2>Records:</h2>
			<ul>
				{data.map(item => (
					<li key={item}>Item: {item}</li>
				))}
			</ul>
		</div>
	);
};

export default BudgetPage;
