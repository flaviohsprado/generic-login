import { CustomDecorator } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class PublicGuard {
    private reflector;
    public: CustomDecorator<string>;
    constructor(reflector: Reflector);
}
