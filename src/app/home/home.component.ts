import { Component, OnInit } from '@angular/core';
import { SocialServiceService } from '../Services/social-service.service';
import {Web} from '../modulos/Web'
import {SessionStorageService} from '../Services/sessionstorage.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  name:string
  id:string
  
  ListaWeb : any[] = []
                                                  
  constructor(private SocialService: SocialServiceService,
                      private Session : SessionStorageService) { }
  
  ngOnInit(): void {
    this.look()
    
  }
  
  search(){
    this.SocialService.getPosted(this.name).subscribe((data : any ) => {
      this.id = data.id;
      console.log(data)
    
  }     )
  }
  
  look(){
    for (let i=0; i<10; i++){
      this.SocialService.getPost(i).subscribe((data:any)=>{
        console.log(data)
        const web = new Web(
                                                      data.name,
                                                      data.id,
                                                      
        ) 
        this.ListaWeb.push(web)
    })
  }
  }
  }



