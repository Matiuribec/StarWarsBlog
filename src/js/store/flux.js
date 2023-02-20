const apiUrl = "https://www.swapi.tech/api/";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      species: [],
      films: [],
      people: [],
      starships: [],
      vehicles: [],
      planetsid: [],
      favorites: [],
    },

    actions: {
      getResources: async (resource, pagination) => {
        // let params = "";
        // console.log(pagination);
        // if (!!pagination?.page) {
        //   params = `?page=${pagination?.page}&limit=${pagination?.limit || 10}`;
        // }

        let response = await fetch(apiUrl + resource);
        if (!response.ok) {
          console.log(response.status + ": " + response.statusText);
          return;
        }
        let data = await response.json();
        let newStore = { ...getStore() };
        newStore[resource] = data.results || data.result;
        setStore(newStore);
      },

      getDetails: async (resource, id) => {
        let response = await fetch(
          `https://www.swapi.tech/api/${resource}/${id}`
        );
        if (!response.ok) {
          console.log(response.status + ": " + response.statusText);
          return;
        }
        let data = await response.json();
        return {
          ...data.result.properties,
        };
      },

  
      handleFavorites: (data) => {
        let currentStore = getStore();
        let actions = getActions();
        let favoriteIndex = currentStore.favorites.findIndex(
          (fav) => fav.link == data.link
        );
        if (favoriteIndex == -1) {
          setStore({
            ...currentStore,
            favorites: [...currentStore.favorites, data],
          });
        } else {
          actions.deleteFav(favoriteIndex)
        }
      },
      deleteFav: (index) => {
        let currentStore = getStore();
        let newFavorites = [...currentStore.favorites];
        newFavorites.splice(index, 1);
        setStore({
          ...currentStore,
          favorites: newFavorites,
        });
      }
      //loadInfo: async () => {
      //fetch(`https://www.swapi.tech/api/${resource}/${id}`)
      //  .then((res) => res.json())
      //.then((data) => setStore(planetsid = data.result.properties))
      // }
    },
  };
};

export default getState;
