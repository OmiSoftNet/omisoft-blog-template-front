export enum STATUS_ENUM {
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
}

export interface IStatus {
  success: boolean;
  pending: boolean;
  error: string | null;
}

export interface IStoreStatuses {
  [key: string]: IStatus;
}
