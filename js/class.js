class Transporte {
    constructor(voleto,precio){
        this.voleto = voleto
        this.precio = precio
        this.estado = 'Disponible'
    }

    set Estado(cambioEstado){
        this.estado = cambioEstado
    }

    get Estado(){
        return this.estado
    }
}

class Cliente extends Transporte{
    constructor(voleto,precio,nombre,dui,telefono,edad){
        super(voleto,precio)
        this.nombre = nombre
        this.dui = dui
        this.telefono = telefono
        this.edad = edad
    }

    venderVoleto(asiento){
        if(asiento.Estado){
            asiento.Estado = 'Reservado'
        }else{
            alert('El voleto ya no esta disponible')
        }
    }

    anularVoleto(){
        if (this.estado == 'Reservado'){
            this.estado = 'disponible'
        }else{
            alert('El voleto no se puede anular')
        }
    }
}


let transporte1 = new Transporte('A1',38.00)

const nuemeroVoleto = document.getElementById('numerovoleto')
const precioVoleto = document.getElementById('precio')
const estadoAsiento = document.getElementById('estado')
const buttonVender = document.getElementById('button')
const buttonAnular = document.getElementById('anular')

nuemeroVoleto.innerHTML = `${transporte1.voleto}`
precioVoleto.innerHTML = `${transporte1.precio}`
estadoAsiento.innerHTML = `${transporte1.estado}`

let cliente1 = new Cliente(nombre,dui,edad,telefono,voleto)

buttonVender.addEventListener('click',()=>{
    let nombre = document.getElementById("nombre").value
    let dui = document.getElementById("dui").value
    let edad = document.getElementById("edad").value
    let telefono = document.getElementById("telefono").value
    let voleto = document.getElementById("voleto").value
    
    
    cliente1.venderVoleto(transporte1)
    estadoAsiento.innerHTML=`${transporte1.Estado}`

})

buttonAnular.addEventListener('click',()=>{
    let nombre = document.getElementById("nombre").value
    
    cliente1.anularVoleto()
    estadoAsiento.innerHTML = `${transporte1.Estado}`
    
})