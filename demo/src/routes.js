export default [
  {
    name: "Counter Base",
    path: "/counter-0",
    component: () => import("./demo0/DemoCounter.vue"),
  },
  {
    name: "Counter Base 1",
    path: "/counter-1",
    component: () => import("./demo1/DemoCounter.vue"),
  },
  {
    name: "Counter Base 4",
    path: "/counter-4",
    component: () => import("./demo4/DemoCounter.vue"),
  },
  {
    name: "Demo 5",
    path: "/demo-5",
    component: () => import("./demo5/Server.vue"),
  },
  {
    name: "Bouncing Ball",
    path: "/bouncing-ball",
    component: () => import("./demo6/BouncingBall.vue"),
  },
  {
    name: "Bouncing Ball JS",
    path: "/bouncing-ball-js",
    component: () => import("./demo6/BouncingBallJS.vue"),
  },
];
