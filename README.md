# **Client Siamik**
Client Siamik adalah repository untuk memanagament kode bagian frontend dalam pembuatan New Siamik UPN "Veteran" Jawwa Timur.

<br>

# **Overview**
- README.md so feel free to read it when you want to run projects one by one
- Project use conventional commits to prevent commit confusion

<br>

# **Conventional commits**
`feat` : new features<br>
`fix` : fix something, e.g bugs<br>
`ref` : refactor code<br>
`docs` : documentation<br>
`chore` : change to the build process, e.g add depedencies<br>
`style` : not affect to the code, e.g formatting, missing semi-colons, white space, etc<br>
`test` : add test or correcting existing tests<br>

<br>

Example : 
```bash
git commit -m "feat: add register"
git commit -m "fix: nullable name at register page"
git commit -m "ref: make the code short and simple at register handler"
git commit -m "docs: add the documentation at register page"
git commit -m "style: add some white space at register handler to handle the confusion"
git commit -m "test: add test for register handler"
```

<br>

# ***Getting Started with Create React App***

In the project directory, you can run:
### `yarn install`
For the first time, Ketik perintah tersebut di terminal favorit kalian dan lakukan didalam folder client-siamik.

### `yarn start`
Runs that script in the client-siamik folder.
And then open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### `yarn test`
Launches the test runner in the interactive watch mode.

### `yarn build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.Your app is ready to be deployed!