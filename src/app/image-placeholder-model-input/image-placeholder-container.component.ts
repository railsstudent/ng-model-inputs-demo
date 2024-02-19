import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ImagePlaceholderComponent } from './image-placeholder.component';

@Component({
  selector: 'app-image-placeholder-container',
  standalone: true,
  imports: [ImagePlaceholderComponent],
  template: `
    <h2>New way - with model inputs</h2>
    <app-image-placeholder [(text)]="text"
      [(width)]="width" [(height)]="height"
      [(color)]="color" [(backgroundColor)]="backgroundColor"
    />
    <img [src]="placeholderUrl()" alt="generic placeholder" />
  `,
  styles: `
    img {
      margin-top: 1rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePlaceholderContainerComponent {
// The new way with model inputs
  text = signal('Model Inputs');
  width = signal(250);
  height = signal(120);
  color = signal('#fff');
  backgroundColor = signal('#000');  

  placeholderUrl = computed(() => {
    const text = this.text() ? encodeURIComponent(this.text()) : `${this.width()} x ${this.height()}`;
    const color = encodeURIComponent(this.color());
    const backgroundColor = encodeURIComponent(this.backgroundColor());
    
    return `https://via.assets.so/img.jpg?w=${this.width()}&h=${this.height()}&&tc=${color}&bg=${backgroundColor}&t=${text}`;
  });
}
