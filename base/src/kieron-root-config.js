import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: location => location.pathname == '/',
});

// registerApplication({
//   name: "@kieron/navbar",
//   app: () =>
//     System.import(
//       "@kieron/navbar"
//     ),
//   activeWhen: location => location.pathname == '/'
// });

registerApplication({
  name: "@kieron/github",
  app: () =>
    System.import(
      "@kieron/github"
    ),
  activeWhen: ['/github']
});

// registerApplication({
//   name: "@kieron/navbar",
//   app: () => System.import("@kieron/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
