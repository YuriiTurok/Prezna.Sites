import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent{
  @Input() title: string = '';
  @Input() img: string = '';
  @Input() website: string = '';
  @Input() theme: string = '';
}
