import { useContext, useEffect, useState } from 'react';
import { CouponContext } from '../../utils/context';

function Odd({
  odd, eIndex, index, eName, eId,
}) {
  const { addCoupon } = useContext(CouponContext);
  const [isSelected, setIsSelected] = useState('');

  useEffect(() => {
    odd.index = `${eIndex}-${index}-${odd?.ID}`;
    odd.eName = eName;
    odd.eId = eId;
    odd.isSelected = false;
  }, []);

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
    >
      <span>{odd?.N}</span>
      <span>{odd?.O}</span>
    </li>
  );
}

export default Odd;
