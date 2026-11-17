(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './ktor-ktor-client-core.js', './ktor-ktor-utils.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-utils.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'khttpclient'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'khttpclient'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'khttpclient'.");
    }
    globalThis.khttpclient = factory(typeof khttpclient === 'undefined' ? {} : khttpclient, globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-client-core'], globalThis['ktor-ktor-utils'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var Enum = kotlin_kotlin.$_$.qf;
  var protoOf = kotlin_kotlin.$_$.zb;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var VOID = kotlin_kotlin.$_$.c;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.c1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var split = kotlin_kotlin.$_$.ce;
  var lastOrNull = kotlin_kotlin.$_$.l7;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var Image_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var Video_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var ContentType_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.o;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var CoroutineImpl = kotlin_kotlin.$_$.j9;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.k;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.g;
  var url = kotlin_io_ktor_ktor_client_core.$_$.i;
  var toString = kotlin_kotlin.$_$.cc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.i1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.f2;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.h;
  var timeout = kotlin_io_ktor_ktor_client_core.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j3;
  var ensureNotNull = kotlin_kotlin.$_$.qg;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var contentType = kotlin_io_ktor_ktor_http.$_$.t1;
  var FormBuilder = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.f1;
  var append = kotlin_io_ktor_ktor_http.$_$.m1;
  var copyToArray = kotlin_kotlin.$_$.s6;
  var formData = kotlin_io_ktor_ktor_client_core.$_$.f;
  var MultiPartFormDataContent = kotlin_io_ktor_ktor_client_core.$_$.e;
  var getKClass = kotlin_kotlin.$_$.sc;
  var arrayOf = kotlin_kotlin.$_$.mg;
  var createKType = kotlin_kotlin.$_$.qc;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.l;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.y;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.m;
  var ParametersBuilder = kotlin_io_ktor_ktor_http.$_$.h1;
  var FormDataContent = kotlin_io_ktor_ktor_client_core.$_$.d;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.j;
  var first = kotlin_kotlin.$_$.b7;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.p;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r8;
  var closeFinally = kotlin_kotlin.$_$.ng;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s3;
  var toMap = kotlin_io_ktor_ktor_utils.$_$.d1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s2;
  var isByteArray = kotlin_kotlin.$_$.jb;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.k;
  var decodeToString = kotlin_kotlin.$_$.fd;
  var constructCallableReference = kotlin_kotlin.$_$.ra;
  var lazy = kotlin_kotlin.$_$.wg;
  var KProperty1 = kotlin_kotlin.$_$.xc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xa;
  var isBlank = kotlin_kotlin.$_$.od;
  var ProxyBuilder_instance = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Url = kotlin_io_ktor_ktor_http.$_$.l1;
  var startsWith = kotlin_kotlin.$_$.de;
  var initMetadataForLambda = kotlin_kotlin.$_$.fb;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.d5;
  var RuntimeException_init_$Create$_0 = kotlin_kotlin.$_$.b5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var isInterface = kotlin_kotlin.$_$.pb;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Type, 'Type', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(HttpParameter, 'HttpParameter');
  initMetadataForCoroutine($proceedCOROUTINE$, CoroutineImpl);
  initMetadataForClass(HttpRequest, 'HttpRequest', HttpRequest, VOID, VOID, [0, 1]);
  initMetadataForCoroutine($fromCOROUTINE$, CoroutineImpl);
  initMetadataForCompanion(Companion_0, VOID, VOID, [1]);
  initMetadataForClass(HttpResponse, 'HttpResponse');
  initMetadataForLambda(WebsocketRequest$textListener$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(WebsocketRequest$bytesListener$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(WebsocketRequest$start$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(WebsocketRequest$start$lambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($startCOROUTINE$, CoroutineImpl);
  initMetadataForClass(WebsocketRequest, 'WebsocketRequest', WebsocketRequest, VOID, VOID, [0, 1]);
  //endregion
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    Type_QUERY_instance = new Type('QUERY', 0);
    Type_PARAM_instance = new Type('PARAM', 1);
    Type_FILE_instance = new Type('FILE', 2);
    Type_JSON_instance = new Type('JSON', 3);
  }
  var Type_QUERY_instance;
  var Type_PARAM_instance;
  var Type_FILE_instance;
  var Type_JSON_instance;
  function Type(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion() {
  }
  protoOf(Companion).h51 = function (key, value) {
    return new HttpParameter(Type_QUERY_getInstance(), key, value);
  };
  protoOf(Companion).i51 = function (key, value) {
    return new HttpParameter(Type_PARAM_getInstance(), key, value);
  };
  protoOf(Companion).j51 = function (key, fileName, fileBody) {
    return new HttpParameter(Type_FILE_getInstance(), key, null, fileName, fileBody);
  };
  protoOf(Companion).k51 = function (json) {
    return new HttpParameter(Type_JSON_getInstance(), 'json', null, 'file.json', toByteArray(json));
  };
  var Companion_instance;
  function Companion_getInstance_2() {
    return Companion_instance;
  }
  function Type_QUERY_getInstance() {
    static_init();
    return Type_QUERY_instance;
  }
  function Type_PARAM_getInstance() {
    static_init();
    return Type_PARAM_instance;
  }
  function Type_FILE_getInstance() {
    static_init();
    return Type_FILE_instance;
  }
  function Type_JSON_getInstance() {
    static_init();
    return Type_JSON_instance;
  }
  function HttpParameter(type, key, value, fileName, fileBody) {
    value = value === VOID ? null : value;
    fileName = fileName === VOID ? null : fileName;
    fileBody = fileBody === VOID ? null : fileBody;
    this.l51_1 = type;
    this.m51_1 = key;
    this.n51_1 = value;
    this.o51_1 = fileName;
    this.p51_1 = fileBody;
  }
  protoOf(HttpParameter).q51 = function () {
    var tmp0_safe_receiver = this.o51_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : split(tmp0_safe_receiver, ['.']);
    return tmp1_safe_receiver == null ? null : lastOrNull(tmp1_safe_receiver);
  };
  protoOf(HttpParameter).r51 = function () {
    switch (this.q51()) {
      case 'txt':
        return Text_getInstance().s2z_1;
      case 'html':
        return Text_getInstance().v2z_1;
      case 'css':
        return Text_getInstance().t2z_1;
      case 'csv':
        return Text_getInstance().u2z_1;
      case 'jpg':
      case 'jpeg':
        return Image_getInstance().z2y_1;
      case 'png':
        return Image_getInstance().b2z_1;
      case 'gif':
        return Image_getInstance().w2y_1;
      case 'svg':
        return Image_getInstance().c2z_1;
      case 'mpeg':
        return Video_getInstance().d30_1;
      case 'mp4':
        return Video_getInstance().e30_1;
      case 'mov':
        return Video_getInstance().g30_1;
      case 'webm':
        return ContentType_init_$Create$('video', 'webm');
      case 'json':
        return Application_getInstance().x2x_1;
      case 'xml':
        return Application_getInstance().d2y_1;
      case 'zip':
        return Application_getInstance().g2y_1;
      case 'pdf':
        return Application_getInstance().j2y_1;
    }
    return Application_getInstance().a2y_1;
  };
  function proceed($this, method, $completion) {
    var tmp = new $proceedCOROUTINE$($this, method, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function canSendOnly($this, param) {
    if (param.l51_1.equals(Type_JSON_getInstance()))
      return true;
    var tmp0_subject = param.r51();
    return tmp0_subject.equals(Application_getInstance().x2x_1) ? true : tmp0_subject.equals(Image_getInstance().z2y_1) ? true : tmp0_subject.equals(Image_getInstance().b2z_1) ? true : tmp0_subject.equals(Image_getInstance().w2y_1) ? true : tmp0_subject.equals(Video_getInstance().d30_1) ? true : tmp0_subject.equals(Video_getInstance().e30_1) ? true : tmp0_subject.equals(Video_getInstance().g30_1) ? true : tmp0_subject.equals(ContentType_init_$Create$('video', 'webm')) ? true : false;
  }
  function HttpRequest$proceed$lambda($req) {
    return function ($this$HttpClient) {
      applySystemProxy($this$HttpClient);
      var tmp;
      if ($req.v52_1) {
        applySkipSSLValidation($this$HttpClient);
        tmp = Unit_instance;
      }
      $this$HttpClient.r3u_1 = $req.u52_1;
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_0($req) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $req.r52_1.l1().t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        // Inline function 'kotlin.collections.component1' call
        var k = element.m1();
        // Inline function 'kotlin.collections.component2' call
        var v = element.n1();
        $this$headers.c2s(k, v);
      }
      return Unit_instance;
    };
  }
  function HttpRequest$proceed$lambda_1($req) {
    return function ($this$timeout) {
      $this$timeout.q4j($req.w52_1);
      $this$timeout.r4j($req.x52_1);
      $this$timeout.s4j($req.y52_1);
      return Unit_instance;
    };
  }
  function $proceedCOROUTINE$(_this__u8e3s4, method, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a52_1 = _this__u8e3s4;
    this.b52_1 = method;
  }
  protoOf($proceedCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 9;
            this.h52_1 = this.a52_1;
            var tmp_0 = this;
            tmp_0.i52_1 = HttpClient(HttpRequest$proceed$lambda(this.h52_1));
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.e52_1 = this.i52_1;
            this.d52_1 = null;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            this.i8_1 = 3;
            continue $sm;
          case 3:
            this.j8_1 = 8;
            this.j8_1 = 7;
            var client = this.e52_1;
            var tmp0_safe_receiver = this.a52_1.o52_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.a52_1.r52_1.v2('Accept', tmp0_safe_receiver);
            }

            var tmp1_safe_receiver = this.a52_1.p52_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var tmp0 = this.a52_1.r52_1;
              var key = 'User-Agent';
              tmp0.v2(key, tmp1_safe_receiver);
            }

            this.g52_1 = Companion_getInstance_3();
            var this_0 = new HttpRequestBuilder();
            this_0.b3u_1 = this.b52_1;
            if (!(this.h52_1.n52_1 == null)) {
              var tmp0_0 = this.h52_1.n52_1;
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                if (tmp0_0 == null) {
                  var message = 'Required value was null.';
                  throw IllegalStateException_init_$Create$(toString(message));
                } else {
                  tmp$ret$0 = tmp0_0;
                  break l$ret$1;
                }
              }
               while (false);
              var tmp_1 = tmp$ret$0;
              takeFrom(this_0.a3u_1, URLBuilder(tmp_1));
            } else {
              url(this_0, this.h52_1.j52_1, this.h52_1.k52_1, this.h52_1.m52_1, this.h52_1.l52_1);
            }

            headers(this_0, HttpRequest$proceed$lambda_0(this.h52_1));
            timeout(this_0, HttpRequest$proceed$lambda_1(this.h52_1));
            if (!this.a52_1.s52_1 && !this.a52_1.t52_1 && this.h52_1.q52_1.e1() === 1 && canSendOnly(this.a52_1, first(this.h52_1.q52_1))) {
              var param = first(this.h52_1.q52_1);
              var body = new ByteArrayContent(ensureNotNull(param.p51_1), param.r51());
              if (body == null) {
                this_0.d3u_1 = NullBody_instance;
                var tmp_2 = getKClass(ByteArrayContent);
                var tmp_3 = null instanceof ByteArrayContent;
                var tmp_4;
                try {
                  tmp_4 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_5;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3 = $p;
                    tmp_5 = null;
                  } else {
                    throw $p;
                  }
                  tmp_4 = tmp_5;
                }
                this_0.v3z(new TypeInfo(tmp_2, tmp_3, tmp_4));
              } else {
                if (body instanceof OutgoingContent) {
                  this_0.d3u_1 = body;
                  this_0.v3z(null);
                } else {
                  this_0.d3u_1 = body;
                  var tmp_6 = getKClass(ByteArrayContent);
                  var tmp_7 = null instanceof ByteArrayContent;
                  var tmp_8;
                  try {
                    tmp_8 = createKType(getKClass(ByteArrayContent), arrayOf([]), false);
                  } catch ($p_0) {
                    var tmp_9;
                    if ($p_0 instanceof Error) {
                      var _unused_var__etf5q3_0 = $p_0;
                      tmp_9 = null;
                    } else {
                      throw $p_0;
                    }
                    tmp_8 = tmp_9;
                  }
                  this_0.v3z(new TypeInfo(tmp_6, tmp_7, tmp_8));
                }
              }
            } else {
              if (this.b52_1.equals(Companion_getInstance_1().x34_1)) {
                var _iterator__ex2g4s = this.h52_1.q52_1.t();
                while (_iterator__ex2g4s.u()) {
                  var element = _iterator__ex2g4s.v();
                  if (element.l51_1.a1_1 === 0) {
                    this_0.a3u_1.k38_1.c2s(element.m51_1, ensureNotNull(element.n51_1));
                  } else {
                    throw IllegalStateException_init_$Create$('Request Body is not supported in the GET method.');
                  }
                }
              } else {
                var tmp0_1 = this.h52_1.q52_1;
                var destination = ArrayList_init_$Create$();
                var _iterator__ex2g4s_0 = tmp0_1.t();
                while (_iterator__ex2g4s_0.u()) {
                  var element_0 = _iterator__ex2g4s_0.v();
                  if (element_0.l51_1.equals(Type_QUERY_getInstance())) {
                    destination.c1(element_0);
                  }
                }
                var queries = destination;
                var tmp0_2 = this.h52_1.q52_1;
                var destination_0 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_1 = tmp0_2.t();
                while (_iterator__ex2g4s_1.u()) {
                  var element_1 = _iterator__ex2g4s_1.v();
                  if (element_1.l51_1.equals(Type_PARAM_getInstance())) {
                    destination_0.c1(element_1);
                  }
                }
                var params = destination_0;
                var tmp0_3 = this.h52_1.q52_1;
                var destination_1 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_2 = tmp0_3.t();
                while (_iterator__ex2g4s_2.u()) {
                  var element_2 = _iterator__ex2g4s_2.v();
                  if (element_2.l51_1.equals(Type_FILE_getInstance())) {
                    destination_1.c1(element_2);
                  }
                }
                var files = destination_1;
                if (!queries.r()) {
                  var _iterator__ex2g4s_3 = queries.t();
                  while (_iterator__ex2g4s_3.u()) {
                    var element_3 = _iterator__ex2g4s_3.v();
                    this_0.a3u_1.k38_1.c2s(element_3.m51_1, ensureNotNull(element_3.n51_1));
                  }
                }
                var tmp_10;
                if (!params.r()) {
                  tmp_10 = true;
                } else {
                  tmp_10 = !files.r();
                }
                if (tmp_10) {
                  if (this.a52_1.t52_1) {
                    if (!files.r()) {
                      throw IllegalStateException_init_$Create$('ApplicationFormUrlEncoded cannot send files.');
                    }
                    contentType(this_0, Application_getInstance().i2y_1);
                    Companion_getInstance_0();
                    var this_1 = ParametersBuilder();
                    var _iterator__ex2g4s_4 = params.t();
                    while (_iterator__ex2g4s_4.u()) {
                      var element_4 = _iterator__ex2g4s_4.v();
                      this_1.c2s(element_4.m51_1, ensureNotNull(element_4.n51_1));
                    }
                    var body_0 = new FormDataContent(this_1.p30());
                    if (body_0 == null) {
                      this_0.d3u_1 = NullBody_instance;
                      var tmp_11 = getKClass(FormDataContent);
                      var tmp_12 = null instanceof FormDataContent;
                      var tmp_13;
                      try {
                        tmp_13 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                      } catch ($p_1) {
                        var tmp_14;
                        if ($p_1 instanceof Error) {
                          var _unused_var__etf5q3_1 = $p_1;
                          tmp_14 = null;
                        } else {
                          throw $p_1;
                        }
                        tmp_13 = tmp_14;
                      }
                      this_0.v3z(new TypeInfo(tmp_11, tmp_12, tmp_13));
                    } else {
                      if (body_0 instanceof OutgoingContent) {
                        this_0.d3u_1 = body_0;
                        this_0.v3z(null);
                      } else {
                        this_0.d3u_1 = body_0;
                        var tmp_15 = getKClass(FormDataContent);
                        var tmp_16 = null instanceof FormDataContent;
                        var tmp_17;
                        try {
                          tmp_17 = createKType(getKClass(FormDataContent), arrayOf([]), false);
                        } catch ($p_2) {
                          var tmp_18;
                          if ($p_2 instanceof Error) {
                            var _unused_var__etf5q3_2 = $p_2;
                            tmp_18 = null;
                          } else {
                            throw $p_2;
                          }
                          tmp_17 = tmp_18;
                        }
                        this_0.v3z(new TypeInfo(tmp_15, tmp_16, tmp_17));
                      }
                    }
                  } else {
                    contentType(this_0, MultiPart_getInstance().l2z_1);
                    var this_2 = new FormBuilder();
                    var _iterator__ex2g4s_5 = params.t();
                    while (_iterator__ex2g4s_5.u()) {
                      var element_5 = _iterator__ex2g4s_5.v();
                      this_2.q4s(element_5.m51_1, ensureNotNull(element_5.n51_1));
                    }
                    var _iterator__ex2g4s_6 = files.t();
                    while (_iterator__ex2g4s_6.u()) {
                      var element_6 = _iterator__ex2g4s_6.v();
                      var tmp_19 = ensureNotNull(element_6.p51_1);
                      Companion_getInstance();
                      var this_3 = new HeadersBuilder();
                      append(this_3, 'Content-Type', element_6.r51());
                      this_3.c2s('Content-Disposition', 'filename=' + element_6.o51_1);
                      this_2.r4s(element_6.m51_1, tmp_19, this_3.p30());
                    }
                    var this_4 = this_2.s4s();
                    var body_1 = new MultiPartFormDataContent(formData(copyToArray(this_4).slice()));
                    if (body_1 == null) {
                      this_0.d3u_1 = NullBody_instance;
                      var tmp_20 = getKClass(MultiPartFormDataContent);
                      var tmp_21 = null instanceof MultiPartFormDataContent;
                      var tmp_22;
                      try {
                        tmp_22 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                      } catch ($p_3) {
                        var tmp_23;
                        if ($p_3 instanceof Error) {
                          var _unused_var__etf5q3_3 = $p_3;
                          tmp_23 = null;
                        } else {
                          throw $p_3;
                        }
                        tmp_22 = tmp_23;
                      }
                      this_0.v3z(new TypeInfo(tmp_20, tmp_21, tmp_22));
                    } else {
                      if (body_1 instanceof OutgoingContent) {
                        this_0.d3u_1 = body_1;
                        this_0.v3z(null);
                      } else {
                        this_0.d3u_1 = body_1;
                        var tmp_24 = getKClass(MultiPartFormDataContent);
                        var tmp_25 = null instanceof MultiPartFormDataContent;
                        var tmp_26;
                        try {
                          tmp_26 = createKType(getKClass(MultiPartFormDataContent), arrayOf([]), false);
                        } catch ($p_4) {
                          var tmp_27;
                          if ($p_4 instanceof Error) {
                            var _unused_var__etf5q3_4 = $p_4;
                            tmp_27 = null;
                          } else {
                            throw $p_4;
                          }
                          tmp_26 = tmp_27;
                        }
                        this_0.v3z(new TypeInfo(tmp_24, tmp_25, tmp_26));
                      }
                    }
                  }
                }
              }
            }

            this.i8_1 = 4;
            suspendResult = (new HttpStatement(this_0, client)).z4u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            this.i8_1 = 5;
            suspendResult = this.g52_1.a53(ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.f52_1 = suspendResult;
            this.j8_1 = 9;
            this.i8_1 = 6;
            var tmp_28 = this;
            continue $sm;
          case 6:
            var tmp_29 = this.f52_1;
            this.j8_1 = 9;
            closeFinally(this.e52_1, this.d52_1);
            this.c52_1 = tmp_29;
            this.i8_1 = 11;
            continue $sm;
          case 7:
            this.j8_1 = 8;
            var tmp_30 = this.l8_1;
            if (tmp_30 instanceof Error) {
              var e = this.l8_1;
              var tmp_31 = this;
              this.d52_1 = e;
              throw e;
            } else {
              throw this.l8_1;
            }

          case 8:
            this.j8_1 = 9;
            var t = this.l8_1;
            closeFinally(this.e52_1, this.d52_1);
            throw t;
          case 9:
            throw this.l8_1;
          case 10:
            this.j8_1 = 9;
            closeFinally(this.e52_1, this.d52_1);
            if (false) {
              this.i8_1 = 1;
              continue $sm;
            }

            this.i8_1 = 11;
            continue $sm;
          case 11:
            return this.c52_1;
        }
      } catch ($p_5) {
        var e_0 = $p_5;
        if (this.j8_1 === 9) {
          throw e_0;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_0;
        }
      }
     while (true);
  };
  function HttpRequest() {
    this.j52_1 = 'https';
    this.k52_1 = null;
    this.l52_1 = null;
    this.m52_1 = null;
    this.n52_1 = null;
    this.o52_1 = null;
    this.p52_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.q52_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.r52_1 = LinkedHashMap_init_$Create$();
    this.s52_1 = false;
    this.t52_1 = false;
    this.u52_1 = true;
    this.v52_1 = false;
    this.w52_1 = null;
    this.x52_1 = null;
    this.y52_1 = null;
  }
  protoOf(HttpRequest).b53 = function (url) {
    // Inline function 'kotlin.also' call
    this.n52_1 = url;
    return this;
  };
  protoOf(HttpRequest).c53 = function (accept) {
    // Inline function 'kotlin.also' call
    this.o52_1 = accept;
    return this;
  };
  protoOf(HttpRequest).d53 = function (key, value) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.set' call
    this.r52_1.v2(key, value);
    return this;
  };
  protoOf(HttpRequest).e53 = function (key, value) {
    // Inline function 'kotlin.also' call
    this.q52_1.c1(Companion_instance.h51(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).f53 = function (key, value) {
    // Inline function 'kotlin.also' call
    this.q52_1.c1(Companion_instance.i51(key, toString(value)));
    return this;
  };
  protoOf(HttpRequest).j51 = function (key, fileName, fileBody) {
    // Inline function 'kotlin.also' call
    this.q52_1.c1(Companion_instance.j51(key, fileName, fileBody));
    return this;
  };
  protoOf(HttpRequest).k51 = function (json) {
    // Inline function 'kotlin.also' call
    this.q52_1.c1(Companion_instance.k51(json));
    return this;
  };
  protoOf(HttpRequest).g53 = function ($completion) {
    return proceed(this, Companion_getInstance_1().x34_1, $completion);
  };
  protoOf(HttpRequest).h53 = function ($completion) {
    return proceed(this, Companion_getInstance_1().y34_1, $completion);
  };
  protoOf(HttpRequest).i53 = function ($completion) {
    return proceed(this, Companion_getInstance_1().z34_1, $completion);
  };
  protoOf(HttpRequest).j53 = function ($completion) {
    return proceed(this, Companion_getInstance_1().b35_1, $completion);
  };
  protoOf(HttpRequest).k53 = function ($completion) {
    return proceed(this, Companion_getInstance_1().a35_1, $completion);
  };
  function HttpResponse$Companion$mapper$lambda($this$Json) {
    $this$Json.o19_1 = true;
    return Unit_instance;
  }
  function $fromCOROUTINE$(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t53_1 = _this__u8e3s4;
    this.u53_1 = response;
  }
  protoOf($fromCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.w53_1 = this.u53_1.v3v().v37_1;
            this.v53_1 = toMap(this.u53_1.w34());
            var this_0 = this.u53_1;
            this.i8_1 = 1;
            var tmp_0 = this_0.t3v();
            var tmp_1 = PrimitiveClasses_getInstance().tb();
            var tmp_2 = !(null == null) ? isByteArray(null) : false;
            var tmp_3;
            try {
              tmp_3 = createKType(PrimitiveClasses_getInstance().tb(), arrayOf([]), false);
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
            var ARGUMENT = (!(suspendResult == null) ? isByteArray(suspendResult) : false) ? suspendResult : THROW_CCE();
            return new HttpResponse(this.w53_1, this.v53_1, ARGUMENT);
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
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    tmp.z52_1 = Json(VOID, HttpResponse$Companion$mapper$lambda);
  }
  protoOf(Companion_0).a53 = function (response, $completion) {
    var tmp = new $fromCOROUTINE$(this, response, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HttpResponse$stringBody$delegate$lambda(this$0) {
    return function () {
      return decodeToString(this$0.z53_1);
    };
  }
  function HttpResponse$_get_stringBody_$ref_nmyr7m() {
    return constructCallableReference(function (p0) {
      return p0.b54();
    }, 1, 0, 32);
  }
  function HttpResponse(status, headers, body) {
    Companion_getInstance_3();
    this.x53_1 = status;
    this.y53_1 = headers;
    this.z53_1 = body;
    var tmp = this;
    tmp.a54_1 = lazy(HttpResponse$stringBody$delegate$lambda(this));
  }
  protoOf(HttpResponse).b54 = function () {
    var tmp0 = this.a54_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('stringBody', 1, tmp, HttpResponse$_get_stringBody_$ref_nmyr7m(), null);
    return tmp0.n1();
  };
  function applySystemProxy(_this__u8e3s4) {
    var proxyUrl = proxyUrlFromEnv();
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(proxyUrl == null || isBlank(proxyUrl))) {
      _this__u8e3s4.h3v(applySystemProxy$lambda(proxyUrl));
    }
  }
  function applySystemProxy$lambda($proxyUrl) {
    return function ($this$engine) {
      $this$engine.m40_1 = ProxyBuilder_instance.g51(Url($proxyUrl));
      return Unit_instance;
    };
  }
  function applySkipSSLValidation(_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('Skip SSL Validation is not supported on JS target.');
  }
  function proxyUrlFromEnv() {
    return null;
  }
  function start($this, $completion) {
    var tmp = new $startCOROUTINE$($this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function buildUrl($this) {
    var tmp0_safe_receiver = $this.p54_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var s = $this.l54_1 === 'ws' || $this.l54_1 === 'wss' ? $this.l54_1 : 'wss';
    var tmp0 = $this.m54_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'host must be set';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$2 = tmp0;
        break $l$block;
      }
    }
    var h = tmp$ret$2;
    var tmp1_safe_receiver = $this.o54_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = ':' + tmp1_safe_receiver;
    }
    var tmp2_elvis_lhs = tmp;
    var p = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_safe_receiver = $this.n54_1;
    var tmp_0;
    if (tmp3_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = startsWith(tmp3_safe_receiver, '/') ? tmp3_safe_receiver : '/' + tmp3_safe_receiver;
    }
    var tmp4_elvis_lhs = tmp_0;
    var pathPart = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    return s + '://' + h + p + pathPart;
  }
  function WebsocketRequest$textListener$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebsocketRequest$textListener$slambda).l55 = function (it, $completion) {
    var tmp = this.m55(it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(WebsocketRequest$textListener$slambda).e9 = function (p1, $completion) {
    return this.l55((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebsocketRequest$textListener$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
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
  protoOf(WebsocketRequest$textListener$slambda).m55 = function (it, completion) {
    var i = new WebsocketRequest$textListener$slambda(completion);
    i.k55_1 = it;
    return i;
  };
  function WebsocketRequest$textListener$slambda_0(resultContinuation) {
    var i = new WebsocketRequest$textListener$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.l55(it, $completion);
    }, 1);
  }
  function WebsocketRequest$bytesListener$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebsocketRequest$bytesListener$slambda).w55 = function (it, $completion) {
    var tmp = this.x55(it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(WebsocketRequest$bytesListener$slambda).e9 = function (p1, $completion) {
    return this.w55((!(p1 == null) ? isByteArray(p1) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebsocketRequest$bytesListener$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        if (tmp === 0) {
          this.j8_1 = 1;
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
  protoOf(WebsocketRequest$bytesListener$slambda).x55 = function (it, completion) {
    var i = new WebsocketRequest$bytesListener$slambda(completion);
    i.v55_1 = it;
    return i;
  };
  function WebsocketRequest$bytesListener$slambda_0(resultContinuation) {
    var i = new WebsocketRequest$bytesListener$slambda(resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.w55(it, $completion);
    }, 1);
  }
  function WebsocketRequest$onOpenListener$lambda(it) {
    return Unit_instance;
  }
  function WebsocketRequest$onCloseListener$lambda(it) {
    return Unit_instance;
  }
  function WebsocketRequest$onErrorListener$lambda(it) {
    return Unit_instance;
  }
  function WebsocketRequest$start$lambda($opened, this$0) {
    return function (it) {
      $opened.g1y(Unit_instance);
      var tmp;
      try {
        this$0.v54_1(this$0);
        tmp = Unit_instance;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          this$0.x54_1(RuntimeException_init_$Create$('onOpenListener failed', e));
          tmp_0 = Unit_instance;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      return tmp;
    };
  }
  function WebsocketRequest$start$lambda_0(this$0, $opened) {
    return function (it) {
      this$0.y54_1 = null;
      var tmp;
      if (!$opened.b1s()) {
        $opened.h1y(RuntimeException_init_$Create$_0('WebSocket closed before open'));
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!this$0.a55_1) {
        this$0.a55_1 = true;
        tmp_0 = this$0.w54_1(this$0);
      }
      return this$0.z54_1.g1y(Unit_instance);
    };
  }
  function WebsocketRequest$start$lambda_1(this$0, $opened) {
    return function (_unused_var__etf5q3) {
      var ex = RuntimeException_init_$Create$_0('WebSocket error');
      this$0.x54_1(ex);
      var tmp;
      if (!$opened.b1s()) {
        $opened.h1y(ex);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WebsocketRequest$start$lambda$slambda(this$0, $data, resultContinuation) {
    this.g56_1 = this$0;
    this.h56_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebsocketRequest$start$lambda$slambda).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(WebsocketRequest$start$lambda$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebsocketRequest$start$lambda$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.g56_1.t54_1(this.h56_1, this);
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
  protoOf(WebsocketRequest$start$lambda$slambda).p2n = function ($this$launch, completion) {
    var i = new WebsocketRequest$start$lambda$slambda(this.g56_1, this.h56_1, completion);
    i.i56_1 = $this$launch;
    return i;
  };
  function WebsocketRequest$start$lambda$slambda_0(this$0, $data, resultContinuation) {
    var i = new WebsocketRequest$start$lambda$slambda(this$0, $data, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function WebsocketRequest$start$lambda$slambda_1(this$0, $bytes, resultContinuation) {
    this.r56_1 = this$0;
    this.s56_1 = $bytes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebsocketRequest$start$lambda$slambda_1).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(WebsocketRequest$start$lambda$slambda_1).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(WebsocketRequest$start$lambda$slambda_1).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.r56_1.u54_1(this.s56_1, this);
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
  protoOf(WebsocketRequest$start$lambda$slambda_1).p2n = function ($this$launch, completion) {
    var i = new WebsocketRequest$start$lambda$slambda_1(this.r56_1, this.s56_1, completion);
    i.t56_1 = $this$launch;
    return i;
  };
  function WebsocketRequest$start$lambda$slambda_2(this$0, $bytes, resultContinuation) {
    var i = new WebsocketRequest$start$lambda$slambda_1(this$0, $bytes, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function WebsocketRequest$start$lambda_2(this$0) {
    return function (event) {
      var data = event.data;
      var tmp;
      if (!(data == null) ? typeof data === 'string' : false) {
        launch(this$0.b55_1, VOID, VOID, WebsocketRequest$start$lambda$slambda_0(this$0, data, null));
        tmp = Unit_instance;
      } else {
        if (data instanceof ArrayBuffer) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var bytes = new Int8Array(data);
          launch(this$0.b55_1, VOID, VOID, WebsocketRequest$start$lambda$slambda_2(this$0, bytes, null));
          tmp = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function WebsocketRequest$start$lambda_3(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.y54_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.close();
      }
      cancel(this$0.b55_1);
      return Unit_instance;
    };
  }
  function $startCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k54_1 = _this__u8e3s4;
  }
  protoOf($startCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var wsUrl = buildUrl(this.k54_1);
            var opened = CompletableDeferred();
            this.k54_1.z54_1 = CompletableDeferred();
            this.k54_1.a55_1 = false;
            var socket = new WebSocket(wsUrl);
            socket.binaryType = 'arraybuffer';
            this.k54_1.y54_1 = socket;
            socket.onopen = WebsocketRequest$start$lambda(opened, this.k54_1);
            socket.onclose = WebsocketRequest$start$lambda_0(this.k54_1, opened);
            socket.onerror = WebsocketRequest$start$lambda_1(this.k54_1, opened);
            socket.onmessage = WebsocketRequest$start$lambda_2(this.k54_1);
            var tmp0_safe_receiver = this.o8().v8(Key_instance);
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.i1s(WebsocketRequest$start$lambda_3(this.k54_1));
            }

            this.i8_1 = 1;
            suspendResult = opened.k1u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i8_1 = 2;
            suspendResult = this.k54_1.z54_1.k1u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.k54_1;
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
  function WebsocketRequest() {
    this.l54_1 = 'ws';
    this.m54_1 = null;
    this.n54_1 = null;
    this.o54_1 = null;
    this.p54_1 = null;
    this.q54_1 = null;
    this.r54_1 = 'kHttpClient/1.0';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.s54_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.t54_1 = WebsocketRequest$textListener$slambda_0(null);
    var tmp_1 = this;
    tmp_1.u54_1 = WebsocketRequest$bytesListener$slambda_0(null);
    var tmp_2 = this;
    tmp_2.v54_1 = WebsocketRequest$onOpenListener$lambda;
    var tmp_3 = this;
    tmp_3.w54_1 = WebsocketRequest$onCloseListener$lambda;
    var tmp_4 = this;
    tmp_4.x54_1 = WebsocketRequest$onErrorListener$lambda;
    this.y54_1 = null;
    this.z54_1 = CompletableDeferred();
    this.a55_1 = false;
    this.b55_1 = CoroutineScope_0(Dispatchers_getInstance().f22_1.if(SupervisorJob()));
  }
  protoOf(WebsocketRequest).u56 = function (url) {
    // Inline function 'kotlin.also' call
    this.p54_1 = url;
    return this;
  };
  protoOf(WebsocketRequest).v56 = function ($completion) {
    return start(this, $completion);
  };
  protoOf(WebsocketRequest).t3 = function () {
    if (!this.a55_1) {
      this.a55_1 = true;
      this.w54_1(this);
    }
    var tmp0_safe_receiver = this.y54_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close();
    }
    this.y54_1 = null;
    this.z54_1.g1y(Unit_instance);
    cancel(this.b55_1);
  };
  protoOf(WebsocketRequest).w56 = function (text, $completion) {
    var tmp0_elvis_lhs = this.y54_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('WebSocket is not connected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var socket = tmp;
    socket.send(text);
    return Unit_instance;
  };
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = WebsocketRequest;
  _.$_$.b = HttpRequest;
  //endregion
  return _;
}));

//# sourceMappingURL=khttpclient.js.map
