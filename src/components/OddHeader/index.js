function OddHeader({isCount}) {
  return (
    <div className="oddHeader">
      <ul className="oddHeader__list">
        {
          isCount &&
            <li>Event Count</li>
        }
        <li>Yorumlar</li>
        <li></li>
        <li>1</li>
        <li>x</li>
        <li>2</li>
        <li>Alt</li>
        <li>Üst</li>
        <li>H1</li>
        <li>1</li>
        <li>x</li>
        <li>2</li>
        <li>H2</li>
        <li>1-X</li>
        <li>1-2</li>
        <li>X-2</li>
        <li>Var</li>
        <li>Yok</li>
        <li>+99</li>
      </ul>
    </div>
  );
}

export default OddHeader;
