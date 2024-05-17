import { builder } from './builder';

import './models/User';
import './resolvers/User';

export const schema = builder.toSchema();
