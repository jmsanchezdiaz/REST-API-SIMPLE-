const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:4440@localhost:5434/blog');
const colors = require('colors');

//Funcion para obtener todos los usuarios
const getUser = async (req, res) => {
    const response = await db.any('SELECT * FROM users');
    res.json(response);
}
const getUserById = async (req, res) => {
    const userId = req.params.userid;
    const response = await db.any('SELECT * FROM users WHERE userid = $1',userId);
    res.json(response);
}
//Funcion para seleccionar un usuario por id
const setUser = async (req, res) => {
    const { userid,full_name, mail } = req.body;
    const response = await db.none('INSERT INTO users(userid,full_name,mail) VALUES($1,$2,$3)', [userid, full_name, mail]);
    res.json(response);
}
// //Funcion para eliminar un usuario
const delUser = async (req,res)=>{
    const userId = req.params.userid;
    const response = await db.any('DELETE FROM users WHERE userid = $1', userId);
}
// //Funcion para actualizar un usuario
const updUser = async (req, res) => {
    const userId = req.params.userid;
    const { full_name, mail } = req.body; 
    const response = await db.any('UPDATE users SET full_name = $1, mail = $2 WHERE userid = $3',[full_name,mail,userId]);
}

module.exports = {
    getUser,
    setUser,
    getUserById,
    delUser,
    updUser
};