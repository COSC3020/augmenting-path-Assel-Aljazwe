function augmentingPath(graph, start, end, visited = new Set()) {
    // Add the start node to the visited set to avoid cycles
    visited.add(start);

    // Base case
    if (start === end) {
        return [start];
    }

    // Exploring neighbors
    for (const neighbor in graph[start]) {
        if (!visited.has(neighbor) && graph[start][neighbor] > 0) {
            // Perform DFS recursively on the neighbor
            const path = augmentingPath(graph, neighbor, end, visited);
            if (path.length) {
                return [start, ...path];
            }
        }
    }
    return [];
}

module.exports = { augmentingPath };
