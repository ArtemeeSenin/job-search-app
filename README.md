# Find work

Application was deplaoyed to [Heroku](https://job-search-application.herokuapp.com)

## Job search management application

This SPA is made for simplifying vacancies comparison. While searching the ideal job, it is common to write vacancies down on paper.

But after some time this notes are somewhere on separate papers, something is changing like salary or your personal opinion about this company or vacancy. Later you can get offer or refusal.

The application allows you to organize your job search: choose the most interesting jobs, weed out the wrong options.

## Business stories

User of this application can get personal account where he can add his vacancies for future comparing.

The main comparison option is rating. The table with the rating of vacancies allows you to group vacancies by status, highlight interesting and the most profitable in terms of time spent and wages.

Comparison table of vacancies allows in addition to sort, filter jobs according to their status: an offer, the candidate is not interested, declined. There is also a text filter by job title or company.

Vacancies can be added from special form, where user needs to fill in necessary data for each vacancy.

While using this application it is possible to add new vacancies; update vacancies: update status, change salary, or specify vacancy description; or remove remove irrelevant vacancies.

## Technical solution

For this SPA design as a front-end library was used React with Redux for state management.

Vacany and user data is stored in Firebase, also this service provides authentication methods.

On the server side as a proxy web-server is used Nginx, and for serving the React application is used Node.js with express framework.

## Known issues

Flat structure of the database, companies and vacancies are stored in a single document

## Further development

- [ ] Add vacancies from hh.ru link
- [ ] DB structure for companies
- [ ] Eneter app withour login and store data in localstorage until user is signed up
