## About

Reference application demonstrating a Upload Token server for use with the Spheron Browser Upload SDK built with NestJS.

If you don't already have one, (Create a Spheron account )[https://app.spheron.network/#/signup]

Check out the [Spheron Browser Upload SDK docs](https://docs.spheron.network/sdk/browser/) for more info!

After creating an account, you need to create a [Spheron Access Token](https://docs.spheron.network/rest-api/#creating-an-access-token)

## Local Build(MacOS)

Install dependencies:

```
npm install
```

Create your own env file:

```
cp .env.example .env
```

Then add your Access token to your `.env` file:
```
SPHERON_ACCESS_TOKEN=
```

Spin up local environment (hot reloading included):

```
# for nest app
npm run start:dev

```

Build Docker Container for running locally on MacOS:
```
docker build --platform linux/arm64 -t nestjs-spheron-uploadtoken-server .
```

## Spheron Build

Build Docker Container for running on a [Spheron Compute Cluster](https://docs.spheron.network/compute/)
```
docker build --platform linux/amd64 -t nestjs-spheron-uploadtoken-server .
```

Push to DockerHub
```
docker tag nestjs-spheron-uploadtoken-serverlatest chrisaspheron/nestjs-spheron-uploadtoken-server:latest
docker push chrisaspheron/nestjs-spheron-uploadtoken-server:latest
```

## Support

Contact chris@spheron.network for questions!