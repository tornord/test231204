import { css, Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW3aBxrjeo1XDFcYZrtZWMigBta21y5ts",
  authDomain: "test231204-c17b8.firebaseapp.com",
  projectId: "test231204-c17b8",
  storageBucket: "test231204-c17b8.appspot.com",
  messagingSenderId: "10783036788",
  appId: "1:10783036788:web:6bf6de6d35b03f8f3c4821",
  measurementId: "G-JF6MEH73YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Global
      styles={css`
        :root {
          font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
          font-size: 14px;
          line-height: 16px;
          font-weight: 400;
        }

        body {
          margin: 0;
        }
      `}
    />
    <App />
  </>
);
