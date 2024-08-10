import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:['./register.component.css']
})
export class RegisterComponent{

  public formSubmitted = false;

  public registerForm = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.minLength(3), Validators.email]],
    password: ['',Validators.required],
    password2: ['',Validators.required],
    terminos:[false,Validators.required]
  }, {
    validators : this.passwordIguales('password','password2')
  }
);

  constructor( 
    private fb : FormBuilder,
    private usuarioService : UsuarioService,
    private router : Router
  ) { }


  crearUsuario(){
    this.formSubmitted = true;
    console.log(this.registerForm.valid);
    if (this.registerForm.valid) {
      this.usuarioService.crearUsuario(this.registerForm.value)
      .subscribe({
        next: (resp) => {
          console.log(resp);
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          }).then((resp)=>{
            console.log('resp register',resp);
            this.router.navigateByUrl('/');
            
          });
        },
        error: (error) => {
          console.log(error.error.msg);
          Swal.fire({
            title: 'Error!',
            text: error.error.msg,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        },
        complete: () => console.log('completado')
      });
    }
    
  }

  campoNoValido(campo:string):boolean{
    if (this.registerForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    } else { 
      return false;
    }
  }

  aceptaTerminos(){
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  passwordEquals(){
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;
    if ((pass1 !== pass2) && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  passwordIguales(password:string,password2:string){
    return (formGroup : FormGroup) => {
      const pass1Controls = formGroup.get(password);
      const pass2Controls = formGroup.get(password2);
      if (pass1Controls?.value === pass2Controls?.value) {
        pass2Controls?.setErrors(null);
      } else {
        pass2Controls?.setErrors({noEsIgual:true})
      }
    }
  }
}
