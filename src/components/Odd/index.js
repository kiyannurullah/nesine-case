import { useContext } from 'react';
import { CouponContext } from '../../core/context/context';

function Odd({ odd }) {
  const { addCoupon } = useContext(CouponContext);

  const selectedOdd = (odd) => {
    if (odd?.O !== '-') {
      addCoupon(odd);
    }
  };

  return (
    <li
      role="button"
      className={`program__event__odd 
      ${odd?.isSelected
        ? 'program__event__odd__selected' : ''}`}
      onClick={() => selectedOdd(odd)}
      onKeyDown={() => {}}
      id={odd?.index}
      tabIndex={0}
    >
      <span>{odd?.N}</span>
      <span>{odd?.O}</span>
    </li>
  );
}

export default Odd;
