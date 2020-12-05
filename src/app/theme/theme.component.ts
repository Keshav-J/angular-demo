import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  themes: string[] = ['theme1', 'theme2', 'theme3'];

  constructor() { }

  ngOnInit(): void {
  }

  loadTheme(selectedTheme: string): void {
    this.themes.forEach(theme => {
      document.getElementById('container-1').classList.remove(theme);
    });

    document.getElementById('container-1').classList.add(selectedTheme);
  }

}
