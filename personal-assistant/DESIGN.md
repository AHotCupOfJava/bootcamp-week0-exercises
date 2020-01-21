## Components
- TodoPage overarching component to contain the whole Todo page
- addTask component to add a todo to the list (text box, color selector, add button)
- searchTasks component (search bar)
- todos component to keep the list of todos (includes title)
- single todo component that includes a todo string, a delete button, plus color icon
- button to clear all todos
- all buttons have own subcomponent

## Heirarchy
NavBar
TodoPage
    AddTask
    SearchTasks
    TodosList
        TodoItem
            ColorDot
            DeleteButton
        ClearButton

## Additional Functionality:
- have todos be editable (when you click on them)
- color-coding or categories

## Data Management
- list of todos should be stored at TodoPage level

## HTML tag types
NavBar --> div w/ <a> links
TodoPage --> div
AddTask --> div
    input type text
    select
    button
SearchTasks --> div or fragment
    input type text
TodosList --> div
    ul and ClearButton
    // or
    text
TodoItem --> li
    id, text, ColorDot and DeleteButton
ColorDot --> span
DeleteButton --> button
ClearButton --> button