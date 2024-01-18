const express = require('express');

const app = express();
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

const obtenerHoraMiddleware = require('./middlewares/horaMiddleware')
const validarHoraMiddleware = require('./middlewares/validarHora')

//Si nun lo obtién enantes de validalo, peta
app.use(obtenerHoraMiddleware);

app.use('/', indexRouter);
app.use('/endroute', validarHoraMiddleware, endrouteRouter);


app.listen(3000, () => {
  console.log(`Server escuchando en el puerto 3000 http://localhost:3000`);
});