# active-campaign

# Rather than hosting the code on a remote host, I enabled it to fetch the API locally. 
# This will give the developer the ability to take a closer look at the code.
# I am assuming that this project is to measure the developr's ability to do front end because I don't think this design is practical in a real life scenario.
# A better approach for a real life project would be to use a design framework such as bootstrap and replace the divs with a table.
# An absolute position has its limitations and is not responsive. 
# Some of the issues I faced was the fact that the cells have a fixed width. The issue will appear on the last column of the displayed data. The email is too long it is overlapping the organization name.
# Another issue was the checkbox icon. The "top" location did not position correctly as specified in the requirements. I had to tweak it a little.
# Also the requirements stated that the height of the page should 422px based on the 6 rows that are displayed, however the API returned 8 rows. Since the height is fixed, the rows displayed outside the page. I had to re-adjust the page height to 532px.
# Please follow the steps below to run and view the project. You don't need to run the build command since you are viewing the project locally.

# Thank you
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
