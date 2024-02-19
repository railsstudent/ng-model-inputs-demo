import { ChangeDetectionStrategy, Component, VERSION } from '@angular/core';
import { ImagePlaceholderContainerComponent } from './image-placeholder-model-input/image-placeholder-container.component';
import { ImagePlaceholderSubjectContainerComponent } from './image-placeholder-rxjs/image-placeholder-subject-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImagePlaceholderSubjectContainerComponent,
  ImagePlaceholderContainerComponent],
  template: `
    <h1>Angular {{ version }} - model inputs demo </h1>
    <app-image-plceholder-subject-container />
    <app-image-placeholder-container />
  `,
  styles: `
    :host {
      display: block;
      padding: 0.5rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  version = VERSION.full;
}
