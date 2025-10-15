// from here new code starts

// import React, { useState } from "react";
// import axios from "axios";
// import "./UploadResume.css";

// export default function UploadResume() {
//   const [file, setFile] = useState(null);
//   const [jobDesc, setJobDesc] = useState("");
//   const [requiredSkills, setRequiredSkills] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (!file || !jobDesc) {
//       alert("Please provide a resume file and a job description.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("resume", file);
//     formData.append("job_description", jobDesc);
//     formData.append("required_skills", requiredSkills);

//     try {
//       setLoading(true);
//       const resp = await axios.post("http://127.0.0.1:5000/api/score", formData);
//       setResult(resp.data);
//     } catch (err) {
//       console.error("Axios error:", err.response ? err.response.data : err.message);
//       alert("Error scoring resume. Check console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderProgressBar = (score, label) => {
//     const percent = Math.min(Math.max(Math.round(score * 100), 0), 100);
//     const color = percent >= 85 ? "#4caf50" : percent >= 60 ? "#ff9800" : "#f44336";

//     return (
//       <div className="score-bar">
//         <p><strong>{label}:</strong> {percent}%</p>
//         <div className="progress-bar">
//           <div
//             className="progress-bar-inner"
//             style={{ width: `${percent}%`, backgroundColor: color }}
//           />
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="upload-container">
//       <form onSubmit={onSubmit} className="upload-form">
//         <div className="form-group">
//           <label>Job Description</label>
//           <textarea
//             rows={6}
//             value={jobDesc}
//             onChange={(e) => setJobDesc(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Required Skills (comma separated)</label>
//           <input
//             value={requiredSkills}
//             onChange={(e) => setRequiredSkills(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Resume (PDF / DOCX / TXT / PNG / JPG)</label>
//           <input
//             type="file"
//             accept=".pdf,.docx,.doc,.txt,.png,.jpg,.jpeg"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>

//         <button type="submit" disabled={loading}>
//           {loading ? "Scoring..." : "Score Resume"}
//         </button>
//       </form>

//       {result && (
//         <div className="result-card">
//           <h2>Final ATS Score</h2>
//           {renderProgressBar(result.final_score / 100, "Overall Match")}
//           {renderProgressBar(result.semantic, "Semantic Similarity")}
//           {renderProgressBar(result.skill_coverage, "Skill Coverage")}
//           {renderProgressBar(result.experience_fit, "Experience Fit")}

//           <div className="skills-section">
//             <p><strong>Found Skills:</strong> {result.found_skills.length ? result.found_skills.join(", ") : "None"}</p>
//             <p><strong>Matched Skills:</strong> {result.matched_skills.length ? result.matched_skills.join(", ") : "None"}</p>
//             <p><strong>Missing Skills:</strong> {result.missing_skills.length ? result.missing_skills.join(", ") : "None"}</p>
//           </div>

//           <h3>Top Matching Sentences</h3>
//           {result.top_matches.filter(m => m.score >= 0.2).length ? (
//             <ol>
//               {result.top_matches
//                 .filter(m => m.score >= 0.2)
//                 .map((m, i) => (
//                   <li key={i}>
//                     <div><strong>JD:</strong> {m.jd_sentence}</div>
//                     <div><strong>Resume:</strong> {m.resume_sentence}</div>
//                     <div>Score: {m.score.toFixed(3)}</div>
//                   </li>
//                 ))}
//             </ol>
//           ) : (
//             <p>No significant matches found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import axios from "axios";
// import "./UploadResume.css";

