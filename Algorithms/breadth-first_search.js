const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
}

function bfs(graph, start) {
  let queue = [start];
  let visited = new Set();

  while (queue.length) {
    let node = queue.shift();

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);

      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
}

bfs(graph, "A");