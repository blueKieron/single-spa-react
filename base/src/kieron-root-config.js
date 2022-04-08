import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: location => location.pathname == '/',
});

registerApplication({
  name: "@kieron/people",
  app: () =>
    System.import(
      "@kieron/people"
    ),
  activeWhen: location => location.pathname == '/people',
});

// registerApplication({
//   name: "@kieron/navbar",
//   app: () => System.import("@kieron/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
