import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css']
})
export class LoginComponent {

  public formSubmitted = false;

  public loginForm : FormGroup;

  constructor(
    private router : Router,
    private fb : FormBuilder,
    private usuarioService : UsuarioService,
  ) {
    this.loginForm = this.fb.group({
      email: [localStorage.getItem('emailProyAdd') || '',[Validators.required, Validators.minLength(3), Validators.email]],
      password: ['',Validators.required],
      remember : [false, Validators.required],
    }
  );
   }

  login(){
    this.formSubmitted=true;
    console.log('submit');

    this.usuarioService.login(this.loginForm.value).subscribe(
      {
        next: (resp) => {
          console.log(resp);
          if (this.loginForm.get('remember')?.value) {
            localStorage.setItem('emailProyAdd',this.loginForm.get('email')?.value);
          } else {
            localStorage.removeItem('emailProyAdd')
          }
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          }).then((result)=> {
            this.router.navigateByUrl('/dashboard')
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
      }
    )
    
    // this.router.navigateByUrl('/');
    
  }

  campoNoValido(campo:string):boolean{
    if (this.loginForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    } else { 
      return false;
    }
  }
}
