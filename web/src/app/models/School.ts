import { Board } from './Board';
import { State } from './State';

export class School {
  	public id: Number;
    public name: string;
    public address: string;
    public city: string;
    public pincode: string;
    public board: Board;
    public state: State;
    public stage: Number = 0;
}