import { Component } from '@angular/core';
import { TeamOneComponent } from '../team-one/team-one.component';
import { TeamTwoComponent } from '../team-two/team-two.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marcador',
  standalone: true,
  imports: [TeamOneComponent, TeamTwoComponent, FormsModule],
  templateUrl: './marcador.component.html',
  styleUrl: './marcador.component.css'
})
export class MarcadorComponent {

  team_one = 0;
  team_two = 0;

  ganandoOneP=false;
  empateOneP=false;
  perdiendoOneP=false;

  ganandoTwoP=false;
  empateTwoP=false;
  perdiendoTwoP=false;

  tiempo:any="1:00";
  minuto=1;
  segundo=0;

  ultimoTiempo="";
  ultimoSegundo:any="";
  segundoTerminar=0;
  minutoTerminar=5


  mensajeInicio="";
  empezarPartido:any="";
  segundoEmpezar=0;
  minutoempezado=5;

  disablebtnIniciar:boolean=false;
  TeamGanador="";
  contentGanador:boolean=false

  getGolTeamOne(golTeamOne:any){
    this.team_one++
    if(this.team_one > this.team_two){
      this.ganandoOneP=true
      this.empateOneP=false
      this.perdiendoOneP=false
      this.ganandoTwoP=false
      this.empateTwoP=false
      this.perdiendoTwoP=true

    }else if(this.team_one == this.team_two){
      this.ganandoOneP=false
      this.empateOneP=true
      this.perdiendoOneP=false
      this.empateTwoP=true
      this.ganandoTwoP=false
      this.perdiendoTwoP=false

    }else{
      this.ganandoOneP=false
      this.empateOneP=false
      this.perdiendoOneP=true
      this.ganandoTwoP=true
      this.empateTwoP=false
      this.perdiendoTwoP=false
    }
  }

  getGolTeamTwo(golTeamTwo:any){
    this.team_two++
    if(this.team_one < this.team_two){
      this.ganandoTwoP=true
      this.empateTwoP=false
      this.perdiendoTwoP=false
      this.ganandoOneP=false
      this.empateOneP=false
      this.perdiendoOneP=true

    }else if(this.team_one == this.team_two){
      this.ganandoTwoP=false
      this.empateTwoP=true
      this.perdiendoTwoP=false
      this.empateOneP=true
      this.perdiendoOneP=false
      this.ganandoOneP=false
    }else{
      this.ganandoTwoP=false
      this.empateTwoP=false
      this.perdiendoTwoP=true
      this.ganandoOneP=true
      this.empateOneP=false
      this.perdiendoOneP=false
    }
  }


  iniciarPartido(){
    var comienzo = setInterval(() => {
      if(this.segundoEmpezar==0){
        this.segundoEmpezar=5
        this.minutoempezado--
        this.empezarPartido=this.segundoEmpezar
        this.mensajeInicio="EL PARTIDO INICIA EN "
     }else{
      this.segundoEmpezar--
      this.empezarPartido=this.segundoEmpezar
     }
     if(this.empezarPartido=="0"){
      var intervalo= setInterval(() =>{
        if(this.segundo==0){
          this.segundo=59
          this.minuto--
          this.tiempo=this.segundo
        }else{
          this.segundo--
          this.tiempo=this.segundo
        }
        if(this.tiempo=="5"){
          this.ultimoTiempo='EL PARTIDO ACABA EN ';
          var segTerminar= setInterval(()=> {
            if(this.segundoTerminar == 0){
                this.segundoTerminar=5
                this.minutoTerminar--
                this.ultimoSegundo=this.segundoTerminar
            }else{
              this.segundoTerminar--
              this.ultimoSegundo=this.segundoTerminar
            }
            if(this.ultimoSegundo=="0"){
              clearInterval(segTerminar)
            }

          },1000)

        }
        if(this.tiempo=="0"){
          clearInterval(intervalo)
          this.contentGanador=true
          if(this.team_one > this.team_two){
            this.TeamGanador='Equipo Ganador Es "PARIS S-G" '
          }else if(this.team_one == this.team_two){
            this.TeamGanador='Empate Muchachones'
          }else{
            this.TeamGanador='Equipo Ganador Es "BARCELONA" '
          }
        }
      },1000)
      clearInterval(comienzo)
      this.mensajeInicio=""
      this.empezarPartido=""
     }

    },1000)
    this.disablebtnIniciar=true
  }

}
