const Submissions = () => {
	return (
		<div className="flex flex-col mt-3 rounded-lg">
			<ol className="list-decimal list-inside">
				<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
					<span>1.</span>
					<span>Item 1</span>
				</li>
				<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
					<span>2.</span>
					<span>Item 2</span>
				</li>
				<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
					<span>3.</span>
					<span>Item 3</span>
				</li>
				<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
					<span>4.</span>
					<span>Item 4</span>
				</li>
				<li className="flex space-x-4 font-normal p-2 odd:bg-gray-100 dark:odd:bg-[rgba(255,255,255,0.1)] rounded-sm">
					<span>5.</span>
					<span>Item 5</span>
				</li>
			</ol>
		</div>
	);
};

export default Submissions;
