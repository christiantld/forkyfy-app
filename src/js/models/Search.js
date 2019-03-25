// describe the date module for the search, the query and search results
// af40cf5b0ab7fd7cdeb1bfc4d0def51c --- API Key
// https://www.food2fork.com/api/search --- API HTTP Request

import axios from "axios";
import { key, proxy } from "../config";

export default class Search {
	constructor(query) {
		this.query = query;
	}

	async getResults() {
		try {
			const res = await axios(
				`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${
					this.query
				}`
			);
			this.results = res.data.recipes;
		} catch (error) {
			console.warn(error);
		}
	}
}
