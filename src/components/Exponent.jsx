const Exponent = ({ count, exponent }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}²</p>
    <p className="exponent-result">
      {`${count} *.repeat(exponent-1)`} {count} ={" "}
      <span className="total">{count ** exponent}</span>
    </p>
  </div>
);

export default Exponent;
