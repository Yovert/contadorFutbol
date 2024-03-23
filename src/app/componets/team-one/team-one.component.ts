import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-team-one',
  standalone: true,
  imports: [],
  templateUrl: './team-one.component.html',
  styleUrl: './team-one.component.css'
})
export class TeamOneComponent {

  gol = 0;

  @Input() ganandoOne?:boolean
  @Input() empateOne?:boolean
  @Input() perdiendoOne?:boolean

  @Output() enviarGolTeamOne = new EventEmitter<any>();

  golEnv(){
    this.gol +=1
    this.enviarGolTeamOne.emit(this.gol)
  }

}
