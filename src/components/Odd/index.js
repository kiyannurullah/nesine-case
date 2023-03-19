import { useContext, useState } from 'react';
import { CouponContext } from '../../utils/context';

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
      className={`program__event__odd ${odd?.O !== '-' ? isSelected : ''}`}
      onClick={() => selectedOdd(odd)}
      id={odd?.index}
    >
      {odd?.O}
    </li>
  );
}

export default Odd;
