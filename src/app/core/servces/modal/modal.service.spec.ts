import { TestBed, ComponentFixture } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { MatDialogModule } from '@angular/material/dialog';


describe('ModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ MatDialogModule],
    providers: [ModalService]
  }));

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });
});
