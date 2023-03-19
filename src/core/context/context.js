import { createContext, useMemo, useState } from 'react';

export const CouponContext = createContext(null);

function CouponProvider({ children }) {
  const [coupon, setCoupon] = useState([]);

  const addCoupon = (value) => {
    const checkOdd = coupon.some((item) => value.index === item.index);

    if (checkOdd) {
      setCoupon(coupon.filter((_coupon) => _coupon.index !== value.index));
      value.isSelected = false;
    } else {
      const filterBeforeOdd = coupon
        .filter((_coupon) => (_coupon.index)
          .split('-')[0] === (value.index)
          .split('-')[0]);
      const deleteItem = filterBeforeOdd
        .slice(-1);
      if (deleteItem.length > 0) {
        deleteItem[0].isSelected = false;
        setCoupon(coupon.filter((_coupon) => (_coupon.index)
          .split('-')[0] !== (value.index)
          .split('-')[0]));
        setCoupon((_coupon) => [..._coupon, value]);
        value.isSelected = true;
      } else {
        setCoupon((_coupon) => [..._coupon, value]);
        value.isSelected = true;
      }
    }
  };

  const couponData = useMemo(() => ({ coupon, addCoupon }), [coupon]);

  return (
    <CouponContext.Provider value={{ coupon, addCoupon }}>
      {children}
    </CouponContext.Provider>
  );
}

export default CouponProvider;
