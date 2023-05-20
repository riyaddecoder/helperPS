function arrayToTree(arr) {
  if (!arr.length) {
    return null;
  }

  const root = { value: arr[0], left: null, right: null };
  const queue = [root];

  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();

    if (arr[i] !== null) {
      const leftChild = { value: arr[i], left: null, right: null };
      node.left = leftChild;
      queue.push(leftChild);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      const rightChild = { value: arr[i], left: null, right: null };
      node.right = rightChild;
      queue.push(rightChild);
    }
    i++;
  }

  return root;
}

const arr = [1,2,3,4,5,6,7,8,null,null,null,null,null,null,null];
const tree = arrayToTree(arr);
const jsonString = JSON.stringify(tree);
console.log(jsonString);
