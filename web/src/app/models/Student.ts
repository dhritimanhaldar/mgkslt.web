import { Class } from './Class';
import { Parent } from './Parent';

export class Student {
	id: number;
	name: string;
	profilePic: string;
	clazz: Class
	parentList:[Parent]
	gender: string
	dob: Date
	admissionCode: string
}