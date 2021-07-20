import { Component } from '@angular/core';


//Mis importaciones
import { Router } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombreRadio='';
  listaradios:any[]=[];

  // listaradios: {
  //   logo: string,
  //   nombre: string,
  //   datosurl: string

  // }[] = [
  //     {
  //       logo: "/assets/img/radio_logo.png",
  //       nombre: "CATOLICA",
  //       datosurl: "http://srv.voxservidor.com:7144/;"
  //     },
  //     {
  //       logo: "/assets/img/radio_logo.png",
  //       nombre: "RADIO TROPICANA FM",
  //       datosurl: "http://stream.vennexgroup.com:8000/stream;"
  //     },
  //     {
  //       logo: "/assets/img/radio_logo.png",
  //       nombre: "NOSE",
  //       datosurl: "https://node-33.zeno.fm/evnd5x9057zuv.aac?rj-ttl=5&rj-tok=AAABemN7XZ4ABsVXPj6EDtorvw;"
  //     }, 
  //     {
  //       logo: "/assets/img/radio_logo.png",
  //       nombre: "RADIO MAXIMA CARACOL",
  //       datosurl: "http://streaming.admediasystem.net:9316/;"
  //     },
  //     {
  //       logo: "/assets/img/radio_logo.png",
  //       nombre: "RADIO ALEGRIA",
  //       datosurl: "http://streaming.admediasystem.net:9376/;"
  //     },
  //     {
  //       logo: "/assets/img/radio_logo.png",
  //       nombre: "RADIO NAUTICA",
  //       datosurl: "https://ssl.srvstm.com:9118/;"
  //     },
 
  //     {
  //       logo: "/assets/img/radio_logo.png",
  //       nombre: "RADIO CANELA MANABI",
  //       datosurl: "https://us9.maindigitalstream.com/ssl/7863;"
  //     }

  //   ]

  constructor(private router:Router, private serv:ServiciosService) {}

  ngOnInit(){
    this.recuperarRadios();
  }
  
  irA(miUrl, nombre){
    //console.log("ok");
    this.router.navigate(['/reproductor',miUrl,nombre]);
  }

  Buscar(evento){
    console.log(evento.detail.value);
    this.nombreRadio = evento.detail.value;
  }

  recuperarRadios(){
    this.serv.getRadiosjson().subscribe(resp=>{
      this.listaradios = resp;
    });
  }
}
