import { onRequest as __api_contact_ts_onRequest } from "D:\\Docs\\ezdesign_website_neo\\functions\\api\\contact.ts"

export const routes = [
    {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_contact_ts_onRequest],
    },
  ]