// export default function UploadResume() {
//   const [file, setFile] = useState(null);
//   const [jobDesc, setJobDesc] = useState("");
//   const [requiredSkills, setRequiredSkills] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const TOP_MATCH_THRESHOLD = 0.2; // matches below this are ignored

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (!file || !jobDesc) {
//       alert("Please provide a resume file and a job description.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("resume", file);
//     formData.append("job_description", jobDesc);
//     formData.append("required_skills", requiredSkills);

//     try {
//       setLoading(true);
//       const resp = await axios.post("http://127.0.0.1:5000/api/score", formData);
//       setResult(resp.data);
//     } catch (err) {
//       console.error("Axios error:", err.response ? err.response.data : err.message);
//       alert("Error scoring resume. Check console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderProgressBar = (score, label) => {
//     const percent = Math.min(Math.max(Math.round(score * 100), 0), 100);
//     const color = percent >= 85 ? "#4caf50" : percent >= 60 ? "#ff9800" : "#f44336";

//     return (
//       <div className="score-bar">
//         <p><strong>{label}:</strong> {percent}%</p>
//         <div className="progress-bar">
//           <div
//             className="progress-bar-inner"
//             style={{ width: `${percent}%`, backgroundColor: color }}
//           />
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="upload-container">
//       <form onSubmit={onSubmit} className="upload-form">
//         <div className="form-group">
//           <label>Job Description</label>
//           <textarea
//             rows={6}
//             value={jobDesc}
//             onChange={(e) => setJobDesc(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Required Skills (comma separated)</label>
//           <input
//             value={requiredSkills}
//             onChange={(e) => setRequiredSkills(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Resume (PDF / DOCX / TXT / PNG / JPG)</label>
//           <input
//             type="file"
//             accept=".pdf,.docx,.doc,.txt,.png,.jpg,.jpeg"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>

//         <button type="submit" disabled={loading}>
//           {loading ? "Scoring..." : "Score Resume"}
//         </button>
//       </form>

//       {result && (
//         <div className="result-card">
//           <h2>Final ATS Score</h2>
//           {renderProgressBar(result.final_score / 100, "Overall Match")}
//           {renderProgressBar(result.semantic, "Semantic Similarity")}
//           {renderProgressBar(result.skill_coverage, "Skill Coverage")}
//           {renderProgressBar(result.experience_fit, "Experience Fit")}

//           <div className="skills-section">
//             <p><strong>Found Skills:</strong> {result.found_skills.length ? result.found_skills.join(", ") : "None"}</p>
//             <p><strong>Matched Skills:</strong> {result.matched_skills.length ? result.matched_skills.join(", ") : "None"}</p>
//             <p><strong>Missing Skills:</strong> {result.missing_skills.length ? result.missing_skills.join(", ") : "None"}</p>
//           </div>

//           <h3>Top Matching Sentences</h3>
//           {result.top_matches.filter(m => m.score >= TOP_MATCH_THRESHOLD).length ? (
//             <ol>
//               {result.top_matches
//                 .filter(m => m.score >= TOP_MATCH_THRESHOLD)
//                 .map((m, i) => (
//                   <li key={i}>
//                     <div><strong>JD:</strong> {m.jd_sentence}</div>
//                     <div><strong>Resume:</strong> {m.resume_sentence}</div>
//                     <div>Score: {m.score.toFixed(3)}</div>
//                   </li>
//                 ))}
//             </ol>
//           ) : (
//             <p>No significant matches found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import axios from "axios";
// import "./UploadResume.css";

// export default function UploadResume() {
//   const [file, setFile] = useState(null);
//   const [jobDesc, setJobDesc] = useState("");
//   const [requiredSkills, setRequiredSkills] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (!file || !jobDesc) {
//       alert("Please provide a resume file and a job description.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("resume", file);
//     formData.append("job_description", jobDesc);
//     formData.append("required_skills", requiredSkills);

//     try {
//       setLoading(true);
//       const resp = await axios.post("http://127.0.0.1:5000/api/score", formData);
//       setResult(resp.data);
//     } catch (err) {
//       console.error("Axios error:", err.response ? err.response.data : err.message);
//       alert("Error scoring resume. Check console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderProgressBar = (score, label) => {
//     if (score <= 0) return null; // hide bars with 0 value

//     const percent = Math.min(Math.max(Math.round(score * 100), 0), 100);
//     const color = percent >= 85 ? "#4caf50" : percent >= 60 ? "#ff9800" : "#f44336";

//     return (
//       <div className="score-bar">
//         <p><strong>{label}:</strong> {percent}%</p>
//         <div className="progress-bar">
//           <div
//             className="progress-bar-inner"
//             style={{ width: `${percent}%`, backgroundColor: color }}
//           />
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="upload-container">
//       <form onSubmit={onSubmit} className="upload-form">
//         <div className="form-group">
//           <label>Job Description</label>
//           <textarea
//             rows={6}
//             value={jobDesc}
//             onChange={(e) => setJobDesc(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Required Skills (comma separated)</label>
//           <input
//             value={requiredSkills}
//             onChange={(e) => setRequiredSkills(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Resume (PDF / DOCX / TXT / PNG / JPG)</label>
//           <input
//             type="file"
//             accept=".pdf,.docx,.doc,.txt,.png,.jpg,.jpeg"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>

//         <button type="submit" disabled={loading}>
//           {loading ? "Scoring..." : "Score Resume"}
//         </button>
//       </form>

//       {result && (
//         <div className="result-card">
//           <h2>Final ATS Score</h2>

//           {renderProgressBar(result.final_score / 100, "Overall Match")}
//           {renderProgressBar(result.semantic, "Semantic Similarity")}
//           {renderProgressBar(result.skill_coverage, "Skill Coverage")}
//           {renderProgressBar(result.experience_fit, "Experience Fit")}

//           <div className="skills-section">
//             <p><strong>Found Skills:</strong> {result.found_skills.length ? result.found_skills.join(", ") : "None"}</p>
//             <p><strong>Matched Skills:</strong> {result.matched_skills.length ? result.matched_skills.join(", ") : "None"}</p>
//             <p><strong>Missing Skills:</strong> {result.missing_skills.length ? result.missing_skills.join(", ") : "None"}</p>
//           </div>

//           <h3>Top Matching Sentences</h3>
//           {result.top_matches.filter(m => m.score > 0.2).length ? (
//             <ol>
//               {result.top_matches
//                 .filter(m => m.score > 0.2)
//                 .map((m, i) => (
//                   <li key={i}>
//                     <div><strong>JD:</strong> {m.jd_sentence}</div>
//                     <div><strong>Resume:</strong> {m.resume_sentence}</div>
//                     <div>Score: {m.score.toFixed(3)}</div>
//                   </li>
//                 ))}
//             </ol>
//           ) : (
//             <p>No significant matches found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import "./UploadResume.css";

export default function UploadResume() {
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!file || !jobDesc) {
      alert("Please provide a resume file and a job description.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("job_description", jobDesc);
    formData.append("required_skills", requiredSkills);

    try {
      setLoading(true);
      const resp = await axios.post("http://127.0.0.1:5000/api/score", formData);
      setResult(resp.data);
    } catch (err) {
      console.error("Axios error:", err.response ? err.response.data : err.message);
      alert("Error scoring resume. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  const renderProgressBar = (score, label) => {
    if (score <= 0) return null; // hide bars with 0 value

    const percent = Math.min(Math.max(Math.round(score * 100), 0), 100);
    const color = percent >= 85 ? "#4caf50" : percent >= 60 ? "#ff9800" : "#f44336";

    return (
      <div className="score-bar">
        <p><strong>{label}:</strong> {percent}%</p>
        <div className="progress-bar">
          <div
            className="progress-bar-inner"
            style={{ width: `${percent}%`, backgroundColor: color }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="upload-container">
      <form onSubmit={onSubmit} className="upload-form">
        <div className="form-group">
          <label>Job Description</label>
          <textarea
            rows={6}
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Required Skills (comma separated)</label>
          <input
            value={requiredSkills}
            onChange={(e) => setRequiredSkills(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Resume (PDF / DOCX / TXT / PNG / JPG)</label>
          <input
            type="file"
            accept=".pdf,.docx,.doc,.txt,.png,.jpg,.jpeg"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Scoring..." : "Score Resume"}
        </button>
      </form>

      {result && (
        <div className="result-card">
          <h2>Final ATS Score</h2>

          {renderProgressBar(result.final_score / 100, "Overall Match")}
          {renderProgressBar(result.semantic, "Semantic Similarity")}
          {renderProgressBar(result.skill_coverage, "Skill Coverage")}
          {renderProgressBar(result.experience_fit, "Experience Fit")}

          <div className="skills-section">
            <p><strong>Found Skills:</strong> {result.found_skills.length ? result.found_skills.join(", ") : "None"}</p>
            <p><strong>Matched Skills:</strong> {result.matched_skills.length ? result.matched_skills.join(", ") : "None"}</p>
            <p><strong>Missing Skills:</strong> {result.missing_skills.length ? result.missing_skills.join(", ") : "None"}</p>
          </div>

          <h3>Top Matching Sentences</h3>
          {result.top_matches.filter(m => m.score >= 0.2).length ? (
            <div className="top-matches">
              <p><strong>JD:</strong> {jobDesc}</p>
              <ul>
                {result.top_matches
                  .filter(m => m.score >= 0.2)
                  .map((m, i) => (
                    <li key={i}>
                      {m.resume_sentence} <span style={{color: '#888'}}>({m.score.toFixed(3)})</span>
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p>No significant matches found.</p>
          )}
        </div>
      )}
    </div>
  );
}
