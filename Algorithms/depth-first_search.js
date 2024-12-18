// Grafo representado como lista de adyacencia
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node); // Procesa el nodo
  visited.add(node);

  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}

dfs(graph, "A");