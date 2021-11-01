import { Component, OnInit } from "@angular/core";

// gitimport { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joe',
  templateUrl: './joe.component.html',
  styleUrls: ['./joe.component.sass']
})
export class JoeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Asharf");

  }

}
