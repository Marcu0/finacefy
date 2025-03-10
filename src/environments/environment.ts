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
    apiKey: "AIzaSyDoj4pBc1LDv01bLSqj-H85934cHHIk-2w",
    authDomain: "camp-fe4fc.firebaseapp.com",
    databaseURL: "https://camp-fe4fc-default-rtdb.firebaseio.com/",
    projectId: "camp-fe4fc",
    storageBucket: "camp-fe4fc.firebasestorage.app",
    messagingSenderId: "236313934459",
    appId: "1:236313934459:web:3a0c836973cadc08c280de",
    measurementId: "G-ZZHQ8NFQGH"
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
