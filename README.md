## Project Overview
### React.js data visualization dashboard rendering Near Earth Objects (NEO) charts using NASA Open API.

## **Table of Contents**
* [Tech Stack](#tech-stack)
* [Design Patterns](#design-patterns)
* [Data Flow and Management](#data-flow-and-management )
* [Live link](#live-link)
* [Challenges](#challenges)

### Architecture Overview
#### Tech Stack:

* React.js - I chose React for its component-based architecture, allowing me to create a modular and maintainable codebase.
* Data Visualization: D3.js - selected for its flexibility and ability to create custom, interactive charts. 
* Charting: Chart.js
* Data Fetching: Fetch API - the NasaProvider utilizes Fetch API to retrieve the NEO data from NASA API. Loading and error states are managed using React's useState hook, providing feedback to the user during the data fetching process. Error handling is implemented to gracefully manage API request failures.
* State Management: Context API - is used to manage the global state of the application, specifically the NEO data and filtering criteria. This approach allowed me to avoid prop drilling and makes the data readily available to any component. This app did not require the complexity of Redux to manage state.
* UI Library: MUI for its pre-built components and theming capabilities, ensuring a consistent and accessible user interface.
* Data: NASA Open API

#### Design Patterns

* Container-Presenter Pattern: implemented to separate concerns, making UI components reusable and testable.
* Hooks: created custom hook for transforming API data, the useNeoStats hook encapsulates the logic for transforming raw API data into a format suitable for visualizations.
* Accessibility Considerations: Accessibility was a key consideration. ARIA roles were used to provide semantic information to screen readers, and color contrast was carefully checked to ensure readability for users with visual impairments. A dark/light mode theme was implemented for user preference. 

#### Data Flow and Management:

* The NasaProvider fetches Near Earth Object (NEO) data from NASA's NEO API and manages both raw and unfiltered data.
* Data is filtered based on hazardous status when requested by user.
* Components access filtered data through custom useNasaStats hook
* Dashboard receives filtered data & distribute it to visualization components.
#### graph LR
    subgraph 'NasaProvider' 
        A[fetchNeoData] --> B[NASA API]
        B --> C[neoData state]
        C  -- filterByHazard --> D[filteredData state]
    end
    D --> E[useNeoStats hook]
    E --> F[DashboardView]
    F --> G[Dashboard component]
    G --> H[Visualizations]

#### Live link
https://jjlindsey.github.io/space-dashboard/

#### Screen Shots

<img src='public/Screenshot 2025-02-13 at 5.34.14 PM.png' width=400 >

#### Challenges
One of the biggest challenges in developing this data visualization dashboard was implementing the orbit visualization for near-Earth objects (NEOs). The difficulty stemmed from the mathematical calculations needed to simulate rotating orbits, scaling distances, and positioning objects dynamically.

Challenge:

Converting orbital data (distance, velocity, diameter) into a 2D representation while maintaining an intuitive and accurate scale.

Implementing continuous rotation while ensuring smooth animations.

Dynamically updating asteroid positions based on user-selected scale (distance vs. size).

Solution:

Applied a rotation state and requestAnimationFrame to animate orbits smoothly.

Allowed users to toggle between size-based and distance-based scaling for better visualization.
