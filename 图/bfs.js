
// public void bfs(int s, int t) {
//   if (s == t) return;
//   boolean[] visited = new boolean[v];
//   visited[s]=true;
//   Queue<Integer> queue = new LinkedList<>();
//   queue.add(s);
//   int[] prev = new int[v];
//   for (int i = 0; i < v; ++i) {
//     prev[i] = -1;
//   }
//   while (queue.size() != 0) {
//     int w = queue.poll();
//     for (int i = 0; i < adj[w].size(); ++i) {
//       int q = adj[w].get(i);
//       if (!visited[q]) {
//         prev[q] = w;
//         if (q == t) {
//           print(prev, s, t);
//           return;
//         }
//         visited[q] = true;
//         queue.add(q);
//       }
//     }
//   }
// }
//
// private void print(int[] prev, int s, int t) { // 递归打印s->t的路径
//   if (prev[t] != -1 && t != s) {
//     print(prev, s, prev[t]);
//   }
//   System.out.print(t + " ");
// }




class Graph{
  constructor(v) {
    this.v=v;
  }

  // bfs(s,t){
  //   if(s===t) return;
  //   let visited=[];
  //   visited[s]=true;
  //   let queue = [];
  //   queue.push(s);
  //   let prev=[];
  //   prev[]
  // }
}

