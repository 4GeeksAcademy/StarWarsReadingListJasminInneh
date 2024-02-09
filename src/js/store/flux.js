const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planet: [],
			vehicles: [],
			favorite: []
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
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
