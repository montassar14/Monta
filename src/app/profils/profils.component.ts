import { Component, OnInit } from '@angular/core';
import {Profil} from "./profils";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {ProfilsService} from "./profils.service";



@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss']
})
export class ProfilsComponent implements OnInit {

  personnes: Profil[] = [];
  imageProfil = "assets/img/montassar.jpg";
  jsLogo = "assets/img/javascript-logo.png";
  phpLogo = "assets/img/php-logo.png";
  javaLogo = "assets/img/java-logo.png";
  cLogo = "assets/img/c-logo.png";
  vbaLogo = "assets/img/vba-logo.png";
  mysqlLogo = "assets/img/mysql-logo.png";
  pythonLogo = "assets/img/python-logo.png";
  gitLogo = "assets/img/git-logo.png";
  umlLogo = "assets/img/uml-logo.png";
  frUkLogo = "assets/img/france-uk-drapeaux.jpg";
  gitlab = "assets/img/gitlab.png";
  C = "assets/img/C.png";
  CPlus = "assets/img/C++.PNG";
  postgresql = "assets/img/postgresql.png";
  docker = "assets/img/docker.png";
  kubernetes = "assets/img/kubernetes.png"
  jenkins = "assets/img/jenkins.png";

  listhead:any;


  constructor(private profilServices: ProfilsService ) {
  }

  ngOnInit(): void {
    
    this.profilServices.findAll()
      .pipe(
        map(data => data.profils),
        tap(personnes => this.personnes = personnes),
      ).subscribe();
    

  }

}
