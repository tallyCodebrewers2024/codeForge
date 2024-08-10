import React, { useState } from "react";

const AddProblemPage = () => {
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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
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

  const handleSubmit = () => {};

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-[1200px]">
        <div className="text-center font-bold text-3xl uppercase">
          Create Battle!
        </div>
        <div className="w-full m-3 dark:text-white light:text-black">
          <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-5">
            <input
              onChange={(e) => handleInputChange(e)}
              className="form_input col-span-2"
              name="title"
              type="text"
              placeholder="Problem Title"
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
              name="description"
              type="area"
              placeholder="Description"
            />
            <textarea
              onChange={(e) => handleInputChange(e)}
              className="form_input col-span-3 min-h-[150px]"
              name="problemStatement"
              type="area"
              placeholder="Problem Statement"
            />
            <div className="flex flex-row gap-3 col-span-3">
              <textarea
                onChange={(e) => handleInputChange(e)}
                className="form_input min-h-[100px] w-full"
                name="inputFormat"
                type="area"
                placeholder="Input Format"
              />
              <textarea
                onChange={(e) => handleInputChange(e)}
                className="form_input min-h-[100px] w-full"
                name="outputFormat"
                type="area"
                placeholder="Output Format"
              />
            </div>
            <div className="flex flex-col gap-3 col-span-3">
              <div className="w-full">
                {formData.examples &&
                  formData.examples.map((example, index) => {
                    return (
                      <div className="grid grid-cols-3 gap-3">
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
                          placeholder="Example Input"
                          value={example.explanation}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProblemPage;
