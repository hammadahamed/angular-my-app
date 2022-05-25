import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor() { }

  @Input() currentSection: string;

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(div: string) {
    this.featureSelected.emit(div);
  }

}
