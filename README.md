# docsify-generate-sidebar
[![Test](https://github.com/MithunKarthick/docsify-generate-sidebar/actions/workflows/test.yml/badge.svg)](https://github.com/MithunKarthick/docsify-generate-sidebar/actions/workflows/test.yml)
<!-- [![Publish](https://github.com/MithunKarthick/docsify-generate-sidebar/actions/workflows/publish.yml/badge.svg)](https://github.com/MithunKarthick/docsify-generate-sidebar/actions/workflows/publish.yml) -->

A [docsify](https://docsify.js.org/#/) plugin that generates [sidebar](https://docsify.js.org/#/more-pages?id=sidebar) based on directory structure.


> [!CAUTION]
> This package is still in development and has many bugs. A stable version is expected very soon.


## Install

```
npm install --save-dev docsify-generate-sidebar
```

## Usage

Add script into package.json:

```
{
  "scripts": {
    "generate-sidebar": "docsify-generate-sidebar"
  }
}
```

Run script:

```
npm run generate-sidebar
```


## This

```
pages 
│
└───01-Parent_With_Readme
│   │   README.md
│   │
│   └───Child
│       │   README.md
│       │   01-ChildContent.md
│       |   02-ChildContent.md
│   
└───02-Parent_Without_Readme
│   |
│   └───Child
│       │   README.md
│       │   A-ChildContent.md
│       │   B-ChildContent.md
│       └───SubChild
│           │   README.md
│           └───SubChildContent1.md
```
## Will translate to this

- [Parent_With_Readme](pages/01-Parent_With_Readme/README.md)
  - [Child](pages/01-Parent_With_Readme/Child/README.md)
    - [ChildContent](pages/01-Parent_With_Readme/Child/01-ChildContent.md)
    - [ChildContent](pages/01-Parent_With_Readme/Child/02-ChildContent.md)
- Parent_Without_Readme
  - [Child](pages/02-Parent_Without_Readme/Child/README.md)
    - [ChildContent](pages/02-Parent_Without_Readme/Child/A-ChildContent.md)
    - [ChildContent](pages/02-Parent_Without_Readme/Child/B-ChildContent.md)
    - [SubChild](pages/02-Parent_Without_Readme/Child/SubChild/README.md)
      - [SubChildContent1](pages/02-Parent_Without_Readme/Child/SubChild/SubChildContent1.md)

