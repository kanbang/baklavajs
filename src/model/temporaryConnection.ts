import { INodeInterfacePair } from "../model/connection";

export enum TemporaryConnectionState {
    NONE,
    ALLOWED,
    FORBIDDEN
}

export interface ITemporaryConnection {
    status: TemporaryConnectionState;
    from: INodeInterfacePair;
    to?: INodeInterfacePair;
    mx?: number;
    my?: number;
}