import { Component } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.scss',
})
export class AppAbout {
  render() {
    return <p>Hello, About</p>;
  }
}
