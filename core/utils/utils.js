export const eventDrawer = (index, item) => {
    return index + item?.D + item?.DAY + item?.LN
};

export const eventData = (odd, eIndex, eId, eName, i) => {
    odd.index = `${eIndex}-${i}-${odd?.ID}`;
    odd.eName = eName;
    odd.eId = eId;
    odd.isSelected = false;
};
