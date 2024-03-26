# MistUI 🚀

## WARNING EARLY ALPHA MIGHT NOT WORK

MistUI is a lightweight React component library built using MistCSS, a novel approach to writing visual components solely with CSS. Say goodbye to CSS-in-JS, because with MistCSS, you get JS-from-CSS, making your development process faster and more efficient.

## Introduction

MistUI offers a collection of customizable and reusable React components that are crafted using MistCSS. Whether you're building a simple web application or a complex user interface, our library provides you with the tools you need to create visually stunning interfaces effortlessly.

## Features

- **Pure CSS Components**: With MistCSS, our components are written entirely in CSS, offering simplicity and performance without the need for CSS-in-JS solutions.
- **Easy Integration**: Seamless integration with popular frameworks like Next.js, Remix, and TailwindCSS, allowing you to leverage MistCSS components in your projects effortlessly.
- **Customization**: Each component is designed to be highly customizable, enabling you to tailor the appearance and behavior to suit your specific needs.
- **TypeScript Support**: Enjoy the benefits of static type-checking with TypeScript, ensuring robustness and catching errors at compile-time.

## Installation

To start using MistUI in your project, simply install it via npm or yarn:

```bash
npm install mistui
# or
yarn add mistui
# or
bun add mistui
```

## Usage

Import components from MistUI into your React application and start using them right away:

```jsx
import React from 'react';
import { Button, Card, TextInput } from 'my-component-library';

const App = () => {
  return (
    <div>
      <Card>
        <TextInput placeholder="Enter your name" />
        <Button variant="primary" size="lg">Submit</Button>
      </Card>
    </div>
  );
};

export default App;
```

## Contributing
We welcome contributions from the community! If you have ideas for new components, feature enhancements, or bug fixes, feel free to open an issue or submit a pull request on GitHub.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
