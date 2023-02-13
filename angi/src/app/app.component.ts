import { Component, Directive, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';
import { AddoneComponent } from './addone/addone.component';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';



/*

@Component({
  selector: 'app-root',
  templateUrl: './kmail.html',
  styleUrls: ['./app.component.css'],

})



 export class AppComponent implements OnInit{
  title :string;
  highlight :boolean
  value;
  summe=0

  data:any


  
  
  constructor(private http: HttpClient){

    this.highlight = true
    this.title = "hello mohammed"
    
    this.value = [1,1,12,2,2.2,4.1,5,48,10]




    this.gen()
    this.sum()
    
    console.log(this.data)


  }
  ngOnInit(): void {
 
      this.http.get('../assets/data.json').subscribe(
        
        quiz=>{
          console.log(quiz)
          
          this.data=quiz;})
  }
gen(){
  let  h2 = document.createElement('h2');
this.value.forEach(function(item){
 const h2 = document.createElement("h2")
 h2.append(document.createTextNode(String(item)))
 
  const el = document.querySelector('body ')
  el?.appendChild(h2)
}
  )



  
  //this.value.forEach(item=>
  //res?.appendChild(document.createElement('h2') ) )
}

 sum(){
  for(const item of this.value){
    console.log(this.summe)
    this.summe+=item
  }
}
makeit(e:any){
console.log(e)
this.title=e

this.highlight  = !this.highlight
}
  }




*/
@Component({
  selector: 'app-root',
  templateUrl: './test.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  daten: any
  animals:any
  hero!: HeroService

  title = "title"
  liste = [1, 8, 6, 8, 7, 5, 47, 9, 88]

  text: any = []
  elements: any

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'date', "action", "delete"];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _dialog: MatDialog, private http: HttpClient) {
    //this.doing()
    this.hero = new HeroService(http)

    const view = this.viewElements()
    this.showHassio()

  }

  /*
  doing(){
   for(let item of this.liste){
    if(item%2 ==0){
  
  this.text.push({'status':item , 'back':'success'})
   }
  else(
    this.text.push({'status':item , 'back':'info'})
  )
  }}
  
  
  
  onMe(e:any){
  
    //this.text.push({'status': `${e}`, 'back':'danger' })
    console.log(e)
    localStorage.setItem('data', JSON.stringify(e))
    
  }
  */

  addTask() {
    const dialog = this._dialog.open(AddoneComponent)
    dialog.afterClosed().subscribe({
      next:
        (val) => {
          if (val) {

            this.viewElements()
          }
        }

    })


  }
  addMember() {

  }
  deleteOne(id: number) {
    this.hero.deleteItem(id).subscribe((res) => {

    })
    this.viewElements()
    this.showHassio()
  }



  viewElements() {
    this.hero.gettingElements().subscribe((res) => {

      this.daten = res
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    })




  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  showHassio() {

    this.hero.fetchdataFromHassio().subscribe({next:(res)=>{
      console.log(res)
      
    }
  ,error:(err)=>{
    console.log(err)
  }
  })
     
  
    }

  }












