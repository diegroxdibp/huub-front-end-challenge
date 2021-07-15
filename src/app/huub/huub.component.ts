import { Component, OnInit } from '@angular/core';
import { HuubServiceService } from './huub-service.service';

@Component({
  selector: 'app-huub',
  templateUrl: './huub.component.html',
  styleUrls: ['./huub.component.scss']
})
export class HuubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.huub.getToken().subscribe(data => console.log(data));

  }

}
