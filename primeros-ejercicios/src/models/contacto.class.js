export class Contacto {

    nombre = String;
    apellido = String;
    email = String;
    conectado = Boolean;


    constructor(nombre, apellido, email, conectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
}