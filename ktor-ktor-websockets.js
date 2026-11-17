(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-utils.js', './ktor-ktor-io.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-io.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-websockets'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-websockets'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-websockets'.");
    }
    globalThis['ktor-ktor-websockets'] = factory(typeof globalThis['ktor-ktor-websockets'] === 'undefined' ? {} : globalThis['ktor-ktor-websockets'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-utils'], globalThis['ktor-ktor-io'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var Companion_instance = kotlin_kotlin.$_$.x2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c6;
  var mapCapacity = kotlin_kotlin.$_$.p7;
  var coerceAtLeast = kotlin_kotlin.$_$.hc;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.r3;
  var protoOf = kotlin_kotlin.$_$.zb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var enumEntries = kotlin_kotlin.$_$.l9;
  var objectCreate = kotlin_kotlin.$_$.yb;
  var Enum = kotlin_kotlin.$_$.qf;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.cc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var getStringHashCode = kotlin_kotlin.$_$.ya;
  var substring = kotlin_kotlin.$_$.je;
  var charCodeAt = kotlin_kotlin.$_$.ma;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  var isHighSurrogate = kotlin_kotlin.$_$.pd;
  var isLowSurrogate = kotlin_kotlin.$_$.rd;
  var initMetadataForInterface = kotlin_kotlin.$_$.eb;
  var isInterface = kotlin_kotlin.$_$.pb;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var ChannelResult = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.j9;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r8;
  var initMetadataForLambda = kotlin_kotlin.$_$.fb;
  var constructCallableReference = kotlin_kotlin.$_$.ra;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var ensureNotNull = kotlin_kotlin.$_$.qg;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var ClosedSendChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.a4;
  var ChannelIOException = kotlin_io_ktor_ktor_utils.$_$.b;
  var CancellationException = kotlin_kotlin.$_$.q8;
  var ClosedReceiveChannelException = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cb;
  var toString_0 = kotlin_kotlin.$_$.ah;
  var get_size = kotlin_io_ktor_ktor_io.$_$.a1;
  var fromInt = kotlin_kotlin.$_$.u9;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var joinToString = kotlin_kotlin.$_$.h7;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var readText = kotlin_io_ktor_ktor_io.$_$.y;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var initMetadataForObject = kotlin_kotlin.$_$.gb;
  var Exception = kotlin_kotlin.$_$.sf;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.g4;
  var captureStack = kotlin_kotlin.$_$.ja;
  var defineProp = kotlin_kotlin.$_$.sa;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var compareTo = kotlin_kotlin.$_$.qa;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var decodeToString = kotlin_kotlin.$_$.gd;
  var getTimeMillis = kotlin_io_ktor_ktor_utils.$_$.e;
  var Random = kotlin_kotlin.$_$.fc;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var toHexString = kotlin_kotlin.$_$.qe;
  var ClosedByteChannelException = kotlin_io_ktor_ktor_io.$_$.l1;
  var BufferOverflow_SUSPEND_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.m9;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var _ChannelResult___get_isClosed__impl__mg7kuu = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var close$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var SendChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var ReceiveChannel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var RuntimeException = kotlin_kotlin.$_$.yf;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.a5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i3;
  var split = kotlin_kotlin.$_$.ce;
  var first = kotlin_kotlin.$_$.b7;
  var isCharSequence = kotlin_kotlin.$_$.lb;
  var trim = kotlin_kotlin.$_$.ef;
  var drop = kotlin_kotlin.$_$.u6;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xg;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Codes, 'Codes', VOID, Enum);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CloseReason, 'CloseReason');
  function send(frame, $completion) {
    return this.v3j().j28(frame, $completion);
  }
  initMetadataForInterface(WebSocketSession, 'WebSocketSession', VOID, VOID, [CoroutineScope], [1, 0]);
  initMetadataForInterface(DefaultWebSocketSession, 'DefaultWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
  initMetadataForCompanion(Companion_1);
  initMetadataForLambda(DefaultWebSocketSessionImpl$start$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($outgoingProcessorLoopCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($sendCloseSequenceCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($checkMaxFrameSizeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DefaultWebSocketSessionImpl, 'DefaultWebSocketSessionImpl', VOID, VOID, [DefaultWebSocketSession, WebSocketSession], [1, 0, 2]);
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle]);
  initMetadataForClass(FrameTooBigException, 'FrameTooBigException', VOID, Exception, [CopyableThrowable]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(FrameType, 'FrameType', VOID, Enum);
  initMetadataForLambda(ponger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(pinger$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(WebSocketChannelsConfig, 'WebSocketChannelsConfig', WebSocketChannelsConfig);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ChannelConfig, 'ChannelConfig');
  initMetadataForClass(ChannelOverflow, 'ChannelOverflow', VOID, Enum);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(BoundedChannel, 'BoundedChannel', VOID, VOID, [SendChannel, ReceiveChannel], [1, 0]);
  initMetadataForClass(ChannelOverflowException, 'ChannelOverflowException', VOID, RuntimeException);
  initMetadataForInterface(WebSocketExtension, 'WebSocketExtension');
  initMetadataForClass(WebSocketExtensionsConfig, 'WebSocketExtensionsConfig', WebSocketExtensionsConfig);
  initMetadataForClass(WebSocketExtensionHeader, 'WebSocketExtensionHeader');
  initMetadataForCoroutine($closeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Frame, 'Frame');
  initMetadataForClass(Binary, 'Binary', VOID, Frame);
  initMetadataForClass(Text, 'Text', VOID, Frame);
  initMetadataForClass(Close, 'Close', Close_init_$Create$_0, Frame);
  initMetadataForClass(Ping, 'Ping', VOID, Frame);
  initMetadataForClass(Pong, 'Pong', VOID, Frame);
  initMetadataForCompanion(Companion_6);
  //endregion
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    Codes_NORMAL_instance = new Codes('NORMAL', 0, 1000);
    Codes_GOING_AWAY_instance = new Codes('GOING_AWAY', 1, 1001);
    Codes_PROTOCOL_ERROR_instance = new Codes('PROTOCOL_ERROR', 2, 1002);
    Codes_CANNOT_ACCEPT_instance = new Codes('CANNOT_ACCEPT', 3, 1003);
    Codes_CLOSED_ABNORMALLY_instance = new Codes('CLOSED_ABNORMALLY', 4, 1006);
    Codes_NOT_CONSISTENT_instance = new Codes('NOT_CONSISTENT', 5, 1007);
    Codes_VIOLATED_POLICY_instance = new Codes('VIOLATED_POLICY', 6, 1008);
    Codes_TOO_BIG_instance = new Codes('TOO_BIG', 7, 1009);
    Codes_NO_EXTENSION_instance = new Codes('NO_EXTENSION', 8, 1010);
    Codes_INTERNAL_ERROR_instance = new Codes('INTERNAL_ERROR', 9, 1011);
    Codes_SERVICE_RESTART_instance = new Codes('SERVICE_RESTART', 10, 1012);
    Codes_TRY_AGAIN_LATER_instance = new Codes('TRY_AGAIN_LATER', 11, 1013);
    if (Companion_instance_0 == null) {
      Companion_instance;
      new Companion();
    }
  }
  var Codes_NORMAL_instance;
  var Codes_GOING_AWAY_instance;
  var Codes_PROTOCOL_ERROR_instance;
  var Codes_CANNOT_ACCEPT_instance;
  var Codes_CLOSED_ABNORMALLY_instance;
  var Codes_NOT_CONSISTENT_instance;
  var Codes_VIOLATED_POLICY_instance;
  var Codes_TOO_BIG_instance;
  var Codes_NO_EXTENSION_instance;
  var Codes_INTERNAL_ERROR_instance;
  var Codes_SERVICE_RESTART_instance;
  var Codes_TRY_AGAIN_LATER_instance;
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = get_entries();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var tmp$ret$2 = element.z3i_1;
      destination.v2(tmp$ret$2, element);
    }
    tmp.a3j_1 = destination;
    this.b3j_1 = Codes_INTERNAL_ERROR_getInstance();
  }
  protoOf(Companion).c3j = function (code) {
    return this.a3j_1.n2(code);
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    static_init();
    return Companion_instance_0;
  }
  function values() {
    static_init();
    return [Codes_NORMAL_getInstance(), Codes_GOING_AWAY_getInstance(), Codes_PROTOCOL_ERROR_getInstance(), Codes_CANNOT_ACCEPT_getInstance(), Codes_CLOSED_ABNORMALLY_getInstance(), Codes_NOT_CONSISTENT_getInstance(), Codes_VIOLATED_POLICY_getInstance(), Codes_TOO_BIG_getInstance(), Codes_NO_EXTENSION_getInstance(), Codes_INTERNAL_ERROR_getInstance(), Codes_SERVICE_RESTART_getInstance(), Codes_TRY_AGAIN_LATER_getInstance()];
  }
  function get_entries() {
    static_init();
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var $ENTRIES;
  function CloseReason_init_$Init$(code, message, $this) {
    CloseReason.call($this, code.z3i_1, message);
    return $this;
  }
  function CloseReason_init_$Create$(code, message) {
    return CloseReason_init_$Init$(code, message, objectCreate(protoOf(CloseReason)));
  }
  function Codes(name, ordinal, code) {
    Enum.call(this, name, ordinal);
    this.z3i_1 = code;
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function Codes_NORMAL_getInstance() {
    static_init();
    return Codes_NORMAL_instance;
  }
  function Codes_GOING_AWAY_getInstance() {
    static_init();
    return Codes_GOING_AWAY_instance;
  }
  function Codes_PROTOCOL_ERROR_getInstance() {
    static_init();
    return Codes_PROTOCOL_ERROR_instance;
  }
  function Codes_CANNOT_ACCEPT_getInstance() {
    static_init();
    return Codes_CANNOT_ACCEPT_instance;
  }
  function Codes_CLOSED_ABNORMALLY_getInstance() {
    static_init();
    return Codes_CLOSED_ABNORMALLY_instance;
  }
  function Codes_NOT_CONSISTENT_getInstance() {
    static_init();
    return Codes_NOT_CONSISTENT_instance;
  }
  function Codes_VIOLATED_POLICY_getInstance() {
    static_init();
    return Codes_VIOLATED_POLICY_instance;
  }
  function Codes_TOO_BIG_getInstance() {
    static_init();
    return Codes_TOO_BIG_instance;
  }
  function Codes_NO_EXTENSION_getInstance() {
    static_init();
    return Codes_NO_EXTENSION_instance;
  }
  function Codes_INTERNAL_ERROR_getInstance() {
    static_init();
    return Codes_INTERNAL_ERROR_instance;
  }
  function Codes_SERVICE_RESTART_getInstance() {
    static_init();
    return Codes_SERVICE_RESTART_instance;
  }
  function Codes_TRY_AGAIN_LATER_getInstance() {
    static_init();
    return Codes_TRY_AGAIN_LATER_instance;
  }
  function CloseReason(code, message) {
    this.d3j_1 = code;
    this.e3j_1 = message;
    var size = utf8Size(this.e3j_1);
    // Inline function 'kotlin.require' call
    if (!(size <= 123)) {
      var message_0 = 'Close reason message is too long: ' + size + ' bytes, but must not exceed ' + '123 bytes when UTF-8-encoded';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(CloseReason).f3j = function () {
    return Companion_getInstance().c3j(this.d3j_1);
  };
  protoOf(CloseReason).toString = function () {
    var tmp0_elvis_lhs = this.f3j();
    return 'CloseReason(reason=' + toString(tmp0_elvis_lhs == null ? this.d3j_1 : tmp0_elvis_lhs) + ', message=' + this.e3j_1 + ')';
  };
  protoOf(CloseReason).hashCode = function () {
    var result = this.d3j_1;
    result = imul(result, 31) + getStringHashCode(this.e3j_1) | 0;
    return result;
  };
  protoOf(CloseReason).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CloseReason))
      return false;
    if (!(this.d3j_1 === other.d3j_1))
      return false;
    if (!(this.e3j_1 === other.e3j_1))
      return false;
    return true;
  };
  function utf8Size(_this__u8e3s4) {
    var size = 0;
    var index = 0;
    while (index < _this__u8e3s4.length) {
      var bytes = utf8ByteCountAt(_this__u8e3s4, index);
      size = size + bytes | 0;
      index = index + (bytes === 4 ? 2 : 1) | 0;
    }
    return size;
  }
  function utf8Truncate(_this__u8e3s4, maxSize) {
    var size = 0;
    var index = 0;
    $l$loop: while (index < _this__u8e3s4.length) {
      var bytes = utf8ByteCountAt(_this__u8e3s4, index);
      if ((size + bytes | 0) > maxSize)
        break $l$loop;
      size = size + bytes | 0;
      index = index + (bytes === 4 ? 2 : 1) | 0;
    }
    return index === _this__u8e3s4.length ? _this__u8e3s4 : substring(_this__u8e3s4, 0, index);
  }
  function utf8ByteCountAt(_this__u8e3s4, index) {
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(_this__u8e3s4, index);
    var code = Char__toInt_impl_vasixd(this_0);
    return code < 128 ? 1 : code < 2048 ? 2 : isHighSurrogate(charCodeAt(_this__u8e3s4, index)) && (index + 1 | 0) < _this__u8e3s4.length && isLowSurrogate(charCodeAt(_this__u8e3s4, index + 1 | 0)) ? 4 : 3;
  }
  function validateSize(_this__u8e3s4) {
    // Inline function 'kotlin.require' call
    if (!(!_this__u8e3s4.l3j_1.i3j_1 || _this__u8e3s4.m3j_1.length <= 125)) {
      var message = 'Control frames must not exceed 125 bytes per RFC 6455, ' + ('but ' + _this__u8e3s4.l3j_1.toString() + ' frame has ' + _this__u8e3s4.m3j_1.length + ' bytes');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function get_LOGGER() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return LOGGER;
  }
  var LOGGER;
  function get_IncomingProcessorCoroutineName() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return IncomingProcessorCoroutineName;
  }
  var IncomingProcessorCoroutineName;
  function get_OutgoingProcessorCoroutineName() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return OutgoingProcessorCoroutineName;
  }
  var OutgoingProcessorCoroutineName;
  function get_NORMAL_CLOSE() {
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    return NORMAL_CLOSE;
  }
  var NORMAL_CLOSE;
  var OUTGOING_CHANNEL_CONFIG;
  function DefaultWebSocketSession() {
  }
  function DefaultWebSocketSession_0(session, pingIntervalMillis, timeoutMillis, channelsConfig) {
    pingIntervalMillis = pingIntervalMillis === VOID ? 0n : pingIntervalMillis;
    timeoutMillis = timeoutMillis === VOID ? 15000n : timeoutMillis;
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_2().x3j_1 : channelsConfig;
    _init_properties_DefaultWebSocketSession_kt__469s0y();
    // Inline function 'kotlin.require' call
    if (!!isInterface(session, DefaultWebSocketSession)) {
      var message = 'Cannot wrap other DefaultWebSocketSession';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new DefaultWebSocketSessionImpl(session, pingIntervalMillis, timeoutMillis, channelsConfig.y3j_1, channelsConfig.z3j_1);
  }
  function runIncomingProcessor($this, ponger) {
    var tmp = get_IncomingProcessorCoroutineName().if(Dispatchers_getInstance().g22_1);
    return launch($this, tmp, VOID, DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0($this, ponger, null));
  }
  function runOutgoingProcessor($this) {
    var tmp = get_OutgoingProcessorCoroutineName().if(Dispatchers_getInstance().g22_1);
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    return launch($this, tmp, tmp_0, DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0($this, null));
  }
  function outgoingProcessorLoop($this, $completion) {
    var tmp = new $outgoingProcessorLoopCOROUTINE$($this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function sendCloseSequence($this, reason, exception, $completion) {
    exception = exception === VOID ? null : exception;
    var tmp = new $sendCloseSequenceCOROUTINE$($this, reason, exception, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function tryClose($this) {
    return $this.e3l_1.atomicfu$compareAndSet(false, true);
  }
  function runOrCancelPinger($this) {
    var interval = $this.h3l_1;
    var tmp;
    if ($this.e3l_1.kotlinx$atomicfu$value) {
      tmp = null;
    } else if (interval > 0n) {
      var tmp_0 = $this.x3k_1.v3j();
      var tmp_1 = $this.i3l_1;
      tmp = pinger($this, tmp_0, interval, tmp_1, DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0($this, null));
    } else {
      tmp = null;
    }
    var newPinger = tmp;
    var tmp0_safe_receiver = $this.y3k_1.atomicfu$getAndSet(newPinger);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.q28();
    var tmp2_safe_receiver = newPinger == null ? null : new ChannelResult(newPinger.k28(Companion_getInstance_1().k3l_1));
    if (tmp2_safe_receiver == null)
      null;
    else
      _ChannelResult___get_isSuccess__impl__odq1z9(tmp2_safe_receiver.u26_1);
    if ($this.e3l_1.kotlinx$atomicfu$value && !(newPinger == null)) {
      runOrCancelPinger($this);
    }
  }
  function checkMaxFrameSize($this, packet, frame, $completion) {
    var tmp = new $checkMaxFrameSizeCOROUTINE$($this, packet, frame, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function processIncomingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.x3l().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var current = accumulator;
      accumulator = element.y3l(current);
    }
    return accumulator;
  }
  function processOutgoingExtensions($this, frame) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = frame;
    var _iterator__ex2g4s = $this.x3l().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var current = accumulator;
      accumulator = element.z3l(current);
    }
    return accumulator;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.k3l_1 = new Pong(new Int8Array(0), NonDisposableHandle_instance);
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation) {
    this.i3m_1 = $incomingJob;
    this.j3m_1 = $outgoingJob;
    this.k3m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$start$slambda).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$start$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = this.i3m_1.m1s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i8_1 = 2;
            suspendResult = this.j3m_1.m1s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.k3m_1.a3l_1.q1s();
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
  protoOf(DefaultWebSocketSessionImpl$start$slambda).p2n = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$start$slambda(this.i3m_1, this.j3m_1, this.k3m_1, completion);
    i.l3m_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$start$slambda_0($incomingJob, $outgoingJob, this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$start$slambda($incomingJob, $outgoingJob, this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation) {
    this.u3m_1 = this$0;
    this.v3m_1 = $ponger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 39;
            this.g3n_1 = null;
            this.z3m_1 = null;
            this.y3m_1 = false;
            this.a3n_1 = Unit_instance;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.i8_1 = 2;
            continue $sm;
          case 2:
            this.j8_1 = 33;
            this.j8_1 = 32;
            this.k3n_1 = this.u3m_1.x3k_1.u3j();
            this.i8_1 = 3;
            continue $sm;
          case 3:
            this.d3n_1 = this.k3n_1;
            this.c3n_1 = null;
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.i8_1 = 5;
            continue $sm;
          case 5:
            this.i8_1 = 6;
            continue $sm;
          case 6:
            this.j8_1 = 29;
            this.j8_1 = 28;
            this.j3n_1 = this.d3n_1.t();
            this.i8_1 = 7;
            continue $sm;
          case 7:
            this.i8_1 = 8;
            suspendResult = this.j3n_1.m26(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            if (!suspendResult) {
              this.i8_1 = 26;
              continue $sm;
            }

            var e = this.j3n_1.v();
            this.i3n_1 = e;
            this.i8_1 = 9;
            continue $sm;
          case 9:
            this.h3n_1 = this.i3n_1;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.i2w('WebSocketSession(' + toString(this.w3m_1) + ') receiving frame ' + this.h3n_1.toString());
            }

            var tmp0_subject = this.h3n_1;
            if (tmp0_subject instanceof Close) {
              if (!this.u3m_1.v3j().o26()) {
                this.i8_1 = 18;
                var tmp_0 = this.u3m_1.v3j();
                var tmp1_elvis_lhs = readReason(this.h3n_1);
                suspendResult = tmp_0.j28(Close_init_$Create$(tmp1_elvis_lhs == null ? get_NORMAL_CLOSE() : tmp1_elvis_lhs), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.i8_1 = 19;
                continue $sm;
              }
            } else {
              if (tmp0_subject instanceof Pong) {
                var tmp2_safe_receiver = this.u3m_1.y3k_1.kotlinx$atomicfu$value;
                if (tmp2_safe_receiver == null) {
                  this.f3n_1 = null;
                  this.i8_1 = 17;
                  continue $sm;
                } else {
                  this.i8_1 = 16;
                  suspendResult = tmp2_safe_receiver.j28(this.h3n_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                if (tmp0_subject instanceof Ping) {
                  this.i8_1 = 15;
                  suspendResult = this.v3m_1.j28(this.h3n_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.i8_1 = 10;
                  suspendResult = checkMaxFrameSize(this.u3m_1, this.z3m_1, this.h3n_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

          case 10:
            if (!this.h3n_1.k3j_1) {
              if (this.g3n_1 == null) {
                this.g3n_1 = this.h3n_1;
              }
              if (this.z3m_1 == null) {
                this.z3m_1 = BytePacketBuilder();
              }
              writeFully(this.z3m_1, this.h3n_1.m3j_1);
              this.i8_1 = 21;
              continue $sm;
            } else {
              this.i8_1 = 11;
              continue $sm;
            }

          case 11:
            if (this.g3n_1 == null) {
              this.i8_1 = 14;
              suspendResult = this.u3m_1.c3l_1.j28(processIncomingExtensions(this.u3m_1, this.h3n_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 12;
              continue $sm;
            }

          case 12:
            writeFully(ensureNotNull(this.z3m_1), this.h3n_1.m3j_1);
            var defragmented = Companion_getInstance_5().m3n(true, this.g3n_1.l3j_1, readByteArray(build(this.z3m_1)), this.g3n_1.o3j_1, this.g3n_1.p3j_1, this.g3n_1.q3j_1);
            this.g3n_1 = null;
            this.i8_1 = 13;
            suspendResult = this.u3m_1.c3l_1.j28(processIncomingExtensions(this.u3m_1, defragmented), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            var tmp_1 = this;
            tmp_1.e3n_1 = Unit_instance;
            this.i8_1 = 20;
            continue $sm;
          case 14:
            this.i8_1 = 21;
            continue $sm;
          case 15:
            var tmp_2 = this;
            tmp_2.e3n_1 = Unit_instance;
            this.i8_1 = 20;
            continue $sm;
          case 16:
            var tmp_3 = this;
            tmp_3.f3n_1 = Unit_instance;
            this.i8_1 = 17;
            continue $sm;
          case 17:
            this.e3n_1 = this.f3n_1;
            this.i8_1 = 20;
            continue $sm;
          case 18:
            this.i8_1 = 19;
            continue $sm;
          case 19:
            this.y3m_1 = true;
            this.i8_1 = 22;
            var tmp_4 = this;
            continue $sm;
          case 20:
            if (false) {
              this.i8_1 = 9;
              continue $sm;
            }

            this.i8_1 = 21;
            continue $sm;
          case 21:
            this.i8_1 = 7;
            continue $sm;
          case 22:
            this.j8_1 = 32;
            cancelConsumed(this.d3n_1, this.c3n_1);
            this.j8_1 = 39;
            this.i8_1 = 23;
            continue $sm;
          case 23:
            this.j8_1 = 39;
            this.v3m_1.q28();
            var tmp0_safe_receiver = this.z3m_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.t3();
            }

            this.u3m_1.c3l_1.q28();
            if (!this.y3m_1) {
              this.i8_1 = 24;
              suspendResult = close(this.u3m_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 25;
              continue $sm;
            }

          case 24:
            this.i8_1 = 25;
            continue $sm;
          case 25:
            var tmp_5 = this;
            return Unit_instance;
          case 26:
            this.i8_1 = 27;
            var tmp_6 = this;
            continue $sm;
          case 27:
            this.j8_1 = 32;
            cancelConsumed(this.d3n_1, this.c3n_1);
            this.i8_1 = 31;
            continue $sm;
          case 28:
            this.j8_1 = 29;
            var tmp_7 = this.l8_1;
            if (tmp_7 instanceof Error) {
              var e_0 = this.l8_1;
              var tmp_8 = this;
              this.c3n_1 = e_0;
              throw e_0;
            } else {
              throw this.l8_1;
            }

          case 29:
            this.j8_1 = 32;
            var t = this.l8_1;
            cancelConsumed(this.d3n_1, this.c3n_1);
            throw t;
          case 30:
            this.j8_1 = 32;
            cancelConsumed(this.d3n_1, this.c3n_1);
            if (false) {
              this.i8_1 = 3;
              continue $sm;
            }

            this.i8_1 = 31;
            continue $sm;
          case 31:
            this.a3n_1 = Unit_instance;
            this.j8_1 = 39;
            this.i8_1 = 36;
            continue $sm;
          case 32:
            this.j8_1 = 33;
            var tmp_9 = this.l8_1;
            if (tmp_9 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.l8_1;
              var tmp_10 = this;
              tmp_10.a3n_1 = Unit_instance;
              this.j8_1 = 39;
              this.i8_1 = 36;
              continue $sm;
            } else {
              var tmp_11 = this.l8_1;
              if (tmp_11 instanceof Error) {
                var cause = this.l8_1;
                var tmp_12 = this;
                this.v3m_1.q28();
                tmp_12.a3n_1 = this.u3m_1.c3l_1.o28(cause);
                this.j8_1 = 39;
                this.i8_1 = 36;
                continue $sm;
              } else {
                throw this.l8_1;
              }
            }

          case 33:
            this.j8_1 = 39;
            this.b3n_1 = this.l8_1;
            this.v3m_1.q28();
            var tmp0_safe_receiver_0 = this.z3m_1;
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              tmp0_safe_receiver_0.t3();
            }

            this.u3m_1.c3l_1.q28();
            if (!this.y3m_1) {
              this.i8_1 = 34;
              suspendResult = close(this.u3m_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 35;
              continue $sm;
            }

          case 34:
            this.i8_1 = 35;
            continue $sm;
          case 35:
            throw this.b3n_1;
          case 36:
            this.x3m_1 = this.a3n_1;
            this.j8_1 = 39;
            this.v3m_1.q28();
            var tmp0_safe_receiver_1 = this.z3m_1;
            if (tmp0_safe_receiver_1 == null)
              null;
            else {
              tmp0_safe_receiver_1.t3();
            }

            this.u3m_1.c3l_1.q28();
            if (!this.y3m_1) {
              this.i8_1 = 37;
              suspendResult = close(this.u3m_1, CloseReason_init_$Create$(Codes_CLOSED_ABNORMALLY_getInstance(), 'Connection was closed without close frame'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 38;
              continue $sm;
            }

          case 37:
            this.i8_1 = 38;
            continue $sm;
          case 38:
            return Unit_instance;
          case 39:
            throw this.l8_1;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.j8_1 === 39) {
          throw e_1;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runIncomingProcessor$slambda).p2n = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this.u3m_1, this.v3m_1, completion);
    i.w3m_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runIncomingProcessor$slambda_0(this$0, $ponger, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runIncomingProcessor$slambda(this$0, $ponger, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation) {
    this.v3n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 13;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.i8_1 = 2;
            continue $sm;
          case 2:
            this.j8_1 = 9;
            this.j8_1 = 4;
            this.i8_1 = 3;
            suspendResult = outgoingProcessorLoop(this.v3n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.j8_1 = 13;
            this.i8_1 = 11;
            continue $sm;
          case 4:
            this.j8_1 = 9;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.l8_1;
              this.j8_1 = 13;
              this.i8_1 = 11;
              continue $sm;
            } else {
              var tmp_1 = this.l8_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var _unused_var__etf5q3_0 = this.l8_1;
                this.j8_1 = 13;
                this.i8_1 = 11;
                continue $sm;
              } else {
                var tmp_2 = this.l8_1;
                if (tmp_2 instanceof CancellationException) {
                  var _unused_var__etf5q3_1 = this.l8_1;
                  this.i8_1 = 5;
                  suspendResult = sendCloseSequence(this.v3n_1, CloseReason_init_$Create$(Codes_NORMAL_getInstance(), ''), VOID, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_3 = this.l8_1;
                  if (tmp_3 instanceof ChannelIOException) {
                    var _unused_var__etf5q3_2 = this.l8_1;
                    this.j8_1 = 13;
                    this.i8_1 = 11;
                    continue $sm;
                  } else {
                    var tmp_4 = this.l8_1;
                    if (tmp_4 instanceof Error) {
                      var cause = this.l8_1;
                      this.v3n_1.d3l_1.p1s(CancellationException_init_$Create$('Failed to send frame', cause));
                      this.i8_1 = 6;
                      suspendResult = closeExceptionally(this.v3n_1.x3k_1, cause, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      throw this.l8_1;
                    }
                  }
                }
              }
            }

          case 5:
            this.j8_1 = 13;
            this.i8_1 = 11;
            continue $sm;
          case 6:
            this.j8_1 = 13;
            this.i8_1 = 7;
            continue $sm;
          case 7:
            this.j8_1 = 13;
            this.v3n_1.d3l_1.s28();
            this.i8_1 = 8;
            suspendResult = close(this.v3n_1.x3k_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return Unit_instance;
          case 9:
            this.j8_1 = 13;
            this.x3n_1 = this.l8_1;
            this.v3n_1.d3l_1.s28();
            this.i8_1 = 10;
            suspendResult = close(this.v3n_1.x3k_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            throw this.x3n_1;
          case 11:
            this.j8_1 = 13;
            this.v3n_1.d3l_1.s28();
            this.i8_1 = 12;
            suspendResult = close(this.v3n_1.x3k_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 12:
            return Unit_instance;
          case 13:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 13) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda).p2n = function ($this$launch, completion) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this.v3n_1, completion);
    i.w3n_1 = $this$launch;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOutgoingProcessor$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation) {
    this.g3o_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).i3o = function (it, $completion) {
    var tmp = this.j3o(it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).e9 = function (p1, $completion) {
    return this.i3o(p1 instanceof CloseReason ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = sendCloseSequence(this.g3o_1, this.h3o_1, IOException_init_$Create$('Ping timeout'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(DefaultWebSocketSessionImpl$runOrCancelPinger$slambda).j3o = function (it, completion) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this.g3o_1, completion);
    i.h3o_1 = it;
    return i;
  };
  function DefaultWebSocketSessionImpl$runOrCancelPinger$slambda_0(this$0, resultContinuation) {
    var i = new DefaultWebSocketSessionImpl$runOrCancelPinger$slambda(this$0, resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.i3o(it, $completion);
    }, 1);
  }
  function $outgoingProcessorLoopCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i3k_1 = _this__u8e3s4;
  }
  protoOf($outgoingProcessorLoopCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 7;
            this.k3k_1 = this.i3k_1.d3l_1.t();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.i8_1 = 2;
            suspendResult = this.k3k_1.m26(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.i8_1 = 6;
              continue $sm;
            }

            var frame = this.k3k_1.v();
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.i2w('Sending ' + frame.toString() + ' from session ' + toString(this.i3k_1));
            }

            if (frame instanceof Close) {
              this.i8_1 = 3;
              suspendResult = sendCloseSequence(this.i3k_1, readReason(frame), VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0;
              if (frame instanceof Text) {
                tmp_0 = true;
              } else {
                tmp_0 = frame instanceof Binary;
              }
              if (tmp_0) {
                this.j3k_1 = processOutgoingExtensions(this.i3k_1, frame);
                this.i8_1 = 4;
                continue $sm;
              } else {
                this.j3k_1 = frame;
                this.i8_1 = 4;
                continue $sm;
              }
            }

          case 3:
            this.i8_1 = 6;
            var tmp_1 = this;
            continue $sm;
          case 4:
            var processedFrame = this.j3k_1;
            this.i8_1 = 5;
            suspendResult = this.i3k_1.x3k_1.v3j().j28(processedFrame, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.i8_1 = 1;
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
  function $sendCloseSequenceCOROUTINE$(_this__u8e3s4, reason, exception, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t3k_1 = _this__u8e3s4;
    this.u3k_1 = reason;
    this.v3k_1 = exception;
  }
  protoOf($sendCloseSequenceCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            if (!tryClose(this.t3k_1))
              return Unit_instance;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.i2w('Sending Close Sequence for session ' + toString(this.t3k_1) + ' with reason ' + toString_0(this.u3k_1) + ' and exception ' + toString_0(this.v3k_1));
            }

            this.t3k_1.a3l_1.i1y();
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.u3k_1;
            tmp_0.w3k_1 = tmp0_elvis_lhs == null ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : tmp0_elvis_lhs;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 5;
            runOrCancelPinger(this.t3k_1);
            if (!(this.w3k_1.d3j_1 === Codes_CLOSED_ABNORMALLY_getInstance().z3i_1)) {
              this.i8_1 = 2;
              suspendResult = this.t3k_1.x3k_1.v3j().j28(Close_init_$Create$(this.w3k_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 2:
            this.i8_1 = 3;
            continue $sm;
          case 3:
            this.j8_1 = 6;
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.j8_1 = 6;
            this.t3k_1.z3k_1.g1y(this.w3k_1);
            if (!(this.v3k_1 == null)) {
              this.t3k_1.d3l_1.o28(this.v3k_1);
              this.t3k_1.c3l_1.o28(this.v3k_1);
            }

            return Unit_instance;
          case 5:
            this.j8_1 = 6;
            var t = this.l8_1;
            this.t3k_1.z3k_1.g1y(this.w3k_1);
            if (!(this.v3k_1 == null)) {
              this.t3k_1.d3l_1.o28(this.v3k_1);
              this.t3k_1.c3l_1.o28(this.v3k_1);
            }

            throw t;
          case 6:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 6) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function $checkMaxFrameSizeCOROUTINE$(_this__u8e3s4, packet, frame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t3l_1 = _this__u8e3s4;
    this.u3l_1 = packet;
    this.v3l_1 = frame;
  }
  protoOf($checkMaxFrameSizeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp_0 = this;
            var tmp_1 = this.v3l_1.m3j_1.length;
            var tmp0_safe_receiver = this.u3l_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_size(tmp0_safe_receiver);
            tmp_0.w3l_1 = tmp_1 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
            if (fromInt(this.w3l_1) > this.t3l_1.t3j()) {
              var tmp2_safe_receiver = this.u3l_1;
              if (tmp2_safe_receiver == null)
                null;
              else {
                tmp2_safe_receiver.t3();
              }
              this.i8_1 = 2;
              suspendResult = close(this.t3l_1, CloseReason_init_$Create$(Codes_TOO_BIG_getInstance(), 'Frame is too big: ' + this.w3l_1 + '. Max size is ' + this.t3l_1.t3j().toString()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              continue $sm;
            }

          case 1:
            return Unit_instance;
          case 2:
            throw new FrameTooBigException(fromInt(this.w3l_1));
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
  function DefaultWebSocketSessionImpl(raw, pingIntervalMillis, timeoutMillis, incomingFramesConfig, outgoingFramesConfig) {
    Companion_getInstance_1();
    this.x3k_1 = raw;
    this.y3k_1 = atomic$ref$1(null);
    this.z3k_1 = CompletableDeferred();
    this.a3l_1 = Job();
    this.b3l_1 = this.x3k_1.g1r().gf(Key_instance).if(this.a3l_1).if(new CoroutineName('ws-default'));
    this.c3l_1 = from(Factory_getInstance(), incomingFramesConfig);
    this.d3l_1 = from(Factory_getInstance(), outgoingFramesConfig);
    this.e3l_1 = atomic$boolean$1(false);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f3l_1 = ArrayList_init_$Create$();
    this.g3l_1 = atomic$boolean$1(false);
    this.h3l_1 = pingIntervalMillis;
    this.i3l_1 = timeoutMillis;
    this.j3l_1 = this.z3k_1;
  }
  protoOf(DefaultWebSocketSessionImpl).g1r = function () {
    return this.b3l_1;
  };
  protoOf(DefaultWebSocketSessionImpl).u3j = function () {
    return this.c3l_1;
  };
  protoOf(DefaultWebSocketSessionImpl).v3j = function () {
    return this.d3l_1;
  };
  protoOf(DefaultWebSocketSessionImpl).x3l = function () {
    return this.f3l_1;
  };
  protoOf(DefaultWebSocketSessionImpl).s3j = function (value) {
    this.x3k_1.s3j(value);
  };
  protoOf(DefaultWebSocketSessionImpl).t3j = function () {
    return this.x3k_1.t3j();
  };
  protoOf(DefaultWebSocketSessionImpl).r3j = function (negotiatedExtensions) {
    if (!this.g3l_1.atomicfu$compareAndSet(false, true)) {
      // Inline function 'kotlin.error' call
      var message = 'WebSocket session ' + toString(this) + ' is already started.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$2 = 'Starting default WebSocketSession(' + toString(this) + ') ' + ('with negotiated extensions: ' + joinToString(negotiatedExtensions));
      this_0.i2w(tmp$ret$2);
    }
    this.f3l_1.i1(negotiatedExtensions);
    runOrCancelPinger(this);
    var incomingJob = runIncomingProcessor(this, ponger(this, this.v3j()));
    var outgoingJob = runOutgoingProcessor(this);
    launch(this, VOID, VOID, DefaultWebSocketSessionImpl$start$slambda_0(incomingJob, outgoingJob, this, null));
  };
  protoOf(DefaultWebSocketSessionImpl).m2e = function ($completion) {
    return this.x3k_1.m2e($completion);
  };
  var properties_initialized_DefaultWebSocketSession_kt_6cjlhc;
  function _init_properties_DefaultWebSocketSession_kt__469s0y() {
    if (!properties_initialized_DefaultWebSocketSession_kt_6cjlhc) {
      properties_initialized_DefaultWebSocketSession_kt_6cjlhc = true;
      LOGGER = KtorSimpleLogger('io.ktor.websocket.WebSocket');
      IncomingProcessorCoroutineName = new CoroutineName('ws-incoming-processor');
      OutgoingProcessorCoroutineName = new CoroutineName('ws-outgoing-processor');
      NORMAL_CLOSE = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), 'OK');
      var tmp0_safe_receiver = get_OUTGOING_CHANNEL_CAPACITY();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = new ChannelConfig(tmp0_safe_receiver, ChannelOverflow_SUSPEND_getInstance());
      }
      OUTGOING_CHANNEL_CONFIG = tmp;
    }
  }
  function readReason(_this__u8e3s4) {
    if (_this__u8e3s4.m3j_1.length < 2) {
      return null;
    }
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    writeFully(builder, _this__u8e3s4.m3j_1);
    var packet = builder;
    var code = packet.i1o();
    var message = readText(packet);
    return new CloseReason(code, message);
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).c1v = function () {
    return Unit_instance;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  protoOf(NonDisposableHandle).hashCode = function () {
    return 207988788;
  };
  protoOf(NonDisposableHandle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NonDisposableHandle))
      return false;
    return true;
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function FrameTooBigException(frameSize, cause) {
    cause = cause === VOID ? null : cause;
    Exception_init_$Init$(cause, this);
    captureStack(this, FrameTooBigException);
    this.k3o_1 = frameSize;
    delete this.message;
  }
  protoOf(FrameTooBigException).e = function () {
    var sizeSuffix = this.k3o_1 >= 0n ? ': ' + this.k3o_1.toString() : '';
    return 'Frame is too big' + sizeSuffix;
  };
  protoOf(FrameTooBigException).r1y = function () {
    return new FrameTooBigException(this.k3o_1, this);
  };
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_instance;
    static_init_called_0 = true;
    FrameType_TEXT_instance = new FrameType('TEXT', 0, false, 1);
    FrameType_BINARY_instance = new FrameType('BINARY', 1, false, 2);
    FrameType_CLOSE_instance = new FrameType('CLOSE', 2, true, 8);
    FrameType_PING_instance = new FrameType('PING', 3, true, 9);
    FrameType_PONG_instance = new FrameType('PONG', 4, true, 10);
    if (Companion_instance_3 == null) {
      Companion_instance;
      new Companion_2();
    }
  }
  var FrameType_TEXT_instance;
  var FrameType_BINARY_instance;
  var FrameType_CLOSE_instance;
  var FrameType_PING_instance;
  var FrameType_PONG_instance;
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp0 = get_entries_0();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator = tmp0.t();
      if (!iterator.u()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.v();
      if (!iterator.u()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      var maxValue = maxElem.j3j_1;
      do {
        var e = iterator.v();
        var v = e.j3j_1;
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.u());
      tmp$ret$0 = maxElem;
    }
    tmp.l3o_1 = ensureNotNull(tmp$ret$0).j3j_1;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = this.l3o_1 + 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_3 = Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp0_0 = get_entries_0();
      var tmp$ret$5;
      $l$block_2: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var _iterator__ex2g4s = tmp0_0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element.j3j_1 === tmp_4) {
            if (found) {
              tmp$ret$5 = null;
              break $l$block_2;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$5 = null;
          break $l$block_2;
        }
        tmp$ret$5 = single;
      }
      tmp_3[tmp_4] = tmp$ret$5;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.m3o_1 = tmp_3;
  }
  var Companion_instance_3;
  function values_0() {
    static_init_0();
    return [FrameType_TEXT_getInstance(), FrameType_BINARY_getInstance(), FrameType_CLOSE_getInstance(), FrameType_PING_getInstance(), FrameType_PONG_getInstance()];
  }
  function get_entries_0() {
    static_init_0();
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var $ENTRIES_0;
  function FrameType(name, ordinal, controlFrame, opcode) {
    Enum.call(this, name, ordinal);
    this.i3j_1 = controlFrame;
    this.j3j_1 = opcode;
  }
  function FrameType_TEXT_getInstance() {
    static_init_0();
    return FrameType_TEXT_instance;
  }
  function FrameType_BINARY_getInstance() {
    static_init_0();
    return FrameType_BINARY_instance;
  }
  function FrameType_CLOSE_getInstance() {
    static_init_0();
    return FrameType_CLOSE_instance;
  }
  function FrameType_PING_getInstance() {
    static_init_0();
    return FrameType_PING_instance;
  }
  function FrameType_PONG_getInstance() {
    static_init_0();
    return FrameType_PONG_instance;
  }
  function get_PongerCoroutineName() {
    _init_properties_PingPong_kt__9aqxey();
    return PongerCoroutineName;
  }
  var PongerCoroutineName;
  function get_PingerCoroutineName() {
    _init_properties_PingPong_kt__9aqxey();
    return PingerCoroutineName;
  }
  var PingerCoroutineName;
  function ponger(_this__u8e3s4, outgoing) {
    _init_properties_PingPong_kt__9aqxey();
    var channel = Channel(5);
    var tmp = get_PongerCoroutineName();
    launch(_this__u8e3s4, tmp, VOID, ponger$slambda_0(channel, outgoing, null));
    return channel;
  }
  function pinger(_this__u8e3s4, outgoing, periodMillis, timeoutMillis, onTimeout) {
    _init_properties_PingPong_kt__9aqxey();
    var actorJob = Job();
    var channel = Channel(2147483647);
    var tmp = actorJob.if(get_PingerCoroutineName());
    launch(_this__u8e3s4, tmp, VOID, pinger$slambda_0(periodMillis, timeoutMillis, onTimeout, channel, outgoing, null));
    var tmp_0 = ensureNotNull(_this__u8e3s4.g1r().v8(Key_instance));
    tmp_0.i1s(pinger$lambda(actorJob));
    return channel;
  }
  function ponger$slambda($channel, $outgoing, resultContinuation) {
    this.v3o_1 = $channel;
    this.w3o_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ponger$slambda).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ponger$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ponger$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 14;
            this.j8_1 = 13;
            this.b3p_1 = this.v3o_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.z3o_1 = this.b3p_1;
            this.y3o_1 = null;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            this.i8_1 = 3;
            continue $sm;
          case 3:
            this.j8_1 = 10;
            this.j8_1 = 9;
            this.a3p_1 = this.z3o_1.t();
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.i8_1 = 5;
            suspendResult = this.a3p_1.m26(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.i8_1 = 7;
              continue $sm;
            }

            var e = this.a3p_1.v();
            get_LOGGER().i2w('Received ping message, sending pong message');
            this.i8_1 = 6;
            suspendResult = this.w3o_1.j28(new Pong(e.m3j_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.i8_1 = 4;
            continue $sm;
          case 7:
            this.i8_1 = 8;
            var tmp_0 = this;
            continue $sm;
          case 8:
            this.j8_1 = 13;
            cancelConsumed(this.z3o_1, this.y3o_1);
            this.i8_1 = 12;
            continue $sm;
          case 9:
            this.j8_1 = 10;
            var tmp_1 = this.l8_1;
            if (tmp_1 instanceof Error) {
              var e_0 = this.l8_1;
              var tmp_2 = this;
              this.y3o_1 = e_0;
              throw e_0;
            } else {
              throw this.l8_1;
            }

          case 10:
            this.j8_1 = 13;
            var t = this.l8_1;
            cancelConsumed(this.z3o_1, this.y3o_1);
            throw t;
          case 11:
            this.j8_1 = 13;
            cancelConsumed(this.z3o_1, this.y3o_1);
            if (false) {
              this.i8_1 = 1;
              continue $sm;
            }

            this.i8_1 = 12;
            continue $sm;
          case 12:
            this.j8_1 = 14;
            this.i8_1 = 15;
            continue $sm;
          case 13:
            this.j8_1 = 14;
            var tmp_3 = this.l8_1;
            if (tmp_3 instanceof ClosedSendChannelException) {
              var _unused_var__etf5q3 = this.l8_1;
              this.i8_1 = 15;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 14:
            throw this.l8_1;
          case 15:
            this.j8_1 = 14;
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.j8_1 === 14) {
          throw e_1;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(ponger$slambda).p2n = function ($this$launch, completion) {
    var i = new ponger$slambda(this.v3o_1, this.w3o_1, completion);
    i.x3o_1 = $this$launch;
    return i;
  };
  function ponger$slambda_0($channel, $outgoing, resultContinuation) {
    var i = new ponger$slambda($channel, $outgoing, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function pinger$slambda$slambda($channel, resultContinuation) {
    this.k3p_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda).o2n = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.p2n($this$withTimeoutOrNull, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(pinger$slambda$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.i8_1 = 4;
              continue $sm;
            }

            this.i8_1 = 2;
            suspendResult = this.k3p_1.m28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i8_1 = 1;
            continue $sm;
          case 3:
            throw this.l8_1;
          case 4:
            return Unit_instance;
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
  protoOf(pinger$slambda$slambda).p2n = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda(this.k3p_1, completion);
    i.l3p_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_0($channel, resultContinuation) {
    var i = new pinger$slambda$slambda($channel, resultContinuation);
    return constructCallableReference(function ($this$withTimeoutOrNull, $completion) {
      return i.o2n($this$withTimeoutOrNull, $completion);
    }, 1);
  }
  function pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation) {
    this.u3p_1 = $outgoing;
    this.v3p_1 = $pingMessage;
    this.w3p_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda$slambda_1).o2n = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.p2n($this$withTimeoutOrNull, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(pinger$slambda$slambda_1).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            get_LOGGER().i2w('WebSocket Pinger: sending ping frame');
            this.i8_1 = 1;
            suspendResult = this.u3p_1.j28(new Ping(toByteArray(this.v3p_1, Charsets_getInstance().o2o_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.i8_1 = 5;
              continue $sm;
            }

            this.i8_1 = 3;
            suspendResult = this.w3p_1.m28(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.y3p_1 = suspendResult;
            if (decodeToString(this.y3p_1.m3j_1, 0, 0 + this.y3p_1.m3j_1.length | 0) === this.v3p_1) {
              var this_0 = get_LOGGER();
              if (get_isTraceEnabled(this_0)) {
                this_0.i2w('WebSocket Pinger: received valid pong frame ' + this.y3p_1.toString());
              }
              this.i8_1 = 5;
              continue $sm;
            } else {
              this.i8_1 = 4;
              continue $sm;
            }

          case 4:
            var this_1 = get_LOGGER();
            if (get_isTraceEnabled(this_1)) {
              this_1.i2w('WebSocket Pinger: received invalid pong frame ' + this.y3p_1.toString() + ', continue waiting');
            }

            this.i8_1 = 2;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 6) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda$slambda_1).p2n = function ($this$withTimeoutOrNull, completion) {
    var i = new pinger$slambda$slambda_1(this.u3p_1, this.v3p_1, this.w3p_1, completion);
    i.x3p_1 = $this$withTimeoutOrNull;
    return i;
  };
  function pinger$slambda$slambda_2($outgoing, $pingMessage, $channel, resultContinuation) {
    var i = new pinger$slambda$slambda_1($outgoing, $pingMessage, $channel, resultContinuation);
    return constructCallableReference(function ($this$withTimeoutOrNull, $completion) {
      return i.o2n($this$withTimeoutOrNull, $completion);
    }, 1);
  }
  function pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    this.h3q_1 = $periodMillis;
    this.i3q_1 = $timeoutMillis;
    this.j3q_1 = $onTimeout;
    this.k3q_1 = $channel;
    this.l3q_1 = $outgoing;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(pinger$slambda).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(pinger$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(pinger$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 8;
            var this_0 = get_LOGGER();
            if (get_isTraceEnabled(this_0)) {
              this_0.i2w('Starting WebSocket pinger coroutine with period ' + this.h3q_1.toString() + ' ms and timeout ' + this.i3q_1.toString() + ' ms');
            }

            this.o3q_1 = Random(getTimeMillis());
            this.n3q_1 = new Int8Array(32);
            this.j8_1 = 7;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.i8_1 = 6;
              continue $sm;
            }

            this.i8_1 = 2;
            suspendResult = withTimeoutOrNull(this.h3q_1, pinger$slambda$slambda_0(this.k3q_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o3q_1.xg(this.n3q_1);
            var pingMessage = '[ping ' + toHexString(this.n3q_1) + ' ping]';
            this.i8_1 = 3;
            suspendResult = withTimeoutOrNull(this.i3q_1, pinger$slambda$slambda_2(this.l3q_1, pingMessage, this.k3q_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rc = suspendResult;
            if (rc == null) {
              get_LOGGER().i2w('WebSocket pinger has timed out');
              this.i8_1 = 5;
              suspendResult = this.j3q_1(CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), 'Ping timeout'), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 4;
              continue $sm;
            }

          case 4:
            this.i8_1 = 1;
            continue $sm;
          case 5:
            this.i8_1 = 6;
            continue $sm;
          case 6:
            this.j8_1 = 8;
            this.i8_1 = 9;
            continue $sm;
          case 7:
            this.j8_1 = 8;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof CancellationException) {
              var ignore = this.l8_1;
              this.i8_1 = 9;
              continue $sm;
            } else {
              var tmp_1 = this.l8_1;
              if (tmp_1 instanceof ClosedReceiveChannelException) {
                var ignore_0 = this.l8_1;
                this.i8_1 = 9;
                continue $sm;
              } else {
                var tmp_2 = this.l8_1;
                if (tmp_2 instanceof ClosedSendChannelException) {
                  var ignore_1 = this.l8_1;
                  this.i8_1 = 9;
                  continue $sm;
                } else {
                  var tmp_3 = this.l8_1;
                  if (tmp_3 instanceof ClosedByteChannelException) {
                    var ignore_2 = this.l8_1;
                    this.i8_1 = 9;
                    continue $sm;
                  } else {
                    throw this.l8_1;
                  }
                }
              }
            }

          case 8:
            throw this.l8_1;
          case 9:
            this.j8_1 = 8;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 8) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(pinger$slambda).p2n = function ($this$launch, completion) {
    var i = new pinger$slambda(this.h3q_1, this.i3q_1, this.j3q_1, this.k3q_1, this.l3q_1, completion);
    i.m3q_1 = $this$launch;
    return i;
  };
  function pinger$slambda_0($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation) {
    var i = new pinger$slambda($periodMillis, $timeoutMillis, $onTimeout, $channel, $outgoing, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function pinger$lambda($actorJob) {
    return function (it) {
      $actorJob.q1s();
      return Unit_instance;
    };
  }
  var properties_initialized_PingPong_kt_fbfhmc;
  function _init_properties_PingPong_kt__9aqxey() {
    if (!properties_initialized_PingPong_kt_fbfhmc) {
      properties_initialized_PingPong_kt_fbfhmc = true;
      PongerCoroutineName = new CoroutineName('ws-ponger');
      PingerCoroutineName = new CoroutineName('ws-pinger');
    }
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = new WebSocketChannelsConfig();
    this_0.y3j_1 = this_0.p3q();
    this_0.z3j_1 = this_0.p3q();
    tmp.x3j_1 = this_0;
  }
  var Companion_instance_4;
  function Companion_getInstance_2() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function WebSocketChannelsConfig() {
    Companion_getInstance_2();
    this.y3j_1 = Companion_getInstance_3().q3q_1;
    this.z3j_1 = Companion_getInstance_3().q3q_1;
  }
  protoOf(WebSocketChannelsConfig).p3q = function () {
    return Companion_getInstance_3().q3q_1;
  };
  function from(_this__u8e3s4, config) {
    // Inline function 'kotlin.with' call
    var tmp;
    if (config.r3q_1 === 2147483647) {
      tmp = Channel(2147483647);
    } else if (config.s3q_1.equals(ChannelOverflow_SUSPEND_getInstance())) {
      tmp = Channel(config.r3q_1, BufferOverflow_SUSPEND_getInstance());
    } else if (config.s3q_1.equals(ChannelOverflow_CLOSE_getInstance())) {
      tmp = new BoundedChannel(config.r3q_1);
    } else {
      // Inline function 'kotlin.error' call
      var message = 'Unsupported channel config.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function Companion_4() {
    Companion_instance_5 = this;
    this.q3q_1 = new ChannelConfig(2147483647, ChannelOverflow_SUSPEND_getInstance());
  }
  var Companion_instance_5;
  function Companion_getInstance_3() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function ChannelConfig(capacity, onOverflow) {
    Companion_getInstance_3();
    this.r3q_1 = capacity;
    this.s3q_1 = onOverflow;
  }
  protoOf(ChannelConfig).t3q = function () {
    return this.s3q_1.equals(ChannelOverflow_SUSPEND_getInstance()) && !(this.r3q_1 === 2147483647);
  };
  var static_init_called_1;
  function static_init_1() {
    if (static_init_called_1)
      return Unit_instance;
    static_init_called_1 = true;
    ChannelOverflow_SUSPEND_instance = new ChannelOverflow('SUSPEND', 0);
    ChannelOverflow_CLOSE_instance = new ChannelOverflow('CLOSE', 1);
  }
  var ChannelOverflow_SUSPEND_instance;
  var ChannelOverflow_CLOSE_instance;
  function ChannelOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BoundedChannel$Companion$createDelegate$lambda($channel) {
    return function (it) {
      var tmp;
      var tmp_0;
      if ($channel._v == null) {
        throwUninitializedPropertyAccessException('channel');
      } else {
        tmp_0 = $channel._v;
      }
      if (!tmp_0.o26()) {
        var tmp_1;
        if ($channel._v == null) {
          throwUninitializedPropertyAccessException('channel');
        } else {
          tmp_1 = $channel._v;
        }
        tmp_1.o28(new ChannelOverflowException('Channel overflowed'));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Companion_5() {
  }
  protoOf(Companion_5).u3q = function (capacity) {
    var channel = {_v: null};
    var tmp = BufferOverflow_DROP_OLDEST_getInstance();
    // Inline function 'kotlin.also' call
    var this_0 = Channel(capacity, tmp, BoundedChannel$Companion$createDelegate$lambda(channel));
    channel._v = this_0;
    return this_0;
  };
  var Companion_instance_6;
  function Companion_getInstance_4() {
    return Companion_instance_6;
  }
  function BoundedChannel(capacity, delegate) {
    delegate = delegate === VOID ? Companion_instance_6.u3q(capacity) : delegate;
    this.v3q_1 = delegate;
  }
  protoOf(BoundedChannel).w3q = function (element) {
    var result = this.v3q_1.k28(element);
    if (!_ChannelResult___get_isSuccess__impl__odq1z9(result) && !_ChannelResult___get_isClosed__impl__mg7kuu(result)) {
      this.o28(new ChannelOverflowException('Channel overflowed'));
    }
    return result;
  };
  protoOf(BoundedChannel).k28 = function (element) {
    return this.w3q(element);
  };
  protoOf(BoundedChannel).x3q = function (element, $completion) {
    return this.v3q_1.j28(element, $completion);
  };
  protoOf(BoundedChannel).j28 = function (element, $completion) {
    return this.x3q(element, $completion);
  };
  protoOf(BoundedChannel).o28 = function (cause) {
    return this.v3q_1.o28(cause);
  };
  protoOf(BoundedChannel).o26 = function () {
    return this.v3q_1.o26();
  };
  protoOf(BoundedChannel).y3q = function ($completion) {
    return this.v3q_1.m28($completion);
  };
  protoOf(BoundedChannel).m28 = function ($completion) {
    return this.y3q($completion);
  };
  protoOf(BoundedChannel).t = function () {
    return this.v3q_1.t();
  };
  protoOf(BoundedChannel).p1s = function (cause) {
    this.v3q_1.p1s(cause);
  };
  function ChannelOverflowException(message) {
    RuntimeException_init_$Init$(message, this);
    captureStack(this, ChannelOverflowException);
  }
  function ChannelOverflow_SUSPEND_getInstance() {
    static_init_1();
    return ChannelOverflow_SUSPEND_instance;
  }
  function ChannelOverflow_CLOSE_getInstance() {
    static_init_1();
    return ChannelOverflow_CLOSE_instance;
  }
  function WebSocketExtension() {
  }
  function WebSocketExtensionsConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.b3r_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.c3r_1 = [false, false, false];
  }
  protoOf(WebSocketExtensionsConfig).p30 = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.b3r_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = item();
      destination.c1(tmp$ret$2);
    }
    return destination;
  };
  function parametersToString($this) {
    return $this.e3r_1.r() ? '' : '; ' + joinToString($this.e3r_1, ';');
  }
  function WebSocketExtensionHeader(name, parameters) {
    this.d3r_1 = name;
    this.e3r_1 = parameters;
  }
  protoOf(WebSocketExtensionHeader).toString = function () {
    return this.d3r_1 + ' ' + parametersToString(this);
  };
  function parseWebSocketExtensions(value) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(value, [',']);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var extension = split(item, [';']);
      // Inline function 'kotlin.text.trim' call
      var this_1 = first(extension);
      var name = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
      // Inline function 'kotlin.collections.map' call
      var this_2 = drop(extension, 1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
      var _iterator__ex2g4s_0 = this_2.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.text.trim' call
        var tmp$ret$6 = toString(trim(isCharSequence(item_0) ? item_0 : THROW_CCE()));
        destination_0.c1(tmp$ret$6);
      }
      var parameters = destination_0;
      var tmp$ret$2 = new WebSocketExtensionHeader(name, parameters);
      destination.c1(tmp$ret$2);
    }
    return destination;
  }
  function WebSocketSession() {
  }
  function close(_this__u8e3s4, reason, $completion) {
    reason = reason === VOID ? CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '') : reason;
    var tmp = new $closeCOROUTINE$(_this__u8e3s4, reason, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function closeExceptionally(_this__u8e3s4, cause, $completion) {
    var tmp;
    if (cause instanceof CancellationException) {
      tmp = CloseReason_init_$Create$(Codes_NORMAL_getInstance(), '');
    } else {
      var message = utf8Truncate(cause.toString(), 123);
      tmp = CloseReason_init_$Create$(Codes_INTERNAL_ERROR_getInstance(), message);
    }
    var reason = tmp;
    return close(_this__u8e3s4, reason, $completion);
  }
  function $closeCOROUTINE$(_this__u8e3s4, reason, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n3r_1 = _this__u8e3s4;
    this.o3r_1 = reason;
  }
  protoOf($closeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = this.n3r_1.w3j(Close_init_$Create$(this.o3r_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i8_1 = 2;
            suspendResult = this.n3r_1.m2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j8_1 = 4;
            this.i8_1 = 5;
            continue $sm;
          case 3:
            this.j8_1 = 4;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var _unused_var__etf5q3 = this.l8_1;
              this.i8_1 = 5;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 4:
            throw this.l8_1;
          case 5:
            this.j8_1 = 4;
            return Unit_instance;
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
  function Binary_init_$Init$(fin, data, $this) {
    Binary.call($this, fin, data, false, false, false);
    return $this;
  }
  function Binary_init_$Create$(fin, data) {
    return Binary_init_$Init$(fin, data, objectCreate(protoOf(Binary)));
  }
  function Text_init_$Init$(fin, data, $this) {
    Text.call($this, fin, data, false, false, false);
    return $this;
  }
  function Text_init_$Init$_0(text, $this) {
    Text_init_$Init$(true, toByteArray(text), $this);
    return $this;
  }
  function Text_init_$Create$(text) {
    return Text_init_$Init$_0(text, objectCreate(protoOf(Text)));
  }
  function Close_init_$Init$(reason, $this) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    builder.q1p(reason.d3j_1);
    writeText(builder, reason.e3j_1);
    Close_init_$Init$_0(builder, $this);
    return $this;
  }
  function Close_init_$Create$(reason) {
    return Close_init_$Init$(reason, objectCreate(protoOf(Close)));
  }
  function Close_init_$Init$_0(packet, $this) {
    Close.call($this, readByteArray(packet));
    return $this;
  }
  function Close_init_$Init$_1($this) {
    Close.call($this, Companion_getInstance_5().l3n_1);
    return $this;
  }
  function Close_init_$Create$_0() {
    return Close_init_$Init$_1(objectCreate(protoOf(Close)));
  }
  function Binary(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_BINARY_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  function Text(fin, data, rsv1, rsv2, rsv3) {
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    Frame.call(this, fin, FrameType_TEXT_getInstance(), data, NonDisposableHandle_instance, rsv1, rsv2, rsv3);
  }
  function Close(data) {
    Frame.call(this, true, FrameType_CLOSE_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  function Ping(data) {
    Frame.call(this, true, FrameType_PING_getInstance(), data, NonDisposableHandle_instance, false, false, false);
  }
  function Pong(data, disposableHandle) {
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    Frame.call(this, true, FrameType_PONG_getInstance(), data, disposableHandle, false, false, false);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.l3n_1 = new Int8Array(0);
  }
  protoOf(Companion_6).m3n = function (fin, frameType, data, rsv1, rsv2, rsv3) {
    var tmp;
    switch (frameType.a1_1) {
      case 1:
        tmp = new Binary(fin, data, rsv1, rsv2, rsv3);
        break;
      case 0:
        tmp = new Text(fin, data, rsv1, rsv2, rsv3);
        break;
      case 2:
        tmp = new Close(data);
        break;
      case 3:
        tmp = new Ping(data);
        break;
      case 4:
        tmp = new Pong(data, NonDisposableHandle_instance);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Companion_instance_7;
  function Companion_getInstance_5() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function Frame(fin, frameType, data, disposableHandle, rsv1, rsv2, rsv3) {
    Companion_getInstance_5();
    disposableHandle = disposableHandle === VOID ? NonDisposableHandle_instance : disposableHandle;
    rsv1 = rsv1 === VOID ? false : rsv1;
    rsv2 = rsv2 === VOID ? false : rsv2;
    rsv3 = rsv3 === VOID ? false : rsv3;
    this.k3j_1 = fin;
    this.l3j_1 = frameType;
    this.m3j_1 = data;
    this.n3j_1 = disposableHandle;
    this.o3j_1 = rsv1;
    this.p3j_1 = rsv2;
    this.q3j_1 = rsv3;
    validateSize(this);
  }
  protoOf(Frame).toString = function () {
    return 'Frame ' + this.l3j_1.toString() + ' (fin=' + this.k3j_1 + ', buffer len = ' + this.m3j_1.length + ')';
  };
  function get_OUTGOING_CHANNEL_CAPACITY() {
    return OUTGOING_CHANNEL_CAPACITY;
  }
  var OUTGOING_CHANNEL_CAPACITY;
  //region block: post-declaration
  protoOf(DefaultWebSocketSessionImpl).w3j = send;
  defineProp(protoOf(FrameTooBigException), 'message', function () {
    return this.e();
  });
  protoOf(BoundedChannel).q28 = close$default;
  protoOf(BoundedChannel).s28 = cancel$default;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Companion_instance_6 = new Companion_5();
  OUTGOING_CHANNEL_CAPACITY = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Codes_CLOSED_ABNORMALLY_getInstance;
  _.$_$.b = Codes_NORMAL_getInstance;
  _.$_$.c = Companion_getInstance;
  _.$_$.d = Companion_getInstance_2;
  _.$_$.e = send;
  _.$_$.f = Binary_init_$Create$;
  _.$_$.g = Close_init_$Create$;
  _.$_$.h = Text_init_$Create$;
  _.$_$.i = CloseReason;
  _.$_$.j = DefaultWebSocketSession_0;
  _.$_$.k = DefaultWebSocketSession;
  _.$_$.l = WebSocketChannelsConfig;
  _.$_$.m = WebSocketExtensionsConfig;
  _.$_$.n = WebSocketExtension;
  _.$_$.o = WebSocketSession;
  _.$_$.p = from;
  _.$_$.q = parseWebSocketExtensions;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-websockets.js.map
