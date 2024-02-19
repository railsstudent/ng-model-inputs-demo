import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatestWith, map } from 'rxjs';
import { ImagePlaceholderSubjectComponent } from './image-placeholder-subject.component';

@Component({
  selector: 'app-image-plceholder-subject-container',
  standalone: true,
  imports: [ImagePlaceholderSubjectComponent, AsyncPipe],
  template: `
    <h2>Old way - with BehaviorSubject and RxJS </h2>
    <app-image-placeholder-subject 
      [text]="textSub.getValue()"
      (textChange)="textSub.next($event)"
      [width]="widthSub.getValue()" (widthChange)="widthSub.next($event)"
      [height]="heightSub.getValue()" (heightChange)="heightSub.next($event)"
      [color]="colorSub.getValue()" (colorChange)="colorSub.next($event)"
      [backgroundColor]="backgroundColorSub.getValue()"
      (backgroundColorChange)="backgroundColorSub.next($event)"  
    />
    <img [src]="placeholderUrl$| async" alt="generic placeholder" />
  `,
  styles: `
    img {
      margin-top: 1rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagePlaceholderSubjectContainerComponent {
  // The way without mode inputs.  I use BehaviorSubject to implement the same behavior
  textSub = new BehaviorSubject('BehaviorSubject');
  widthSub = new BehaviorSubject(250);
  heightSub = new BehaviorSubject(120);
  colorSub = new BehaviorSubject('#fff');
  backgroundColorSub = new BehaviorSubject('#000');

  placeholderUrl$ = this.textSub.pipe(
    combineLatestWith(this.widthSub, this.heightSub, this.colorSub, this.backgroundColorSub),
    map(([text, width, height, color, bgColor]) => {
      const encodedText = text ? encodeURIComponent(text) : `${width} x ${height}`;
      const encodedColor = encodeURIComponent(color);
      const encodedBgColor = encodeURIComponent(bgColor);

      return `https://via.assets.so/img.jpg?w=${width}&h=${height}&&tc=${encodedColor}&bg=${encodedBgColor}&t=${encodedText}`;
    })
  );
}
