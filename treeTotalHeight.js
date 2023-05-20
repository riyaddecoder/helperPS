var totalHeight = function (root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = totalHeight(root.left);
  const rightHeight = totalHeight(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
};
