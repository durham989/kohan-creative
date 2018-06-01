import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireLiteAuth, AngularFireLiteDatabase, AngularFireLiteFirestore } from 'angularfire-lite';
import { ScrollService } from '../services/scroll.service';
import { WINDOW } from '../services/window.service';

import * as THREE from 'three';

@Component({
  selector: 'kohan-about-us',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutUsComponent implements OnInit {
  public message: string;
  public fireStoreData: any;
  public contactData: any;
  public endpoint = 'https://us-central1-kohan-creative.cloudfunctions.net/httpEmail';
  public pageSection: any;

  // particles variables
  myStyle: Object = {};
  myParams: Object = {};
  width: number = 100;
  height: number = 100;

  public document: any;

  // THREE variables
  public camera: any;
  public scene: any;
  public renderer: any;
  public geometry: any;
  public material: any;
  public mesh: any;
  public cubeSineDriver: any;
  public light: any;
  public smokeParticles: any;
  

  constructor(private router: Router,
    public ngxSmartModalService: NgxSmartModalService,
    public db: AngularFireLiteDatabase,
    public auth: AngularFireLiteAuth,
    public fireStore: AngularFireLiteFirestore,
    private httpClient: HttpClient,
    private scrollService: ScrollService,
    @Inject(WINDOW) public window: Window) { }

  ngOnInit() {
    this.document = window.document;
    this.message = 'Hello';
    this.auth.signinAnonymously();
    this.fireStore.read('contacts').subscribe((data) => {
      this.fireStoreData = data;
    });
    console.log(window);
    // this.configureParticles();
    // this.initializeSmoke();
  }

  navigateToPage(route) {
    this.router.navigate([route]);
  }

  openWorkWithUsModal() {
    window.scrollTo(0, 0);
    this.ngxSmartModalService.getModal('myModal').open();
  }

  scrollToPageSection(target) {
    this.pageSection = target;
    this.scrollService.triggerScrollTo(target);
    // this.scrollService.triggerScrollToWithSpeed(target);
  }

  configureParticles() {
    this.myStyle = {
      'position': "absolute",
      "width": '100%',
      'height': "100vh",
      // "z-index": -10,
      // "top": 0,
      // "left": 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 200,
        },
        color: {
          value: '#20bad2'
        },
        shape: {
          type: 'circle',
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#0574ac",
          opacity: 0.4,
          width: 1
        },
      }
    };
  }

  initializeSmoke() {
    this.renderer = new THREE.WebGLRenderer({alpha: true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;
    this.scene.add(this.camera);

    this.geometry = new THREE.CubeGeometry(200,200,200);
    this.material = new THREE.MeshLambertMaterial({
      color: 0xaa6666,
      wireframe: false
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.cubeSineDriver = 0;

    var textGeo = new THREE.PlaneGeometry(300,300);
    THREE.ImageUtils.crossOrigin = '';
    var textTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png');
    // var textTexture = THREE.ImageUtils.loadTexture('https://firebasestorage.googleapis.com/v0/b/kohan-creative.appspot.com/o/about_background.png?alt=media&token=863bc74a-5dbe-4df9-aeb2-c2c0fe7334cd');
    var textMaterial = new THREE.MeshLambertMaterial({
      color: 0x00ffff,
      opacity: 1,
      map: textTexture,
      transparent: true,
      blending: THREE.AdditiveBlending
    });
    var text = new THREE.Mesh(textGeo,textMaterial);
    text.position.z = 800;
    this.scene.add(text);

    this.light = new THREE.DirectionalLight(0xffffff,0.5);
    this.light.position.set(-1,0,1);
    this.scene.add(this.light);

    var smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
    var smokeMaterial = new THREE.MeshLambertMaterial({
      color: 0x00dddd,
      map: smokeTexture,
      transparent: true
    });
    var smokeGeo = new THREE.PlaneGeometry(300,300);
    this.smokeParticles = [];

    for (let p = 0; p < 150; p++) {
      var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
      particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random()*1000-100);
      particle.rotation.z = Math.random() * 360;
      this.scene.add(particle);
      this.smokeParticles.push(particle);
    }

    this.document.body.appendChild(this.renderer.domElement);
    // this.document.getElementById('tagline').appendChild(this.renderer.domElement);
    this.animate();
    
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.evolveSmoke();
    this.render();
  }

  evolveSmoke() {
    var sp = this.smokeParticles.length;
    var delta = new THREE.Clock();
    while(sp--) {
      this.smokeParticles[sp].rotation.z += (delta.getDelta() * 0.2);
    }
  }

  render() {
    this.mesh.rotation.x += 0.05;
    this.mesh.rotation.y += 0.01;
    this.cubeSineDriver += 0.01;
    this.mesh.rotation.z = 100 + (Math.sin(this.cubeSineDriver) * 500);
    this.renderer.render(this.scene, this.camera);
  }
  
}
