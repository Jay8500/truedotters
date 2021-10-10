import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public dottersearch ="";
  public dotters = [];
  public dataShow = true;
  constructor(private actR: ActivatedRoute) { }
  ngOnInit() {
    this.dotters = [
      {
        "dotter": 'Jay',
        "dotterId": 1,
        "dotterEmp": "STL279",
        "dotterrank": "2",
        "dotterpoints": "279",
        "dotterdevelopment": "UI Front End"
      },
      {
        "dotter": 'Sai',
        "dotterId": 1,
        "dotterEmp": "STL279",
        "dotterrank": "2",
        "dotterpoints": "279",
        "dotterdevelopment": "UI Front End"
      },
      {
        "dotter": 'Ram',
        "dotterId": 1,
        "dotterEmp": "STL279",
        "dotterrank": "2",
        "dotterpoints": "279",
        "dotterdevelopment": "UI Front End"
      },
      {
        "dotter": 'Sushu',
        "dotterId": 1,
        "dotterEmp": "STL279",
        "dotterrank": "2",
        "dotterpoints": "279",
        "dotterdevelopment": "UI Front End"
      },
      {
        "dotter": 'Jay',
        "dotterId": 1,
        "dotterEmp": "STL279",
        "dotterrank": "2",
        "dotterpoints": "279",
        "dotterdevelopment": "UI Front End"
      },
      {
        "dotter": 'Jay',
        "dotterId": 1,
        "dotterEmp": "STL279",
        "dotterrank": "2",
        "dotterpoints": "279",
        "dotterdevelopment": "UI Front End"
      },
      {
        "dotter": 'Jay',
        "dotterId": 1,
        "dotterEmp": "STL279",
        "dotterrank": "2",
        "dotterpoints": "279",
        "dotterdevelopment": "UI Front End"
      },
      {
        "dotter": 'Jay',
        "dotterId": 1,
        "dotterEmp": "STL279",
        "dotterrank": "2",
        "dotterpoints": "279",
        "dotterdevelopment": "M L Engineer"
      },
      {
        "dotter": 'Jay',
        "dotterId": 1,
        "dotterEmp": "STL279",
        "dotterrank": "2",
        "dotterpoints": "279",
        "dotterdevelopment": "Backend"
      },
      {
        "dotter": 'Jay',
        "dotterId": 1,
        "dotterEmp": "STL279",
        "dotterrank": "2",
        "dotterpoints": "279",
        "dotterdevelopment": "Tester"
      }
    ]

    // this.actR.params( ParamMap  )
    this.fun();
  }

  fun(){
    setTimeout( () => this.dataShow = false, 1000 )
  }

}
