# Twake Drive

[![Contributors](https://img.shields.io/github/contributors/linagora/twake-drive?label=Contributors
)](
  https://github.com/linagora/twake-drive/graphs/contributors
)
[![Issues](https://img.shields.io/github/issues/linagora/twake-drive?label=Issues
)](https://github.com/linagora/twake-drive/issues)
[![Documentation](https://img.shields.io/badge/Documentation-green.svg)](docs)
[![Android application](https://img.shields.io/badge/App-Android-blue.svg)](https://play.google.com/store/apps/dev?id=8845244706987756601)
[![Ios application](https://img.shields.io/badge/App-iOS-red.svg)](https://apps.apple.com/gr/developer/linagora/id1110867042)


<p align="center">
  <a href="https://github.com/linagora/twake-drive">
   <img src="https://github.com/linagora/twake-drive/assets/146178981/103860c1-f52f-4236-a8ce-56122baa0dd7" alt="Logo">
  </a>

  <h3 align="center">twake-drive.com</h3>

  <p align="center">
    <a href="https://twake-drive.com">Website</a>
    •
        <a href="https://beta.twake.app/web/#/rooms">View Demo</a>
    •
    <a href="https://github.com/linagora/twake-drive/issues">Report Bug</a>
    •
    <a href="https://github.com/linagora/twake-drive/milestones">Roadmap</a>
  </p>
</p>

---

## About

<img width="100%!" alt="booking-screen" src="https://github.com/linagora/twake-drive/assets/14924963/e19079c6-99c4-41f5-83a2-b4ed4a8816d7">

## Getting Started

To get a local copy up and running, please follow these simple steps.

1. Clone the repo
   ```sh
   git clone https://github.com/linagora/twake-drive
   ```
2. Run it with Docker
   ```sh
   docker-compose up -d
   ```


## Development

### Prerequisites

- Node.js (Version: >=18.x)
- MongoDB
- Yarn _(recommended)_

### Setup

1. Launch MongoDB using
   ```sh
   docker run -p 27017:27017 -d mongo
   ```

2. Launch frontend with

   ```sh
   cd tdrive/frontend/; yarn dev:start
   ```

3. Launch backend with

   ```sh
   cd tdrive/backend/node/; SEARCH_DRIVER=mongodb DB_DRIVER=mongodb PUBSUB_TYPE=local \
   DB_MONGO_URI=mongodb://localhost:27017 STORAGE_LOCAL_PATH=/[full-path-to-store-documents]/documents \
   NODE_ENV=development yarn dev
   ```
   > If you need more parameters, create/edit ```tdrive/backend/node/config/development.json``` file

6. The app will be running on port 3000


## License

Twake Drive is licensed under [Affero GPL v3](https://github.com/linagora/twake-drive/blob/main/LICENSE)
