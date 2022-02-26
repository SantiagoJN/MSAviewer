// Original project: https://github.com/wilzbach/msa 
var opts = {};

// set your custom properties
// @see: https://github.com/greenify/biojs-vis-msa/tree/master/src/g 
opts.seqs = msa.utils.seqgen.getDummySequences(1000,300);
opts.el = document.getElementById("yourDiv");
opts.vis = {conserv: false, overviewbox: false}
opts.zoomer = {alignmentHeight: 405, labelWidth: 110,labelFontsize: "13px",labelIdLength: 50}

// init msa
var m = new msa.msa(opts);

// the menu is independent to the MSA container
var menuOpts = {};
menuOpts.el = document.getElementById('div');
menuOpts.msa = m;
var defMenu = new msa.menu.defaultmenu(menuOpts);
m.addView("menu", defMenu);

// call render at the end to display the whole MSA
m.render();