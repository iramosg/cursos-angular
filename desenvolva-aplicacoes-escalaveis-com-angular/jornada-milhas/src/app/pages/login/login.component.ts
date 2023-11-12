import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null],
      senha: [null],
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;
    this.authService.autenticar(email, senha).subscribe({
      next: (value) => {
        console.log('Login realizado com sucesso');
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.log('Erro ao realizar login');
      },
    });
  }
}
