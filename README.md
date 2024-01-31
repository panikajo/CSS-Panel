<h3 align="center">
CSSharp Panel - Admin Web Panel for CounterStrikeSharp
</h3>

CSSharp Panel is a web panel for CounterStrikeSharp that includes many features such as servers management, admins management, ban & comms management, rcon functions and much more, with a modern UI and a lot of customization options.

[Join our Discord](https://discord.gg/r96PSHfNcW) - [View the docs](https://docs.csspanel.dev/) - [Demo website](https://css.next-il.co.il/)

## Features

-   🚀 **Fast**: Built with Next.js on top of React, with a fully typed Front-end & back-end.
-   🛡 **Bulletproof**: Written in strict TypeScript and has 100% test coverage.
-   😍 **Simple**: Straightforward and easy to use, connects to your cssharp db and servers with no effort or knowledge.
-   📖 **Documentation**: Includes detailed documentation for all the features and function.
-   📦 **Highly Customizable**: Includes many options for customization to achive the most out of the panel and make it unique to your community, includes support for custom themes and colors with a single click in the admin panel, and even code editors for some of the website parts for 100% customization!

## Install

Clone the repository

```bash
git clone https://github.com/ShiNxz/CSS-Panel.git
```

Edit the `.env.example` file and add your database credentials and Steam API key, then rename it to `.env`

Install dependencies

```bash
pnpm install
```

Build

```bash
pnpm build
```

Start

```bash
pnpm start
```

head to `http://localhost:3000` and login with your steam account,
then head to `http://localhost:3000/admin` and change the panel settings.

Detailed installation instructions can be found in the [docs](https://docs.csspanel.dev/docs/guides/install).

## Features Roadmap & Progress

-   [x] Servers - take the servers data from the database and display it in the panel.
    -   [x] Servers status as table / cards
    -   [ ] Show each server players in the panel, with the ability to kick, ban, mute, gag, etc as a context menu.
-   [x] Bans - take the bans data from the database and display it in the panel.
    -   [x] Bans status as table
-   [x] Comms - take the comms data from the database and display it in the panel.=
    -   [x] Comms status as table
-   [x] Admin Panel - manage the whole panel settings, admins, servers, comms and bans.
    -   [ ] Statistics - show statistics about the panel, such as the amount of admins, servers, comms, bans, etc.
    -   [x] Logs
    -   [x] Manage Admins
        -   [x] Add, edit, delete admins with the ability to change their permissions.
    -   [ ] Roles / Groups system - make it possible to create roles / groups with pre assigned permissions and assign admins to them.
    -   [x] Manage Servers - Add, edit, delete servers from the db.
    -   [ ] Manage Comms
        -   [ ] Show comms information in the panel.
        -   [ ] Edit, delete comms from the db.
        -   [ ] Add comms from the panel with rcon(?)
        -   [ ] Add comms from the servers modal
    -   [ ] Manage Bans
        -   [ ] Show bans information in the panel.
        -   [ ] Edit, delete bans from the db.
        -   [ ] Add bans from the panel with rcon(?)
        -   [ ] Add bans from the servers modal
    -   [ ] Manage Settings
        -   [x] General settings - change the panel name, logo, etc.
        -   [x] SEO settings - change the panel SEO settings such as title, description, etc.
        -   [x] Design settings - change the panel design, colors, etc.
        -   [ ] Discord settings - add discord webhook for bans, comms, etc. from the panel.
        -   [x] Advanced settings - debug mode, early access, etc.

## Links

-   [Join the Discord](https://discord.gg/eAZU3guKWU): Ask questions, provide suggestions
-   [Example Panel](https://css.next-il.co.il/): view a demo panel
-   [Docs](https://docs.csspanel.dev/): Installation instructions
-   [Issues](https://github.com/ShiNxz/CSS-Panel/issues): Raise any issues here
