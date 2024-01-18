const validarHora = (req, res, next) => {
    const horaActual = req.horaActual;

    //Llave de paso
    const horaPaso = 15;
  
    if (horaActual >= horaPaso) {
        next();
    } else {

        res.locals.mensaje = `Aún no es la hora, espera hasta las ${horaPaso}:00 para entrar`;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
  };
  
module.exports = validarHora