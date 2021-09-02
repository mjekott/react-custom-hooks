# @mejkott/use-axios

React Hook to make http request using axios.

## Installation

#### npm

`npm i @mjekott/use-hooks`

## Usage

```js
import React from 'react';
import useAxios from '@mjekott/use-axios';

function App() {
  const option = {
    url: '',
  };
  const { laoding, error, data, refetch } = useAxios(option);
  return (
  );
}
```

### Arguments

| Argument      | Type   | Description                 | Required |
| ------------- | ------ | --------------------------- | -------- |
| option        | object | axios configuration options | yes      |
| axiosinstance | axios  | an aisntance of axios       | no       |
