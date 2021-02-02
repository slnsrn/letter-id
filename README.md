# Letter-id

Letter-id is a group of small functions to create letter based random strings.

## Installation

Use the package manager `yarn` or `npm` to install letter-id.

```bash
yarn add letter-id
```

or

```bash
npm i letter-id
```

## Basic usage

```
import { generateLetterId } from 'letter-id'

const id = generateLetterId()
// yay-lay-lom
```

## Custom usage

### generateCustomLetterId( _block_, _numberOfEl_, _separator_ )

Creates custom strings with your preferences.

```
import { generateCustomLetterId } from 'letter-id'

const id = generateCustomLetterId(2, 5, '*')
// heyla*hooop
```

### Variables

| name       |  type  |  default | description|
|------------|:------:|:---------:|:-----------|
| block      | int    |     3    | number of blocks separated by the custom/default separator |
| numberOfEl | int    |     3    | number of letters in a block                               |
| separator  | string |     -    | block separator |



### generateWordId( _block_, _separator_ , _WordList_ )

Creates a string group from either a default 4 letter English word list, or a provided list, separated by default/custom separator.
```
import { generateWordId } from 'letter-id'

const id = generateWordId(3)
// cool-wool-loop
```

### Variables

| name       |  type       |  default   | description|
|------------|:-----------:|:----------:|:-----------|
| block      | int         |     3      | number of blocks separated by the custom/default separator |
| separator  | string      |     -      | block separator |
| wordList   | string Array| DefaultList| 4 letter english words from [FreeDictionary](https://www.thefreedictionary.com/4-letter-words.htm)                             |

### generateIdStartingWith( _startWith_, _block_ , _separator_, _numberOfEl_ )

Creates a string starting with the provided string.

```
import { generateIdStartingWith } from 'letter-id'

const id = generateCustomLetterId('hello-world')
// hello-world-nah
```

### Variables

| name       |  type       |  default   | description|
|------------|:-----------:|:----------:|:-----------|
| startWith  | string      |            | provided string to start the return value |
| block      | int         |     1      | number of blocks separated by the custom/default separator |
| separator  | string      |     -      | block separator |
| numberOfEl | int         |     3      | number of letters in a block                               |


## Reminder

If you are planning to use `letter-id` as a unique identifier, you need to be sure that generated keys are not repeated. The uniqueness of the keys can not be guaranteed.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
