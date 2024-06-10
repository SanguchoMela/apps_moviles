import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude

  constructor(private geolocation: Geolocation) {}

  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600,
  };

  // use geolocation to get user's device coordinates
  getCurrentCoordinates() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.showMap(this.latitude, this.longitude);
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  // function to show the map
  showMap(latitude: any, longitude: any) {
    const map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup('You are here!')
      .openPopup();
  }
}
