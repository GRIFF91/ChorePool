import axios from "axios";

export default {

  registerPoolManager: function(name, email, password, passwordConfirm) {
    const newPM = {
      name,
      email,
      password,
      "password-confirm": passwordConfirm
    };

    return axios.post('/api/people/pool-managers', newPM);
  },

  login: function(email, password) {
    const user = { email, password };
    return axios.post('/api/people/login', user);
  },

  userData: function() {
    return axios.get('/api/people/userData');
  },

  logout: function() {
    return axios.get('/api/people/logout');
  },

  createPool: function(name, description, chores, reward) {
    const pool = { name, description, chores, reward };
    return axios.post('/api/pool/create', pool);
  },

  getPools: function() {
    return axios.get('/api/pool/getPools');
  },

  getPool: function(id) {
    return axios.get('/api/pool/getPool/' + id);
  },

  deletePool: function(id) {
    return axios.delete('/api/pool/deletePool/' + id);
  },

  addChore: function(name, description) {
    const chore = { name, description };
    return axios.post('/api/chore/create', chore);
  },

  getChores: function() {
    return axios.get('/api/chore/getAll');
  },


  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
