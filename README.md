# validate-ddd-br
A nice JS package to validate the existence of a brazilian phone number's area code (called _DDD_). 🇧🇷 :phone:


## :closed_book: Usage
First things first - install the package using `npm` or `yarn`:

```bash
# using npm
npm i validate-ddd-br

# using yarn
yarn add validate-ddd-br
```

After that, import the helper wherever you want to use it:

```js
// es-modules
import { validateDDD } from 'validate-ddd-br';

// commonjs
const validateBrazilianDDD = require('validate-ddd-br');
```

Then, you'll be able to use it:

### 🔬 Validation
```js
// with integer value
const isValid = validateDDD(41); // true
// commonjs = const isValid = validateBrazilianDDD.validateDDD(41);

// with string value
const isValid = validateDDD('40'); // false
// commonjs = const isValid = validateBrazilianDDD.validateDDD('40');

// or with a phone number - it must be provided within a mask to work!
const isValid = validateDDD('(12) 99999-9999'); // true
// commonjs = const isValid = validateBrazilianDDD.validateDDD('(12) 99999-9999');
```

### 📍 Localization
It can also tell from where in Brazil the DDD is:

```js
import { isFrom } from 'validate-ddd-br';

const whereFrom = isFrom('21'); // { region: 'Rio de Janeiro', state: 'RJ' }
// commonjs = const isValid = validateBrazilianDDD.isFrom('21');

const whereFrom = isFrom('(31) 99999-9999'); // { region: 'Belo Horizonte', state: 'MG' }
// commonjs = const isValid = validateBrazilianDDD.isFrom('(31) 99999-9999');
```

**Important: both methods accept phone numbers, but you must provide them within the following mask: _(xx) xxxxx-xxxx_**


## :computer: Developing
First, fork the project. After it, install the dependencies (preferably using [npm](https://npmjs.com/) - since the project is using it) and do the work.

Also, take a look at the [contributing guide](https://github.com/jlozovei/validate-ddd-br/blob/master/.github/CONTRIBUTING.md)!


## :closed_lock_with_key: License
Licensed under the [MIT](https://github.com/jlozovei/validate-ddd-br/blob/master/LICENSE).
