(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './ktor-ktor-utils.js', './kotlinx-atomicfu.js', './ktor-ktor-events.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './kotlinx-io-kotlinx-io-core.js', './ktor-ktor-http-cio.js', './ktor-ktor-websockets.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-atomicfu.js'), require('./ktor-ktor-events.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./ktor-ktor-http-cio.js'), require('./ktor-ktor-websockets.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-events'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-events' was not found. Please, check whether 'ktor-ktor-events' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-http-cio'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-http-cio' was not found. Please, check whether 'ktor-ktor-http-cio' is loaded prior to 'ktor-ktor-client-core'.");
    }
    if (typeof globalThis['ktor-ktor-websockets'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core'. Its dependency 'ktor-ktor-websockets' was not found. Please, check whether 'ktor-ktor-websockets' is loaded prior to 'ktor-ktor-client-core'.");
    }
    globalThis['ktor-ktor-client-core'] = factory(typeof globalThis['ktor-ktor-client-core'] === 'undefined' ? {} : globalThis['ktor-ktor-client-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-atomicfu'], globalThis['ktor-ktor-events'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['ktor-ktor-http-cio'], globalThis['ktor-ktor-websockets']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_ktor_ktor_http_cio, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var ensureNotNull = kotlin_kotlin.$_$.qg;
  var protoOf = kotlin_kotlin.$_$.zb;
  var objectCreate = kotlin_kotlin.$_$.yb;
  var CancellationException = kotlin_kotlin.$_$.q8;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.a4;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var CoroutineImpl = kotlin_kotlin.$_$.j9;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.i;
  var toString = kotlin_kotlin.$_$.cc;
  var getKClassFromExpression = kotlin_kotlin.$_$.rc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r8;
  var initMetadataForLambda = kotlin_kotlin.$_$.fb;
  var VOID = kotlin_kotlin.$_$.c;
  var constructCallableReference = kotlin_kotlin.$_$.ra;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cb;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var AttributesJsFn = kotlin_io_ktor_ktor_utils.$_$.o;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.n;
  var AutoCloseable = kotlin_kotlin.$_$.jf;
  var isInterface = kotlin_kotlin.$_$.pb;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s3;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.k1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s2;
  var arrayOf = kotlin_kotlin.$_$.mg;
  var createKType = kotlin_kotlin.$_$.qc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.m;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.ta;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.m9;
  var IllegalStateException = kotlin_kotlin.$_$.uf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.q4;
  var captureStack = kotlin_kotlin.$_$.ja;
  var defineProp = kotlin_kotlin.$_$.sa;
  var UnsupportedOperationException = kotlin_kotlin.$_$.kg;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.e5;
  var trimIndent = kotlin_kotlin.$_$.cf;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.j1;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.r1;
  var fromInt = kotlin_kotlin.$_$.u9;
  var readBuffer = kotlin_io_ktor_ktor_io.$_$.h;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.r4;
  var initMetadataForInterface = kotlin_kotlin.$_$.eb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xg;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var writer = kotlin_io_ktor_ktor_io.$_$.w1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.x;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.w;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.c;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.u;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.v;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.s;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.t;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.m1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.y;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var emptySet = kotlin_kotlin.$_$.x6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j3;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.k1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.y3;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var getKClass = kotlin_kotlin.$_$.sc;
  var getStarKTypeProjection = kotlin_kotlin.$_$.tc;
  var ioDispatcher = kotlin_io_ktor_ktor_io.$_$.t1;
  var SilentSupervisor = kotlin_io_ktor_ktor_utils.$_$.q;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var lazy = kotlin_kotlin.$_$.wg;
  var KProperty1 = kotlin_kotlin.$_$.xc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xa;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var KtMutableMap = kotlin_kotlin.$_$.t5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.oc;
  var setOf = kotlin_kotlin.$_$.y7;
  var get = kotlin_kotlin.$_$.f9;
  var fold = kotlin_kotlin.$_$.e9;
  var minusKey = kotlin_kotlin.$_$.g9;
  var plus = kotlin_kotlin.$_$.i9;
  var Element = kotlin_kotlin.$_$.h9;
  var joinToString = kotlin_kotlin.$_$.h7;
  var setOf_0 = kotlin_kotlin.$_$.z7;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.j;
  var isSuspendFunction = kotlin_kotlin.$_$.sb;
  var initMetadataForObject = kotlin_kotlin.$_$.gb;
  var get_isTraceEnabled = kotlin_io_ktor_ktor_utils.$_$.h;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.p;
  var Unit = kotlin_kotlin.$_$.jg;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var toLong = kotlin_kotlin.$_$.ue;
  var contentType = kotlin_io_ktor_ktor_http.$_$.s1;
  var isByteArray = kotlin_kotlin.$_$.jb;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.d1;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.e;
  var rethrowCloseCauseIfNeeded = kotlin_io_ktor_ktor_io.$_$.v1;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.c;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var CIOMultipartDataBase = kotlin_io_ktor_ktor_http_cio.$_$.a;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.q;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.p1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.g1;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var writer_0 = kotlin_io_ktor_ktor_io.$_$.x1;
  var invokeOnCompletion = kotlin_io_ktor_ktor_io.$_$.s1;
  var attachJob = kotlin_io_ktor_ktor_io.$_$.n1;
  var attachWriterJob = kotlin_io_ktor_ktor_io.$_$.o1;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.m;
  var Source = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.h;
  var readText = kotlin_io_ktor_ktor_io.$_$.u1;
  var toInt = kotlin_kotlin.$_$.se;
  var reversed = kotlin_kotlin.$_$.x7;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.p;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v3;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.b;
  var toList = kotlin_kotlin.$_$.f8;
  var sortedWith = kotlin_kotlin.$_$.b8;
  var Collection = kotlin_kotlin.$_$.j5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d4;
  var charSequenceLength = kotlin_kotlin.$_$.oa;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var roundToInt = kotlin_kotlin.$_$.ec;
  var firstOrNull = kotlin_kotlin.$_$.a7;
  var FunctionAdapter = kotlin_kotlin.$_$.fa;
  var Comparator = kotlin_kotlin.$_$.nf;
  var hashCode = kotlin_kotlin.$_$.za;
  var compareValues = kotlin_kotlin.$_$.p8;
  var charset = kotlin_io_ktor_ktor_http.$_$.q1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.h2;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.p1;
  var readText_0 = kotlin_io_ktor_ktor_io.$_$.y;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var listOf = kotlin_kotlin.$_$.n7;
  var plus_0 = kotlin_kotlin.$_$.t7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i3;
  var checkIndexOverflow = kotlin_kotlin.$_$.b6;
  var get_lastIndex = kotlin_kotlin.$_$.k7;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.o1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.g2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var substringBefore = kotlin_kotlin.$_$.he;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.a2;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.n1;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var KFunctionImpl = kotlin_kotlin.$_$.nc;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.db;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var Default_getInstance = kotlin_kotlin.$_$.r2;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var toLongOrNull = kotlin_kotlin.$_$.te;
  var multiply = kotlin_kotlin.$_$.x9;
  var toNumber = kotlin_kotlin.$_$.ea;
  var numberToLong = kotlin_kotlin.$_$.z9;
  var add = kotlin_kotlin.$_$.p9;
  var Companion_instance = kotlin_kotlin.$_$.z2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.pg;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.q;
  var toString_0 = kotlin_kotlin.$_$.ah;
  var trimMargin = kotlin_kotlin.$_$.df;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.b2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.t2;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.d2;
  var toDuration = kotlin_kotlin.$_$.hf;
  var delay_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var KProperty0 = kotlin_kotlin.$_$.wc;
  var Exception = kotlin_kotlin.$_$.sf;
  var createKTypeParameter = kotlin_kotlin.$_$.pc;
  var NullBody = kotlin_io_ktor_ktor_http.$_$.r;
  var WebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.o;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.k;
  var generateNonce = kotlin_io_ktor_ktor_utils.$_$.y;
  var Default_getInstance_0 = kotlin_kotlin.$_$.j2;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.f1;
  var emptyList = kotlin_kotlin.$_$.v6;
  var addAll = kotlin_kotlin.$_$.x5;
  var parseWebSocketExtensions = kotlin_io_ktor_ktor_websockets.$_$.q;
  var WebSocketExtensionsConfig = kotlin_io_ktor_ktor_websockets.$_$.m;
  var WebSocketChannelsConfig = kotlin_io_ktor_ktor_websockets.$_$.l;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_websockets.$_$.d;
  var DefaultWebSocketSession_0 = kotlin_io_ktor_ktor_websockets.$_$.j;
  var IllegalStateException_init_$Init$_1 = kotlin_kotlin.$_$.t4;
  var KtList = kotlin_kotlin.$_$.o5;
  var WebSocketExtension = kotlin_io_ktor_ktor_websockets.$_$.n;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.j1;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.f2;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.a1;
  var set = kotlin_io_ktor_ktor_http.$_$.d2;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.d;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.k;
  var formUrlEncode = kotlin_io_ktor_ktor_http.$_$.w1;
  var toByteArray_0 = kotlin_io_ktor_ktor_io.$_$.c1;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.d1;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.n;
  var copyTo_0 = kotlin_io_ktor_ktor_io.$_$.f;
  var closeFinally = kotlin_kotlin.$_$.ng;
  var close = kotlin_io_ktor_ktor_io.$_$.q1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c6;
  var BytePacketBuilder = kotlin_io_ktor_ktor_io.$_$.u;
  var writeText = kotlin_io_ktor_ktor_io.$_$.e1;
  var build = kotlin_io_ktor_ktor_io.$_$.w;
  var BinaryChannelItem = kotlin_io_ktor_ktor_http.$_$.z;
  var FormItem = kotlin_io_ktor_ktor_http.$_$.c1;
  var BinaryItem = kotlin_io_ktor_ktor_http.$_$.a1;
  var FileItem = kotlin_io_ktor_ktor_http.$_$.b1;
  var toString_1 = kotlin_kotlin.$_$.ve;
  var take = kotlin_kotlin.$_$.ke;
  var writePacket = kotlin_io_ktor_ktor_io.$_$.o;
  var Companion_getInstance_5 = kotlin_io_ktor_ktor_http.$_$.h;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.z;
  var isNumber = kotlin_kotlin.$_$.qb;
  var getStringHashCode = kotlin_kotlin.$_$.ya;
  var quote = kotlin_io_ktor_ktor_http.$_$.c2;
  var isQuoted = kotlin_io_ktor_ktor_http.$_$.z1;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.v;
  var decode = kotlin_io_ktor_ktor_io.$_$.q;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.r;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.f1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.g;
  var KtMutableList = kotlin_kotlin.$_$.r5;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_http.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var equals_0 = kotlin_kotlin.$_$.jd;
  var flatten = kotlin_kotlin.$_$.c7;
  var copyToArray = kotlin_kotlin.$_$.s6;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var CancellationException_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var headersOf = kotlin_io_ktor_ktor_http.$_$.x1;
  var intercepted = kotlin_kotlin.$_$.u8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var listOf_0 = kotlin_kotlin.$_$.o7;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.b4;
  var Error_init_$Create$ = kotlin_kotlin.$_$.f4;
  var Companion_getInstance_7 = kotlin_io_ktor_ktor_websockets.$_$.c;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.h;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.f;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.i;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Codes_NORMAL_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var decodeToString = kotlin_kotlin.$_$.gd;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var from = kotlin_io_ktor_ktor_websockets.$_$.p;
  var send = kotlin_io_ktor_ktor_websockets.$_$.e;
  var toTypedArray = kotlin_kotlin.$_$.n8;
  var get_supportsRequestBody = kotlin_io_ktor_ktor_http.$_$.e2;
  var isEmpty = kotlin_io_ktor_ktor_http.$_$.e1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var isNaN_0 = kotlin_kotlin.$_$.ug;
  var encodeURLParameter = kotlin_io_ktor_ktor_http.$_$.u1;
  var get_hostWithPort = kotlin_io_ktor_ktor_http.$_$.y1;
  var Companion_getInstance_8 = kotlin_io_ktor_ktor_http.$_$.n;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(HttpClient$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClient$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpClient, 'HttpClient', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientConfig, 'HttpClientConfig', HttpClientConfig);
  initMetadataForClass(HttpClientCall, 'HttpClientCall', VOID, VOID, [CoroutineScope], [0, 1]);
  initMetadataForClass(DelegatedCall, 'DelegatedCall', VOID, HttpClientCall, VOID, [0, 1]);
  initMetadataForClass(HttpResponse, 'HttpResponse', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedResponse, 'DelegatedResponse', VOID, HttpResponse);
  function get_coroutineContext() {
    return this.t3v().g1r();
  }
  initMetadataForInterface(HttpRequest_0, 'HttpRequest', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(DelegatedRequest, 'DelegatedRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForCompanion(Companion);
  initMetadataForCoroutine($bodyNullableCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DoubleReceiveException, 'DoubleReceiveException', VOID, IllegalStateException);
  initMetadataForClass(NoTransformationFoundException, 'NoTransformationFoundException', VOID, UnsupportedOperationException);
  initMetadataForClass(SavedHttpResponse, 'SavedHttpResponse', VOID, HttpResponse);
  initMetadataForClass(SavedHttpCall, 'SavedHttpCall', VOID, HttpClientCall, VOID, [0, 1]);
  initMetadataForClass(SavedHttpRequest, 'SavedHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForCoroutine($saveCOROUTINE$, CoroutineImpl);
  initMetadataForClass(UnsupportedContentTypeException, 'UnsupportedContentTypeException', VOID, IllegalStateException);
  initMetadataForInterface(ProgressListener, 'ProgressListener', VOID, VOID, VOID, [2]);
  initMetadataForLambda(ObservableContent$getContent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ObservableContent, 'ObservableContent', VOID, ReadChannelContent);
  initMetadataForLambda(HttpClientEngine$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpClientEngine$executeWithinCallContext$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($executeWithinCallContextCOROUTINE$, CoroutineImpl);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().l3u_1;
    client.x3r_1.n2v(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  initMetadataForInterface(HttpClientEngine, 'HttpClientEngine', VOID, VOID, [CoroutineScope, AutoCloseable], [1]);
  initMetadataForClass(HttpClientEngineBase, 'HttpClientEngineBase', VOID, VOID, [HttpClientEngine], [1]);
  initMetadataForClass(ClientEngineClosedException, 'ClientEngineClosedException', ClientEngineClosedException, IllegalStateException);
  initMetadataForInterface(HttpClientEngineCapability, 'HttpClientEngineCapability');
  initMetadataForClass(HttpClientEngineConfig, 'HttpClientEngineConfig', HttpClientEngineConfig);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(KtorCallContextElement, 'KtorCallContextElement', VOID, VOID, [Element]);
  initMetadataForLambda(AfterRenderHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterRenderHook, 'AfterRenderHook');
  initMetadataForLambda(AfterReceiveHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(AfterReceiveHook, 'AfterReceiveHook');
  initMetadataForLambda(BodyProgress$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(BodyProgress$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ResponseException, 'ResponseException', VOID, IllegalStateException);
  initMetadataForClass(RedirectResponseException, 'RedirectResponseException', VOID, ResponseException);
  initMetadataForClass(ClientRequestException, 'ClientRequestException', VOID, ResponseException);
  initMetadataForClass(ServerResponseException, 'ServerResponseException', VOID, ResponseException);
  initMetadataForLambda(addDefaultResponseValidation$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(defaultTransformers$1$content$1, VOID, VOID, ByteArrayContent);
  initMetadataForClass(defaultTransformers$1$content$2, VOID, VOID, ReadChannelContent);
  initMetadataForLambda(defaultTransformers$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(defaultTransformers$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(defaultTransformers$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpCallValidatorConfig, 'HttpCallValidatorConfig', HttpCallValidatorConfig);
  initMetadataForClass(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper');
  initMetadataForClass(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper');
  initMetadataForLambda(RequestError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestError, 'RequestError');
  initMetadataForLambda(ReceiveError$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(ReceiveError, 'ReceiveError');
  initMetadataForLambda(HttpCallValidator$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_3, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpCallValidator$lambda$slambda_5, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$validateResponseCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invoke$processExceptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpRequest$1, VOID, VOID, VOID, [HttpRequest_0]);
  initMetadataForClass(HttpPlainTextConfig, 'HttpPlainTextConfig', HttpPlainTextConfig);
  initMetadataForLambda(RenderRequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RenderRequestHook, 'RenderRequestHook');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForLambda(HttpPlainText$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(HttpPlainText$lambda$slambda_1, CoroutineImpl, VOID, [4]);
  initMetadataForClass(HttpRedirectConfig, 'HttpRedirectConfig', HttpRedirectConfig);
  initMetadataForLambda(HttpRedirect$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($invoke$handleCallCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($invokeCOROUTINE$, CoroutineImpl);
  initMetadataForFunctionReference(PipelineContext$proceed$ref, KFunctionImpl, VOID, [0]);
  initMetadataForLambda(SetupRequestContext$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequestContext, 'SetupRequestContext');
  initMetadataForLambda(HttpRequestLifecycle$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HttpRetryEventData, 'HttpRetryEventData');
  initMetadataForLambda(HttpRequestRetryConfig$delay$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpRequestRetryConfig, 'HttpRequestRetryConfig', HttpRequestRetryConfig);
  initMetadataForClass(HttpRetryShouldRetryContext, 'HttpRetryShouldRetryContext');
  initMetadataForClass(HttpRetryDelayContext, 'HttpRetryDelayContext');
  initMetadataForClass(HttpRetryModifyRequestContext, 'HttpRetryModifyRequestContext');
  initMetadataForLambda(HttpRequestRetry$lambda$slambda, CoroutineImpl, VOID, [3]);
  initMetadataForLambda(HttpRequestRetry$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($throwOnInvalidResponseBodyCOROUTINE$, CoroutineImpl);
  initMetadataForLambda(HttpSend$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($executeCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(Config, 'Config', Config);
  initMetadataForObject(Plugin, 'Plugin');
  initMetadataForInterface(Sender, 'Sender', VOID, VOID, VOID, [1]);
  initMetadataForClass(InterceptedSender, 'InterceptedSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(DefaultSender, 'DefaultSender', VOID, VOID, [Sender], [1]);
  initMetadataForClass(HttpSend, 'HttpSend');
  initMetadataForClass(SendCountExceedException, 'SendCountExceedException', VOID, IllegalStateException);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(HttpTimeoutConfig, 'HttpTimeoutConfig', HttpTimeoutConfig_init_$Create$);
  initMetadataForObject(HttpTimeoutCapability, 'HttpTimeoutCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(HttpRequestTimeoutException, 'HttpRequestTimeoutException', VOID, IOException, [CopyableThrowable]);
  initMetadataForLambda(HttpTimeout$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(applyRequestTimeout$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SaveBodyPluginConfig, 'SaveBodyPluginConfig', SaveBodyPluginConfig);
  initMetadataForLambda(SaveBody$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(HookHandler, 'HookHandler');
  initMetadataForClass(ClientPluginBuilder, 'ClientPluginBuilder');
  initMetadataForClass(ClientPluginInstance, 'ClientPluginInstance', VOID, VOID, [AutoCloseable]);
  initMetadataForLambda(SetupRequest$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SetupRequest, 'SetupRequest');
  initMetadataForClass(Sender_0, 'Sender', VOID, VOID, [CoroutineScope], [1]);
  initMetadataForLambda(Send$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(Send, 'Send');
  initMetadataForClass(ClientPluginImpl, 'ClientPluginImpl');
  initMetadataForClass(TransformResponseBodyContext, 'TransformResponseBodyContext');
  initMetadataForClass(OnRequestContext, 'OnRequestContext');
  initMetadataForLambda(RequestHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(RequestHook, 'RequestHook');
  initMetadataForLambda(TransformResponseBodyHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(TransformResponseBodyHook, 'TransformResponseBodyHook');
  initMetadataForObject(SSECapability, 'SSECapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(SSEClientContent, 'SSEClientContent', VOID, ContentWrapper);
  initMetadataForClass(DefaultClientWebSocketSession, 'DefaultClientWebSocketSession', VOID, VOID, [WebSocketSession, DefaultWebSocketSession], [1, 0]);
  initMetadataForClass(DelegatingClientWebSocketSession, 'DelegatingClientWebSocketSession', VOID, VOID, [WebSocketSession], [1, 0]);
  initMetadataForClass(ClientUpgradeContent, 'ClientUpgradeContent', VOID, NoContent, VOID, [1]);
  initMetadataForClass(WebSocketContent, 'WebSocketContent', WebSocketContent, ClientUpgradeContent, VOID, [1]);
  initMetadataForLambda(WebSockets$Plugin$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(WebSockets$Plugin$install$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForClass(Config_0, 'Config', Config_0);
  initMetadataForObject(Plugin_0, 'Plugin');
  initMetadataForClass(WebSockets, 'WebSockets');
  initMetadataForObject(WebSocketExtensionsCapability, 'WebSocketExtensionsCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForObject(WebSocketCapability, 'WebSocketCapability', VOID, VOID, [HttpClientEngineCapability]);
  initMetadataForClass(WebSocketException, 'WebSocketException', VOID, IllegalStateException);
  initMetadataForClass(DefaultHttpRequest, 'DefaultHttpRequest', VOID, VOID, [HttpRequest_0]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(HttpRequestBuilder, 'HttpRequestBuilder', HttpRequestBuilder);
  initMetadataForClass(HttpRequestData, 'HttpRequestData');
  initMetadataForClass(HttpResponseData, 'HttpResponseData');
  initMetadataForInterface(ResponseAdapter, 'ResponseAdapter');
  initMetadataForObject(Phases, 'Phases');
  initMetadataForClass(HttpRequestPipeline, 'HttpRequestPipeline', HttpRequestPipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_0, 'Phases');
  initMetadataForClass(HttpSendPipeline, 'HttpSendPipeline', HttpSendPipeline, Pipeline, VOID, [2]);
  initMetadataForClass(FormDataContent, 'FormDataContent', VOID, ByteArrayContent);
  initMetadataForCoroutine($writeToCOROUTINE$, CoroutineImpl);
  initMetadataForClass(MultiPartFormDataContent, 'MultiPartFormDataContent', VOID, WriteChannelContent, VOID, [1]);
  initMetadataForClass(PreparedPart, 'PreparedPart');
  initMetadataForClass(InputPart, 'InputPart', VOID, PreparedPart);
  initMetadataForClass(ChannelPart, 'ChannelPart', VOID, PreparedPart);
  initMetadataForClass(FormBuilder, 'FormBuilder');
  initMetadataForClass(FormPart, 'FormPart');
  initMetadataForClass(InputProvider, 'InputProvider');
  initMetadataForClass(ChannelProvider, 'ChannelProvider');
  initMetadataForClass(DefaultHttpResponse, 'DefaultHttpResponse', VOID, HttpResponse);
  initMetadataForCoroutine($bodyAsTextCOROUTINE$, CoroutineImpl);
  initMetadataForObject(Phases_1, 'Phases');
  initMetadataForClass(HttpResponsePipeline, 'HttpResponsePipeline', HttpResponsePipeline, Pipeline, VOID, [2]);
  initMetadataForObject(Phases_2, 'Phases');
  initMetadataForClass(HttpReceivePipeline, 'HttpReceivePipeline', HttpReceivePipeline, Pipeline, VOID, [2]);
  initMetadataForClass(HttpResponseContainer, 'HttpResponseContainer');
  initMetadataForCoroutine($fetchResponseCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpStatement, 'HttpStatement', VOID, VOID, VOID, [1, 0, 2]);
  initMetadataForLambda(observable$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HttpResponseReceiveFail, 'HttpResponseReceiveFail');
  initMetadataForObject(EmptyContent, 'EmptyContent', VOID, NoContent);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(FetchOptions, 'FetchOptions');
  initMetadataForObject(Js, 'Js');
  initMetadataForClass(JsClientEngineConfig, 'JsClientEngineConfig', JsClientEngineConfig, HttpClientEngineConfig);
  initMetadataForClass(JsClientEngine$createWebSocket$headers_capturingHack$1);
  initMetadataForCoroutine($executeCOROUTINE$_1, CoroutineImpl);
  initMetadataForCoroutine($createWebSocketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($executeWebSocketRequestCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsClientEngine, 'JsClientEngine', VOID, HttpClientEngineBase, VOID, [1, 2]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForLambda(channelFromStream$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0_0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForLambda(JsWebSocketSession$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JsWebSocketSession, 'JsWebSocketSession', VOID, VOID, [DefaultWebSocketSession], [0, 1]);
  initMetadataForLambda(getBodyBytes$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($toRawCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getBodyBytesCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Node, 'Node');
  initMetadataForClass(engines$iterator$1);
  initMetadataForObject(engines, 'engines');
  initMetadataForClass(EngineEntry, 'EngineEntry');
  initMetadataForClass(ProxyConfig, 'ProxyConfig', ProxyConfig_init_$Create$);
  initMetadataForObject(ProxyBuilder, 'ProxyBuilder');
  initMetadataForClass(ConnectTimeoutException, 'ConnectTimeoutException', VOID, IOException);
  initMetadataForClass(InterruptedIOException, 'InterruptedIOException', VOID, IOException);
  initMetadataForClass(SocketTimeoutException, 'SocketTimeoutException', VOID, InterruptedIOException);
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.r3r_1 = manageEngine;
    if ($this.r3r_1) {
      if (engine instanceof HttpClientEngineBase) {
        engine.f3s_1.atomicfu$incrementAndGet();
      }
      var tmp = ensureNotNull($this.u3r_1.v8(Key_instance));
      tmp.i1s(HttpClient$_init_$lambda_36nm6w(engine));
    }
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, objectCreate(protoOf(HttpClient)));
  }
  function HttpClient$_init_$lambda_36nm6w($engine) {
    return function (cause) {
      var tmp;
      if (!($engine instanceof HttpClientEngineBase)) {
        tmp = true;
      } else {
        tmp = $engine.f3s_1.atomicfu$decrementAndGet() <= 0;
      }
      var shouldClose = tmp;
      var tmp_0;
      if (shouldClose) {
        var tmp_1;
        if (cause == null) {
          $engine.t3();
          tmp_1 = Unit_instance;
        } else {
          var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
          cancel($engine, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Client scope is canceled', cause) : tmp0_elvis_lhs);
          tmp_1 = Unit_instance;
        }
        tmp_0 = tmp_1;
      }
      return Unit_instance;
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.q3s_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda).t3s = function ($this$intercept, call, $completion) {
    var tmp = this.u3s($this$intercept, call, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpClient$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t3s(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp_0 = this.s3s_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.s3s_1) + '(' + toString(getKClassFromExpression(this.s3s_1)) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.i8_1 = 1;
            suspendResult = this.q3s_1.y3r_1.i2v(Unit_instance, this.s3s_1.a3t(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            this.s3s_1.b3t(response);
            this.i8_1 = 2;
            suspendResult = this.r3s_1.n2u(this.s3s_1, this);
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
  protoOf(HttpClient$slambda).u3s = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.q3s_1, completion);
    i.r3s_1 = $this$intercept;
    i.s3s_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, call, $completion) {
      return i.t3s($this$intercept, call, $completion);
    }, 2);
  }
  function HttpClient$lambda($this$install) {
    defaultTransformers($this$install);
    return Unit_instance;
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.k3t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClient$slambda_1).o3t = function ($this$intercept, it, $completion) {
    var tmp = this.p3t($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpClient$slambda_1).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.o3t(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClient$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.l3t_1.o2u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n3t_1 = suspendResult;
            this.j8_1 = 3;
            this.i8_1 = 4;
            continue $sm;
          case 2:
            this.j8_1 = 3;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              var tmp_1 = this;
              this.k3t_1.b3s_1.x3c(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.l3t_1.j2v_1.a3t(), cause));
              throw cause;
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
  protoOf(HttpClient$slambda_1).p3t = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.k3t_1, completion);
    i.l3t_1 = $this$intercept;
    i.m3t_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.o3t($this$intercept, it, $completion);
    }, 2);
  }
  function $executeCOROUTINE$(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y3t_1 = _this__u8e3s4;
    this.z3t_1 = builder;
  }
  protoOf($executeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.y3t_1.b3s_1.x3c(get_HttpRequestCreated(), this.z3t_1);
            this.i8_1 = 1;
            suspendResult = this.y3t_1.v3r_1.i2v(this.z3t_1, this.z3t_1.d3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    userConfig = userConfig === VOID ? new HttpClientConfig() : userConfig;
    this.p3r_1 = engine;
    this.q3r_1 = userConfig;
    this.r3r_1 = false;
    this.s3r_1 = atomic$boolean$1(false);
    this.t3r_1 = Job(this.p3r_1.g1r().v8(Key_instance));
    this.u3r_1 = this.p3r_1.g1r().if(this.t3r_1);
    this.v3r_1 = new HttpRequestPipeline();
    this.w3r_1 = new HttpResponsePipeline();
    this.x3r_1 = new HttpSendPipeline();
    this.y3r_1 = new HttpReceivePipeline();
    this.z3r_1 = AttributesJsFn(true);
    this.a3s_1 = this.p3r_1.g3u();
    this.b3s_1 = new Events();
    this.c3s_1 = new HttpClientConfig();
    this.p3r_1.h3u(this);
    var tmp = Phases_getInstance_0().m3u_1;
    this.x3r_1.n2v(tmp, HttpClient$slambda_0(this, null));
    // Inline function 'kotlin.with' call
    var $this$with = this.q3r_1;
    this.c3s_1.v3u(get_HttpRequestLifecycle());
    this.c3s_1.v3u(get_BodyProgress());
    this.c3s_1.v3u(get_SaveBody());
    if ($this$with.s3u_1) {
      this.c3s_1.w3u('DefaultTransformers', HttpClient$lambda);
    }
    this.c3s_1.v3u(Plugin_getInstance());
    this.c3s_1.v3u(get_HttpCallValidator());
    if ($this$with.r3u_1) {
      this.c3s_1.v3u(get_HttpRedirect());
    }
    this.c3s_1.x3u($this$with);
    if ($this$with.s3u_1) {
      this.c3s_1.v3u(get_HttpPlainText());
    }
    addDefaultResponseValidation(this.c3s_1);
    this.c3s_1.h3u(this);
    var tmp_0 = Phases_getInstance_1().y3u_1;
    this.w3r_1.n2v(tmp_0, HttpClient$slambda_2(this, null));
  }
  protoOf(HttpClient).g1r = function () {
    return this.u3r_1;
  };
  protoOf(HttpClient).d3v = function (builder, $completion) {
    var tmp = new $executeCOROUTINE$(this, builder, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpClient).t3 = function () {
    var success = this.s3r_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_instance;
    var installedFeatures = this.z3r_1.p2p(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = installedFeatures.w2p().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var plugin = installedFeatures.p2p(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, AutoCloseable)) {
        plugin.t3();
      }
    }
    this.t3r_1.i1y();
  };
  protoOf(HttpClient).toString = function () {
    return 'HttpClient[' + toString(this.p3r_1) + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_0;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HttpClientConfig();
    block(this_0);
    var config = this_0;
    var engine = engineFactory.e3v(config.q3u_1);
    return HttpClient_init_$Create$(engine, config, true);
  }
  function HttpClient$lambda_0(_this__u8e3s4) {
    return Unit_instance;
  }
  function installPlugin($this, plugin) {
    if ($this.n3u_1.l2(plugin.m1()))
      return Unit_instance;
    var tmp0 = $this.n3u_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$installPlugin$lambda(plugin);
    tmp0.v2(tmp2, value);
  }
  function HttpClientConfig$engineConfig$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$engine$lambda($oldConfig, $block) {
    return function (_this__u8e3s4) {
      $oldConfig(_this__u8e3s4);
      $block(_this__u8e3s4);
      return Unit_instance;
    };
  }
  function HttpClientConfig$install$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function (_this__u8e3s4) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(_this__u8e3s4);
      $configure(!(_this__u8e3s4 == null) ? _this__u8e3s4 : THROW_CCE());
      return Unit_instance;
    };
  }
  function HttpClientConfig$installPlugin$lambda$lambda() {
    return AttributesJsFn(true);
  }
  function HttpClientConfig$installPlugin$lambda($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.z3r_1.v2p(tmp, HttpClientConfig$installPlugin$lambda$lambda);
      var config = ensureNotNull(scope.c3s_1.o3u_1.n2($plugin.m1()));
      var pluginData = $plugin.f3v(config);
      $plugin.g3v(pluginData, scope);
      attributes.s2p($plugin.m1(), pluginData);
      return Unit_instance;
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.n3u_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.o3u_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.p3u_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    tmp_2.q3u_1 = HttpClientConfig$engineConfig$lambda;
    this.r3u_1 = true;
    this.s3u_1 = true;
    this.t3u_1 = false;
    this.u3u_1 = PlatformUtils_getInstance().q2r_1;
  }
  protoOf(HttpClientConfig).h3v = function (block) {
    var oldConfig = this.q3u_1;
    var tmp = this;
    tmp.q3u_1 = HttpClientConfig$engine$lambda(oldConfig, block);
  };
  protoOf(HttpClientConfig).i3v = function (plugin, configure) {
    var previousConfigBlock = this.o3u_1.n2(plugin.m1());
    var tmp0 = this.o3u_1;
    var tmp2 = plugin.m1();
    // Inline function 'kotlin.collections.set' call
    var value = HttpClientConfig$install$lambda_0(previousConfigBlock, configure);
    tmp0.v2(tmp2, value);
    installPlugin(this, plugin);
  };
  protoOf(HttpClientConfig).v3u = function (plugin, configure, $super) {
    var tmp;
    if (configure === VOID) {
      tmp = HttpClientConfig$install$lambda;
    } else {
      tmp = configure;
    }
    configure = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.i3v(plugin, configure);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.i3v.call(this, plugin, configure);
    }
    return tmp_0;
  };
  protoOf(HttpClientConfig).w3u = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    this.p3u_1.v2(key, block);
  };
  protoOf(HttpClientConfig).h3u = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.n3u_1.p2().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.apply' call
      element(client);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.p3u_1.p2().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.apply' call
      element_0(client);
    }
  };
  protoOf(HttpClientConfig).x3u = function (other) {
    this.r3u_1 = other.r3u_1;
    this.s3u_1 = other.s3u_1;
    this.t3u_1 = other.t3u_1;
    var tmp0 = this.n3u_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map = other.n3u_1;
    tmp0.x2(map);
    var tmp0_0 = this.o3u_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_0 = other.o3u_1;
    tmp0_0.x2(map_0);
    var tmp0_1 = this.p3u_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var map_1 = other.p3u_1;
    tmp0_1.x2(map_1);
  };
  function replaceResponse(_this__u8e3s4, headers, content) {
    headers = headers === VOID ? _this__u8e3s4.a3t().w34() : headers;
    return new DelegatedCall(_this__u8e3s4.v3s_1, _this__u8e3s4, content, headers);
  }
  function resolveOrigin(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp;
        if ($this instanceof DelegatedResponse) {
          $this = $this.k3v_1;
          continue $l$0;
        } else {
          tmp = $this;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function DelegatedCall(client, originCall, responseContent, responseHeaders) {
    responseHeaders = responseHeaders === VOID ? originCall.a3t().w34() : responseHeaders;
    HttpClientCall.call(this, client);
    this.x3s_1 = new DelegatedRequest(this, originCall.o3v());
    this.y3s_1 = new DelegatedResponse(this, originCall.a3t(), responseContent, responseHeaders);
  }
  function DelegatedResponse(call, origin, content, headers) {
    headers = headers === VOID ? origin.w34() : headers;
    HttpResponse.call(this);
    this.j3v_1 = call;
    this.k3v_1 = origin;
    this.l3v_1 = content;
    this.m3v_1 = headers;
    this.n3v_1 = this.k3v_1.g1r();
  }
  protoOf(DelegatedResponse).t3v = function () {
    return this.j3v_1;
  };
  protoOf(DelegatedResponse).w34 = function () {
    return this.m3v_1;
  };
  protoOf(DelegatedResponse).u3v = function () {
    return this.l3v_1(this.k3v_1);
  };
  protoOf(DelegatedResponse).g1r = function () {
    return this.n3v_1;
  };
  protoOf(DelegatedResponse).v3v = function () {
    return this.k3v_1.v3v();
  };
  protoOf(DelegatedResponse).w3v = function () {
    return this.k3v_1.w3v();
  };
  protoOf(DelegatedResponse).x3v = function () {
    return this.k3v_1.x3v();
  };
  protoOf(DelegatedResponse).y3v = function () {
    return this.k3v_1.y3v();
  };
  function DelegatedRequest(call, origin) {
    this.z3v_1 = origin;
    this.a3w_1 = call;
  }
  protoOf(DelegatedRequest).t3v = function () {
    return this.a3w_1;
  };
  protoOf(DelegatedRequest).g1r = function () {
    return this.z3v_1.g1r();
  };
  protoOf(DelegatedRequest).b3w = function () {
    return this.z3v_1.b3w();
  };
  protoOf(DelegatedRequest).c3w = function () {
    return this.z3v_1.c3w();
  };
  protoOf(DelegatedRequest).p3v = function () {
    return this.z3v_1.p3v();
  };
  protoOf(DelegatedRequest).d1b = function () {
    return this.z3v_1.d1b();
  };
  protoOf(DelegatedRequest).w34 = function () {
    return this.z3v_1.w34();
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.x3s_1 = new DefaultHttpRequest($this, requestData);
    $this.y3s_1 = new DefaultHttpResponse($this, responseData);
    $this.p3v().u2p(Companion_getInstance_9().d3w_1);
    var tmp = responseData.i3w_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.p3v().s2p(Companion_getInstance_9().d3w_1, responseData.i3w_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, objectCreate(protoOf(HttpClientCall)));
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'CustomResponse';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = PrimitiveClasses_getInstance().eb();
    var tmp_1 = !(null == null);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(PrimitiveClasses_getInstance().eb(), arrayOf([]), false);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_3 = null;
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.d3w_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_0;
  function Companion_getInstance_9() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function $bodyNullableCOROUTINE$(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t3w_1 = _this__u8e3s4;
    this.u3w_1 = info;
  }
  protoOf($bodyNullableCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.j8_1 = 4;
            if (instanceOf(this.t3w_1.a3t(), this.u3w_1.a2w_1))
              return this.t3w_1.a3t();
            if (!this.t3w_1.q3v() && !get_isSaved(this.t3w_1.a3t()) && !this.t3w_1.w3s_1.atomicfu$compareAndSet(false, true)) {
              throw new DoubleReceiveException(this.t3w_1);
            }

            var tmp0_elvis_lhs = this.t3w_1.p3v().q2p(Companion_getInstance_9().d3w_1);
            if (tmp0_elvis_lhs == null) {
              this.i8_1 = 1;
              suspendResult = this.t3w_1.r3v(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v3w_1 = tmp0_elvis_lhs;
              this.i8_1 = 2;
              continue $sm;
            }

          case 1:
            this.v3w_1 = suspendResult;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            var responseData = this.v3w_1;
            var subject = new HttpResponseContainer(this.u3w_1, responseData);
            this.i8_1 = 3;
            suspendResult = this.t3w_1.v3s_1.w3r_1.i2v(this.t3w_1, subject, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var this_0 = suspendResult.x3w_1;
            var tmp_0;
            if (!equals(this_0, NullBody_instance)) {
              tmp_0 = this_0;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) && !instanceOf(result, this.u3w_1.a2w_1)) {
              var from = getKClassFromExpression(result);
              var to = this.u3w_1.a2w_1;
              throw new NoTransformationFoundException(this.t3w_1.a3t(), from, to);
            }

            return result;
          case 4:
            this.j8_1 = 5;
            var tmp_1 = this.l8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.l8_1;
              cancel_0(this.t3w_1.a3t(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.l8_1;
            }

          case 5:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 5) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function HttpClientCall(client) {
    Companion_getInstance_9();
    this.v3s_1 = client;
    this.w3s_1 = atomic$boolean$1(false);
    this.z3s_1 = false;
  }
  protoOf(HttpClientCall).g1r = function () {
    return this.a3t().g1r();
  };
  protoOf(HttpClientCall).p3v = function () {
    return this.o3v().p3v();
  };
  protoOf(HttpClientCall).o3v = function () {
    var tmp = this.x3s_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  protoOf(HttpClientCall).a3t = function () {
    var tmp = this.y3s_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  protoOf(HttpClientCall).q3v = function () {
    return this.z3s_1;
  };
  protoOf(HttpClientCall).r3v = function ($completion) {
    return this.a3t().u3v();
  };
  protoOf(HttpClientCall).s3v = function (info, $completion) {
    var tmp = new $bodyNullableCOROUTINE$(this, info, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpClientCall).toString = function () {
    return 'HttpClientCall[' + this.o3v().c3w().toString() + ', ' + this.a3t().v3v().toString() + ']';
  };
  protoOf(HttpClientCall).b3t = function (response) {
    this.y3s_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    captureStack(this, DoubleReceiveException);
    this.y3w_1 = 'Response already received: ' + call.toString();
    delete this.message;
  }
  protoOf(DoubleReceiveException).e = function () {
    return this.y3w_1;
  };
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    captureStack(this, NoTransformationFoundException);
    this.z3w_1 = trimIndent("\n        Expected response body of the type '" + toString(to) + "' but was '" + toString(from) + "'\n        In response from `" + get_request(response).c3w().toString() + '`\n        Response status `' + response.v3v().toString() + '`\n        Response header `ContentType: ' + response.w34().i1b('Content-Type') + '` \n        Request header `Accept: ' + get_request(response).w34().i1b('Accept') + '`\n        \n        You can read how to resolve NoTransformationFoundException at FAQ: \n        https://ktor.io/docs/faq.html#no-transformation-found-exception\n    ');
    delete this.message;
  }
  protoOf(NoTransformationFoundException).e = function () {
    return this.z3w_1;
  };
  function save(_this__u8e3s4, $completion) {
    var tmp = new $saveCOROUTINE$(_this__u8e3s4, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.j3x_1 = call;
    this.k3x_1 = body;
    this.l3x_1 = origin.v3v();
    this.m3x_1 = origin.w3v();
    this.n3x_1 = origin.x3v();
    this.o3x_1 = origin.y3v();
    this.p3x_1 = origin.w34();
    this.q3x_1 = origin.g1r();
  }
  protoOf(SavedHttpResponse).t3v = function () {
    return this.j3x_1;
  };
  protoOf(SavedHttpResponse).v3v = function () {
    return this.l3x_1;
  };
  protoOf(SavedHttpResponse).w3v = function () {
    return this.m3x_1;
  };
  protoOf(SavedHttpResponse).x3v = function () {
    return this.n3x_1;
  };
  protoOf(SavedHttpResponse).y3v = function () {
    return this.o3x_1;
  };
  protoOf(SavedHttpResponse).w34 = function () {
    return this.p3x_1;
  };
  protoOf(SavedHttpResponse).g1r = function () {
    return this.q3x_1;
  };
  protoOf(SavedHttpResponse).u3v = function () {
    return ByteReadChannel_0(this.k3x_1);
  };
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.w3x_1 = responseBody;
    this.x3s_1 = new SavedHttpRequest(this, request);
    this.y3s_1 = new SavedHttpResponse(this, this.w3x_1, response);
    checkContentLength(contentLength(response), fromInt(this.w3x_1.length), request.b3w());
    this.x3x_1 = true;
  }
  protoOf(SavedHttpCall).q3v = function () {
    return this.x3x_1;
  };
  function SavedHttpRequest(call, origin) {
    this.y3x_1 = origin;
    this.z3x_1 = call;
  }
  protoOf(SavedHttpRequest).t3v = function () {
    return this.z3x_1;
  };
  protoOf(SavedHttpRequest).g1r = function () {
    return this.y3x_1.g1r();
  };
  protoOf(SavedHttpRequest).b3w = function () {
    return this.y3x_1.b3w();
  };
  protoOf(SavedHttpRequest).c3w = function () {
    return this.y3x_1.c3w();
  };
  protoOf(SavedHttpRequest).p3v = function () {
    return this.y3x_1.p3v();
  };
  protoOf(SavedHttpRequest).d1b = function () {
    return this.y3x_1.d1b();
  };
  protoOf(SavedHttpRequest).w34 = function () {
    return this.y3x_1.w34();
  };
  function $saveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i3x_1 = _this__u8e3s4;
  }
  protoOf($saveCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var tmp_0 = this.i3x_1;
            if (tmp_0 instanceof SavedHttpCall)
              return this.i3x_1;
            this.i8_1 = 1;
            suspendResult = readBuffer(this.i3x_1.a3t().u3v(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readByteArray(ARGUMENT);
            return new SavedHttpCall(this.i3x_1.v3s_1, this.i3x_1.o3v(), this.i3x_1.a3t(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + toString(getKClassFromExpression(content)), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ProgressListener() {
  }
  function getContent($this, delegate) {
    var tmp;
    if (delegate instanceof ContentWrapper) {
      tmp = getContent($this, delegate.q3c());
    } else {
      if (delegate instanceof ByteArrayContent) {
        tmp = ByteReadChannel_0(delegate.m3a());
      } else {
        if (delegate instanceof ProtocolUpgrade) {
          throw new UnsupportedContentTypeException(delegate);
        } else {
          if (delegate instanceof NoContent) {
            tmp = Companion_getInstance().t2g_1;
          } else {
            if (delegate instanceof ReadChannelContent) {
              tmp = delegate.k3c();
            } else {
              if (delegate instanceof WriteChannelContent) {
                var tmp_0 = GlobalScope_instance;
                tmp = writer(tmp_0, $this.d3y_1, true, ObservableContent$getContent$slambda_0(delegate, null)).p2g_1;
              } else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function ObservableContent$getContent$slambda($delegate, resultContinuation) {
    this.n3y_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ObservableContent$getContent$slambda).m3h = function ($this$writer, $completion) {
    var tmp = this.n3h($this$writer, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ObservableContent$getContent$slambda).e9 = function (p1, $completion) {
    return this.m3h(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ObservableContent$getContent$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.n3y_1.m3c(this.o3y_1.k2m_1, this);
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
  protoOf(ObservableContent$getContent$slambda).n3h = function ($this$writer, completion) {
    var i = new ObservableContent$getContent$slambda(this.n3y_1, completion);
    i.o3y_1 = $this$writer;
    return i;
  };
  function ObservableContent$getContent$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$getContent$slambda($delegate, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.m3h($this$writer, $completion);
    }, 1);
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.c3y_1 = delegate;
    this.d3y_1 = callContext;
    this.e3y_1 = listener;
  }
  protoOf(ObservableContent).k3a = function () {
    return this.c3y_1.k3a();
  };
  protoOf(ObservableContent).l3a = function () {
    return this.c3y_1.l3a();
  };
  protoOf(ObservableContent).w34 = function () {
    return this.c3y_1.w34();
  };
  protoOf(ObservableContent).k3c = function () {
    return observable(getContent(this, this.c3y_1), this.d3y_1, this.l3a(), this.e3y_1);
  };
  function get_CALL_COROUTINE() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    _init_properties_HttpClientEngine_kt__h91z5h();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.b3s_1.x3c(get_HttpResponseCancelled(), $response);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.g1r().v8(Key_instance);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h1r();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $completion) {
    var tmp = new $executeWithinCallContextCOROUTINE$($this, requestData, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function checkExtensions($this, requestData) {
    var _iterator__ex2g4s = requestData.f3z_1.t();
    while (_iterator__ex2g4s.u()) {
      var requestedExtension = _iterator__ex2g4s.v();
      // Inline function 'kotlin.require' call
      if (!$this.g3z().i2(requestedExtension)) {
        var message = "Engine doesn't support " + toString(requestedExtension);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.p3z_1 = $client;
    this.q3z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$install$slambda).t3s = function ($this$intercept, content, $completion) {
    var tmp = this.u3s($this$intercept, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpClientEngine$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t3s(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var this_0 = new HttpRequestBuilder();
            this_0.u3z(this.r3z_1.j2v_1);
            var body = this.s3z_1;
            if (body == null) {
              this_0.d3u_1 = NullBody_instance;
              var tmp_0 = PrimitiveClasses_getInstance().eb();
              var tmp_1 = !(null == null);
              var tmp_2;
              try {
                tmp_2 = createKType(PrimitiveClasses_getInstance().eb(), arrayOf([]), false);
              } catch ($p) {
                var tmp_3;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_3 = null;
                } else {
                  throw $p;
                }
                tmp_2 = tmp_3;
              }
              this_0.v3z(new TypeInfo(tmp_0, tmp_1, tmp_2));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.d3u_1 = body;
                this_0.v3z(null);
              } else {
                this_0.d3u_1 = body;
                var tmp_4 = PrimitiveClasses_getInstance().eb();
                var tmp_5 = !(null == null);
                var tmp_6;
                try {
                  tmp_6 = createKType(PrimitiveClasses_getInstance().eb(), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_7;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_7 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_6 = tmp_7;
                }
                this_0.v3z(new TypeInfo(tmp_4, tmp_5, tmp_6));
              }
            }

            var builder = this_0;
            this.p3z_1.b3s_1.x3c(get_HttpRequestIsReadyForSending(), builder);
            var tmp_8 = this;
            var this_1 = builder.p30();
            this_1.e3z_1.s2p(get_CLIENT_CONFIG(), this.p3z_1.c3s_1);
            tmp_8.t3z_1 = this_1;
            validateHeaders(this.t3z_1);
            checkExtensions(this.q3z_1, this.t3z_1);
            this.i8_1 = 1;
            suspendResult = executeWithinCallContext(this.q3z_1, this.t3z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var responseData = suspendResult;
            var call = HttpClientCall_init_$Create$(this.p3z_1, this.t3z_1, responseData);
            var response = call.a3t();
            this.p3z_1.b3s_1.x3c(get_HttpResponseReceived(), response);
            var tmp_9 = get_job(response.g1r());
            tmp_9.i1s(HttpClientEngine$install$slambda$lambda(this.p3z_1, response));
            this.i8_1 = 2;
            suspendResult = this.r3z_1.n2u(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.l8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpClientEngine$install$slambda).u3s = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.p3z_1, this.q3z_1, completion);
    i.r3z_1 = $this$intercept;
    i.s3z_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.t3s($this$intercept, content, $completion);
    }, 2);
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.e40_1 = this$0;
    this.f40_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).h40 = function ($this$async, $completion) {
    var tmp = this.p2n($this$async, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).e9 = function (p1, $completion) {
    return this.h40((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            if (_get_closed__iwkfs1(this.e40_1)) {
              throw new ClientEngineClosedException();
            }

            this.i8_1 = 1;
            suspendResult = this.e40_1.i40(this.f40_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(HttpClientEngine$executeWithinCallContext$slambda).p2n = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.e40_1, this.f40_1, completion);
    i.g40_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    return constructCallableReference(function ($this$async, $completion) {
      return i.h40($this$async, $completion);
    }, 1);
  }
  function $executeWithinCallContextCOROUTINE$(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x3y_1 = _this__u8e3s4;
    this.y3y_1 = requestData;
  }
  protoOf($executeWithinCallContextCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = createCallContext(this.x3y_1, this.y3y_1.d3z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var callContext = suspendResult;
            var context = callContext.if(new KtorCallContextElement(callContext));
            this.i8_1 = 2;
            suspendResult = async(this.x3y_1, context, VOID, HttpClientEngine$executeWithinCallContext$slambda_0(this.x3y_1, this.y3y_1, null)).k1u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    _init_properties_HttpClientEngine_kt__h91z5h();
    var requestHeaders = request.b3z_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = requestHeaders.z2r();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (HttpHeaders_getInstance().o34_1.i2(element)) {
        destination.c1(element);
      }
    }
    var unsafeRequestHeaders = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!unsafeRequestHeaders.r()) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $completion) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.g1r().if(callJob).if(get_CALL_COROUTINE());
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp0_elvis_lhs = $completion.o8().v8(Key_instance);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.k1s(true, VOID, createCallContext$lambda(callJob));
      callJob.i1s(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      if (cause == null)
        return Unit_instance;
      var tmp1_elvis_lhs = cause instanceof CancellationException ? cause : null;
      var cancellation = tmp1_elvis_lhs == null ? CancellationException_init_$Create$_0(cause.message) : tmp1_elvis_lhs;
      $callJob.p1s(cancellation);
      return Unit_instance;
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.c1v();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function _init_properties_HttpClientEngine_kt__h91z5h() {
    if (!properties_initialized_HttpClientEngine_kt_5uiebb) {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'client-config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(HttpClientConfig);
      var tmp_0 = null instanceof HttpClientConfig;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(HttpClientConfig), arrayOf([getStarKTypeProjection()]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      CLIENT_CONFIG = new AttributeKey(name, tmp$ret$1);
    }
  }
  function HttpClientEngineBase$dispatcher$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.g3u().k40_1;
      return tmp0_elvis_lhs == null ? ioDispatcher() : tmp0_elvis_lhs;
    };
  }
  function HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v() {
    return constructCallableReference(function (p0) {
      return p0.n40();
    }, 1, 0, 21);
  }
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor().if(this$0.n40()).if(new CoroutineName(this$0.d3s_1 + '-context'));
    };
  }
  function HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr() {
    return constructCallableReference(function (p0) {
      return p0.g1r();
    }, 1, 0, 22);
  }
  function HttpClientEngineBase(engineName) {
    this.d3s_1 = engineName;
    this.e3s_1 = atomic$boolean$1(false);
    this.f3s_1 = atomic$int$1(0);
    var tmp = this;
    tmp.g3s_1 = lazy(HttpClientEngineBase$dispatcher$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.h3s_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  protoOf(HttpClientEngineBase).n40 = function () {
    var tmp0 = this.g3s_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('dispatcher', 1, tmp, HttpClientEngineBase$_get_dispatcher_$ref_kz5x8v(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).g1r = function () {
    var tmp0 = this.h3s_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('coroutineContext', 1, tmp, HttpClientEngineBase$_get_coroutineContext_$ref_p82ehr(), null);
    return tmp0.n1();
  };
  protoOf(HttpClientEngineBase).t3 = function () {
    if (!this.e3s_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    var tmp = this.g1r().v8(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.i1y();
  };
  function ClientEngineClosedException(cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$_0('Client already closed', this);
    captureStack(this, ClientEngineClosedException);
    this.o40_1 = cause;
    delete this.cause;
  }
  protoOf(ClientEngineClosedException).f = function () {
    return this.o40_1;
  };
  function get_ENGINE_CAPABILITIES_KEY() {
    _init_properties_HttpClientEngineCapability_kt__ifvyst();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function _init_properties_HttpClientEngineCapability_kt__ifvyst() {
    if (!properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'EngineCapabilities';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableMap);
      var tmp_0 = !(null == null) ? isInterface(null, KtMutableMap) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(KtMutableMap), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpClientEngineCapability), arrayOf([getStarKTypeProjection()]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().eb(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      ENGINE_CAPABILITIES_KEY = new AttributeKey(name, tmp$ret$1);
      DEFAULT_CAPABILITIES = setOf(HttpTimeoutCapability_instance);
    }
  }
  function HttpClientEngineConfig() {
    this.j40_1 = 4;
    this.k40_1 = null;
    this.l40_1 = false;
    this.m40_1 = null;
  }
  function get_KTOR_DEFAULT_USER_AGENT() {
    _init_properties_Utils_kt__jo07cx();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    _init_properties_Utils_kt__jo07cx();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_10() {
    return Companion_instance_1;
  }
  function KtorCallContextElement(callContext) {
    this.p40_1 = callContext;
  }
  protoOf(KtorCallContextElement).m1 = function () {
    return Companion_instance_1;
  };
  function callContext($completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var tmp$ret$0 = $completion.o8();
    return ensureNotNull(tmp$ret$0.v8(Companion_instance_1)).p40_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    _init_properties_Utils_kt__jo07cx();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.e2s(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.i1b('User-Agent') == null && content.w34().i1b('User-Agent') == null;
    if (missingAgent && needUserAgent()) {
      block('User-Agent', get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.k3a();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.w34().i1b('Content-Type') : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.i1b('Content-Type') : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.l3a();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.w34().i1b('Content-Length') : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.i1b('Content-Length') : tmp5_elvis_lhs;
    if (type == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block('Content-Type', type);
    }
    if (length == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      block('Content-Length', length);
    }
  }
  function needUserAgent() {
    _init_properties_Utils_kt__jo07cx();
    return !PlatformUtils_getInstance().k2r_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.d2s($requestHeaders);
      $this$buildHeaders.d2s($content.w34());
      return Unit_instance;
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if ('Content-Length' === key) {
        return Unit_instance;
      }
      var tmp_0;
      if ('Content-Type' === key) {
        return Unit_instance;
      }
      var tmp_1;
      if (get_DATE_HEADERS().i2(key)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = values.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          $block(key, element);
        }
        tmp_1 = Unit_instance;
      } else {
        var separator = 'Cookie' === key ? '; ' : ',';
        tmp_1 = $block(key, joinToString(values, separator));
      }
      return Unit_instance;
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function _init_properties_Utils_kt__jo07cx() {
    if (!properties_initialized_Utils_kt_xvi83j) {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'ktor-client';
      DATE_HEADERS = setOf_0(['Date', 'Expires', 'Last-Modified', 'If-Modified-Since', 'If-Unmodified-Since']);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    _init_properties_BodyProgress_kt__s0v569();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function get_BodyProgress() {
    _init_properties_BodyProgress_kt__s0v569();
    return BodyProgress;
  }
  var BodyProgress;
  function AfterRenderHook$install$slambda($handler, resultContinuation) {
    this.y40_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterRenderHook$install$slambda).t3s = function ($this$intercept, content, $completion) {
    var tmp = this.u3s($this$intercept, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(AfterRenderHook$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t3s(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterRenderHook$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp_0 = this.a41_1;
            if (!(tmp_0 instanceof OutgoingContent))
              return Unit_instance;
            this.i8_1 = 1;
            suspendResult = this.y40_1(this.z40_1.j2v_1, this.a41_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            var newContent = tmp_1;
            this.i8_1 = 2;
            suspendResult = this.z40_1.n2u(newContent, this);
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
  protoOf(AfterRenderHook$install$slambda).u3s = function ($this$intercept, content, completion) {
    var i = new AfterRenderHook$install$slambda(this.y40_1, completion);
    i.z40_1 = $this$intercept;
    i.a41_1 = content;
    return i;
  };
  function AfterRenderHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterRenderHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.t3s($this$intercept, content, $completion);
    }, 2);
  }
  function AfterRenderHook() {
  }
  protoOf(AfterRenderHook).b41 = function (client, handler) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    client.v3r_1.k2v(Phases_getInstance().f41_1, observableContentPhase);
    client.v3r_1.n2v(observableContentPhase, AfterRenderHook$install$slambda_0(handler, null));
  };
  protoOf(AfterRenderHook).h41 = function (client, handler) {
    return this.b41(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var AfterRenderHook_instance;
  function AfterRenderHook_getInstance() {
    return AfterRenderHook_instance;
  }
  function AfterReceiveHook$install$slambda($handler, resultContinuation) {
    this.q41_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AfterReceiveHook$install$slambda).t41 = function ($this$intercept, response, $completion) {
    var tmp = this.u41($this$intercept, response, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(AfterReceiveHook$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t41(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(AfterReceiveHook$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.i8_1 = 1;
            suspendResult = this.q41_1(this.s41_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var newResponse = suspendResult;
            if (!(newResponse == null)) {
              this.i8_1 = 2;
              suspendResult = this.r41_1.n2u(newResponse, this);
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
  protoOf(AfterReceiveHook$install$slambda).u41 = function ($this$intercept, response, completion) {
    var i = new AfterReceiveHook$install$slambda(this.q41_1, completion);
    i.r41_1 = $this$intercept;
    i.s41_1 = response;
    return i;
  };
  function AfterReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new AfterReceiveHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.t41($this$intercept, response, $completion);
    }, 2);
  }
  function AfterReceiveHook() {
  }
  protoOf(AfterReceiveHook).v41 = function (client, handler) {
    var tmp = Phases_getInstance_2().y41_1;
    client.y3r_1.n2v(tmp, AfterReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(AfterReceiveHook).h41 = function (client, handler) {
    return this.v41(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var AfterReceiveHook_instance;
  function AfterReceiveHook_getInstance() {
    return AfterReceiveHook_instance;
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = _this__u8e3s4.t3v();
    return replaceResponse(tmp, VOID, withObservableDownload$lambda(listener)).a3t();
  }
  function BodyProgress$lambda($this$createClientPlugin) {
    _init_properties_BodyProgress_kt__s0v569();
    var tmp = AfterRenderHook_instance;
    $this$createClientPlugin.e42(tmp, BodyProgress$lambda$slambda_0(null));
    var tmp_0 = AfterReceiveHook_instance;
    $this$createClientPlugin.e42(tmp_0, BodyProgress$lambda$slambda_2(null));
    return Unit_instance;
  }
  function BodyProgress$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda).p42 = function (request, content, $completion) {
    var tmp = this.q42(request, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(BodyProgress$lambda$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.p42(tmp, p2 instanceof OutgoingContent ? p2 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          var tmp0_elvis_lhs = this.n42_1.f3u_1.q2p(get_UploadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return new ObservableContent(this.o42_1, this.n42_1.e3u_1, listener);
        } else if (tmp === 1) {
          throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda).q42 = function (request, content, completion) {
    var i = new BodyProgress$lambda$slambda(completion);
    i.n42_1 = request;
    i.o42_1 = content;
    return i;
  };
  function BodyProgress$lambda$slambda_0(resultContinuation) {
    var i = new BodyProgress$lambda$slambda(resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.p42(request, content, $completion);
    }, 2);
  }
  function BodyProgress$lambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(BodyProgress$lambda$slambda_1).a43 = function (response, $completion) {
    var tmp = this.b43(response, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(BodyProgress$lambda$slambda_1).e9 = function (p1, $completion) {
    return this.a43(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(BodyProgress$lambda$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          var tmp0_elvis_lhs = this.z42_1.t3v().o3v().p3v().q2p(get_DownloadProgressListenerAttributeKey());
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var listener = tmp_0;
          return withObservableDownload(this.z42_1, listener);
        } else if (tmp === 1) {
          throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(BodyProgress$lambda$slambda_1).b43 = function (response, completion) {
    var i = new BodyProgress$lambda$slambda_1(completion);
    i.z42_1 = response;
    return i;
  };
  function BodyProgress$lambda$slambda_2(resultContinuation) {
    var i = new BodyProgress$lambda$slambda_1(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.a43(response, $completion);
    }, 1);
  }
  function withObservableDownload$lambda($listener) {
    return function ($this$replaceResponse) {
      return observable($this$replaceResponse.u3v(), $this$replaceResponse.g1r(), contentLength($this$replaceResponse), $listener);
    };
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function _init_properties_BodyProgress_kt__s0v569() {
    if (!properties_initialized_BodyProgress_kt_pmfrhr) {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'UploadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ProgressListener);
      var tmp_0 = !(null == null) ? isInterface(null, ProgressListener) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      UploadProgressListenerAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'DownloadProgressListenerAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = getKClass(ProgressListener);
      var tmp_4 = !(null == null) ? isInterface(null, ProgressListener) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_5;
      try {
        tmp_5 = createKType(getKClass(ProgressListener), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_6;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_6 = null;
        } else {
          throw $p_0;
        }
        tmp_5 = tmp_6;
      }
      var tmp$ret$2_0 = tmp_5;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp_4, tmp$ret$2_0);
      DownloadProgressListenerAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      BodyProgress = createClientPlugin('BodyProgress', BodyProgress$lambda);
    }
  }
  function get_ValidateMark() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return ValidateMark;
  }
  var ValidateMark;
  function get_LOGGER() {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    return LOGGER;
  }
  var LOGGER;
  function addDefaultResponseValidation(_this__u8e3s4) {
    _init_properties_DefaultResponseValidation_kt__wcn8vr();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response.toString() + '. Text: "' + cachedResponseText + '"', this);
    captureStack(this, ResponseException);
    this.c43_1 = response;
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, RedirectResponseException);
    this.e43_1 = 'Unhandled redirect: ' + response.t3v().o3v().b3w().h35_1 + ' ' + response.t3v().o3v().c3w().toString() + '. ' + ('Status: ' + response.v3v().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(RedirectResponseException).e = function () {
    return this.e43_1;
  };
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ClientRequestException);
    this.g43_1 = 'Client request(' + response.t3v().o3v().b3w().h35_1 + ' ' + response.t3v().o3v().c3w().toString() + ') ' + ('invalid: ' + response.v3v().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ClientRequestException).e = function () {
    return this.g43_1;
  };
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    captureStack(this, ServerResponseException);
    this.i43_1 = 'Server error(' + response.t3v().o3v().b3w().h35_1 + ' ' + response.t3v().o3v().c3w().toString() + ': ' + (response.v3v().toString() + '. Text: "' + cachedResponseText + '"');
    delete this.message;
  }
  protoOf(ServerResponseException).e = function () {
    return this.i43_1;
  };
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(addDefaultResponseValidation$lambda$slambda).v43 = function (response, $completion) {
    var tmp = this.b43(response, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).e9 = function (p1, $completion) {
    return this.v43(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            var expectSuccess = this.r43_1.t3v().p3v().p2p(get_ExpectSuccessAttributeKey());
            if (!expectSuccess) {
              var this_0 = get_LOGGER();
              if (get_isTraceEnabled(this_0)) {
                this_0.i2w('Skipping default response validation for ' + this.r43_1.t3v().o3v().c3w().toString());
              }
              return Unit_instance;
            }

            this.t43_1 = this.r43_1.v3v().v37_1;
            var originCall = this.r43_1.t3v();
            if (this.t43_1 < 300 || originCall.p3v().r2p(get_ValidateMark())) {
              return Unit_instance;
            }

            this.i8_1 = 1;
            suspendResult = save(originCall, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_1 = suspendResult;
            this_1.p3v().s2p(get_ValidateMark(), Unit_instance);
            var exceptionCall = this_1;
            this.s43_1 = exceptionCall.a3t();
            this.j8_1 = 3;
            this.i8_1 = 2;
            suspendResult = bodyAsText(this.s43_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u43_1 = suspendResult;
            this.j8_1 = 5;
            this.i8_1 = 4;
            continue $sm;
          case 3:
            this.j8_1 = 5;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _unused_var__etf5q3 = this.l8_1;
              var tmp_1 = this;
              tmp_1.u43_1 = '<body failed decoding>';
              this.i8_1 = 4;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 4:
            this.j8_1 = 5;
            var exceptionResponseText = this.u43_1;
            var tmp0_subject = this.t43_1;
            var exception = (300 <= tmp0_subject ? tmp0_subject <= 399 : false) ? new RedirectResponseException(this.s43_1, exceptionResponseText) : (400 <= tmp0_subject ? tmp0_subject <= 499 : false) ? new ClientRequestException(this.s43_1, exceptionResponseText) : (500 <= tmp0_subject ? tmp0_subject <= 599 : false) ? new ServerResponseException(this.s43_1, exceptionResponseText) : new ResponseException(this.s43_1, exceptionResponseText);
            var this_2 = get_LOGGER();
            if (get_isTraceEnabled(this_2)) {
              this_2.j2w('Default response validation for ' + this.r43_1.t3v().o3v().c3w().toString() + ' failed with exception', exception);
            }

            throw exception;
          case 5:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 5) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(addDefaultResponseValidation$lambda$slambda).b43 = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.r43_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    return constructCallableReference(function (response, $completion) {
      return i.v43(response, $completion);
    }, 1);
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.y43_1 = $this_addDefaultResponseValidation.t3u_1;
      $this$HttpResponseValidator.z43(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_instance;
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function _init_properties_DefaultResponseValidation_kt__wcn8vr() {
    if (!properties_initialized_DefaultResponseValidation_kt_akvzqt) {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ValidateMark';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      var tmp_0 = null instanceof Unit;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      ValidateMark = new AttributeKey(name, tmp$ret$1);
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.DefaultResponseValidation');
    }
  }
  function get_LOGGER_0() {
    _init_properties_DefaultTransform_kt__20knxx();
    return LOGGER_0;
  }
  var LOGGER_0;
  function defaultTransformers(_this__u8e3s4) {
    _init_properties_DefaultTransform_kt__20knxx();
    var tmp = Phases_getInstance().f41_1;
    _this__u8e3s4.v3r_1.n2v(tmp, defaultTransformers$slambda_0(null));
    var clientScope = _this__u8e3s4;
    var tmp_0 = Phases_getInstance_1().z3u_1;
    _this__u8e3s4.w3r_1.n2v(tmp_0, defaultTransformers$slambda_2(clientScope, null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.d44_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    tmp.b44_1 = $contentType == null ? Application_getInstance().a2y_1 : $contentType;
    this.c44_1 = fromInt($body.length);
  }
  protoOf(defaultTransformers$1$content$1).k3a = function () {
    return this.b44_1;
  };
  protoOf(defaultTransformers$1$content$1).l3a = function () {
    return this.c44_1;
  };
  protoOf(defaultTransformers$1$content$1).m3a = function () {
    return this.d44_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.h44_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.j2v_1.c3u_1.i1b('Content-Length');
    tmp.f44_1 = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
    var tmp_0 = this;
    tmp_0.g44_1 = $contentType == null ? Application_getInstance().a2y_1 : $contentType;
  }
  protoOf(defaultTransformers$1$content$2).l3a = function () {
    return this.f44_1;
  };
  protoOf(defaultTransformers$1$content$2).k3a = function () {
    return this.g44_1;
  };
  protoOf(defaultTransformers$1$content$2).k3c = function () {
    return this.h44_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda).t3s = function ($this$intercept, body, $completion) {
    var tmp = this.u3s($this$intercept, body, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(defaultTransformers$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t3s(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            if (this.q44_1.j2v_1.c3u_1.i1b('Accept') == null) {
              this.q44_1.j2v_1.c3u_1.c2s('Accept', '*/*');
            }

            var contentType_0 = contentType(this.q44_1.j2v_1);
            var tmp0_subject = this.r44_1;
            var tmp_0;
            if (typeof tmp0_subject === 'string') {
              tmp_0 = new TextContent(this.r44_1, contentType_0 == null ? Text_getInstance().s2z_1 : contentType_0);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_0 = new defaultTransformers$1$content$1(contentType_0, this.r44_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_0 = new defaultTransformers$1$content$2(this.q44_1, contentType_0, this.r44_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_0 = this.r44_1;
                  } else {
                    tmp_0 = platformRequestDefaultTransform(contentType_0, this.q44_1.j2v_1, this.r44_1);
                  }
                }
              }
            }

            var content = tmp_0;
            if (!((content == null ? null : content.k3a()) == null)) {
              this.q44_1.j2v_1.c3u_1.f2s('Content-Type');
              var this_0 = get_LOGGER_0();
              if (get_isTraceEnabled(this_0)) {
                this_0.i2w('Transformed with default transformers request body for ' + this.q44_1.j2v_1.a3u_1.toString() + ' from ' + toString(getKClassFromExpression(this.r44_1)));
              }
              this.i8_1 = 1;
              suspendResult = this.q44_1.n2u(content, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 2;
              continue $sm;
            }

          case 1:
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
  protoOf(defaultTransformers$slambda).u3s = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.q44_1 = $this$intercept;
    i.r44_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, body, $completion) {
      return i.t3s($this$intercept, body, $completion);
    }, 2);
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.a45_1 = $body;
    this.b45_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda$slambda).m3h = function ($this$writer, $completion) {
    var tmp = this.n3h($this$writer, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(defaultTransformers$slambda$slambda).e9 = function (p1, $completion) {
    return this.m3h(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = copyTo(this.a45_1, this.c45_1.k2m_1, 9223372036854775807n, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            rethrowCloseCauseIfNeeded(this.a45_1);
            this.j8_1 = 4;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            this.j8_1 = 4;
            return Unit_instance;
          case 3:
            this.j8_1 = 4;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof CancellationException) {
              var cause = this.l8_1;
              cancel(this.b45_1, cause);
              throw cause;
            } else {
              var tmp_1 = this.l8_1;
              if (tmp_1 instanceof Error) {
                var cause_0 = this.l8_1;
                cancel_0(this.b45_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.l8_1;
              }
            }

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
  protoOf(defaultTransformers$slambda$slambda).n3h = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.a45_1, this.b45_1, completion);
    i.c45_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.m3h($this$writer, $completion);
    }, 1);
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.i1y();
      return Unit_instance;
    };
  }
  function defaultTransformers$slambda_1($clientScope, resultContinuation) {
    this.l45_1 = $clientScope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultTransformers$slambda_1).o3t = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.p3t($this$intercept, _destruct__k2r9zo, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(defaultTransformers$slambda_1).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.o3t(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultTransformers$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 12;
            this.o45_1 = this.n45_1.oe();
            var body = this.n45_1.pe();
            if (!isInterface(body, ByteReadChannel))
              return Unit_instance;
            var response = this.m45_1.j2v_1.a3t();
            var tmp0_subject = this.o45_1.a2w_1;
            if (tmp0_subject.equals(getKClass(Unit))) {
              cancel_1(body);
              this.i8_1 = 10;
              suspendResult = this.m45_1.n2u(new HttpResponseContainer(this.o45_1, Unit_instance), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().kb())) {
                this.i8_1 = 8;
                suspendResult = readBuffer(body, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject.equals(getKClass(Source)) || tmp0_subject.equals(getKClass(Source))) {
                  this.i8_1 = 6;
                  suspendResult = readBuffer(body, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject.equals(PrimitiveClasses_getInstance().tb())) {
                    this.i8_1 = 4;
                    suspendResult = toByteArray(body, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject.equals(getKClass(ByteReadChannel))) {
                      var responseJobHolder = Job(get_job(response.g1r()));
                      var byteChannel = new ByteChannel();
                      var this_0 = writer_0(this.l45_1, VOID, byteChannel, defaultTransformers$slambda$slambda_0(body, response, null));
                      invokeOnCompletion(this_0, defaultTransformers$slambda$lambda(responseJobHolder));
                      attachJob(byteChannel, get_job(response.g1r()));
                      attachWriterJob(body, this_0);
                      var channel = this_0.p2g_1;
                      this.i8_1 = 3;
                      suspendResult = this.m45_1.n2u(new HttpResponseContainer(this.o45_1, channel), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (tmp0_subject.equals(getKClass(HttpStatusCode))) {
                        cancel_1(body);
                        this.i8_1 = 2;
                        suspendResult = this.m45_1.n2u(new HttpResponseContainer(this.o45_1, response.v3v()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        if (tmp0_subject.equals(getKClass(MultiPartData))) {
                          var tmp0 = this.m45_1.j2v_1.a3t().w34().i1b('Content-Type');
                          var tmp$ret$0;
                          l$ret$1: do {
                            if (tmp0 == null) {
                              var message = 'No content type provided for multipart';
                              throw IllegalStateException_init_$Create$(toString(message));
                            } else {
                              tmp$ret$0 = tmp0;
                              break l$ret$1;
                            }
                          }
                           while (false);
                          var rawContentType = tmp$ret$0;
                          var contentType = Companion_getInstance_0().zl(rawContentType);
                          if (!contentType.m30(MultiPart_getInstance().l2z_1)) {
                            var message_0 = 'Expected multipart/form-data, got ' + contentType.toString();
                            throw IllegalStateException_init_$Create$(toString(message_0));
                          }
                          var tmp1_safe_receiver = this.m45_1.j2v_1.a3t().w34().i1b('Content-Length');
                          var contentLength_0 = tmp1_safe_receiver == null ? null : toLong(tmp1_safe_receiver);
                          var body_0 = new CIOMultipartDataBase(this.m45_1.g1r(), body, rawContentType, contentLength_0);
                          var parsedResponse = new HttpResponseContainer(this.o45_1, body_0);
                          this.i8_1 = 1;
                          suspendResult = this.m45_1.n2u(parsedResponse, this);
                          if (suspendResult === get_COROUTINE_SUSPENDED()) {
                            return suspendResult;
                          }
                          continue $sm;
                        } else {
                          this.p45_1 = null;
                          this.i8_1 = 11;
                          continue $sm;
                        }
                      }
                    }
                  }
                }
              }
            }

          case 1:
            this.p45_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 2:
            this.p45_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 3:
            this.p45_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 4:
            var bytes = suspendResult;
            checkContentLength(contentLength(this.m45_1.j2v_1.a3t()), fromInt(bytes.length), this.m45_1.j2v_1.o3v().b3w());
            this.i8_1 = 5;
            suspendResult = this.m45_1.n2u(new HttpResponseContainer(this.o45_1, bytes), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.p45_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new HttpResponseContainer(this.o45_1, ARGUMENT);
            this.i8_1 = 7;
            suspendResult = this.m45_1.n2u(ARGUMENT_0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.p45_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 8:
            var ARGUMENT_1 = suspendResult;
            var ARGUMENT_2 = readText(ARGUMENT_1);
            var ARGUMENT_3 = toInt(ARGUMENT_2);
            var ARGUMENT_4 = new HttpResponseContainer(this.o45_1, ARGUMENT_3);
            this.i8_1 = 9;
            suspendResult = this.m45_1.n2u(ARGUMENT_4, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.p45_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 10:
            this.p45_1 = suspendResult;
            this.i8_1 = 11;
            continue $sm;
          case 11:
            var result = this.p45_1;
            if (!(result == null)) {
              var this_1 = get_LOGGER_0();
              if (get_isTraceEnabled(this_1)) {
                this_1.i2w('Transformed with default transformers response body for ' + this.m45_1.j2v_1.o3v().c3w().toString() + ' to ' + toString(this.o45_1.a2w_1));
              }
            }

            return Unit_instance;
          case 12:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 12) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(defaultTransformers$slambda_1).p3t = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new defaultTransformers$slambda_1(this.l45_1, completion);
    i.m45_1 = $this$intercept;
    i.n45_1 = _destruct__k2r9zo;
    return i;
  };
  function defaultTransformers$slambda_2($clientScope, resultContinuation) {
    var i = new defaultTransformers$slambda_1($clientScope, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.o3t($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  var properties_initialized_DefaultTransform_kt_ossax9;
  function _init_properties_DefaultTransform_kt__20knxx() {
    if (!properties_initialized_DefaultTransform_kt_ossax9) {
      properties_initialized_DefaultTransform_kt_ossax9 = true;
      LOGGER_0 = KtorSimpleLogger('io.ktor.client.plugins.defaultTransformers');
    }
  }
  function get_LOGGER_1() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return LOGGER_1;
  }
  var LOGGER_1;
  function get_HttpCallValidator() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return HttpCallValidator;
  }
  var HttpCallValidator;
  function get_ExpectSuccessAttributeKey() {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidatorConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.w43_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.x43_1 = ArrayList_init_$Create$();
    this.y43_1 = true;
  }
  protoOf(HttpCallValidatorConfig).z43 = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.w43_1.c1(block);
  };
  function HttpResponseValidator(_this__u8e3s4, block) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    _this__u8e3s4.i3v(get_HttpCallValidator(), block);
  }
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function RequestError$install$slambda($handler, resultContinuation) {
    this.y45_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestError$install$slambda).t3s = function ($this$intercept, it, $completion) {
    var tmp = this.u3s($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(RequestError$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t3s(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestError$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.z45_1.o2u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b46_1 = suspendResult;
            this.j8_1 = 5;
            this.i8_1 = 4;
            continue $sm;
          case 2:
            this.j8_1 = 5;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              this.i8_1 = 3;
              suspendResult = this.y45_1(HttpRequest(this.z45_1.j2v_1), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.b46_1 = Unit_instance;
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.j8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 5) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(RequestError$install$slambda).u3s = function ($this$intercept, it, completion) {
    var i = new RequestError$install$slambda(this.y45_1, completion);
    i.z45_1 = $this$intercept;
    i.a46_1 = it;
    return i;
  };
  function RequestError$install$slambda_0($handler, resultContinuation) {
    var i = new RequestError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.t3s($this$intercept, it, $completion);
    }, 2);
  }
  function RequestError() {
  }
  protoOf(RequestError).c46 = function (client, handler) {
    var tmp = Phases_getInstance().c41_1;
    client.v3r_1.n2v(tmp, RequestError$install$slambda_0(handler, null));
  };
  protoOf(RequestError).h41 = function (client, handler) {
    return this.c46(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RequestError_instance;
  function RequestError_getInstance() {
    return RequestError_instance;
  }
  function ReceiveError$install$slambda($handler, resultContinuation) {
    this.l46_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveError$install$slambda).o3t = function ($this$intercept, it, $completion) {
    var tmp = this.p3t($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReceiveError$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.o3t(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveError$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.m46_1.o2u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o46_1 = suspendResult;
            this.j8_1 = 5;
            this.i8_1 = 4;
            continue $sm;
          case 2:
            this.j8_1 = 5;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              this.i8_1 = 3;
              suspendResult = this.l46_1(this.m46_1.j2v_1.o3v(), cause, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 3:
            var error = suspendResult;
            var tmp_1 = this;
            if (!(error == null))
              throw error;
            tmp_1.o46_1 = Unit_instance;
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.j8_1 = 5;
            return Unit_instance;
          case 5:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 5) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(ReceiveError$install$slambda).p3t = function ($this$intercept, it, completion) {
    var i = new ReceiveError$install$slambda(this.l46_1, completion);
    i.m46_1 = $this$intercept;
    i.n46_1 = it;
    return i;
  };
  function ReceiveError$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveError$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.o3t($this$intercept, it, $completion);
    }, 2);
  }
  function ReceiveError() {
  }
  protoOf(ReceiveError).c46 = function (client, handler) {
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    client.w3r_1.m2v(Phases_getInstance_1().y3u_1, BeforeReceive);
    client.w3r_1.n2v(BeforeReceive, ReceiveError$install$slambda_0(handler, null));
  };
  protoOf(ReceiveError).h41 = function (client, handler) {
    return this.c46(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ReceiveError_instance;
  function ReceiveError_getInstance() {
    return ReceiveError_instance;
  }
  function HttpRequest(builder) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    return new HttpRequest$1(builder);
  }
  function HttpCallValidatorConfig$_init_$ref_m1o2g9() {
    return constructCallableReference(function () {
      return new HttpCallValidatorConfig();
    }, 0, 0, 23, '<init>');
  }
  function HttpCallValidator$lambda($this$createClientPlugin) {
    _init_properties_HttpCallValidator_kt__r6yh2y();
    var responseValidators = reversed($this$createClientPlugin.b42_1.w43_1);
    var callExceptionHandlers = reversed($this$createClientPlugin.b42_1.x43_1);
    var expectSuccess = $this$createClientPlugin.b42_1.y43_1;
    var tmp = SetupRequest_instance;
    $this$createClientPlugin.e42(tmp, HttpCallValidator$lambda$slambda_0(expectSuccess, null));
    var tmp_0 = Send_instance;
    $this$createClientPlugin.e42(tmp_0, HttpCallValidator$lambda$slambda_2(responseValidators, null));
    var tmp_1 = RequestError_instance;
    $this$createClientPlugin.e42(tmp_1, HttpCallValidator$lambda$slambda_4(callExceptionHandlers, null));
    var tmp_2 = ReceiveError_instance;
    $this$createClientPlugin.e42(tmp_2, HttpCallValidator$lambda$slambda_6(callExceptionHandlers, null));
    return Unit_instance;
  }
  function invoke$validateResponse(responseValidators, response, $completion) {
    var tmp = new $invoke$validateResponseCOROUTINE$(responseValidators, response, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function invoke$processException(callExceptionHandlers, cause, request, $completion) {
    var tmp = new $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function HttpCallValidator$lambda$slambda$lambda($expectSuccess) {
    return function () {
      return $expectSuccess;
    };
  }
  function HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation) {
    this.u47_1 = $expectSuccess;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda).w47 = function (request, $completion) {
    var tmp = this.x47(request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpCallValidator$lambda$slambda).e9 = function (p1, $completion) {
    return this.w47(p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          var tmp_0 = get_ExpectSuccessAttributeKey();
          this.v47_1.f3u_1.v2p(tmp_0, HttpCallValidator$lambda$slambda$lambda(this.u47_1));
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
  protoOf(HttpCallValidator$lambda$slambda).x47 = function (request, completion) {
    var i = new HttpCallValidator$lambda$slambda(this.u47_1, completion);
    i.v47_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_0($expectSuccess, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda($expectSuccess, resultContinuation);
    return constructCallableReference(function (request, $completion) {
      return i.w47(request, $completion);
    }, 1);
  }
  function HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation) {
    this.g48_1 = $responseValidators;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_1).k48 = function ($this$on, request, $completion) {
    var tmp = this.l48($this$on, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpCallValidator$lambda$slambda_1).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.k48(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = this.h48_1.o48(this.i48_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j48_1 = suspendResult;
            this.i8_1 = 2;
            suspendResult = invoke$validateResponse(this.g48_1, this.j48_1.a3t(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.j48_1;
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
  protoOf(HttpCallValidator$lambda$slambda_1).l48 = function ($this$on, request, completion) {
    var i = new HttpCallValidator$lambda$slambda_1(this.g48_1, completion);
    i.h48_1 = $this$on;
    i.i48_1 = request;
    return i;
  };
  function HttpCallValidator$lambda$slambda_2($responseValidators, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_1($responseValidators, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.k48($this$on, request, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation) {
    this.x48_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_3).b49 = function (request, cause, $completion) {
    var tmp = this.c49(request, cause, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpCallValidator$lambda$slambda_3).c9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.b49(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_3).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.a49_1 = unwrapCancellationException(this.z48_1);
            this.i8_1 = 1;
            suspendResult = invoke$processException(this.x48_1, this.a49_1, this.y48_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.a49_1;
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
  protoOf(HttpCallValidator$lambda$slambda_3).c49 = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_3(this.x48_1, completion);
    i.y48_1 = request;
    i.z48_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_4($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_3($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.b49(request, cause, $completion);
    }, 2);
  }
  function HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation) {
    this.l49_1 = $callExceptionHandlers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpCallValidator$lambda$slambda_5).b49 = function (request, cause, $completion) {
    var tmp = this.c49(request, cause, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpCallValidator$lambda$slambda_5).c9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, HttpRequest_0) : false) ? p1 : THROW_CCE();
    return this.b49(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpCallValidator$lambda$slambda_5).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.o49_1 = unwrapCancellationException(this.n49_1);
            this.i8_1 = 1;
            suspendResult = invoke$processException(this.l49_1, this.o49_1, this.m49_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.o49_1;
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
  protoOf(HttpCallValidator$lambda$slambda_5).c49 = function (request, cause, completion) {
    var i = new HttpCallValidator$lambda$slambda_5(this.l49_1, completion);
    i.m49_1 = request;
    i.n49_1 = cause;
    return i;
  };
  function HttpCallValidator$lambda$slambda_6($callExceptionHandlers, resultContinuation) {
    var i = new HttpCallValidator$lambda$slambda_5($callExceptionHandlers, resultContinuation);
    return constructCallableReference(function (request, cause, $completion) {
      return i.b49(request, cause, $completion);
    }, 2);
  }
  function $invoke$validateResponseCOROUTINE$(responseValidators, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x46_1 = responseValidators;
    this.y46_1 = response;
  }
  protoOf($invoke$validateResponseCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            var this_0 = get_LOGGER_1();
            if (get_isTraceEnabled(this_0)) {
              this_0.i2w('Validating response for request ' + this.y46_1.t3v().o3v().c3w().toString());
            }

            this.z46_1 = this.x46_1.t();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.z46_1.u()) {
              this.i8_1 = 3;
              continue $sm;
            }

            var element = this.z46_1.v();
            this.i8_1 = 2;
            suspendResult = element(this.y46_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i8_1 = 1;
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
  function $invoke$processExceptionCOROUTINE$(callExceptionHandlers, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i47_1 = callExceptionHandlers;
    this.j47_1 = cause;
    this.k47_1 = request;
  }
  protoOf($invoke$processExceptionCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            var tmp0 = get_LOGGER_1();
            var cause = this.j47_1;
            if (get_isTraceEnabled(tmp0)) {
              tmp0.j2w('Processing exception ' + toString(getKClassFromExpression(this.j47_1)) + ' for request ' + this.k47_1.c3w().toString(), cause);
            }

            this.l47_1 = this.i47_1.t();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.l47_1.u()) {
              this.i8_1 = 5;
              continue $sm;
            }

            var element = this.l47_1.v();
            if (element instanceof ExceptionHandlerWrapper) {
              this.i8_1 = 3;
              suspendResult = element.q49_1(this.j47_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (element instanceof RequestExceptionHandlerWrapper) {
                this.i8_1 = 2;
                suspendResult = element.p49_1(this.j47_1, this.k47_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                noWhenBranchMatchedException();
              }
            }

            break;
          case 2:
            this.i8_1 = 4;
            continue $sm;
          case 3:
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.i8_1 = 1;
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
  function HttpRequest$1($builder) {
    this.v49_1 = $builder;
    this.r49_1 = $builder.b3u_1;
    this.s49_1 = $builder.a3u_1.p30();
    this.t49_1 = $builder.f3u_1;
    this.u49_1 = $builder.c3u_1.p30();
  }
  protoOf(HttpRequest$1).t3v = function () {
    // Inline function 'kotlin.error' call
    var message = 'Call is not initialized';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(HttpRequest$1).b3w = function () {
    return this.r49_1;
  };
  protoOf(HttpRequest$1).c3w = function () {
    return this.s49_1;
  };
  protoOf(HttpRequest$1).p3v = function () {
    return this.t49_1;
  };
  protoOf(HttpRequest$1).w34 = function () {
    return this.u49_1;
  };
  protoOf(HttpRequest$1).d1b = function () {
    var tmp = this.v49_1.d3u_1;
    var tmp0_elvis_lhs = tmp instanceof OutgoingContent ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Content was not transformed to OutgoingContent yet. Current body is ' + toString(this.v49_1.d3u_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function _init_properties_HttpCallValidator_kt__r6yh2y() {
    if (!properties_initialized_HttpCallValidator_kt_xrx49w) {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      LOGGER_1 = KtorSimpleLogger('io.ktor.client.plugins.HttpCallValidator');
      var tmp = HttpCallValidatorConfig$_init_$ref_m1o2g9();
      HttpCallValidator = createClientPlugin_0('HttpResponseValidator', tmp, HttpCallValidator$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ExpectSuccessAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().hb();
      var tmp_1 = !(null == null) ? typeof null === 'boolean' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_2;
      try {
        tmp_2 = createKType(PrimitiveClasses_getInstance().hb(), arrayOf([]), false);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_3 = null;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var tmp$ret$2 = tmp_2;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
      ExpectSuccessAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + toString(plugin) + ' is not installed. Consider using `install(' + plugin.m1().toString() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    _init_properties_HttpClientPlugin_kt__cypu1m();
    var tmp0_safe_receiver = _this__u8e3s4.z3r_1.q2p(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q2p(plugin.m1());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function _init_properties_HttpClientPlugin_kt__cypu1m() {
    if (!properties_initialized_HttpClientPlugin_kt_p98320) {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ApplicationPluginRegistry';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Attributes);
      var tmp_0 = !(null == null) ? isInterface(null, Attributes) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(Attributes), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      PLUGIN_INSTALLED_LIST = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_LOGGER_2() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return LOGGER_2;
  }
  var LOGGER_2;
  function get_HttpPlainText() {
    _init_properties_HttpPlainText_kt__iy89z1();
    return HttpPlainText;
  }
  var HttpPlainText;
  function HttpPlainTextConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.w49_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.x49_1 = LinkedHashMap_init_$Create$();
    this.y49_1 = null;
    this.z49_1 = Charsets_getInstance().n2o_1;
  }
  function RenderRequestHook$install$slambda($handler, resultContinuation) {
    this.i4a_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RenderRequestHook$install$slambda).t3s = function ($this$intercept, content, $completion) {
    var tmp = this.u3s($this$intercept, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(RenderRequestHook$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t3s(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RenderRequestHook$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.i8_1 = 1;
            suspendResult = this.i4a_1(this.j4a_1.j2v_1, this.k4a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!(result == null)) {
              this.i8_1 = 2;
              suspendResult = this.j4a_1.n2u(result, this);
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
  protoOf(RenderRequestHook$install$slambda).u3s = function ($this$intercept, content, completion) {
    var i = new RenderRequestHook$install$slambda(this.i4a_1, completion);
    i.j4a_1 = $this$intercept;
    i.k4a_1 = content;
    return i;
  };
  function RenderRequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RenderRequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.t3s($this$intercept, content, $completion);
    }, 2);
  }
  function RenderRequestHook() {
  }
  protoOf(RenderRequestHook).l4a = function (client, handler) {
    var tmp = Phases_getInstance().f41_1;
    client.v3r_1.n2v(tmp, RenderRequestHook$install$slambda_0(handler, null));
  };
  protoOf(RenderRequestHook).h41 = function (client, handler) {
    return this.l4a(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var RenderRequestHook_instance;
  function RenderRequestHook_getInstance() {
    return RenderRequestHook_instance;
  }
  function HttpPlainTextConfig$_init_$ref_isjudo() {
    return constructCallableReference(function () {
      return new HttpPlainTextConfig();
    }, 0, 0, 24, '<init>');
  }
  function HttpPlainText$lambda($this$createClientPlugin) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.collections.sortedByDescending' call
    var this_0 = toList($this$createClientPlugin.b42_1.x49_1);
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda$lambda;
    var tmp$ret$1 = new sam$kotlin_Comparator$0(tmp);
    var withQuality = sortedWith(this_0, tmp$ret$1);
    var responseCharsetFallback = $this$createClientPlugin.b42_1.z49_1;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = $this$createClientPlugin.b42_1.w49_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (!$this$createClientPlugin.b42_1.x49_1.l2(element)) {
        destination.c1(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda$lambda_0;
    var tmp$ret$6 = new sam$kotlin_Comparator$0(tmp_0);
    var withoutQuality = sortedWith(destination, tmp$ret$6);
    var tmp_1;
    var tmp0_0 = $this$createClientPlugin.b42_1.w49_1;
    var tmp$ret$7;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_2;
      if (isInterface(tmp0_0, Collection)) {
        tmp_2 = tmp0_0.r();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$7 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = tmp0_0.t();
      while (_iterator__ex2g4s_0.u()) {
        var element_0 = _iterator__ex2g4s_0.v();
        if (!element_0.equals(Charsets_getInstance().n2o_1)) {
          tmp$ret$7 = true;
          break $l$block_0;
        }
      }
      tmp$ret$7 = false;
    }
    if (tmp$ret$7) {
      tmp_1 = true;
    } else {
      var tmp0_1 = $this$createClientPlugin.b42_1.x49_1.o2();
      var tmp$ret$9;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_3;
        if (isInterface(tmp0_1, Collection)) {
          tmp_3 = tmp0_1.r();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$9 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_1 = tmp0_1.t();
        while (_iterator__ex2g4s_1.u()) {
          var element_1 = _iterator__ex2g4s_1.v();
          if (!element_1.equals(Charsets_getInstance().n2o_1)) {
            tmp$ret$9 = true;
            break $l$block_2;
          }
        }
        tmp$ret$9 = false;
      }
      tmp_1 = tmp$ret$9;
    }
    var hasRegisteredCharsets = tmp_1;
    var tmp_4;
    if (hasRegisteredCharsets) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_1 = StringBuilder_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_2 = withoutQuality.t();
      while (_iterator__ex2g4s_2.u()) {
        var element_2 = _iterator__ex2g4s_2.v();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_1) > 0) {
          this_1.q(',');
        }
        this_1.q(get_name(element_2));
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_3 = withQuality.t();
      while (_iterator__ex2g4s_3.u()) {
        var element_3 = _iterator__ex2g4s_3.v();
        var charset = element_3.oe();
        var quality = element_3.pe();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(this_1) > 0) {
          this_1.q(',');
        }
        // Inline function 'kotlin.check' call
        if (!(0.0 <= quality ? quality <= 1.0 : false)) {
          throw IllegalStateException_init_$Create$('Check failed.');
        }
        // Inline function 'kotlin.math.roundToInt' call
        var this_2 = 100 * quality;
        var truncatedQuality = roundToInt(this_2) / 100.0;
        this_1.q(get_name(charset) + ';q=' + truncatedQuality);
      }
      tmp_4 = this_1.toString();
    } else {
      tmp_4 = null;
    }
    var acceptCharsetHeader = tmp_4;
    var tmp0_elvis_lhs = $this$createClientPlugin.b42_1.y49_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_5;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = firstOrNull(withQuality);
      tmp_5 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.me_1;
    } else {
      tmp_5 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_5;
    var requestCharset = tmp3_elvis_lhs == null ? Charsets_getInstance().n2o_1 : tmp3_elvis_lhs;
    var tmp_6 = RenderRequestHook_instance;
    $this$createClientPlugin.e42(tmp_6, HttpPlainText$lambda$slambda_0(acceptCharsetHeader, requestCharset, null));
    $this$createClientPlugin.m4a(HttpPlainText$lambda$slambda_2(responseCharsetFallback, null));
    return Unit_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.n4a_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).qc = function (a, b) {
    return this.n4a_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.qc(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).d3 = function () {
    return this.n4a_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.d3(), other.d3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.d3());
  };
  function HttpPlainText$lambda$lambda(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.ne_1;
    var tmp$ret$2 = a.ne_1;
    return compareValues(tmp, tmp$ret$2);
  }
  function HttpPlainText$lambda$lambda_0(a, b) {
    _init_properties_HttpPlainText_kt__iy89z1();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = get_name(a);
    var tmp$ret$2 = get_name(b);
    return compareValues(tmp, tmp$ret$2);
  }
  function invoke$wrapContent(requestCharset, request, content, requestContentType) {
    var contentType = requestContentType == null ? Text_getInstance().s2z_1 : requestContentType;
    var tmp2_elvis_lhs = requestContentType == null ? null : charset(requestContentType);
    var charset_0 = tmp2_elvis_lhs == null ? requestCharset : tmp2_elvis_lhs;
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER_2();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Sending request body to ' + request.a3u_1.toString() + ' as text/plain with charset ' + charset_0.toString();
      this_0.i2w(tmp$ret$1);
    }
    return new TextContent(content, withCharset(contentType, charset_0));
  }
  function invoke$read(responseCharsetFallback, call, body) {
    var tmp0_elvis_lhs = charset_0(call.a3t());
    var actualCharset = tmp0_elvis_lhs == null ? responseCharsetFallback : tmp0_elvis_lhs;
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER_2();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Reading response body for ' + call.o3v().c3w().toString() + ' as String with charset ' + actualCharset.toString();
      this_0.i2w(tmp$ret$1);
    }
    return readText_0(body, actualCharset);
  }
  function invoke$addAcceptCharsetHeader(_this__u8e3s4, value) {
    if (value == null || !(_this__u8e3s4.c3u_1.i1b('Accept-Charset') == null))
      return Unit_instance;
    // Inline function 'io.ktor.util.logging.trace' call
    var this_0 = get_LOGGER_2();
    if (get_isTraceEnabled(this_0)) {
      var tmp$ret$1 = 'Adding Accept-Charset=' + value + ' to ' + _this__u8e3s4.a3u_1.toString();
      this_0.i2w(tmp$ret$1);
    }
    _this__u8e3s4.c3u_1.a2s('Accept-Charset', value);
  }
  function HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation) {
    this.w4a_1 = $acceptCharsetHeader;
    this.x4a_1 = $requestCharset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda).a4b = function (request, content, $completion) {
    var tmp = this.b4b(request, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpPlainText$lambda$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.a4b(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          invoke$addAcceptCharsetHeader(this.y4a_1, this.w4a_1);
          var tmp_0 = this.z4a_1;
          if (!(typeof tmp_0 === 'string'))
            return null;
          var contentType_0 = contentType(this.y4a_1);
          if (!(contentType_0 == null) && !(contentType_0.j30_1 === Text_getInstance().s2z_1.j30_1)) {
            return null;
          }
          return invoke$wrapContent(this.x4a_1, this.y4a_1, this.z4a_1, contentType_0);
        } else if (tmp === 1) {
          throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HttpPlainText$lambda$slambda).b4b = function (request, content, completion) {
    var i = new HttpPlainText$lambda$slambda(this.w4a_1, this.x4a_1, completion);
    i.y4a_1 = request;
    i.z4a_1 = content;
    return i;
  };
  function HttpPlainText$lambda$slambda_0($acceptCharsetHeader, $requestCharset, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda($acceptCharsetHeader, $requestCharset, resultContinuation);
    return constructCallableReference(function (request, content, $completion) {
      return i.a4b(request, content, $completion);
    }, 2);
  }
  function HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation) {
    this.k4b_1 = $responseCharsetFallback;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpPlainText$lambda$slambda_1).p4b = function ($this$transformResponseBody, response, content, requestedType, $completion) {
    var tmp = this.q4b($this$transformResponseBody, response, content, requestedType, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpPlainText$lambda$slambda_1).r4b = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.p4b(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(HttpPlainText$lambda$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            if (!this.o4b_1.a2w_1.equals(PrimitiveClasses_getInstance().pb()))
              return null;
            this.i8_1 = 1;
            suspendResult = readBuffer(this.n4b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return invoke$read(this.k4b_1, this.m4b_1.t3v(), bodyBytes);
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
  protoOf(HttpPlainText$lambda$slambda_1).q4b = function ($this$transformResponseBody, response, content, requestedType, completion) {
    var i = new HttpPlainText$lambda$slambda_1(this.k4b_1, completion);
    i.l4b_1 = $this$transformResponseBody;
    i.m4b_1 = response;
    i.n4b_1 = content;
    i.o4b_1 = requestedType;
    return i;
  };
  function HttpPlainText$lambda$slambda_2($responseCharsetFallback, resultContinuation) {
    var i = new HttpPlainText$lambda$slambda_1($responseCharsetFallback, resultContinuation);
    return constructCallableReference(function ($this$transformResponseBody, response, content, requestedType, $completion) {
      return i.p4b($this$transformResponseBody, response, content, requestedType, $completion);
    }, 4);
  }
  var properties_initialized_HttpPlainText_kt_2nx4ox;
  function _init_properties_HttpPlainText_kt__iy89z1() {
    if (!properties_initialized_HttpPlainText_kt_2nx4ox) {
      properties_initialized_HttpPlainText_kt_2nx4ox = true;
      LOGGER_2 = KtorSimpleLogger('io.ktor.client.plugins.HttpPlainText');
      var tmp = HttpPlainTextConfig$_init_$ref_isjudo();
      HttpPlainText = createClientPlugin_0('HttpPlainText', tmp, HttpPlainText$lambda);
    }
  }
  function get_ALLOWED_FOR_REDIRECT() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function get_LOGGER_3() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return LOGGER_3;
  }
  var LOGGER_3;
  function get_HttpResponseRedirectEvent() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpResponseRedirectEvent;
  }
  var HttpResponseRedirectEvent;
  function get_HttpRedirect() {
    _init_properties_HttpRedirect_kt__ure7fo();
    return HttpRedirect;
  }
  var HttpRedirect;
  function HttpRedirectConfig() {
    this.s4b_1 = true;
    this.t4b_1 = false;
  }
  function isRedirect(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp0_subject = _this__u8e3s4.v37_1;
    return tmp0_subject === Companion_getInstance_1().d36_1.v37_1 || tmp0_subject === Companion_getInstance_1().e36_1.v37_1 || (tmp0_subject === Companion_getInstance_1().j36_1.v37_1 || (tmp0_subject === Companion_getInstance_1().k36_1.v37_1 || tmp0_subject === Companion_getInstance_1().f36_1.v37_1)) ? true : false;
  }
  function removeDotSegments(_this__u8e3s4) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.r();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = _this__u8e3s4.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        if (element === '.' || element === '..') {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    if (tmp$ret$0)
      return _this__u8e3s4;
    var segments = firstOrNull(_this__u8e3s4) === '' ? _this__u8e3s4 : plus_0(listOf(''), _this__u8e3s4);
    var output = ArrayList_init_$Create$_0(segments.e1());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s_0 = segments.t();
    while (_iterator__ex2g4s_0.u()) {
      var item = _iterator__ex2g4s_0.v();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var isLast = checkIndexOverflow(_unary__edvuaz) === get_lastIndex(segments);
      switch (item) {
        case '.':
          if (isLast) {
            output.c1('');
          }

          break;
        case '..':
          if (output.e1() > 1) {
            output.u2(get_lastIndex(output));
          }

          if (isLast) {
            output.c1('');
          }

          break;
        default:
          output.c1(item);
          break;
      }
    }
    return output;
  }
  function HttpRedirectConfig$_init_$ref_rhym9t() {
    return constructCallableReference(function () {
      return new HttpRedirectConfig();
    }, 0, 0, 25, '<init>');
  }
  function HttpRedirect$lambda($this$createClientPlugin) {
    _init_properties_HttpRedirect_kt__ure7fo();
    var checkHttpMethod = $this$createClientPlugin.b42_1.s4b_1;
    var allowHttpsDowngrade = $this$createClientPlugin.b42_1.t4b_1;
    var tmp = Send_instance;
    $this$createClientPlugin.e42(tmp, HttpRedirect$lambda$slambda_0(checkHttpMethod, allowHttpsDowngrade, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$handleCall(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion) {
    var tmp = new $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    this.r4c_1 = $checkHttpMethod;
    this.s4c_1 = $allowHttpsDowngrade;
    this.t4c_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRedirect$lambda$slambda).k48 = function ($this$on, request, $completion) {
    var tmp = this.l48($this$on, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpRedirect$lambda$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.k48(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRedirect$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.i8_1 = 1;
            suspendResult = this.u4c_1.o48(this.v4c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var origin = suspendResult;
            if (this.r4c_1 && !get_ALLOWED_FOR_REDIRECT().i2(origin.o3v().b3w())) {
              return origin;
            }

            this.i8_1 = 2;
            suspendResult = invoke$handleCall(this.u4c_1, this.v4c_1, origin, this.s4c_1, this.t4c_1.a42_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  protoOf(HttpRedirect$lambda$slambda).l48 = function ($this$on, request, completion) {
    var i = new HttpRedirect$lambda$slambda(this.r4c_1, this.s4c_1, this.t4c_1, completion);
    i.u4c_1 = $this$on;
    i.v4c_1 = request;
    return i;
  };
  function HttpRedirect$lambda$slambda_0($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation) {
    var i = new HttpRedirect$lambda$slambda($checkHttpMethod, $allowHttpsDowngrade, $this_createClientPlugin, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.k48($this$on, request, $completion);
    }, 2);
  }
  function $invoke$handleCallCOROUTINE$(_this__u8e3s4, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c4c_1 = _this__u8e3s4;
    this.d4c_1 = context;
    this.e4c_1 = origin;
    this.f4c_1 = allowHttpsDowngrade;
    this.g4c_1 = client;
  }
  protoOf($invoke$handleCallCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            this.h4c_1 = this.e4c_1;
            this.i4c_1 = this.d4c_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.i8_1 = 4;
              continue $sm;
            }

            var previousProtocol = this.h4c_1.o3v().c3w().a39_1;
            var previousAuthority = get_authority(this.h4c_1.o3v().c3w());
            if (!isRedirect(this.h4c_1.a3t().v3v()))
              return this.h4c_1;
            var location = this.h4c_1.a3t().w34().i1b('Location');
            if (location == null) {
              get_LOGGER_3().g2w('Location header missing from redirect response ' + this.h4c_1.o3v().c3w().toString() + '; returning response as is');
              return this.h4c_1;
            }

            this.g4c_1.b3s_1.x3c(get_HttpResponseRedirectEvent(), this.h4c_1.a3t());
            var this_0 = get_LOGGER_3();
            if (get_isTraceEnabled(this_0)) {
              this_0.i2w('Received redirect response to ' + location + ' for request ' + this.h4c_1.o3v().c3w().toString());
            }

            var tmp_0 = this;
            var this_1 = new HttpRequestBuilder();
            this_1.u3z(this.i4c_1);
            this_1.a3u_1.k38_1.q2();
            takeFrom(this_1.a3u_1, location);
            var this_2 = substringBefore(substringBefore(location, _Char___init__impl__6a9atx(35)), _Char___init__impl__6a9atx(63));
            if (charSequenceLength(this_2) > 0) {
              this_1.a3u_1.i38_1 = removeDotSegments(this_1.a3u_1.i38_1);
            }

            if (!this.f4c_1 && isSecure(previousProtocol) && !isSecure(this_1.a3u_1.n38())) {
              var this_3 = get_LOGGER_3();
              if (get_isTraceEnabled(this_3)) {
                this_3.i2w('Blocked redirect from ' + this.h4c_1.o3v().c3w().toString() + ' to ' + location + ' due to HTTPS downgrade');
              }
              return this.h4c_1;
            }

            if (!(previousAuthority === get_authority_0(this_1.a3u_1))) {
              this_1.c3u_1.f2s('Authorization');
              var this_4 = get_LOGGER_3();
              if (get_isTraceEnabled(this_4)) {
                this_4.i2w('Removing Authorization header for cross-authority redirect: ' + (previousAuthority + ' -> ' + this_1.a3u_1.x39()));
              }
            }

            tmp_0.i4c_1 = this_1;
            this.i8_1 = 2;
            suspendResult = this.c4c_1.o48(this.i4c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h4c_1 = suspendResult;
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
  var properties_initialized_HttpRedirect_kt_klj746;
  function _init_properties_HttpRedirect_kt__ure7fo() {
    if (!properties_initialized_HttpRedirect_kt_klj746) {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().x34_1, Companion_getInstance_2().c35_1]);
      LOGGER_3 = KtorSimpleLogger('io.ktor.client.plugins.HttpRedirect');
      HttpResponseRedirectEvent = new EventDefinition();
      var tmp = HttpRedirectConfig$_init_$ref_rhym9t();
      HttpRedirect = createClientPlugin_0('HttpRedirect', tmp, HttpRedirect$lambda);
    }
  }
  function get_LOGGER_4() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return LOGGER_4;
  }
  var LOGGER_4;
  function get_HttpRequestLifecycle() {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    return HttpRequestLifecycle;
  }
  var HttpRequestLifecycle;
  function $invokeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e4d_1 = _this__u8e3s4;
  }
  protoOf($invokeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var tmp0 = this.e4d_1.i4d_1;
            this.i8_1 = 1;
            suspendResult = tmp0.o2u(this);
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
  function PipelineContext$proceed$ref(p0) {
    KFunctionImpl.call(this, 9, 1, 26);
    this.i4d_1 = p0;
  }
  protoOf(PipelineContext$proceed$ref).j2m = function ($completion) {
    var tmp = new $invokeCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(PipelineContext$proceed$ref).d9 = function ($completion) {
    return this.j2m($completion);
  };
  function PipelineContext$proceed$ref_0(p0) {
    var i = new PipelineContext$proceed$ref(p0);
    return constructCallableReference(function ($completion) {
      return i.j2m($completion);
    }, 0, 9, 26, VOID, [p0]);
  }
  function SetupRequestContext$install$slambda($handler, resultContinuation) {
    this.r4d_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequestContext$install$slambda).t3s = function ($this$intercept, it, $completion) {
    var tmp = this.u3s($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(SetupRequestContext$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t3s(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequestContext$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.r4d_1(this.s4d_1.j2v_1, PipelineContext$proceed$ref_0(this.s4d_1), this);
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
  protoOf(SetupRequestContext$install$slambda).u3s = function ($this$intercept, it, completion) {
    var i = new SetupRequestContext$install$slambda(this.r4d_1, completion);
    i.s4d_1 = $this$intercept;
    i.t4d_1 = it;
    return i;
  };
  function SetupRequestContext$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequestContext$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.t3s($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequestContext() {
  }
  protoOf(SetupRequestContext).u4d = function (client, handler) {
    var tmp = Phases_getInstance().c41_1;
    client.v3r_1.n2v(tmp, SetupRequestContext$install$slambda_0(handler, null));
  };
  protoOf(SetupRequestContext).h41 = function (client, handler) {
    return this.u4d(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SetupRequestContext_instance;
  function SetupRequestContext_getInstance() {
    return SetupRequestContext_instance;
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var handler = clientEngineJob.i1s(attachToClientEngineJob$lambda(requestJob));
    requestJob.i1s(attachToClientEngineJob$lambda_0(handler));
  }
  function HttpRequestLifecycle$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestLifecycle_kt__jgkmfx();
    var tmp = SetupRequestContext_instance;
    $this$createClientPlugin.e42(tmp, HttpRequestLifecycle$lambda$slambda_0($this$createClientPlugin, null));
    return Unit_instance;
  }
  function HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation) {
    this.d4e_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestLifecycle$lambda$slambda).h4e = function (request, proceed, $completion) {
    var tmp = this.i4e(request, proceed, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof HttpRequestBuilder ? p1 : THROW_CCE();
    return this.h4e(tmp, (!(p2 == null) ? isSuspendFunction(p2, 0) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestLifecycle$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.g4e_1 = SupervisorJob(this.e4e_1.e3u_1);
            attachToClientEngineJob(this.g4e_1, ensureNotNull(this.d4e_1.a42_1.u3r_1.v8(Key_instance)));
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 4;
            this.j8_1 = 3;
            this.e4e_1.e3u_1 = this.g4e_1;
            this.i8_1 = 2;
            suspendResult = this.f4e_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j8_1 = 6;
            this.i8_1 = 5;
            continue $sm;
          case 3:
            this.j8_1 = 4;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              this.g4e_1.h1y(cause);
              throw cause;
            } else {
              throw this.l8_1;
            }

          case 4:
            this.j8_1 = 6;
            var t = this.l8_1;
            this.g4e_1.i1y();
            throw t;
          case 5:
            this.j8_1 = 6;
            this.g4e_1.i1y();
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
  protoOf(HttpRequestLifecycle$lambda$slambda).i4e = function (request, proceed, completion) {
    var i = new HttpRequestLifecycle$lambda$slambda(this.d4e_1, completion);
    i.e4e_1 = request;
    i.f4e_1 = proceed;
    return i;
  };
  function HttpRequestLifecycle$lambda$slambda_0($this_createClientPlugin, resultContinuation) {
    var i = new HttpRequestLifecycle$lambda$slambda($this_createClientPlugin, resultContinuation);
    return constructCallableReference(function (request, proceed, $completion) {
      return i.h4e(request, proceed, $completion);
    }, 2);
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      if (!(cause == null)) {
        // Inline function 'io.ktor.util.logging.trace' call
        var this_0 = get_LOGGER_4();
        if (get_isTraceEnabled(this_0)) {
          var tmp$ret$1 = 'Cancelling request because engine Job failed with error';
          this_0.j2w(tmp$ret$1, cause);
        }
        cancel_2($requestJob, 'Engine failed', cause);
      } else {
        get_LOGGER_4().i2w('Cancelling request because engine Job completed');
        $requestJob.i1y();
      }
      return Unit_instance;
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.c1v();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpRequestLifecycle_kt_3hmcrf;
  function _init_properties_HttpRequestLifecycle_kt__jgkmfx() {
    if (!properties_initialized_HttpRequestLifecycle_kt_3hmcrf) {
      properties_initialized_HttpRequestLifecycle_kt_3hmcrf = true;
      LOGGER_4 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestLifecycle');
      HttpRequestLifecycle = createClientPlugin('RequestLifecycle', HttpRequestLifecycle$lambda);
    }
  }
  function get_LOGGER_5() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return LOGGER_5;
  }
  var LOGGER_5;
  function get_HttpRequestRetryEvent() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return HttpRequestRetryEvent;
  }
  var HttpRequestRetryEvent;
  var HttpRequestRetry;
  function get_MaxRetriesPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return MaxRetriesPerRequestAttributeKey;
  }
  var MaxRetriesPerRequestAttributeKey;
  function get_ShouldRetryPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ShouldRetryPerRequestAttributeKey;
  }
  var ShouldRetryPerRequestAttributeKey;
  function get_ShouldRetryOnExceptionPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ShouldRetryOnExceptionPerRequestAttributeKey;
  }
  var ShouldRetryOnExceptionPerRequestAttributeKey;
  function get_ModifyRequestPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return ModifyRequestPerRequestAttributeKey;
  }
  var ModifyRequestPerRequestAttributeKey;
  function get_RetryDelayPerRequestAttributeKey() {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    return RetryDelayPerRequestAttributeKey;
  }
  var RetryDelayPerRequestAttributeKey;
  function HttpRetryEventData(request, retryCount, response, cause) {
    this.j4e_1 = request;
    this.k4e_1 = retryCount;
    this.l4e_1 = response;
    this.m4e_1 = cause;
  }
  function randomMs($this, randomizationMs) {
    return randomizationMs === 0n ? 0n : Default_getInstance().ug(randomizationMs);
  }
  function HttpRequestRetryConfig$delay$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetryConfig$delay$slambda).w4e = function (it, $completion) {
    var tmp = this.x4e(it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).e9 = function (p1, $completion) {
    return this.w4e((!(p1 == null) ? typeof p1 === 'bigint' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetryConfig$delay$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = delay(this.v4e_1, this);
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
  protoOf(HttpRequestRetryConfig$delay$slambda).x4e = function (it, completion) {
    var i = new HttpRequestRetryConfig$delay$slambda(completion);
    i.v4e_1 = it;
    return i;
  };
  function HttpRequestRetryConfig$delay$slambda_0(resultContinuation) {
    var i = new HttpRequestRetryConfig$delay$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.w4e(it, $completion);
    }, 1);
  }
  function HttpRequestRetryConfig$modifyRequest$lambda(_this__u8e3s4, it) {
    return Unit_instance;
  }
  function HttpRequestRetryConfig$retryOnException$lambda($retryOnTimeout) {
    return function ($this$retryOnExceptionIf, _unused_var__etf5q3, cause) {
      var tmp;
      if (isTimeoutException(cause)) {
        tmp = $retryOnTimeout;
      } else {
        if (cause instanceof CancellationException) {
          tmp = false;
        } else {
          tmp = true;
        }
      }
      return tmp;
    };
  }
  function HttpRequestRetryConfig$retryOnServerErrors$lambda($this$retryIf, _unused_var__etf5q3, response) {
    // Inline function 'kotlin.let' call
    var it = response.v3v().v37_1;
    return 500 <= it ? it <= 599 : false;
  }
  function HttpRequestRetryConfig$delayMillis$lambda($respectRetryAfterHeader, $block) {
    return function (_this__u8e3s4, it) {
      var tmp;
      if ($respectRetryAfterHeader) {
        var tmp0_safe_receiver = _this__u8e3s4.z4e_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w34();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i1b('Retry-After');
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : toLongOrNull(tmp2_safe_receiver);
        var tmp_0;
        if (tmp3_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.Long.times' call
          tmp_0 = multiply(tmp3_safe_receiver, fromInt(1000));
        }
        var retryAfter = tmp_0;
        var tmp0 = $block(_this__u8e3s4, it);
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = retryAfter == null ? 0n : retryAfter;
        tmp = tmp0 >= b ? tmp0 : b;
      } else {
        tmp = $block(_this__u8e3s4, it);
      }
      return tmp;
    };
  }
  function HttpRequestRetryConfig$exponentialDelay$lambda($base, $baseDelayMs, $maxDelayMs, this$0, $randomizationMs) {
    return function ($this$delayMillis, retry) {
      var tmp0 = $base;
      // Inline function 'kotlin.math.pow' call
      var n = retry - 1 | 0;
      var tmp$ret$0 = Math.pow(tmp0, n);
      var tmp0_0 = numberToLong(tmp$ret$0 * toNumber($baseDelayMs));
      // Inline function 'kotlin.comparisons.minOf' call
      var b = $maxDelayMs;
      var delay = tmp0_0 <= b ? tmp0_0 : b;
      return add(delay, randomMs(this$0, $randomizationMs));
    };
  }
  function HttpRequestRetryConfig() {
    var tmp = this;
    tmp.e4f_1 = HttpRequestRetryConfig$delay$slambda_0(null);
    var tmp_0 = this;
    tmp_0.f4f_1 = HttpRequestRetryConfig$modifyRequest$lambda;
    this.g4f_1 = 0;
    this.h4f(3);
    this.i4f();
  }
  protoOf(HttpRequestRetryConfig).j4f = function () {
    var tmp = this.b4f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetry');
    }
  };
  protoOf(HttpRequestRetryConfig).k4f = function () {
    var tmp = this.c4f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('shouldRetryOnException');
    }
  };
  protoOf(HttpRequestRetryConfig).l4f = function () {
    var tmp = this.d4f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('delayMillis');
    }
  };
  protoOf(HttpRequestRetryConfig).m4f = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.g4f_1 = maxRetries;
    this.b4f_1 = block;
  };
  protoOf(HttpRequestRetryConfig).n4f = function (maxRetries, block) {
    if (!(maxRetries === -1))
      this.g4f_1 = maxRetries;
    this.c4f_1 = block;
  };
  protoOf(HttpRequestRetryConfig).o4f = function (maxRetries, retryOnTimeout) {
    this.n4f(maxRetries, HttpRequestRetryConfig$retryOnException$lambda(retryOnTimeout));
  };
  protoOf(HttpRequestRetryConfig).p4f = function (maxRetries, retryOnTimeout, $super) {
    maxRetries = maxRetries === VOID ? -1 : maxRetries;
    retryOnTimeout = retryOnTimeout === VOID ? false : retryOnTimeout;
    var tmp;
    if ($super === VOID) {
      this.o4f(maxRetries, retryOnTimeout);
      tmp = Unit_instance;
    } else {
      tmp = $super.o4f.call(this, maxRetries, retryOnTimeout);
    }
    return tmp;
  };
  protoOf(HttpRequestRetryConfig).q4f = function (maxRetries) {
    this.m4f(maxRetries, HttpRequestRetryConfig$retryOnServerErrors$lambda);
  };
  protoOf(HttpRequestRetryConfig).h4f = function (maxRetries) {
    this.q4f(maxRetries);
    this.p4f(maxRetries);
  };
  protoOf(HttpRequestRetryConfig).r4f = function (respectRetryAfterHeader, block) {
    var tmp = this;
    tmp.d4f_1 = HttpRequestRetryConfig$delayMillis$lambda(respectRetryAfterHeader, block);
  };
  protoOf(HttpRequestRetryConfig).s4f = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader) {
    // Inline function 'kotlin.check' call
    if (!(base > 0)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(baseDelayMs > 0n)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(maxDelayMs > 0n)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!(randomizationMs >= 0n)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    this.r4f(respectRetryAfterHeader, HttpRequestRetryConfig$exponentialDelay$lambda(base, baseDelayMs, maxDelayMs, this, randomizationMs));
  };
  protoOf(HttpRequestRetryConfig).i4f = function (base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader, $super) {
    base = base === VOID ? 2.0 : base;
    baseDelayMs = baseDelayMs === VOID ? 1000n : baseDelayMs;
    maxDelayMs = maxDelayMs === VOID ? 60000n : maxDelayMs;
    randomizationMs = randomizationMs === VOID ? 1000n : randomizationMs;
    respectRetryAfterHeader = respectRetryAfterHeader === VOID ? true : respectRetryAfterHeader;
    var tmp;
    if ($super === VOID) {
      this.s4f(base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
      tmp = Unit_instance;
    } else {
      tmp = $super.s4f.call(this, base, baseDelayMs, maxDelayMs, randomizationMs, respectRetryAfterHeader);
    }
    return tmp;
  };
  function HttpRetryShouldRetryContext(retryCount) {
    this.t4f_1 = retryCount;
  }
  function HttpRetryDelayContext(request, response, cause) {
    this.y4e_1 = request;
    this.z4e_1 = response;
    this.a4f_1 = cause;
  }
  function HttpRetryModifyRequestContext(request, response, cause, retryCount) {
    this.u4f_1 = request;
    this.v4f_1 = response;
    this.w4f_1 = cause;
    this.x4f_1 = retryCount;
  }
  function throwOnInvalidResponseBody(_this__u8e3s4, $completion) {
    var tmp = new $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function isTimeoutException(_this__u8e3s4) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var exception = unwrapCancellationException(_this__u8e3s4);
    var tmp;
    var tmp_0;
    if (exception instanceof HttpRequestTimeoutException) {
      tmp_0 = true;
    } else {
      tmp_0 = exception instanceof ConnectTimeoutException;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = exception instanceof SocketTimeoutException;
    }
    return tmp;
  }
  function HttpRequestRetryConfig$_init_$ref_mqbboi() {
    return constructCallableReference(function () {
      return new HttpRequestRetryConfig();
    }, 0, 0, 27, '<init>');
  }
  function HttpRequestRetry$lambda($this$createClientPlugin) {
    _init_properties_HttpRequestRetry_kt__h4xjtt();
    var shouldRetry = $this$createClientPlugin.b42_1.j4f();
    var shouldRetryOnException = $this$createClientPlugin.b42_1.k4f();
    var delayMillis = $this$createClientPlugin.b42_1.l4f();
    var delay = $this$createClientPlugin.b42_1.e4f_1;
    var maxRetries = $this$createClientPlugin.b42_1.g4f_1;
    var modifyRequest = $this$createClientPlugin.b42_1.f4f_1;
    $this$createClientPlugin.k4g(HttpRequestRetry$lambda$slambda_0(maxRetries, null));
    var tmp = Send_instance;
    $this$createClientPlugin.e42(tmp, HttpRequestRetry$lambda$slambda_2(shouldRetry, shouldRetryOnException, maxRetries, delayMillis, modifyRequest, $this$createClientPlugin, delay, null));
    return Unit_instance;
  }
  function HttpRequestRetry$lambda$prepareRequest$lambda($subRequest) {
    return function (cause) {
      var tmp = $subRequest.e3u_1;
      var subRequestJob = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
      if (cause == null) {
        subRequestJob.i1y();
      } else {
        subRequestJob.h1y(cause);
      }
      return Unit_instance;
    };
  }
  function invoke$shouldRetry(retryCount, maxRetries, shouldRetry, call) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), call.o3v(), call.a3t());
  }
  function invoke$shouldRetryOnException(retryCount, maxRetries, shouldRetry, subRequest, cause) {
    return retryCount < maxRetries && shouldRetry(new HttpRetryShouldRetryContext(retryCount + 1 | 0), subRequest, cause);
  }
  function invoke$prepareRequest(request) {
    var subRequest = (new HttpRequestBuilder()).l4g(request);
    var tmp = request.e3u_1;
    tmp.i1s(HttpRequestRetry$lambda$prepareRequest$lambda(subRequest));
    return subRequest;
  }
  function HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation) {
    this.u4g_1 = $maxRetries;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda).y4g = function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
    var tmp = this.z4g($this$onRequest, request, _unused_var__etf5q3, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpRequestRetry$lambda$slambda).a4h = function (p1, p2, p3, $completion) {
    var tmp = p1 instanceof OnRequestContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    return this.y4g(tmp, tmp_0, !(p3 == null) ? p3 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
          var tmp0_elvis_lhs = this.w4g_1.f3u_1.q2p(get_MaxRetriesPerRequestAttributeKey());
          var maxRetriesValue = tmp0_elvis_lhs == null ? this.u4g_1 : tmp0_elvis_lhs;
          this.w4g_1.f3u_1.s2p(get_MaxRetriesPerRequestAttributeKey(), maxRetriesValue);
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
  protoOf(HttpRequestRetry$lambda$slambda).z4g = function ($this$onRequest, request, _unused_var__etf5q3, completion) {
    var i = new HttpRequestRetry$lambda$slambda(this.u4g_1, completion);
    i.v4g_1 = $this$onRequest;
    i.w4g_1 = request;
    i.x4g_1 = _unused_var__etf5q3;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_0($maxRetries, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda($maxRetries, resultContinuation);
    return constructCallableReference(function ($this$onRequest, request, _unused_var__etf5q3, $completion) {
      return i.y4g($this$onRequest, request, _unused_var__etf5q3, $completion);
    }, 3);
  }
  function HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    this.j4h_1 = $shouldRetry;
    this.k4h_1 = $shouldRetryOnException;
    this.l4h_1 = $maxRetries;
    this.m4h_1 = $delayMillis;
    this.n4h_1 = $modifyRequest;
    this.o4h_1 = $this_createClientPlugin;
    this.p4h_1 = $delay;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpRequestRetry$lambda$slambda_1).k48 = function ($this$on, request, $completion) {
    var tmp = this.l48($this$on, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.k48(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpRequestRetry$lambda$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 8;
            this.t4h_1 = 0;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.r4h_1.f3u_1.q2p(get_ShouldRetryPerRequestAttributeKey());
            tmp_0.a4i_1 = tmp0_elvis_lhs == null ? this.j4h_1 : tmp0_elvis_lhs;
            var tmp_1 = this;
            var tmp1_elvis_lhs = this.r4h_1.f3u_1.q2p(get_ShouldRetryOnExceptionPerRequestAttributeKey());
            tmp_1.y4h_1 = tmp1_elvis_lhs == null ? this.k4h_1 : tmp1_elvis_lhs;
            var tmp_2 = this;
            var tmp2_elvis_lhs = this.r4h_1.f3u_1.q2p(get_MaxRetriesPerRequestAttributeKey());
            tmp_2.z4h_1 = tmp2_elvis_lhs == null ? this.l4h_1 : tmp2_elvis_lhs;
            var tmp_3 = this;
            var tmp3_elvis_lhs = this.r4h_1.f3u_1.q2p(get_RetryDelayPerRequestAttributeKey());
            tmp_3.u4h_1 = tmp3_elvis_lhs == null ? this.m4h_1 : tmp3_elvis_lhs;
            var tmp_4 = this;
            var tmp4_elvis_lhs = this.r4h_1.f3u_1.q2p(get_ModifyRequestPerRequestAttributeKey());
            tmp_4.b4i_1 = tmp4_elvis_lhs == null ? this.n4h_1 : tmp4_elvis_lhs;
            this.v4h_1 = null;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.i8_1 = 9;
              continue $sm;
            }

            this.x4h_1 = invoke$prepareRequest(this.r4h_1);
            this.j8_1 = 5;
            if (!(this.v4h_1 == null)) {
              var modifyRequestContext = new HttpRetryModifyRequestContext(this.r4h_1, this.v4h_1.l4e_1, this.v4h_1.m4e_1, this.v4h_1.k4e_1);
              this.b4i_1(modifyRequestContext, this.x4h_1);
            }

            this.i8_1 = 2;
            suspendResult = this.q4h_1.o48(this.x4h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s4h_1 = suspendResult;
            if (!invoke$shouldRetry(this.t4h_1, this.z4h_1, this.a4i_1, this.s4h_1)) {
              this.i8_1 = 4;
              suspendResult = throwOnInvalidResponseBody(this.s4h_1.a3t(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            var tmp_5 = this;
            this.t4h_1 = this.t4h_1 + 1 | 0;
            tmp_5.w4h_1 = new HttpRetryEventData(this.x4h_1, this.t4h_1, this.s4h_1.a3t(), null);
            this.j8_1 = 8;
            this.i8_1 = 6;
            continue $sm;
          case 4:
            this.j8_1 = 8;
            this.i8_1 = 9;
            continue $sm;
          case 5:
            this.j8_1 = 8;
            var tmp_6 = this.l8_1;
            if (tmp_6 instanceof Error) {
              var cause = this.l8_1;
              var tmp_7 = this;
              if (!invoke$shouldRetryOnException(this.t4h_1, this.z4h_1, this.y4h_1, this.x4h_1, cause)) {
                throw cause;
              }
              this.t4h_1 = this.t4h_1 + 1 | 0;
              tmp_7.w4h_1 = new HttpRetryEventData(this.x4h_1, this.t4h_1, null, cause);
              this.i8_1 = 6;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 6:
            this.j8_1 = 8;
            var retryData = this.w4h_1;
            this.v4h_1 = retryData;
            this.o4h_1.a42_1.b3s_1.x3c(get_HttpRequestRetryEvent(), this.v4h_1);
            var delayContext = new HttpRetryDelayContext(this.v4h_1.j4e_1, this.v4h_1.l4e_1, this.v4h_1.m4e_1);
            this.i8_1 = 7;
            suspendResult = this.p4h_1(this.u4h_1(delayContext, this.t4h_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var this_0 = get_LOGGER_5();
            if (get_isTraceEnabled(this_0)) {
              this_0.i2w('Retrying request ' + this.r4h_1.a3u_1.toString() + ' attempt: ' + this.t4h_1);
            }

            this.i8_1 = 1;
            continue $sm;
          case 8:
            throw this.l8_1;
          case 9:
            return this.s4h_1;
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
  protoOf(HttpRequestRetry$lambda$slambda_1).l48 = function ($this$on, request, completion) {
    var i = new HttpRequestRetry$lambda$slambda_1(this.j4h_1, this.k4h_1, this.l4h_1, this.m4h_1, this.n4h_1, this.o4h_1, this.p4h_1, completion);
    i.q4h_1 = $this$on;
    i.r4h_1 = request;
    return i;
  };
  function HttpRequestRetry$lambda$slambda_2($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation) {
    var i = new HttpRequestRetry$lambda$slambda_1($shouldRetry, $shouldRetryOnException, $maxRetries, $delayMillis, $modifyRequest, $this_createClientPlugin, $delay, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.k48($this$on, request, $completion);
    }, 2);
  }
  function $throwOnInvalidResponseBodyCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g4g_1 = _this__u8e3s4;
  }
  protoOf($throwOnInvalidResponseBodyCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            if (get_isSaved(this.g4g_1)) {
              this.h4g_1 = this.g4g_1.u3v();
              this.i8_1 = 1;
              continue $sm;
            } else {
              this.i4g_1 = false;
              this.i8_1 = 4;
              continue $sm;
            }

          case 1:
            this.j8_1 = 5;
            this.i8_1 = 2;
            suspendResult = this.h4g_1.v2e(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j4g_1 = suspendResult;
            this.j8_1 = 6;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            var tmp_0 = this.j4g_1;
            this.j8_1 = 6;
            var this_0 = this.h4g_1;
            var tmp_1;
            try {
              cancel_1(this_0);
              tmp_1 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                var e = $p;
                tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var this_1 = tmp_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              get_LOGGER_5().h2w('Failed to close response body channel', tmp0_safe_receiver);
            }

            this.i4g_1 = tmp_0;
            this.i8_1 = 4;
            continue $sm;
          case 4:
            return this.i4g_1;
          case 5:
            this.j8_1 = 6;
            var t = this.l8_1;
            var this_2 = this.h4g_1;
            var tmp_3;
            try {
              cancel_1(this_2);
              tmp_3 = _Result___init__impl__xyqfz8(Unit_instance);
            } catch ($p_0) {
              var tmp_4;
              if ($p_0 instanceof Error) {
                var e_0 = $p_0;
                tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
              } else {
                throw $p_0;
              }
              tmp_3 = tmp_4;
            }

            var this_3 = tmp_3;
            var tmp0_safe_receiver_0 = Result__exceptionOrNull_impl_p6xea9(this_3);
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              get_LOGGER_5().h2w('Failed to close response body channel', tmp0_safe_receiver_0);
            }

            throw t;
          case 6:
            throw this.l8_1;
        }
      } catch ($p_1) {
        var e_1 = $p_1;
        if (this.j8_1 === 6) {
          throw e_1;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_1;
        }
      }
     while (true);
  };
  var properties_initialized_HttpRequestRetry_kt_jcpv6l;
  function _init_properties_HttpRequestRetry_kt__h4xjtt() {
    if (!properties_initialized_HttpRequestRetry_kt_jcpv6l) {
      properties_initialized_HttpRequestRetry_kt_jcpv6l = true;
      LOGGER_5 = KtorSimpleLogger('io.ktor.client.plugins.HttpRequestRetry');
      HttpRequestRetryEvent = new EventDefinition();
      var tmp = HttpRequestRetryConfig$_init_$ref_mqbboi();
      HttpRequestRetry = createClientPlugin_0('RetryFeature', tmp, HttpRequestRetry$lambda);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'MaxRetriesPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_0 = PrimitiveClasses_getInstance().kb();
      var tmp_1 = !(null == null) ? typeof null === 'number' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_2;
      try {
        tmp_2 = createKType(PrimitiveClasses_getInstance().kb(), arrayOf([]), false);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_3 = null;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var tmp$ret$2 = tmp_2;
      var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
      MaxRetriesPerRequestAttributeKey = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ShouldRetryPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_4 = PrimitiveClasses_getInstance().functionClass(3);
      var tmp_5 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_6;
      try {
        tmp_6 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequest_0), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpResponse), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().hb(), arrayOf([]), false))]), false);
      } catch ($p_0) {
        var tmp_7;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_7 = null;
        } else {
          throw $p_0;
        }
        tmp_6 = tmp_7;
      }
      var tmp$ret$2_0 = tmp_6;
      var tmp$ret$1_0 = new TypeInfo(tmp_4, tmp_5, tmp$ret$2_0);
      ShouldRetryPerRequestAttributeKey = new AttributeKey(name_0, tmp$ret$1_0);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_1 = 'ShouldRetryOnExceptionPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_8 = PrimitiveClasses_getInstance().functionClass(3);
      var tmp_9 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_10;
      try {
        tmp_10 = createKType(PrimitiveClasses_getInstance().functionClass(3), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryShouldRetryContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().qb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().hb(), arrayOf([]), false))]), false);
      } catch ($p_1) {
        var tmp_11;
        if ($p_1 instanceof Error) {
          var _unused_var__etf5q3_1 = $p_1;
          tmp_11 = null;
        } else {
          throw $p_1;
        }
        tmp_10 = tmp_11;
      }
      var tmp$ret$2_1 = tmp_10;
      var tmp$ret$1_1 = new TypeInfo(tmp_8, tmp_9, tmp$ret$2_1);
      ShouldRetryOnExceptionPerRequestAttributeKey = new AttributeKey(name_1, tmp$ret$1_1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_2 = 'ModifyRequestPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_12 = PrimitiveClasses_getInstance().functionClass(2);
      var tmp_13 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_14;
      try {
        tmp_14 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryModifyRequestContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(HttpRequestBuilder), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(Unit), arrayOf([]), false))]), false);
      } catch ($p_2) {
        var tmp_15;
        if ($p_2 instanceof Error) {
          var _unused_var__etf5q3_2 = $p_2;
          tmp_15 = null;
        } else {
          throw $p_2;
        }
        tmp_14 = tmp_15;
      }
      var tmp$ret$2_2 = tmp_14;
      var tmp$ret$1_2 = new TypeInfo(tmp_12, tmp_13, tmp$ret$2_2);
      ModifyRequestPerRequestAttributeKey = new AttributeKey(name_2, tmp$ret$1_2);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_3 = 'RetryDelayPerRequestAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_16 = PrimitiveClasses_getInstance().functionClass(2);
      var tmp_17 = !(null == null) ? typeof null === 'function' : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_18;
      try {
        tmp_18 = createKType(PrimitiveClasses_getInstance().functionClass(2), arrayOf([createInvariantKTypeProjection(createKType(getKClass(HttpRetryDelayContext), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().kb(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().lb(), arrayOf([]), false))]), false);
      } catch ($p_3) {
        var tmp_19;
        if ($p_3 instanceof Error) {
          var _unused_var__etf5q3_3 = $p_3;
          tmp_19 = null;
        } else {
          throw $p_3;
        }
        tmp_18 = tmp_19;
      }
      var tmp$ret$2_3 = tmp_18;
      var tmp$ret$1_3 = new TypeInfo(tmp_16, tmp_17, tmp$ret$2_3);
      RetryDelayPerRequestAttributeKey = new AttributeKey(name_3, tmp$ret$1_3);
    }
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.k4i_1 = $plugin;
    this.l4i_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpSend$Plugin$install$slambda).t3s = function ($this$intercept, content, $completion) {
    var tmp = this.u3s($this$intercept, content, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpSend$Plugin$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t3s(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpSend$Plugin$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp_0 = this.n4i_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var message = trimMargin('\n|Fail to prepare request body for sending. \n|The body type is: ' + toString(getKClassFromExpression(this.n4i_1)) + ', with Content-Type: ' + toString_0(contentType(this.m4i_1.j2v_1)) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.');
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0 = this.m4i_1.j2v_1;
            var body = this.n4i_1;
            if (body == null) {
              tmp0.d3u_1 = NullBody_instance;
              var tmp_1 = getKClass(OutgoingContent);
              var tmp_2 = null instanceof OutgoingContent;
              var tmp_3;
              try {
                tmp_3 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_4;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_4 = null;
                } else {
                  throw $p;
                }
                tmp_3 = tmp_4;
              }
              tmp0.v3z(new TypeInfo(tmp_1, tmp_2, tmp_3));
            } else {
              if (body instanceof OutgoingContent) {
                tmp0.d3u_1 = body;
                tmp0.v3z(null);
              } else {
                tmp0.d3u_1 = body;
                var tmp_5 = getKClass(OutgoingContent);
                var tmp_6 = null instanceof OutgoingContent;
                var tmp_7;
                try {
                  tmp_7 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p_0) {
                  var tmp_8;
                  if ($p_0 instanceof Error) {
                    var _unused_var__etf5q3_0 = $p_0;
                    tmp_8 = null;
                  } else {
                    throw $p_0;
                  }
                  tmp_7 = tmp_8;
                }
                tmp0.v3z(new TypeInfo(tmp_5, tmp_6, tmp_7));
              }
            }

            var maxRetries = this.m4i_1.j2v_1.f3u_1.q2p(get_MaxRetriesPerRequestAttributeKey());
            var tmp_9;
            if (!(maxRetries == null) && maxRetries >= this.k4i_1.o4i_1) {
              var tmp_10;
              if (maxRetries < 2147483647) {
                tmp_10 = maxRetries + 1 | 0;
              } else {
                tmp_10 = maxRetries;
              }
              tmp_9 = tmp_10;
            } else {
              tmp_9 = this.k4i_1.o4i_1;
            }

            var maxSendCount = tmp_9;
            var realSender = new DefaultSender(maxSendCount, this.l4i_1);
            var interceptedSender = realSender;
            var _iterator__ex2g4s = reversed(this.k4i_1.p4i_1).t();
            while (_iterator__ex2g4s.u()) {
              var interceptor = _iterator__ex2g4s.v();
              interceptedSender = new InterceptedSender(interceptor, interceptedSender);
            }

            this.i8_1 = 1;
            suspendResult = interceptedSender.q4i(this.m4i_1.j2v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var call = suspendResult;
            this.i8_1 = 2;
            suspendResult = this.m4i_1.n2u(call, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.l8_1;
        }
      } catch ($p_1) {
        var e = $p_1;
        if (this.j8_1 === 3) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(HttpSend$Plugin$install$slambda).u3s = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.k4i_1, this.l4i_1, completion);
    i.m4i_1 = $this$intercept;
    i.n4i_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    return constructCallableReference(function ($this$intercept, content, $completion) {
      return i.t3s($this$intercept, content, $completion);
    }, 2);
  }
  function $executeCOROUTINE$_0(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z4i_1 = _this__u8e3s4;
    this.a4j_1 = requestBuilder;
  }
  protoOf($executeCOROUTINE$_0).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var tmp0_safe_receiver = this.z4i_1.e4j_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel(tmp0_safe_receiver);
            }

            if (this.z4i_1.d4j_1 >= this.z4i_1.b4j_1) {
              throw new SendCountExceedException('Max send count ' + this.z4i_1.b4j_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var _unary__edvuaz = this.z4i_1.d4j_1;
            this.z4i_1.d4j_1 = _unary__edvuaz + 1 | 0;
            this.i8_1 = 1;
            suspendResult = this.z4i_1.c4j_1.x3r_1.i2v(this.a4j_1, this.a4j_1.d3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp1_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              var message = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var call = tmp_0;
            this.z4i_1.e4j_1 = call;
            return call;
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
  function Config() {
    this.f4j_1 = 20;
  }
  function Plugin() {
    Plugin_instance = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'HttpSend';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpSend);
    var tmp_1 = null instanceof HttpSend;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(HttpSend), arrayOf([]), false);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_3 = null;
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.g4j_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin).m1 = function () {
    return this.g4j_1;
  };
  protoOf(Plugin).h4j = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config();
    block(this_0);
    var config = this_0;
    return new HttpSend(config.f4j_1);
  };
  protoOf(Plugin).f3v = function (block) {
    return this.h4j(block);
  };
  protoOf(Plugin).i4j = function (plugin, scope) {
    var tmp = Phases_getInstance().g41_1;
    scope.v3r_1.n2v(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  protoOf(Plugin).g3v = function (plugin, scope) {
    return this.i4j(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.j4j_1 = interceptor;
    this.k4j_1 = nextSender;
  }
  protoOf(InterceptedSender).q4i = function (requestBuilder, $completion) {
    return this.j4j_1(this.k4j_1, requestBuilder, $completion);
  };
  function DefaultSender(maxSendCount, client) {
    this.b4j_1 = maxSendCount;
    this.c4j_1 = client;
    this.d4j_1 = 0;
    this.e4j_1 = null;
  }
  protoOf(DefaultSender).q4i = function (requestBuilder, $completion) {
    var tmp = new $executeCOROUTINE$_0(this, requestBuilder, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance();
    maxSendCount = maxSendCount === VOID ? 20 : maxSendCount;
    this.o4i_1 = maxSendCount;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p4i_1 = ArrayList_init_$Create$();
  }
  protoOf(HttpSend).l4j = function (block) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.p4i_1.c1(block);
  };
  function Sender() {
  }
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function get_LOGGER_6() {
    _init_properties_HttpTimeout_kt__pucqrr();
    return LOGGER_6;
  }
  var LOGGER_6;
  var HttpTimeout;
  function timeout(_this__u8e3s4, block) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp = HttpTimeoutCapability_instance;
    // Inline function 'kotlin.apply' call
    var this_0 = HttpTimeoutConfig_init_$Create$();
    block(this_0);
    return _this__u8e3s4.m4j(tmp, this_0);
  }
  function HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    requestTimeoutMillis = requestTimeoutMillis === VOID ? null : requestTimeoutMillis;
    connectTimeoutMillis = connectTimeoutMillis === VOID ? null : connectTimeoutMillis;
    socketTimeoutMillis = socketTimeoutMillis === VOID ? null : socketTimeoutMillis;
    HttpTimeoutConfig.call($this);
    $this.q4j(requestTimeoutMillis);
    $this.r4j(connectTimeoutMillis);
    $this.s4j(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutConfig_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    return HttpTimeoutConfig_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, objectCreate(protoOf(HttpTimeoutConfig)));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    if (!(value == null || value > 0n)) {
      var message = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeoutConfig.INFINITE_TIMEOUT_MS';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return value;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.t4j_1 = 9223372036854775807n;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'TimeoutConfiguration';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(HttpTimeoutConfig);
    var tmp_1 = null instanceof HttpTimeoutConfig;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(HttpTimeoutConfig), arrayOf([]), false);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_3 = null;
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.u4j_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_2;
  function Companion_getInstance_11() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  protoOf(HttpTimeoutConfig).q4j = function (value) {
    this.n4j_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).v4j = function () {
    return this.n4j_1;
  };
  protoOf(HttpTimeoutConfig).r4j = function (value) {
    this.o4j_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).w4j = function () {
    return this.o4j_1;
  };
  protoOf(HttpTimeoutConfig).s4j = function (value) {
    this.p4j_1 = checkTimeoutValue(this, value);
  };
  protoOf(HttpTimeoutConfig).x4j = function () {
    return this.p4j_1;
  };
  protoOf(HttpTimeoutConfig).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof HttpTimeoutConfig))
      THROW_CCE();
    if (!(this.n4j_1 == other.n4j_1))
      return false;
    if (!(this.o4j_1 == other.o4j_1))
      return false;
    if (!(this.p4j_1 == other.p4j_1))
      return false;
    return true;
  };
  protoOf(HttpTimeoutConfig).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.n4j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.o4j_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.p4j_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_0 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    return result;
  };
  function HttpTimeoutConfig() {
    Companion_getInstance_11();
    this.n4j_1 = 0n;
    this.o4j_1 = 0n;
    this.p4j_1 = 0n;
  }
  function HttpTimeoutCapability() {
  }
  protoOf(HttpTimeoutCapability).toString = function () {
    return 'HttpTimeoutCapability';
  };
  protoOf(HttpTimeoutCapability).hashCode = function () {
    return 2058496954;
  };
  protoOf(HttpTimeoutCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpTimeoutCapability))
      return false;
    return true;
  };
  var HttpTimeoutCapability_instance;
  function HttpTimeoutCapability_getInstance() {
    return HttpTimeoutCapability_instance;
  }
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.a3u_1.x39();
    var tmp0_safe_receiver = request.y4j(HttpTimeoutCapability_instance);
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v4j());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, objectCreate(protoOf(HttpRequestTimeoutException)));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis, cause) {
    cause = cause === VOID ? null : cause;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(timeoutMillis == null ? 'unknown' : timeoutMillis) + ' ms]', cause, this);
    captureStack(this, HttpRequestTimeoutException);
    this.z4j_1 = url;
    this.a4k_1 = timeoutMillis;
  }
  protoOf(HttpRequestTimeoutException).r1y = function () {
    return new HttpRequestTimeoutException(this.z4j_1, this.a4k_1, this.cause);
  };
  function get_supportsRequestTimeout(_this__u8e3s4) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var tmp;
    var tmp_0;
    if (!isWebsocket(_this__u8e3s4.a3u_1.n38())) {
      var tmp_1 = _this__u8e3s4.d3u_1;
      tmp_0 = !(tmp_1 instanceof ClientUpgradeContent);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_2 = _this__u8e3s4.d3u_1;
      tmp = !(tmp_2 instanceof SSEClientContent);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function applyRequestTimeout(_this__u8e3s4, request, requestTimeout) {
    _init_properties_HttpTimeout_kt__pucqrr();
    if (requestTimeout == null || requestTimeout === 9223372036854775807n)
      return Unit_instance;
    var executionContext = request.e3u_1;
    var tmp = new CoroutineName('request-timeout');
    var killer = launch(_this__u8e3s4, tmp, VOID, applyRequestTimeout$slambda_0(requestTimeout, request, executionContext, null));
    var tmp_0 = request.e3u_1;
    tmp_0.i1s(applyRequestTimeout$lambda(killer));
  }
  function HttpTimeoutConfig$_init_$ref_dl1k0m() {
    return constructCallableReference(function () {
      return HttpTimeoutConfig_init_$Create$();
    }, 0, 0, 28);
  }
  function HttpTimeout$lambda($this$createClientPlugin) {
    _init_properties_HttpTimeout_kt__pucqrr();
    var requestTimeoutMillis = $this$createClientPlugin.b42_1.v4j();
    var connectTimeoutMillis = $this$createClientPlugin.b42_1.w4j();
    var socketTimeoutMillis = $this$createClientPlugin.b42_1.x4j();
    var tmp = Send_instance;
    $this$createClientPlugin.e42(tmp, HttpTimeout$lambda$slambda_0(connectTimeoutMillis, socketTimeoutMillis, requestTimeoutMillis, null));
    return Unit_instance;
  }
  function invoke$hasNotNullTimeouts(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, supportsRequestTimeout) {
    return supportsRequestTimeout && !(requestTimeoutMillis == null) || !(connectTimeoutMillis == null) || !(socketTimeoutMillis == null);
  }
  function HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    this.j4k_1 = $connectTimeoutMillis;
    this.k4k_1 = $socketTimeoutMillis;
    this.l4k_1 = $requestTimeoutMillis;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HttpTimeout$lambda$slambda).k48 = function ($this$on, request, $completion) {
    var tmp = this.l48($this$on, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpTimeout$lambda$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof Sender_0 ? p1 : THROW_CCE();
    return this.k48(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(HttpTimeout$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var supportsRequestTimeout = get_supportsRequestTimeout(this.n4k_1);
            var configuration = this.n4k_1.y4j(HttpTimeoutCapability_instance);
            if (configuration == null && invoke$hasNotNullTimeouts(this.l4k_1, this.j4k_1, this.k4k_1, supportsRequestTimeout)) {
              configuration = HttpTimeoutConfig_init_$Create$();
              this.n4k_1.m4j(HttpTimeoutCapability_instance, configuration);
            }

            var tmp0_safe_receiver = configuration;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp0_elvis_lhs = tmp0_safe_receiver.w4j();
              tmp0_safe_receiver.r4j(tmp0_elvis_lhs == null ? this.j4k_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.x4j();
              tmp0_safe_receiver.s4j(tmp1_elvis_lhs == null ? this.k4k_1 : tmp1_elvis_lhs);
              if (supportsRequestTimeout) {
                var tmp2_elvis_lhs = tmp0_safe_receiver.v4j();
                tmp0_safe_receiver.q4j(tmp2_elvis_lhs == null ? this.l4k_1 : tmp2_elvis_lhs);
                applyRequestTimeout(this.m4k_1, this.n4k_1, tmp0_safe_receiver.v4j());
              }
            }

            this.i8_1 = 1;
            suspendResult = this.m4k_1.o48(this.n4k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(HttpTimeout$lambda$slambda).l48 = function ($this$on, request, completion) {
    var i = new HttpTimeout$lambda$slambda(this.j4k_1, this.k4k_1, this.l4k_1, completion);
    i.m4k_1 = $this$on;
    i.n4k_1 = request;
    return i;
  };
  function HttpTimeout$lambda$slambda_0($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation) {
    var i = new HttpTimeout$lambda$slambda($connectTimeoutMillis, $socketTimeoutMillis, $requestTimeoutMillis, resultContinuation);
    return constructCallableReference(function ($this$on, request, $completion) {
      return i.k48($this$on, request, $completion);
    }, 2);
  }
  function applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.w4k_1 = $requestTimeout;
    this.x4k_1 = $request;
    this.y4k_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(applyRequestTimeout$slambda).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(applyRequestTimeout$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(applyRequestTimeout$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            Companion_getInstance_3();
            var this_0 = this.w4k_1;
            suspendResult = delay_0(toDuration(this_0, DurationUnit_MILLISECONDS_getInstance()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.x4k_1);
            var this_1 = get_LOGGER_6();
            if (get_isTraceEnabled(this_1)) {
              this_1.i2w('Request timeout: ' + this.x4k_1.a3u_1.toString());
            }

            cancel_2(this.y4k_1, ensureNotNull(cause.message), cause);
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
  protoOf(applyRequestTimeout$slambda).p2n = function ($this$launch, completion) {
    var i = new applyRequestTimeout$slambda(this.w4k_1, this.x4k_1, this.y4k_1, completion);
    i.z4k_1 = $this$launch;
    return i;
  };
  function applyRequestTimeout$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new applyRequestTimeout$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function applyRequestTimeout$lambda($killer) {
    return function (it) {
      $killer.q1s();
      return Unit_instance;
    };
  }
  var properties_initialized_HttpTimeout_kt_9oyjbd;
  function _init_properties_HttpTimeout_kt__pucqrr() {
    if (!properties_initialized_HttpTimeout_kt_9oyjbd) {
      properties_initialized_HttpTimeout_kt_9oyjbd = true;
      LOGGER_6 = KtorSimpleLogger('io.ktor.client.plugins.HttpTimeout');
      var tmp = HttpTimeoutConfig$_init_$ref_dl1k0m();
      HttpTimeout = createClientPlugin_0('HttpTimeout', tmp, HttpTimeout$lambda);
    }
  }
  function get_SKIP_SAVE_BODY() {
    _init_properties_SaveBody_kt__lbc3fj();
    return SKIP_SAVE_BODY;
  }
  var SKIP_SAVE_BODY;
  function get_RESPONSE_BODY_SAVED() {
    _init_properties_SaveBody_kt__lbc3fj();
    return RESPONSE_BODY_SAVED;
  }
  var RESPONSE_BODY_SAVED;
  function get_LOGGER_7() {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp0 = LOGGER$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('LOGGER', 0, tmp, _get_LOGGER_$ref_77hhxy(), null);
    return tmp0.n1();
  }
  var LOGGER$delegate;
  function get_SaveBody() {
    _init_properties_SaveBody_kt__lbc3fj();
    return SaveBody;
  }
  var SaveBody;
  var SaveBodyPlugin;
  function get_isSaved(_this__u8e3s4) {
    _init_properties_SaveBody_kt__lbc3fj();
    return _this__u8e3s4.t3v().p3v().r2p(get_RESPONSE_BODY_SAVED());
  }
  function tryCancelBody(_this__u8e3s4, e) {
    e = e === VOID ? null : e;
    _init_properties_SaveBody_kt__lbc3fj();
    var byteChannel = _this__u8e3s4.u3v();
    if (!byteChannel.r2e()) {
      try {
        byteChannel.x2e(e);
      } catch ($p) {
        if ($p instanceof CancellationException) {
          var cause = $p;
          throw cause;
        } else {
          if ($p instanceof Exception) {
            var cause_0 = $p;
            get_LOGGER_7().h2w('Failed to cancel response body', cause_0);
          } else {
            throw $p;
          }
        }
      }
    }
  }
  function SaveBodyPluginConfig() {
    this.a4l_1 = false;
  }
  function LOGGER$delegate$lambda() {
    _init_properties_SaveBody_kt__lbc3fj();
    return KtorSimpleLogger('io.ktor.client.plugins.SaveBody');
  }
  function _get_LOGGER_$ref_77hhxy() {
    return constructCallableReference(function () {
      return get_LOGGER_7();
    }, 0, 0, 29);
  }
  function SaveBody$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    var tmp = Phases_getInstance_2().w41_1;
    $this$createClientPlugin.a42_1.y3r_1.n2v(tmp, SaveBody$lambda$slambda_0(null));
    return Unit_instance;
  }
  function SaveBody$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SaveBody$lambda$slambda).t41 = function ($this$intercept, response, $completion) {
    var tmp = this.u41($this$intercept, response, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(SaveBody$lambda$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t41(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SaveBody$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 7;
            this.o4l_1 = this.k4l_1.t3v();
            this.l4l_1 = this.o4l_1.p3v();
            if (this.l4l_1.r2p(get_SKIP_SAVE_BODY())) {
              var this_0 = get_LOGGER_7();
              if (get_isTraceEnabled(this_0)) {
                this_0.i2w('Skipping body saving for ' + this.o4l_1.o3v().c3w().toString());
              }
              return Unit_instance;
            }

            this.m4l_1 = null;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 4;
            this.j8_1 = 3;
            var this_1 = get_LOGGER_7();
            if (get_isTraceEnabled(this_1)) {
              this_1.i2w('Saving body for ' + this.o4l_1.o3v().c3w().toString());
            }

            this.i8_1 = 2;
            suspendResult = save(this.o4l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n4l_1 = suspendResult.a3t();
            this.j8_1 = 7;
            this.i8_1 = 5;
            continue $sm;
          case 3:
            this.j8_1 = 4;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var e = this.l8_1;
              var tmp_1 = this;
              this.m4l_1 = e;
              throw e;
            } else {
              throw this.l8_1;
            }

          case 4:
            this.j8_1 = 7;
            var t = this.l8_1;
            tryCancelBody(this.k4l_1, this.m4l_1);
            throw t;
          case 5:
            var tmp_2 = this.n4l_1;
            this.j8_1 = 7;
            tryCancelBody(this.k4l_1, this.m4l_1);
            var savedResponse = tmp_2;
            this.l4l_1.s2p(get_RESPONSE_BODY_SAVED(), Unit_instance);
            this.i8_1 = 6;
            suspendResult = this.j4l_1.n2u(savedResponse, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(SaveBody$lambda$slambda).u41 = function ($this$intercept, response, completion) {
    var i = new SaveBody$lambda$slambda(completion);
    i.j4l_1 = $this$intercept;
    i.k4l_1 = response;
    return i;
  };
  function SaveBody$lambda$slambda_0(resultContinuation) {
    var i = new SaveBody$lambda$slambda(resultContinuation);
    return constructCallableReference(function ($this$intercept, response, $completion) {
      return i.t41($this$intercept, response, $completion);
    }, 2);
  }
  function SaveBodyPluginConfig$_init_$ref_lwjaof() {
    return constructCallableReference(function () {
      return new SaveBodyPluginConfig();
    }, 0, 0, 30, '<init>');
  }
  function SaveBodyPlugin$lambda($this$createClientPlugin) {
    _init_properties_SaveBody_kt__lbc3fj();
    if ($this$createClientPlugin.b42_1.a4l_1) {
      get_LOGGER_7().g2w('It is no longer possible to disable body saving for all requests. Use client.prepareRequest(...).execute { ... } syntax to prevent saving the body in memory.\n\nThis API is deprecated and will be removed in Ktor 4.0.0\nIf you were relying on this functionality, share your use case by commenting on this issue: https://youtrack.jetbrains.com/issue/KTOR-8367/');
    } else {
      get_LOGGER_7().g2w('The SaveBodyPlugin plugin is deprecated and can be safely removed. Request bodies are now saved in memory by default for all non-streaming responses.');
    }
    return Unit_instance;
  }
  var properties_initialized_SaveBody_kt_hzvee7;
  function _init_properties_SaveBody_kt__lbc3fj() {
    if (!properties_initialized_SaveBody_kt_hzvee7) {
      properties_initialized_SaveBody_kt_hzvee7 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'SkipSaveBody';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(Unit);
      var tmp_0 = null instanceof Unit;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      SKIP_SAVE_BODY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'ResponseBodySaved';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = getKClass(Unit);
      var tmp_4 = null instanceof Unit;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_5;
      try {
        tmp_5 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_6;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_6 = null;
        } else {
          throw $p_0;
        }
        tmp_5 = tmp_6;
      }
      var tmp$ret$2_0 = tmp_5;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp_4, tmp$ret$2_0);
      RESPONSE_BODY_SAVED = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER$delegate = lazy(LOGGER$delegate$lambda);
      SaveBody = createClientPlugin('SaveBody', SaveBody$lambda);
      var tmp_7 = SaveBodyPluginConfig$_init_$ref_lwjaof();
      SaveBodyPlugin = createClientPlugin_0('DoubleReceivePlugin', tmp_7, SaveBodyPlugin$lambda);
    }
  }
  function HookHandler(hook, handler) {
    this.p4l_1 = hook;
    this.q4l_1 = handler;
  }
  protoOf(HookHandler).h3u = function (client) {
    this.p4l_1.h41(client, this.q4l_1);
  };
  function ClientPluginBuilder$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginBuilder(key, client, pluginConfig) {
    this.z41_1 = key;
    this.a42_1 = client;
    this.b42_1 = pluginConfig;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c42_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    tmp_0.d42_1 = ClientPluginBuilder$onClose$lambda;
  }
  protoOf(ClientPluginBuilder).k4g = function (block) {
    this.e42(RequestHook_instance, block);
  };
  protoOf(ClientPluginBuilder).m4a = function (block) {
    this.e42(TransformResponseBodyHook_instance, block);
  };
  protoOf(ClientPluginBuilder).e42 = function (hook, handler) {
    this.c42_1.c1(new HookHandler(hook, handler));
  };
  function ClientPluginInstance$onClose$lambda() {
    return Unit_instance;
  }
  function ClientPluginInstance(key, config, body) {
    this.r4l_1 = key;
    this.s4l_1 = config;
    this.t4l_1 = body;
    var tmp = this;
    tmp.u4l_1 = ClientPluginInstance$onClose$lambda;
  }
  protoOf(ClientPluginInstance).h3u = function (scope) {
    var tmp0 = new ClientPluginBuilder(this.r4l_1, scope, this.s4l_1);
    // Inline function 'kotlin.apply' call
    this.t4l_1(tmp0);
    var pluginBuilder = tmp0;
    this.u4l_1 = pluginBuilder.d42_1;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = pluginBuilder.c42_1.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      element.h3u(scope);
    }
  };
  protoOf(ClientPluginInstance).t3 = function () {
    this.u4l_1();
  };
  function SetupRequest$install$slambda($handler, resultContinuation) {
    this.d4m_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetupRequest$install$slambda).t3s = function ($this$intercept, it, $completion) {
    var tmp = this.u3s($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(SetupRequest$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t3s(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SetupRequest$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.d4m_1(this.e4m_1.j2v_1, this);
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
  protoOf(SetupRequest$install$slambda).u3s = function ($this$intercept, it, completion) {
    var i = new SetupRequest$install$slambda(this.d4m_1, completion);
    i.e4m_1 = $this$intercept;
    i.f4m_1 = it;
    return i;
  };
  function SetupRequest$install$slambda_0($handler, resultContinuation) {
    var i = new SetupRequest$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.t3s($this$intercept, it, $completion);
    }, 2);
  }
  function SetupRequest() {
  }
  protoOf(SetupRequest).g4m = function (client, handler) {
    var tmp = Phases_getInstance().c41_1;
    client.v3r_1.n2v(tmp, SetupRequest$install$slambda_0(handler, null));
  };
  protoOf(SetupRequest).h41 = function (client, handler) {
    return this.g4m(client, (!(handler == null) ? isSuspendFunction(handler, 1) : false) ? handler : THROW_CCE());
  };
  var SetupRequest_instance;
  function SetupRequest_getInstance() {
    return SetupRequest_instance;
  }
  function Sender_0(httpSendSender, coroutineContext) {
    this.m48_1 = httpSendSender;
    this.n48_1 = coroutineContext;
  }
  protoOf(Sender_0).g1r = function () {
    return this.n48_1;
  };
  protoOf(Sender_0).o48 = function (requestBuilder, $completion) {
    return this.m48_1.q4i(requestBuilder, $completion);
  };
  function Send$install$slambda($handler, $client, resultContinuation) {
    this.p4m_1 = $handler;
    this.q4m_1 = $client;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Send$install$slambda).t4m = function ($this$intercept, request, $completion) {
    var tmp = this.u4m($this$intercept, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(Send$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.t4m(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Send$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.p4m_1(new Sender_0(this.r4m_1, this.q4m_1.u3r_1), this.s4m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(Send$install$slambda).u4m = function ($this$intercept, request, completion) {
    var i = new Send$install$slambda(this.p4m_1, this.q4m_1, completion);
    i.r4m_1 = $this$intercept;
    i.s4m_1 = request;
    return i;
  };
  function Send$install$slambda_0($handler, $client, resultContinuation) {
    var i = new Send$install$slambda($handler, $client, resultContinuation);
    return constructCallableReference(function ($this$intercept, request, $completion) {
      return i.t4m($this$intercept, request, $completion);
    }, 2);
  }
  function Send() {
  }
  protoOf(Send).v4m = function (client, handler) {
    var tmp = plugin(client, Plugin_getInstance());
    tmp.l4j(Send$install$slambda_0(handler, client, null));
  };
  protoOf(Send).h41 = function (client, handler) {
    return this.v4m(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var Send_instance;
  function Send_getInstance() {
    return Send_instance;
  }
  function createClientPlugin(name, body) {
    return createClientPlugin_0(name, createClientPlugin$lambda, body);
  }
  function createClientPlugin_0(name, createConfiguration, body) {
    return new ClientPluginImpl(name, createConfiguration, body);
  }
  function ClientPluginImpl(name, createConfiguration, body) {
    this.w4m_1 = createConfiguration;
    this.x4m_1 = body;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(ClientPluginInstance);
    var tmp_1 = null instanceof ClientPluginInstance;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(ClientPluginInstance), arrayOf([createInvariantKTypeProjection(createKType(createKTypeParameter('PluginConfigT', arrayOf([createKType(PrimitiveClasses_getInstance().eb(), arrayOf([]), false)]), 'invariant', false, 'io.ktor.client.plugins.api.ClientPluginImpl'), arrayOf([]), false))]), false);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_3 = null;
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.y4m_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(ClientPluginImpl).m1 = function () {
    return this.y4m_1;
  };
  protoOf(ClientPluginImpl).z4m = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.w4m_1();
    block(this_0);
    var config = this_0;
    return new ClientPluginInstance(this.y4m_1, config, this.x4m_1);
  };
  protoOf(ClientPluginImpl).f3v = function (block) {
    return this.z4m(block);
  };
  protoOf(ClientPluginImpl).a4n = function (plugin, scope) {
    plugin.h3u(scope);
  };
  protoOf(ClientPluginImpl).g3v = function (plugin, scope) {
    return this.a4n(plugin instanceof ClientPluginInstance ? plugin : THROW_CCE(), scope);
  };
  function createClientPlugin$lambda() {
    return Unit_instance;
  }
  function TransformResponseBodyContext() {
  }
  function OnRequestContext() {
  }
  function RequestHook$install$slambda($handler, resultContinuation) {
    this.j4n_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RequestHook$install$slambda).t3s = function ($this$intercept, it, $completion) {
    var tmp = this.u3s($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(RequestHook$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t3s(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(RequestHook$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.j4n_1(new OnRequestContext(), this.k4n_1.j2v_1, this.k4n_1.m2u(), this);
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
  protoOf(RequestHook$install$slambda).u3s = function ($this$intercept, it, completion) {
    var i = new RequestHook$install$slambda(this.j4n_1, completion);
    i.k4n_1 = $this$intercept;
    i.l4n_1 = it;
    return i;
  };
  function RequestHook$install$slambda_0($handler, resultContinuation) {
    var i = new RequestHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.t3s($this$intercept, it, $completion);
    }, 2);
  }
  function RequestHook() {
  }
  protoOf(RequestHook).m4n = function (client, handler) {
    var tmp = Phases_getInstance().d41_1;
    client.v3r_1.n2v(tmp, RequestHook$install$slambda_0(handler, null));
  };
  protoOf(RequestHook).h41 = function (client, handler) {
    return this.m4n(client, (!(handler == null) ? isSuspendFunction(handler, 3) : false) ? handler : THROW_CCE());
  };
  var RequestHook_instance;
  function RequestHook_getInstance() {
    return RequestHook_instance;
  }
  function TransformResponseBodyHook$install$slambda($handler, resultContinuation) {
    this.v4n_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TransformResponseBodyHook$install$slambda).o3t = function ($this$intercept, it, $completion) {
    var tmp = this.p3t($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(TransformResponseBodyHook$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.o3t(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(TransformResponseBodyHook$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var _destruct__k2r9zo = this.w4n_1.m2u();
            this.y4n_1 = _destruct__k2r9zo.oe();
            var content = _destruct__k2r9zo.pe();
            if (!isInterface(content, ByteReadChannel))
              return Unit_instance;
            this.i8_1 = 1;
            suspendResult = this.v4n_1(new TransformResponseBodyContext(), this.w4n_1.j2v_1.a3t(), content, this.y4n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var newContent = tmp_0;
            var tmp_1;
            if (!(newContent instanceof NullBody)) {
              tmp_1 = !this.y4n_1.a2w_1.ma(newContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              throw IllegalStateException_init_$Create$('transformResponseBody returned ' + toString(newContent) + ' but expected value of type ' + this.y4n_1.toString());
            }

            this.i8_1 = 2;
            suspendResult = this.w4n_1.n2u(new HttpResponseContainer(this.y4n_1, newContent), this);
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
  protoOf(TransformResponseBodyHook$install$slambda).p3t = function ($this$intercept, it, completion) {
    var i = new TransformResponseBodyHook$install$slambda(this.v4n_1, completion);
    i.w4n_1 = $this$intercept;
    i.x4n_1 = it;
    return i;
  };
  function TransformResponseBodyHook$install$slambda_0($handler, resultContinuation) {
    var i = new TransformResponseBodyHook$install$slambda($handler, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.o3t($this$intercept, it, $completion);
    }, 2);
  }
  function TransformResponseBodyHook() {
  }
  protoOf(TransformResponseBodyHook).z4n = function (client, handler) {
    var tmp = Phases_getInstance_1().a3v_1;
    client.w3r_1.n2v(tmp, TransformResponseBodyHook$install$slambda_0(handler, null));
  };
  protoOf(TransformResponseBodyHook).h41 = function (client, handler) {
    return this.z4n(client, (!(handler == null) ? isSuspendFunction(handler, 4) : false) ? handler : THROW_CCE());
  };
  var TransformResponseBodyHook_instance;
  function TransformResponseBodyHook_getInstance() {
    return TransformResponseBodyHook_instance;
  }
  function SSECapability() {
  }
  protoOf(SSECapability).toString = function () {
    return 'SSECapability';
  };
  protoOf(SSECapability).hashCode = function () {
    return -177755299;
  };
  protoOf(SSECapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SSECapability))
      return false;
    return true;
  };
  var SSECapability_instance;
  function SSECapability_getInstance() {
    return SSECapability_instance;
  }
  function SSEClientContent() {
  }
  function DefaultClientWebSocketSession(call, delegate) {
    this.a4o_1 = delegate;
    this.b4o_1 = call;
  }
  protoOf(DefaultClientWebSocketSession).w3j = function (frame, $completion) {
    return this.a4o_1.w3j(frame, $completion);
  };
  protoOf(DefaultClientWebSocketSession).m2e = function ($completion) {
    return this.a4o_1.m2e($completion);
  };
  protoOf(DefaultClientWebSocketSession).s3j = function (_set____db54di) {
    this.a4o_1.s3j(_set____db54di);
  };
  protoOf(DefaultClientWebSocketSession).t3j = function () {
    return this.a4o_1.t3j();
  };
  protoOf(DefaultClientWebSocketSession).u3j = function () {
    return this.a4o_1.u3j();
  };
  protoOf(DefaultClientWebSocketSession).v3j = function () {
    return this.a4o_1.v3j();
  };
  protoOf(DefaultClientWebSocketSession).g1r = function () {
    return this.a4o_1.g1r();
  };
  protoOf(DefaultClientWebSocketSession).r3j = function (negotiatedExtensions) {
    this.a4o_1.r3j(negotiatedExtensions);
  };
  function DelegatingClientWebSocketSession(call, session) {
    this.c4o_1 = session;
    this.d4o_1 = call;
  }
  protoOf(DelegatingClientWebSocketSession).w3j = function (frame, $completion) {
    return this.c4o_1.w3j(frame, $completion);
  };
  protoOf(DelegatingClientWebSocketSession).m2e = function ($completion) {
    return this.c4o_1.m2e($completion);
  };
  protoOf(DelegatingClientWebSocketSession).s3j = function (_set____db54di) {
    this.c4o_1.s3j(_set____db54di);
  };
  protoOf(DelegatingClientWebSocketSession).t3j = function () {
    return this.c4o_1.t3j();
  };
  protoOf(DelegatingClientWebSocketSession).u3j = function () {
    return this.c4o_1.u3j();
  };
  protoOf(DelegatingClientWebSocketSession).v3j = function () {
    return this.c4o_1.v3j();
  };
  protoOf(DelegatingClientWebSocketSession).g1r = function () {
    return this.c4o_1.g1r();
  };
  function WebSocketContent() {
    ClientUpgradeContent.call(this);
    var tmp = this;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    var nonce = generateNonce(16);
    this_0.q(Default_getInstance_0().lg(nonce));
    tmp.g4o_1 = this_0.toString();
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var this_1 = new HeadersBuilder();
    this_1.c2s('Upgrade', 'websocket');
    this_1.c2s('Connection', 'Upgrade');
    this_1.c2s('Sec-WebSocket-Key', this.g4o_1);
    this_1.c2s('Sec-WebSocket-Version', '13');
    tmp_0.h4o_1 = this_1.p30();
  }
  protoOf(WebSocketContent).w34 = function () {
    return this.h4o_1;
  };
  protoOf(WebSocketContent).toString = function () {
    return 'WebSocketContent';
  };
  function get_REQUEST_EXTENSIONS_KEY() {
    _init_properties_WebSockets_kt__jaqpbo();
    return REQUEST_EXTENSIONS_KEY;
  }
  var REQUEST_EXTENSIONS_KEY;
  function get_WEBSOCKETS_KEY() {
    _init_properties_WebSockets_kt__jaqpbo();
    return WEBSOCKETS_KEY;
  }
  var WEBSOCKETS_KEY;
  function get_LOGGER_8() {
    _init_properties_WebSockets_kt__jaqpbo();
    return LOGGER_7;
  }
  var LOGGER_7;
  function WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation) {
    this.q4o_1 = $extensionsSupported;
    this.r4o_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda).t3s = function ($this$intercept, it, $completion) {
    var tmp = this.u3s($this$intercept, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(WebSockets$Plugin$install$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.t3s(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            if (!isWebsocket(this.s4o_1.j2v_1.a3u_1.n38())) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.i2w('Skipping WebSocket plugin for non-websocket request: ' + this.s4o_1.j2v_1.a3u_1.toString());
              }
              return Unit_instance;
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.i2w('Sending WebSocket request ' + this.s4o_1.j2v_1.a3u_1.toString());
            }

            this.s4o_1.j2v_1.m4j(WebSocketCapability_instance, Unit_instance);
            if (this.q4o_1) {
              installExtensions(this.r4o_1, this.s4o_1.j2v_1);
            }

            this.s4o_1.j2v_1.f3u_1.t2p(get_WEBSOCKETS_KEY(), this.r4o_1);
            this.i8_1 = 1;
            suspendResult = this.s4o_1.n2u(new WebSocketContent(), this);
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
  protoOf(WebSockets$Plugin$install$slambda).u3s = function ($this$intercept, it, completion) {
    var i = new WebSockets$Plugin$install$slambda(this.q4o_1, this.r4o_1, completion);
    i.s4o_1 = $this$intercept;
    i.t4o_1 = it;
    return i;
  };
  function WebSockets$Plugin$install$slambda_0($extensionsSupported, $plugin, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda($extensionsSupported, $plugin, resultContinuation);
    return constructCallableReference(function ($this$intercept, it, $completion) {
      return i.t3s($this$intercept, it, $completion);
    }, 2);
  }
  function WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation) {
    this.c4p_1 = $plugin;
    this.d4p_1 = $extensionsSupported;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebSockets$Plugin$install$slambda_1).o3t = function ($this$intercept, _destruct__k2r9zo, $completion) {
    var tmp = this.p3t($this$intercept, _destruct__k2r9zo, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(WebSockets$Plugin$install$slambda_1).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.o3t(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(WebSockets$Plugin$install$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var info = this.f4p_1.oe();
            var session = this.f4p_1.pe();
            var response = this.e4p_1.j2v_1.a3t();
            var status = response.v3v();
            var requestContent = get_request(response).d1b();
            if (!(requestContent instanceof WebSocketContent)) {
              var this_0 = get_LOGGER_8();
              if (get_isTraceEnabled(this_0)) {
                this_0.i2w('Skipping non-websocket response from ' + this.e4p_1.j2v_1.o3v().c3w().toString() + ': ' + toString(requestContent));
              }
              return Unit_instance;
            }

            if (!status.equals(Companion_getInstance_1().s35_1)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected status code ' + Companion_getInstance_1().s35_1.v37_1 + ' but was ' + status.v37_1);
            }

            if (!isInterface(session, WebSocketSession)) {
              throw WebSocketException_init_$Create$('Handshake exception, expected `WebSocketSession` content but was ' + toString(getKClassFromExpression(session)));
            }

            var this_1 = get_LOGGER_8();
            if (get_isTraceEnabled(this_1)) {
              this_1.i2w('Receive websocket session from ' + this.e4p_1.j2v_1.o3v().c3w().toString() + ': ' + toString(session));
            }

            if (!(this.c4p_1.h4p_1 === 2147483647n)) {
              session.s3j(this.c4p_1.h4p_1);
            }

            var tmp_0;
            if (info.a2w_1.equals(getKClass(DefaultClientWebSocketSession))) {
              var defaultSession = this.c4p_1.l4p(session);
              var clientSession = new DefaultClientWebSocketSession(this.e4p_1.j2v_1, defaultSession);
              var tmp_1;
              if (this.d4p_1) {
                tmp_1 = completeNegotiation(this.c4p_1, this.e4p_1.j2v_1);
              } else {
                tmp_1 = emptyList();
              }
              var negotiated = tmp_1;
              clientSession.r3j(negotiated);
              tmp_0 = clientSession;
            } else {
              tmp_0 = new DelegatingClientWebSocketSession(this.e4p_1.j2v_1, session);
            }

            var clientSession_0 = tmp_0;
            this.i8_1 = 1;
            suspendResult = this.e4p_1.n2u(new HttpResponseContainer(info, clientSession_0), this);
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
  protoOf(WebSockets$Plugin$install$slambda_1).p3t = function ($this$intercept, _destruct__k2r9zo, completion) {
    var i = new WebSockets$Plugin$install$slambda_1(this.c4p_1, this.d4p_1, completion);
    i.e4p_1 = $this$intercept;
    i.f4p_1 = _destruct__k2r9zo;
    return i;
  };
  function WebSockets$Plugin$install$slambda_2($plugin, $extensionsSupported, resultContinuation) {
    var i = new WebSockets$Plugin$install$slambda_1($plugin, $extensionsSupported, resultContinuation);
    return constructCallableReference(function ($this$intercept, _destruct__k2r9zo, $completion) {
      return i.o3t($this$intercept, _destruct__k2r9zo, $completion);
    }, 2);
  }
  function installExtensions($this, context) {
    var installed = $this.i4p_1.p30();
    context.f3u_1.s2p(get_REQUEST_EXTENSIONS_KEY(), installed);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = installed.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var list = element.z3q();
      addAll(destination, list);
    }
    var protocols = destination;
    addNegotiatedProtocols($this, context, protocols);
  }
  function completeNegotiation($this, call) {
    var tmp0_safe_receiver = call.a3t().w34().i1b('Sec-WebSocket-Extensions');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = parseWebSocketExtensions(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var serverExtensions = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var clientExtensions = call.p3v().p2p(get_REQUEST_EXTENSIONS_KEY());
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = clientExtensions.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      if (element.a3r(serverExtensions)) {
        destination.c1(element);
      }
    }
    return destination;
  }
  function addNegotiatedProtocols($this, context, protocols) {
    if (protocols.r())
      return Unit_instance;
    var headerValue = joinToString(protocols, ',');
    header(context, 'Sec-WebSocket-Extensions', headerValue);
  }
  function Config_0() {
    this.m4p_1 = new WebSocketExtensionsConfig();
    this.n4p_1 = new WebSocketChannelsConfig();
    this.o4p_1 = 0n;
    this.p4p_1 = 2147483647n;
    this.q4p_1 = null;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'Websocket';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(WebSockets);
    var tmp_1 = null instanceof WebSockets;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(WebSockets), arrayOf([]), false);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_3 = null;
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.r4p_1 = new AttributeKey(name, tmp$ret$1);
  }
  protoOf(Plugin_0).m1 = function () {
    return this.r4p_1;
  };
  protoOf(Plugin_0).s4p = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new Config_0();
    block(this_0);
    var config = this_0;
    return new WebSockets(config.o4p_1, config.p4p_1, config.m4p_1, config.q4p_1, config.n4p_1);
  };
  protoOf(Plugin_0).f3v = function (block) {
    return this.s4p(block);
  };
  protoOf(Plugin_0).t4p = function (plugin, scope) {
    var extensionsSupported = scope.p3r_1.g3z().i2(WebSocketExtensionsCapability_instance);
    var tmp = Phases_getInstance().f41_1;
    scope.v3r_1.n2v(tmp, WebSockets$Plugin$install$slambda_0(extensionsSupported, plugin, null));
    var tmp_0 = Phases_getInstance_1().a3v_1;
    scope.w3r_1.n2v(tmp_0, WebSockets$Plugin$install$slambda_2(plugin, extensionsSupported, null));
  };
  protoOf(Plugin_0).g3v = function (plugin, scope) {
    return this.t4p(plugin instanceof WebSockets ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function WebSockets(pingIntervalMillis, maxFrameSize, extensionsConfig, contentConverter, channelsConfig) {
    Plugin_getInstance_0();
    contentConverter = contentConverter === VOID ? null : contentConverter;
    channelsConfig = channelsConfig === VOID ? Companion_getInstance_4().x3j_1 : channelsConfig;
    this.g4p_1 = pingIntervalMillis;
    this.h4p_1 = maxFrameSize;
    this.i4p_1 = extensionsConfig;
    this.j4p_1 = contentConverter;
    this.k4p_1 = channelsConfig;
  }
  protoOf(WebSockets).l4p = function (session) {
    if (isInterface(session, DefaultWebSocketSession))
      return session;
    // Inline function 'kotlin.Long.times' call
    var this_0 = this.g4p_1;
    var timeoutMillis = multiply(this_0, fromInt(2));
    // Inline function 'kotlin.also' call
    var this_1 = DefaultWebSocketSession_0(session, this.g4p_1, timeoutMillis, this.k4p_1);
    this_1.s3j(this.h4p_1);
    return this_1;
  };
  function WebSocketExtensionsCapability() {
  }
  protoOf(WebSocketExtensionsCapability).toString = function () {
    return 'WebSocketExtensionsCapability';
  };
  protoOf(WebSocketExtensionsCapability).hashCode = function () {
    return 806573237;
  };
  protoOf(WebSocketExtensionsCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketExtensionsCapability))
      return false;
    return true;
  };
  var WebSocketExtensionsCapability_instance;
  function WebSocketExtensionsCapability_getInstance() {
    return WebSocketExtensionsCapability_instance;
  }
  function WebSocketCapability() {
  }
  protoOf(WebSocketCapability).toString = function () {
    return 'WebSocketCapability';
  };
  protoOf(WebSocketCapability).hashCode = function () {
    return -1146563391;
  };
  protoOf(WebSocketCapability).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebSocketCapability))
      return false;
    return true;
  };
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    return WebSocketCapability_instance;
  }
  function WebSocketException_init_$Init$(message, $this) {
    WebSocketException.call($this, message, null);
    return $this;
  }
  function WebSocketException_init_$Create$(message) {
    var tmp = WebSocketException_init_$Init$(message, objectCreate(protoOf(WebSocketException)));
    captureStack(tmp, WebSocketException_init_$Create$);
    return tmp;
  }
  function WebSocketException(message, cause) {
    IllegalStateException_init_$Init$_1(message, cause, this);
    captureStack(this, WebSocketException);
  }
  var properties_initialized_WebSockets_kt_2t2hw2;
  function _init_properties_WebSockets_kt__jaqpbo() {
    if (!properties_initialized_WebSockets_kt_2t2hw2) {
      properties_initialized_WebSockets_kt_2t2hw2 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'Websocket extensions';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtList);
      var tmp_0 = !(null == null) ? isInterface(null, KtList) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(WebSocketExtension), arrayOf([getStarKTypeProjection()]), false))]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      REQUEST_EXTENSIONS_KEY = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'Websocket plugin config';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_3 = getKClass(WebSockets);
      var tmp_4 = null instanceof WebSockets;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_5;
      try {
        tmp_5 = createKType(getKClass(WebSockets), arrayOf([]), false);
      } catch ($p_0) {
        var tmp_6;
        if ($p_0 instanceof Error) {
          var _unused_var__etf5q3_0 = $p_0;
          tmp_6 = null;
        } else {
          throw $p_0;
        }
        tmp_5 = tmp_6;
      }
      var tmp$ret$2_0 = tmp_5;
      var tmp$ret$1_0 = new TypeInfo(tmp_3, tmp_4, tmp$ret$2_0);
      WEBSOCKETS_KEY = new AttributeKey(name_0, tmp$ret$1_0);
      LOGGER_7 = KtorSimpleLogger('io.ktor.client.plugins.websocket.WebSockets');
    }
  }
  function ClientUpgradeContent$content$delegate$lambda() {
    return new ByteChannel();
  }
  function ClientUpgradeContent() {
    NoContent.call(this);
    var tmp = this;
    tmp.v4p_1 = lazy(ClientUpgradeContent$content$delegate$lambda);
  }
  function DefaultHttpRequest(call, data) {
    this.w4p_1 = call;
    this.x4p_1 = data.a3z_1;
    this.y4p_1 = data.z3y_1;
    this.z4p_1 = data.c3z_1;
    this.a4q_1 = data.b3z_1;
    this.b4q_1 = data.e3z_1;
  }
  protoOf(DefaultHttpRequest).t3v = function () {
    return this.w4p_1;
  };
  protoOf(DefaultHttpRequest).g1r = function () {
    return this.t3v().g1r();
  };
  protoOf(DefaultHttpRequest).b3w = function () {
    return this.x4p_1;
  };
  protoOf(DefaultHttpRequest).c3w = function () {
    return this.y4p_1;
  };
  protoOf(DefaultHttpRequest).d1b = function () {
    return this.z4p_1;
  };
  protoOf(DefaultHttpRequest).w34 = function () {
    return this.a4q_1;
  };
  protoOf(DefaultHttpRequest).p3v = function () {
    return this.b4q_1;
  };
  function get_ResponseAdapterAttributeKey() {
    _init_properties_HttpRequest_kt__813lx1();
    return ResponseAdapterAttributeKey;
  }
  var ResponseAdapterAttributeKey;
  function Companion_2() {
  }
  var Companion_instance_3;
  function Companion_getInstance_12() {
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function HttpRequestBuilder() {
    this.a3u_1 = new URLBuilder();
    this.b3u_1 = Companion_getInstance_2().x34_1;
    this.c3u_1 = new HeadersBuilder();
    this.d3u_1 = EmptyContent_getInstance();
    this.e3u_1 = SupervisorJob();
    this.f3u_1 = AttributesJsFn(true);
  }
  protoOf(HttpRequestBuilder).w34 = function () {
    return this.c3u_1;
  };
  protoOf(HttpRequestBuilder).v3z = function (value) {
    if (!(value == null)) {
      this.f3u_1.s2p(get_BodyTypeAttributeKey(), value);
    } else {
      this.f3u_1.u2p(get_BodyTypeAttributeKey());
    }
  };
  protoOf(HttpRequestBuilder).c4q = function () {
    return this.f3u_1.q2p(get_BodyTypeAttributeKey());
  };
  protoOf(HttpRequestBuilder).p30 = function () {
    var tmp = this.a3u_1.p30();
    var tmp_0 = this.b3u_1;
    var tmp_1 = this.c3u_1.p30();
    var tmp_2 = this.d3u_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'No request transformation found: ' + toString(this.d3u_1);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.e3u_1, this.f3u_1);
  };
  protoOf(HttpRequestBuilder).u3z = function (builder) {
    this.e3u_1 = builder.e3u_1;
    return this.l4g(builder);
  };
  protoOf(HttpRequestBuilder).l4g = function (builder) {
    this.b3u_1 = builder.b3u_1;
    this.d3u_1 = builder.d3u_1;
    this.v3z(builder.c4q());
    takeFrom_0(this.a3u_1, builder.a3u_1);
    this.a3u_1.i38_1 = this.a3u_1.i38_1;
    appendAll(this.c3u_1, builder.c3u_1);
    putAll(this.f3u_1, builder.f3u_1);
    return this;
  };
  protoOf(HttpRequestBuilder).m4j = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.f3u_1.v2p(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.v2(key, capability);
  };
  protoOf(HttpRequestBuilder).y4j = function (key) {
    var tmp0_safe_receiver = this.f3u_1.q2p(get_ENGINE_CAPABILITIES_KEY());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2(key);
  };
  function url(_this__u8e3s4, scheme, host, port, path, block) {
    scheme = scheme === VOID ? null : scheme;
    host = host === VOID ? null : host;
    port = port === VOID ? null : port;
    path = path === VOID ? null : path;
    var tmp;
    if (block === VOID) {
      tmp = url$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    _init_properties_HttpRequest_kt__813lx1();
    set(_this__u8e3s4.a3u_1, scheme, host, port, path, block);
  }
  function headers(_this__u8e3s4, block) {
    _init_properties_HttpRequest_kt__813lx1();
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4.w34();
    block(this_0);
    return this_0;
  }
  function HttpRequest_0() {
  }
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.z3y_1 = url;
    this.a3z_1 = method;
    this.b3z_1 = headers;
    this.c3z_1 = body;
    this.d3z_1 = executionContext;
    this.e3z_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.e3z_1.q2p(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2();
    tmp.f3z_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  protoOf(HttpRequestData).toString = function () {
    return 'HttpRequestData(url=' + this.z3y_1.toString() + ', method=' + this.a3z_1.toString() + ')';
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.e3w_1 = statusCode;
    this.f3w_1 = requestTime;
    this.g3w_1 = headers;
    this.h3w_1 = version;
    this.i3w_1 = body;
    this.j3w_1 = callContext;
    this.k3w_1 = GMTDate();
  }
  protoOf(HttpResponseData).toString = function () {
    return 'HttpResponseData=(statusCode=' + this.e3w_1.toString() + ')';
  };
  function ResponseAdapter() {
  }
  function isUpgradeRequest(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    var tmp = _this__u8e3s4.c3z_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function url$lambda(_this__u8e3s4) {
    _init_properties_HttpRequest_kt__813lx1();
    return Unit_instance;
  }
  var properties_initialized_HttpRequest_kt_zh09pz;
  function _init_properties_HttpRequest_kt__813lx1() {
    if (!properties_initialized_HttpRequest_kt_zh09pz) {
      properties_initialized_HttpRequest_kt_zh09pz = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ResponseAdapterAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(ResponseAdapter);
      var tmp_0 = !(null == null) ? isInterface(null, ResponseAdapter) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(ResponseAdapter), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      ResponseAdapterAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function Phases() {
    Phases_instance = this;
    this.c41_1 = new PipelinePhase('Before');
    this.d41_1 = new PipelinePhase('State');
    this.e41_1 = new PipelinePhase('Transform');
    this.f41_1 = new PipelinePhase('Render');
    this.g41_1 = new PipelinePhase('Send');
  }
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance().c41_1, Phases_getInstance().d41_1, Phases_getInstance().e41_1, Phases_getInstance().f41_1, Phases_getInstance().g41_1]);
    this.l4q_1 = developmentMode;
  }
  protoOf(HttpRequestPipeline).h2v = function () {
    return this.l4q_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.i3u_1 = new PipelinePhase('Before');
    this.j3u_1 = new PipelinePhase('State');
    this.k3u_1 = new PipelinePhase('Monitoring');
    this.l3u_1 = new PipelinePhase('Engine');
    this.m3u_1 = new PipelinePhase('Receive');
  }
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_0().i3u_1, Phases_getInstance_0().j3u_1, Phases_getInstance_0().k3u_1, Phases_getInstance_0().l3u_1, Phases_getInstance_0().m3u_1]);
    this.t4q_1 = developmentMode;
  }
  protoOf(HttpSendPipeline).h2v = function () {
    return this.t4q_1;
  };
  function get_BodyTypeAttributeKey() {
    _init_properties_RequestBody_kt__bo3lwf();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function _init_properties_RequestBody_kt__bo3lwf() {
    if (!properties_initialized_RequestBody_kt_agyv1b) {
      properties_initialized_RequestBody_kt_agyv1b = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'BodyTypeAttributeKey';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(TypeInfo);
      var tmp_0 = null instanceof TypeInfo;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(TypeInfo), arrayOf([]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      BodyTypeAttributeKey = new AttributeKey(name, tmp$ret$1);
    }
  }
  function get_RN_BYTES() {
    _init_properties_FormDataContent_kt__7tvkbr();
    return RN_BYTES;
  }
  var RN_BYTES;
  function FormDataContent(formData) {
    ByteArrayContent.call(this);
    this.v4q_1 = formData;
    this.w4q_1 = toByteArray_0(formUrlEncode(this.v4q_1));
    this.x4q_1 = fromInt(this.w4q_1.length);
    this.y4q_1 = withCharset(Application_getInstance().i2y_1, Charsets_getInstance().n2o_1);
  }
  protoOf(FormDataContent).l3a = function () {
    return this.x4q_1;
  };
  protoOf(FormDataContent).k3a = function () {
    return this.y4q_1;
  };
  protoOf(FormDataContent).m3a = function () {
    return this.w4q_1;
  };
  function MultiPartFormDataContent$rawParts$lambda($bytes) {
    return function () {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      var builder = new Buffer();
      writeFully(builder, $bytes);
      return builder;
    };
  }
  function $writeToCOROUTINE$(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h4r_1 = _this__u8e3s4;
    this.i4r_1 = channel;
  }
  protoOf($writeToCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 25;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 21;
            this.j8_1 = 20;
            this.p4r_1 = this.h4r_1.y4r_1.t();
            this.i8_1 = 2;
            continue $sm;
          case 2:
            if (!this.p4r_1.u()) {
              this.i8_1 = 18;
              continue $sm;
            }

            this.o4r_1 = this.p4r_1.v();
            this.i8_1 = 3;
            suspendResult = writeFully_0(this.i4r_1, this.h4r_1.u4r_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.i8_1 = 4;
            suspendResult = writeFully_0(this.i4r_1, this.o4r_1.a4s_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.i8_1 = 5;
            suspendResult = writeFully_0(this.i4r_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            var tmp0_subject = this.o4r_1;
            if (tmp0_subject instanceof InputPart) {
              this.n4r_1 = this.o4r_1.h4s_1();
              this.i8_1 = 7;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ChannelPart) {
                this.i8_1 = 6;
                suspendResult = copyTo_0(this.o4r_1.e4s_1(), this.i4r_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_0 = this;
                noWhenBranchMatchedException();
              }
            }

            break;
          case 6:
            this.k4r_1 = suspendResult;
            this.i8_1 = 16;
            continue $sm;
          case 7:
            this.m4r_1 = this.n4r_1;
            this.l4r_1 = null;
            this.i8_1 = 8;
            continue $sm;
          case 8:
            this.i8_1 = 9;
            continue $sm;
          case 9:
            this.j8_1 = 13;
            this.j8_1 = 12;
            var input = this.m4r_1;
            this.i8_1 = 10;
            suspendResult = copyTo_1(input, this.i4r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.i8_1 = 11;
            var tmp_1 = this;
            continue $sm;
          case 11:
            this.j8_1 = 20;
            closeFinally(this.m4r_1, this.l4r_1);
            this.i8_1 = 15;
            continue $sm;
          case 12:
            this.j8_1 = 13;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Error) {
              var e = this.l8_1;
              var tmp_3 = this;
              this.l4r_1 = e;
              throw e;
            } else {
              throw this.l8_1;
            }

          case 13:
            this.j8_1 = 20;
            var t = this.l8_1;
            closeFinally(this.m4r_1, this.l4r_1);
            throw t;
          case 14:
            this.j8_1 = 20;
            closeFinally(this.m4r_1, this.l4r_1);
            if (false) {
              this.i8_1 = 7;
              continue $sm;
            }

            this.i8_1 = 15;
            continue $sm;
          case 15:
            this.k4r_1 = Unit_instance;
            this.i8_1 = 16;
            continue $sm;
          case 16:
            this.i8_1 = 17;
            suspendResult = writeFully_0(this.i4r_1, get_RN_BYTES(), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 17:
            this.i8_1 = 2;
            continue $sm;
          case 18:
            this.i8_1 = 19;
            suspendResult = writeFully_0(this.i4r_1, this.h4r_1.v4r_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 19:
            this.j8_1 = 25;
            this.i8_1 = 23;
            continue $sm;
          case 20:
            this.j8_1 = 21;
            var tmp_4 = this.l8_1;
            if (tmp_4 instanceof Error) {
              var cause = this.l8_1;
              close(this.i4r_1, cause);
              this.j8_1 = 25;
              this.i8_1 = 23;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 21:
            this.j8_1 = 25;
            this.j4r_1 = this.l8_1;
            this.i8_1 = 22;
            suspendResult = this.i4r_1.w2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 22:
            throw this.j4r_1;
          case 23:
            this.j8_1 = 25;
            this.i8_1 = 24;
            suspendResult = this.i4r_1.w2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 24:
            return Unit_instance;
          case 25:
            throw this.l8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.j8_1 === 25) {
          throw e_0;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_0;
        }
      }
     while (true);
  };
  function MultiPartFormDataContent(parts, boundary, contentType) {
    boundary = boundary === VOID ? generateBoundary() : boundary;
    contentType = contentType === VOID ? MultiPart_getInstance().l2z_1.l30('boundary', boundary) : contentType;
    WriteChannelContent.call(this);
    this.r4r_1 = parts;
    this.s4r_1 = boundary;
    this.t4r_1 = contentType;
    this.u4r_1 = toByteArray_0('--' + this.s4r_1 + '\r\n');
    this.v4r_1 = toByteArray_0('--' + this.s4r_1 + '--\r\n');
    this.w4r_1 = this.v4r_1.length;
    this.x4r_1 = imul(get_RN_BYTES().length, 2) + this.u4r_1.length | 0;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.r4r_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var headersBuilder = BytePacketBuilder();
      var _iterator__ex2g4s_0 = item.f3c_1.s2r().t();
      while (_iterator__ex2g4s_0.u()) {
        var _destruct__k2r9zo = _iterator__ex2g4s_0.v();
        // Inline function 'kotlin.collections.component1' call
        var key = _destruct__k2r9zo.m1();
        // Inline function 'kotlin.collections.component2' call
        var values = _destruct__k2r9zo.n1();
        writeText(headersBuilder, key + ': ' + joinToString(values, '; '));
        writeFully(headersBuilder, get_RN_BYTES());
      }
      var tmp0_safe_receiver = item.f3c_1.i1b('Content-Length');
      var bodySize = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
      var tmp_0;
      if (item instanceof FileItem) {
        var headers = readByteArray(build(headersBuilder));
        var tmp_1;
        if (bodySize == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other = this.x4r_1;
          tmp_1 = add(bodySize, fromInt(other));
        }
        var tmp3_safe_receiver = tmp_1;
        var tmp_2;
        if (tmp3_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.Long.plus' call
          var other_0 = headers.length;
          tmp_2 = add(tmp3_safe_receiver, fromInt(other_0));
        }
        var size = tmp_2;
        tmp_0 = new ChannelPart(headers, item.n4s_1, size);
      } else {
        if (item instanceof BinaryItem) {
          var headers_0 = readByteArray(build(headersBuilder));
          var tmp_3;
          if (bodySize == null) {
            tmp_3 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_1 = this.x4r_1;
            tmp_3 = add(bodySize, fromInt(other_1));
          }
          var tmp5_safe_receiver = tmp_3;
          var tmp_4;
          if (tmp5_safe_receiver == null) {
            tmp_4 = null;
          } else {
            // Inline function 'kotlin.Long.plus' call
            var other_2 = headers_0.length;
            tmp_4 = add(tmp5_safe_receiver, fromInt(other_2));
          }
          var size_0 = tmp_4;
          tmp_0 = new InputPart(headers_0, item.x3b_1, size_0);
        } else {
          if (item instanceof FormItem) {
            // Inline function 'io.ktor.utils.io.core.buildPacket' call
            var builder = new Buffer();
            writeText(builder, item.r3b_1);
            var bytes = readByteArray(builder);
            var provider = MultiPartFormDataContent$rawParts$lambda(bytes);
            if (bodySize == null) {
              writeText(headersBuilder, 'Content-Length: ' + bytes.length);
              writeFully(headersBuilder, get_RN_BYTES());
            }
            var headers_1 = readByteArray(build(headersBuilder));
            var size_1 = (bytes.length + this.x4r_1 | 0) + headers_1.length | 0;
            tmp_0 = new InputPart(headers_1, provider, fromInt(size_1));
          } else {
            if (item instanceof BinaryChannelItem) {
              var headers_2 = readByteArray(build(headersBuilder));
              var tmp_5;
              if (bodySize == null) {
                tmp_5 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_3 = this.x4r_1;
                tmp_5 = add(bodySize, fromInt(other_3));
              }
              var tmp7_safe_receiver = tmp_5;
              var tmp_6;
              if (tmp7_safe_receiver == null) {
                tmp_6 = null;
              } else {
                // Inline function 'kotlin.Long.plus' call
                var other_4 = headers_2.length;
                tmp_6 = add(tmp7_safe_receiver, fromInt(other_4));
              }
              var size_2 = tmp_6;
              tmp_0 = new ChannelPart(headers_2, item.d3c_1, size_2);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
      var tmp$ret$2 = tmp_0;
      destination.c1(tmp$ret$2);
    }
    tmp.y4r_1 = destination;
    this.z4r_1 = null;
    var rawLength = 0n;
    var _iterator__ex2g4s_1 = this.y4r_1.t();
    $l$loop: while (_iterator__ex2g4s_1.u()) {
      var part = _iterator__ex2g4s_1.v();
      var size_3 = part.b4s_1;
      if (size_3 == null) {
        rawLength = null;
        break $l$loop;
      }
      var tmp0_safe_receiver_0 = rawLength;
      rawLength = tmp0_safe_receiver_0 == null ? null : add(tmp0_safe_receiver_0, size_3);
    }
    if (!(rawLength == null)) {
      var tmp0 = rawLength;
      // Inline function 'kotlin.Long.plus' call
      var other_5 = this.w4r_1;
      rawLength = add(tmp0, fromInt(other_5));
    }
    this.z4r_1 = rawLength;
  }
  protoOf(MultiPartFormDataContent).k3a = function () {
    return this.t4r_1;
  };
  protoOf(MultiPartFormDataContent).l3a = function () {
    return this.z4r_1;
  };
  protoOf(MultiPartFormDataContent).m3c = function (channel, $completion) {
    var tmp = new $writeToCOROUTINE$(this, channel, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  function generateBoundary() {
    _init_properties_FormDataContent_kt__7tvkbr();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0.q(toString_1(Default_getInstance().se(), 16));
      }
       while (inductionVariable < 32);
    var tmp$ret$0 = this_0.toString();
    return take(tmp$ret$0, 70);
  }
  function InputPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.h4s_1 = provider;
  }
  function ChannelPart(headers, provider, size) {
    PreparedPart.call(this, headers, size);
    this.e4s_1 = provider;
  }
  function PreparedPart(headers, size) {
    this.a4s_1 = headers;
    this.b4s_1 = size;
  }
  function copyTo_1(_this__u8e3s4, channel, $completion) {
    return writePacket(channel, _this__u8e3s4, $completion);
  }
  var properties_initialized_FormDataContent_kt_w3e0rf;
  function _init_properties_FormDataContent_kt__7tvkbr() {
    if (!properties_initialized_FormDataContent_kt_w3e0rf) {
      properties_initialized_FormDataContent_kt_w3e0rf = true;
      RN_BYTES = toByteArray_0('\r\n');
    }
  }
  function FormBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o4s_1 = ArrayList_init_$Create$();
  }
  protoOf(FormBuilder).p4s = function (key, value, headers) {
    var tmp0 = this.o4s_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.c1(element);
  };
  protoOf(FormBuilder).q4s = function (key, value, headers, $super) {
    headers = headers === VOID ? Companion_getInstance_5().r34_1 : headers;
    var tmp;
    if ($super === VOID) {
      this.p4s(key, value, headers);
      tmp = Unit_instance;
    } else {
      tmp = $super.p4s.call(this, key, value, headers);
    }
    return tmp;
  };
  protoOf(FormBuilder).r4s = function (key, value, headers) {
    var tmp0 = this.o4s_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new FormPart(key, value, headers);
    tmp0.c1(element);
  };
  protoOf(FormBuilder).s4s = function () {
    return this.o4s_1;
  };
  function formData(values) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var element = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = element.oe();
      var value = element.pe();
      var headers = element.w4s();
      // Inline function 'kotlin.apply' call
      var this_0 = new HeadersBuilder();
      this_0.c2s('Content-Disposition', 'form-data; name=' + quoteForMultipart(key));
      this_0.d2s(headers);
      var partHeaders = this_0;
      var tmp;
      if (typeof value === 'string') {
        tmp = new FormItem(value, formData$lambda, partHeaders.p30());
      } else {
        if (isNumber(value)) {
          var tmp_0 = toString(value);
          tmp = new FormItem(tmp_0, formData$lambda_0, partHeaders.p30());
        } else {
          if (typeof value === 'boolean') {
            var tmp_1 = value.toString();
            tmp = new FormItem(tmp_1, formData$lambda_1, partHeaders.p30());
          } else {
            if (isByteArray(value)) {
              partHeaders.c2s('Content-Length', value.length.toString());
              var tmp_2 = formData$lambda_2(value);
              tmp = new BinaryItem(tmp_2, formData$lambda_3, partHeaders.p30());
            } else {
              if (isInterface(value, Source)) {
                if (value instanceof Buffer) {
                  partHeaders.c2s('Content-Length', get_remaining(value).toString());
                }
                var tmp_3 = formData$lambda_4(value);
                tmp = new BinaryItem(tmp_3, formData$lambda_5(value), partHeaders.p30());
              } else {
                if (value instanceof InputProvider) {
                  var size = value.z4s_1;
                  if (!(size == null)) {
                    partHeaders.c2s('Content-Length', size.toString());
                  }
                  tmp = new BinaryItem(value.a4t_1, formData$lambda_6, partHeaders.p30());
                } else {
                  if (value instanceof ChannelProvider) {
                    var size_0 = value.x4s_1;
                    if (!(size_0 == null)) {
                      partHeaders.c2s('Content-Length', size_0.toString());
                    }
                    tmp = new BinaryChannelItem(value.y4s_1, partHeaders.p30());
                  } else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unknown form content type: ' + toString(value);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
      var part = tmp;
      // Inline function 'kotlin.collections.plusAssign' call
      result.c1(part);
    }
    return result;
  }
  function FormPart(key, value, headers) {
    headers = headers === VOID ? Companion_getInstance_5().r34_1 : headers;
    this.t4s_1 = key;
    this.u4s_1 = value;
    this.v4s_1 = headers;
  }
  protoOf(FormPart).oe = function () {
    return this.t4s_1;
  };
  protoOf(FormPart).pe = function () {
    return this.u4s_1;
  };
  protoOf(FormPart).w4s = function () {
    return this.v4s_1;
  };
  protoOf(FormPart).toString = function () {
    return 'FormPart(key=' + this.t4s_1 + ', value=' + toString(this.u4s_1) + ', headers=' + toString(this.v4s_1) + ')';
  };
  protoOf(FormPart).hashCode = function () {
    var result = getStringHashCode(this.t4s_1);
    result = imul(result, 31) + hashCode(this.u4s_1) | 0;
    result = imul(result, 31) + hashCode(this.v4s_1) | 0;
    return result;
  };
  protoOf(FormPart).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FormPart))
      return false;
    if (!(this.t4s_1 === other.t4s_1))
      return false;
    if (!equals(this.u4s_1, other.u4s_1))
      return false;
    if (!equals(this.v4s_1, other.v4s_1))
      return false;
    return true;
  };
  function InputProvider() {
  }
  function ChannelProvider() {
  }
  function quoteForMultipart(_this__u8e3s4) {
    return isQuoted(_this__u8e3s4) ? _this__u8e3s4 : quote(_this__u8e3s4);
  }
  function formData$lambda() {
    return Unit_instance;
  }
  function formData$lambda_0() {
    return Unit_instance;
  }
  function formData$lambda_1() {
    return Unit_instance;
  }
  function formData$lambda_2($value) {
    return function () {
      return ByteReadPacket($value);
    };
  }
  function formData$lambda_3() {
    return Unit_instance;
  }
  function formData$lambda_4($value) {
    return function () {
      return $value.z1o();
    };
  }
  function formData$lambda_5($value) {
    return function () {
      $value.t3();
      return Unit_instance;
    };
  }
  function formData$lambda_6() {
    return Unit_instance;
  }
  function header(_this__u8e3s4, key, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      _this__u8e3s4.w34().c2s(key, toString(value));
      tmp = Unit_instance;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? Unit_instance : tmp1_elvis_lhs;
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.b4t_1 = call;
    this.c4t_1 = responseData.j3w_1;
    this.d4t_1 = responseData.e3w_1;
    this.e4t_1 = responseData.h3w_1;
    this.f4t_1 = responseData.f3w_1;
    this.g4t_1 = responseData.k3w_1;
    var tmp = this;
    var tmp_0 = responseData.i3w_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.h4t_1 = tmp0_elvis_lhs == null ? Companion_getInstance().t2g_1 : tmp0_elvis_lhs;
    this.i4t_1 = responseData.g3w_1;
  }
  protoOf(DefaultHttpResponse).t3v = function () {
    return this.b4t_1;
  };
  protoOf(DefaultHttpResponse).g1r = function () {
    return this.c4t_1;
  };
  protoOf(DefaultHttpResponse).v3v = function () {
    return this.d4t_1;
  };
  protoOf(DefaultHttpResponse).w3v = function () {
    return this.e4t_1;
  };
  protoOf(DefaultHttpResponse).x3v = function () {
    return this.f4t_1;
  };
  protoOf(DefaultHttpResponse).y3v = function () {
    return this.g4t_1;
  };
  protoOf(DefaultHttpResponse).u3v = function () {
    return this.h4t_1;
  };
  protoOf(DefaultHttpResponse).w34 = function () {
    return this.i4t_1;
  };
  function HttpResponse() {
  }
  protoOf(HttpResponse).toString = function () {
    return 'HttpResponse[' + get_request(this).c3w().toString() + ', ' + this.v3v().toString() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.t3v().o3v();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $completion) {
    fallbackCharset = fallbackCharset === VOID ? Charsets_getInstance().n2o_1 : fallbackCharset;
    var tmp = new $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function $bodyAsTextCOROUTINE$(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r4t_1 = _this__u8e3s4;
    this.s4t_1 = fallbackCharset;
  }
  protoOf($bodyAsTextCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            var tmp0_elvis_lhs = charset_0(this.r4t_1);
            var originCharset = tmp0_elvis_lhs == null ? this.s4t_1 : tmp0_elvis_lhs;
            this.t4t_1 = originCharset.e2p();
            var this_0 = this.r4t_1;
            this.i8_1 = 1;
            var tmp_0 = this_0.t3v();
            var tmp_1 = getKClass(Source);
            var tmp_2 = !(null == null) ? isInterface(null, Source) : false;
            var tmp_3;
            try {
              tmp_3 = createKType(getKClass(Source), arrayOf([]), false);
            } catch ($p) {
              var tmp_4;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_4 = null;
              } else {
                throw $p;
              }
              tmp_3 = tmp_4;
            }

            suspendResult = tmp_0.s3v(new TypeInfo(tmp_1, tmp_2, tmp_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = (!(suspendResult == null) ? isInterface(suspendResult, Source) : false) ? suspendResult : THROW_CCE();
            return decode(this.t4t_1, input);
          case 2:
            throw this.l8_1;
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.j8_1 === 2) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function Phases_1() {
    Phases_instance_1 = this;
    this.y3u_1 = new PipelinePhase('Receive');
    this.z3u_1 = new PipelinePhase('Parse');
    this.a3v_1 = new PipelinePhase('Transform');
    this.b3v_1 = new PipelinePhase('State');
    this.c3v_1 = new PipelinePhase('After');
  }
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_1().y3u_1, Phases_getInstance_1().z3u_1, Phases_getInstance_1().a3v_1, Phases_getInstance_1().b3v_1, Phases_getInstance_1().c3v_1]);
    this.b4u_1 = developmentMode;
  }
  protoOf(HttpResponsePipeline).h2v = function () {
    return this.b4u_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.w41_1 = new PipelinePhase('Before');
    this.x41_1 = new PipelinePhase('State');
    this.y41_1 = new PipelinePhase('After');
  }
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    developmentMode = developmentMode === VOID ? true : developmentMode;
    Pipeline.call(this, [Phases_getInstance_2().w41_1, Phases_getInstance_2().x41_1, Phases_getInstance_2().y41_1]);
    this.j4u_1 = developmentMode;
  }
  protoOf(HttpReceivePipeline).h2v = function () {
    return this.j4u_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.w3w_1 = expectedType;
    this.x3w_1 = response;
  }
  protoOf(HttpResponseContainer).oe = function () {
    return this.w3w_1;
  };
  protoOf(HttpResponseContainer).pe = function () {
    return this.x3w_1;
  };
  protoOf(HttpResponseContainer).toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.w3w_1.toString() + ', response=' + toString(this.x3w_1) + ')';
  };
  protoOf(HttpResponseContainer).hashCode = function () {
    var result = this.w3w_1.hashCode();
    result = imul(result, 31) + hashCode(this.x3w_1) | 0;
    return result;
  };
  protoOf(HttpResponseContainer).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    if (!this.w3w_1.equals(other.w3w_1))
      return false;
    if (!equals(this.x3w_1, other.x3w_1))
      return false;
    return true;
  };
  function $fetchResponseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s4u_1 = _this__u8e3s4;
  }
  protoOf($fetchResponseCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 7;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 6;
            var builder = (new HttpRequestBuilder()).u3z(this.s4u_1.w4u_1);
            this.i8_1 = 2;
            suspendResult = this.s4u_1.x4u_1.d3v(builder, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.v4u_1 = suspendResult;
            this.i8_1 = 3;
            suspendResult = save(this.v4u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.u4u_1 = suspendResult.a3t();
            this.i8_1 = 4;
            suspendResult = this.s4u_1.y4u(this.v4u_1.a3t(), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_0 = this;
            return this.u4u_1;
          case 5:
            return this.t4u_1;
          case 6:
            this.j8_1 = 7;
            var tmp_1 = this.l8_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.l8_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.l8_1;
            }

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
  function HttpStatement(builder, client) {
    this.w4u_1 = builder;
    this.x4u_1 = client;
  }
  protoOf(HttpStatement).z4u = function ($completion) {
    return this.a4v($completion);
  };
  protoOf(HttpStatement).a4v = function ($completion) {
    var tmp = new $fetchResponseCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(HttpStatement).y4u = function (_this__u8e3s4, cause, $completion) {
    var tmp = get_job(_this__u8e3s4.g1r());
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    // Inline function 'kotlin.runCatching' call
    var tmp_0;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = engineContentForCleanup(_this__u8e3s4);
      tmp_0 = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    // Inline function 'kotlin.Result.getOrNull' call
    var this_0 = tmp_0;
    var content = _Result___get_isFailure__impl__jpiriv(this_0) ? null : _Result___get_value__impl__bjfvqg(this_0);
    if (cause == null) {
      var contentIsClosedForRead = (content == null ? null : content.r2e()) === true;
      var contentCloseCause = content == null ? null : content.c2d();
      if (contentIsClosedForRead && contentCloseCause == null) {
        job.i1y();
      } else {
        // Inline function 'io.ktor.client.statement.toCancellationException' call
        var message = 'Response body was abandoned';
        var tmp0_elvis_lhs = contentCloseCause instanceof CancellationException ? contentCloseCause : null;
        var tmp$ret$5 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$(message, contentCloseCause) : tmp0_elvis_lhs;
        job.p1s(tmp$ret$5);
      }
    } else {
      // Inline function 'io.ktor.client.statement.toCancellationException' call
      var message_0 = 'Exception occurred during request execution';
      var tmp0_elvis_lhs_0 = cause instanceof CancellationException ? cause : null;
      var tmp$ret$6 = tmp0_elvis_lhs_0 == null ? CancellationException_init_$Create$(message_0, cause) : tmp0_elvis_lhs_0;
      job.p1s(tmp$ret$6);
    }
    // Inline function 'kotlin.runCatching' call
    var tmp_2;
    try {
      var tmp_3;
      if (content == null) {
        tmp_3 = null;
      } else {
        cancel_1(content);
        tmp_3 = Unit_instance;
      }
      // Inline function 'kotlin.Companion.success' call
      var value_0 = tmp_3;
      tmp_2 = _Result___init__impl__xyqfz8(value_0);
    } catch ($p_0) {
      var tmp_4;
      if ($p_0 instanceof Error) {
        var e_0 = $p_0;
        // Inline function 'kotlin.Companion.failure' call
        tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
      } else {
        throw $p_0;
      }
      tmp_2 = tmp_4;
    }
    return job.m1s($completion);
  };
  protoOf(HttpStatement).toString = function () {
    return 'HttpStatement[' + this.w4u_1.a3u_1.toString() + ']';
  };
  function engineContentForCleanup(_this__u8e3s4) {
    if (get_isSaved(_this__u8e3s4))
      return Companion_getInstance().t2g_1;
    var origin = resolveOrigin(_this__u8e3s4);
    var tmp;
    if (origin instanceof DefaultHttpResponse) {
      tmp = origin.h4t_1;
    } else {
      if (origin instanceof SavedHttpResponse) {
        tmp = Companion_getInstance().t2g_1;
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_instance;
    return writer(tmp, context, true, observable$slambda_0(_this__u8e3s4, listener, contentLength, null)).p2g_1;
  }
  function observable$slambda($this_observable, $listener, $contentLength, resultContinuation) {
    this.j4v_1 = $this_observable;
    this.k4v_1 = $listener;
    this.l4v_1 = $contentLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(observable$slambda).m3h = function ($this$writer, $completion) {
    var tmp = this.n3h($this$writer, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(observable$slambda).e9 = function (p1, $completion) {
    return this.m3h(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(observable$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 16;
            this.s4v_1 = get_ByteArrayPool();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.o4v_1 = this.s4v_1;
            this.n4v_1 = this.o4v_1.b2p();
            this.i8_1 = 2;
            continue $sm;
          case 2:
            this.i8_1 = 3;
            continue $sm;
          case 3:
            this.j8_1 = 15;
            this.r4v_1 = this.n4v_1;
            this.p4v_1 = 0n;
            this.i8_1 = 4;
            continue $sm;
          case 4:
            if (!!this.j4v_1.r2e()) {
              this.i8_1 = 9;
              continue $sm;
            }

            this.i8_1 = 5;
            suspendResult = readAvailable(this.j4v_1, this.r4v_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.q4v_1 = suspendResult;
            if (this.q4v_1 <= 0) {
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 6;
              continue $sm;
            }

          case 6:
            this.i8_1 = 7;
            suspendResult = writeFully_0(this.m4v_1.k2m_1, this.r4v_1, 0, this.q4v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var tmp_0 = this;
            var tmp0 = this.p4v_1;
            var other = this.q4v_1;
            tmp_0.p4v_1 = add(tmp0, fromInt(other));
            this.i8_1 = 8;
            suspendResult = this.k4v_1.a3y(this.p4v_1, this.l4v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.i8_1 = 4;
            continue $sm;
          case 9:
            var closedCause = this.j4v_1.c2d();
            close(this.m4v_1.k2m_1, closedCause);
            if (closedCause == null && this.p4v_1 === 0n) {
              this.i8_1 = 10;
              suspendResult = this.k4v_1.a3y(this.p4v_1, this.l4v_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 11;
              continue $sm;
            }

          case 10:
            this.i8_1 = 11;
            continue $sm;
          case 11:
            this.j8_1 = 16;
            this.i8_1 = 12;
            var tmp_1 = this;
            continue $sm;
          case 12:
            this.j8_1 = 16;
            this.o4v_1.c2p(this.n4v_1);
            this.i8_1 = 14;
            continue $sm;
          case 13:
            this.j8_1 = 16;
            this.o4v_1.c2p(this.n4v_1);
            if (false) {
              this.i8_1 = 1;
              continue $sm;
            }

            this.i8_1 = 14;
            continue $sm;
          case 14:
            return Unit_instance;
          case 15:
            this.j8_1 = 16;
            var t = this.l8_1;
            this.o4v_1.c2p(this.n4v_1);
            throw t;
          case 16:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 16) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(observable$slambda).n3h = function ($this$writer, completion) {
    var i = new observable$slambda(this.j4v_1, this.k4v_1, this.l4v_1, completion);
    i.m4v_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($this_observable, $listener, $contentLength, resultContinuation) {
    var i = new observable$slambda($this_observable, $listener, $contentLength, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.m3h($this$writer, $completion);
    }, 1);
  }
  function get_HttpRequestCreated() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    _init_properties_ClientEvents_kt__xuvbz8();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.t4v_1 = response;
    this.u4v_1 = cause;
  }
  var properties_initialized_ClientEvents_kt_rdee4m;
  function _init_properties_ClientEvents_kt__xuvbz8() {
    if (!properties_initialized_ClientEvents_kt_rdee4m) {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.w4v_1 = 0n;
  }
  protoOf(EmptyContent).l3a = function () {
    return this.w4v_1;
  };
  protoOf(EmptyContent).toString = function () {
    return 'EmptyContent';
  };
  protoOf(EmptyContent).hashCode = function () {
    return 1450860306;
  };
  protoOf(EmptyContent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmptyContent))
      return false;
    return true;
  };
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function get_DecompressionListAttribute() {
    _init_properties_HeadersUtils_kt__fb6dxx();
    return DecompressionListAttribute;
  }
  var DecompressionListAttribute;
  function dropCompressionHeaders(_this__u8e3s4, method, attributes, alwaysRemove) {
    alwaysRemove = alwaysRemove === VOID ? false : alwaysRemove;
    _init_properties_HeadersUtils_kt__fb6dxx();
    if (method.equals(Companion_getInstance_2().c35_1) || method.equals(Companion_getInstance_2().d35_1))
      return Unit_instance;
    var header = _this__u8e3s4.i1b('Content-Encoding');
    if (header == null) {
      if (!alwaysRemove)
        return Unit_instance;
    } else {
      var tmp = get_DecompressionListAttribute();
      attributes.v2p(tmp, dropCompressionHeaders$lambda).c1(header);
    }
    _this__u8e3s4.f2s('Content-Encoding');
    _this__u8e3s4.f2s('Content-Length');
  }
  function dropCompressionHeaders$lambda() {
    _init_properties_HeadersUtils_kt__fb6dxx();
    // Inline function 'kotlin.collections.mutableListOf' call
    return ArrayList_init_$Create$();
  }
  var properties_initialized_HeadersUtils_kt_8c3zal;
  function _init_properties_HeadersUtils_kt__fb6dxx() {
    if (!properties_initialized_HeadersUtils_kt_8c3zal) {
      properties_initialized_HeadersUtils_kt_8c3zal = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'DecompressionListAttribute';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtMutableList);
      var tmp_0 = !(null == null) ? isInterface(null, KtMutableList) : false;
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_1;
      try {
        tmp_1 = createKType(getKClass(KtMutableList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().pb(), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_2 = null;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      var tmp$ret$2 = tmp_1;
      var tmp$ret$1 = new TypeInfo(tmp, tmp_0, tmp$ret$2);
      DecompressionListAttribute = new AttributeKey(name, tmp$ret$1);
    }
  }
  function buildHeaders(block) {
    var tmp;
    if (block === VOID) {
      tmp = buildHeaders$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    // Inline function 'kotlin.apply' call
    var this_0 = new HeadersBuilder();
    block(this_0);
    return this_0.p30();
  }
  function buildHeaders$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'FetchOptions';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp_0 = getKClass(FetchOptions);
    var tmp_1 = null instanceof FetchOptions;
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_2;
    try {
      tmp_2 = createKType(getKClass(FetchOptions), arrayOf([]), false);
    } catch ($p) {
      var tmp_3;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_3 = null;
      } else {
        throw $p;
      }
      tmp_2 = tmp_3;
    }
    var tmp$ret$2 = tmp_2;
    var tmp$ret$1 = new TypeInfo(tmp_0, tmp_1, tmp$ret$2);
    tmp.x4v_1 = new AttributeKey(name, tmp$ret$1);
  }
  var Companion_instance_4;
  function Companion_getInstance_13() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FetchOptions(requestInit) {
    Companion_getInstance_13();
    this.y4v_1 = requestInit;
  }
  function get_initHook() {
    return initHook;
  }
  var initHook;
  function Js() {
  }
  protoOf(Js).z4v = function (block) {
    // Inline function 'kotlin.apply' call
    var this_0 = new JsClientEngineConfig();
    block(this_0);
    return new JsClientEngine(this_0);
  };
  protoOf(Js).e3v = function (block) {
    return this.z4v(block);
  };
  protoOf(Js).toString = function () {
    return 'Js';
  };
  protoOf(Js).hashCode = function () {
    return -527824213;
  };
  protoOf(Js).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Js))
      return false;
    return true;
  };
  var Js_instance;
  function Js_getInstance() {
    return Js_instance;
  }
  function JsClientEngineConfig$requestInit$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngineConfig() {
    HttpClientEngineConfig.call(this);
    var tmp = this;
    tmp.e4w_1 = JsClientEngineConfig$requestInit$lambda;
    var tmp_0 = this;
    tmp_0.f4w_1 = fetch$ref();
    this.g4w_1 = Object.create(null);
  }
  function initHook$init$() {
    engines_getInstance().i4w(Js_instance);
    return Unit_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers, $completion) {
    var tmp = new $createWebSocketCOROUTINE$($this, urlString_capturingHack, headers, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function executeWebSocketRequest($this, request, callContext, $completion) {
    var tmp = new $executeWebSocketRequestCOROUTINE$($this, request, callContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function JsClientEngine$execute$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString(values, ',');
      return Unit_instance;
    };
  }
  function $executeCOROUTINE$_1(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v4x_1 = _this__u8e3s4;
    this.w4x_1 = data;
  }
  protoOf($executeCOROUTINE$_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.i8_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x4x_1 = suspendResult;
            this.z4x_1 = this.w4x_1.e3z_1.p2p(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.w4x_1)) {
              this.i8_1 = 5;
              suspendResult = executeWebSocketRequest(this.v4x_1, this.w4x_1, this.x4x_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 2;
              continue $sm;
            }

          case 2:
            this.y4x_1 = GMTDate();
            this.i8_1 = 3;
            suspendResult = ktor_toRaw(this.w4x_1, this.z4x_1, this.x4x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var rawRequest = suspendResult;
            var tmp0_safe_receiver = this.w4x_1.e3z_1.q2p(Companion_getInstance_13().x4v_1);
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y4v_1;
            var tmp_0;
            if (tmp1_elvis_lhs == null) {
              tmp_0 = JsClientEngine$execute$lambda;
            } else {
              tmp_0 = tmp1_elvis_lhs;
            }

            var fetchOptions = tmp_0;
            this.i8_1 = 4;
            suspendResult = commonFetch(this.w4x_1.z3y_1.toString(), rawRequest, fetchOptions, this.v4x_1.f4y_1, get_job(this.x4x_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers, this.w4x_1.a3z_1, this.w4x_1.e3z_1);
            var version = Companion_getInstance_6().k35_1;
            var body = readBody(CoroutineScope_0(this.x4x_1), rawResponse);
            var tmp2_safe_receiver = this.w4x_1.e3z_1.q2p(get_ResponseAdapterAttributeKey());
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.d4q(this.w4x_1, status, headers, body, this.w4x_1.c3z_1, this.x4x_1);
            var responseBody = tmp3_elvis_lhs == null ? body : tmp3_elvis_lhs;
            return new HttpResponseData(status, this.y4x_1, headers, version, responseBody, this.x4x_1);
          case 5:
            return suspendResult;
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
  function $createWebSocketCOROUTINE$(_this__u8e3s4, urlString_capturingHack, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r4w_1 = _this__u8e3s4;
    this.s4w_1 = urlString_capturingHack;
    this.t4w_1 = headers;
  }
  protoOf($createWebSocketCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0 = this.t4w_1.z2r();
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.t();
            while (_iterator__ex2g4s.u()) {
              var element = _iterator__ex2g4s.v();
              if (equals_0(element, 'Sec-WebSocket-Protocol', true)) {
                destination.c1(element);
              }
            }

            var protocolHeaderNames = destination;
            var tmp_0 = this;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_0 = protocolHeaderNames.t();
            while (_iterator__ex2g4s_0.u()) {
              var element_0 = _iterator__ex2g4s_0.v();
              var tmp0_safe_receiver = this.t4w_1.y2r(element_0);
              if (tmp0_safe_receiver == null)
                null;
              else {
                destination_0.c1(tmp0_safe_receiver);
              }
            }

            var this_0 = flatten(destination_0);
            tmp_0.v4w_1 = copyToArray(this_0);
            if (PlatformUtils_getInstance().k2r_1) {
              this.u4w_1 = new WebSocket(this.s4w_1, this.v4w_1);
              this.i8_1 = 2;
              continue $sm;
            } else {
              var ws_import = import('ws');
              this.i8_1 = 1;
              suspendResult = await_0(ws_import, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var ws_capturingHack = suspendResult.default;
            var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
            this.t4w_1.e2s(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
            this.u4w_1 = new ws_capturingHack(this.s4w_1, this.v4w_1, {headers: headers_capturingHack});
            this.i8_1 = 2;
            continue $sm;
          case 2:
            return this.u4w_1;
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
  function $executeWebSocketRequestCOROUTINE$(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e4x_1 = _this__u8e3s4;
    this.f4x_1 = request;
    this.g4x_1 = callContext;
  }
  protoOf($executeWebSocketRequestCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.i4x_1 = GMTDate();
            this.l4x_1 = this.f4x_1.z3y_1.toString();
            this.m4x_1 = this.f4x_1.e3z_1.p2p(get_WEBSOCKETS_KEY());
            this.i8_1 = 1;
            suspendResult = createWebSocket(this.e4x_1, this.l4x_1, this.f4x_1.b3z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j4x_1 = suspendResult;
            this.h4x_1 = new JsWebSocketSession(this.g4x_1, this.j4x_1, this.m4x_1.k4p_1);
            this.j8_1 = 3;
            this.i8_1 = 2;
            suspendResult = awaitConnection(this.j4x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.k4x_1 = suspendResult;
            this.j8_1 = 5;
            this.i8_1 = 4;
            continue $sm;
          case 3:
            this.j8_1 = 5;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              var tmp_1 = this;
              cancel_3(this.g4x_1, CancellationException_0('Failed to connect to ' + this.l4x_1, cause));
              throw cause;
            } else {
              throw this.l8_1;
            }

          case 4:
            this.j8_1 = 5;
            var this_0 = this.j4x_1.protocol;
            var tmp_2;
            if (charSequenceLength(this_0) > 0) {
              tmp_2 = this_0;
            } else {
              tmp_2 = null;
            }

            var protocol = tmp_2;
            var headers = !(protocol == null) ? headersOf('Sec-WebSocket-Protocol', protocol) : Companion_getInstance_5().r34_1;
            return new HttpResponseData(Companion_getInstance_1().s35_1, this.i4x_1, headers, Companion_getInstance_6().k35_1, this.h4x_1, this.g4x_1);
          case 5:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 5) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.f4y_1 = config;
    this.g4y_1 = setOf_0([HttpTimeoutCapability_instance, WebSocketCapability_instance, SSECapability_instance]);
    // Inline function 'kotlin.check' call
    if (!(this.f4y_1.m40_1 == null)) {
      var message = 'Proxy unsupported in Js engine.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(JsClientEngine).g3u = function () {
    return this.f4y_1;
  };
  protoOf(JsClientEngine).g3z = function () {
    return this.g4y_1;
  };
  protoOf(JsClientEngine).i40 = function (data, $completion) {
    var tmp = new $executeCOROUTINE$_1(this, data, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  function mapToKtor(_this__u8e3s4, method, attributes) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4, method, attributes));
  }
  function awaitConnection(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.f1w();
    $l$block: {
      if (cancellable.c1s()) {
        break $l$block;
      }
      // Inline function 'io.ktor.client.utils.addEventListener' call
      var events = ['error'];
      var events_0 = listOf_0(arrayConcat([['open'], events]));
      var callback = {_v: null};
      var tmp = awaitConnection$lambda(events_0, _this__u8e3s4, callback);
      var disposable = new sam$kotlinx_coroutines_DisposableHandle$0(tmp);
      callback._v = awaitConnection$lambda_0(true, disposable, cancellable, _this__u8e3s4);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = events_0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp_0;
        if (callback._v == null) {
          throwUninitializedPropertyAccessException('callback');
        } else {
          tmp_0 = callback._v;
        }
        _this__u8e3s4.addEventListener(element, tmp_0);
      }
      var disposable_0 = disposable;
      cancellable.r1u(awaitConnection$lambda_1(disposable_0, _this__u8e3s4));
    }
    return cancellable.l1t();
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.h4y_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).c1v = function () {
    return this.h4y_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).d3 = function () {
    return this.h4y_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.d3(), other.d3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).hashCode = function () {
    return hashCode(this.d3());
  };
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.c2s(key, value);
      return Unit_instance;
    };
  }
  function mapToKtor$lambda($this_mapToKtor, $method, $attributes) {
    return function ($this$buildHeaders) {
      // Inline function 'kotlin.js.asDynamic' call
      $this_mapToKtor.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      dropCompressionHeaders($this$buildHeaders, $method, $attributes, PlatformUtils_getInstance().k2r_1);
      return Unit_instance;
    };
  }
  function awaitConnection$lambda($events, $this, $callback) {
    return function () {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $events.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var tmp;
        if ($callback._v == null) {
          throwUninitializedPropertyAccessException('callback');
        } else {
          tmp = $callback._v;
        }
        $this.removeEventListener(element, tmp);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_0($once, $disposable, $continuation, $this_awaitConnection) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      if ($once) {
        $disposable.c1v();
      }
      var tmp0_subject = event.type;
      if (tmp0_subject === 'open') {
        var tmp0 = $continuation;
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var value = $this_awaitConnection;
        var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
        tmp0.t8(tmp$ret$5);
      } else if (tmp0_subject === 'error') {
        var tmp0_0 = $continuation;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = WebSocketException_init_$Create$(asString(event));
        var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception));
        tmp0_0.t8(tmp$ret$7);
      }
      return Unit_instance;
    };
  }
  function awaitConnection$lambda_1($disposable, $this_awaitConnection) {
    return function (cause) {
      $disposable.c1v();
      var tmp;
      if (!(cause == null)) {
        $this_awaitConnection.close();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function asByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().t2g_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer(_this__u8e3s4, VOID, VOID, channelFromStream$slambda_0(stream, null)).p2g_1;
  }
  function readChunk(_this__u8e3s4, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(safe));
    tmp_0.catch(readChunk$lambda_0(safe));
    return safe.a9();
  }
  function channelFromStream$slambda$lambda(it) {
    return Unit_instance;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.q4y_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(channelFromStream$slambda).m3h = function ($this$writer, $completion) {
    var tmp = this.n3h($this$writer, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(channelFromStream$slambda).e9 = function (p1, $completion) {
    return this.m3h(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(channelFromStream$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 9;
            this.t4y_1 = this.q4y_1.getReader();
            this.j8_1 = 7;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.i8_1 = 6;
              continue $sm;
            }

            this.i8_1 = 2;
            suspendResult = readChunk(this.t4y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            if (tmp0_elvis_lhs == null) {
              this.i8_1 = 6;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.u4y_1 = tmp0_elvis_lhs;
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            var chunk = this.u4y_1;
            this.i8_1 = 4;
            suspendResult = writeFully_0(this.r4y_1.k2m_1, asByteArray(chunk), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.i8_1 = 5;
            suspendResult = this.r4y_1.k2m_1.m2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.i8_1 = 1;
            continue $sm;
          case 6:
            this.j8_1 = 9;
            this.i8_1 = 10;
            continue $sm;
          case 7:
            this.j8_1 = 9;
            var tmp_1 = this.l8_1;
            if (tmp_1 instanceof Error) {
              this.s4y_1 = this.l8_1;
              this.i8_1 = 8;
              var tmp_2 = this.t4y_1.cancel(this.s4y_1);
              suspendResult = await_0(tmp_2.catch(channelFromStream$slambda$lambda), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 8:
            throw this.s4y_1;
          case 9:
            throw this.l8_1;
          case 10:
            this.j8_1 = 9;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 9) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  protoOf(channelFromStream$slambda).n3h = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.q4y_1, completion);
    i.r4y_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.m3h($this$writer, $completion);
    }, 1);
  }
  function readChunk$lambda($continuation) {
    return function (it) {
      var chunk = it.value;
      var result = it.done ? null : chunk;
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(result);
      this_0.t8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function readChunk$lambda_0($continuation) {
    return function (cause) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
      this_0.t8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch(input, init, requestConfig, config, callJob, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.f1w();
    var controller = AbortController_0();
    init.signal = controller.signal;
    config.e4w_1(init);
    requestConfig(init);
    callJob.k1s(true, VOID, commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().k2r_1) {
      tmp = config.f4w_1(input, init);
    } else {
      var options = Object.assign(Object.create(null), init, config.g4w_1);
      tmp = config.f4w_1(input, options);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    return cancellable.l1t();
  }
  function readBody(_this__u8e3s4, response) {
    return readBodyBrowser(_this__u8e3s4, response);
  }
  function AbortController_0() {
    return new AbortController();
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_instance;
    };
  }
  function commonFetch$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(it);
      this_0.t8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function commonFetch$lambda_1($continuation) {
    return function (it) {
      var tmp0 = $continuation;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = Error_init_$Create$('Fail to fetch', it);
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.t8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function fetch$ref() {
    return constructCallableReference(function (p0, p1) {
      return fetch(p0, p1);
    }, 2, 0, 31, 'fetch');
  }
  function isReservedStatusCode($this, $receiver) {
    // Inline function 'kotlin.let' call
    var resolved = Companion_getInstance_7().c3j($receiver);
    return resolved == null || equals(resolved, Codes_CLOSED_ABNORMALLY_getInstance());
  }
  function sam$kotlinx_coroutines_DisposableHandle$0_0(function_0) {
    this.v4y_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).c1v = function () {
    return this.v4y_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).d3 = function () {
    return this.v4y_1;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DisposableHandle) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.d3(), other.d3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0_0).hashCode = function () {
    return hashCode(this.d3());
  };
  function JsWebSocketSession$lambda(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = new Int8Array(data);
        tmp = Binary_init_$Create$(true, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.y4y_1.h1y(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.z4y_1.k28(frame);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_0($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cause = WebSocketException_init_$Create$(asString(event));
      this$0.y4y_1.h1y(cause);
      this$0.z4y_1.o28(cause);
      this$0.a4z_1.s28();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_2($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_3(this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var reason = new CloseReason(event.code, event.reason);
      this$0.y4y_1.g1y(reason);
      this$0.z4y_1.k28(Close_init_$Create$(reason));
      this$0.z4y_1.q28();
      this$0.a4z_1.s28();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_4($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda$lambda($cause, this$0) {
    return function (event) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      if ($cause == null) {
        this$0.x4y_1.close();
      } else {
        this$0.x4y_1.close(Codes_NORMAL_getInstance().z3i_1, 'Client failed');
      }
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda$lambda_0($this, $event, $callback) {
    return function () {
      $this.removeEventListener($event, $callback);
      return Unit_instance;
    };
  }
  function JsWebSocketSession$lambda_5(this$0, $onMessage, $onError) {
    return function (cause) {
      var tmp0 = this$0;
      $l$block: {
        // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.runWhenOpen' call
        if (tmp0.x4y_1.readyState === WebSocket.OPEN) {
          if (cause == null) {
            this$0.x4y_1.close();
          } else {
            this$0.x4y_1.close(Codes_NORMAL_getInstance().z3i_1, 'Client failed');
          }
          break $l$block;
        }
        // Inline function 'io.ktor.client.utils.addEventListener' call
        var this_0 = tmp0.x4y_1;
        var callback = JsWebSocketSession$lambda$lambda(cause, this$0);
        // Inline function 'org.w3c.dom.AddEventListenerOptions' call
        var o = {};
        o['passive'] = false;
        o['once'] = true;
        o['capture'] = false;
        var options = (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
        this_0.addEventListener('open', callback, options);
        var tmp = JsWebSocketSession$lambda$lambda_0(this_0, 'open', callback);
        new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp);
      }
      $onMessage.c1v();
      $onError.c1v();
      return Unit_instance;
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.m4z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsWebSocketSession$slambda).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(JsWebSocketSession$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsWebSocketSession$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 10;
            this.r4z_1 = this.m4z_1.a4z_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.p4z_1 = this.r4z_1;
            this.o4z_1 = null;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            this.i8_1 = 3;
            continue $sm;
          case 3:
            this.j8_1 = 9;
            this.j8_1 = 8;
            this.q4z_1 = this.p4z_1.t();
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.i8_1 = 5;
            suspendResult = this.q4z_1.m26(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.i8_1 = 6;
              continue $sm;
            }

            var e = this.q4z_1.v();
            switch (e.l3j_1.a1_1) {
              case 0:
                var text = e.m3j_1;
                this.m4z_1.x4y_1.send(decodeToString(text, 0, 0 + text.length | 0));
                break;
              case 1:
                var tmp_0 = e.m3j_1;
                var source = tmp_0 instanceof Int8Array ? tmp_0 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.m4z_1.x4y_1.send(frameData);
                break;
              case 2:
                var builder = new Buffer();
                writeFully(builder, e.m3j_1);
                var data = builder;
                var code = data.i1o();
                var reason = readText(data);
                this.m4z_1.y4y_1.g1y(new CloseReason(code, reason));
                if (isReservedStatusCode(this.m4z_1, code)) {
                  this.m4z_1.x4y_1.close();
                } else {
                  this.m4z_1.x4y_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            this.i8_1 = 4;
            continue $sm;
          case 6:
            this.j8_1 = 10;
            this.i8_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            this.j8_1 = 10;
            cancelConsumed(this.p4z_1, this.o4z_1);
            this.i8_1 = 12;
            continue $sm;
          case 8:
            this.j8_1 = 9;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Error) {
              var e_0 = this.l8_1;
              var tmp_3 = this;
              this.o4z_1 = e_0;
              throw e_0;
            } else {
              throw this.l8_1;
            }

          case 9:
            this.j8_1 = 10;
            var t = this.l8_1;
            cancelConsumed(this.p4z_1, this.o4z_1);
            throw t;
          case 10:
            throw this.l8_1;
          case 11:
            this.j8_1 = 10;
            cancelConsumed(this.p4z_1, this.o4z_1);
            if (false) {
              this.i8_1 = 1;
              continue $sm;
            }

            this.i8_1 = 12;
            continue $sm;
          case 12:
            return Unit_instance;
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.j8_1 === 10) {
          throw e_1;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_1;
        }
      }
     while (true);
  };
  protoOf(JsWebSocketSession$slambda).p2n = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.m4z_1, completion);
    i.n4z_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function JsWebSocketSession(coroutineContext, websocket, channelsConfig) {
    this.w4y_1 = coroutineContext;
    this.x4y_1 = websocket;
    this.y4y_1 = CompletableDeferred();
    this.z4y_1 = from(Factory_getInstance(), channelsConfig.y3j_1);
    this.a4z_1 = from(Factory_getInstance(), channelsConfig.z3j_1);
    this.b4z_1 = this.z4y_1;
    this.c4z_1 = this.a4z_1;
    this.d4z_1 = this.y4y_1;
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_0 = this.x4y_1;
    var callback = JsWebSocketSession$lambda(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o = {};
    o['passive'] = false;
    o['once'] = false;
    o['capture'] = false;
    var options = (!(o == null) ? !(o == null) : false) ? o : THROW_CCE();
    this_0.addEventListener('message', callback, options);
    var tmp = JsWebSocketSession$lambda_0(this_0, 'message', callback);
    var onMessage = new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp);
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_1 = this.x4y_1;
    var callback_0 = JsWebSocketSession$lambda_1(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o_0 = {};
    o_0['passive'] = false;
    o_0['once'] = false;
    o_0['capture'] = false;
    var options_0 = (!(o_0 == null) ? !(o_0 == null) : false) ? o_0 : THROW_CCE();
    this_1.addEventListener('error', callback_0, options_0);
    var tmp_0 = JsWebSocketSession$lambda_2(this_1, 'error', callback_0);
    var onError = new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp_0);
    // Inline function 'io.ktor.client.utils.addEventListener' call
    var this_2 = this.x4y_1;
    var callback_1 = JsWebSocketSession$lambda_3(this);
    // Inline function 'org.w3c.dom.AddEventListenerOptions' call
    var o_1 = {};
    o_1['passive'] = false;
    o_1['once'] = true;
    o_1['capture'] = false;
    var options_1 = (!(o_1 == null) ? !(o_1 == null) : false) ? o_1 : THROW_CCE();
    this_2.addEventListener('close', callback_1, options_1);
    var tmp_1 = JsWebSocketSession$lambda_4(this_2, 'close', callback_1);
    new sam$kotlinx_coroutines_DisposableHandle$0_0(tmp_1);
    var tmp0_safe_receiver = this.w4y_1.v8(Key_instance);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i1s(JsWebSocketSession$lambda_5(this, onMessage, onError));
    }
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$9 = 'arraybuffer';
    this.x4y_1.binaryType = tmp$ret$9;
    launch(this, VOID, VOID, JsWebSocketSession$slambda_0(this, null));
    // Inline function 'kotlin.require' call
    if (!!channelsConfig.y3j_1.t3q()) {
      var message = 'Suspendable channels are not supported in JS.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(JsWebSocketSession).g1r = function () {
    return this.w4y_1;
  };
  protoOf(JsWebSocketSession).u3j = function () {
    return this.b4z_1;
  };
  protoOf(JsWebSocketSession).v3j = function () {
    return this.c4z_1;
  };
  protoOf(JsWebSocketSession).s3j = function (_) {
    throw WebSocketException_init_$Create$('Max frame size switch is not supported in Js engine.');
  };
  protoOf(JsWebSocketSession).t3j = function () {
    return 9223372036854775807n;
  };
  protoOf(JsWebSocketSession).r3j = function (negotiatedExtensions) {
    // Inline function 'kotlin.require' call
    if (!negotiatedExtensions.r()) {
      var message = 'Extensions are not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(JsWebSocketSession).m2e = function ($completion) {
    return Unit_instance;
  };
  function ktor_toRaw(_this__u8e3s4, clientConfig, callContext, $completion) {
    var tmp = new $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function asString(_this__u8e3s4) {
    var tmp = JSON;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
    return tmp.stringify(_this__u8e3s4, tmp$ret$0);
  }
  function getBodyBytes(content, callContext, $completion) {
    var tmp = new $getBodyBytesCOROUTINE$(content, callContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function buildObject(block) {
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    return this_0;
  }
  function toRaw$lambda($skipContentLengthHeader, $jsHeaders) {
    return function (key, value) {
      var tmp;
      if ($skipContentLengthHeader && key === 'Content-Length') {
        return Unit_instance;
      }
      $jsHeaders[key] = value;
      return Unit_instance;
    };
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.a3z_1.h35_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.r3u_1) {
        // Inline function 'org.w3c.fetch.FOLLOW' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = 'follow';
      } else {
        // Inline function 'org.w3c.fetch.MANUAL' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        tmp = 'manual';
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
      }
      return Unit_instance;
    };
  }
  function getBodyBytes$slambda($content, resultContinuation) {
    this.x50_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(getBodyBytes$slambda).m3h = function ($this$writer, $completion) {
    var tmp = this.n3h($this$writer, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(getBodyBytes$slambda).e9 = function (p1, $completion) {
    return this.m3h(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(getBodyBytes$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.x50_1.m3c(this.y50_1.k2m_1, this);
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
  protoOf(getBodyBytes$slambda).n3h = function ($this$writer, completion) {
    var i = new getBodyBytes$slambda(this.x50_1, completion);
    i.y50_1 = $this$writer;
    return i;
  };
  function getBodyBytes$slambda_0($content, resultContinuation) {
    var i = new getBodyBytes$slambda($content, resultContinuation);
    return constructCallableReference(function ($this$writer, $completion) {
      return i.m3h($this$writer, $completion);
    }, 1);
  }
  function $toRawCOROUTINE$(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a50_1 = _this__u8e3s4;
    this.b50_1 = clientConfig;
    this.c50_1 = callContext;
  }
  protoOf($toRawCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.d50_1 = {};
            var this_0 = this.a50_1;
            var skipContentLengthHeader = !get_supportsRequestBody(this_0.a3z_1) && isEmpty(this_0.c3z_1);
            mergeHeaders(this_0.b3z_1, this_0.c3z_1, toRaw$lambda(skipContentLengthHeader, this.d50_1));
            this.i8_1 = 1;
            suspendResult = getBodyBytes(this.a50_1.c3z_1, this.c50_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var bodyBytes = suspendResult;
            return buildObject(toRaw$lambda_0(this.a50_1, this.d50_1, this.b50_1, bodyBytes));
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
  function $getBodyBytesCOROUTINE$(content, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m50_1 = content;
    this.n50_1 = callContext;
  }
  protoOf($getBodyBytesCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            var tmp0_subject = this.m50_1;
            if (tmp0_subject instanceof ByteArrayContent) {
              this.o50_1 = this.m50_1.m3a();
              this.i8_1 = 5;
              continue $sm;
            } else {
              if (tmp0_subject instanceof ReadChannelContent) {
                this.i8_1 = 3;
                suspendResult = readBuffer(this.m50_1.k3c(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (tmp0_subject instanceof WriteChannelContent) {
                  this.i8_1 = 2;
                  var tmp_0 = GlobalScope_instance;
                  suspendResult = readBuffer(writer(tmp_0, this.n50_1, VOID, getBodyBytes$slambda_0(this.m50_1, null)).p2g_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject instanceof ContentWrapper) {
                    this.i8_1 = 1;
                    suspendResult = getBodyBytes(this.m50_1.q3c(), this.n50_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp0_subject instanceof NoContent) {
                      this.o50_1 = null;
                      this.i8_1 = 5;
                      continue $sm;
                    } else {
                      if (tmp0_subject instanceof ProtocolUpgrade) {
                        var tmp_1 = this;
                        throw new UnsupportedContentTypeException(this.m50_1);
                      } else {
                        var tmp_2 = this;
                        noWhenBranchMatchedException();
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            this.o50_1 = suspendResult;
            this.i8_1 = 5;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.o50_1 = readByteArray(ARGUMENT);
            this.i8_1 = 5;
            continue $sm;
          case 3:
            var ARGUMENT_0 = suspendResult;
            this.o50_1 = readByteArray(ARGUMENT_0);
            this.i8_1 = 5;
            continue $sm;
          case 4:
            throw this.l8_1;
          case 5:
            return this.o50_1;
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
  function Node(entry, next) {
    this.z50_1 = entry;
    this.a51_1 = next;
  }
  function engines$iterator$1() {
    this.b51_1 = engines_getInstance().h4w_1.kotlinx$atomicfu$value;
  }
  protoOf(engines$iterator$1).v = function () {
    var result = ensureNotNull(this.b51_1);
    this.b51_1 = result.a51_1;
    return result.z50_1.c51_1;
  };
  protoOf(engines$iterator$1).u = function () {
    return !(null == this.b51_1);
  };
  function engines() {
    engines_instance = this;
    this.h4w_1 = atomic$ref$1(null);
  }
  protoOf(engines).i4w = function (item) {
    this.e51(item, 1.0);
  };
  protoOf(engines).e51 = function (item, priority) {
    $l$loop: while (true) {
      var current = this.h4w_1.kotlinx$atomicfu$value;
      var new_0 = new Node(new EngineEntry(item, priority), current);
      if (this.h4w_1.atomicfu$compareAndSet(current, new_0))
        break $l$loop;
    }
  };
  protoOf(engines).t = function () {
    return new engines$iterator$1();
  };
  var engines_instance;
  function engines_getInstance() {
    if (engines_instance == null)
      new engines();
    return engines_instance;
  }
  function EngineEntry(factory, priority) {
    priority = priority === VOID ? 1.0 : priority;
    this.c51_1 = factory;
    this.d51_1 = priority;
    // Inline function 'kotlin.require' call
    if (!!isNaN_0(this.d51_1)) {
      var message = 'Priority cannot be NaN';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function ProxyConfig_init_$Init$($this) {
    // Inline function 'kotlin.error' call
    var message = 'ProxyConfig should accept a url';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function ProxyConfig_init_$Create$() {
    return ProxyConfig_init_$Init$(objectCreate(protoOf(ProxyConfig)));
  }
  function ProxyConfig(url) {
    this.f51_1 = url;
  }
  protoOf(ProxyConfig).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.apply' call
    var this_1 = this.f51_1;
    this_0.q(this_1.a39_1.l38_1);
    this_0.q('://');
    if (!(this_1.s38_1 == null)) {
      this_0.q(encodeURLParameter(ensureNotNull(this_1.s38_1)));
      if (!(this_1.t38_1 == null)) {
        this_0.s(_Char___init__impl__6a9atx(58));
        this_0.q(encodeURLParameter(ensureNotNull(this_1.t38_1)));
      }
      this_0.s(_Char___init__impl__6a9atx(64));
    }
    this_0.q(get_hostWithPort(this_1));
    return this_0.toString();
  };
  function ProxyBuilder() {
  }
  protoOf(ProxyBuilder).g51 = function (url) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!equals_0(url.a39_1.l38_1, Companion_getInstance_8().l39_1.l38_1, true)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new ProxyConfig(url);
  };
  var ProxyBuilder_instance;
  function ProxyBuilder_getInstance() {
    return ProxyBuilder_instance;
  }
  function ConnectTimeoutException() {
  }
  function SocketTimeoutException() {
  }
  function InterruptedIOException() {
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  var useEngineDispatcher;
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (exception instanceof CancellationException) {
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      exception = exception.cause;
    }
    var tmp0_elvis_lhs = exception;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function get_FACTORY() {
    _init_properties_HttpClient_web_kt__pyfqvb();
    return FACTORY;
  }
  var FACTORY;
  function HttpClient_1(block) {
    var tmp;
    if (block === VOID) {
      tmp = HttpClient$lambda_1;
    } else {
      tmp = block;
    }
    block = tmp;
    _init_properties_HttpClient_web_kt__pyfqvb();
    return HttpClient_0(get_FACTORY(), block);
  }
  function HttpClient$lambda_1(_this__u8e3s4) {
    _init_properties_HttpClient_web_kt__pyfqvb();
    return Unit_instance;
  }
  var properties_initialized_HttpClient_web_kt_zbb0cl;
  function _init_properties_HttpClient_web_kt__pyfqvb() {
    if (!properties_initialized_HttpClient_web_kt_zbb0cl) {
      properties_initialized_HttpClient_web_kt_zbb0cl = true;
      var tmp0 = engines_getInstance();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (!equals(element, Js_instance)) {
            tmp$ret$0 = element;
            break $l$block;
          }
        }
        tmp$ret$0 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$0;
      FACTORY = tmp0_elvis_lhs == null ? Js_instance : tmp0_elvis_lhs;
    }
  }
  function checkContentLength(contentLength, bodySize, method) {
  }
  //region block: post-declaration
  defineProp(protoOf(DoubleReceiveException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(NoTransformationFoundException), 'message', function () {
    return this.e();
  });
  protoOf(HttpClientEngineBase).g3z = get_supportedCapabilities;
  protoOf(HttpClientEngineBase).h3u = install;
  defineProp(protoOf(ClientEngineClosedException), 'cause', function () {
    return this.f();
  });
  protoOf(KtorCallContextElement).v8 = get;
  protoOf(KtorCallContextElement).hf = fold;
  protoOf(KtorCallContextElement).gf = minusKey;
  protoOf(KtorCallContextElement).if = plus;
  defineProp(protoOf(RedirectResponseException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ClientRequestException), 'message', function () {
    return this.e();
  });
  defineProp(protoOf(ServerResponseException), 'message', function () {
    return this.e();
  });
  protoOf(HttpRequest$1).g1r = get_coroutineContext;
  protoOf(JsWebSocketSession).w3j = send;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  AfterRenderHook_instance = new AfterRenderHook();
  AfterReceiveHook_instance = new AfterReceiveHook();
  RequestError_instance = new RequestError();
  ReceiveError_instance = new ReceiveError();
  RenderRequestHook_instance = new RenderRequestHook();
  SetupRequestContext_instance = new SetupRequestContext();
  HttpTimeoutCapability_instance = new HttpTimeoutCapability();
  SetupRequest_instance = new SetupRequest();
  Send_instance = new Send();
  RequestHook_instance = new RequestHook();
  TransformResponseBodyHook_instance = new TransformResponseBodyHook();
  SSECapability_instance = new SSECapability();
  WebSocketExtensionsCapability_instance = new WebSocketExtensionsCapability();
  WebSocketCapability_instance = new WebSocketCapability();
  Companion_instance_3 = new Companion_2();
  Js_instance = new Js();
  ProxyBuilder_instance = new ProxyBuilder();
  useEngineDispatcher = true;
  //endregion
  //region block: eager init
  initHook = initHook$init$();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var io = _.io || (_.io = {});
    var ktor = io.ktor || (io.ktor = {});
    var client = ktor.client || (ktor.client = {});
    var engine = client.engine || (client.engine = {});
    var js = engine.js || (engine.js = {});
    defineProp(js, 'initHook', get_initHook, VOID, true);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = ProxyBuilder_instance;
  _.$_$.b = timeout;
  _.$_$.c = FormBuilder;
  _.$_$.d = FormDataContent;
  _.$_$.e = MultiPartFormDataContent;
  _.$_$.f = formData;
  _.$_$.g = HttpRequestBuilder;
  _.$_$.h = headers;
  _.$_$.i = url;
  _.$_$.j = HttpStatement;
  _.$_$.k = HttpClient_1;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core.js.map
