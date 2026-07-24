import { Component, input, output } from '@angular/core';
import { Product } from '../../../shared/types';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {

  close = output<void>();
}
