const Interactive = () => {
  return (
    <div>
      <a href="https://google.com" target="_blank">Go to Google</a>
      <br /><br />

      <button onClick={() => alert("Button clicked!")}>
        Click Me
      </button>

      <br /><br />

      <input type="text" placeholder="Enter text" />
      <br /><br />

      <textarea placeholder="Enter message"></textarea>
    </div>
  );
};

export default Interactive;