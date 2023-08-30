class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }

    isLeaf() {
        if (this.children.Length === 0){
            return true
        } else {
            return false;
        }
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a value into the tree
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertInSubtree(this.root, newNode);
      }
    }
  
    insertInSubtree(node, newNode) {
      if (node.value > newNode.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertInSubtree(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertInSubtree(node.right, newNode);
        }
      }
    }
  
    // Search for a value in the tree
    search(value) {
      return this.searchInSubtree(this.root, value);
    }
  
    searchInSubtree(node, value) {
      if (node === null) {
        return false;
      }
  
      if (node.value === value) {
        return true;
      } else if (value < node.value) {
        return this.searchInSubtree(node.left, value);
      } else {
        return this.searchInSubtree(node.right, value);
      }
    }
  
    // Tree traversals
    inOrder(node = this.root) {
      if (node !== null) {
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
      }
    }
  
    preOrder(node = this.root) {
      if (node !== null) {
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    }
  
    postOrder(node = this.root) {
      if (node !== null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
      }
    }
  }
  
  // Usage example
  const myTree = new BinaryTree();
  myTree.insert(10);
  myTree.insert(5);
  myTree.insert(15);
  myTree.insert(3);
  myTree.insert(8);
  
  console.log("InOrder Traversal:");
  myTree.inOrder();
  
  console.log("PreOrder Traversal:");
  myTree.preOrder();
  
  console.log("PostOrder Traversal:");
  myTree.postOrder();
  
  console.log("Search for 8:", myTree.search(8)); // Output: true
  console.log("Search for 20:", myTree.search(20)); // Output: false
  