# Serverless REST API
## Structure

This service has a separate directory for all the todo operations. For each operation exactly one file exists e.g. `todos/delete.js`. In each of these files there is exactly one function which is directly attached to `module.exports`.

The idea behind the `todos` directory is that in case you want to create a service containing multiple resources e.g. users, notes, comments you could do so in the same service. While this is certainly possible you might consider creating a separate service for each resource. It depends on the use-case and your preference. In that case you may require to maintain multiple `serverless.yml` file for individual deployments, these cases are highly recomended when your application architecture is following in distributed architecture and services are designed to follow bounded context approach.

## Setup

Install Serverless using the following command

```bash
npm install serverless -g
```

```bash
npm install
```

Alternatively

```bash
npm install uuid
npm install aws-sdk
```
## Setup AWS Credentials

Run the following command to setup the AWS credentials in the AWS

```bash
serverless config credentials --provider aws --key <key> --secret <secret>
```

## Deploy

In order to deploy the endpoint simply run

```bash
serverless deploy
```

## Usage

You can create, retrieve, update, or delete todos with the following commands:

### Create a Todo

```bash
curl -X POST https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos --data '{ "text": "Learn Serverless" }'
```

Example Result:
```bash
{"text":"Avishek Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1587791986969,,"checked":false,"updatedAt":1587791986969}%
```

### List all Todos

```bash
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos
```

Example output:
```bash
[{"text":"Deploy my first service","id":"ac90feaa11e6-9ede-afdfa051af86","checked":true,"updatedAt":1587791986969},{"text":"Learn Serverless","id":"206793aa11e6-9ede-afdfa051af86","createdAt":1587791986969,"checked":false,"updatedAt":1587791986969}]%
```

### Get one Todo

```bash
# Replace the <id> part with a real id from your todos table
curl https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id>
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1587791986969,"checked":false,"updatedAt":1587791986969}%
```

### Update a Todo

```bash
# Replace the <id> part with a real id from your todos table
curl -X PUT https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id> --data '{ "text": "Learn Serverless", "checked": true }'
```

Example Result:
```bash
{"text":"Learn Serverless","id":"ee6490d0-aa11e6-9ede-afdfa051af86","createdAt":1479138570824,"checked":true,"updatedAt":1479138570824}%
```

### Delete a Todo

```bash
# Replace the <id> part with a real id from your todos table
curl -X DELETE https://XXXXXXX.execute-api.us-east-1.amazonaws.com/dev/todos/<id>
```

No output

