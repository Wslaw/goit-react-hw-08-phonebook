// import axios from 'axios';

// const contactsInstance = axios.create({
//   baseURL: 'https://65c5c2bee5b94dfca2e0408b.mockapi.io/api/contacts',
// });

import authInstance from "./auth-api";


export const requestFetchContacts = async () => {
  const { data } = await authInstance.get('/contacts');
  return data;
};

export const requestAddContacts = async body => {
  const { data } = await authInstance.post('/contacts', body);
  // console.log('data=', data);
  return data;
};

export const requestDeleteContacts = async id => {
  const { data } = await authInstance.delete(`/contacts/${id}`);
  return data;
};
