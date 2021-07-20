import { Component, OnInit } from '@angular/core';

//Mis importaciones
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.page.html',
  styleUrls: ['./reproductor.page.scss'],
})
export class ReproductorPage implements OnInit {

  parametroUrl:string="";
  parametroNombre:string="";
  file:any;

  constructor(private router:Router, private activateRoute:ActivatedRoute, private toast:ToastController) { }

  ngOnInit() {
    this.parametroUrl=this.activateRoute.snapshot.paramMap.get('miUrl');
    this.parametroNombre=this.activateRoute.snapshot.paramMap.get('nombre');

    console.log(this.parametroUrl);
    console.log(this.parametroNombre);
  }

  salir(){
    this.file.pause();
    this.router.navigateByUrl("/home");
  }

  ngAfterViewInit(){
    if(this.parametroUrl != ""){
      const btnplay = document.getElementById('play');
      const btnstop = document.getElementById('pausa');
      const btnrefresh = document.getElementById('loader');

      this.file = new Audio(this.parametroUrl);

      this.file.play().then(
        (resp) => {
          console.log("Inicia ejecución");
          btnplay.style.display = "block";
          btnrefresh.style.display = "none"
          btnstop.style.display = "block";
          
        },
        (err) => {
          this.file.pause();
          this.Mensaje("Error al reproducir");
          this.salir();
        }
      );

      this.file.addEventListener('playing',()=>{
        console.log("Ejecutando");
        btnplay.style.display = "block";
        btnrefresh.style.display = "none"
        btnstop.style.display = "block";
        
      });

      this.file.addEventListener('waiting',()=>{
        console.log("Recargando");
        btnplay.style.display = "none";
        btnrefresh.style.display = "block"
        btnstop.style.display = "none";
      });

      this.file.addEventListener('click',()=>{
        console.log("click");
        this.file.pause();
        btnplay.style.display = "block";
        btnrefresh.style.display = "none"
        btnstop.style.display = "none";
      });

      this.file.addEventListener('click',()=>{
        console.log("click 2");
        this.file.play();
        btnplay.style.display = "none";
        btnrefresh.style.display = "none"
        btnstop.style.display = "block";
      });
    }
  }

  async Mensaje(texto:string,color:string="success"){
    let t=await this.toast.create({
      message:texto,
      color:color,
      duration:2000
    });
    t.present();
  }

}
