import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  voltar() {
    this.navCtrl.navigateForward('home');
  }
}
