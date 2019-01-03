'use strict';

/**
 * Newsfeed.js controller
 *
 * @description: A set of functions called "actions" for managing `Newsfeed`.
 */

module.exports = {

  /**
   * Retrieve newsfeed records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.newsfeed.search(ctx.query);
    } else {
      return strapi.services.newsfeed.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a newsfeed record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.newsfeed.fetch(ctx.params);
  },

  /**
   * Count newsfeed records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.newsfeed.count(ctx.query);
  },

  /**
   * Create a/an newsfeed record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.newsfeed.add(ctx.request.body);
  },

  /**
   * Update a/an newsfeed record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.newsfeed.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an newsfeed record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.newsfeed.remove(ctx.params);
  }
};
