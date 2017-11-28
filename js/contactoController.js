class ContactoController {
    constructor() {
        
        this.contactos=[new Contacto("Walter White","151234554","heisenber@gmail.com"),new Contacto("John Snow","1534250055","elreydelnorte@hotmail.com"),new Contacto("Carlitox","156876441","soyCarlitox@hotmail.com")]
        this.contactoSeleccionado 

        //nuevo :
        this.nuevoNombre
        this.nuevoTelefono
        this.nuevoMail
  }


  seleccionarContacto(_contacto){
      this.contactoSeleccionado = _contacto
  }

  agregarContacto(){
      this.contactos.push(this.crearContacto())
      this.contactoSeleccionado = new Contacto()
  }

  crearContacto(){
      return new Contacto(this.nuevoNombre,this.nuevoTelefono,this.nuevoMail)
      
  }

  editarContacto(){
    this.contactoSeleccionado.nombre = this.nuevoNombre
    this.contactoSeleccionado.mail = this.nuevoMail
    this.contactoSeleccionado.telefono = this.nuevoTelefono
  }


}