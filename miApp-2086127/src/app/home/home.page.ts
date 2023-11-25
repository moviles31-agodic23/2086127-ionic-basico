import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log("HomePage: Constructor");
  }

  ngOnChanges(){
    console.log("HomePage: OnChanges");
  }
  ngOnInit(){
    console.log("HomePage: ngOnInit");
  }
  ngDoCheck(){
    console.log("HomePage: ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("HomePage: ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("HomePage: ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("HomePage: ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("HomePage: ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("HomePage: ngOnDestroy");
  }

  title : string ="Mi nueva página";

  hazmeClic(): void {
    alert("hiciste clic!");
  }

  imgUrl: string = 'https://i.redd.it/7ksiaa4exhh01.gif';
  
  nombreAlumno: string = '';

}
