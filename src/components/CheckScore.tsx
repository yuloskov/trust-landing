import { useCallback, useState } from "react";
import { clientEnv } from "../env/schema.mjs";

export const CheckScore = () => {
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  const checkScore = useCallback(async () => {
    setIsPending(true);

    try {
      const response = await fetch(
        `${clientEnv.NEXT_PUBLIC_SCORE_API_URL}/rating/${address}`
      );
      setIsPending(false);
      if (response.status !== 200) {
        console.log("Error: ", response.statusText);
        setError(true);
        setIsSuccess(false);
        setIsPending(false);
      }
      setError(false);
      setIsSuccess(true);
      const data = await response.json();
      const { rating } = data;
      setScore(rating);
    } catch (e) {
      console.log("Error: ", e);
      setError(true);
      setIsSuccess(false);
      setIsPending(false);
    }
  }, [address]);

  const getScoreColor = (score: number) => {
    if (score < 0.5) {
      return "text-red-600";
    } else if (score < 0.8) {
      return "text-yellow-600";
    } else {
      return "text-green-600";
    }
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h2 className="mb-5 text-3xl">Check Score</h2>
      <div className="flex w-full items-center justify-center gap-2 max-md:flex-col">
        <input
          type="text"
          id="first_name"
          onChange={(e) => setAddress(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkScore();
            }
          }}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter wallet address"
        />
        <button
          onClick={checkScore}
          className={`cursor-pointer whitespace-nowrap rounded-md bg-green-600 px-20 py-2 text-white hover:bg-green-500 max-md:w-full max-md:px-1 ${
            isPending ? "animate-pulse" : ""
          }`}
        >
          Check
        </button>
      </div>
      {isSuccess && (
        <div className="mt-6 flex flex-col items-center justify-center gap-2">
          <p className="text-2xl font-bold">Wallet score is:</p>
          <p className={`text-2xl font-bold ${getScoreColor(score)}`}>{score.toFixed(2)}</p>
        </div>
      )}

      {error && (
        <div className="mt-6 flex flex-col items-center justify-center gap-1">
          <p className="text-xl font-bold text-red-600">Error</p>
          <p className="text-xl font-bold text-red-600">Please try again</p>
        </div>
      )}
    </div>
  );
};
