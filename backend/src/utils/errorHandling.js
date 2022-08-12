const sendError = (err, req, res, next) => {
    res.status(400).json({
        errorMessage: err
    })
} 

const checkIntegerId = (id) => {
    if(isNaN(id)){
        throw new Error("El ID debe ser un número válido")
    }
}

module.exports = {
    sendError,
    checkIntegerId
};