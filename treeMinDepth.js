/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var minDepth = function (node) {
  if (node === null) {
    return 0;
  }

  let left = minDepth(node.left);
  let right = minDepth(node.right);

  return (Math.min(left, right) || left || right) + 1;
};
