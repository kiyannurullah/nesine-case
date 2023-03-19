import { createContext, useState } from 'react';

export const CouponContext = createContext(null);

function CouponProvider({ children }) {
  const [coupon, setCoupon] = useState([]);

  const addCoupon = (value) => {
    const checkOdd = coupon.some((item) => value.index === item.index);

    if (checkOdd) {
      setCoupon(coupon.filter((_coupon) => _coupon.index !== value.index));
    } else {
      setCoupon((_coupon) => [..._coupon, value]);
    }
  };

  return (
    <CouponContext.Provider value={{ coupon, addCoupon }}>
      {children}
    </CouponContext.Provider>
  );
}

export default CouponProvider;
