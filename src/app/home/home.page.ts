import { Component } from '@angular/core';
import { Geolocation, Geoposition} from '@ionic-native/geolocation/ngx'
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lat:number;
  lon:number;
  totalDistance:string;  

  constructor(public geolocation:Geolocation, private alertController: AlertController, public toastController: ToastController) {
    this.getGeolocation();
  }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.lat = geoposition.coords.latitude;
      this.lon = geoposition.coords.longitude;

      /*Declares coordinates for the other place*/
      let latMadrid = 40.4167;
      let lonMadrid = -3.70325;

      /*Distance in KM between us and another place*/
      this.totalDistance = this.calculateDistance(this.lon, lonMadrid, this.lat, latMadrid) + "KM"

    });
  }

  calculateDistance(lon1, lon2, lat1, lat2){
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((lon1- lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    return Math.trunc(dis);
  }

  async presentAlertConfirmGoingOut() {
    const alert = await this.alertController.create({
      header: 'Confirma!',
      message: 'No podrás volver a reiniciar tu salida hasta que haya pasado 1h',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Acepto',
          handler: () => {
            this.presentToastConfirmStart();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToastConfirmStart() {
    const toast = await this.toastController.create({
      message: 'Acabas de iniciar tu salida',
      duration: 1000
    });
    toast.present();
  }

}
