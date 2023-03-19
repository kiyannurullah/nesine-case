export const eventDrawer = (index, item) => `${index} ${item?.D} ${item?.DAY} ${item?.LN}`;

export const eventData = (odd, eIndex, eId, eName, i) => {
  odd.index = `${eIndex}-${i}-${odd?.ID}`;
  odd.eName = eName;
  odd.eId = eId;
};

export const generateRandomId = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
