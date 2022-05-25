import { Component, OnInit } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons/faYoutubeSquare';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentDate = new Date();
  facebookIcon = faFacebookSquare;
  youtubeIcon = faYoutubeSquare;
  youtubeURL = 'https://www.youtube.com/channel/UC_WrdY6BZCC3slmWyoPrA9A';
  facebookURL = 'https://www.facebook.com/Feelware';

}
