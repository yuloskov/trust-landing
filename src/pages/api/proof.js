import { StandardMerkleTree } from '@openzeppelin/merkle-tree';

const values = [
  ["0xa9F18cdf537AD6ac4ccB41D16F75C924b3304E2a", "5000000000000000000"],
  ["0x2222222222222222222222222222222222222222", "2500000000000000000"],
  ["0x7FEbaDA1daEFdA307c6F52f4818De6fE190C5B82", "2500000000000000000"],
  ["0x1408F67d2a15596f1CA7E13A184d76254a6E94cc", "0"],
  ["0x40eCeD92B352dAe3C3517e52768e0D3104730867", "5000000000000000000"],
];

export default function handler(req, res) {
  const tree = StandardMerkleTree.of(values, ["address", "uint256"]);

  const address = req.query.address;

  for (const [i, v] of tree.entries()) {
    if (v[0] === address) {
      const proof = tree.getProof(i);
      res.send({
        root: tree.root,
        score: v[1],
        proof: proof,
      });
      return;
    }
  }
  
  // If address not found - return 404
  res.status(404).send("Address not found");
}
