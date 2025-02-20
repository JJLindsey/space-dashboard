## Project Overview
### React.js data visualization dashboard rendering Near Earth Objects (NEO) charts using NASA Open API.

## **Table of Contents**
* [Architecture](#architecture-overview)
* [Design Patterns](#design-patterns)
* [Data Flow and Management](#data-flow-and-management )
* [Live link](#live-link)
* [Challenges](#challenges)

### architecture overview
#### Tech Stack:

* React.js - I chose React for its component-based architecture, allowing me to create a modular and maintainable codebase.
* Data Visualization: D3.js - selected for its flexibility and ability to create custom, interactive charts. 
* Charting: Chart.js
* Data Fetching: Fetch API - the NasaProvider utilizes Fetch API to retrieve the NEO data from NASA API. Loading and error states are managed using React's useState hook, providing feedback to the user during the data fetching process. Error handling is implemented to gracefully manage API request failures.
* State Management: Context API - is used to manage the global state of the application, specifically the NEO data and filtering criteria. This approach allowed me to avoid prop drilling and makes the data readily available to any component. This app did not require the complexity of Redux to manage state.
* UI Library: MUI for its pre-built components and theming capabilities, ensuring a consistent and accessible user interface.
* Data: NASA Open API

#### design patterns

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

#### live link

#### Screen Shots

<img src='public/Screenshot 2025-02-13 at 5.34.14 PM.png' width=400 >

#### Challenges

