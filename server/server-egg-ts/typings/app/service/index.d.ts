// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportPoster from '../../../app/service/Poster';
import ExportTest from '../../../app/service/Test';
import ExportUpload from '../../../app/service/Upload';

declare module 'egg' {
  interface IService {
    poster: AutoInstanceType<typeof ExportPoster>;
    test: AutoInstanceType<typeof ExportTest>;
    upload: AutoInstanceType<typeof ExportUpload>;
  }
}
