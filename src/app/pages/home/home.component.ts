import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgwWowService } from 'ngx-wow';
import { HomeService } from '../../services/home.service';
declare function  inicioS(); 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  private wowSubscription: Subscription;
  public noticias = [];

  constructor(private wowService: NgwWowService, private homes: HomeService) {   
   }

  ngOnInit(): void {      
    setTimeout(()=>{
      inicioS(); 
    },5000)

    this.homes.traerNews().subscribe(resp=>{      
      this.noticias.push(resp.articles[0]);
      this.noticias.push(resp.articles[1]);
      this.noticias.push(resp.articles[2]);
      this.noticias.push(resp.articles[3]);
      console.log(this.noticias);
    });


    

  }

}
