const IframeComp = () => {
  return (
    <div>
      <h3>Website</h3>
      <iframe
        src="https://example.com"
        width="300"
        height="200"
        title="Example"
      ></iframe>

      <h3>YouTube</h3>
      <iframe
        width="300"
        height="200"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
      ></iframe>
    </div>
  );
};

export default IframeComp;