import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './app-dropdown.component.html',
  styleUrls: ['./app-dropdown.component.scss']
})
export class AppDropdownComponent implements OnInit {
  @Output() jobSelected: EventEmitter<any> = new EventEmitter();
  private _area:string;
  
  @Input() set area (area:string){
    console.log(area)

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

  positions: any[];

  constructor() { }

  ngOnInit() {
  
  }

  getServicePositions() : any[] {
    return [
      {value: 'manager', viewValue: 'Manager'},
      {value: 'host', viewValue: 'Host'},
      {value: 'tuttofare', viewValue: 'Tuttofare'},
      {value: 'waitress', viewValue: 'Waitress'},
      {value: 'diningRoomManagers', viewValue: 'Dining room managers'}
    ];
  }

  getKitchenPositions() : any[] {
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
