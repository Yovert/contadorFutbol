import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-team-two',
  standalone: true,
  imports: [],
  templateUrl: './team-two.component.html',
  styleUrl: './team-two.component.css'
})
export class TeamTwoComponent {

  gol = 0

  @Input() ganandoTwo:boolean=true
  @Input() empateTwo:boolean=true
  @Input() perdiendoTwo:boolean=true

  @Output() enviarGolTeamTwo = new EventEmitter<any>();


  golEnv(){
    this.gol +=1
    this.enviarGolTeamTwo.emit(this.gol)
  }

}
