import { Component, OnInit } from '@angular/core';
import { VirtualmachinesService } from '../services/virtualmachines.service';
@Component({
  selector: 'app-virtualmachines',
  templateUrl: './virtualmachines.component.html',
  styleUrls: ['./virtualmachines.component.scss']
})
export class VirtualmachinesComponent implements OnInit {
  updated : any =     {
    MachineName:"",
    AdressIp:"",
    Arrete:false,
  }
  constructor(private VirtualmachinesService : VirtualmachinesService) { }
  vms : any
  ngOnInit(): void {
    this.VirtualmachinesService.getAllVMS()
    .subscribe(vms=>{
      this.vms = vms;
    });
  }

  arreter(id : any,vm:any){
    this.updated.MachineName = vm.MachineName;
    this.updated.AdressIp = vm.AdressIp;
    this.updated.Arrete = true;
    this.VirtualmachinesService.updateVm(this.updated,id)
    .subscribe(res=>{console.log(res); this.VirtualmachinesService.getAllVMS().subscribe(vms=>this.vms = vms)})

  }
  demarrer(id : any,vm:any){
    this.updated.MachineName = vm.MachineName;
    this.updated.AdressIp = vm.AdressIp;
    this.VirtualmachinesService.updateVm(this.updated,id)
    .subscribe(res=>{console.log(res) ;this.VirtualmachinesService.getAllVMS().subscribe(vms=>this.vms = vms)})
  }
}
