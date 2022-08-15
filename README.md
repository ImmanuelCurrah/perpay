# PerPay Dashboard

A simulated dashboard for internal data and statistics.

```
clone github
npm i
npm start
```

## Process

![component-tree](/readmeAssets/component-tree.png)

- First created a overview of how to approach the build.

- Created an app and built out the file structure.

- Generated data and stored in the public folder to be used with axios.

- Created a custom hook to be able to use the data globaly and export funtions.

- Created the compnents and have them display the relevant information for each one.

- Styling at the end.

### Technologies Used

- create-react-app
- axios
- Tailwind CSS
- React Icons
- Custom Hooks

### Challenges

- Redux, I have ever used it before and tried to learn it for the assessment. It ended up not working how I wanted for a couple niche cases and felt messy. So I refactored to using custom hooks.

- useEffect, the more I use the hook the more I feel like I don't understand how it works. I really struggled with having my data showing up as undefined when passing it around. Especially with redux.

- Styling, I struggle with the creative part of styling apps sometimes, but I always find it just helps to start one component at a time and it comes together slowly.

- Search Bar, I really struggled with the functionality working right for me. It just took a lot of trial and error before I got it working the way I wanted. I have built search bars before, but because of the way I was passing around the data, it presented some issues with changing the actual data.

### What went well

- Organization of components

- Components are readable and clean, not too many with tons of lines of code.

- Breaking out the functionality and exports in a way so my import statemtents didn't get super messy.

### Todos or what I would do differently

- Implement Redux and get it to work correctly.

- The CompanyStatistics component needs cleaning up.

- Find a way to add percentages, or just make the pie graphs a little more understandable. Also make them a little more beatiful, I like the idea of a donut graph.

- Find a better ascetic for the search bar, as well as adding an overall search bar to search by company and by user. The user search bar would have access to all the users and display which company they were a part of.

- Add more data and limit test what the current application can handle and change accordingly.

- Add employess to the companies that would not be perpay users. That way I could display out of how many employees in a company actually use perpay. This could help judge how valuable a company's subcription is. Currently all the users displayed in the company are perpay users. I would do this by just adding another column to the users that would be a boolean. {"perpayUser" : true/false}.
