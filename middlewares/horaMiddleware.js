const obtenerHora = (req, res, next) => {
    
    const horaActual = new Date().getHours();
    req.horaActual = horaActual;
    next()

};
  
module.exports = obtenerHora