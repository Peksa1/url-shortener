/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 *
 * Used to keep the Heroku dyno alive.
 *
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name : ['url-shortener-reaktor'],
  /**
   * Your New Relic license key.
   */
  license_key : 'l07f22fff4ae5084e977cebf3f302433782892bfd',
  logging : {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level : 'info'
  }
};
