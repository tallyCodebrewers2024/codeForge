import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const Problems = () => {
	return (
		<div className="flex flex-row gap-2 justify-center dark:bg-black">
			<div className="w-full h-screen max-w-[1200px] px-6 shadow-2xl">
				<div className="flex flex-col w-full my-16 items-center">
					<h1 className="text-3xl font-bold">Battle Practice</h1>
					<p className="text-lg">Here are some problems to solve</p>
				</div>
				<div className="flex flex-row gap-3">
					<div className="flex flex-col w-2/3 border-gray-400 border rounded-md border-opacity-50 p-4">
						<h2 className="font-bold text-xl">Problem Set</h2>
						<div className="flex flex-col w-full">
							<div className="flex flex-row gap-2 w-full my-3">
								<Select>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Theme" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="light">
											Light
										</SelectItem>
										<SelectItem value="dark">
											Dark
										</SelectItem>
										<SelectItem value="system">
											System
										</SelectItem>
									</SelectContent>
								</Select>
								<Select>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Theme" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="light">
											Light
										</SelectItem>
										<SelectItem value="dark">
											Dark
										</SelectItem>
										<SelectItem value="system">
											System
										</SelectItem>
									</SelectContent>
								</Select>
								<Select>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Theme" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="light">
											Light
										</SelectItem>
										<SelectItem value="dark">
											Dark
										</SelectItem>
										<SelectItem value="system">
											System
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="flex flex-col rounded-lg">
								<table className="table-auto text-left">
									<tr className="opacity-50 text-sm border-b-2">
										<th className="font-normal p-2">
											Status
										</th>
										<th className="font-normal p-2">
											Title
										</th>
										<th className="font-normal p-2">
											Difficulty
										</th>
										<th className="font-normal p-2">
											Tags
										</th>
									</tr>
									<tr>
										<td className="font-normal p-2">✅</td>
										<td className="font-normal p-2">
											Two Sum
										</td>
										<td className="font-normal p-2">
											Easy
										</td>
										<td className="font-normal p-2">
											Array, Hash Table
										</td>
									</tr>
									<tr>
										<td className="font-normal p-2">✅</td>
										<td className="font-normal p-2">
											Reverse Integer
										</td>
										<td className="font-normal p-2">
											Easy
										</td>
										<td className="font-normal p-2">
											Math
										</td>
									</tr>
									<tr>
										<td className="font-normal p-2">✅</td>
										<td className="font-normal p-2">
											Reverse Integer
										</td>
										<td className="font-normal p-2">
											Easy
										</td>
										<td className="font-normal p-2">
											Math
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-1/3 border-gray-400 border rounded-md border-opacity-50 p-4">
						<div>
							<h2 className="font-bold text-xl">
								Recent Submissions
							</h2>
						</div>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Problems;
