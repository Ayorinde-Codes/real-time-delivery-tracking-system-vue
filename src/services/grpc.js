import { UserServiceClient } from './proto/user_grpc_web_pb';

const client = new UserServiceClient('http://localhost:8080');

export default client;
