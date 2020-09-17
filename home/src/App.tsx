import React, { lazy, Suspense } from "react";
import { hot } from "react-hot-loader/root";

const Sidebar = lazy(() => import("navigation_sidebar/Sidebar"));

function App() {
  return (
    <div>
      <h1 style={{ color: "blue" }}>Hello, welcome!</h1>
      <Suspense fallback={<span>Loading</span>}>
        <Sidebar />
      </Suspense>
    </div>
  );
}

export default hot(App);
