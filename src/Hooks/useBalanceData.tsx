import { useState } from 'react';
import axios from 'axios';

export const useBalanceData = () => {

  const BASE_URL = 'http://localhost:3000/api/balances';
  const [roomsBalance, setRoomsBalance] = useState(null);

  const getBalances = () => {
    axios.get(`${BASE_URL}`)
      .then(function (response) {
        setRoomsBalance(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  };

  const editBalance = (id, body) => {
    axios.patch(`${BASE_URL}/${id}/balance`, {
      balance: body.balance
    })
      .then(function (response) {
        console.log(response);
        getBalances();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const deleteBalance = (id) => {
    axios.delete(`${BASE_URL}/${id}`)
      .then(function (response) {
        console.log(response);
        getBalances();
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  const addBalance = (body) => {
    axios.post(`${BASE_URL}`, {
      name: body.name,
      balance: body.balance
    })
      .then(function (response) {
        console.log(response);
        getBalances();
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return {roomsBalance, getBalances, editBalance, deleteBalance, addBalance};
}
