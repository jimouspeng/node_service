// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportPoster from '../../../app/controller/poster';
import ExportUpload from '../../../app/controller/upload';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    login: ExportLogin;
    poster: ExportPoster;
    upload: ExportUpload;
  }
}
