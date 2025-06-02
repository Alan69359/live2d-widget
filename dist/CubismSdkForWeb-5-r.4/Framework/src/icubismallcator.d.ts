export declare abstract class ICubismAllocator {
    abstract allocate(size: number): any;
    abstract deallocate(memory: any): void;
    abstract allocateAligned(size: number, alignment: number): any;
    abstract deallocateAligned(alignedMemory: any): void;
}
import * as $ from './icubismallcator';
export declare namespace Live2DCubismFramework {
    const ICubismAllocator: typeof $.ICubismAllocator;
    type ICubismAllocator = $.ICubismAllocator;
}
