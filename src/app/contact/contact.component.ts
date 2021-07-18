import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  likes: HTMLDivElement;
  likesButton: HTMLInputElement;
  dislikes: HTMLDivElement;
  dislikesButton: HTMLInputElement;
  constructor() { }

  ngOnInit(): void {
  }


}
