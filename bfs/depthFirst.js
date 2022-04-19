/*
Following is how a DFS works −

Visit the adjacent unvisited vertex. Mark it as visited. Display it. Push it in a stack.
If no adjacent vertex is found, pop up a vertex from the stack. (It will pop up all the vertices from the stack, which do not have adjacent vertices.)
Repeat Rule 1 and Rule 2 until the stack is empty.
*/



DFS(node) {
   // Create a Stack and add our initial node in it
   let s = new Stack(this.nodes.length);
   let explored = new Set();
   s.push(node);

   // Mark the first node as explored
   explored.add(node);

   // We'll continue till our Stack gets empty
   while (!s.isEmpty()) {
      let t = s.pop();

   // Log every element that comes out of the Stack
      console.log(t);

   // 1. In the edges object, we search for nodes this node is directly connected to.
   // 2. We filter out the nodes that have already been explored.
   // 3. Then we mark each unexplored node as explored and push it to the Stack.
   this.edges[t]
   .filter(n => !explored.has(n))
   .forEach(n => {
      explored.add(n);
      s.push(n);
      });
   }
}

/*
let g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");

g.addEdge("A", "C");
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("B", "G");

g.DFS("A");
*/
