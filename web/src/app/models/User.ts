export class User {
	id: Number;
	name: string;
	email: string;
	phone: string;
	password: string;
	gender: string;

	validatePhone(): Boolean {
		if(this.phone && this.phone.trim().match(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/) == null) {
			return 
		}
	}
}