import DetailComponent from "@/components/DetailComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import AuthorComponent from "@/components/AuthorComponent.vue";
import CommentComponent from "@/components/CommentComponent.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/list",
    component: ListComponent,
  },
  {
    path: "/detail/:id",
    component: DetailComponent,
    children: [
      { path: "author", component: AuthorComponent, name: "author" },
      { path: "comment", component: CommentComponent, name: "comment" },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
