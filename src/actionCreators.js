import axios from "axios";
import { gotTitles } from "./actions";

const BASE_URL = 'localhost:5000'

function getTitlesFromAPI() {
  return async function(dispatch) {
    let response = await axios.get(`${BASE_URL}/api/posts`);
    dispatch(gotTitles(response.data))
  }
}

export { getTitlesFromAPI }