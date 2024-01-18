const express = require('express');

const router = express.Router();

const obtenerHoraMiddleware = require('../middlewares/horaMiddleware');

router.get('/', obtenerHoraMiddleware, (req, res) => {
  const mensaje = req.query.mensaje || '';
  const horaActual = req.horaActual;

  res.send(`
    <h1>Bienvenido a la página principal</h1>
    <p>${mensaje}</p>
    <p>Hora actual: ${horaActual}:00</p>
    <form action="/endroute" method="get">
      <button type="submit">Ir a /endroute</button>
    </form>
  `);
});

module.exports = router