export class Experiencia {

    empresa: string
    imagen: string
    fechaInicio: Date
    fechaFin: Date
    descripcion: string
    tipo: string
    rol: string
    tiempoTotal: string
    uid: string

    constructor(empresa: string, imagen: string, fechaInicio: Date, fechaFin: Date, descripcion: string, tipo: string, rol: string, tiempoTotal: string, uid: string){
        this.empresa = empresa
        this.imagen = imagen
        this.fechaInicio = fechaInicio
        this.fechaFin = fechaFin
        this.descripcion = descripcion
        this.tipo = tipo
        this.rol = rol
        this.tiempoTotal = tiempoTotal
        this.uid = uid
    }

}