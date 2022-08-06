<br />

![next your home banner](/public/banner.png)

<br />

0. [한글이 좋아요](./README.ko.md)

1. [What is it?](#what-is-it)
    - [🏠 Blog](#-blog)
    - [🛠 Tech stack](#-tech-stack)
2. [Why should I use it?](#why-should-i-use-it)

    - [😀 Easy to start](#-easy-to-start)
    - [🔥 Performance](#-performance)
    - [😲 Intuitive post grouping](#-intuitive-post-grouping)
    - [📔 Reading focused UI/UX](#-reading-focused-uiux)
    - [🎨 Show your personality with colors](#-show-your-personality-with-colors)
    - [🍻 Features](#-features)

3. [How can I start?](#how-can-i-start)
4. [How can I customize?](#how-can-i-customize)
5. [Questions you might have](#questions-you-might-have)
6. [LICENSE](#license)

<br />

# What is it?

## 🏠 Blog

1.  Focus on **Content**
2.  Focus on **UI/UX**
3.  Focus on **Performance**
4.  Focus on **Intuitive Layout**
5.  Focus on **Maintanance**
6.  Focus on **Customizability**

> Visit [Next Your Home Guide](https://next-your-home-guide.vercel.app) built with this template

## 🛠 Tech stack

1.  **Language** 📜
    -   `typescript`
2.  **Framework** ⚙️
    -   `NextJs`
3.  **Styling** 💅
    -   `styled-components`
4.  **Markup** 📝
    -   `mdx`
        -   📌 More than `markdown`, it's rich
        -   📌 Use `javascript expressions`
        -   📌 Use `JSX`
        -   🔎 Explore more features on [official MDX site](https://mdxjs.com/table-of-components/)
    -   `mdx-bundler`
        -   📦 Import pure `react component` in `.mdx` post files
        -   🔎 Visit [mdx-bundler](https://github.com/kentcdodds/mdx-bundler) for more config options

<br />

# Why should I use it?

## 😀 Easy to start

-   📌 You know `react`
-   📌 Zero env configuration
-   📌 Easy deploying via `vercel` [(Power of vercel + NextJs 🔎)](https://vercel.com/solutions/nextjs)
-   📦 Easy posting with built in [CLI🎉](https://github.com/danpa725/blog-post-generator) tool

## 🔥 Performance

-   📌 Light house score `100`
-   📌 SEO support with `next-seo` [(More info about this package 🔎)](https://github.com/garmeeh/next-seo)
-   📌 Bundle size optimized
    -   `Preact` on production build (`3kb`) [(What is Preact? 🔎)](https://preactjs.com)
    -   etc...

## 😲 Intuitive post grouping

-   📌 Category based grouping
    -   And you can describe the category
-   📌 Category pagination
    -   Configurable with `blog.config.ts`
-   📌 Post series
    -   Group your post by subtitle

## 📔 Reading focused UI/UX

-   📌 Intuitive UI Elements
-   📌 Easy navigation with `post controller`
-   📌 Less vertical scrolling for searching post
-   📌 Device width based, sized text content

## 🎨 Show your personality with colors

-   📌 You can set color for each category and post
-   📌 Your personal color will be adapted
-   📌 Different, but consistent design

## 🍻 Features

-   📌 `Light`/`Dark` mode full support
-   📌 Intergrate Profile with full feature of `mdx`
-   📌 Table of content on `desktop`/`mobile` (optional on mobile)
-   📌 Image optimization with `next/image` [(More info about next/image 🔎)](https://nextjs.org/docs/api-reference/next/image)
-   📌 Automatic image size support for `static`/`external`
-   📌 Automatic pagination
-   📌 Recover scroll position when navigating to previous page
-   📌 Analyze visitors with `Google Analytics`! Run it on the `partytown🎉` thread and get the performance [(partytown? 🔎)](https://partytown.builder.io)
-   📌 Support `sitemap`, `rss` generation on build
-   📌 Math `katex` support (optional)
-   📌 Automatic post refreshing in `dev` mode
-   📌 Specific `error` informations about blog posts
-   📌 Decent `code` block with code copy `button`
-   etc...

<br />

# How can I start?

1.  **Click** `Use this template` button in this page and make own `repo` with **`1commit`**
    -   Get this `repo` to your `local` development env
2.  **Install packages**

    ```bash
    pnpm i
    ```

    -   this project use `pnpm` for package managing
    -   if `pnpm` is not installed, visit [pnpm install guide](https://pnpm.io/installation)

        ```bash
        npm install -g pnpm
        ```

3.  **Update 📜 `blog.config.ts`, 📜 `public/robots.txt`**

    1.  `blog.config.ts`:
        -   `authorInfo`
            -   name
            -   currentState
            -   currentGoal
            -   contacts
        -   `blogInfo`
            -   url: deploy url
            -   siteName
            -   subtitle
            -   language
    2.  at `public/robots.txt`:
        -   update `Sitemap` to your deploy url

4.  **Dev test**
    ```bash
    pnpm dev
    ```
    port `3000` will be used by default
5.  **First post**
    ```bash
    pnpm post
    ```
6.  **Build test**
    ```bash
    pnpm build
    ```
    build result in `.next` folder
7.  **Deploy** with `vercel`

    1.  make [account](https://vercel.com/login)
    2.  choose blog repo
    3.  follow vercel deploy step or click `deploy` button below

        [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/danpa725/next-your-home)

<br />

# How can I customize?

-   Check config options in `blog.config.ts`
-   Easy to customize
    1. 🙌 You know `react`
    2. 🙌 You know `styled-components`
    3. 🙌 Just modify the style that you want to
-   Whole project includes `README.md` about **structures** and **description**

<br />

# Questions you might have!

<details>
  <summary>
    <strong>
      🤔 Why not use <code>gatsby</code>?
    </strong>
  </summary>

1.  Stricter than <code>NextJs</code>
2.  Use <code>graphql</code> for content api

    -   just use <code>typescript</code>
    -   for the people don't know about <code>graphql</code>

3.  Rely on <code>gatsby</code> community to implement some feature
<br />
</details>

<details>
  <summary>
    <strong>
     🤔 How much fast you mean?
    </strong>
  </summary>

1.  Run [pagespeed test](https://pagespeed.web.dev)

    -   `desktop` result: `100` / `100` / `100` / `100`
    -   `mobile` result: `100` / `97` / `100` / `100`

2.  Run [Webpage Test](https://www.webpagetest.org/): **pretty good**

3.  Check build `bundle size` result below
    ```bash
    Page                                         Size     First Load JS
    ┌ ● /                                        1.46 kB        91.1 kB
    ├   /_app                                    0 B            70.3 kB
    ├ ● /[category]                              748 B          90.4 kB
    ├ ● /[category]/[pageNumber]                 832 B          90.5 kB
    ├ ● /[category]/[pageNumber]/[postTitle]     1.64 kB        96.8 kB
    ├ ○ /404                                     269 B          70.6 kB
    ├ ○ /500                                     269 B          70.6 kB
    ├ ● /category                                3.21 kB        78.1 kB
    └ ● /profile                                 2.68  kB       89   kB
    + First Load JS shared by all                70.3 kB
    ├ chunks/main-be00b42900d433cc.js            36.8 kB
    ├ chunks/pages/_app-764e610a6d9ea0f7.js      32.7 kB
    ├ chunks/webpack-3373b0f21806983f.js         827 B
    └ css/a36597fbcc4c45ff.css                   813 B
    ```

</details>

<br />

# LICENSE

```ts
const LICENSE = "MIT 🎉"
const KOR = "감사합니다 😎"
const ENG = "Thanks 😎"
```

<div align="center">

<img src="/public/favicon.png" width="75" height="75">

[MIT](https://github.com/danpa725/next-your-home/blob/main/LICENSE)

</div>
