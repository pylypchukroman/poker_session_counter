import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/tournament_sessions';

export const fetchTournamentSessions = async (token) => {
  const { data } = await axios.get(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return data;
};

export const deleteTournamentSession = async ({ id, token }) => {
  if (!token) {
    throw new Error("No access token");
  }
  return axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addTournamentSession = async (token) => {
  if (!token) {
    throw new Error("No access token");
  }

  return axios.post(`${BASE_URL}`, {
    startedAt: new Date().toISOString(),
    status: "running",
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const finishTournamentSession = async ({ id, token }) => {
  if (!token) {
    throw new Error("No access token");
  }

  return axios.patch(`${BASE_URL}/${id}/finish_session`, {
    finishedAt: new Date().toISOString(),
    status: "finished",
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
