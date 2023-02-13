import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from '../hero.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-addone',
  templateUrl: './addone.component.html',
  styleUrls: ['./addone.component.css']
})
export class AddoneComponent {


  itemform: FormGroup;
  elements: any
  constructor(private _fb: FormBuilder, private http: HttpClient, private hero: HeroService, private _dialogref: MatDialogRef<AddoneComponent>) {
    this.itemform = this._fb.group({
      firstname: '',
      lastname: '',
      date: ''




    })

  }

dismissDialog(){
  this._dialogref.close(false)
}
  addItem() {
    console.log('starting')
    if (this.itemform.valid) {
      console.log(this.itemform.value)
    }


    //localStorage.setItem('data' , JSON.stringify({
    // 'firstname': this.firstname, 
    //'lastname':this.lastname,
    //'date': this.date
    // }))
    //const head = new HttpHeaders({'myheader':'kmail'});

    if (this.itemform.value.firstname != '' && this.itemform.value.lastname != '') { 
    this.hero.addItem(this.itemform.value).subscribe((res) => {
      console.log(res)
      this._dialogref.close(true) 


    })}

    //this.http.post('http://localhost:3000/kmail', this.itemform.value ,{headers:head} )

  }

}
