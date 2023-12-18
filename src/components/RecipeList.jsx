import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const RecipeList = (props) => {
  const { recipes } = props;

  return (
    <Grid container spacing={2}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={recipe.image}
                alt={recipe.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Prep Time: {recipe.prepTime} minutes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cook Time: {recipe.cookTime} minutes
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipeList;
