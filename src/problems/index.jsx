import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const Problems = () => {
	return (
		<div className="flex flex-row gap-5 justify-center dark:bg-black">
			<div className="w-full h-screen p-4 max-w-[1200px]">
				<div className="flex flex-col w-full items-center">
					<h1 className="text-3xl font-bold">Battle Practice</h1>
					<p className="text-lg">Here are some problems to solve</p>
				</div>
				<div className="grid grid-cols-12 gap-5">
					<div className="flex flex-col col-span-9">
						<h2 className="text-2xl font-bold">Problem Set</h2>
						<div className="flex flex-col w-full">
							<div className="flex flex-row gap-5 w-full">
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
							<div className="flex flex-col">
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
										<td>✅</td>
										<td>Two Sum</td>
										<td>Easy</td>
										<td>Array, Hash Table</td>
									</tr>
									<tr>
										<td>✅</td>
										<td>Reverse Integer</td>
										<td>Easy</td>
										<td>Math</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
					<div className="flex gap-5 mt-5 col-span-3">
						<div className="flex flex-col">
							<ol className="list-decimal">
								<li>Two Sum</li>
								<li>Reverse Integer</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Problems;
