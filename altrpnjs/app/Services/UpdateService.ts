import AdmZip from "adm-zip"
import env from '../../helpers/env';
import Logger from '@ioc:Adonis/Core/Logger';
import axios from 'axios';
import base_path from '../../helpers/path/base_path';
import fs from 'fs'
import { exec } from'child_process'
import {promisify} from 'util'
import public_path from "../../helpers/path/public_path";
import clearRequireCache from "../../helpers/node-js/clearRequireCache";
import View from "@ioc:Adonis/Core/View";
import {CacheManager} from "edge.js/build/src/CacheManager";
import guid from "../../helpers/guid";
import Env from "@ioc:Adonis/Core/Env";

export default class UpdateService {

  private static UPDATE_DOMAIN = 'https://up.altrp.com/downloads/altrp-js/'

  private static ARCHIVE_PATH = base_path('temp.zip')

  /**
   * @return string
   * @throws HttpException
   */
  public async update(version = 'latest') {
    if (env('APP_ENV', 'development') !== 'production') {
      return true;
    }

    Logger.info("Starting Update")
    let file = ''
    try {
      file = (await axios.get(UpdateService.UPDATE_DOMAIN + version, {
        responseType: 'arraybuffer',
      }))?.data || '';
    } catch (e) {
      return false;
    }
    if (!await UpdateService.write_public_permissions()) {
      Logger.error('Failed to update file read mode');
    }

    if (!file) {
      throw new Error('Archive is empty');
    }
    UpdateService.save_archive(file)


    UpdateService.update_files()

    if (!await UpdateService.write_public_permissions('public')) {
      Logger.error('Failed to update file reading mode after unzipping');
    }
    UpdateService.delete_archive()
    // Upgrade the Database
    await UpdateService.upgradePackages()
    await UpdateService.upgradeDatabase()
    /**
     * clear all view cached pages
     */
    View.asyncCompiler.cacheManager = new CacheManager(env('CACHE_VIEWS'))
    clearRequireCache()
    UpdateService.setPackageKey();
    Logger.info("End Update")
    return true;
  }
  static setPackageKey(){

    /**
     * set package key
     */
    let packageKey
    if(fs.existsSync(base_path('.package_key'))){
      packageKey = fs.readFileSync(base_path('.package_key'), {encoding:'utf8'})
      Logger.info("Setting package key by File")
    } else {
      packageKey = guid()
      Logger.info("Setting package key by random guid")
    }
    Env.set('PACKAGE_KEY', packageKey)
  }
  /**
   * @param {string} file_content
   * @return bool
   */
  private static save_archive(file_content: string) {
    fs.writeFileSync(UpdateService.ARCHIVE_PATH, file_content);
  }

  private static update_files() {
    let archive = new AdmZip(UpdateService.ARCHIVE_PATH)
    if(!archive.test()){
      throw 'Archive no pass a test'
    }
    if (fs.existsSync(public_path('modules'))) {
      fs.rmSync(public_path('modules'), {recursive: true});
      fs.rmSync(base_path('database', ), {recursive: true});
    }
    archive.extractAllTo(base_path(), true);
  }

  private static async write_public_permissions(path = '') {
    try {
      await promisify(exec)('chmod -R 0775  ' + base_path(path))
      return true;
    } catch (e) {
      return false;
    }
  }

  private static delete_archive() {
    fs.rmSync(UpdateService.ARCHIVE_PATH);
  }


  /**
   * Upgrade the Database & Apply actions
   *
   */
  private static async upgradeDatabase() {
    await promisify(exec)(`node ${base_path('ace')} migration:run --force`)
    return true;
  }

  /**
   * Upgrade the Database & Apply actions
   *
   */
  private static async upgradePackages() {
    await promisify(exec)(`npm --prefix ${base_path()} ci --production` )
    return true;
  }
}
