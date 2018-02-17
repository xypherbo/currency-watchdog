// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  hmr: false,
  firebase: {
    apiKey: "AIzaSyA0hSpCgIGR_xtPKMDZBSJfMrBBc9Q_Jks",
    authDomain: "hexagonal-6ba78.firebaseapp.com",
    databaseURL: "https://hexagonal-6ba78.firebaseio.com",
    projectId: "hexagonal-6ba78",
    storageBucket: "hexagonal-6ba78.appspot.com",
    messagingSenderId: "572469380589"
  }
};
