export class Tecnologia {

    nombre: string
    imagen: string
    puntuacion: number
    tipo: string
    uid: string   
    
    constructor(nombre: string, imagen: string, puntuacion: number, tipo: string, uid: string){

        this.nombre = nombre
        this.imagen = imagen
        this.puntuacion = puntuacion
        this.tipo = tipo
        this.uid = uid
    }
}
