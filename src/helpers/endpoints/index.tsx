import { auth } from "./auth";
import { order } from "./order";
import { product } from "./product";
import { user } from "./user";

export const endpoint = {
  baseUrl: "https://imob-server-production.up.railway.app",
  ...auth,
  ...user,
  ...order,
  ...product,
};
