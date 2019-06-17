import { Component, OnInit } from '@angular/core';
import { Sketch } from '../sketch';
import { SKETCHES } from '../mock-sketches'

@Component({
  selector: 'app-sketch-area',
  templateUrl: './sketch-area.component.html',
  styleUrls: ['./sketch-area.component.css']
})
export class SketchAreaComponent implements OnInit {
  
  sketches = SKETCHES;
  
  constructor() { }

  ngOnInit() {
  }

}
