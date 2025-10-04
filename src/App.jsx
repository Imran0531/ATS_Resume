// import React from "react";
// import UploadResume from "./UploadResume";

// export default function App() {
//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
//       <h1>ATS Resume Checker (MVP)</h1>
//       <UploadResume />
//     </div>
//   );
// }
import React from "react";
import UploadResume from "./UploadResume";
import "./App.css"; // import CSS

export default function App() {
  return (
    <div className="app-container">
      <h1>ATS Resume Checker</h1>
      <UploadResume />
    </div>
  );
}
