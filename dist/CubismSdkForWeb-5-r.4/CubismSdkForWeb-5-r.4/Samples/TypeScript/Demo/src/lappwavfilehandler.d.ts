export declare let s_instance: LAppWavFileHandler;
export declare class LAppWavFileHandler {
    static getInstance(): LAppWavFileHandler;
    static releaseInstance(): void;
    update(deltaTimeSeconds: number): boolean;
    start(filePath: string): void;
    getRms(): number;
    loadWavFile(filePath: string): Promise<boolean>;
    getPcmSample(): number;
    getPcmDataChannel(usechannel: number): Float32Array;
    getWavSamplingRate(): number;
    releasePcmData(): void;
    constructor();
    _pcmData: Array<Float32Array>;
    _userTimeSeconds: number;
    _lastRms: number;
    _sampleOffset: number;
    _wavFileInfo: WavFileInfo;
    _byteReader: ByteReader;
    loadFiletoBytes: (arrayBuffer: ArrayBuffer, length: number) => void;
}
export declare class WavFileInfo {
    constructor();
    _fileName: string;
    _numberOfChannels: number;
    _bitsPerSample: number;
    _samplingRate: number;
    _samplesPerChannel: number;
}
export declare class ByteReader {
    constructor();
    get8(): number;
    get16LittleEndian(): number;
    get24LittleEndian(): number;
    get32LittleEndian(): number;
    getCheckSignature(reference: string): boolean;
    _fileByte: ArrayBuffer;
    _fileDataView: DataView;
    _fileSize: number;
    _readOffset: number;
}
