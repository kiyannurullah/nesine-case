import { useContext, useState } from 'react';
import { CouponContext } from '../../../core/context/context';

function Odd({ odd }) {
  const { addCoupon } = useContext(CouponContext);
  const [isSelected, setIsSelected] = useState('');

  const selectedOdd = (odd) => {
    setIsSelected((ctr) => (ctr
    !== 'program__event__odd__selected'
      ? 'program__event__odd__selected' : ''));
    if (odd?.O !== '-') {
      addCoupon(odd);
    }
  };

  return (
    <li
      role="button"
      className={`program__event__odd ${odd?.O !== '-' ? isSelected : ''}`}
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
