import {Component, Input, OnInit} from '@angular/core';
import {Colors} from "../../../services/colorTCXModel";

@Component({
  selector: 'app-tcx',
  templateUrl: './tcx.component.html',
  styleUrls: ['./tcx.component.scss']
})
export class TcxComponent implements OnInit {
  @Input() colorTCXs: Colors;
  @Input() colorTCXsOriginals: Colors;

  constructor() { }

  ngOnInit(): void { }

  onKeywordSearch($event: any): void {
    const keyword: string = $event.target.value;

    if (keyword.length === 0) {
      this.colorTCXs = this.colorTCXsOriginals;
    }

    this.colorTCXs = this.colorTCXs.filter((value) => {
      return value.hex.toLowerCase().search(keyword) != -1 ||
        value.code.toLowerCase().search(keyword) != -1 ||
        value.name.toLowerCase().search(keyword) != -1;
    });
  }

}
