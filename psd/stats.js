/**
 * Copyright 2014 Bruce Ingalls
 * global $, getJSON
 * Populates tabs with data from stats.json
 * @license GPL v3. Contact me, if you need another license
 */

var stats = {
  /**
   * Map JSON data to CSS shading style for each pane
   * @param {Number} section 0,1,2
   * @returns {String} CSS class name
   */
  getSection: function(section) {
    "use strict";
    switch (section) {
      case 0:
        return 'left';
      case 1:
        return 'center';
      case 2:
        return 'right';
    }
    return '';  //This blank section will happen only when JSON source is bad
  },
  /**
   * CSS Sprite class name associated with content description.
   * @param {String} desc Description (countTxt)
   * @returns {String} CSS class name
   */
  getSprite: function(desc) {
    "use strict";
    switch (desc) {
      case 'Buyer logins':
        return 'login-sprite';
      case 'Searches':
        return 'search-sprite';
      case 'Views of our member pages':
        return 'view-sprite';
      case 'Total vists':
        return 'visit-sprite';
      case 'Unique visitors':
        return 'visit-sprite';
      case 'Total time spent on page':
        return 'time-sprite';
    }
    return '';  //This blank icon will happen only when JSON source is bad
  }
};

/**
 * I'll change this function to more properly use handlebars templates.
 * The current challenge restricts such additional js libs :(
 * @returns null
 */
(function() {
  "use strict";
  $.getJSON("stats.json")
          .done(function(data) {
            var i, icon, key, row = '', section, tabs;
            for (key in data) {
              if (data.hasOwnProperty(key)) {
                row += '<div id="tabs-' + key + '">'; //JSON into tab content
                for (i = 0; i < 3; ++i) {   //Match icon to description
                  icon = stats.getSprite(data[key][i].countTxt);
                  section = stats.getSection(i);
                  row += '<div class="' + section + ' pane">' +
                         '<div class="' + icon + '"></div>' + 
                         '<div class="bignum">' + data[key][i].count + '</div>' +
                         '<div class="desc">' + data[key][i].countTxt + '</div>' +
                         '<div class="explain">' + data[key][i].participantsTxt +
                         '</div>' +
                         '<div class="smallnum">' +
                         data[key][i].participantCount + '</div>' +
                         '</div>\n';
                }
                row += '</div>\n';
              }
            }

            tabs =
                $("#tabs").append(row) //Insert & display tabs, all at once
                .tabs();
            tabs.tabs("refresh");
          });
          return null;
}());
