import { Component, OnInit } from '@angular/core';
import { VirtualmachinesService } from '../services/virtualmachines.service';
@Component({
  selector: 'app-virtualmachines',
  templateUrl: './virtualmachines.component.html',
  styleUrls: ['./virtualmachines.component.scss']
})
export class VirtualmachinesComponent implements OnInit {

  constructor(private VirtualmachinesService : VirtualmachinesService) { }
  vms : any
  ngOnInit(): void {
    this.VirtualmachinesService.getAllVMS()
    .subscribe(vms=>{
      this.vms = vms;
    });
  }

  arreter(id : any){
    
  }
  demarrer(id : any){

  }

}
