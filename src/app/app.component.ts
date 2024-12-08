import { Component } from '@angular/core';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';

@Component({
  selector: 'app-root',
  imports: [
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
