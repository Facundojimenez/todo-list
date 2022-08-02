
const actualizarCamposForm = (event, data, setData) => {
    setData({...data, [event.target.id]: event.target.value})
}

export {
    actualizarCamposForm
}
    