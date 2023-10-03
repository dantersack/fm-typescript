import postOrderSearch from "./algorithms/binary-tree-post-order-search";
import { tree } from "./constants";

const inorder = postOrderSearch(tree);
console.log(inorder);
