import { Matrix, RegisteredValues } from '../interfaces';
import { TreeNode } from '../models';

export function parseRegisteredValues(matrix: Matrix): RegisteredValues {
  const initialValue: RegisteredValues = {};

  return matrix.reduce((acc, tuple) => {
    const [parent, value] = tuple;

    if (!acc[parent]) acc[parent] = new TreeNode(parent);

    if (!acc[value]) {
      acc[value] = new TreeNode(value);
      acc[value].addParent(parent);
    }

    return acc;
  }, initialValue);
}
