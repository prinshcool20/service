import { Component,Input,OnInit } from '@angular/core';
import {EmployeeService} from './app.employeeservice'

@Component({
    selector:'show-emp',


    templateUrl:'app.show.html'
})

export class ShowEmployeeComponent implements OnInit{

  constructor(private service:EmployeeService){

  }
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:number;
    empall:any[]=[];
    @Input() //for accepting input from parent...............
    empid:any;
    @Input()
    empname:any;
    @Input()
    empsalary:any;
    @Input()
    empdepartment:any;

  
  // addemployee();

  //empall.push({empId:this.empid,empName:this.empname,empSalary:this.empsalary});
  ngOnInit(){
    this.service.getAllEmployee().subscribe((data:any)=>this.empall=data);
}

    showemployee():any{
        console.log("hello")
        this.empall.push({empId:this.empid,empName:this.empname,empSalary:this.empsalary,empDepartment:this.empdepartment});
    }
   
     //console.log(inchild:any);
     //inchild.push({empId:empId,empName:empName,empSalary:empSalary}) ;
   //// empall:any[]=[{empId:100,empName:"Raj",empSalary:1000.00},
   // {empId:101,empName:"Rahul",empSalary:1500.00},
   // {empId:102,empName:"Sham",empSalary:2000.00} ];
}