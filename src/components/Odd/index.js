function Odd({ ocg }) {
  return (
    <div className="program__market__odd-wrapper">
      {Object.values(ocg?.OC).map((odd, oddKey) => (
        <li
          key={oddKey}
          data-key={odd?.N}
          className={`program__event__odd ${odd?.O === '-'
            ? 'program__event__odd__disable'
            : ''}`}
        >
          <span>{odd?.N}</span>
          <span>{odd?.O}</span>
        </li>
      ))}
    </div>
  );
}

export default Odd;
