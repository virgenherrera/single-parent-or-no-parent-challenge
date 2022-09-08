export class TreeNode {
  parents = new Set<number>();

  constructor(public value: number) {}

  addParent(parent: number) {
    this.parents.add(parent);
  }
}
