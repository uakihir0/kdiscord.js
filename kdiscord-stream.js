(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kdiscord-core.js', './khttpclient.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kdiscord-core.js'), require('./khttpclient.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kdiscord-stream'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kdiscord-stream'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kdiscord-stream'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kdiscord-stream'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'kdiscord-stream'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'kdiscord-stream'.");
    }
    if (typeof globalThis['kdiscord-core'] === 'undefined') {
      throw new Error("Error loading module 'kdiscord-stream'. Its dependency 'kdiscord-core' was not found. Please, check whether 'kdiscord-core' is loaded prior to 'kdiscord-stream'.");
    }
    if (typeof khttpclient === 'undefined') {
      throw new Error("Error loading module 'kdiscord-stream'. Its dependency 'khttpclient' was not found. Please, check whether 'khttpclient' is loaded prior to 'kdiscord-stream'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kdiscord-stream'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kdiscord-stream'.");
    }
    globalThis['kdiscord-stream'] = factory(typeof globalThis['kdiscord-stream'] === 'undefined' ? {} : globalThis['kdiscord-stream'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kdiscord-core'], khttpclient, globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_work_socialhub_kdiscord_core, kotlin_work_socialhub_khttpclient, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.zb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var JsonElementSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var initMetadataForObject = kotlin_kotlin.$_$.gb;
  var VOID = kotlin_kotlin.$_$.c;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var objectCreate = kotlin_kotlin.$_$.yb;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var equals = kotlin_kotlin.$_$.ta;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s2;
  var ReferenceArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g2;
  var lazy = kotlin_kotlin.$_$.vg;
  var $serializer_getInstance = kotlin_work_socialhub_kdiscord_core.$_$.a;
  var initMetadataForInterface = kotlin_kotlin.$_$.eb;
  var defineProp = kotlin_kotlin.$_$.sa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var charArrayOf = kotlin_kotlin.$_$.ka;
  var trimEnd = kotlin_kotlin.$_$.bf;
  var WebsocketRequest = kotlin_work_socialhub_khttpclient.$_$.a;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var InternalUtility_getInstance = kotlin_work_socialhub_kdiscord_core.$_$.b;
  var getKClass = kotlin_kotlin.$_$.sc;
  var arrayOf = kotlin_kotlin.$_$.mg;
  var createKType = kotlin_kotlin.$_$.qc;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var isInterface = kotlin_kotlin.$_$.pb;
  var Exception = kotlin_kotlin.$_$.sf;
  var CoroutineImpl = kotlin_kotlin.$_$.j9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r8;
  var initMetadataForLambda = kotlin_kotlin.$_$.fb;
  var constructCallableReference = kotlin_kotlin.$_$.ra;
  var Default_getInstance = kotlin_kotlin.$_$.r2;
  var toNumber = kotlin_kotlin.$_$.ea;
  var numberToLong = kotlin_kotlin.$_$.z9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t1;
  var fromInt = kotlin_kotlin.$_$.u9;
  var multiply = kotlin_kotlin.$_$.x9;
  var await_0 = kotlin_kotlin.$_$.f3;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cb;
  var getGateway$virtualSuspendBridge = kotlin_work_socialhub_kdiscord_core.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var toBoolean = kotlin_kotlin.$_$.me;
  var JsonPrimitive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var JsonNull_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var JsonObjectBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var ensureNotNull = kotlin_kotlin.$_$.qg;
  var DiscordFactory_instance = kotlin_work_socialhub_kdiscord_core.$_$.c;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j3;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var promisify = kotlin_kotlin.$_$.v8;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var Message = kotlin_work_socialhub_kdiscord_core.$_$.f;
  var Guild = kotlin_work_socialhub_kdiscord_core.$_$.e;
  var toString = kotlin_kotlin.$_$.cc;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GatewayPayload, 'GatewayPayload', GatewayPayload, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(HelloData, 'HelloData', HelloData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(IdentifyPayload, 'IdentifyPayload', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(IdentifyProperties, 'IdentifyProperties', IdentifyProperties, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PresenceData, 'PresenceData', PresenceData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ReadyData, 'ReadyData', ReadyData, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ResumePayload, 'ResumePayload', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForClass(ReadyEvent, 'ReadyEvent');
  initMetadataForClass(MessageCreateEvent, 'MessageCreateEvent');
  initMetadataForClass(MessageUpdateEvent, 'MessageUpdateEvent');
  initMetadataForClass(MessageDeleteGatewayEvent, 'MessageDeleteGatewayEvent');
  initMetadataForClass(GuildCreateEvent, 'GuildCreateEvent');
  initMetadataForClass(PresenceUpdateGatewayEvent, 'PresenceUpdateGatewayEvent');
  initMetadataForClass(UnknownEvent, 'UnknownEvent');
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(MessageDeleteEvent, 'MessageDeleteEvent', MessageDeleteEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PresenceUpdateEvent, 'PresenceUpdateEvent', PresenceUpdateEvent, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  function start$suspendBridge($completion) {
    return Unit_instance;
  }
  initMetadataForInterface(DiscordStream, 'DiscordStream', VOID, VOID, VOID, [0, 1]);
  initMetadataForObject(DiscordStreamFactory, 'DiscordStreamFactory');
  function onReady(data) {
  }
  function onMessageCreate(message) {
  }
  function onMessageUpdate(message) {
  }
  function onMessageDelete(event) {
  }
  function onGuildCreate(guild) {
  }
  function onPresenceUpdate(event) {
  }
  function onUnknownEvent(type, raw) {
  }
  function onOpen() {
  }
  function onClose() {
  }
  function onError(error) {
  }
  initMetadataForInterface(DiscordStreamListener, 'DiscordStreamListener');
  initMetadataForCompanion(Companion_8);
  initMetadataForLambda(GatewayClient$start$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(GatewayClient$openWebSocket$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(GatewayClient$openWebSocket$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(GatewayClient$startHeartbeat$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(GatewayClient$scheduleReconnect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($start$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($connectCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($fetchGatewayUrlCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($handleFrameCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($sendHeartbeatCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($sendIdentifyCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($sendResumeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(GatewayClient, 'GatewayClient', VOID, VOID, [DiscordStream], [0, 1]);
  initMetadataForObject(GatewayEventSerializer, 'GatewayEventSerializer');
  //endregion
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.GatewayPayload', this, 4);
    tmp0_serialDesc.dy('op', true);
    tmp0_serialDesc.dy('d', true);
    tmp0_serialDesc.dy('s', true);
    tmp0_serialDesc.dy('t', true);
    this.c6s_1 = tmp0_serialDesc;
  }
  protoOf($serializer).d6s = function (encoder, value) {
    var tmp0_desc = this.c6s_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.e6s_1 === 0)) {
      tmp1_output.es(tmp0_desc, 0, value.e6s_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.f6s_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, JsonElementSerializer_getInstance(), value.f6s_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.g6s_1 == null)) {
      tmp1_output.ns(tmp0_desc, 2, IntSerializer_getInstance(), value.g6s_1);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.h6s_1 == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.h6s_1);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer).tn = function (encoder, value) {
    return this.d6s(encoder, value instanceof GatewayPayload ? value : THROW_CCE());
  };
  protoOf($serializer).un = function (decoder) {
    var tmp0_desc = this.c6s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.uq(tmp0_desc);
    if (tmp8_input.kr()) {
      tmp4_local0 = tmp8_input.zq(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ir(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.zq(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ir(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.vq(tmp0_desc);
    return GatewayPayload_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer).sn = function () {
    return this.c6s_1;
  };
  protoOf($serializer).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), get_nullable(JsonElementSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance;
  function $serializer_getInstance_0() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function GatewayPayload_init_$Init$(seen0, op, d, s, t, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().c6s_1);
    }
    if (0 === (seen0 & 1))
      $this.e6s_1 = 0;
    else
      $this.e6s_1 = op;
    if (0 === (seen0 & 2))
      $this.f6s_1 = null;
    else
      $this.f6s_1 = d;
    if (0 === (seen0 & 4))
      $this.g6s_1 = null;
    else
      $this.g6s_1 = s;
    if (0 === (seen0 & 8))
      $this.h6s_1 = null;
    else
      $this.h6s_1 = t;
    return $this;
  }
  function GatewayPayload_init_$Create$(seen0, op, d, s, t, serializationConstructorMarker) {
    return GatewayPayload_init_$Init$(seen0, op, d, s, t, serializationConstructorMarker, objectCreate(protoOf(GatewayPayload)));
  }
  function GatewayPayload() {
    this.e6s_1 = 0;
    this.f6s_1 = null;
    this.g6s_1 = null;
    this.h6s_1 = null;
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.HelloData', this, 1);
    tmp0_serialDesc.dy('heartbeatInterval', true);
    this.i6s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).j6s = function (encoder, value) {
    var tmp0_desc = this.i6s_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.k6s_1 === 0n)) {
      tmp1_output.fs(tmp0_desc, 0, value.k6s_1);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_0).tn = function (encoder, value) {
    return this.j6s(encoder, value instanceof HelloData ? value : THROW_CCE());
  };
  protoOf($serializer_0).un = function (decoder) {
    var tmp0_desc = this.i6s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0n;
    var tmp5_input = decoder.uq(tmp0_desc);
    if (tmp5_input.kr()) {
      tmp4_local0 = tmp5_input.ar(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.ar(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.vq(tmp0_desc);
    return HelloData_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_0).sn = function () {
    return this.i6s_1;
  };
  protoOf($serializer_0).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [LongSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_1() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function HelloData_init_$Init$(seen0, heartbeatInterval, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().i6s_1);
    }
    if (0 === (seen0 & 1))
      $this.k6s_1 = 0n;
    else
      $this.k6s_1 = heartbeatInterval;
    return $this;
  }
  function HelloData_init_$Create$(seen0, heartbeatInterval, serializationConstructorMarker) {
    return HelloData_init_$Init$(seen0, heartbeatInterval, serializationConstructorMarker, objectCreate(protoOf(HelloData)));
  }
  function HelloData() {
    this.k6s_1 = 0n;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.IdentifyPayload', this, 4);
    tmp0_serialDesc.dy('token', false);
    tmp0_serialDesc.dy('properties', true);
    tmp0_serialDesc.dy('compress', true);
    tmp0_serialDesc.dy('presence', true);
    this.l6s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).m6s = function (encoder, value) {
    var tmp0_desc = this.l6s_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    tmp1_output.js(tmp0_desc, 0, value.n6s_1);
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !equals(value.o6s_1, new IdentifyProperties())) {
      tmp1_output.ls(tmp0_desc, 1, $serializer_getInstance_3(), value.o6s_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.p6s_1 === false)) {
      tmp1_output.bs(tmp0_desc, 2, value.p6s_1);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !equals(value.q6s_1, new PresenceData())) {
      tmp1_output.ls(tmp0_desc, 3, $serializer_getInstance_4(), value.q6s_1);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_1).tn = function (encoder, value) {
    return this.m6s(encoder, value instanceof IdentifyPayload ? value : THROW_CCE());
  };
  protoOf($serializer_1).un = function (decoder) {
    var tmp0_desc = this.l6s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = false;
    var tmp7_local3 = null;
    var tmp8_input = decoder.uq(tmp0_desc);
    if (tmp8_input.kr()) {
      tmp4_local0 = tmp8_input.er(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.gr(tmp0_desc, 1, $serializer_getInstance_3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.wq(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.gr(tmp0_desc, 3, $serializer_getInstance_4(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.er(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.gr(tmp0_desc, 1, $serializer_getInstance_3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.wq(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.gr(tmp0_desc, 3, $serializer_getInstance_4(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.vq(tmp0_desc);
    return IdentifyPayload_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_1).sn = function () {
    return this.l6s_1;
  };
  protoOf($serializer_1).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer_getInstance_3(), BooleanSerializer_getInstance(), $serializer_getInstance_4()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_2() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function IdentifyPayload_init_$Init$(seen0, token, properties, compress, presence, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_2().l6s_1);
    }
    $this.n6s_1 = token;
    if (0 === (seen0 & 2))
      $this.o6s_1 = new IdentifyProperties();
    else
      $this.o6s_1 = properties;
    if (0 === (seen0 & 4))
      $this.p6s_1 = false;
    else
      $this.p6s_1 = compress;
    if (0 === (seen0 & 8))
      $this.q6s_1 = new PresenceData();
    else
      $this.q6s_1 = presence;
    return $this;
  }
  function IdentifyPayload_init_$Create$(seen0, token, properties, compress, presence, serializationConstructorMarker) {
    return IdentifyPayload_init_$Init$(seen0, token, properties, compress, presence, serializationConstructorMarker, objectCreate(protoOf(IdentifyPayload)));
  }
  function IdentifyPayload(token, properties, compress, presence) {
    properties = properties === VOID ? new IdentifyProperties() : properties;
    compress = compress === VOID ? false : compress;
    presence = presence === VOID ? new PresenceData() : presence;
    this.n6s_1 = token;
    this.o6s_1 = properties;
    this.p6s_1 = compress;
    this.q6s_1 = presence;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.IdentifyProperties', this, 3);
    tmp0_serialDesc.dy('os', true);
    tmp0_serialDesc.dy('browser', true);
    tmp0_serialDesc.dy('device', true);
    this.r6s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).s6s = function (encoder, value) {
    var tmp0_desc = this.r6s_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.t6s_1 === 'Windows')) {
      tmp1_output.js(tmp0_desc, 0, value.t6s_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.u6s_1 === 'Chrome')) {
      tmp1_output.js(tmp0_desc, 1, value.u6s_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.v6s_1 === '')) {
      tmp1_output.js(tmp0_desc, 2, value.v6s_1);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_2).tn = function (encoder, value) {
    return this.s6s(encoder, value instanceof IdentifyProperties ? value : THROW_CCE());
  };
  protoOf($serializer_2).un = function (decoder) {
    var tmp0_desc = this.r6s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.uq(tmp0_desc);
    if (tmp7_input.kr()) {
      tmp4_local0 = tmp7_input.er(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.er(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.er(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.er(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.er(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.er(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vq(tmp0_desc);
    return IdentifyProperties_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_2).sn = function () {
    return this.r6s_1;
  };
  protoOf($serializer_2).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_3() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function IdentifyProperties_init_$Init$(seen0, os, browser, device, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().r6s_1);
    }
    if (0 === (seen0 & 1))
      $this.t6s_1 = 'Windows';
    else
      $this.t6s_1 = os;
    if (0 === (seen0 & 2))
      $this.u6s_1 = 'Chrome';
    else
      $this.u6s_1 = browser;
    if (0 === (seen0 & 4))
      $this.v6s_1 = '';
    else
      $this.v6s_1 = device;
    return $this;
  }
  function IdentifyProperties_init_$Create$(seen0, os, browser, device, serializationConstructorMarker) {
    return IdentifyProperties_init_$Init$(seen0, os, browser, device, serializationConstructorMarker, objectCreate(protoOf(IdentifyProperties)));
  }
  function IdentifyProperties(os, browser, device) {
    os = os === VOID ? 'Windows' : os;
    browser = browser === VOID ? 'Chrome' : browser;
    device = device === VOID ? '' : device;
    this.t6s_1 = os;
    this.u6s_1 = browser;
    this.v6s_1 = device;
  }
  function PresenceData$Companion$$childSerializers$_anonymous__yjkh7f() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pb(), StringSerializer_getInstance());
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w6s_1 = [null, lazy(tmp_0, PresenceData$Companion$$childSerializers$_anonymous__yjkh7f), null, null];
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.PresenceData', this, 4);
    tmp0_serialDesc.dy('since', true);
    tmp0_serialDesc.dy('activities', true);
    tmp0_serialDesc.dy('status', true);
    tmp0_serialDesc.dy('afk', true);
    this.x6s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).y6s = function (encoder, value) {
    var tmp0_desc = this.x6s_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().w6s_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.z6s_1 == null)) {
      tmp1_output.ns(tmp0_desc, 0, LongSerializer_getInstance(), value.z6s_1);
    }
    var tmp;
    if (tmp1_output.rs(tmp0_desc, 1)) {
      tmp = true;
    } else {
      var tmp_0 = value.a6t_1;
      // Inline function 'kotlin.emptyArray' call
      var tmp$ret$0 = [];
      tmp = !equals(tmp_0, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.ls(tmp0_desc, 1, tmp2_cached[1].n1(), value.a6t_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.b6t_1 === 'online')) {
      tmp1_output.js(tmp0_desc, 2, value.b6t_1);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.c6t_1 === false)) {
      tmp1_output.bs(tmp0_desc, 3, value.c6t_1);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_3).tn = function (encoder, value) {
    return this.y6s(encoder, value instanceof PresenceData ? value : THROW_CCE());
  };
  protoOf($serializer_3).un = function (decoder) {
    var tmp0_desc = this.x6s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_input = decoder.uq(tmp0_desc);
    var tmp9_cached = Companion_getInstance_3().w6s_1;
    if (tmp8_input.kr()) {
      tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, LongSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.gr(tmp0_desc, 1, tmp9_cached[1].n1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.er(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.wq(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, LongSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.gr(tmp0_desc, 1, tmp9_cached[1].n1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.er(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.wq(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.vq(tmp0_desc);
    return PresenceData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_3).sn = function () {
    return this.x6s_1;
  };
  protoOf($serializer_3).sy = function () {
    var tmp0_cached = Companion_getInstance_3().w6s_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(LongSerializer_getInstance()), tmp0_cached[1].n1(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_4() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function PresenceData_init_$Init$(seen0, since, activities, status, afk, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().x6s_1);
    }
    if (0 === (seen0 & 1))
      $this.z6s_1 = null;
    else
      $this.z6s_1 = since;
    if (0 === (seen0 & 2)) {
      var tmp = $this;
      // Inline function 'kotlin.emptyArray' call
      tmp.a6t_1 = [];
    } else
      $this.a6t_1 = activities;
    if (0 === (seen0 & 4))
      $this.b6t_1 = 'online';
    else
      $this.b6t_1 = status;
    if (0 === (seen0 & 8))
      $this.c6t_1 = false;
    else
      $this.c6t_1 = afk;
    return $this;
  }
  function PresenceData_init_$Create$(seen0, since, activities, status, afk, serializationConstructorMarker) {
    return PresenceData_init_$Init$(seen0, since, activities, status, afk, serializationConstructorMarker, objectCreate(protoOf(PresenceData)));
  }
  function PresenceData(since, activities, status, afk) {
    Companion_getInstance_3();
    since = since === VOID ? null : since;
    var tmp;
    if (activities === VOID) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else {
      tmp = activities;
    }
    activities = tmp;
    status = status === VOID ? 'online' : status;
    afk = afk === VOID ? false : afk;
    this.z6s_1 = since;
    this.a6t_1 = activities;
    this.b6t_1 = status;
    this.c6t_1 = afk;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.ReadyData', this, 4);
    tmp0_serialDesc.dy('v', true);
    tmp0_serialDesc.dy('user', true);
    tmp0_serialDesc.dy('sessionId', true);
    tmp0_serialDesc.dy('resumeGatewayUrl', true);
    this.d6t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).e6t = function (encoder, value) {
    var tmp0_desc = this.d6t_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.v == null)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.v);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.user == null)) {
      tmp1_output.ns(tmp0_desc, 1, $serializer_getInstance(), value.user);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.sessionId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.sessionId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.resumeGatewayUrl == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.resumeGatewayUrl);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_4).tn = function (encoder, value) {
    return this.e6t(encoder, value instanceof ReadyData ? value : THROW_CCE());
  };
  protoOf($serializer_4).un = function (decoder) {
    var tmp0_desc = this.d6t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.uq(tmp0_desc);
    if (tmp8_input.kr()) {
      tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.vq(tmp0_desc);
    return ReadyData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_4).sn = function () {
    return this.d6t_1;
  };
  protoOf($serializer_4).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable($serializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_5() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function ReadyData_init_$Init$(seen0, v, user, sessionId, resumeGatewayUrl, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().d6t_1);
    }
    if (0 === (seen0 & 1))
      $this.v = null;
    else
      $this.v = v;
    if (0 === (seen0 & 2))
      $this.user = null;
    else
      $this.user = user;
    if (0 === (seen0 & 4))
      $this.sessionId = null;
    else
      $this.sessionId = sessionId;
    if (0 === (seen0 & 8))
      $this.resumeGatewayUrl = null;
    else
      $this.resumeGatewayUrl = resumeGatewayUrl;
    return $this;
  }
  function ReadyData_init_$Create$(seen0, v, user, sessionId, resumeGatewayUrl, serializationConstructorMarker) {
    return ReadyData_init_$Init$(seen0, v, user, sessionId, resumeGatewayUrl, serializationConstructorMarker, objectCreate(protoOf(ReadyData)));
  }
  function ReadyData() {
    this.v = null;
    this.user = null;
    this.sessionId = null;
    this.resumeGatewayUrl = null;
  }
  protoOf(ReadyData).f6t = function (_set____db54di) {
    this.v = _set____db54di;
  };
  protoOf(ReadyData).g6t = function () {
    return this.v;
  };
  protoOf(ReadyData).k5g = function (_set____db54di) {
    this.user = _set____db54di;
  };
  protoOf(ReadyData).s39 = function () {
    return this.user;
  };
  protoOf(ReadyData).h6t = function (_set____db54di) {
    this.sessionId = _set____db54di;
  };
  protoOf(ReadyData).i6t = function () {
    return this.sessionId;
  };
  protoOf(ReadyData).j6t = function (_set____db54di) {
    this.resumeGatewayUrl = _set____db54di;
  };
  protoOf(ReadyData).k6t = function () {
    return this.resumeGatewayUrl;
  };
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.ResumePayload', this, 3);
    tmp0_serialDesc.dy('token', false);
    tmp0_serialDesc.dy('sessionId', false);
    tmp0_serialDesc.dy('seq', false);
    this.l6t_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).m6t = function (encoder, value) {
    var tmp0_desc = this.l6t_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    tmp1_output.js(tmp0_desc, 0, value.n6t_1);
    tmp1_output.js(tmp0_desc, 1, value.o6t_1);
    tmp1_output.es(tmp0_desc, 2, value.p6t_1);
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_5).tn = function (encoder, value) {
    return this.m6t(encoder, value instanceof ResumePayload ? value : THROW_CCE());
  };
  protoOf($serializer_5).un = function (decoder) {
    var tmp0_desc = this.l6t_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.uq(tmp0_desc);
    if (tmp7_input.kr()) {
      tmp4_local0 = tmp7_input.er(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.er(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.zq(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.er(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.er(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.zq(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vq(tmp0_desc);
    return ResumePayload_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_5).sn = function () {
    return this.l6t_1;
  };
  protoOf($serializer_5).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_6() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function ResumePayload_init_$Init$(seen0, token, sessionId, seq, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_6().l6t_1);
    }
    $this.n6t_1 = token;
    $this.o6t_1 = sessionId;
    $this.p6t_1 = seq;
    return $this;
  }
  function ResumePayload_init_$Create$(seen0, token, sessionId, seq, serializationConstructorMarker) {
    return ResumePayload_init_$Init$(seen0, token, sessionId, seq, serializationConstructorMarker, objectCreate(protoOf(ResumePayload)));
  }
  function ResumePayload(token, sessionId, seq) {
    this.n6t_1 = token;
    this.o6t_1 = sessionId;
    this.p6t_1 = seq;
  }
  function ReadyEvent(data) {
    this.q6t_1 = data;
    this.r6t_1 = 'READY';
  }
  function MessageCreateEvent(message) {
    this.s6t_1 = message;
    this.t6t_1 = 'MESSAGE_CREATE';
  }
  function MessageUpdateEvent(message) {
    this.u6t_1 = message;
    this.v6t_1 = 'MESSAGE_UPDATE';
  }
  function MessageDeleteGatewayEvent(data) {
    this.w6t_1 = data;
    this.x6t_1 = 'MESSAGE_DELETE';
  }
  function GuildCreateEvent(guild) {
    this.y6t_1 = guild;
    this.z6t_1 = 'GUILD_CREATE';
  }
  function PresenceUpdateGatewayEvent(data) {
    this.a6u_1 = data;
    this.b6u_1 = 'PRESENCE_UPDATE';
  }
  function UnknownEvent(type, raw) {
    this.c6u_1 = type;
    this.d6u_1 = raw;
  }
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.event.MessageDeleteEvent', this, 3);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('channelId', true);
    tmp0_serialDesc.dy('guildId', true);
    this.e6u_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).f6u = function (encoder, value) {
    var tmp0_desc = this.e6u_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.channelId == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.channelId);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.guildId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.guildId);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_6).tn = function (encoder, value) {
    return this.f6u(encoder, value instanceof MessageDeleteEvent ? value : THROW_CCE());
  };
  protoOf($serializer_6).un = function (decoder) {
    var tmp0_desc = this.e6u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.uq(tmp0_desc);
    if (tmp7_input.kr()) {
      tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vq(tmp0_desc);
    return MessageDeleteEvent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).sn = function () {
    return this.e6u_1;
  };
  protoOf($serializer_6).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_7() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function MessageDeleteEvent_init_$Init$(seen0, id, channelId, guildId, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().e6u_1);
    }
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.channelId = null;
    else
      $this.channelId = channelId;
    if (0 === (seen0 & 4))
      $this.guildId = null;
    else
      $this.guildId = guildId;
    return $this;
  }
  function MessageDeleteEvent_init_$Create$(seen0, id, channelId, guildId, serializationConstructorMarker) {
    return MessageDeleteEvent_init_$Init$(seen0, id, channelId, guildId, serializationConstructorMarker, objectCreate(protoOf(MessageDeleteEvent)));
  }
  function MessageDeleteEvent() {
    this.id = null;
    this.channelId = null;
    this.guildId = null;
  }
  protoOf(MessageDeleteEvent).r5a = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(MessageDeleteEvent).s5a = function () {
    return this.id;
  };
  protoOf(MessageDeleteEvent).h5h = function (_set____db54di) {
    this.channelId = _set____db54di;
  };
  protoOf(MessageDeleteEvent).a5a = function () {
    return this.channelId;
  };
  protoOf(MessageDeleteEvent).q5b = function (_set____db54di) {
    this.guildId = _set____db54di;
  };
  protoOf(MessageDeleteEvent).r5b = function () {
    return this.guildId;
  };
  function Companion_7() {
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.gateway.event.PresenceUpdateEvent', this, 3);
    tmp0_serialDesc.dy('user', true);
    tmp0_serialDesc.dy('guildId', true);
    tmp0_serialDesc.dy('status', true);
    this.g6u_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).h6u = function (encoder, value) {
    var tmp0_desc = this.g6u_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.user == null)) {
      tmp1_output.ns(tmp0_desc, 0, $serializer_getInstance(), value.user);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.guildId == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.guildId);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.status == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.status);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_7).tn = function (encoder, value) {
    return this.h6u(encoder, value instanceof PresenceUpdateEvent ? value : THROW_CCE());
  };
  protoOf($serializer_7).un = function (decoder) {
    var tmp0_desc = this.g6u_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.uq(tmp0_desc);
    if (tmp7_input.kr()) {
      tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vq(tmp0_desc);
    return PresenceUpdateEvent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_7).sn = function () {
    return this.g6u_1;
  };
  protoOf($serializer_7).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_8() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function PresenceUpdateEvent_init_$Init$(seen0, user, guildId, status, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().g6u_1);
    }
    if (0 === (seen0 & 1))
      $this.user = null;
    else
      $this.user = user;
    if (0 === (seen0 & 2))
      $this.guildId = null;
    else
      $this.guildId = guildId;
    if (0 === (seen0 & 4))
      $this.status = null;
    else
      $this.status = status;
    return $this;
  }
  function PresenceUpdateEvent_init_$Create$(seen0, user, guildId, status, serializationConstructorMarker) {
    return PresenceUpdateEvent_init_$Init$(seen0, user, guildId, status, serializationConstructorMarker, objectCreate(protoOf(PresenceUpdateEvent)));
  }
  function PresenceUpdateEvent() {
    this.user = null;
    this.guildId = null;
    this.status = null;
  }
  protoOf(PresenceUpdateEvent).k5g = function (_set____db54di) {
    this.user = _set____db54di;
  };
  protoOf(PresenceUpdateEvent).s39 = function () {
    return this.user;
  };
  protoOf(PresenceUpdateEvent).q5b = function (_set____db54di) {
    this.guildId = _set____db54di;
  };
  protoOf(PresenceUpdateEvent).r5b = function () {
    return this.guildId;
  };
  protoOf(PresenceUpdateEvent).i6u = function (_set____db54di) {
    this.status = _set____db54di;
  };
  protoOf(PresenceUpdateEvent).v3v = function () {
    return this.status;
  };
  function DiscordStream() {
  }
  function DiscordStreamFactory() {
  }
  protoOf(DiscordStreamFactory).instance = function (token) {
    return new GatewayClient('https://discord.com/api/v10', token);
  };
  protoOf(DiscordStreamFactory).instanceWithApiHost = function (token, apiHost) {
    return new GatewayClient(apiHost, token);
  };
  var DiscordStreamFactory_instance;
  function DiscordStreamFactory_getInstance() {
    return DiscordStreamFactory_instance;
  }
  function DiscordStreamListener() {
  }
  function Companion_8() {
    this.l6u_1 = '10';
    this.m6u_1 = 1000n;
    this.n6u_1 = 30000n;
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function connect($this, resume, $completion) {
    var tmp = new $connectCOROUTINE$($this, resume, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function fetchGatewayUrl($this, $completion) {
    var tmp = new $fetchGatewayUrlCOROUTINE$($this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function withQuery($this, base) {
    var trimmed = trimEnd(base, charArrayOf([_Char___init__impl__6a9atx(47)]));
    return trimmed + '/?v=10&encoding=json';
  }
  function openWebSocket($this, wsUrl, resume) {
    var ws = new WebsocketRequest();
    ws.u56(wsUrl);
    var tmp = ws;
    tmp.t54_1 = GatewayClient$openWebSocket$slambda_0($this, null);
    var tmp_0 = ws;
    tmp_0.v54_1 = GatewayClient$openWebSocket$lambda($this, resume);
    var tmp_1 = ws;
    tmp_1.w54_1 = GatewayClient$openWebSocket$lambda_0($this);
    var tmp_2 = ws;
    tmp_2.x54_1 = GatewayClient$openWebSocket$lambda_1($this);
    $this.n6v_1 = ws;
    var tmp_3 = $this.z6v_1;
    launch(tmp_3, VOID, VOID, GatewayClient$openWebSocket$slambda_2(ws, $this, null));
  }
  function handleFrame($this, raw, $completion) {
    var tmp = new $handleFrameCOROUTINE$($this, raw, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function dispatch($this, payload) {
    var tmp0_elvis_lhs = payload.h6s_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var type = tmp;
    if (type === 'READY') {
      var tmp2 = payload.f6s_1;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayClient.decodeData' call
        if (tmp2 == null) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var tmp_0;
        try {
          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
          var this_0 = InternalUtility_getInstance().p5s_1;
          // Inline function 'kotlinx.serialization.serializer' call
          var this_1 = this_0.jr();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_2 = serializer(this_1, createKType(getKClass(ReadyData), arrayOf([]), false));
          var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          tmp_0 = this_0.u18(tmp$ret$2, tmp2);
        } catch ($p) {
          var tmp_1;
          if ($p instanceof Exception) {
            var e = $p;
            tmp_1 = null;
          } else {
            throw $p;
          }
          tmp_0 = tmp_1;
        }
        tmp$ret$0 = tmp_0;
      }
      var ready = tmp$ret$0;
      if (!(ready == null)) {
        $this.s6v_1 = ready.sessionId;
        $this.t6v_1 = ready.resumeGatewayUrl;
        $this.o6v_1 = true;
        $this.y6v_1 = 1000n;
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $this.m6v_1.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          element.onReady(ready);
        }
      }
      return Unit_instance;
    }
    if (type === 'RESUMED') {
      $this.o6v_1 = true;
      $this.y6v_1 = 1000n;
      return Unit_instance;
    }
    var event = GatewayEventSerializer_instance.m6w(type, payload.f6s_1);
    if (event instanceof ReadyEvent) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = $this.m6v_1.t();
      while (_iterator__ex2g4s_0.u()) {
        var element_0 = _iterator__ex2g4s_0.v();
        element_0.onReady(event.q6t_1);
      }
    } else {
      if (event instanceof MessageCreateEvent) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_1 = $this.m6v_1.t();
        while (_iterator__ex2g4s_1.u()) {
          var element_1 = _iterator__ex2g4s_1.v();
          element_1.onMessageCreate(event.s6t_1);
        }
      } else {
        if (event instanceof MessageUpdateEvent) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = $this.m6v_1.t();
          while (_iterator__ex2g4s_2.u()) {
            var element_2 = _iterator__ex2g4s_2.v();
            element_2.onMessageUpdate(event.u6t_1);
          }
        } else {
          if (event instanceof MessageDeleteGatewayEvent) {
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_3 = $this.m6v_1.t();
            while (_iterator__ex2g4s_3.u()) {
              var element_3 = _iterator__ex2g4s_3.v();
              element_3.onMessageDelete(event.w6t_1);
            }
          } else {
            if (event instanceof GuildCreateEvent) {
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s_4 = $this.m6v_1.t();
              while (_iterator__ex2g4s_4.u()) {
                var element_4 = _iterator__ex2g4s_4.v();
                element_4.onGuildCreate(event.y6t_1);
              }
            } else {
              if (event instanceof PresenceUpdateGatewayEvent) {
                // Inline function 'kotlin.collections.forEach' call
                var _iterator__ex2g4s_5 = $this.m6v_1.t();
                while (_iterator__ex2g4s_5.u()) {
                  var element_5 = _iterator__ex2g4s_5.v();
                  element_5.onPresenceUpdate(event.a6u_1);
                }
              } else {
                if (event instanceof UnknownEvent) {
                  // Inline function 'kotlin.collections.forEach' call
                  var _iterator__ex2g4s_6 = $this.m6v_1.t();
                  while (_iterator__ex2g4s_6.u()) {
                    var element_6 = _iterator__ex2g4s_6.v();
                    element_6.onUnknownEvent(event.c6u_1, event.d6u_1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function startHeartbeat($this) {
    var tmp0_safe_receiver = $this.v6v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q1s();
    }
    $this.u6v_1 = true;
    var tmp = $this;
    var tmp_0 = $this.z6v_1;
    tmp.v6v_1 = launch(tmp_0, VOID, VOID, GatewayClient$startHeartbeat$slambda_0($this, null));
  }
  function sendHeartbeat($this, $completion) {
    var tmp = new $sendHeartbeatCOROUTINE$($this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function sendIdentify($this, $completion) {
    var tmp = new $sendIdentifyCOROUTINE$($this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function sendResume($this, $completion) {
    var tmp = new $sendResumeCOROUTINE$($this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function closeSocketForReconnect($this) {
    $this.o6v_1 = false;
    var tmp0_safe_receiver = $this.v6v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q1s();
    }
    try {
      var tmp1_safe_receiver = $this.n6v_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.t3();
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
      } else {
        throw $p;
      }
    }
  }
  function scheduleReconnect($this, resume) {
    if ($this.p6v_1)
      return Unit_instance;
    var tmp0_safe_receiver = $this.w6v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q1s();
    }
    var tmp = $this;
    var tmp_0 = $this.z6v_1;
    tmp.w6v_1 = launch(tmp_0, VOID, VOID, GatewayClient$scheduleReconnect$slambda_0($this, resume, null));
  }
  function dispatchError($this, e) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.m6v_1.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      element.onError(e);
    }
  }
  function GatewayClient$start$slambda(this$0, resultContinuation) {
    this.z6x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GatewayClient$start$slambda).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GatewayClient$start$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GatewayClient$start$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 7;
            this.b6y_1 = this.z6x_1.a6w_1.t();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.i8_1 = 2;
            suspendResult = this.b6y_1.m26(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.i8_1 = 6;
              continue $sm;
            }

            var raw = this.b6y_1.v();
            this.j8_1 = 4;
            this.i8_1 = 3;
            suspendResult = handleFrame(this.z6x_1, raw, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.j8_1 = 7;
            this.i8_1 = 5;
            continue $sm;
          case 4:
            this.j8_1 = 7;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Exception) {
              var e = this.l8_1;
              dispatchError(this.z6x_1, e);
              this.i8_1 = 5;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 5:
            this.j8_1 = 7;
            this.i8_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.l8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.j8_1 === 7) {
          throw e_0;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(GatewayClient$start$slambda).p2n = function ($this$launch, completion) {
    var i = new GatewayClient$start$slambda(this.z6x_1, completion);
    i.a6y_1 = $this$launch;
    return i;
  };
  function GatewayClient$start$slambda_0(this$0, resultContinuation) {
    var i = new GatewayClient$start$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function GatewayClient$openWebSocket$slambda(this$0, resultContinuation) {
    this.k6y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GatewayClient$openWebSocket$slambda).l55 = function (message, $completion) {
    var tmp = this.m55(message, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GatewayClient$openWebSocket$slambda).e9 = function (p1, $completion) {
    return this.l55((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GatewayClient$openWebSocket$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          this.k6y_1.a6w_1.k28(this.l6y_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(GatewayClient$openWebSocket$slambda).m55 = function (message, completion) {
    var i = new GatewayClient$openWebSocket$slambda(this.k6y_1, completion);
    i.l6y_1 = message;
    return i;
  };
  function GatewayClient$openWebSocket$slambda_0(this$0, resultContinuation) {
    var i = new GatewayClient$openWebSocket$slambda(this$0, resultContinuation);
    return constructCallableReference(function (message, $completion) {
      return i.l55(message, $completion);
    }, 1);
  }
  function GatewayClient$openWebSocket$lambda(this$0, $resume) {
    return function (it) {
      this$0.b6w_1 = $resume;
      return Unit_instance;
    };
  }
  function GatewayClient$openWebSocket$lambda_0(this$0) {
    return function (it) {
      this$0.o6v_1 = false;
      var tmp0_safe_receiver = this$0.v6v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.q1s();
      }
      var tmp;
      if (!this$0.p6v_1) {
        scheduleReconnect(this$0, !(this$0.s6v_1 == null));
        tmp = Unit_instance;
      } else {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = this$0.m6v_1.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          element.onClose();
        }
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function GatewayClient$openWebSocket$lambda_1(this$0) {
    return function (error) {
      dispatchError(this$0, error);
      return Unit_instance;
    };
  }
  function GatewayClient$openWebSocket$slambda_1($ws, this$0, resultContinuation) {
    this.u6y_1 = $ws;
    this.v6y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GatewayClient$openWebSocket$slambda_1).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GatewayClient$openWebSocket$slambda_1).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GatewayClient$openWebSocket$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.u6y_1.v56(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x6y_1 = suspendResult;
            this.j8_1 = 3;
            this.i8_1 = 4;
            continue $sm;
          case 2:
            this.j8_1 = 3;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Exception) {
              var e = this.l8_1;
              var tmp_1 = this;
              dispatchError(this.v6y_1, e);
              if (!this.v6y_1.p6v_1) {
                scheduleReconnect(this.v6y_1, !(this.v6y_1.s6v_1 == null));
              }
              tmp_1.x6y_1 = Unit_instance;
              this.i8_1 = 4;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 3:
            throw this.l8_1;
          case 4:
            this.j8_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.j8_1 === 3) {
          throw e_0;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(GatewayClient$openWebSocket$slambda_1).p2n = function ($this$launch, completion) {
    var i = new GatewayClient$openWebSocket$slambda_1(this.u6y_1, this.v6y_1, completion);
    i.w6y_1 = $this$launch;
    return i;
  };
  function GatewayClient$openWebSocket$slambda_2($ws, this$0, resultContinuation) {
    var i = new GatewayClient$openWebSocket$slambda_1($ws, this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function GatewayClient$startHeartbeat$slambda(this$0, resultContinuation) {
    this.g6z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GatewayClient$startHeartbeat$slambda).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GatewayClient$startHeartbeat$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GatewayClient$startHeartbeat$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 7;
            this.i8_1 = 1;
            var tmp0 = this.g6z_1.q6v_1;
            var other = Default_getInstance().wg();
            suspendResult = delay(numberToLong(toNumber(tmp0) * other), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i8_1 = 2;
            continue $sm;
          case 2:
            if (!get_isActive(this.h6z_1)) {
              this.i8_1 = 6;
              continue $sm;
            }

            if (!this.g6z_1.u6v_1) {
              closeSocketForReconnect(this.g6z_1);
              scheduleReconnect(this.g6z_1, true);
              this.i8_1 = 6;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            this.g6z_1.u6v_1 = false;
            this.i8_1 = 4;
            suspendResult = sendHeartbeat(this.g6z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.i8_1 = 5;
            suspendResult = delay(this.g6z_1.q6v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.i8_1 = 2;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 7) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(GatewayClient$startHeartbeat$slambda).p2n = function ($this$launch, completion) {
    var i = new GatewayClient$startHeartbeat$slambda(this.g6z_1, completion);
    i.h6z_1 = $this$launch;
    return i;
  };
  function GatewayClient$startHeartbeat$slambda_0(this$0, resultContinuation) {
    var i = new GatewayClient$startHeartbeat$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function GatewayClient$scheduleReconnect$slambda(this$0, $resume, resultContinuation) {
    this.q6z_1 = this$0;
    this.r6z_1 = $resume;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GatewayClient$scheduleReconnect$slambda).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GatewayClient$scheduleReconnect$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GatewayClient$scheduleReconnect$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = delay(this.q6z_1.y6v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this.q6z_1;
            var this_0 = this.q6z_1.y6v_1;
            var a = multiply(this_0, fromInt(2));
            tmp_0.y6v_1 = a <= 30000n ? a : 30000n;
            if (this.q6z_1.p6v_1)
              return Unit_instance;
            this.i8_1 = 2;
            suspendResult = connect(this.q6z_1, this.r6z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(GatewayClient$scheduleReconnect$slambda).p2n = function ($this$launch, completion) {
    var i = new GatewayClient$scheduleReconnect$slambda(this.q6z_1, this.r6z_1, completion);
    i.s6z_1 = $this$launch;
    return i;
  };
  function GatewayClient$scheduleReconnect$slambda_0(this$0, $resume, resultContinuation) {
    var i = new GatewayClient$scheduleReconnect$slambda(this$0, $resume, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function $start$suspendBridgeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b70_1 = _this__u8e3s4;
  }
  protoOf($start$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.b70_1.start === protoOf(GatewayClient).start) {
              this.i8_1 = 2;
              suspendResult = this.b70_1.j6u(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.b70_1.start(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 4) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function $connectCOROUTINE$(_this__u8e3s4, resume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w6u_1 = _this__u8e3s4;
    this.x6u_1 = resume;
  }
  protoOf($connectCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            if (this.w6u_1.p6v_1)
              return Unit_instance;
            this.j8_1 = 5;
            if (this.x6u_1) {
              var tmp0_elvis_lhs = this.w6u_1.t6v_1;
              if (tmp0_elvis_lhs == null) {
                this.i8_1 = 2;
                suspendResult = fetchGatewayUrl(this.w6u_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.z6u_1 = tmp0_elvis_lhs;
                this.i8_1 = 3;
                continue $sm;
              }
            } else {
              this.i8_1 = 1;
              suspendResult = fetchGatewayUrl(this.w6u_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.y6u_1 = suspendResult;
            this.i8_1 = 4;
            continue $sm;
          case 2:
            this.z6u_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            this.y6u_1 = this.z6u_1;
            this.i8_1 = 4;
            continue $sm;
          case 4:
            var base = this.y6u_1;
            openWebSocket(this.w6u_1, withQuery(this.w6u_1, base), this.x6u_1);
            this.j8_1 = 6;
            this.i8_1 = 7;
            continue $sm;
          case 5:
            this.j8_1 = 6;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Exception) {
              var e = this.l8_1;
              dispatchError(this.w6u_1, e);
              scheduleReconnect(this.w6u_1, this.x6u_1);
              this.i8_1 = 7;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
          case 7:
            this.j8_1 = 6;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.j8_1 === 6) {
          throw e_0;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_0;
        }
      }
     while (true);
  };
  function $fetchGatewayUrlCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i6v_1 = _this__u8e3s4;
  }
  protoOf($fetchGatewayUrlCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = getGateway$virtualSuspendBridge(this.i6v_1.l6v_1.gateway(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            var tmp0_elvis_lhs = response.data.url;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Gateway URL is null in response');
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            return tmp_0;
          case 2:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 2) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function $handleFrameCOROUTINE$(_this__u8e3s4, raw, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k6w_1 = _this__u8e3s4;
    this.l6w_1 = raw;
  }
  protoOf($handleFrameCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            var tmp0 = InternalUtility_getInstance().p5s_1;
            var string = this.l6w_1;
            var this_0 = tmp0.jr();
            var this_1 = serializer(this_0, createKType(getKClass(GatewayPayload), arrayOf([]), false));
            var payload = tmp0.s18(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), string);
            var tmp0_safe_receiver = payload.g6s_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.k6w_1.r6v_1 = tmp0_safe_receiver;
            }

            var tmp1_subject = payload.e6s_1;
            if (tmp1_subject === 10) {
              this.k6w_1;
              var tmp2 = payload.f6s_1;
              var tmp$ret$0;
              l$ret$1: do {
                if (tmp2 == null) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                }
                var tmp_0;
                try {
                  var this_2 = InternalUtility_getInstance().p5s_1;
                  var this_3 = this_2.jr();
                  var this_4 = serializer(this_3, createKType(getKClass(HelloData), arrayOf([]), false));
                  tmp_0 = this_2.u18(isInterface(this_4, KSerializer) ? this_4 : THROW_CCE(), tmp2);
                } catch ($p) {
                  var tmp_1;
                  if ($p instanceof Exception) {
                    var e = $p;
                    tmp_1 = null;
                  } else {
                    throw $p;
                  }
                  tmp_0 = tmp_1;
                }
                tmp$ret$0 = tmp_0;
              }
               while (false);
              var hello = tmp$ret$0;
              var tmp_2 = this.k6w_1;
              var tmp3_elvis_lhs = hello == null ? null : hello.k6s_1;
              tmp_2.q6v_1 = tmp3_elvis_lhs == null ? 0n : tmp3_elvis_lhs;
              startHeartbeat(this.k6w_1);
              if (this.k6w_1.b6w_1 && !(this.k6w_1.s6v_1 == null) && !(this.k6w_1.r6v_1 == null)) {
                this.i8_1 = 3;
                suspendResult = sendResume(this.k6w_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.i8_1 = 2;
                suspendResult = sendIdentify(this.k6w_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              if (tmp1_subject === 1) {
                this.i8_1 = 1;
                suspendResult = sendHeartbeat(this.k6w_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp1_subject === 11) {
                  this.k6w_1.u6v_1 = true;
                  this.i8_1 = 5;
                  continue $sm;
                } else {
                  if (tmp1_subject === 7) {
                    closeSocketForReconnect(this.k6w_1);
                    scheduleReconnect(this.k6w_1, true);
                    this.i8_1 = 5;
                    continue $sm;
                  } else {
                    if (tmp1_subject === 9) {
                      var tmp_3 = payload.f6s_1;
                      var tmp4_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
                      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.d1b();
                      var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : toBoolean(tmp5_safe_receiver);
                      var resumable = tmp6_elvis_lhs == null ? false : tmp6_elvis_lhs;
                      if (!resumable) {
                        this.k6w_1.s6v_1 = null;
                        this.k6w_1.r6v_1 = null;
                      }
                      closeSocketForReconnect(this.k6w_1);
                      scheduleReconnect(this.k6w_1, resumable);
                      this.i8_1 = 5;
                      continue $sm;
                    } else {
                      if (tmp1_subject === 0) {
                        dispatch(this.k6w_1, payload);
                        this.i8_1 = 5;
                        continue $sm;
                      } else {
                        this.i8_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.i8_1 = 5;
            continue $sm;
          case 2:
            this.i8_1 = 4;
            continue $sm;
          case 3:
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.i8_1 = 5;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.l8_1;
        }
      } catch ($p_0) {
        var e_0 = $p_0;
        if (this.j8_1 === 6) {
          throw e_0;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_0;
        }
      }
     while (true);
  };
  function $sendHeartbeatCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v6w_1 = _this__u8e3s4;
  }
  protoOf($sendHeartbeatCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0_safe_receiver = this.v6w_1.r6v_1;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              tmp_0 = JsonPrimitive_0(tmp0_safe_receiver);
            }

            var tmp1_elvis_lhs = tmp_0;
            var seq = tmp1_elvis_lhs == null ? JsonNull_getInstance() : tmp1_elvis_lhs;
            var builder = new JsonObjectBuilder();
            builder.r1b('op', JsonPrimitive_0(1));
            builder.r1b('d', seq);
            var json = builder.g1a();
            var tmp2_safe_receiver = this.v6w_1.n6v_1;
            if (tmp2_safe_receiver == null) {
              this.w6w_1 = null;
              this.i8_1 = 2;
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = tmp2_safe_receiver.w56(json.toString(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_1 = this;
            tmp_1.w6w_1 = Unit_instance;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function $sendIdentifyCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f6x_1 = _this__u8e3s4;
  }
  protoOf($sendIdentifyCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var identify = new IdentifyPayload(this.f6x_1.k6v_1);
            var builder = new JsonObjectBuilder();
            builder.r1b('op', JsonPrimitive_0(2));
            var this_0 = InternalUtility_getInstance().p5s_1;
            var this_1 = this_0.jr();
            var this_2 = serializer(this_1, createKType(getKClass(IdentifyPayload), arrayOf([]), false));
            builder.r1b('d', this_0.t18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), identify));
            var json = builder.g1a();
            var tmp0_safe_receiver = this.f6x_1.n6v_1;
            if (tmp0_safe_receiver == null) {
              this.g6x_1 = null;
              this.i8_1 = 2;
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = tmp0_safe_receiver.w56(json.toString(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            tmp_0.g6x_1 = Unit_instance;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function $sendResumeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p6x_1 = _this__u8e3s4;
  }
  protoOf($sendResumeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var resume = new ResumePayload(this.p6x_1.k6v_1, ensureNotNull(this.p6x_1.s6v_1), ensureNotNull(this.p6x_1.r6v_1));
            var builder = new JsonObjectBuilder();
            builder.r1b('op', JsonPrimitive_0(6));
            var this_0 = InternalUtility_getInstance().p5s_1;
            var this_1 = this_0.jr();
            var this_2 = serializer(this_1, createKType(getKClass(ResumePayload), arrayOf([]), false));
            builder.r1b('d', this_0.t18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), resume));
            var json = builder.g1a();
            var tmp0_safe_receiver = this.p6x_1.n6v_1;
            if (tmp0_safe_receiver == null) {
              this.q6x_1 = null;
              this.i8_1 = 2;
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = tmp0_safe_receiver.w56(json.toString(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            tmp_0.q6x_1 = Unit_instance;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function GatewayClient(apiHost, token) {
    this.j6v_1 = apiHost;
    this.k6v_1 = token;
    this.l6v_1 = DiscordFactory_instance.instanceWithApiHost(this.k6v_1, this.j6v_1);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m6v_1 = ArrayList_init_$Create$();
    this.n6v_1 = null;
    this.o6v_1 = false;
    this.p6v_1 = false;
    this.q6v_1 = 0n;
    this.r6v_1 = null;
    this.s6v_1 = null;
    this.t6v_1 = null;
    this.u6v_1 = true;
    this.v6v_1 = null;
    this.w6v_1 = null;
    this.x6v_1 = null;
    this.y6v_1 = 1000n;
    this.z6v_1 = CoroutineScope_0(Dispatchers_getInstance().f22_1.if(SupervisorJob()));
    this.a6w_1 = Channel(2147483647);
    this.b6w_1 = false;
  }
  protoOf(GatewayClient).addEventListener = function (listener) {
    this.m6v_1.c1(listener);
  };
  protoOf(GatewayClient).removeEventListener = function (listener) {
    this.m6v_1.r2(listener);
  };
  protoOf(GatewayClient).isConnected = function () {
    return this.o6v_1;
  };
  protoOf(GatewayClient).j6u = function ($completion) {
    if (this.o6v_1)
      return Unit_instance;
    this.p6v_1 = false;
    this.z6v_1 = CoroutineScope_0(Dispatchers_getInstance().f22_1.if(SupervisorJob()));
    this.a6w_1 = Channel(2147483647);
    this.y6v_1 = 1000n;
    var tmp = this;
    var tmp_0 = this.z6v_1;
    tmp.x6v_1 = launch(tmp_0, VOID, VOID, GatewayClient$start$slambda_0(this, null));
    return connect(this, false, $completion);
  };
  protoOf(GatewayClient).start = function () {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.j6u($completion);
    });
  };
  protoOf(GatewayClient).k6u = function ($completion) {
    var tmp = new $start$suspendBridgeCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GatewayClient).stop = function () {
    this.p6v_1 = true;
    var tmp0_safe_receiver = this.w6v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q1s();
    }
    var tmp1_safe_receiver = this.v6v_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.q1s();
    }
    var tmp2_safe_receiver = this.x6v_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.q1s();
    }
    try {
      var tmp3_safe_receiver = this.n6v_1;
      if (tmp3_safe_receiver == null)
        null;
      else {
        tmp3_safe_receiver.t3();
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    cancel(this.z6v_1);
    this.o6v_1 = false;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.m6v_1.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      element.onClose();
    }
  };
  function GatewayEventSerializer() {
  }
  protoOf(GatewayEventSerializer).m6w = function (type, data) {
    if (data == null) {
      return new UnknownEvent(type, 'null');
    }
    var tmp;
    try {
      var tmp_0;
      switch (type) {
        case 'READY':
          // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayEventSerializer.decodeAs' call

          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

          var this_0 = InternalUtility_getInstance().p5s_1;
          // Inline function 'kotlinx.serialization.serializer' call

          var this_1 = this_0.jr();
          // Inline function 'kotlinx.serialization.internal.cast' call

          var this_2 = serializer(this_1, createKType(getKClass(ReadyData), arrayOf([]), false));
          var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
          var tmp$ret$0 = this_0.u18(tmp$ret$2, data);
          tmp_0 = new ReadyEvent(tmp$ret$0);
          break;
        case 'MESSAGE_CREATE':
          // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayEventSerializer.decodeAs' call

          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

          var this_3 = InternalUtility_getInstance().p5s_1;
          // Inline function 'kotlinx.serialization.serializer' call

          var this_4 = this_3.jr();
          // Inline function 'kotlinx.serialization.internal.cast' call

          var this_5 = serializer(this_4, createKType(getKClass(Message), arrayOf([]), false));
          var tmp$ret$6 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
          var tmp$ret$4 = this_3.u18(tmp$ret$6, data);
          tmp_0 = new MessageCreateEvent(tmp$ret$4);
          break;
        case 'MESSAGE_UPDATE':
          // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayEventSerializer.decodeAs' call

          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

          var this_6 = InternalUtility_getInstance().p5s_1;
          // Inline function 'kotlinx.serialization.serializer' call

          var this_7 = this_6.jr();
          // Inline function 'kotlinx.serialization.internal.cast' call

          var this_8 = serializer(this_7, createKType(getKClass(Message), arrayOf([]), false));
          var tmp$ret$10 = isInterface(this_8, KSerializer) ? this_8 : THROW_CCE();
          var tmp$ret$8 = this_6.u18(tmp$ret$10, data);
          tmp_0 = new MessageUpdateEvent(tmp$ret$8);
          break;
        case 'MESSAGE_DELETE':
          // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayEventSerializer.decodeAs' call

          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

          var this_9 = InternalUtility_getInstance().p5s_1;
          // Inline function 'kotlinx.serialization.serializer' call

          var this_10 = this_9.jr();
          // Inline function 'kotlinx.serialization.internal.cast' call

          var this_11 = serializer(this_10, createKType(getKClass(MessageDeleteEvent), arrayOf([]), false));
          var tmp$ret$14 = isInterface(this_11, KSerializer) ? this_11 : THROW_CCE();
          var tmp$ret$12 = this_9.u18(tmp$ret$14, data);
          tmp_0 = new MessageDeleteGatewayEvent(tmp$ret$12);
          break;
        case 'GUILD_CREATE':
          // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayEventSerializer.decodeAs' call

          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

          var this_12 = InternalUtility_getInstance().p5s_1;
          // Inline function 'kotlinx.serialization.serializer' call

          var this_13 = this_12.jr();
          // Inline function 'kotlinx.serialization.internal.cast' call

          var this_14 = serializer(this_13, createKType(getKClass(Guild), arrayOf([]), false));
          var tmp$ret$18 = isInterface(this_14, KSerializer) ? this_14 : THROW_CCE();
          var tmp$ret$16 = this_12.u18(tmp$ret$18, data);
          tmp_0 = new GuildCreateEvent(tmp$ret$16);
          break;
        case 'PRESENCE_UPDATE':
          // Inline function 'work.socialhub.kdiscord.stream.internal.GatewayEventSerializer.decodeAs' call

          // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

          var this_15 = InternalUtility_getInstance().p5s_1;
          // Inline function 'kotlinx.serialization.serializer' call

          var this_16 = this_15.jr();
          // Inline function 'kotlinx.serialization.internal.cast' call

          var this_17 = serializer(this_16, createKType(getKClass(PresenceUpdateEvent), arrayOf([]), false));
          var tmp$ret$22 = isInterface(this_17, KSerializer) ? this_17 : THROW_CCE();
          var tmp$ret$20 = this_15.u18(tmp$ret$22, data);
          tmp_0 = new PresenceUpdateGatewayEvent(tmp$ret$20);
          break;
        default:
          tmp_0 = new UnknownEvent(type, toString(data));
          break;
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_1 = new UnknownEvent(type, toString(data));
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  var GatewayEventSerializer_instance;
  function GatewayEventSerializer_getInstance() {
    return GatewayEventSerializer_instance;
  }
  //region block: post-declaration
  protoOf($serializer).ty = typeParametersSerializers;
  protoOf($serializer_0).ty = typeParametersSerializers;
  protoOf($serializer_1).ty = typeParametersSerializers;
  protoOf($serializer_2).ty = typeParametersSerializers;
  protoOf($serializer_3).ty = typeParametersSerializers;
  protoOf($serializer_4).ty = typeParametersSerializers;
  protoOf($serializer_5).ty = typeParametersSerializers;
  protoOf($serializer_6).ty = typeParametersSerializers;
  protoOf($serializer_7).ty = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  DiscordStreamFactory_instance = new DiscordStreamFactory();
  Companion_instance_8 = new Companion_8();
  GatewayEventSerializer_instance = new GatewayEventSerializer();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var work = _.work || (_.work = {});
    var socialhub = work.socialhub || (work.socialhub = {});
    var kdiscord = socialhub.kdiscord || (socialhub.kdiscord = {});
    var entity = kdiscord.entity || (kdiscord.entity = {});
    var gateway = entity.gateway || (entity.gateway = {});
    gateway.ReadyData = ReadyData;
    var work_0 = _.work || (_.work = {});
    var socialhub_0 = work_0.socialhub || (work_0.socialhub = {});
    var kdiscord_0 = socialhub_0.kdiscord || (socialhub_0.kdiscord = {});
    var entity_0 = kdiscord_0.entity || (kdiscord_0.entity = {});
    var gateway_0 = entity_0.gateway || (entity_0.gateway = {});
    var event = gateway_0.event || (gateway_0.event = {});
    event.MessageDeleteEvent = MessageDeleteEvent;
    var work_1 = _.work || (_.work = {});
    var socialhub_1 = work_1.socialhub || (work_1.socialhub = {});
    var kdiscord_1 = socialhub_1.kdiscord || (socialhub_1.kdiscord = {});
    var entity_1 = kdiscord_1.entity || (kdiscord_1.entity = {});
    var gateway_1 = entity_1.gateway || (entity_1.gateway = {});
    var event_0 = gateway_1.event || (gateway_1.event = {});
    event_0.PresenceUpdateEvent = PresenceUpdateEvent;
    var work_2 = _.work || (_.work = {});
    var socialhub_2 = work_2.socialhub || (work_2.socialhub = {});
    var kdiscord_2 = socialhub_2.kdiscord || (socialhub_2.kdiscord = {});
    var stream = kdiscord_2.stream || (kdiscord_2.stream = {});
    var work_3 = _.work || (_.work = {});
    var socialhub_3 = work_3.socialhub || (work_3.socialhub = {});
    var kdiscord_3 = socialhub_3.kdiscord || (socialhub_3.kdiscord = {});
    var stream_0 = kdiscord_3.stream || (kdiscord_3.stream = {});
    defineProp(stream_0, 'DiscordStreamFactory', DiscordStreamFactory_getInstance, VOID, true);
    var work_4 = _.work || (_.work = {});
    var socialhub_4 = work_4.socialhub || (work_4.socialhub = {});
    var kdiscord_4 = socialhub_4.kdiscord || (socialhub_4.kdiscord = {});
    var stream_1 = kdiscord_4.stream || (kdiscord_4.stream = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = DiscordStreamFactory_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=kdiscord-stream.js.map
