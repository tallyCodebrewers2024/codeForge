import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import axiosInstance from "../../axiosInstance";
import {
  ChevronDown,
  ChevronUp,
  CirclePlus,
  MenuIcon,
  Trash,
} from "lucide-react";
import { useState } from "react";
import { Navigate, redirect } from "react-router-dom";

const AddProblemPage = () => {
  const [editExample, setEditExample] = useState(-1);
  const [editTestCase, setEditTestCase] = useState(-1);
  const [formData, setFormData] = useState({
    problemId: "",
    title: "",
    difficulty: "Easy",
    tags: [],
    description: "",
    problemStatement: "",
    inputFormat: "",
    outputFormat: "",
    constraints: [""],
    examples: [{ input: "", output: "", explanation: "" }],
    testCases: [{ input: "", output: "" }],
    author: "",
    private: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleExampleChange = (e, index) => {
    const examplesCopy = [...formData.examples];
    const { name, value } = e.target;
    examplesCopy[index][name] = value;
    setFormData({
      ...formData,
      ["examples"]: examplesCopy,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/problems/addProblem", {
        method: "POST",
        headers: { "Content-Type": "applicaiton/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Problem Added Succesfully");
        redirect("/problems");
      } else if (response.error) {
        console.log(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddExample = (e) => {
    e.preventDefault();
    const newExample = {
      input: "",
      output: "",
      explanation: "",
    };
    const examplesCopy = [...formData.examples, newExample];
    setEditExample(formData.examples.length);
    const updatedProblem = { ...formData };
    updatedProblem.examples = examplesCopy;
    setFormData(updatedProblem);
  };

  const handleRemoveExample = () => {
    const index = formData.examples.length - 1;
    const examplesListCopy = [...formData.examples];
    examplesListCopy.splice(index, 1);
    const updatedProblem = { ...formData };
    updatedProblem.examples = examplesListCopy;
    setFormData(updatedProblem);
  };

  const handleTestCaseChange = (e, index) => {
    const testCasesCopy = [...formData.testCases];
    const { name, value } = e.target;
    testCasesCopy[index][name] = value;
    const updatedProblem = { ...formData };
    updatedProblem.testCases = testCasesCopy;
    setFormData(updatedProblem);
  };

  const handleAddTestCase = (e) => {
    e.preventDefault();
    const newTestCase = {
      input: "",
      output: "",
    };
    const testCasesCopy = [...formData.testCases, newTestCase];
    setEditTestCase(formData.testCases.length);
    const updatedProblem = { ...formData };
    updatedProblem.testCases = testCasesCopy;
    setFormData(updatedProblem);
  };

  const handleRemoveTestCase = () => {
    const index = formData.testCases.length - 1;
    const testCasesListCopy = [...formData.testCases];
    testCasesListCopy.splice(index, 1);
    const updatedProblem = { ...formData };
    updatedProblem.testCases = testCasesListCopy;
    setFormData(updatedProblem);
  };

  const handleConstraintChange = (e, index) => {
    const constraintsCopy = [...formData.constraints];
    constraintsCopy[index] = e.target.value;
    const updatedProblem = { ...formData };
    updatedProblem.constraints = constraintsCopy;
    setFormData(updatedProblem);
  };

  const handleAddConstraint = (e) => {
    e.preventDefault();
    const newConstraint = "";
    const constraintsCopy = [...formData.constraints, newConstraint];
    const updatedProblem = { ...formData };
    updatedProblem.constraints = constraintsCopy;
    setFormData(updatedProblem);
  };

  const handleRemoveConstraint = () => {
    const index = formData.constraints.length - 1;
    const constraintsListCopy = [...formData.constraints];
    constraintsListCopy.splice(index, 1);
    const updatedProblem = { ...formData };
    updatedProblem.constraints = constraintsListCopy;
    setFormData(updatedProblem);
  };

  const togglePrivacy = () => {
    setFormData({
      ...formData,
      ["private"]: !formData.private,
    });
  };

  return (
    <div className="w-full flex justify-center mb-4">
      <div className="max-w-[1200px] w-full">
        <div className="text-center font-bold text-3xl my-6">
          Create Problem
        </div>
        <div className="w-full">
          <form className="grid grid-cols-3 gap-4">
            <input
              onChange={(e) => handleInputChange(e)}
              className="form_input col-span-2"
              name="title"
              type="text"
              placeholder="Problem Title*"
            />
            <select
              className="form_input w-full"
              name="difficulty"
              onChange={(e) => handleInputChange(e)}
              defaultValue={formData.difficulty}
            >
              <option value="Easy" className="dark:text-black light:text-white">
                Easy
              </option>
              <option
                value="Medium"
                className="dark:text-black light:text-white"
              >
                Medium
              </option>
              <option value="Hard" className="dark:text-black light:text-white">
                Hard
              </option>
            </select>
            <textarea
              onChange={(e) => handleInputChange(e)}
              className="form_input col-span-3 min-h-[150px]"
              name="problemStatement"
              type="area"
              placeholder="Problem Statement*"
            />
            <textarea
              onChange={(e) => handleInputChange(e)}
              className="form_input col-span-3 min-h-[150px]"
              name="description"
              type="area"
              placeholder="Description"
            />
            <div className="flex flex-row gap-3 col-span-3">
              <textarea
                onChange={(e) => handleInputChange(e)}
                className="form_input min-h-[100px] w-full"
                name="inputFormat"
                type="area"
                placeholder="Input Format*"
              />
              <textarea
                onChange={(e) => handleInputChange(e)}
                className="form_input min-h-[100px] w-full"
                name="outputFormat"
                type="area"
                placeholder="Output Format*"
              />
            </div>
            <div className="flex flex-col gap-3 col-span-3">
              <label className="uppercase font-semibold">Examples*</label>
              <div className="w-full">
                {formData.examples &&
                  formData.examples.map((example, index) => {
                    const isEditing = editExample === index;
                    return (
                      <div
                        className="flex flex-col gap-2 border my-2 rounded-lg shadow-md p-2 transition-all ease-in-out duration-300"
                        key={index}
                      >
                        <div className="col-span-3 form_input flex justify-between">
                          <div
                            className="w-full cursor-pointer"
                            onClick={() =>
                              setEditExample(isEditing ? -1 : index)
                            }
                          >
                            Example {index + 1}
                          </div>
                          <p>{isEditing ? <ChevronUp /> : <ChevronDown />}</p>
                        </div>
                        {isEditing && (
                          <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden grid grid-cols-3 gap-3 ${
                              isEditing
                                ? "max-h-[500px] opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                            key={index}
                          >
                            <textarea
                              onChange={(e) => handleExampleChange(e, index)}
                              className="form_input min-h-[100px] w-full"
                              name="input"
                              type="area"
                              placeholder="Example Input"
                              value={example.input}
                            />
                            <textarea
                              onChange={(e) => handleExampleChange(e, index)}
                              className="form_input min-h-[100px] w-full"
                              name="output"
                              type="area"
                              placeholder="Example Output"
                              value={example.output}
                            />
                            <textarea
                              onChange={(e) => handleExampleChange(e, index)}
                              className="form_input min-h-[100px] w-full"
                              name="explanation"
                              type="area"
                              placeholder="Explanation"
                              value={example.explanation}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                <div className="col-span-3 flex flex-row gap-1 items-center">
                  <button onClick={handleAddExample}>
                    <CirclePlus className="text-green-500" />
                  </button>
                  <div className="w-full h-[1px] bg-black/20 dark:bg-white/20" />
                  <Trash
                    onClick={handleRemoveExample}
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 col-span-3">
              <label className="uppercase font-semibold">Test Cases</label>
              <div className="w-full">
                {formData.testCases &&
                  formData.testCases.map((test, index) => {
                    const isEditing = editTestCase === index;
                    return (
                      <div
                        className="flex flex-col gap-2 border my-2 rounded-lg shadow-md p-2 transition-all ease-in-out duration-300"
                        key={index}
                      >
                        <div className="col-span-3 form_input flex justify-between">
                          <div
                            className="w-full cursor-pointer"
                            onClick={() =>
                              setEditTestCase(isEditing ? -1 : index)
                            }
                          >
                            Test Case {index + 1}
                          </div>
                          <p>{isEditing ? <ChevronUp /> : <ChevronDown />}</p>
                        </div>
                        {isEditing && (
                          <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden grid grid-cols-2 gap-3 ${
                              isEditing
                                ? "max-h-[500px] opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                            key={index}
                          >
                            <textarea
                              onChange={(e) => handleTestCaseChange(e, index)}
                              className="form_input min-h-[100px] w-full"
                              name="input"
                              type="area"
                              placeholder="Test Cases"
                              value={test.input}
                            />
                            <textarea
                              onChange={(e) => handleTestCaseChange(e, index)}
                              className="form_input min-h-[100px] w-full"
                              name="output"
                              type="area"
                              placeholder="Test Cases Output"
                              value={test.output}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                <div className="col-span-3 flex flex-row gap-1 items-center">
                  <button onClick={handleAddTestCase}>
                    <CirclePlus className="text-green-500" />
                  </button>
                  <div className="w-full h-[1px] bg-black/20 dark:bg-white/20" />
                  <Trash
                    onClick={handleRemoveTestCase}
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 col-span-3">
              <label className="uppercase font-semibold">Constraints</label>
              <div className="w-full">
                {formData.constraints &&
                  formData.constraints.map((constraint, index) => {
                    return (
                      <div
                        className="border my-2 rounded-lg shadow-md p-2"
                        key={index}
                      >
                        <div className="col-span-3 form_input">
                          <div className="flex flex-row gap-2 justify-between">
                            <p className="form_input">{index + 1}</p>
                            <input
                              onChange={(e) => handleConstraintChange(e, index)}
                              className="form_input w-full"
                              name="constraint"
                              type="text"
                              placeholder="Constraint"
                              value={constraint}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div className="col-span-3 flex flex-row gap-1 items-center">
                  <button onClick={handleAddConstraint}>
                    <CirclePlus className="text-green-500" />
                  </button>
                  <div className="w-full h-[1px] bg-black/20 dark:bg-white/20" />
                  <Trash
                    onClick={handleRemoveConstraint}
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>
            <textarea
              onChange={(e) => handleInputChange(e)}
              className="form_input min-h-[100px] col-span-3 w-full"
              name="solution"
              type="text"
              placeholder="Solution Code"
            />
            <div className="col-span-3 w-full flex justify-between mt-3">
              <div className="flex flex-col gap-1">
                <label>Private Question</label>
                <Switch
                  checked={formData.private}
                  onClick={togglePrivacy}
                  label="Private Question"
                />
              </div>
              <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProblemPage;
