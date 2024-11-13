// downloadResume.js

export const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/downloadResume.pdf';  // Make sure resume.pdf is in the public folder
    link.download = 'siddhesh_10130.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  