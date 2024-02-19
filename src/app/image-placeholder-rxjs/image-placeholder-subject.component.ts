import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-placeholder-subject',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>Redo https://dev.me/products/image-placeholder - with BehaviorSubject</h3>
    <div class="container">
      <div class="field">
        <label for="text">
          <span>Text: </span>
          <input id="text" name="text" [ngModel]="text" 
            (ngModelChange)="textChange.emit($event)"
          />
        </label>
      </div>
      <div class="field">
        <label for="width">
          <span>Width: </span>
          <input id="width" name="width" [ngModel]="width" 
            (ngModelChange)="widthChange.emit($event)" 
            type="number" min="10" />
        </label>
      </div>
      <div class="field">
        <label for="height">
          <span>Height: </span>
          <input id="height" name="height" [ngModel]="height" (ngModelChange)="heightChange.emit($event)" type="number" min="10" />
        </label>
      </div>
      <div class="field">
        <label for="color">
          <span>Color: </span>
          <input id="color" name="color" [ngModel]="color" (ngModelChange)="colorChange.emit($event)" />
        </label>
      </div>
      <div class="field">
        <label for="backgroundColor">
          <span>Background color: </span>
          <input id="backgroundColor" name="backgroundColor" [ngModel]="backgroundColor" (ngModelChange)="backgroundColorChange.emit($event)" />
        </label>
      </div>
    </div>
  `,
  styles: `
    h3 {
      margin-bottom: 1rem;
    }

    div.container {
      padding: 0.5rem;
      border: 1px solid black;
      border-radius: 12px;
    }

    div.field {
      padding: 0.25rem;
    }

    input {
      padding: 0.5rem;
      border: 1px solid #4aa;
      border-radius: 8px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagePlaceholderSubjectComponent {  
  @Input()
  text!: string;

  @Output()
  textChange = new EventEmitter<string>();

  @Input()
  width!: number;

  @Output()
  widthChange = new EventEmitter<number>();

  @Input()
  height!: number;

  @Output()
  heightChange = new EventEmitter<number>();

  @Input()
  color!: string;

  @Output()
  colorChange = new EventEmitter<string>();

  @Input()
  backgroundColor!: string;

  @Output()
  backgroundColorChange = new EventEmitter<string>();
}
