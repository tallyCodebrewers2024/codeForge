const ProblemStatement = ({ problem }) => {
	return (
		<div className="flex w-full flex-col border-gray-400 border rounded-md border-opacity-50 p-4">
			<div>
				<h2 className="font-bold text-3xl mb-3">
					Nth Fibonacci Number Problem
				</h2>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-row">
					<div className="font-normal p-2">
						<strong>Difficulty:</strong> Hard
					</div>
					<div className="font-normal p-2">
						<strong>Tags:</strong> Array, Hash Table
					</div>
				</div>
				<div className="font-normal p-2">
					The Fibonacci numbers, commonly denoted F(n) form a
					sequence, called the Fibonacci sequence, such that each
					number is the sum of the two preceding ones, starting from 0
					and 1. That is: F(0) = 0, F(1) = 1 F(n) = F(n - 1) + F(n -
					2), for n > 1. Given n, calculate F(n).
				</div>
				<div className="font-normal p-2">
					<strong>Example 1:</strong>
					<br />
					<strong>Input:</strong> n = 2
					<br />
					<strong>Output:</strong> 1
					<br />
					<strong>Explanation:</strong> F(2) = F(1) + F(0) = 1 + 0 =
					1.
				</div>
				<div className="font-normal p-2">
					<strong>Example 2:</strong>
					<br />
					<strong>Input:</strong> n = 3
					<br />
					<strong>Output:</strong> 2
					<br />
					<strong>Explanation:</strong> F(3) = F(2) + F(1) = 1 + 1 =
					2.
				</div>
			</div>
		</div>
	);
};

export default ProblemStatement;
