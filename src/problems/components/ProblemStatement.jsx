const ProblemStatement = ({ problem }) => {
  return (
    <div className="flex w-full flex-col border-gray-400 border rounded-md border-opacity-50 p-4">
      <div>
        <h2 className="font-bold text-3xl mb-3">{problem.title}</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-1">
          <div className="font-normal p-2">
            <strong>Difficulty:</strong> {problem.difficulty}
          </div>
          <div className="flex flex-row gap-1 font-normal p-2">
            <strong>Tags:</strong>{" "}
            {problem.tags &&
              problem.tags.map((tag, index) => (
                <p key={index} className="w-auto px-1 bg-gray-500 rounded-sm">
                  {tag}
                </p>
              ))}
          </div>
        </div>
        <div className="font-normal p-2">{problem.problemStatement}</div>
        <div className="font-normal p-2">
          <strong>Input Format:</strong>
          <br />
          {problem.inputFormat}
        </div>
        <div className="font-normal p-2">
          <strong>Output Format:</strong>
          <br />
          {problem.outputFormat}
        </div>
        <div className="font-normal p-2">
          {problem.examples &&
            problem.examples.map((example, index) => {
              return (
                <div>
                  <strong>Example {index + 1}:</strong>
                  <br />
                  <strong>Input:</strong> {example.input}
                  <br />
                  <strong>Output:</strong> {example.output}
                  <br />
                  {example.explanation && (
                    <>
                      <strong>Explanation:</strong> {example.explanation}
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
