import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/citiesActions";

const { getCities, getCitiesFilter } = citiesActions;

const initialState = {
  cities: [],
  value: "",
  zone: "",
  categories: [],
  checks: []
};

const citiesReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(getCities.fulfilled, (state, action) => {
      let categoriesZones = action.payload.map((event) => event.zone);
      let categoriesZonesFilter = [...new Set(categoriesZones)];
      return {
        ...state,
        cities: action.payload,
        categories: categoriesZonesFilter,
      };
    })
    .addCase(getCitiesFilter.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
});

export default citiesReducers;
