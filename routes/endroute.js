const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.send(`
    <h1>¡Bienvenido!</h1>
    <p>¿Has perao o has cambiao el middleware de la hora?</p>
  `);
});

module.exports = router