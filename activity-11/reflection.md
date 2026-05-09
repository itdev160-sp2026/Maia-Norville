# Reflection – Activity 11: React Tic‑Tac‑Toe

## Step 5: Compare with Activity 10

### Code Organization
React’s component structure is far more organized than the vanilla JavaScript approach. In Activity 10, all logic was contained in one script, which made it harder to follow and maintain. React divides the game into smaller components such as `Square`, `Board`, and `Game`, each with a clear purpose. This modular design makes the code easier to understand, debug, and update.

### State Management
React’s `useState` hook simplifies state handling compared to manual tracking in Activity 10. Previously, I had to manually update arrays and redraw the board after every move. In React, the UI updates automatically when the state changes. This reduces repetitive code and prevents errors that can occur when managing state manually.

### DOM Updates
In vanilla JavaScript, I had to directly manipulate the DOM using methods like `querySelector` and `innerHTML`. React’s Virtual DOM handles updates efficiently by re‑rendering only the parts that change. This results in smoother performance and fewer bugs. The Virtual DOM also makes React applications more scalable and maintainable.

### Reusability
React components are highly reusable. The `Square` component, for example, could easily be used in other projects without modification. In contrast, the vanilla JS version was tightly coupled to specific HTML elements, making reuse difficult. React’s modularity encourages cleaner, more flexible code.

### Adding Features
Implementing “time travel” (move history) in vanilla JS would be complex because it requires manually storing and restoring game states. React makes this feature straightforward through its state management system. By keeping a history of states and rendering based on the current move, React allows this functionality with minimal additional logic.


## Step 6: Document Your Learning

### Key Learnings
- How React organizes code into components and passes data through props.
- How `useState` automatically updates the UI when data changes.
- The efficiency and reliability of React’s Virtual DOM.
- The benefits of declarative programming compared to manual DOM manipulation.

### Comparison
The React version is cleaner, more modular, and easier to maintain than the vanilla JS version. React automates many tasks that previously required manual coding, making development faster and less error‑prone.

### Challenges
Understanding how state and props interact between components was initially challenging. It took time to grasp how data flows upward and downward in React’s component hierarchy.

### Next Steps
I would like to learn more about:
- Using `useEffect` for side effects and lifecycle management.
- Passing data between multiple components efficiently.
- Building larger React applications with routing and API integration.
