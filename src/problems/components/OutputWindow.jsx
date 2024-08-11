import { Button } from "@/components/ui/button";
import axiosInstance from "../../axiosInstance";
import { useState } from "react";
import LoadingPage from "@/components/custom/LoadingPage";

const OutputWindow = (props) => {
    const [output, setOutput] = useState([]);
    const [loading, setLoading] = useState(false);
    const [runState, setRunState] = useState("example");

    const handleRunExamples = async (e) => {
        setLoading(true);
        setOutput(["Executing the code..."]);
        e.preventDefault();
        try {
            setOutput([]);
            await props.problem.examples.map(async (example) => {
                const response = await axiosInstance.post("/compiler/runcode", {
                    language: props.language,
                    code: props.code,
                    input: example.input,
                });
                setOutput((prevVal) => {
                    return [...prevVal, response.data];
                });
            });
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = async (e) => {
        setRunState("submit");
        setLoading(true);
        setOutput(["Code submitting..."]);
        e.preventDefault();
        try {
            setOutput([]);
            console.log(props.problem);
            await props.problem?.testCases?.map(async (testCase) => {
                const response = await axiosInstance.post("/compiler/runcode", {
                    language: props.language,
                    code: props.code,
                    input: testCase.input,
                });

                setOutput((prevVal) => {
                    return [...prevVal, response.data];
                });
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex w-full flex-col border-gray-400 border rounded-md border-opacity-50 p-4">
            <div className="flex flex-row justify-between items-center text-white">
                <p className="font-semibold text-lg dark:text-white text-black">
                    Output
                </p>
                <div className="flex gap-2">
                    <Button
                        className="bg-blue-500 px-2 py-1 rounded h-[2rem]"
                        onClick={handleRunExamples}
                    >
                        Run Examples
                    </Button>
                    <Button
                        className="bg-green-500 px-2 py-1 rounded h-[2rem]"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-2 p-2">
                <div>
                    {loading ? (
                        <LoadingPage />
                    ) : output.length === 0 ? (
                        <p>Output will be displayed here.</p>
                    ) : (
                        output?.map((out, index) => {
                            return (
                                <p
                                    style={{
                                        color: `${
                                            (runState === "example" &&
                                                out ===
                                                    props.problem.examples[
                                                        index
                                                    ]?.output) ||
                                            (runState === "submit" &&
                                                out ===
                                                    props.problem.testCases[
                                                        index
                                                    ].output)
                                                ? "white"
                                                : "#b73636"
                                        }`,
                                        paddingBottom: "2rem",
                                    }}
                                >
                                    {out.error === ""
                                        ? out?.output
                                        : out?.error}
                                </p>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default OutputWindow;
