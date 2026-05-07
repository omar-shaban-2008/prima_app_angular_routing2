import { Component } from '@angular/core';

@Component({
  selector: 'app-generic',
  imports: [],
  templateUrl: './generic.html',
  styleUrl: './generic.css',
})
export class Generic {}

import { ActivatedRoute, ParamMap } from '@angular/router';

export class GenericComponent {

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('id');

    console.log(uri_param);
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Emoji, FRUITS, ANIMALS } from '../emoji';

@Component({
  selector: 'app-generic',
  imports: [CommonModule],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.css'
})

export class GenericComponent {

  genVect : Emoji[]= [{name:"", emoji:""}];

  constructor(private route: ActivatedRoute) {

    this.route.paramMap.subscribe(this.getRouterParam);

  }

  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('id');

    console.log(uri_param);

    if (uri_param == 'fruits')
      this.genVect = FRUITS;

    if (uri_param == 'animals')
      this.genVect = ANIMALS;
  }

}

import { CommonModule } from '@angular/common';