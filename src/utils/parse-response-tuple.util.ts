import { RegisteredValues, ResTuple } from '../interfaces';

export function parseResponseTuple(registeredValues: RegisteredValues) {
  const initialValue: ResTuple = [[], []];

  return Object.entries(registeredValues).reduce((acc, curr) => {
    const [parent, value] = curr;

    if (value.parents.size === 0) acc[0].push(parseInt(parent, 10));
    if (value.parents.size === 1) acc[1].push(parseInt(parent, 10));

    return acc;
  }, initialValue);
}
