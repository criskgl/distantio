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
  currentLat:number;
  currentLon:number;

  homeLat:number;
  homeLon:number;

  totalDistance:string;  

  constructor(public geolocation:Geolocation, private alertController: AlertController, public toastController: ToastController) {
    this.setHomeLocation();
    this.updateDistanceToHome();
  }

  updateDistanceToHome(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.currentLat = geoposition.coords.latitude;
      this.currentLon = geoposition.coords.longitude;
      
      console.log(this.homeLat);
      console.log(this.homeLon);

      let latMadrid = 40.4167;
      let lonMadrid = -3.70325;

      this.totalDistance = this.calculateDistance(this.currentLon, this.homeLon, this.currentLat, this.homeLat) + " Km";
    });
  }


  updateGeolocation(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.currentLat = geoposition.coords.latitude;
      this.currentLon = geoposition.coords.longitude;
    });
  }

  setHomeLocation(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.homeLat = geoposition.coords.latitude;
      this.homeLon = geoposition.coords.longitude;
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
            this.updateDistanceToHome();
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
