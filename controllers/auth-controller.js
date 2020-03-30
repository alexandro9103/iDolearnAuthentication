const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res) => {

    //Se obtiene el nombre de usuario desde la peticion
    const {
        username
    } = req.body;


    //Creo el objeto payload aqui va la informacion del usuario
    //que va a contener el Token
    const payload = {
        username
    };

    //Se firma el token con la llave secreta
    const token = jwt.sign(payload, 'MICLAVESECRETAPARAFIRMARELTOKEN');

    //Se devuelve la respuesta en un objeto JSON
    res.json({
        token
    })

}

exports.verifyToken = (req, res) => {

    //Se obtiene el token desde el encabezado
    const token = req.get('Authorization');

    try {
        //Se verifica que el token recibido haya sido firmado con la misma llave que se creo        
        //Si la verificacion es correcta en la constante usuario se almacena el payload del token
        const usuario = jwt.verify(token, 'MICLAVESECRETAPARAFIRMARELTOKEN')
        //Se retorna el mensaje verificado
        res.json({
            message: 'Verificado'
        })
    } catch (err) {
        //Si la verificacion es incorrecta se genera una excepcion
        res.status(401).json({
            message: 'Token no valido'
        })
    }


}