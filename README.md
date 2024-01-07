# docsify-generate-sidebar
[![Test](https://github.com/MithunKarthick/docsify-generate-sidebar/actions/workflows/test.yml/badge.svg)](https://github.com/MithunKarthick/docsify-generate-sidebar/actions/workflows/test.yml)
<!-- [![Publish](https://github.com/MithunKarthick/docsify-generate-sidebar/actions/workflows/publish.yml/badge.svg)](https://github.com/MithunKarthick/docsify-generate-sidebar/actions/workflows/publish.yml) -->

A [docsify](https://docsify.js.org/#/) plugin that generates [sidebar](https://docsify.js.org/#/more-pages?id=sidebar) based on directory structure.

## Install

```
npm install --save-dev docsify-generate-sidebar
```

## Usage

Add script into package.json:

```
{
  "scripts": {
    "generate": "docsify-generate-sidebar <content-path> <sidebar-path>"
  }
}
```

Run script:

```
npm run generate
```

By default the root path is considered. You can change this by providing the `content-path` argument.
Likewise sidebat path is by default will be same as the `content-path`. Change this by passing `sidebar-path`



For Example, the below structure

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

will be generate as below:

```
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
```

>[!NOTE]
> The symbol `-` is considered as seperator. You can order the files with numbers separated by filenames. Only the names after seperator will be considered.

## Todo

- Add config to get files/filepaths that need to ignored

