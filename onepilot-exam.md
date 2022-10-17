# One Pilot Exam

## Question 1:
- Suggest at least 3 packages (npm or composer) that could be added to the project and justify why they would be useful.

Answer: 
1. [Socialite](https://github.com/laravel/socialite). 

Socialite allows developers to quickly add social logins to laravel projects. By doing so, end-users can more easily and
conveniently login to their Ping CRM accounts. This helps to increase usability and experience.

2. [GraphQL](https://github.com/rebing/graphql-laravel).

GraphQL enables developers to pull data from multiple sources in a single API call. This application can also be 
embedded into the UI so that Admins and Developers can quickly pull all sorts of data on a single interface. This aids
in debugging and troubleshooting, an amazing tool to have as the application grows. Also, it provides a temporary
solution for end-users to interact with before a full product is being launched. 

3. [Icons](https://github.com/blade-ui-kit/blade-icons).

Icons. Helps to enrich user experience and more succinctly explain to the user the function of certain buttons without
the use of too many words. This package provides developers with a whole array of icons to use with very little code.

4. [reCaptcha](https://github.com/anhskohbo/no-captcha).

Improves the security of the webpage and prevents the page from being spammed.

## Question 2:
- How would you improve this project from a code perspective?

Answer:
Not too sure if it is considered a "code perspective", but just improving the documentation in general for this project.
I found it difficult to trace the code and understanding what is needed at which juncture and how the variables are 
being passed around. Advice from stackoverflow and laracasts weren't very helpful either as their projects had different
configurations.

Specify parameter types where possible too.

## Question 3:
- How would you improve this project from a product (features) perspective?

Answer:
User privileges: Add privileges according to user roles, e.g. Admin, Staff, Temporary staff. Doing so, users can only 
carry out certain actions based on the privileges they have. Admins would also ideally be able to configure the levels
of access of other user roles.



