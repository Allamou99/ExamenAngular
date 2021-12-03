import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VirtualmachinesService } from '../services/virtualmachines.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addvm',
  templateUrl: './addvm.component.html',
  styleUrls: ['./addvm.component.scss']
})
export class AddvmComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private VirtualmachinesService: VirtualmachinesService,
    private route : Router) { }
  VmForm! : FormGroup
  Vm : any = {
    MachineName:"",
    AdressIp:"",
    Arrete:false
  }
  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.VmForm = this.fb.group({
      machinename:['',Validators.required],
      adresseip:['',Validators.required],
      etat:false,
    })
  }
  onSubmit(){
    this.Vm.MachineName = this.VmForm.controls['machinename'].value;
    this.Vm.AdressIp = this.VmForm.controls['adresseip'].value;
    this.Vm.Arrete = this.VmForm.controls['etat'].value;
    this.VirtualmachinesService.addVm(this.Vm)
    .subscribe(res=>{console.log(res); 
    this.route.navigate(['/vms'])});    
  }

}
