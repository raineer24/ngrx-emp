import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


export interface Positions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './app-dropdown.component.html',
  styleUrls: ['./app-dropdown.component.scss']
})
export class AppDropdownComponent implements OnInit {
  @Output() jobSelected: EventEmitter<any> = new EventEmitter();
  private _area:string;
  positions: Positions[];

  @Input() set area (area:string){
    if (!area) return;

    this._area = area;
    switch (this._area) {
      case 'services':
        this.positions = this.getServicePositions();
        break;

      case 'kitchen':
        this.positions = this.getKitchenPositions();
        break;
    
      default:
        this.positions = [];
        break;
    }
  }

  constructor() { }

  ngOnInit() {
  
  }

  getServicePositions() : Positions[] {
    return [
      {value: 'manager', viewValue: 'Manager'},
      {value: 'host', viewValue: 'Host'},
      {value: 'tuttofare', viewValue: 'Tuttofare'},
      {value: 'waitress', viewValue: 'Waitress'},
      {value: 'diningRoomManagers', viewValue: 'Dining room managers'}
    ];
  }

  getKitchenPositions() : Positions[] {
    return[
      {value: 'chef', viewValue: 'Chef'},
      {value: 'sousChef', viewValue: 'Sous Chef'},
      {value: 'dishwasher', viewValue: 'Dishwasher'},
      {value: 'cook', viewValue: 'Cook'}
    ];
  }

  onChangeJob(value) {
    console.log(value);
    this.jobSelected.emit(value);
  }
}
