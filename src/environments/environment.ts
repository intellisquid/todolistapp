// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
        apiKey: "AIzaSyC8WPRXnmKuUk6Oh1tC2Gt8LKvY9NELbOw",
        authDomain: "todolistapp-6d8f4.firebaseapp.com",
        databaseURL: "https://todolistapp-6d8f4.firebaseio.com",
        projectId: "todolistapp-6d8f4",
        storageBucket: "todolistapp-6d8f4.appspot.com",
        messagingSenderId: "723755944338"  
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
