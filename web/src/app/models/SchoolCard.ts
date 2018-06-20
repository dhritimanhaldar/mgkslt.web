import { LatLng } from "@agm/core";
import { Url } from "url";

export class SchoolCard {
  	public id: Number;
    public name: string;
    public address: string;
    public area: string;
    public city: string;
    public latitude: LatLng;
    public longitude: LatLng;
    public mgksltrate: string;
    public category: string;
    public email: string;
    public seats: Number;
    public url: Url;
    public ratenum: Number;
}