import { Component, OnInit } from '@angular/core';

import { faInstagram,faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  faInstagram=faInstagram
  faFacebook=faFacebook
  faLinkedin=faLinkedin

  constructor() { }

  ngOnInit(): void {
  }

}
