import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/balances'

export const getBalances = (setRoomsBalance?) => {

  axios.get(`${BASE_URL}`)
    .then(function (response) {
      // handle success
      setRoomsBalance(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};

export const editBalance = (id, body) => {

  axios.patch(`${BASE_URL}/${id}/balance`, {
    balance: body.balance
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const deleteBalance = (id) => {

  axios.delete(`${BASE_URL}/${id}`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export const addBalance = (id, body) => {

  axios.post(`${BASE_URL}`, {
    name: body.name,
    balance: body.balance
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
