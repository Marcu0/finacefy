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
