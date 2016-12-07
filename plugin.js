/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 2015 SIRAP SAS All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

var $ = window.jQuery
var tinymce = window.tinymce

tinymce.PluginManager.add('advancedtable', createAdvancedtablePlugin)

function createAdvancedtablePlugin (editor, url) {


  function tableSelect (evt) {
    var selectedNode = editor.selection.getNode()
    var table = $(selectedNode).parents('table')
    editor.selection.select(table[0])
  }
}
