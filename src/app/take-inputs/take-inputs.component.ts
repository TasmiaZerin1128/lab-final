import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, take } from 'rxjs';
import { detail } from '../detail';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-take-inputs',
  templateUrl: './take-inputs.component.html',
  styleUrls: ['./take-inputs.component.css']
})
export class TakeInputsComponent implements OnInit {

  constructor(private detailService:DetailService, private route: Router) { }

  takeInput = new detail();


  ngOnInit(): void {
  }

  submit(takeInput: detail){
    this.detailService.setInputs(takeInput);
    this.route.navigate(['view'])
  }

}
