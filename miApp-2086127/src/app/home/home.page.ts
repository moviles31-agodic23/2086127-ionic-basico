import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log("AppComponent: Constructor");
  }

  ngOnChanges(){
    console.log("AppComponent: OnChanges");
  }
  ngOnInit(){
    console.log("AppComponent: ngOnInit");
  }
  ngDoCheck(){
    console.log("AppComponent: ngDoCheck");
  }
  ngAfterContentInt(){
    console.log("AppComponent: ngAfterContentInt");
  }
  ngAfterContentChecked(){
    console.log("AppComponent: ngAfterContentChecked");
  }
  ngAfterContentViewInit(){
    console.log("AppComponent: ngAfterContentViewInit");
  }
  ngAfterContentViewChecked(){
    console.log("AppComponent: ngAfterContentViewChecked");
  }
  ngOnDestroy(){
    console.log("AppComponent: ngOnDestroy");
  }

  title : string ="Mi nuevo pagina!";

  hazmeClic(): void {
    alert("hiciste clic!");
  }

  imgUrl: string = 'https://i.redd.it/7ksiaa4exhh01.gif';
  
  nombreAlumno: string = '';

}
