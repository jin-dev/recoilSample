import { atom } from "recoil";

export const repos = atom({
  key: "repos",
  default: {
    italy: [],
    china: [],
    japan: [],
  },
});

export const view = atom({
  key: "view",
  default: "italy",
});
