const home = [{
  path: "/home",
  name: "Home",
  component: () => import("~/views/home/components/Game.vue"),
  meta: {
    title: "Home",
  },
},
{
  path: "/gameover",
  name: "gameover",
  component: () => import("~/views/home/components/GameOver.vue"),
},
{
  path: "/game",
  name: "game",
  component: () => import("~/views/home/components/Game.vue"),
},
{
  path: "/form",
  name: "form",
  component: () => import("~/views/home/components/GameForm.vue"),
},
];

export default home;
