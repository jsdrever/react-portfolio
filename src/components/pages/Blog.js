import React from 'react';
import resumepdf from '../../images/resume1-29-23.pages';
export default function Blog() {
  function downloadResume () {
    const resume = resumepdf;
    const blob = new Blob([resume], {type: "application/pages"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.pages';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <h1>Resume</h1>
      <button onClick = { downloadResume }>
      Download
      </button>
    </div>
  );
}
