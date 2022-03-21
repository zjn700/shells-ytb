import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Video } from '../model/video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
    onResize() {
      console.log('wiw', window.innerWidth)
      this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
      if (window.innerWidth > window.innerHeight * 1.5) {
        this.width =window.innerWidth *.45;
      } else {
        this.width = window.innerWidth *.88;
      }
  }
  breakpoint: number = 2;


  // @ViewChild('hello', { static: false }) divHello: ElementRef = {} as ElementRef;
  videoList: Video[] = [
    {
      title: '[Debugging] Expression has changed after it was checked',
      link: 'https://www.youtube.com/watch?v=O47uUnJjbJc'
    },
    {
      title: '[Debugging] The pipe {name} could not be found',
      link: 'https://www.youtube.com/watch?v=maI2u6Sxk9M'
    }

  ]
  currentVideoId: string = "-XMiG8bhvH8";
  width=400;
  // tw = 10;

  constructor(private el:ElementRef) { }

//    ngAfterViewInit() {
//   //  this.divHello.nativeElement.innerHTML = "Hello Angular";
//    this.tw = this.divHello.nativeElement.scrollWidth * .45
//    console.log('width test', this.divHello.nativeElement.scrollWidth, this.tw, window.innerWidth);

//  }

  ngOnInit(): void {

      this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
    // this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }

  selectVideo(video:Video) {
    const params = new URL(video.link).searchParams;
    if (params != null) {
      const check = params.get('v');
      if (check!= null) {
        this.currentVideoId = check;
        // this.tw = this.divHello.nativeElement.scrollWidth * .45
        // this.width=this.tw
        // console.log('new width', this.width)

      }
    }
  }

}

