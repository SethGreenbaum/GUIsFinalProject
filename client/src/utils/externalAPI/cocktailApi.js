import axios from "axios";
export default {
  getDrinks: function() {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  }
};