import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private mC: MenuController, private route: Router) { }

  ngOnInit() {
    // this.mC.enable(true, 'main-menu');
  }
  gotoSignup(ctrl) {
    switch (ctrl) {
      case "signup":
        this.route.navigateByUrl('signup')
        break;
      case "createpost":
        this.route.navigateByUrl('createpost')
        break;
    }
  }

}
