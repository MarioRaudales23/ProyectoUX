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
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentUser: any;
  userRef: any;
  DenunciasRef: firebase.database.Reference;
  users: AngularFireList<any>;
  categoria:any;
  DenunciaRef: any;
  Denuncia: AngularFireList<any>;
  denuncias: Array<any>;
  denuncias2: Array<any>;
  loadedDenuncias: Array<any>;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public afDatabase: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
    this.DenunciaRef = afDatabase.list('denuncias');
    this.Denuncia = this.DenunciaRef.valueChanges();
    this.DenunciasRef = firebase.database().ref('denuncias');
    this.DenunciasRef.on('value', denunciasList => {
      let denuncias = [];
      denunciasList.forEach(denuncia => {
        denuncias.push(denuncia.val());
        return false;
      });
      this.denuncias = denuncias;
      this.denuncias2 = denuncias;
      this.loadedDenuncias = denuncias;
    });
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.currentUser = null;
        return;
      }
      this.currentUser = { uid: user.uid, photoURL: user.photoURL };
    });
  }
  show() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'LogOut',
          role: 'destructive',
          handler: () => {
            this.logout();
          }
        }
      ]
    });
    actionSheet.present();
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

  initializeItems(): void {
    this.denuncias = this.loadedDenuncias;
  }
  changeStatus(Categ:string){
    this.categoria = Categ;
  }
  getItems(searchbar) {
    this.initializeItems();
    var q = (searchbar.srcElement || searchbar.target).value;
    if (!q) {
      return;
    }
    this.denuncias = this.denuncias.filter((v) => {
      if (v.info.encabezado && q) {
        if (v.info.encabezado.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

}
