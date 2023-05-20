var totalCount = function (root) {
  if (root === null) {
    return 0;
  }

  return totalCount(root.left) + totalCount(root.right) + 1;
};
