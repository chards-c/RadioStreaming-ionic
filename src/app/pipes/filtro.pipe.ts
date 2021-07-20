import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo:any[], texto:string, nomColumna:string): any[] {
    if(texto === ''){
      return arreglo;
    }
    //console.log(texto);
    texto = texto.toLowerCase();
    return arreglo.filter(columna=>{
      return columna[nomColumna].toLowerCase().includes(texto)
    });
  }

}
