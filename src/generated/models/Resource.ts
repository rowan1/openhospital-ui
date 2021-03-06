// tslint:disable
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// import {
//     URL,
// } from './';

/**
 * @export
 * @interface Resource
 */
export interface Resource {
  /**
   * @type {string}
   * @memberof Resource
   */
  description?: string;
  /**
   * @type {Blob}
   * @memberof Resource
   */
  file?: Blob;
  /**
   * @type {string}
   * @memberof Resource
   */
  filename?: string;
  /**
   * @type {object}
   * @memberof Resource
   */
  inputStream?: object;
  /**
   * @type {boolean}
   * @memberof Resource
   */
  open?: boolean;
  /**
   * @type {boolean}
   * @memberof Resource
   */
  readable?: boolean;
  /**
   * @type {string}
   * @memberof Resource
   */
  uri?: string;
  /**
   * @type {URL}
   * @memberof Resource
   */
  url?: URL;
}
