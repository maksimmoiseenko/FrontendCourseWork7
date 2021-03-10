import {Organization} from './Organization';
import {Coach} from './Coach';
import {SimpleUser} from './SimpleUser';

export class Account {
  login: string;
  password: string;
  organization: Organization;
  coach: Coach;
  user: SimpleUser;
  constructor() {}
}
