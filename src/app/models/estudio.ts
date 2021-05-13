export class Estudio {

    escuela: string
    imagen: string
    titulo: string
    fechaInicio: Date
    fechaFin: Date
    descripcion: string
    tipo: string
    tiempoTotal: string
    uid: string

    constructor(escuela: string, imagen: string, titulo: string, fechaInicio: Date, fechaFin: Date, descripcion: string, tipo: string, tiempoTotal: string, uid: string){
        this.escuela = escuela
        this.imagen = imagen
        this.titulo = titulo
        this.fechaInicio = fechaInicio
        this.fechaFin = fechaFin
        this.descripcion = descripcion
        this.tipo = tipo
        this.tiempoTotal = tiempoTotal
        this.uid = uid
    }
}
