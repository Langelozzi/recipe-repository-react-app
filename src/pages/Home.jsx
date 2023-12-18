import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import axios from "../utils/hooks/axios";
// import RecipeList from "../components/RecipeList";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = useCallback(async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL_BASE}/recipes`
    );
    if (response.status === 200) {
      console.log(response.data.recipes);
      return response.data.recipes;
    }
  }, []);

  useEffect(() => {
    const recipes = getAllRecipes();
    setRecipes(recipes);
  }, [getAllRecipes, setRecipes]);

  return (
    <div>
      <Navbar />
      {/* <RecipeList recipes={recipes} /> */}
    </div>
  );
};

export default Home;
