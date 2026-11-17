(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-io-kotlinx-io-core.js', './kotlinx-atomicfu.js', './kotlinx-io-kotlinx-io-bytestring.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./kotlinx-atomicfu.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-io'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'ktor-ktor-io'.");
    }
    globalThis['ktor-ktor-io'] = factory(typeof globalThis['ktor-ktor-io'] === 'undefined' ? {} : globalThis['ktor-ktor-io'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['kotlinx-atomicfu'], globalThis['kotlinx-io-kotlinx-io-bytestring']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring) {
  'use strict';
  //region block: imports
  var Companion_instance = kotlin_kotlin.$_$.z2;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var protoOf = kotlin_kotlin.$_$.zb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var initMetadataForObject = kotlin_kotlin.$_$.gb;
  var toString = kotlin_kotlin.$_$.ah;
  var hashCode = kotlin_kotlin.$_$.za;
  var equals = kotlin_kotlin.$_$.ta;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var createFailure = kotlin_kotlin.$_$.pg;
  var Result = kotlin_kotlin.$_$.xf;
  var initMetadataForInterface = kotlin_kotlin.$_$.eb;
  var toString_0 = kotlin_kotlin.$_$.ve;
  var newThrowable = kotlin_kotlin.$_$.vb;
  var stackTraceToString = kotlin_kotlin.$_$.zg;
  var VOID = kotlin_kotlin.$_$.c;
  var isInterface = kotlin_kotlin.$_$.pb;
  var FunctionAdapter = kotlin_kotlin.$_$.fa;
  var DisposableHandle = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var CoroutineImpl = kotlin_kotlin.$_$.j9;
  var fromInt = kotlin_kotlin.$_$.u9;
  var numberToLong = kotlin_kotlin.$_$.z9;
  var add = kotlin_kotlin.$_$.p9;
  var intercepted = kotlin_kotlin.$_$.u8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xg;
  var returnIfSuspended = kotlin_kotlin.$_$.g3;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cb;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.a4;
  var CancellationException = kotlin_kotlin.$_$.q8;
  var CopyableThrowable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var convertToInt = kotlin_kotlin.$_$.r9;
  var toString_1 = kotlin_kotlin.$_$.cc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var IllegalStateException = kotlin_kotlin.$_$.uf;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.t4;
  var captureStack = kotlin_kotlin.$_$.ja;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var decodeToString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.d;
  var replace = kotlin_kotlin.$_$.yd;
  var indexOf = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.i;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var get_ONE = kotlin_kotlin.$_$.o9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var readString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.n;
  var subtract = kotlin_kotlin.$_$.da;
  var readByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.l;
  var readString_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.o;
  var constructCallableReference = kotlin_kotlin.$_$.ra;
  var EmptyCoroutineContext_instance = kotlin_kotlin.$_$.i2;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var startCoroutineCancellable = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var Continuation = kotlin_kotlin.$_$.d9;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var initMetadataForLambda = kotlin_kotlin.$_$.fb;
  var KFunctionImpl = kotlin_kotlin.$_$.nc;
  var initMetadataForFunctionReference = kotlin_kotlin.$_$.db;
  var readString_1 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.m;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.d;
  var Enum = kotlin_kotlin.$_$.qf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j3;
  var listOf = kotlin_kotlin.$_$.o7;
  var IOException_init_$Create$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.e;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c4;
  var charSequenceLength = kotlin_kotlin.$_$.oa;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var encodeToByteArray = kotlin_kotlin.$_$.hd;
  var writeString = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.p;
  var AutoCloseable = kotlin_kotlin.$_$.jf;
  var IOException_init_$Init$_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var replace_0 = kotlin_kotlin.$_$.zd;
  var getStringHashCode = kotlin_kotlin.$_$.ya;
  var charSequenceSubSequence = kotlin_kotlin.$_$.pa;
  var readByteArray_0 = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.k;
  var isCharSequence = kotlin_kotlin.$_$.lb;
  var trim = kotlin_kotlin.$_$.ef;
  var toByte = kotlin_kotlin.$_$.ac;
  var decodeToString_0 = kotlin_kotlin.$_$.fd;
  var setOf = kotlin_kotlin.$_$.z7;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var charSequenceGet = kotlin_kotlin.$_$.na;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject(Empty, 'Empty');
  initMetadataForClass(Closed, 'Closed');
  function resume() {
    return this.l2c().t8(Companion_getInstance().i2c_1);
  }
  function resume_0(throwable) {
    var tmp = this.l2c();
    var tmp_0;
    if (throwable == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(throwable));
      tmp_0 = new Result(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp.t8(tmp1_elvis_lhs == null ? Companion_getInstance().i2c_1 : tmp1_elvis_lhs.vl_1);
  }
  initMetadataForInterface(Task, 'Task');
  initMetadataForClass(Read, 'Read', VOID, VOID, [Task]);
  initMetadataForClass(Write, 'Write', VOID, VOID, [Task]);
  initMetadataForClass(sam$kotlinx_coroutines_DisposableHandle$0, 'sam$kotlinx_coroutines_DisposableHandle$0', VOID, VOID, [DisposableHandle, FunctionAdapter]);
  initMetadataForCoroutine($awaitContentCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushAndCloseCOROUTINE$, CoroutineImpl);
  function awaitContent$default(min, $completion, $super) {
    min = min === VOID ? 1 : min;
    return $super === VOID ? this.u2e(min, $completion) : $super.u2e.call(this, min, $completion);
  }
  initMetadataForInterface(ByteReadChannel_1, 'ByteReadChannel', VOID, VOID, VOID, [1]);
  function get_autoFlush() {
    return false;
  }
  initMetadataForInterface(ByteWriteChannel, 'ByteWriteChannel', VOID, VOID, VOID, [0]);
  initMetadataForClass(ByteChannel, 'ByteChannel', ByteChannel, VOID, [ByteReadChannel_1, ByteWriteChannel], [1, 0]);
  initMetadataForClass(ConcurrentIOException, 'ConcurrentIOException', VOID, IllegalStateException);
  initMetadataForCoroutine($findNextCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($advanceToNextPotentialMatchCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($checkFullMatchCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ByteChannelScanner, 'ByteChannelScanner', VOID, VOID, VOID, [1, 0]);
  initMetadataForClass(ByteReadChannel$Companion$Empty$1, VOID, VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForCompanion(Companion_0);
  initMetadataForCoroutine($readBufferCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($toByteArrayCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($discardCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($copyToCOROUTINE$_0, CoroutineImpl);
  initMetadataForCoroutine($readAvailableCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($skipIfFoundCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readPacketCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($peekCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineToCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($internalReadLineTo$discardCrlfOrCrCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($flushIfNeededCOROUTINE$, CoroutineImpl);
  initMetadataForClass(WriterJob, 'WriterJob');
  initMetadataForClass(WriterScope, 'WriterScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(NO_CALLBACK$1, VOID, VOID, VOID, [Continuation]);
  initMetadataForLambda(writer$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForFunctionReference(ByteWriteChannel$flushAndClose$ref_0, KFunctionImpl, VOID, [0]);
  initMetadataForCoroutine($writePacketCOROUTINE$, CoroutineImpl);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(CloseToken, 'CloseToken');
  initMetadataForCoroutine($awaitContentCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CountedByteReadChannel, 'CountedByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(ClosedByteChannelException, 'ClosedByteChannelException', ClosedByteChannelException, IOException);
  initMetadataForClass(ClosedReadChannelException, 'ClosedReadChannelException', ClosedReadChannelException, ClosedByteChannelException);
  initMetadataForClass(ClosedWriteChannelException, 'ClosedWriteChannelException', ClosedWriteChannelException, ClosedByteChannelException);
  initMetadataForClass(LineEnding, 'LineEnding', VOID, Enum);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(LineEndingMode, 'LineEndingMode');
  initMetadataForClass(SourceByteReadChannel, 'SourceByteReadChannel', VOID, VOID, [ByteReadChannel_1], [1]);
  initMetadataForClass(MalformedInputException, 'MalformedInputException', VOID, IOException);
  initMetadataForClass(TooLongLineException, 'TooLongLineException', VOID, MalformedInputException);
  function close() {
    this.c1v();
  }
  initMetadataForInterface(ObjectPool, 'ObjectPool', VOID, VOID, [AutoCloseable]);
  initMetadataForClass(DefaultPool, 'DefaultPool', VOID, VOID, [ObjectPool]);
  initMetadataForClass(ByteArrayPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(NoPoolImpl, 'NoPoolImpl', VOID, VOID, [ObjectPool]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Charset, 'Charset');
  initMetadataForObject(Charsets, 'Charsets');
  initMetadataForClass(CharsetDecoder, 'CharsetDecoder');
  initMetadataForClass(CharsetEncoder, 'CharsetEncoder');
  initMetadataForClass(CharsetImpl, 'CharsetImpl', VOID, Charset);
  initMetadataForClass(CharsetEncoderImpl, 'CharsetEncoderImpl', VOID, CharsetEncoder);
  initMetadataForClass(CharsetDecoderImpl, 'CharsetDecoderImpl', VOID, CharsetDecoder);
  initMetadataForClass(toKtor$1);
  initMetadataForClass(TextDecoderFallback, 'TextDecoderFallback');
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.h2c_1 = new Closed(null);
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    tmp.i2c_1 = _Result___init__impl__xyqfz8(Unit_instance);
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Empty() {
  }
  protoOf(Empty).toString = function () {
    return 'Empty';
  };
  protoOf(Empty).hashCode = function () {
    return -231472095;
  };
  protoOf(Empty).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    return true;
  };
  var Empty_instance;
  function Empty_getInstance() {
    return Empty_instance;
  }
  function Closed(cause) {
    this.j2c_1 = cause;
  }
  protoOf(Closed).toString = function () {
    return 'Closed(cause=' + toString(this.j2c_1) + ')';
  };
  protoOf(Closed).hashCode = function () {
    return this.j2c_1 == null ? 0 : hashCode(this.j2c_1);
  };
  protoOf(Closed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Closed))
      return false;
    if (!equals(this.j2c_1, other.j2c_1))
      return false;
    return true;
  };
  function Task() {
  }
  function Read(continuation) {
    this.p2c_1 = continuation;
    this.q2c_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('ReadTask 0x' + toString_0(hashCode(this.p2c_1), 16));
      stackTraceToString(this_0);
      tmp.q2c_1 = this_0;
    }
  }
  protoOf(Read).l2c = function () {
    return this.p2c_1;
  };
  protoOf(Read).k2c = function () {
    return this.q2c_1;
  };
  protoOf(Read).m2c = function () {
    return 'read';
  };
  function Write(continuation) {
    this.r2c_1 = continuation;
    this.s2c_1 = null;
    if (get_DEVELOPMENT_MODE()) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = newThrowable('WriteTask 0x' + toString_0(hashCode(this.r2c_1), 16));
      stackTraceToString(this_0);
      tmp.s2c_1 = this_0;
    }
  }
  protoOf(Write).l2c = function () {
    return this.r2c_1;
  };
  protoOf(Write).k2c = function () {
    return this.s2c_1;
  };
  protoOf(Write).m2c = function () {
    return 'write';
  };
  function rethrowCloseCauseIfNeeded($this) {
    var tmp0_safe_receiver = $this.c2d();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function moveFlushToReadBuffer($this) {
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    $this.w2c_1;
    $this.u2c_1.y1o($this.y2c_1);
    $this.v2c_1 = 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = $this.x2c_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Write) {
      tmp = $this.x2c_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.n2c();
    }
  }
  function closeSlot($this, cause) {
    var closeContinuation = !(cause == null) ? new Closed(cause) : Companion_getInstance().h2c_1;
    var continuation = $this.x2c_1.atomicfu$getAndSet(closeContinuation);
    if (isInterface(continuation, Task)) {
      continuation.o2c(cause);
    }
    var tmp0_safe_receiver = $this.b2d_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(cause);
  }
  function sam$kotlinx_coroutines_DisposableHandle$0(function_0) {
    this.d2d_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).c1v = function () {
    return this.d2d_1();
  };
  protoOf(sam$kotlinx_coroutines_DisposableHandle$0).d3 = function () {
    return this.d2d_1;
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
  function ByteChannel$invokeOnClose$lambda() {
    return Unit_instance;
  }
  function ByteChannel$invokeOnClose$lambda_0() {
    return Unit_instance;
  }
  function ByteChannel$invokeOnClose$lambda_1(this$0, $handler) {
    return function () {
      this$0.b2d_1.atomicfu$compareAndSet($handler, null);
      return Unit_instance;
    };
  }
  function $awaitContentCOROUTINE$(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m2d_1 = _this__u8e3s4;
    this.n2d_1 = min;
  }
  protoOf($awaitContentCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            rethrowCloseCauseIfNeeded(this.m2d_1);
            if (this.m2d_1.y2c_1.e1() >= fromInt(this.n2d_1))
              return true;
            this.o2d_1 = this.m2d_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!(add(numberToLong(this.m2d_1.v2c_1), this.m2d_1.y2c_1.e1()) < fromInt(this.n2d_1) && this.m2d_1.a2d_1.kotlinx$atomicfu$value == null)) {
              this.i8_1 = 3;
              continue $sm;
            }

            this.i8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.f1w();
            var tmp0 = this.o2d_1;
            var tmp2 = new Read(cancellable);
            l$ret$1: do {
              var previous = tmp0.x2c_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.x2c_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.n2c();
                  break l$ret$1;
                }
              }
              if (previous instanceof Read) {
                previous.o2c(new ConcurrentIOException(tmp2.m2c(), previous.k2c()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.n2c();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.o2c(previous.j2c_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(add(numberToLong(this.m2d_1.v2c_1), this.m2d_1.y2c_1.e1()) < fromInt(this.n2d_1) && this.m2d_1.a2d_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.x2c_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Read) {
                  tmp_0 = tmp0.x2c_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.n2c();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.l1t(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i8_1 = 1;
            continue $sm;
          case 3:
            rethrowCloseCauseIfNeeded(this.m2d_1);
            if (this.m2d_1.y2c_1.e1() < 1048576n) {
              moveFlushToReadBuffer(this.m2d_1);
            }

            return this.m2d_1.y2c_1.e1() >= fromInt(this.n2d_1);
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
  function $flushCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x2d_1 = _this__u8e3s4;
  }
  protoOf($flushCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            rethrowCloseCauseIfNeeded(this.x2d_1);
            this.x2d_1.z2d();
            if (this.x2d_1.a2e())
              return Unit_instance;
            this.y2d_1 = this.x2d_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!(!this.x2d_1.a2e() && this.x2d_1.a2d_1.kotlinx$atomicfu$value == null)) {
              this.i8_1 = 3;
              continue $sm;
            }

            this.i8_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.f1w();
            var tmp0 = this.y2d_1;
            var tmp2 = new Write(cancellable);
            l$ret$1: do {
              var previous = tmp0.x2c_1.kotlinx$atomicfu$value;
              if (!(previous instanceof Closed)) {
                if (!tmp0.x2c_1.atomicfu$compareAndSet(previous, tmp2)) {
                  tmp2.n2c();
                  break l$ret$1;
                }
              }
              if (previous instanceof Write) {
                previous.o2c(new ConcurrentIOException(tmp2.m2c(), previous.k2c()));
              } else {
                if (isInterface(previous, Task)) {
                  previous.n2c();
                } else {
                  if (previous instanceof Closed) {
                    tmp2.o2c(previous.j2c_1);
                    break l$ret$1;
                  } else {
                    if (!equals(previous, Empty_instance)) {
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
              if (!(!this.x2d_1.a2e() && this.x2d_1.a2d_1.kotlinx$atomicfu$value == null)) {
                var current = tmp0.x2c_1.kotlinx$atomicfu$value;
                var tmp_0;
                if (current instanceof Write) {
                  tmp_0 = tmp0.x2c_1.atomicfu$compareAndSet(current, Empty_instance);
                } else {
                  tmp_0 = false;
                }
                if (tmp_0) {
                  current.n2c();
                }
              }
            }
             while (false);
            suspendResult = returnIfSuspended(cancellable.l1t(), this);
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
  function $flushAndCloseCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j2e_1 = _this__u8e3s4;
  }
  protoOf($flushAndCloseCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            var this_0 = this.j2e_1;
            this.j8_1 = 2;
            this.l2e_1 = Companion_instance;
            this.i8_1 = 1;
            suspendResult = this_0.m2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            this.l2e_1;
            tmp_0.k2e_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.j8_1 = 4;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.j8_1 = 4;
            var tmp_1 = this.l8_1;
            if (tmp_1 instanceof Error) {
              var e = this.l8_1;
              var tmp_2 = this;
              tmp_2.k2e_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.i8_1 = 3;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 3:
            this.j8_1 = 4;
            if (!this.j2e_1.a2d_1.atomicfu$compareAndSet(null, get_CLOSED()))
              return Unit_instance;
            closeSlot(this.j2e_1, null);
            return Unit_instance;
          case 4:
            throw this.l8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.j8_1 === 4) {
          throw e_0;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e_0;
        }
      }
     while (true);
  };
  function ByteChannel(autoFlush) {
    autoFlush = autoFlush === VOID ? false : autoFlush;
    this.t2c_1 = autoFlush;
    this.u2c_1 = new Buffer();
    this.v2c_1 = 0;
    this.w2c_1 = new Object();
    this.x2c_1 = atomic$ref$1(Empty_instance);
    this.y2c_1 = new Buffer();
    this.z2c_1 = new Buffer();
    this.a2d_1 = atomic$ref$1(null);
    this.b2d_1 = atomic$ref$1(null);
  }
  protoOf(ByteChannel).n2e = function () {
    return this.t2c_1;
  };
  protoOf(ByteChannel).a2e = function () {
    return this.v2c_1 < 1048576;
  };
  protoOf(ByteChannel).o2e = function () {
    var tmp0_safe_receiver = this.a2d_1.kotlinx$atomicfu$value;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'io.ktor.utils.io.Companion.throwOrNull' call
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(tmp0_safe_receiver).r1y();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp = new ClosedReadChannelException(p0);
          }
        }
      }
      var tmp0_safe_receiver_0 = tmp;
      var tmp_0;
      if (tmp0_safe_receiver_0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        throw tmp0_safe_receiver_0;
      }
    }
    if (this.y2c_1.v1n()) {
      moveFlushToReadBuffer(this);
    }
    return this.y2c_1;
  };
  protoOf(ByteChannel).p2e = function () {
    if (this.q2e()) {
      var tmp0_safe_receiver = this.a2d_1.kotlinx$atomicfu$value;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'io.ktor.utils.io.Companion.throwOrNull' call
        // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
        var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
        var tmp_0;
        if (tmp0_subject == null) {
          tmp_0 = null;
        } else {
          if (isInterface(tmp0_subject, CopyableThrowable)) {
            tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).r1y();
          } else {
            if (tmp0_subject instanceof CancellationException) {
              tmp_0 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
            } else {
              var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
              tmp_0 = new ClosedWriteChannelException(p0);
            }
          }
        }
        var tmp0_safe_receiver_0 = tmp_0;
        var tmp_1;
        if (tmp0_safe_receiver_0 == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          throw tmp0_safe_receiver_0;
        }
        tmp = tmp_1;
      }
      if (tmp == null)
        throw new ClosedWriteChannelException();
    }
    return this.z2c_1;
  };
  protoOf(ByteChannel).c2d = function () {
    var tmp0_safe_receiver = this.a2d_1.kotlinx$atomicfu$value;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp_0;
      if (tmp0_subject == null) {
        tmp_0 = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).r1y();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp_0 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp_0 = new ClosedByteChannelException(p0);
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(ByteChannel).q2e = function () {
    return !(this.a2d_1.kotlinx$atomicfu$value == null);
  };
  protoOf(ByteChannel).r2e = function () {
    var tmp;
    var tmp0_safe_receiver = this.a2d_1.kotlinx$atomicfu$value;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t2e()) === true) {
      tmp = true;
    } else {
      tmp = (this.q2e() && this.v2c_1 === 0 && this.y2c_1.v1n());
    }
    return tmp;
  };
  protoOf(ByteChannel).u2e = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$(this, min, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ByteChannel).m2e = function ($completion) {
    var tmp = new $flushCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ByteChannel).z2d = function () {
    if (this.z2c_1.v1n())
      return Unit_instance;
    // Inline function 'io.ktor.utils.io.locks.synchronized' call
    this.w2c_1;
    var count = convertToInt(this.z2c_1.e1());
    this.u2c_1.n1p(this.z2c_1);
    this.v2c_1 = this.v2c_1 + count | 0;
    // Inline function 'io.ktor.utils.io.ByteChannel.resumeSlot' call
    var current = this.x2c_1.kotlinx$atomicfu$value;
    var tmp;
    if (current instanceof Read) {
      tmp = this.x2c_1.atomicfu$compareAndSet(current, Empty_instance);
    } else {
      tmp = false;
    }
    if (tmp) {
      current.n2c();
    }
  };
  protoOf(ByteChannel).t3 = function () {
    this.z2d();
    if (!this.a2d_1.atomicfu$compareAndSet(null, get_CLOSED()))
      return Unit_instance;
    closeSlot(this, null);
  };
  protoOf(ByteChannel).w2e = function ($completion) {
    var tmp = new $flushAndCloseCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ByteChannel).x2e = function (cause) {
    if (!(this.a2d_1.kotlinx$atomicfu$value == null))
      return Unit_instance;
    var closedToken = new CloseToken(cause);
    this.a2d_1.atomicfu$compareAndSet(null, closedToken);
    // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
    var tmp0_subject = access$_get_origin__hdh1qz(closedToken);
    var tmp;
    if (tmp0_subject == null) {
      tmp = null;
    } else {
      if (isInterface(tmp0_subject, CopyableThrowable)) {
        tmp = access$_get_origin__hdh1qz(closedToken).r1y();
      } else {
        if (tmp0_subject instanceof CancellationException) {
          tmp = CancellationException_init_$Create$(access$_get_origin__hdh1qz(closedToken).message, access$_get_origin__hdh1qz(closedToken));
        } else {
          var p0 = access$_get_origin__hdh1qz(closedToken);
          tmp = new ClosedByteChannelException(p0);
        }
      }
    }
    var wrappedCause = tmp;
    closeSlot(this, wrappedCause);
  };
  protoOf(ByteChannel).y2e = function (handler) {
    var existingCause = this.a2d_1.kotlinx$atomicfu$value;
    if (!(existingCause == null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(existingCause);
      var tmp;
      if (tmp0_subject == null) {
        tmp = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp = access$_get_origin__hdh1qz(existingCause).r1y();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp = CancellationException_init_$Create$(access$_get_origin__hdh1qz(existingCause).message, access$_get_origin__hdh1qz(existingCause));
          } else {
            var p0 = access$_get_origin__hdh1qz(existingCause);
            tmp = new ClosedByteChannelException(p0);
          }
        }
      }
      handler(tmp);
      var tmp_0 = ByteChannel$invokeOnClose$lambda;
      return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_0);
    }
    if (!this.b2d_1.atomicfu$compareAndSet(null, handler)) {
      // Inline function 'kotlin.error' call
      var message = 'Only one invokeOnClose handler is supported per channel';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
    var cause = this.a2d_1.kotlinx$atomicfu$value;
    if (!(cause == null) && this.b2d_1.atomicfu$compareAndSet(handler, null)) {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject_0 = access$_get_origin__hdh1qz(cause);
      var tmp_1;
      if (tmp0_subject_0 == null) {
        tmp_1 = null;
      } else {
        if (isInterface(tmp0_subject_0, CopyableThrowable)) {
          tmp_1 = access$_get_origin__hdh1qz(cause).r1y();
        } else {
          if (tmp0_subject_0 instanceof CancellationException) {
            tmp_1 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(cause).message, access$_get_origin__hdh1qz(cause));
          } else {
            var p0_0 = access$_get_origin__hdh1qz(cause);
            tmp_1 = new ClosedByteChannelException(p0_0);
          }
        }
      }
      handler(tmp_1);
      var tmp_2 = ByteChannel$invokeOnClose$lambda_0;
      return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_2);
    }
    var tmp_3 = ByteChannel$invokeOnClose$lambda_1(this, handler);
    return new sam$kotlinx_coroutines_DisposableHandle$0(tmp_3);
  };
  protoOf(ByteChannel).toString = function () {
    return 'ByteChannel[' + hashCode(this) + ']';
  };
  function ConcurrentIOException(taskName, cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$('Concurrent ' + taskName + ' attempts', cause, this);
    captureStack(this, ConcurrentIOException);
  }
  function ByteReadChannel(content, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? content.length : length;
    // Inline function 'kotlin.also' call
    var this_0 = new Buffer();
    this_0.e1p(content, offset, offset + length | 0);
    var source = this_0;
    return ByteReadChannel_0(source);
  }
  function ByteReadChannel_0(source) {
    return new SourceByteReadChannel(source);
  }
  function buildPartialMatchTable($this) {
    var table = new Int32Array($this.a2f_1.e1());
    var j = 0;
    var inductionVariable = 1;
    var last = $this.a2f_1.e1();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        while (j > 0 && !($this.a2f_1.d1(i) === $this.a2f_1.d1(j))) {
          j = table[j - 1 | 0];
        }
        if ($this.a2f_1.d1(i) === $this.a2f_1.d1(j)) {
          j = j + 1 | 0;
        }
        table[i] = j;
      }
       while (inductionVariable < last);
    return table;
  }
  function advanceToNextPotentialMatch($this, $completion) {
    var tmp = new $advanceToNextPotentialMatchCOROUTINE$($this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function checkFullMatch($this, $completion) {
    var tmp = new $checkFullMatchCOROUTINE$($this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function checkBounds($this, extra) {
    if (add($this.g2f_1, extra) > $this.c2f_1) {
      throw IOException_init_$Create$('Limit of ' + $this.c2f_1.toString() + ' bytes exceeded ' + ('while searching for "' + toSingleLineString($this, $this.a2f_1) + '"'));
    }
  }
  function toSingleLineString($this, $receiver) {
    return replace(decodeToString($receiver), '\n', '\\n');
  }
  function $findNextCOROUTINE$(_this__u8e3s4, ignoreMissing, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l2g_1 = _this__u8e3s4;
    this.m2g_1 = ignoreMissing;
  }
  protoOf($findNextCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 9;
            this.l2g_1.g2f_1 = 0n;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.l2g_1.d2f_1.v1n()) {
              this.n2g_1 = true;
              this.i8_1 = 3;
              continue $sm;
            } else {
              this.i8_1 = 2;
              suspendResult = this.l2g_1.z2e_1.v2e(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.n2g_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            if (!this.n2g_1) {
              this.i8_1 = 7;
              continue $sm;
            }

            this.i8_1 = 4;
            suspendResult = advanceToNextPotentialMatch(this.l2g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.i8_1 = 5;
            suspendResult = checkFullMatch(this.l2g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (suspendResult) {
              return this.l2g_1.g2f_1;
            } else {
              this.i8_1 = 6;
              continue $sm;
            }

          case 6:
            this.i8_1 = 1;
            continue $sm;
          case 7:
            if (!this.m2g_1) {
              throw IOException_init_$Create$('Expected "' + toSingleLineString(this.l2g_1, this.l2g_1.a2f_1) + '" but encountered end of input');
            }

            this.l2g_1.g2f_1 = add(this.l2g_1.g2f_1, this.l2g_1.f2f_1.y1o(this.l2g_1.b2f_1.p2e()));
            this.i8_1 = 8;
            suspendResult = this.l2g_1.b2f_1.m2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            return this.l2g_1.g2f_1;
          case 9:
            throw this.l8_1;
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
  function $advanceToNextPotentialMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q2f_1 = _this__u8e3s4;
  }
  protoOf($advanceToNextPotentialMatchCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 8;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.q2f_1.d2f_1.v1n()) {
              this.r2f_1 = true;
              this.i8_1 = 3;
              continue $sm;
            } else {
              this.i8_1 = 2;
              suspendResult = this.q2f_1.z2e_1.v2e(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.r2f_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            if (!this.r2f_1) {
              this.i8_1 = 7;
              continue $sm;
            }

            var nextMatch = indexOf(this.q2f_1.d2f_1, this.q2f_1.a2f_1.d1(0));
            if (nextMatch === -1n) {
              var tmp_0 = this.q2f_1.d2f_1;
              checkBounds(this.q2f_1, (tmp_0 instanceof Buffer ? tmp_0 : THROW_CCE()).e1());
              this.q2f_1.g2f_1 = add(this.q2f_1.g2f_1, this.q2f_1.d2f_1.y1o(this.q2f_1.b2f_1.p2e()));
              this.i8_1 = 5;
              suspendResult = flushIfNeeded(this.q2f_1.b2f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              checkBounds(this.q2f_1, nextMatch);
              var tmp_1 = this.q2f_1;
              var tmp_2 = this.q2f_1.g2f_1;
              var tmp_3 = this.q2f_1.b2f_1.p2e();
              tmp_1.g2f_1 = add(tmp_2, this.q2f_1.d2f_1.v1o(tmp_3 instanceof Buffer ? tmp_3 : THROW_CCE(), nextMatch));
              this.i8_1 = 4;
              suspendResult = flushIfNeeded(this.q2f_1.b2f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            return Unit_instance;
          case 5:
            this.i8_1 = 6;
            continue $sm;
          case 6:
            this.i8_1 = 1;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.l8_1;
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
  function $checkFullMatchCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a2g_1 = _this__u8e3s4;
  }
  protoOf($checkFullMatchCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 8;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.a2g_1.d2f_1.v1n()) {
              this.c2g_1 = true;
              this.i8_1 = 3;
              continue $sm;
            } else {
              this.i8_1 = 2;
              suspendResult = this.a2g_1.z2e_1.v2e(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.c2g_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            if (!this.c2g_1) {
              this.i8_1 = 7;
              continue $sm;
            }

            this.b2g_1 = this.a2g_1.d2f_1.y1n();
            if (this.a2g_1.h2f_1 > 0 && !(this.b2g_1 === this.a2g_1.a2f_1.d1(this.a2g_1.h2f_1))) {
              var oldMatchIndex = this.a2g_1.h2f_1;
              while (this.a2g_1.h2f_1 > 0 && !(this.b2g_1 === this.a2g_1.a2f_1.d1(this.a2g_1.h2f_1))) {
                this.a2g_1.h2f_1 = this.a2g_1.e2f_1[this.a2g_1.h2f_1 - 1 | 0];
              }
              var retained = fromInt(oldMatchIndex - this.a2g_1.h2f_1 | 0);
              checkBounds(this.a2g_1, retained);
              var tmp_0 = this.a2g_1;
              var tmp_1 = this.a2g_1.g2f_1;
              var tmp_2 = this.a2g_1.b2f_1.p2e();
              tmp_0.g2f_1 = add(tmp_1, this.a2g_1.f2f_1.v1o(tmp_2 instanceof Buffer ? tmp_2 : THROW_CCE(), retained));
              if (this.a2g_1.h2f_1 === 0 && !(this.b2g_1 === this.a2g_1.a2f_1.d1(this.a2g_1.h2f_1))) {
                this.i8_1 = 6;
                suspendResult = writeByte(this.a2g_1.b2f_1, this.b2g_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.i8_1 = 4;
                continue $sm;
              }
            } else {
              this.i8_1 = 5;
              continue $sm;
            }

          case 4:
            this.i8_1 = 5;
            continue $sm;
          case 5:
            this.a2g_1.h2f_1 = this.a2g_1.h2f_1 + 1 | 0;
            if (this.a2g_1.h2f_1 === this.a2g_1.a2f_1.e1()) {
              return true;
            }

            this.a2g_1.f2f_1.o1p(this.b2g_1);
            this.i8_1 = 1;
            continue $sm;
          case 6:
            var _unary__edvuaz = this.a2g_1.g2f_1;
            this.a2g_1.g2f_1 = add(_unary__edvuaz, get_ONE());
            return false;
          case 7:
            return false;
          case 8:
            throw this.l8_1;
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
  function ByteChannelScanner(channel, matchString, writeChannel, limit) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    this.z2e_1 = channel;
    this.a2f_1 = matchString;
    this.b2f_1 = writeChannel;
    this.c2f_1 = limit;
    // Inline function 'kotlin.require' call
    if (!(this.a2f_1.e1() > 0)) {
      var message = 'Empty match string not permitted for scanning';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    this.d2f_1 = this.z2e_1.o2e();
    this.e2f_1 = buildPartialMatchTable(this);
    this.f2f_1 = new Buffer();
    this.g2f_1 = 0n;
    this.h2f_1 = 0;
  }
  protoOf(ByteChannelScanner).o2g = function (ignoreMissing, $completion) {
    var tmp = new $findNextCOROUTINE$(this, ignoreMissing, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  function attachJob(_this__u8e3s4, job) {
    job.k1s(true, VOID, attachJob$lambda(_this__u8e3s4));
  }
  function attachWriterJob(_this__u8e3s4, writerJob) {
    var tmp = writerJob.p2g_1;
    var tmp0_safe_receiver = tmp instanceof ByteChannel ? tmp : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y2e(attachWriterJob$lambda(_this__u8e3s4));
    }
  }
  function attachJob$lambda($this_attachJob) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $this_attachJob.x2e(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function attachWriterJob$lambda($this_attachWriterJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        $this_attachWriterJob.x2e(cause);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ByteReadChannel$Companion$Empty$1() {
    this.r2g_1 = null;
    this.s2g_1 = new Buffer();
  }
  protoOf(ByteReadChannel$Companion$Empty$1).c2d = function () {
    return this.r2g_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).r2e = function () {
    return true;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).o2e = function () {
    return this.s2g_1;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).u2e = function (min, $completion) {
    return false;
  };
  protoOf(ByteReadChannel$Companion$Empty$1).x2e = function (cause) {
  };
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp = this;
    tmp.t2g_1 = new ByteReadChannel$Companion$Empty$1();
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function ByteReadChannel_1() {
  }
  function cancel_0(_this__u8e3s4) {
    _this__u8e3s4.x2e(IOException_init_$Create$('Channel was cancelled'));
  }
  function readBuffer(_this__u8e3s4, $completion) {
    var tmp = new $readBufferCOROUTINE$(_this__u8e3s4, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function toByteArray(_this__u8e3s4, $completion) {
    var tmp = new $toByteArrayCOROUTINE$(_this__u8e3s4, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function copyTo(_this__u8e3s4, channel, limit, $completion) {
    var tmp = new $copyToCOROUTINE$(_this__u8e3s4, channel, limit, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function rethrowCloseCauseIfNeeded_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.c2d();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function discard(_this__u8e3s4, max, $completion) {
    max = max === VOID ? 9223372036854775807n : max;
    var tmp = new $discardCOROUTINE$(_this__u8e3s4, max, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function copyTo_0(_this__u8e3s4, channel, $completion) {
    var tmp = new $copyToCOROUTINE$_0(_this__u8e3s4, channel, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function readAvailable(_this__u8e3s4, buffer, offset, length, $completion) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var tmp = new $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function skipIfFound(_this__u8e3s4, byteString, $completion) {
    var tmp = new $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function readPacket(_this__u8e3s4, packet, $completion) {
    var tmp = new $readPacketCOROUTINE$(_this__u8e3s4, packet, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function readUntil(_this__u8e3s4, matchString, writeChannel, limit, ignoreMissing, $completion) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    ignoreMissing = ignoreMissing === VOID ? false : ignoreMissing;
    return (new ByteChannelScanner(_this__u8e3s4, matchString, writeChannel, limit)).o2g(ignoreMissing, $completion);
  }
  function readLineStrictTo(_this__u8e3s4, out, limit, lineEnding, $completion) {
    limit = limit === VOID ? 9223372036854775807n : limit;
    lineEnding = lineEnding === VOID ? LineEnding_Default_getInstance() : lineEnding;
    // Inline function 'kotlin.require' call
    if (!(limit >= 0n)) {
      var message = 'Limit (' + limit.toString() + ') should be non-negative';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    return internalReadLineTo(_this__u8e3s4, out, limit, lineEnding.equals(LineEnding_Lenient_getInstance()), true, $completion);
  }
  function get_availableForRead(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.o2e().u1n().e1());
  }
  function peek(_this__u8e3s4, count, $completion) {
    var tmp = new $peekCOROUTINE$(_this__u8e3s4, count, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function internalReadLineTo(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion) {
    var tmp = new $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function throwEndOfStreamException(consumed) {
    throw EOFException_init_$Create$('Unexpected end of stream after reading ' + consumed.toString() + ' bytes');
  }
  function throwTooLongLineException(limit) {
    throw new TooLongLineException('Line exceeds limit of ' + limit.toString() + ' bytes');
  }
  function rethrowCloseCauseIfNeeded_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.c2d();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
  }
  function internalReadLineTo$bufferBytes(outBuffer, readBuffer, consumed, count) {
    if (count > 0n) {
      if (outBuffer._v == null) {
        outBuffer._v = new Buffer();
      }
      outBuffer._v.i1p(readBuffer, count);
      consumed._v = add(consumed._v, count);
    }
  }
  function internalReadLineTo$appendOrBuffer(outBuffer, $out, readBuffer, consumed, count) {
    if (outBuffer._v == null) {
      if (count > 0n) {
        $out.b1(readString(readBuffer, count));
        consumed._v = add(consumed._v, count);
      }
    } else {
      internalReadLineTo$bufferBytes(outBuffer, readBuffer, consumed, count);
    }
  }
  function internalReadLineTo$scanForSoleCr(_this__u8e3s4, $lenientLineEnding, lfIndex, limitLeft) {
    if (!$lenientLineEnding)
      return -1n;
    var tmp;
    if (lfIndex === -1n) {
      // Inline function 'kotlin.Long.minus' call
      var this_0 = get_remaining(_this__u8e3s4);
      // Inline function 'kotlin.comparisons.minOf' call
      var b = subtract(this_0, fromInt(1));
      tmp = limitLeft <= b ? limitLeft : b;
    } else if (lfIndex === 0n) {
      tmp = 0n;
    } else {
      // Inline function 'kotlin.Long.minus' call
      tmp = subtract(lfIndex, fromInt(1));
    }
    var endIndex = tmp;
    return indexOf(_this__u8e3s4, 13, VOID, endIndex);
  }
  function internalReadLineTo$discardCrlfOrCr(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion) {
    var tmp = new $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function $readBufferCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c2h_1 = _this__u8e3s4;
  }
  protoOf($readBufferCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.d2h_1 = new Buffer();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.c2h_1.r2e()) {
              this.i8_1 = 4;
              continue $sm;
            }

            if (this.c2h_1.o2e().v1n()) {
              this.i8_1 = 2;
              suspendResult = this.c2h_1.v2e(VOID, this);
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
            this.d2h_1.n1p(this.c2h_1.o2e());
            this.i8_1 = 1;
            continue $sm;
          case 4:
            rethrowCloseCauseIfNeeded_0(this.c2h_1);
            return this.d2h_1;
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
  function $toByteArrayCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m2h_1 = _this__u8e3s4;
  }
  protoOf($toByteArrayCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = readBuffer(this.m2h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return readBytes(ARGUMENT);
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
  function $copyToCOROUTINE$(_this__u8e3s4, channel, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v2h_1 = _this__u8e3s4;
    this.w2h_1 = channel;
    this.x2h_1 = limit;
  }
  protoOf($copyToCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 12;
            this.y2h_1 = this.x2h_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 8;
            this.j8_1 = 7;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            if (!(!this.v2h_1.r2e() && this.y2h_1 > 0n)) {
              this.i8_1 = 6;
              continue $sm;
            }

            if (this.v2h_1.o2e().v1n()) {
              this.i8_1 = 3;
              suspendResult = this.v2h_1.v2e(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 4;
              continue $sm;
            }

          case 3:
            this.i8_1 = 4;
            continue $sm;
          case 4:
            var tmp0 = this.y2h_1;
            var b = get_remaining(this.v2h_1.o2e());
            var count = tmp0 <= b ? tmp0 : b;
            this.v2h_1.o2e().x1o(this.w2h_1.p2e(), count);
            this.y2h_1 = subtract(this.y2h_1, count);
            this.i8_1 = 5;
            suspendResult = this.w2h_1.m2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.i8_1 = 2;
            continue $sm;
          case 6:
            this.j8_1 = 12;
            this.i8_1 = 10;
            continue $sm;
          case 7:
            this.j8_1 = 8;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              this.v2h_1.x2e(cause);
              close_0(this.w2h_1, cause);
              throw cause;
            } else {
              throw this.l8_1;
            }

          case 8:
            this.j8_1 = 12;
            this.z2h_1 = this.l8_1;
            this.i8_1 = 9;
            suspendResult = this.w2h_1.m2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            throw this.z2h_1;
          case 10:
            this.j8_1 = 12;
            this.i8_1 = 11;
            suspendResult = this.w2h_1.m2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            return subtract(this.x2h_1, this.y2h_1);
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
  function $discardCOROUTINE$(_this__u8e3s4, max, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i2i_1 = _this__u8e3s4;
    this.j2i_1 = max;
  }
  protoOf($discardCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.k2i_1 = this.j2i_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!(this.k2i_1 > 0n && !this.i2i_1.r2e())) {
              this.i8_1 = 4;
              continue $sm;
            }

            if (get_availableForRead(this.i2i_1) === 0) {
              this.i8_1 = 2;
              suspendResult = this.i2i_1.v2e(VOID, this);
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
            var tmp0 = this.k2i_1;
            var b = get_remaining(this.i2i_1.o2e());
            var count = tmp0 <= b ? tmp0 : b;
            discard_0(this.i2i_1.o2e(), count);
            this.k2i_1 = subtract(this.k2i_1, count);
            this.i8_1 = 1;
            continue $sm;
          case 4:
            return subtract(this.j2i_1, this.k2i_1);
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
  function $copyToCOROUTINE$_0(_this__u8e3s4, channel, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t2i_1 = _this__u8e3s4;
    this.u2i_1 = channel;
  }
  protoOf($copyToCOROUTINE$_0).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 11;
            this.v2i_1 = 0n;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 7;
            this.j8_1 = 6;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            if (!!this.t2i_1.r2e()) {
              this.i8_1 = 5;
              continue $sm;
            }

            this.v2i_1 = add(this.v2i_1, this.t2i_1.o2e().y1o(this.u2i_1.p2e()));
            this.i8_1 = 3;
            suspendResult = this.u2i_1.m2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.i8_1 = 4;
            suspendResult = this.t2i_1.v2e(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.i8_1 = 2;
            continue $sm;
          case 5:
            this.j8_1 = 11;
            this.i8_1 = 9;
            continue $sm;
          case 6:
            this.j8_1 = 7;
            var tmp_0 = this.l8_1;
            if (tmp_0 instanceof Error) {
              var cause = this.l8_1;
              this.t2i_1.x2e(cause);
              close_0(this.u2i_1, cause);
              throw cause;
            } else {
              throw this.l8_1;
            }

          case 7:
            this.j8_1 = 11;
            this.w2i_1 = this.l8_1;
            this.i8_1 = 8;
            suspendResult = this.u2i_1.m2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            throw this.w2i_1;
          case 9:
            this.j8_1 = 11;
            this.i8_1 = 10;
            suspendResult = this.u2i_1.m2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            return this.v2i_1;
          case 11:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 11) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function $readAvailableCOROUTINE$(_this__u8e3s4, buffer, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f2j_1 = _this__u8e3s4;
    this.g2j_1 = buffer;
    this.h2j_1 = offset;
    this.i2j_1 = length;
  }
  protoOf($readAvailableCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            if (this.f2j_1.r2e())
              return -1;
            if (this.f2j_1.o2e().v1n()) {
              this.i8_1 = 1;
              suspendResult = this.f2j_1.v2e(VOID, this);
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
            if (this.f2j_1.r2e())
              return -1;
            return readAvailable_0(this.f2j_1.o2e(), this.g2j_1, this.h2j_1, this.i2j_1);
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
  function $skipIfFoundCOROUTINE$(_this__u8e3s4, byteString, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r2j_1 = _this__u8e3s4;
    this.s2j_1 = byteString;
  }
  protoOf($skipIfFoundCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.i8_1 = 1;
            suspendResult = peek(this.r2j_1, this.s2j_1.e1(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (equals(ARGUMENT, this.s2j_1)) {
              this.i8_1 = 3;
              suspendResult = discard(this.r2j_1, fromInt(this.s2j_1.e1()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
          case 3:
            return true;
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
  function $readPacketCOROUTINE$(_this__u8e3s4, packet, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b2k_1 = _this__u8e3s4;
    this.c2k_1 = packet;
  }
  protoOf($readPacketCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.d2k_1 = new Buffer();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!(this.d2k_1.e1() < fromInt(this.c2k_1))) {
              this.i8_1 = 5;
              continue $sm;
            }

            if (this.b2k_1.o2e().v1n()) {
              this.i8_1 = 2;
              suspendResult = this.b2k_1.v2e(VOID, this);
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
            if (this.b2k_1.r2e()) {
              this.i8_1 = 5;
              continue $sm;
            } else {
              this.i8_1 = 4;
              continue $sm;
            }

          case 4:
            if (get_remaining(this.b2k_1.o2e()) > subtract(numberToLong(this.c2k_1), this.d2k_1.e1())) {
              this.b2k_1.o2e().x1o(this.d2k_1, subtract(numberToLong(this.c2k_1), this.d2k_1.e1()));
            } else {
              this.b2k_1.o2e().y1o(this.d2k_1);
            }

            this.i8_1 = 1;
            continue $sm;
          case 5:
            if (this.d2k_1.e1() < fromInt(this.c2k_1)) {
              throw EOFException_init_$Create$('Not enough data available, required ' + this.c2k_1 + ' bytes but only ' + this.d2k_1.e1().toString() + ' available');
            }

            return this.d2k_1;
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
  function $peekCOROUTINE$(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m2k_1 = _this__u8e3s4;
    this.n2k_1 = count;
  }
  protoOf($peekCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            if (this.m2k_1.r2e())
              return null;
            this.i8_1 = 1;
            suspendResult = this.m2k_1.u2e(this.n2k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!suspendResult) {
              return null;
            } else {
              this.i8_1 = 2;
              continue $sm;
            }

          case 2:
            return readByteString(this.m2k_1.o2e().z1o(), this.n2k_1);
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
  function $internalReadLineToCOROUTINE$(_this__u8e3s4, out, limit, lenientLineEnding, throwOnIncompleteLine, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w2k_1 = _this__u8e3s4;
    this.x2k_1 = out;
    this.y2k_1 = limit;
    this.z2k_1 = lenientLineEnding;
    this.a2l_1 = throwOnIncompleteLine;
  }
  protoOf($internalReadLineToCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 27;
            this.e2l_1 = this.w2k_1.o2e();
            if (this.e2l_1.v1n()) {
              this.i8_1 = 1;
              suspendResult = this.w2k_1.v2e(VOID, this);
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
            if (this.w2k_1.r2e())
              return -1n;
            this.d2l_1 = {_v: 0n};
            this.b2l_1 = {_v: null};
            this.i8_1 = 3;
            continue $sm;
          case 3:
            this.i8_1 = 4;
            continue $sm;
          case 4:
            this.j8_1 = 24;
            this.i8_1 = 5;
            continue $sm;
          case 5:
            if (!(this.d2l_1._v < this.y2k_1 && !this.w2k_1.r2e())) {
              this.i8_1 = 15;
              continue $sm;
            }

            this.h2l_1 = subtract(this.y2k_1, this.d2l_1._v);
            this.i2l_1 = indexOf(this.e2l_1, 10, VOID, this.h2l_1);
            var crIndex = internalReadLineTo$scanForSoleCr(this.e2l_1, this.z2k_1, this.i2l_1, this.h2l_1);
            if (crIndex >= 0n) {
              internalReadLineTo$appendOrBuffer(this.b2l_1, this.x2k_1, this.e2l_1, this.d2l_1, crIndex);
              discard_0(this.e2l_1, 1n);
              this.c2l_1 = this.d2l_1._v;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              this.i8_1 = 6;
              continue $sm;
            }

          case 6:
            if (this.i2l_1 === 0n) {
              discard_0(this.e2l_1, 1n);
              this.c2l_1 = this.d2l_1._v;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              this.i8_1 = 7;
              continue $sm;
            }

          case 7:
            if (this.i2l_1 > 0n) {
              var tmp_0;
              var tmp_1 = this.e2l_1.u1n();
              var this_0 = this.i2l_1;
              if (tmp_1.q1o(subtract(this_0, fromInt(1))) === 13) {
                tmp_0 = 1n;
              } else {
                tmp_0 = 0n;
              }
              var isCrlf = tmp_0;
              internalReadLineTo$appendOrBuffer(this.b2l_1, this.x2k_1, this.e2l_1, this.d2l_1, subtract(this.i2l_1, isCrlf));
              discard_0(this.e2l_1, add(numberToLong(1), isCrlf));
              this.c2l_1 = this.d2l_1._v;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              this.i8_1 = 8;
              continue $sm;
            }

          case 8:
            var tmp0 = this.h2l_1;
            var b = get_remaining(this.e2l_1);
            var count = tmp0 <= b ? tmp0 : b;
            var tmp_2 = this.e2l_1.u1n();
            if (tmp_2.q1o(subtract(count, fromInt(1))) === 13) {
              internalReadLineTo$appendOrBuffer(this.b2l_1, this.x2k_1, this.e2l_1, this.d2l_1, subtract(count, fromInt(1)));
              this.i8_1 = 9;
              suspendResult = internalReadLineTo$discardCrlfOrCr(this.e2l_1, this.w2k_1, this.z2k_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              internalReadLineTo$bufferBytes(this.b2l_1, this.e2l_1, this.d2l_1, count);
              this.i8_1 = 11;
              continue $sm;
            }

          case 9:
            if (suspendResult) {
              this.c2l_1 = this.d2l_1._v;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              internalReadLineTo$bufferBytes(this.b2l_1, this.e2l_1, this.d2l_1, 1n);
              this.i8_1 = 10;
              continue $sm;
            }

          case 10:
            this.i8_1 = 11;
            continue $sm;
          case 11:
            if (this.d2l_1._v < this.y2k_1 && get_remaining(this.e2l_1) === 0n) {
              this.i8_1 = 12;
              suspendResult = this.w2k_1.v2e(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.g2l_1 = false;
              this.i8_1 = 13;
              continue $sm;
            }

          case 12:
            this.g2l_1 = !suspendResult;
            this.i8_1 = 13;
            continue $sm;
          case 13:
            if (this.g2l_1) {
              this.i8_1 = 15;
              continue $sm;
            } else {
              this.i8_1 = 14;
              continue $sm;
            }

          case 14:
            this.i8_1 = 5;
            continue $sm;
          case 15:
            if (this.d2l_1._v === 0n && this.w2k_1.r2e()) {
              this.c2l_1 = -1n;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              this.i8_1 = 16;
              continue $sm;
            }

          case 16:
            if (!(this.d2l_1._v <= this.y2k_1)) {
              var message = 'Consumed bytes exceed the limit: ' + this.d2l_1._v.toString() + ' > ' + this.y2k_1.toString() + ". It's an implementation bug, please report it.";
              throw IllegalStateException_init_$Create$(toString_1(message));
            }

            if (this.d2l_1._v === this.y2k_1) {
              if (this.y2k_1 === 9223372036854775807n)
                throw new TooLongLineException('Max line length exceeded');
              if (get_remaining(this.e2l_1) === 0n) {
                this.i8_1 = 18;
                suspendResult = this.w2k_1.v2e(VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.f2l_1 = false;
                this.i8_1 = 19;
                continue $sm;
              }
            } else {
              this.i8_1 = 17;
              continue $sm;
            }

          case 17:
            if (this.a2l_1) {
              throwEndOfStreamException(this.d2l_1._v);
            }

            this.c2l_1 = this.d2l_1._v;
            this.j8_1 = 27;
            this.i8_1 = 25;
            var tmp_3 = this;
            continue $sm;
          case 18:
            this.f2l_1 = !suspendResult;
            this.i8_1 = 19;
            continue $sm;
          case 19:
            if (this.f2l_1) {
              throwEndOfStreamException(this.d2l_1._v);
            } else {
              this.i8_1 = 20;
              continue $sm;
            }

            break;
          case 20:
            var tmp0_subject = this.e2l_1.u1n().q1o(0n);
            if (tmp0_subject === 10) {
              discard_0(this.e2l_1, 1n);
              this.c2l_1 = this.d2l_1._v;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              if (tmp0_subject === 13) {
                this.i8_1 = 21;
                suspendResult = internalReadLineTo$discardCrlfOrCr(this.e2l_1, this.w2k_1, this.z2k_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.i8_1 = 23;
                continue $sm;
              }
            }

          case 21:
            if (suspendResult) {
              this.c2l_1 = this.d2l_1._v;
              this.j8_1 = 27;
              this.i8_1 = 25;
              continue $sm;
            } else {
              this.i8_1 = 22;
              continue $sm;
            }

          case 22:
            this.i8_1 = 23;
            continue $sm;
          case 23:
            throwTooLongLineException(this.y2k_1);
            break;
          case 24:
            this.j8_1 = 27;
            var t = this.l8_1;
            if (!(this.b2l_1._v == null)) {
              this.x2k_1.b1(readString_0(this.b2l_1._v));
            }

            throw t;
          case 25:
            var tmp_4 = this.c2l_1;
            this.j8_1 = 27;
            if (!(this.b2l_1._v == null)) {
              this.x2k_1.b1(readString_0(this.b2l_1._v));
            }

            return tmp_4;
          case 26:
            this.j8_1 = 27;
            if (!(this.b2l_1._v == null)) {
              this.x2k_1.b1(readString_0(this.b2l_1._v));
            }

            return Unit_instance;
          case 27:
            throw this.l8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.j8_1 === 27) {
          throw e;
        } else {
          this.i8_1 = this.j8_1;
          this.l8_1 = e;
        }
      }
     while (true);
  };
  function $internalReadLineTo$discardCrlfOrCrCOROUTINE$(_this__u8e3s4, $this_internalReadLineTo, $lenientLineEnding, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r2l_1 = _this__u8e3s4;
    this.s2l_1 = $this_internalReadLineTo;
    this.t2l_1 = $lenientLineEnding;
  }
  protoOf($internalReadLineTo$discardCrlfOrCrCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            if (get_remaining(this.r2l_1) >= 2n) {
              this.v2l_1 = true;
              this.i8_1 = 2;
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = this.s2l_1.u2e(2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.v2l_1 = suspendResult;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            if (this.v2l_1) {
              this.u2l_1 = this.r2l_1.u1n().q1o(1n) === 10;
              this.i8_1 = 3;
              continue $sm;
            } else {
              this.u2l_1 = false;
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            if (this.u2l_1) {
              discard_0(this.r2l_1, 2n);
              return true;
            } else {
              this.i8_1 = 4;
              continue $sm;
            }

          case 4:
            if (this.t2l_1) {
              discard_0(this.r2l_1, 1n);
              return true;
            }

            return false;
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
  function ByteWriteChannel() {
  }
  function flushIfNeeded(_this__u8e3s4, $completion) {
    var tmp = new $flushIfNeededCOROUTINE$(_this__u8e3s4, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function $flushIfNeededCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e2m_1 = _this__u8e3s4;
  }
  protoOf($flushIfNeededCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            rethrowCloseCauseIfNeeded_1(this.e2m_1);
            if (this.e2m_1.n2e() || get_size(this.e2m_1.p2e()) >= 1048576) {
              this.i8_1 = 1;
              suspendResult = this.e2m_1.m2e(this);
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
  function ByteWriteChannel$flushAndClose$ref(p0) {
    var i = new ByteWriteChannel$flushAndClose$ref_0(p0);
    return constructCallableReference(function ($completion) {
      return i.j2m($completion);
    }, 0, 1, 15, 'flushAndClose', [p0]);
  }
  function get_NO_CALLBACK() {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return NO_CALLBACK;
  }
  var NO_CALLBACK;
  function WriterJob(channel, job) {
    this.p2g_1 = channel;
    this.q2g_1 = job;
  }
  protoOf(WriterJob).n1x = function () {
    return this.q2g_1;
  };
  function writer(_this__u8e3s4, coroutineContext, channel, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_instance : coroutineContext;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    // Inline function 'kotlin.apply' call
    var this_0 = launch(_this__u8e3s4, coroutineContext, VOID, writer$slambda_0(block, channel, null));
    this_0.i1s(writer$lambda(channel));
    var job = this_0;
    return new WriterJob(channel, job);
  }
  function WriterScope(channel, coroutineContext) {
    this.k2m_1 = channel;
    this.l2m_1 = coroutineContext;
  }
  protoOf(WriterScope).g1r = function () {
    return this.l2m_1;
  };
  function invokeOnCompletion(_this__u8e3s4, block) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return _this__u8e3s4.n1x().i1s(block);
  }
  function writeFully(_this__u8e3s4, value, startIndex, endIndex, $completion) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? value.length : endIndex;
    _this__u8e3s4.p2e().e1p(value, startIndex, endIndex);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function close_0(_this__u8e3s4, cause) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    if (cause == null) {
      fireAndForget(ByteWriteChannel$flushAndClose$ref(_this__u8e3s4));
    } else {
      _this__u8e3s4.x2e(cause);
    }
  }
  function writePacket(_this__u8e3s4, source, $completion) {
    var tmp = new $writePacketCOROUTINE$(_this__u8e3s4, source, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function writer_0(_this__u8e3s4, coroutineContext, autoFlush, block) {
    coroutineContext = coroutineContext === VOID ? EmptyCoroutineContext_instance : coroutineContext;
    autoFlush = autoFlush === VOID ? false : autoFlush;
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    return writer(_this__u8e3s4, coroutineContext, new ByteChannel(autoFlush), block);
  }
  function fireAndForget(_this__u8e3s4) {
    _init_properties_ByteWriteChannelOperations_kt__i7slrs();
    startCoroutineCancellable(_this__u8e3s4, get_NO_CALLBACK());
  }
  function writeByte(_this__u8e3s4, value, $completion) {
    _this__u8e3s4.p2e().o1p(value);
    return flushIfNeeded(_this__u8e3s4, $completion);
  }
  function NO_CALLBACK$1() {
    this.w2m_1 = EmptyCoroutineContext_instance;
  }
  protoOf(NO_CALLBACK$1).o8 = function () {
    return this.w2m_1;
  };
  protoOf(NO_CALLBACK$1).p8 = function (result) {
    return Unit_instance;
  };
  protoOf(NO_CALLBACK$1).t8 = function (result) {
    return this.p8(result);
  };
  function writer$slambda($block, $channel, resultContinuation) {
    this.f2n_1 = $block;
    this.g2n_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(writer$slambda).o2n = function ($this$launch, $completion) {
    var tmp = this.p2n($this$launch, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(writer$slambda).e9 = function (p1, $completion) {
    return this.o2n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(writer$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 14;
            this.k2n_1 = Job(get_job(this.h2n_1.g1r()));
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j8_1 = 4;
            this.j8_1 = 3;
            this.i8_1 = 2;
            suspendResult = this.f2n_1(new WriterScope(this.g2n_1, this.h2n_1.g1r().if(this.k2n_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.k2n_1.i1y();
            var tmp_0;
            if (get_job(this.h2n_1.g1r()).c1s()) {
              this.g2n_1.x2e(get_job(this.h2n_1.g1r()).f1s());
              tmp_0 = Unit_instance;
            }

            this.j8_1 = 14;
            this.i8_1 = 9;
            continue $sm;
          case 3:
            this.j8_1 = 4;
            var tmp_1 = this.l8_1;
            if (tmp_1 instanceof Error) {
              var cause = this.l8_1;
              cancel(this.k2n_1, 'Exception thrown while writing to channel', cause);
              this.g2n_1.x2e(cause);
              this.j8_1 = 14;
              this.i8_1 = 9;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 4:
            this.j8_1 = 14;
            this.l2n_1 = this.l8_1;
            this.i8_1 = 5;
            suspendResult = this.k2n_1.m1s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.h2n_1;
            this.j8_1 = 7;
            this.n2n_1 = Companion_instance;
            this.i8_1 = 6;
            suspendResult = this.g2n_1.w2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            this.n2n_1;
            tmp_2.m2n_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.j8_1 = 14;
            this.i8_1 = 8;
            continue $sm;
          case 7:
            this.j8_1 = 14;
            var tmp_3 = this.l8_1;
            if (tmp_3 instanceof Error) {
              var e = this.l8_1;
              var tmp_4 = this;
              tmp_4.m2n_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.i8_1 = 8;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 8:
            this.j8_1 = 14;
            throw this.l2n_1;
          case 9:
            this.j8_1 = 14;
            this.i8_1 = 10;
            suspendResult = this.k2n_1.m1s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.h2n_1;
            this.j8_1 = 12;
            this.j2n_1 = Companion_instance;
            this.i8_1 = 11;
            suspendResult = this.g2n_1.w2e(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var tmp_5 = this;
            this.j2n_1;
            tmp_5.i2n_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.j8_1 = 14;
            this.i8_1 = 13;
            continue $sm;
          case 12:
            this.j8_1 = 14;
            var tmp_6 = this.l8_1;
            if (tmp_6 instanceof Error) {
              var e_0 = this.l8_1;
              var tmp_7 = this;
              tmp_7.i2n_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.i8_1 = 13;
              continue $sm;
            } else {
              throw this.l8_1;
            }

          case 13:
            this.j8_1 = 14;
            return Unit_instance;
          case 14:
            throw this.l8_1;
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
  protoOf(writer$slambda).p2n = function ($this$launch, completion) {
    var i = new writer$slambda(this.f2n_1, this.g2n_1, completion);
    i.h2n_1 = $this$launch;
    return i;
  };
  function writer$slambda_0($block, $channel, resultContinuation) {
    var i = new writer$slambda($block, $channel, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.o2n($this$launch, $completion);
    }, 1);
  }
  function writer$lambda($channel) {
    return function (it) {
      var tmp;
      if (!(it == null) && !$channel.q2e()) {
        $channel.x2e(it);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ByteWriteChannel$flushAndClose$ref_0(p0) {
    KFunctionImpl.call(this, 1, 1, 15);
    this.i2m_1 = p0;
  }
  protoOf(ByteWriteChannel$flushAndClose$ref_0).j2m = function ($completion) {
    return this.i2m_1.w2e($completion);
  };
  protoOf(ByteWriteChannel$flushAndClose$ref_0).d9 = function ($completion) {
    return this.j2m($completion);
  };
  function $writePacketCOROUTINE$(_this__u8e3s4, source, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u2m_1 = _this__u8e3s4;
    this.v2m_1 = source;
  }
  protoOf($writePacketCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.v2m_1.v1n()) {
              this.i8_1 = 3;
              continue $sm;
            }

            this.u2m_1.p2e().i1p(this.v2m_1, get_remaining(this.v2m_1));
            this.i8_1 = 2;
            suspendResult = flushIfNeeded(this.u2m_1, this);
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
  var properties_initialized_ByteWriteChannelOperations_kt_acrf6u;
  function _init_properties_ByteWriteChannelOperations_kt__i7slrs() {
    if (!properties_initialized_ByteWriteChannelOperations_kt_acrf6u) {
      properties_initialized_ByteWriteChannelOperations_kt_acrf6u = true;
      NO_CALLBACK = new NO_CALLBACK$1();
    }
  }
  function get_CLOSED() {
    _init_properties_CloseToken_kt__9ucr41();
    return CLOSED;
  }
  var CLOSED;
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function access$_get_origin__hdh1qz($this) {
    return $this.s2e_1;
  }
  function CloseToken(origin) {
    this.s2e_1 = origin;
  }
  protoOf(CloseToken).t2e = function () {
    return !(this.s2e_1 == null);
  };
  var properties_initialized_CloseToken_kt_lgg8zn;
  function _init_properties_CloseToken_kt__9ucr41() {
    if (!properties_initialized_CloseToken_kt_lgg8zn) {
      properties_initialized_CloseToken_kt_lgg8zn = true;
      CLOSED = new CloseToken(null);
    }
  }
  function transferFromDelegate($this) {
    updateConsumed($this);
    var appended = $this.r2n_1.n1p($this.q2n_1.o2e());
    $this.s2n_1 = add($this.s2n_1, appended);
  }
  function updateConsumed($this) {
    $this.t2n_1 = add($this.t2n_1, subtract($this.s2n_1, $this.r2n_1.e1()));
    $this.s2n_1 = $this.r2n_1.e1();
  }
  function $awaitContentCOROUTINE$_0(_this__u8e3s4, min, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c2o_1 = _this__u8e3s4;
    this.d2o_1 = min;
  }
  protoOf($awaitContentCOROUTINE$_0).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            if (this.c2o_1.o2e().e1() >= fromInt(this.d2o_1)) {
              return true;
            }

            this.i8_1 = 1;
            suspendResult = this.c2o_1.q2n_1.u2e(this.d2o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              transferFromDelegate(this.c2o_1);
              return true;
            } else {
              this.i8_1 = 2;
              continue $sm;
            }

          case 2:
            return false;
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
  function CountedByteReadChannel(delegate) {
    this.q2n_1 = delegate;
    this.r2n_1 = new Buffer();
    this.s2n_1 = 0n;
    this.t2n_1 = 0n;
  }
  protoOf(CountedByteReadChannel).e2o = function () {
    updateConsumed(this);
    return this.t2n_1;
  };
  protoOf(CountedByteReadChannel).c2d = function () {
    return this.q2n_1.c2d();
  };
  protoOf(CountedByteReadChannel).r2e = function () {
    return this.r2n_1.v1n() && this.q2n_1.r2e();
  };
  protoOf(CountedByteReadChannel).o2e = function () {
    transferFromDelegate(this);
    return this.r2n_1;
  };
  protoOf(CountedByteReadChannel).u2e = function (min, $completion) {
    var tmp = new $awaitContentCOROUTINE$_0(this, min, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(CountedByteReadChannel).x2e = function (cause) {
    this.q2n_1.x2e(cause);
    this.r2n_1.t3();
  };
  function counted(_this__u8e3s4) {
    return new CountedByteReadChannel(_this__u8e3s4);
  }
  function readText(_this__u8e3s4) {
    return readString_1(_this__u8e3s4);
  }
  function ClosedByteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    IOException_init_$Init$(cause == null ? null : cause.message, cause, this);
    captureStack(this, ClosedByteChannelException);
  }
  function ClosedReadChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedReadChannelException);
  }
  function ClosedWriteChannelException(cause) {
    cause = cause === VOID ? null : cause;
    ClosedByteChannelException.call(this, cause);
    captureStack(this, ClosedWriteChannelException);
  }
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    LineEnding_Default_instance = new LineEnding('Default', 0);
    LineEnding_Lenient_instance = new LineEnding('Lenient', 1);
  }
  var LineEnding_Default_instance;
  var LineEnding_Lenient_instance;
  function LineEnding(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LineEnding_Default_getInstance() {
    static_init();
    return LineEnding_Default_instance;
  }
  function LineEnding_Lenient_getInstance() {
    static_init();
    return LineEnding_Lenient_instance;
  }
  function _LineEndingMode___init__impl__jo5bul(mode) {
    return mode;
  }
  function _get_mode__dah3bc($this) {
    return $this;
  }
  function LineEndingMode__contains_impl_q5pr68($this, other) {
    return (_get_mode__dah3bc($this) | _get_mode__dah3bc(other)) === _get_mode__dah3bc($this);
  }
  function LineEndingMode__plus_impl_ttpz2j($this, other) {
    return _LineEndingMode___init__impl__jo5bul(_get_mode__dah3bc($this) | _get_mode__dah3bc(other));
  }
  function LineEndingMode__toString_impl_j4h76r($this) {
    var tmp;
    if (equals(new LineEndingMode($this), new LineEndingMode(Companion_getInstance_2().f2o_1))) {
      tmp = 'CR';
    } else if (equals(new LineEndingMode($this), new LineEndingMode(Companion_getInstance_2().g2o_1))) {
      tmp = 'LF';
    } else if (equals(new LineEndingMode($this), new LineEndingMode(Companion_getInstance_2().h2o_1))) {
      tmp = 'CRLF';
    } else {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = Companion_getInstance_2().j2o_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.t();
      while (_iterator__ex2g4s.u()) {
        var element = _iterator__ex2g4s.v();
        var it = element.k2o_1;
        if (LineEndingMode__contains_impl_q5pr68($this, it)) {
          destination.c1(element);
        }
      }
      tmp = toString_1(destination);
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.f2o_1 = _LineEndingMode___init__impl__jo5bul(1);
    this.g2o_1 = _LineEndingMode___init__impl__jo5bul(2);
    this.h2o_1 = _LineEndingMode___init__impl__jo5bul(4);
    this.i2o_1 = _LineEndingMode___init__impl__jo5bul(7);
    this.j2o_1 = listOf([new LineEndingMode(this.f2o_1), new LineEndingMode(this.g2o_1), new LineEndingMode(this.h2o_1)]);
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function LineEndingMode__hashCode_impl_2mopm4($this) {
    return $this;
  }
  function LineEndingMode__equals_impl_qyr4nk($this, other) {
    if (!(other instanceof LineEndingMode))
      return false;
    if (!($this === other.k2o_1))
      return false;
    return true;
  }
  function LineEndingMode(mode) {
    Companion_getInstance_2();
    this.k2o_1 = mode;
  }
  protoOf(LineEndingMode).toString = function () {
    return LineEndingMode__toString_impl_j4h76r(this.k2o_1);
  };
  protoOf(LineEndingMode).hashCode = function () {
    return LineEndingMode__hashCode_impl_2mopm4(this.k2o_1);
  };
  protoOf(LineEndingMode).equals = function (other) {
    return LineEndingMode__equals_impl_qyr4nk(this.k2o_1, other);
  };
  function SourceByteReadChannel(source) {
    this.l2o_1 = source;
    this.m2o_1 = null;
  }
  protoOf(SourceByteReadChannel).c2d = function () {
    var tmp0_safe_receiver = this.m2o_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'io.ktor.utils.io.Companion.wrapCause' call
      var tmp0_subject = access$_get_origin__hdh1qz(tmp0_safe_receiver);
      var tmp_0;
      if (tmp0_subject == null) {
        tmp_0 = null;
      } else {
        if (isInterface(tmp0_subject, CopyableThrowable)) {
          tmp_0 = access$_get_origin__hdh1qz(tmp0_safe_receiver).r1y();
        } else {
          if (tmp0_subject instanceof CancellationException) {
            tmp_0 = CancellationException_init_$Create$(access$_get_origin__hdh1qz(tmp0_safe_receiver).message, access$_get_origin__hdh1qz(tmp0_safe_receiver));
          } else {
            var p0 = access$_get_origin__hdh1qz(tmp0_safe_receiver);
            tmp_0 = new ClosedByteChannelException(p0);
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(SourceByteReadChannel).r2e = function () {
    return this.l2o_1.v1n();
  };
  protoOf(SourceByteReadChannel).o2e = function () {
    var tmp0_safe_receiver = this.c2d();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.l2o_1.u1n();
  };
  protoOf(SourceByteReadChannel).u2e = function (min, $completion) {
    var tmp0_safe_receiver = this.c2d();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp0_safe_receiver;
    }
    return this.l2o_1.x1n(fromInt(min));
  };
  protoOf(SourceByteReadChannel).x2e = function (cause) {
    if (!(this.m2o_1 == null))
      return Unit_instance;
    this.l2o_1.t3();
    var tmp = this;
    var tmp1_elvis_lhs = cause == null ? null : cause.message;
    tmp.m2o_1 = new CloseToken(IOException_init_$Create$_0(tmp1_elvis_lhs == null ? 'Channel was cancelled' : tmp1_elvis_lhs, cause));
  };
  function decode(_this__u8e3s4, input, max) {
    max = max === VOID ? 2147483647 : max;
    var tmp0 = fromInt(max);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = input.u1n().e1();
    var tmp$ret$0 = tmp0 <= b ? tmp0 : b;
    // Inline function 'kotlin.text.buildString' call
    var capacity = convertToInt(tmp$ret$0);
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    decode_0(_this__u8e3s4, input, this_0, max);
    return this_0.toString();
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
    return builder;
  }
  function TooLongLineException(message) {
    MalformedInputException.call(this, message);
    captureStack(this, TooLongLineException);
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return Unit_instance;
    $l$loop: while (true) {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, destination);
      // Inline function 'kotlin.check' call
      if (!(rc >= 0)) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      start = start + rc | 0;
      if (start >= toIndex)
        break $l$loop;
    }
  }
  function canRead(_this__u8e3s4) {
    return !_this__u8e3s4.v1n();
  }
  function readBytes(_this__u8e3s4, count) {
    count = count === VOID ? convertToInt(_this__u8e3s4.e1()) : count;
    return readByteArray(_this__u8e3s4, count);
  }
  function BytePacketBuilder() {
    return new Buffer();
  }
  function writeFully_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    _this__u8e3s4.e1p(buffer, offset, offset + length | 0);
  }
  function build(_this__u8e3s4) {
    return _this__u8e3s4.u1n();
  }
  function get_size(_this__u8e3s4) {
    return convertToInt(_this__u8e3s4.u1n().e1());
  }
  var ByteReadPacketEmpty;
  function ByteReadPacket(array, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? array.length : length;
    _init_properties_ByteReadPacket_kt__28475y();
    // Inline function 'kotlin.apply' call
    var this_0 = new Buffer();
    this_0.e1p(array, offset, offset + length | 0);
    return this_0;
  }
  function get_remaining(_this__u8e3s4) {
    _init_properties_ByteReadPacket_kt__28475y();
    return _this__u8e3s4.u1n().e1();
  }
  function takeWhile(_this__u8e3s4, block) {
    _init_properties_ByteReadPacket_kt__28475y();
    while (!_this__u8e3s4.v1n() && block(_this__u8e3s4.u1n())) {
    }
  }
  function discard_0(_this__u8e3s4, count) {
    count = count === VOID ? 9223372036854775807n : count;
    _init_properties_ByteReadPacket_kt__28475y();
    _this__u8e3s4.x1n(count);
    // Inline function 'kotlin.comparisons.minOf' call
    var b = get_remaining(_this__u8e3s4);
    var countToDiscard = count <= b ? count : b;
    _this__u8e3s4.u1n().s1o(countToDiscard);
    return countToDiscard;
  }
  var properties_initialized_ByteReadPacket_kt_hw4st4;
  function _init_properties_ByteReadPacket_kt__28475y() {
    if (!properties_initialized_ByteReadPacket_kt_hw4st4) {
      properties_initialized_ByteReadPacket_kt_hw4st4 = true;
      ByteReadPacketEmpty = new Buffer();
    }
  }
  function readAvailable_0(_this__u8e3s4, buffer, offset, length) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? buffer.length - offset | 0 : length;
    var result = _this__u8e3s4.t1o(buffer, offset, offset + length | 0);
    return result === -1 ? 0 : result;
  }
  function toByteArray_0(_this__u8e3s4, charset) {
    charset = charset === VOID ? Charsets_getInstance().n2o_1 : charset;
    if (charset.equals(Charsets_getInstance().n2o_1))
      return encodeToByteArray(_this__u8e3s4);
    return encodeToByteArray_0(charset.q2o(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(text) : toIndex;
    charset = charset === VOID ? Charsets_getInstance().n2o_1 : charset;
    if (charset === Charsets_getInstance().n2o_1) {
      return writeString(_this__u8e3s4, toString_1(text), fromIndex, toIndex);
    }
    encodeToImpl(charset.q2o(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function get_ByteArrayPool() {
    _init_properties_ByteArrayPool_kt__kfi3uj();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  protoOf(ByteArrayPool$1).u2o = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function _init_properties_ByteArrayPool_kt__kfi3uj() {
    if (!properties_initialized_ByteArrayPool_kt_td6pfh) {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  function NoPoolImpl() {
  }
  protoOf(NoPoolImpl).c2p = function (instance) {
    return Unit_instance;
  };
  protoOf(NoPoolImpl).c1v = function () {
    return Unit_instance;
  };
  function MalformedInputException(message) {
    IOException_init_$Init$_0(message, this);
    captureStack(this, MalformedInputException);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).d2p = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().n2o_1;
    }
    var tmp;
    var tmp_0;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_0 = true;
        break;
      default:
        // Inline function 'kotlin.let' call

        var it = replace_0(name, _Char___init__impl__6a9atx(95), _Char___init__impl__6a9atx(45));
        var tmp_1;
        if (it === 'iso-8859-1') {
          tmp_1 = true;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = it.toLowerCase() === 'iso-8859-1';
        }

        tmp_0 = tmp_1;
        break;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'latin1' || name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().o2o_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function Charset(_name) {
    this.p2o_1 = _name;
  }
  protoOf(Charset).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !(this.constructor == other.constructor))
      return false;
    if (!(other instanceof Charset))
      THROW_CCE();
    return this.p2o_1 === other.p2o_1;
  };
  protoOf(Charset).hashCode = function () {
    return getStringHashCode(this.p2o_1);
  };
  protoOf(Charset).toString = function () {
    return this.p2o_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.p2o_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.n2o_1 = new CharsetImpl('UTF-8');
    this.o2o_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function CharsetDecoder(_charset) {
    this.f2p_1 = _charset;
  }
  function CharsetEncoder(_charset) {
    this.g2p_1 = _charset;
  }
  function forName(_this__u8e3s4, name) {
    return Companion_instance_4.d2p(name);
  }
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    input.x1n(fromInt(max));
    var tmp0 = input.u1n().e1();
    // Inline function 'kotlin.comparisons.minOf' call
    var b = fromInt(max);
    var count = tmp0 <= b ? tmp0 : b;
    var array = readByteArray(input, convertToInt(count));
    var tmp;
    try {
      // Inline function 'org.khronos.webgl.toInt8Array' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = decoder.h2p(array);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        var tmp0_elvis_lhs = cause.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
    var result = tmp;
    dst.b1(result);
    return result.length;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(fromIndex <= toIndex)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().o2o_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    if (!(get_charset_0(_this__u8e3s4) === Charsets_getInstance().n2o_1)) {
      var message_0 = 'Only UTF-8 encoding is supported in JS';
      throw IllegalArgumentException_init_$Create$(toString_1(message_0));
    }
    var encoder = new TextEncoder();
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$5 = toString_1(charSequenceSubSequence(input, fromIndex, toIndex));
    var result = encoder.encode(tmp$ret$5);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    dst.h1p(result);
    return result.length;
  }
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    return encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
  }
  protoOf(CharsetImpl).q2o = function () {
    return new CharsetEncoderImpl(this);
  };
  protoOf(CharsetImpl).e2p = function () {
    return new CharsetDecoderImpl(this);
  };
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.f2p_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.g2p_1;
  }
  function encodeToByteArrayImpl(_this__u8e3s4, input, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? charSequenceLength(input) : toIndex;
    var start = fromIndex;
    if (start >= toIndex)
      return new Int8Array(0);
    var dst = new Buffer();
    var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, dst);
    start = start + rc | 0;
    if (start === toIndex) {
      return readByteArray_0(dst);
    }
    encodeToImpl(_this__u8e3s4, dst, input, start, toIndex);
    return readByteArray_0(dst);
  }
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.k2p_1 = charset;
  }
  protoOf(CharsetEncoderImpl).toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.k2p_1.toString() + ')';
  };
  protoOf(CharsetEncoderImpl).hashCode = function () {
    return this.k2p_1.hashCode();
  };
  protoOf(CharsetEncoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    if (!this.k2p_1.equals(other.k2p_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.m2p_1 = charset;
  }
  protoOf(CharsetDecoderImpl).toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.m2p_1.toString() + ')';
  };
  protoOf(CharsetDecoderImpl).hashCode = function () {
    return this.m2p_1.hashCode();
  };
  protoOf(CharsetDecoderImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    if (!this.m2p_1.equals(other.m2p_1))
      return false;
    return true;
  };
  function Decoder(encoding, fatal) {
    fatal = fatal === VOID ? true : fatal;
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var cause = $p;
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    fatal = fatal === VOID ? false : fatal;
    // Inline function 'kotlin.apply' call
    var this_0 = new Object();
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.with' call
    this_0.fatal = fatal;
    return this_0;
  }
  function toKtor$1($this_toKtor) {
    this.n2p_1 = $this_toKtor;
  }
  protoOf(toKtor$1).h2p = function (buffer) {
    return this.n2p_1.decode(buffer);
  };
  function get_ENCODING_ALIASES() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.o2p_1 = fatal;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestedEncoding = toString_1(trim(isCharSequence(encoding) ? encoding : THROW_CCE())).toLowerCase();
    // Inline function 'kotlin.check' call
    if (!get_ENCODING_ALIASES().i2(requestedEncoding)) {
      var message = encoding + ' is not supported.';
      throw IllegalStateException_init_$Create$(toString_1(message));
    }
  }
  protoOf(TextDecoderFallback).h2p = function (buffer) {
    // Inline function 'io.ktor.utils.io.core.buildPacket' call
    var builder = new Buffer();
    var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
    var inductionVariable = 0;
    var last = bytes.length;
    if (inductionVariable < last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var byte = bytes[index];
        var point = toCodePoint(byte);
        if (point < 0) {
          // Inline function 'kotlin.check' call
          if (!!this.o2p_1) {
            var message = 'Invalid character: ' + point;
            throw IllegalStateException_init_$Create$(toString_1(message));
          }
          writeFully_0(builder, get_REPLACEMENT());
          continue $l$loop;
        }
        if (point > 255) {
          builder.o1p(toByte(point >> 8));
        }
        builder.o1p(toByte(point & 255));
      }
       while (inductionVariable < last);
    return decodeToString_0(readByteArray_0(builder));
  };
  function toCodePoint(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    _init_properties_TextDecoderFallback_js_kt__an7r6m();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_js_kt_6rekzk;
  function _init_properties_TextDecoderFallback_js_kt__an7r6m() {
    if (!properties_initialized_TextDecoderFallback_js_kt_6rekzk) {
      properties_initialized_TextDecoderFallback_js_kt_6rekzk = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      // Inline function 'kotlin.byteArrayOf' call
      REPLACEMENT = new Int8Array([-17, -65, -67]);
    }
  }
  function readText_0(_this__u8e3s4, charset, max) {
    charset = charset === VOID ? Charsets_getInstance().n2o_1 : charset;
    max = max === VOID ? 2147483647 : max;
    if (charset.equals(Charsets_getInstance().n2o_1)) {
      if (max === 2147483647)
        return readString_1(_this__u8e3s4);
      _this__u8e3s4.x1n(fromInt(max));
      var tmp0 = _this__u8e3s4.u1n().e1();
      // Inline function 'kotlin.math.min' call
      var b = fromInt(max);
      var count = tmp0 <= b ? tmp0 : b;
      return readString(_this__u8e3s4, count);
    }
    return decode(charset.e2p(), _this__u8e3s4, max);
  }
  function get_DEVELOPMENT_MODE() {
    return false;
  }
  function ioDispatcher() {
    return Dispatchers_getInstance().f22_1;
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(input, index);
        var character = Char__toInt_impl_vasixd(this_0);
        if (character > 255) {
          failedToMapError(character);
        }
        dst.o1p(toByte(character));
      }
       while (inductionVariable < toIndex);
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function get_WIN1252_TABLE() {
    _init_properties_Win1252Table_kt__tl0v64();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function _init_properties_Win1252Table_kt__tl0v64() {
    if (!properties_initialized_Win1252Table_kt_pkmjoq) {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      // Inline function 'kotlin.intArrayOf' call
      WIN1252_TABLE = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
    }
  }
  function DefaultPool(capacity) {
    this.v2o_1 = capacity;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.v2o_1;
    tmp.w2o_1 = Array(size);
    this.x2o_1 = 0;
  }
  protoOf(DefaultPool).y2o = function (instance) {
  };
  protoOf(DefaultPool).z2o = function (instance) {
    return instance;
  };
  protoOf(DefaultPool).a2p = function (instance) {
  };
  protoOf(DefaultPool).b2p = function () {
    if (this.x2o_1 === 0)
      return this.u2o();
    this.x2o_1 = this.x2o_1 - 1 | 0;
    var idx = this.x2o_1;
    var tmp = this.w2o_1[idx];
    var instance = !(tmp == null) ? tmp : THROW_CCE();
    this.w2o_1[idx] = null;
    return this.z2o(instance);
  };
  protoOf(DefaultPool).c2p = function (instance) {
    this.a2p(instance);
    if (this.x2o_1 === this.v2o_1) {
      this.y2o(instance);
    } else {
      var _unary__edvuaz = this.x2o_1;
      this.x2o_1 = _unary__edvuaz + 1 | 0;
      this.w2o_1[_unary__edvuaz] = instance;
    }
  };
  protoOf(DefaultPool).c1v = function () {
    var inductionVariable = 0;
    var last = this.x2o_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.w2o_1[i];
        var instance = !(tmp == null) ? tmp : THROW_CCE();
        this.w2o_1[i] = null;
        this.y2o(instance);
      }
       while (inductionVariable < last);
    this.x2o_1 = 0;
  };
  //region block: post-declaration
  protoOf(Read).n2c = resume;
  protoOf(Read).o2c = resume_0;
  protoOf(Write).n2c = resume;
  protoOf(Write).o2c = resume_0;
  protoOf(ByteChannel).v2e = awaitContent$default;
  protoOf(ByteReadChannel$Companion$Empty$1).v2e = awaitContent$default;
  protoOf(CountedByteReadChannel).v2e = awaitContent$default;
  protoOf(SourceByteReadChannel).v2e = awaitContent$default;
  protoOf(DefaultPool).t3 = close;
  protoOf(NoPoolImpl).t3 = close;
  //endregion
  //region block: init
  Empty_instance = new Empty();
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LineEndingMode__plus_impl_ttpz2j;
  _.$_$.b = Charsets_getInstance;
  _.$_$.c = Companion_getInstance_0;
  _.$_$.d = Companion_getInstance_2;
  _.$_$.e = copyTo;
  _.$_$.f = copyTo_0;
  _.$_$.g = readAvailable;
  _.$_$.h = readBuffer;
  _.$_$.i = readLineStrictTo;
  _.$_$.j = readPacket;
  _.$_$.k = readUntil;
  _.$_$.l = skipIfFound;
  _.$_$.m = toByteArray;
  _.$_$.n = writeFully;
  _.$_$.o = writePacket;
  _.$_$.p = MalformedInputException;
  _.$_$.q = decode;
  _.$_$.r = encode;
  _.$_$.s = forName;
  _.$_$.t = get_name;
  _.$_$.u = BytePacketBuilder;
  _.$_$.v = ByteReadPacket;
  _.$_$.w = build;
  _.$_$.x = canRead;
  _.$_$.y = readText_0;
  _.$_$.z = get_remaining;
  _.$_$.a1 = get_size;
  _.$_$.b1 = takeWhile;
  _.$_$.c1 = toByteArray_0;
  _.$_$.d1 = writeFully_0;
  _.$_$.e1 = writeText;
  _.$_$.f1 = get_ByteArrayPool;
  _.$_$.g1 = DefaultPool;
  _.$_$.h1 = NoPoolImpl;
  _.$_$.i1 = ByteChannel;
  _.$_$.j1 = ByteReadChannel;
  _.$_$.k1 = ByteReadChannel_1;
  _.$_$.l1 = ClosedByteChannelException;
  _.$_$.m1 = WriterScope;
  _.$_$.n1 = attachJob;
  _.$_$.o1 = attachWriterJob;
  _.$_$.p1 = cancel_0;
  _.$_$.q1 = close_0;
  _.$_$.r1 = counted;
  _.$_$.s1 = invokeOnCompletion;
  _.$_$.t1 = ioDispatcher;
  _.$_$.u1 = readText;
  _.$_$.v1 = rethrowCloseCauseIfNeeded_0;
  _.$_$.w1 = writer_0;
  _.$_$.x1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io.js.map
