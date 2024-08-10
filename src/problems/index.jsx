import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Submissions from "./components/Submissions";

const Problems = () => {
  return (
    <div className="flex flex-row gap-2 justify-center dark:bg-black">
      <div className="w-full h-screen max-w-[1200px] px-6 shadow-2xl">
        <div className="flex flex-col w-full my-16 items-center gap-2">
          <h1 className="text-3xl font-bold">Battle Practice</h1>
          <p className="text-lg">Here are some problems to solve</p>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex flex-col w-2/3 border-gray-400 border rounded-md border-opacity-50 p-4">
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-bold text-xl">Problem Set</h2>
              <a href="/problems/add" className="text-sm text-green-500">
                + Add Your Own Problem
              </a>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex flex-row gap-2 w-full my-3">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col rounded-lg">
                <table className="table-auto text-left">
                  <tr className="text-sm border-b-2 border-opacity-50">
                    <th className="font-normal p-2">Status</th>
                    <th className="font-normal p-2">Title</th>
                    <th className="font-normal p-2">Difficulty</th>
                    <th className="font-normal p-2">Tags</th>
                  </tr>
                  <tr>
                    <td className="font-normal p-2">✅</td>
                    <td className="font-normal p-2">Two Sum</td>
                    <td className="font-normal p-2">Easy</td>
                    <td className="font-normal p-2">Array, Hash Table</td>
                  </tr>
                  <tr>
                    <td className="font-normal p-2">✅</td>
                    <td className="font-normal p-2">Reverse Integer</td>
                    <td className="font-normal p-2">Easy</td>
                    <td className="font-normal p-2">Math</td>
                  </tr>
                  <tr>
                    <td className="font-normal p-2">✅</td>
                    <td className="font-normal p-2">Reverse Integer</td>
                    <td className="font-normal p-2">Easy</td>
                    <td className="font-normal p-2">Math</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3 border-gray-400 border rounded-md border-opacity-50 p-4">
            <div>
              <h2 className="font-bold text-xl">Recent Submissions</h2>
            </div>
            <Submissions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;
