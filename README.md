# useDebounce

> React hook debounce

> **Note:** This is using the new [React Hooks API](https://reactjs.org/docs/hooks-intro.html)
>
> You'll need to install `react`, `react-dom`, etc at `^16.8.0` or above

## Install

```sh
yarn add @alobato/use-debounce
```

## Usage

```js
import useKeyPress from '@alobato/use-debounce'
...
  const [ search, setSearch ] = useState('')
  const debouncedSearch = useDebounce(search, 500)
```
