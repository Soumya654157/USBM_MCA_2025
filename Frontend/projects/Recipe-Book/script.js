document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const addRecipeButton = document.getElementById("addRecipeButton");
    const recipeForm = document.getElementById("recipeForm");
    const submitRecipeButton = document.getElementById("submitRecipe");
    const cancelRecipeButton = document.getElementById("cancelRecipe");
    const recipeList = document.getElementById("recipeList");
  
    let recipes = [];
  
    // Show the recipe form
    addRecipeButton.addEventListener("click", () => {
      recipeForm.style.display = "block";
    });
  
    // Hide the recipe form
    cancelRecipeButton.addEventListener("click", () => {
      recipeForm.style.display = "none";
    });
  
    // Add a new recipe
    submitRecipeButton.addEventListener("click", () => {
      const recipeName = document.getElementById("recipeName").value;
      const recipeImage = document.getElementById("recipeImage").value;
      const recipeDescription = document.getElementById("recipeDescription").value;
  
      if (recipeName && recipeImage && recipeDescription) {
        const newRecipe = {
          name: recipeName,
          image: recipeImage,
          description: recipeDescription
        };
  
        recipes.push(newRecipe);
        displayRecipes();
        recipeForm.style.display = "none";  // Hide form after adding
      } else {
        alert("Please fill out all fields");
      }
    });
  
    // Display all recipes
    function displayRecipes() {
      recipeList.innerHTML = "";
  
      recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
  
        recipeCard.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.name}">
          <div class="recipe-info">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button class="delete" data-index="${index}">Delete</button>
          </div>
        `;
  
        // Delete recipe
        recipeCard.querySelector(".delete").addEventListener("click", () => {
          recipes.splice(index, 1);
          displayRecipes();
        });
  
        recipeList.appendChild(recipeCard);
      });
    }
  
    // Search for recipes
    searchBar.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query)
      );
      displayFilteredRecipes(filteredRecipes);
    });
  
    // Display filtered recipes
    function displayFilteredRecipes(filteredRecipes) {
      recipeList.innerHTML = "";
  
      filteredRecipes.forEach((recipe, index) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
  
        recipeCard.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.name}">
          <div class="recipe-info">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button class="delete" data-index="${index}">Delete</button>
          </div>
        `;
  
        recipeCard.querySelector(".delete").addEventListener("click", () => {
          recipes.splice(index, 1);
          displayFilteredRecipes(filteredRecipes.filter((_, i) => i !== index));
        });
  
        recipeList.appendChild(recipeCard);
      });
    }
  });
  