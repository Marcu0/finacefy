// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}


export const environment = {
  production: false,
  firebaseConfig: {
    production: Boolean,
  apiKey: "XXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    measurementId: "XXXXXXXXXXXXXXXXXXXXX"
  } as FirebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
