/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IAuthTokenResponse } from '../../types/index.js';

export class AuthToken {
  public readonly customerAuthToken: string;
  public readonly expiresAt: string;

  constructor(authToken: IAuthTokenResponse) {
    this.customerAuthToken = authToken.customer_auth_token;
    this.expiresAt = authToken.expires_at;
  }
}