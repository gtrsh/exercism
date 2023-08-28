import collections
from typing import Any

__all__ = (
    'Node',
    'Graph'
)


class Node:
    def __init__(self, value: Any):
        self.value = value

        self.outbound = []
        self.inbound = []

    def point_to(self, other: 'Node'):
        self.outbound.append(other)
        other.inbound.append(self)

    def __str__(self):
        return f'Node({repr(self.value)})'

    __repr__ = __str__


class Graph:
    def __init__(self, root: Node):
        self._root = root

    def _dfs(self, visited: set[Node], node: Node, to_safe: list[Node]) -> list[Node]:
        if node not in visited:
            to_safe.append(node)
            visited.add(node)
            for neighbour in node.outbound:
                self._dfs(visited, neighbour, to_safe)
        return to_safe

    def dfs(self) -> list[Node]:
        return self._dfs(set(), self._root, [])

    def bfs(self) -> list[Node]:
        visited = []
        queue = collections.deque([self._root])
        node: Node = self._root
        visited.append(node)  # self._root)
        while queue:
            vertex = queue.popleft()
            for node in vertex.outbound:
                if node not in visited:
                    visited.append(node)
                    queue.append(node)
        return visited
