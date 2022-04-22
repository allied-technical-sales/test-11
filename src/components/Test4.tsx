// Create a custom hook to fetch user todos data and then display it on screen

// The custom hook should do the following:
// 1. Fetch random numbers from randomNumbersEndpoint
const randomNumbersEndpoint =
  "https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=4";
// 2. Use each of the random numbers in the response as userIds to fetch user todos data from getUserByIdEndpoint()
const getUserByIdEndpoint = (userId: number) =>
  `https://jsonplaceholder.typicode.com/users/${userId}/todos`;
// 3. Fetch user data from userDataEndpoint
const userDataEndpoint = "https://jsonplaceholder.typicode.com/users";
// 4. Return the all the data together from the hook

// Once the data is returned, display the user name, email link, and completed/uncompleted todos for each user
// An example end result is rendered in image tag below (you may remove this)
// Feel free to add/use any library you feel comfortable with.

const Test4 = () => {
  return (
    <img src="images/todos.png" alt="todos" style={{ maxWidth: "100%" }} />
  );
};

Test4.displayName = "Test4";
export default Test4;
