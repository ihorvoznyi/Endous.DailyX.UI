import { MetaFunction } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
	return [{ title: 'Endous | Test' }];
};

export const loader = () => {
	return json(['Test content #1', 'Test content #2', 'Test content #3', 'Test content #4']);
};

const TestLayout = () => {
	const data = useLoaderData<typeof loader>();
	return (
		<div className="flex flex-col justify-between h-full">
			<header>
				<h1>Test Layout</h1>
			</header>
			<main>
				<ul>
					{data.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</main>
			<footer>links to social media</footer>
		</div>
	);
};

export default TestLayout;
