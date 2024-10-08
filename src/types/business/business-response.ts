/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IBusinessContacts } from './businesses-contacts.js';
import { type Status } from '../../enums/index.js';
import { type ICustomData, type IImportMetaResponse } from '../shared/index.js';

export interface IBusinessResponse {
  id: string;
  customer_id: string;
  name: string;
  company_number?: string | null;
  tax_identifier?: string | null;
  status: Status;
  contacts?: IBusinessContacts[] | null;
  created_at: string;
  updated_at: string;
  custom_data?: ICustomData | null;
  import_meta?: IImportMetaResponse | null;
}
