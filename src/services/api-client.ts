import axios from "axios";

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params:{
		key: '98a6986074be4bcb997a5f18395af010',
	}
});