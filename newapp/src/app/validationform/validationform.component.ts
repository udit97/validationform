import { Component } from '@angular/core';
import {FormGroup , FormControl, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './validationform.component.html',
  styleUrls: ['./validationform.component.css']
})
export class FormComponent  {
  form;
  isSubmitted=false;
  offshore=["Chennai","Bangalore", "Hyderabad", "Pune" ,"Kochi"];
  onshore=["US", "Non US"];
  count:object;
  isSelected=false;
  skills=[
    {id:1, name:'HTML5,CSS3,JS', checked: false},
    {id:2, name:'Angular 8', checked: false},
    {id:3, name:'Express JS', checked: false},
    {id:4, name:'SASS', checked: false},
    {id:5, name:'React JS', checked: false},
    {id:6, name:'Node JS', checked: false},
    {id:7, name:'ES5,ES6,ES7...', checked: false},
    {id:8, name:'Veu JS', checked: false},
    {id:9, name:'Mango DB', checked: false},
    {id:10, name:'Bootstrap 4', checked: false},
    {id:11, name:'TypeScript', checked: false}
  ];
  isEmpty=true;
  locations=[];
  constructor(fb: FormBuilder) {
    this.form=fb.group({
      assoName:['',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]+')
      ]],
      id:['',[
        Validators.required,
        Validators.pattern('^[0-9]{6}$')
      ]],
      projectId:['',[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{12}$')
      ]],
      location1:['',[
        Validators.required
      ]],
      location2:['',[
        Validators.required
      ]],
      skill:['',[
        Validators.required
      ]],
      file:['',[
        Validators.required
      ]],
      comment:['',[
        Validators.required
      ]]
    })
   }
   get assoName()
   {
     return this.form.get('assoName');
   }
   
   get id()
   {
     return this.form.get('id');
   }
   get projectId()
   {
     return this.form.get('projectId');
   }
   get location1(){
     return this.form.get('location1')
   }
   get location2(){
     return this.form.get('location2');
   }
   get file()
   {
     return this.form.get('file');
   }
   get comment()
   {
     return this.form.get('comment');
   }
   onItemChange(value){
    console.log(" Value is : ", value );
    this.isEmpty=false;
    if(value==1)
    {
      this.locations=this.offshore;      
    }
    else
    this.locations=this.onshore;
 }
 checkCheckBoxvalue(value){
  let i=this.skills.find(skill=> skill.id== value);
  i.checked=!i.checked;
  let count=this.skills.filter(car=> car.checked==true)
  console.log(count.length);
  if(count.length<5)
  this.isSelected=true;
  else if(count.length>=5)
  this.isSelected=false;
}
  onSubmit()
  {
    console.log("Submitted");
    this.form.reset();
    this.isSubmitted=true;
  }
  onReset()
  {
    this.form.reset();
    this.isSelected=false;
  }
}
