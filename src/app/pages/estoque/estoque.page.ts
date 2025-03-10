import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-estoque',
  templateUrl: './estoque.page.html',
  styleUrls: ['./estoque.page.scss'],
})
export class EstoquePage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

}
