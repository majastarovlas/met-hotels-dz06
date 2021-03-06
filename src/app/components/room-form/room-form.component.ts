import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  myFormGroup: FormGroup;

  constructor(private myFormBuilder: FormBuilder, private roomService: RoomService) { }

  ngOnInit(): void {

    this.initForm();
  }

  initForm() {

    this.myFormGroup = this.myFormBuilder.group({

      id: ['', []],
      title: ['', []],
      imageUrl: ['', []],
      price: ['', []]
    });
  }

  onAdd(canAdd: boolean) {
    if (canAdd) {
      this.onSubmit();
    }
  }

  private onSubmit() {

    // add room

    const room: Room = {
      id: this.myFormGroup.get('id').value,
      title: this.myFormGroup.get('title').value,
      imageUrl: 'assets/img/room.jpg',
      price: this.myFormGroup.get('price').value
    }

    this.roomService.addRoom(room);
  }

}
