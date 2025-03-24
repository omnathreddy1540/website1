// Select DOM elements
const mealNameInput = document.getElementById('meal-name');
const mealCaloriesInput = document.getElementById('meal-calories');
const addMealButton = document.getElementById('add-meal');
const mealList = document.getElementById('meal-list');

const workoutNameInput = document.getElementById('workout-name');
const addWorkoutButton = document.getElementById('add-workout');
const workoutList = document.getElementById('workout-list');
function goBack() {
    window.history.back();
}

// Add Meal
addMealButton.addEventListener('click', () => {
  const mealName = mealNameInput.value.trim();
  const mealCalories = mealCaloriesInput.value.trim();

  if (mealName && mealCalories) {
    const li = document.createElement('li');
    li.textContent = `${mealName} - ${mealCalories} Calories`;
    mealList.appendChild(li);

    // Clear inputs
    mealNameInput.value = '';
    mealCaloriesInput.value = '';
  } else {
    alert('Please enter both meal name and calories.');
  }
});

// Add Workout
addWorkoutButton.addEventListener('click', () => {
  const workoutName = workoutNameInput.value.trim();

  if (workoutName) {
    const li = document.createElement('li');
    li.textContent = workoutName;
    workoutList.appendChild(li);

    // Clear input
    workoutNameInput.value = '';
  } else {
    alert('Please enter a workout name.');
  }
});
