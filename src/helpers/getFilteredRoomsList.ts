export const getFilteredRoomsList = (balance) => {

  return balance.roomsBalance.map(b => b.name);
};
