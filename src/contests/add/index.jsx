import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import { Checkbox } from "@/components/ui/checkbox";

const AddContestPage = () => {
  const [problems, setProblems] = useState([]);
  const [problemList, setProblemList] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    division: 1,
    startTime: "",
    endTime: "",
    problems: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      ["problems"]: problemList,
    });
    try {
      const response = await axiosInstance.post("/contests/addContest", {
        formData,
      });
      if (response.ok) {
        console.log("Contest Added Succesfully");
        redirect("/problems");
      } else if (response.error) {
        console.log(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProblems = async () => {
    try {
      const res = await axiosInstance.get("/problems/getProblems");
      setProblems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProblemToggle = (index) => {
    setProblemList((prevProblemList) => {
      if (prevProblemList.includes(problems[index].problemId)) {
        return prevProblemList.filter((p) => p !== problems[index].problemId);
      } else {
        return [...prevProblemList, problems[index].problemId];
      }
    });
  };

  useEffect(() => {
    getProblems();
  }, []);

  return (
    <div className="w-full flex justify-center mb-8">
      <div className="max-w-[1200px] w-full">
        <div className="text-center font-bold text-3xl my-6">
          Create Contest
        </div>
        <div className="w-full">
          <form className="grid grid-cols-3 gap-4">
            <input
              onChange={(e) => handleInputChange(e)}
              className="form_input col-span-3"
              name="title"
              type="text"
              placeholder="Contest Title"
            />
            <input
              onChange={(e) => handleInputChange(e)}
              className="form_input"
              name="startTime"
              type="datetime-local"
            />
            <input
              onChange={(e) => handleInputChange(e)}
              className="form_input"
              name="endTime"
              type="datetime-local"
            />
            <select
              className="form_input"
              onChange={(e) => handleInputChange(e)}
              name="division"
            >
              <option value={1} className="dark:text-white text-black">
                Div 1
              </option>
              <option value={2} className="dark:text-white text-black">
                Div 2
              </option>
              <option value={3} className="dark:text-white text-black">
                Div 3
              </option>
              <option value={4} className="dark:text-white text-black">
                Div 4
              </option>
            </select>
            <textarea
              onChange={(e) => handleInputChange(e)}
              className="form_input col-span-3 min-h-[150px]"
              name="description"
              placeholder="Contest Description"
            />
            <div className="col-span-3 w-full">
              <div className="flex flex-col rounded-lg">
                <table className="table-auto text-left">
                  <label className="">Questions</label>
                  <tr className="text-sm border-b-2 border-opacity-50">
                    <th className="font-normal p-2">Choose</th>
                    <th className="font-normal p-2">Title</th>
                    <th className="font-normal p-2">Difficulty</th>
                    <th className="font-normal p-2">Private</th>
                  </tr>
                  {problems &&
                    problems.map((problem, index) => (
                      <tr key={index}>
                        <td className="font-normal p-2">
                          <Checkbox
                            onCheckedChange={() => handleProblemToggle(index)}
                          />
                        </td>
                        <td className="font-normal p-2">{problem.title}</td>
                        <td className="font-normal p-2">
                          {problem.difficulty}
                        </td>
                        <td className="font-normal p-2">
                          <Checkbox disabled checked={problem.private} />
                        </td>
                      </tr>
                    ))}
                </table>
              </div>
              <div className="flex w-full justify-end mt-2">
                <Button
                  onClick={handleSubmit}
                  className="col-span-3 bg-blue-500"
                >
                  Create Contest
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContestPage;
