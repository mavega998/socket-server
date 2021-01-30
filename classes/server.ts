import express from 'express';
import { SERVER_PORT } from '../globals/envs';

export default class Server {
	app: express.Application;
	port: number;

	constructor() {
		this.app = express();
		this.port = SERVER_PORT;
	}

	start(callback: Function) {
        this.app.listen(this.port, callback());
    }
}
