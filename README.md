# Task Manager

## Summary

This project is a Task Management application that demonstrates dynamic list rendering, proper key usage, and conditional rendering.

## Reflections

How did you ensure unique keys for your list items?

- I was displaying a list of tasks, so I applied the task ID as a key on the outermost element, which was the TaskItem component.

What considerations did you make when implementing the filtering functionality?

- I considered that both filters must be evaluated at the same time on each task in the list. I utilized and if statment with the && operator.

How did you handle state updates for task status changes?

- I made my tasks into a state. Then used an onChange event and a callback function to pass the new value of the status filter to a function in the parent component.

What challenges did you face when implementing conditional rendering?

- I didn't find conditional rendering challenging. I utilized if statements to change what was displayed, including changing the styling used on different elements.
