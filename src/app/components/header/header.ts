import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'hb-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})


export class Header {
  protected readonly links = signal([
    {path: '/', name: 'Home'},
    {path: '/register', name: 'Register'}
  ]);
}

