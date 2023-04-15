import { useCallback, useState } from "react";

export const ApplicationTest = () => {
  const [error, setError] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");

  const [root, setRoot] = useState<string>("");
  const [proof, setProof] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleApplicationRequest = useCallback(async () => {
    setIsPending(true);

    try {
      const response = await fetch(`/api/proof?address=${address}`);
      setIsPending(false);
      if (response.status !== 200) {
        setError(true);
        setIsSuccess(false);
        console.log("Error: ", response.statusText);

        return;
      }

      setError(false);

      const data = await response.json();
      const { root, proof, score } = data;

      setRoot(root);
      setProof(proof);
      setScore(score);
      setIsSuccess(true);
    } catch (e) {
      console.log("Error: ", e);
      setError(true);
      setIsSuccess(false);
      setIsPending(false);
    }
  }, [address]);

  return (
    <section className="mt-10 flex flex-col items-start justify-center rounded-md bg-blue-200 p-10">
      <p className="mb-5 text-2xl font-bold">Application example</p>
      <p>
        Here you can try out our scoring system with an easy-to-use airdrop-like
        rewarding protocol. If your score meets the criteria (you can check it
        in the ExampleFaucet contract), then you are eligible to mint one
        RewardToken! Just paste your Goerli address to get your score, as well
        as current state root and a merkle proof required to confirm your
        eligibility. Then, you can{" "}
        <a
          href="https://goerli.etherscan.io/address/0x5838420606a09C90a56A0f352f4198Ff09f718c8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 underline"
        >
          go to etherescan
        </a>{" "}
        and call claim method using the received data. Enjoy!
      </p>

      <div className="mt-2 flex w-full flex-col items-center justify-start gap-[10px] md:flex-row md:gap-8">
        <input
          type="text"
          id="first_name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter wallet address"
          value={address}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleApplicationRequest();
            }
          }}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          onClick={handleApplicationRequest}
          className="cursor-pointer whitespace-nowrap rounded-md bg-green-600 px-20 py-2 text-white hover:bg-green-500 max-md:w-full max-md:px-1"
        >
          Get params
        </button>
      </div>

      {error && (
        <p className="mt-4 text-red-500">This address is not indexed yet</p>
      )}
      {isSuccess && (
        <div className="mt-5 flex flex-col gap-2">
          <p className="text-green-700">Success!</p>
          <div className="flex flex-col gap-2 text-gray-700">
            <p>Your score is: </p>
            <p className="break-all">{score}</p>
          </div>
          <div className="mt-3 flex flex-col gap-2 text-gray-700">
            <p>Current state root: </p>
            <p className="break-all">{root}</p>
          </div>
          <div className="mt-3 flex flex-col gap-2 text-gray-700">
            <p>Merkle proof: </p>
            <div className="flex flex-col gap-1">
              {proof.map((p, i) => (
                <p className="break-all" key={i}>
                  {i === 0 && "["}
                  {p}
                  {i !== proof.length - 1 ? "," : "]"}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
