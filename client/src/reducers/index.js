const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };

    case "FILTER_CONTINENTS":
      const allCountries = state.allCountries;
      const continentsFiltered =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((c) => c.continents.includes(action.payload));
      return {
        ...state,
        countries: continentsFiltered,
      };

    case "FILTER_ACTIVITIES":
      const allCountries2 = state.allCountries;
      const activitiesFiltered =
        action.payload === "All"
          ? allCountries2.filter((c) => c.activities.length > 0)
          : allCountries2.filter((c) =>
              c.activities.find(
                (a) => a.name.toLowerCase() === action.payload.toLowerCase()
              )
            );
      return {
        ...state,
        countries: activitiesFiltered,
      };

    case "ORDER_BY_NAME":
      const sortedArrName = [...state.countries];
      action.payload === "asc"
        ? sortedArrName.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return -1;
            }
            return 0;
          })
        : sortedArrName.sort(function (a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            if (b.name.toLowerCase() > a.name.toLowerCase()) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        countries: sortedArrName,
      };

    case "ORDER_BY_POPULATION":
      const sortedArrPop = [...state.countries];
      action.payload === "low"
        ? sortedArrPop.sort(function (a, b) {
            if (a.population > b.population) {
              return 1;
            }
            if (b.population > a.population) {
              return -1;
            }
            return 0;
          })
        : sortedArrPop.sort(function (a, b) {
            if (a.population > b.population) {
              return -1;
            }
            if (b.population > a.population) {
              return 1;
            }
            return 0;
          });
      return {
        ...state,
        countries: sortedArrPop,
      };

    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };

    case "GET_NAME_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
