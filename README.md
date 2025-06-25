# `gate.directory`

Gate Directory is a website dedicated to cataloging quantum gates used across the field of quantum information and computation.

## Local Development

The website is built with static site generator [11ty](https://www.11ty.dev/), and to build it locally, you'll need [Node.js](https://nodejs.org/en/download).

1. Clone the repository:
    ```sh
    git clone git@github.com:natestemen/gate.directory.git
    cd gate.directory
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run serve
    ```
4. The `npm run serve` command will indicate which port the pages are being served from on your machine.

When deploying to GitHub Pages the build uses a path prefix of `/gate.directory/` so asset URLs resolve correctly. Locally you can override this with the `PATH_PREFIX` environment variable:

```sh
PATH_PREFIX=/ npm run build
```
