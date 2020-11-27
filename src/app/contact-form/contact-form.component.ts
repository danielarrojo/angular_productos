import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup; 
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private passwordPattern: any = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,10}$/;
  cities: any = ['Madrid','Barcelona','Valencia','Sevilla','Málaga'];


  constructor() { 
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  createFormGroup(){
    return new FormGroup({
        email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
        name: new FormControl('', [Validators.required, Validators.minLength(5)]),
        message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
        nickname: new FormControl('', [Validators.required, Validators.minLength(5)]),
        password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.passwordPattern)]),
        checkbox: new FormControl(false, [Validators.requiredTrue]),
        cityName: new FormControl('',[Validators.required]),
        birthDate:  new FormControl('', this.ageValidator)
    
      });
  }
  
  ageValidator(control: FormControl): {[s:string]:boolean}{
    if(control.value){
      /*const userDate:Date = new Date(control.value);
      const userYear = userDate.getFullYear();
      const todayDate = new Date();
      const todayYear = todayDate.getFullYear();
      const diff = todayYear-userYear; */
      if (new Date().getFullYear() - new Date(control.value).getFullYear() <= 17){
        return {required:true}
      } else {
        return {required:false}
 
      }
    }
  }

  resetForm(){
    this.contactForm.reset();
  }
  sendForm(){
    /*console.log('Sending form');
    console.log(this.contactForm.controls['name'].value);
    console.log(this.contactForm.controls['email'].value);
    console.log(this.contactForm.controls['message'].value);*/
    //window.location.href = 'mailto:' + this.contactForm.controls['email'].value + '?subject=' + this.contactForm.controls['name'].value + '&body=' + this.contactForm.controls['message'].value;
    if (this.contactForm.valid){
      console.log('Message sended');
    } else {
      console.log('Nop');
    }
    this.resetForm();
  }


  changeCity(e){
    console.log(this.contactForm.controls['cityName'].value);
    this.cityName.setValue(e.target.value, {
      onlySelf:true
    })
  }  


get name() { return this.contactForm.get('name')};
get email() { return this.contactForm.get('email')};
get message() { return this.contactForm.get('message')};
get nickname() { return this.contactForm.get('nickname')};
get password() { return this.contactForm.get('password')};
get checkbox() { return this.contactForm.get('checkbox')};
get cityName() { return this.contactForm.get('cityName')};
get birthDate() { return this.contactForm.get('birthDate')};
}
