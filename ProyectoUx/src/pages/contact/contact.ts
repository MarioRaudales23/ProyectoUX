import { Component, Input } from '@angular/core';
import {
  NavController,
  AlertController, // To Add Button
  ActionSheetController, // To delete
  Button
} from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from '@firebase/util';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  Datos={};
  currentUser: any;
  userRef: any;
  users: AngularFireList<any>;
  DenunciaRef: any;
  Denuncia: AngularFireList<any>;
  constructor( public navCtrl: NavController,
               public alertCtrl: AlertController,
               public actionSheetCtrl: ActionSheetController,
               public afDatabase: AngularFireDatabase,
               public afAuth: AngularFireAuth) {
    this.DenunciaRef = afDatabase.list('denuncias');
    this.Denuncia = this.DenunciaRef.valueChanges();
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.currentUser = null;
        return;
      }
      this.currentUser = { uid: user.uid, photoURL: user.photoURL , displayname: user.displayName};
    });
  }
  show() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Log Out',
          role: 'destructive',
          handler: () => {
            this.logout();
          }
        }
      ]
    });
    actionSheet.present();
  }
  DenunciaForm(){
    const NewMensajeRef = this.DenunciaRef.push({info : this.Datos});
    NewMensajeRef.set({
      info : this.Datos
    });
    let alert = this.alertCtrl.create({
      title: 'Denuncia enviada!',
      subTitle: 'Su denuncia se ha enviado con exito!',
    });
    alert.present();
    setTimeout(function(){ 
      window.location.reload();}, 1500);
    

  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        console.log('resultado login google:', response);
        const userRef = this.afDatabase.list('users');
        userRef.update(response.user.uid,
          {
            userId: response.user.uid,
            displayName: response.user.displayName,
            photoURL: response.user.photoURL
          });
      });
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
