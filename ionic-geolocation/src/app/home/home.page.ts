import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  latitude: any = 0;
  longitude: any = 0;

  constructor(
    private geolocation: Geolocation,
    private firestore: AngularFirestore
  ) {}

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
        this.saveLocation(this.latitude, this.longitude)
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  // Firestore
  saveLocation(latitude: any, longitude: any) {
    const locationData = {
      latitude: latitude,
      longitude: longitude,
      timestamp: new Date(),
    };
    this.firestore
      .collection('locations')
      .add(locationData)
      .then((docRef: any) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error: any) => {
        console.log('Error adding document: ', error);
      });
  }
}
