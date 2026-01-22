export const getTournamentPayload = (runningSessionId: string, room: string | null, name: string, buyIn: number) => {
  return {
    runningSessionId,
    room,
    name,
    buyIn
  };
};
