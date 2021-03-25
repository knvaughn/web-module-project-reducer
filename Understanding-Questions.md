# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* OnClick event listener fires
* Callback function is invoked and calls numberHandler, passing in the number 1
* Dispatch is invoked
* addOne is invoked passing in the number 1, which returns an object with the type:ADD_ONE
* That object is passed through to the reducer as the action
* Switch statement evaluates the action type
* Updates state by returning a new state value with the total + 1
* TotalDisplay shows the total plus 1.
