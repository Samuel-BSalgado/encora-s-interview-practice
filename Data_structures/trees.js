class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrder(node) {
  if (!node) {
    return;
  }

  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

inOrder(root);