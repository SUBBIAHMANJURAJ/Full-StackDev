const BlockInline = () => {
  return (
    <div>
      <h2>Block vs Inline</h2>

      <div style={{ background: "lightblue" }}>I am a div (block)</div>
      <p style={{ background: "lightgreen" }}>I am a paragraph (block)</p>

      <span style={{ background: "yellow" }}>Span (inline)</span>
      <span style={{ background: "orange" }}>Another inline</span>
    </div>
  );
};

export default BlockInline;