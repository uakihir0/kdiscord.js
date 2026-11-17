(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kdiscord-core.js', './kotlin-kotlin-stdlib.js', './kdiscord-stream.js', './ktor-ktor-client-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kdiscord-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kdiscord-stream.js'), require('./ktor-ktor-client-core.js'));
  else {
    if (typeof globalThis['kdiscord-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kdiscord:all'. Its dependency 'kdiscord-core' was not found. Please, check whether 'kdiscord-core' is loaded prior to 'work.socialhub.kdiscord:all'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kdiscord:all'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'work.socialhub.kdiscord:all'.");
    }
    if (typeof globalThis['kdiscord-stream'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kdiscord:all'. Its dependency 'kdiscord-stream' was not found. Please, check whether 'kdiscord-stream' is loaded prior to 'work.socialhub.kdiscord:all'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'work.socialhub.kdiscord:all'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'work.socialhub.kdiscord:all'.");
    }
    globalThis['work.socialhub.kdiscord:all'] = factory(typeof globalThis['work.socialhub.kdiscord:all'] === 'undefined' ? {} : globalThis['work.socialhub.kdiscord:all'], globalThis['kdiscord-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kdiscord-stream'], globalThis['ktor-ktor-client-core']);
  }
}(function (_, kotlin_work_socialhub_kdiscord_core, kotlin_kotlin, kotlin_work_socialhub_kdiscord_stream, kotlin_io_ktor_ktor_client_core) {
  'use strict';
  //region block: imports
  var DiscordFactory_instance = kotlin_work_socialhub_kdiscord_core.$_$.c;
  var protoOf = kotlin_kotlin.$_$.zb;
  var DiscordStreamFactory_instance = kotlin_work_socialhub_kdiscord_stream.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.gb;
  var defineProp = kotlin_kotlin.$_$.sa;
  var VOID = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(KdiscordFactory, 'KdiscordFactory');
  //endregion
  function KdiscordFactory() {
  }
  protoOf(KdiscordFactory).instance = function (token) {
    return DiscordFactory_instance.instance(token);
  };
  protoOf(KdiscordFactory).instanceWithApiHost = function (token, apiHost) {
    return DiscordFactory_instance.instanceWithApiHost(token, apiHost);
  };
  protoOf(KdiscordFactory).streamInstance = function (token) {
    return DiscordStreamFactory_instance.instance(token);
  };
  protoOf(KdiscordFactory).streamInstanceWithApiHost = function (token, apiHost) {
    return DiscordStreamFactory_instance.instanceWithApiHost(token, apiHost);
  };
  var KdiscordFactory_instance;
  function KdiscordFactory_getInstance() {
    return KdiscordFactory_instance;
  }
  //region block: init
  KdiscordFactory_instance = new KdiscordFactory();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var work = _.work || (_.work = {});
    var socialhub = work.socialhub || (work.socialhub = {});
    var kdiscord = socialhub.kdiscord || (socialhub.kdiscord = {});
    defineProp(kdiscord, 'KdiscordFactory', KdiscordFactory_getInstance, VOID, true);
  }
  $jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  kotlin_work_socialhub_kdiscord_core.$jsExportAll$(_);
  kotlin_work_socialhub_kdiscord_stream.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=kdiscord-all.js.map
