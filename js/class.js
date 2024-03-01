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
        if (!this.estado){
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



nuemeroVoleto.innerHTML = `${transporte1.voleto}`
precioVoleto.innerHTML = `${transporte1.precio}`
estadoAsiento.innerHTML = `${transporte1.estado}`

