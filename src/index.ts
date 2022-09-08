import { Matrix, ResTuple } from './interfaces';
import { parseRegisteredValues, parseResponseTuple } from './utils';

const parentChildPairs: Matrix = [
  [5, 6],
  [1, 3],
  [2, 3],
  [3, 6],
  [15, 12],
  [5, 7],
  [4, 5],
  [4, 9],
  [9, 12],
  [30, 16],
];

function findNodesWithZeroAndOneParents(matrix: Matrix): ResTuple {
  const registeredValues = parseRegisteredValues(matrix);

  return parseResponseTuple(registeredValues);
}

const [orphanValues, singleParentValues] =
  findNodesWithZeroAndOneParents(parentChildPairs);

console.log({
  orphanValues,
  singleParentValues,
});
