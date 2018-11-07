import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './app-dropdown.component.html',
  styleUrls: ['./app-dropdown.component.scss']
})
export class AppDropdownComponent implements OnInit {

  @Input() area: any;

  positions: any[];

  constructor() { }

  ngOnInit() {

    this.area = 'services';
    console.log('dropdown: ', this.area);
    
    switch (this.area) {
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

  receiveMessage($event) {
    this.area = $event
  }

  getServicePositions() : any[] {
    return [
      {value: 'manager-0', viewValue: 'Manager'},
      {value: 'host-1', viewValue: 'Host'},
      {value: 'tuttofare-2', viewValue: 'Tuttofare'},
      {value: 'waitress-3', viewValue: 'Waitress'},
      {value: 'diningRoomManagers-4', viewValue: 'Dining room managers'}
    ];
  }

  getKitchenPositions() : any[] {
    return[
      {value: 'chef-0', viewValue: 'Chef'},
      {value: 'sousChef-1', viewValue: 'Sous Chef'},
      {value: 'dishwasher-2', viewValue: 'Dishwasher'},
      {value: 'cook-3', viewValue: 'Cook'}
    ];
  }
}
