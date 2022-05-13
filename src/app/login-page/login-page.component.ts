import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPageService } from './login-page.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class loginPageComponent implements OnInit {
  myForm!: FormGroup;
  imageSrc = 'assets/data/logo.png';
  isError:any=false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginPageService: LoginPageService,

  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      rememberme: new FormControl('false'),

    });

  }

  onSubmit() {
     if(this.myForm.value.username.toLowerCase()=='dfs.trial@infocepts.com' && this.myForm.value.password=='Test789&'){
   
    // this.loginPageService.isLogged(this.myForm).subscribe(() => {
      this.router.navigate(['/search']);
     this.isError=false;
     }
     else{
       this.isError=true;
     }
   

  }


  onCancel() {
    this.router.navigate(['/users']);
  }

}