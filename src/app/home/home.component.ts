import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit, AfterViewInit {
  ngOnInit() {
    // Initialization code here, if needed
  }
  banerImage(): string{
    return '/assets/images.jpg';
  }
  @ViewChild('swiperContainer') swiperContainer:any= ElementRef;
  ngAfterViewInit() {
    const mySwiper = new Swiper(this.swiperContainer.nativeElement, {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      a11y: false,
      keyboardControl: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.js-next1',
        prevEl: '.js-prev1',
      },
    });
  }



}
