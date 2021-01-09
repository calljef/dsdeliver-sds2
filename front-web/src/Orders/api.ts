import axios from "axios";

import Axios from 'axios';

const API_URL = 'http://localhost:8080';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts() {
  return Axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string) {
  return Axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}