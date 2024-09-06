import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1OTFk6vhs_25QQvobrnDHCDrd-SVMm43pQ&s"
  
  @Input()
  contentTittle:string = ""

  @Input()
  contentDescription:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
