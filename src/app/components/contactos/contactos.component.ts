import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  constructor() { }

  ngOnInit(): void {
  }

}
