export class Usuario {

    nombre: string
    password: string 
    apellidos: string
    imagen: string
    resumen: Array<string>
    email: string
    telefono: number
    linkedIn: string
    gitHub: string

    constructor(nombre: string, password: string , apellidos: string, imagen: string, resumen: Array<string>, email: string, telefono: number, linkedIn: string, gitHub: string){
        
        this.nombre = nombre
        this.password = password 
        this.apellidos = apellidos
        this.imagen = imagen
        this.resumen = resumen
        this.email = email
        this.telefono = telefono
        this.linkedIn = linkedIn
        this.gitHub = gitHub

    }
}
