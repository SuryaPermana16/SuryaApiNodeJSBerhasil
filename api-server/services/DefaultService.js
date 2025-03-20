/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Mendapatkan data semua user
*
* returns List
* */
const usersGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Menghapus data user berdasarkan ID
*
* id Integer 
* no response value expected for this operation
* */
const usersIdDELETE = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Mendapatkan data user berdasarkan ID
*
* id Integer 
* returns User
* */
const usersIdGET = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Mengubah data user berdasarkan ID
*
* id Integer 
* name String 
* email String 
* age Integer 
* returns User
* */
const usersIdPUT = ({ id, name, email, age }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        name,
        email,
        age,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  usersGET,
  usersIdDELETE,
  usersIdGET,
  usersIdPUT,
};
