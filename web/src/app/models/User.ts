import { Utils } from '../Utils';

export class User {
	id: Number;
	name: string;
	email: string;
	phone: string;
	password: string;
	gender: string;

	validatePhone(): Boolean {
		return Utils.validatePhone(this.phone)
	}

	validatePassword(): Boolean {
		return Utils.validatePassword(this.password)
	}

	validateEmail(): Boolean {
		return Utils.validateEmail(this.email)
	}
}