import { Component } from '@angular/core';
import { LoadingController, NavController, PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imagemPrincipal = '../../assets/img/mulher1.jpg';

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public popoverCtrl: PopoverController
  ) {}

  async aplicarEfeito(id: string) {
    let loading = await this.loadingCtrl.create({
      message: 'FINALIZANDO ALTERAÇÕES',
      duration: 1000,
    });

    loading.present();
    this.imagemPrincipal = '../../assets/img/' + id + '.jpg';
  }

  abrirNovaPagina() {
    this.navCtrl.navigateForward('popover')
  }
}
