//MEDIO AL PEDO TODO

const actualizarCamposForm = (event, data, setData) => {
    setData({...data, [event.target.id]: event.target.value})
}


// const actualizarCamposForm = (event, data) => {
//     data = ({...data, [event.target.id]: event.target.value})
// }

export {
    actualizarCamposForm
}
    