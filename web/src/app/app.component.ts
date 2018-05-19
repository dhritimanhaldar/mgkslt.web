import { Component} from '@angular/core';
import { AppNetworkService } from './services/app-network.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	private appNetworkService: AppNetworkService;
	private router: Router;

	constructor(private apns: AppNetworkService, private rtr: Router) { 
		this.appNetworkService = apns;
		this.router = rtr;
		if(!this.appNetworkService.verifyIfLoggedIn() && this.router.url !== '/login') {
			this.router.navigateByUrl('/login');
		} else if(!this.appNetworkService.verifyIfAlreadyInPortal() && this.router.url !== '/school') {
			this.router.navigateByUrl('/school');
		}
	}

}