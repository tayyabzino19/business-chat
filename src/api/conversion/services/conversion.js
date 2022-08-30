'use strict';

/**
 * conversion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::conversion.conversion');
