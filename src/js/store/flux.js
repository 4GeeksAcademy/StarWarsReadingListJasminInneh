const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planet: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then((resp) => {
						if (!resp.ok) throw Error(resp.statusText);
						return resp.json();
					})
					.then((data) => {
						console.log(data);

						setStore({ people: data.results });
					})
					.catch((error) => {
						console.log(error);
					});
			},
			getPlanet: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then((resp) => {
						if (!resp.ok) throw Error(resp.statusText);
						return resp.json();
					})
					.then((data) => {
						console.log(data);

						setStore({ planet: data.results });
					})
					.catch((error) => {
						console.log(error);
					});
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then((resp) => {
						if (!resp.ok) throw Error(resp.statusText);
						return resp.json();
					})
					.then((data) => {
						console.log(data);

						setStore({ vehicles: data.results });
					})
					.catch((error) => {
						console.log(error);
					});
			},
			getFavorites: (likes) => {
				const store = getStore();
				const actions = getActions();
				setStore({ favorites: [...store.favorites, likes] });
				console.log(store.favorites)
			}


		}
	};
};

export default getState;
