(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var protoOf = kotlin_kotlin.$_$.zb;
  var initMetadataForObject = kotlin_kotlin.$_$.gb;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var toString = kotlin_kotlin.$_$.cc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var charSequenceLength = kotlin_kotlin.$_$.oa;
  var charSequenceGet = kotlin_kotlin.$_$.na;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h;
  var equals = kotlin_kotlin.$_$.ta;
  var toString_0 = kotlin_kotlin.$_$.ah;
  var Enum = kotlin_kotlin.$_$.qf;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var initMetadataForInterface = kotlin_kotlin.$_$.eb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.d4;
  var hashCode = kotlin_kotlin.$_$.za;
  var joinToString = kotlin_kotlin.$_$.h7;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var KtMap = kotlin_kotlin.$_$.q5;
  var numberRangeToNumber = kotlin_kotlin.$_$.wb;
  var ClosedRange = kotlin_kotlin.$_$.gc;
  var isInterface = kotlin_kotlin.$_$.pb;
  var contains = kotlin_kotlin.$_$.kc;
  var convertToInt = kotlin_kotlin.$_$.r9;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.z4;
  var toDoubleOrNull = kotlin_kotlin.$_$.oe;
  var toDouble = kotlin_kotlin.$_$.pe;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var KtList = kotlin_kotlin.$_$.o5;
  var getKClassFromExpression = kotlin_kotlin.$_$.rc;
  var getBooleanHashCode = kotlin_kotlin.$_$.wa;
  var getStringHashCode = kotlin_kotlin.$_$.ya;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.q2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s3;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xg;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var toLongOrNull = kotlin_kotlin.$_$.te;
  var toULongOrNull = kotlin_kotlin.$_$.ye;
  var ULong = kotlin_kotlin.$_$.gg;
  var Companion_getInstance = kotlin_kotlin.$_$.c3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.m1;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.le;
  var KProperty1 = kotlin_kotlin.$_$.xc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xa;
  var constructCallableReference = kotlin_kotlin.$_$.ra;
  var lazy = kotlin_kotlin.$_$.wg;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var captureStack = kotlin_kotlin.$_$.ja;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var defineProp = kotlin_kotlin.$_$.sa;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.c4;
  var isLetter = kotlin_kotlin.$_$.qd;
  var Char = kotlin_kotlin.$_$.lf;
  var last = kotlin_kotlin.$_$.xd;
  var toString_1 = kotlin_kotlin.$_$.o;
  var charCodeAt = kotlin_kotlin.$_$.ma;
  var isUpperCase = kotlin_kotlin.$_$.td;
  var fromInt = kotlin_kotlin.$_$.u9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.c1;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.e1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.l1;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.n1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.t;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.v;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.u1;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.w1;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var charSequenceSubSequence = kotlin_kotlin.$_$.pa;
  var coerceAtLeast = kotlin_kotlin.$_$.hc;
  var coerceAtMost = kotlin_kotlin.$_$.ic;
  var isBlank = kotlin_kotlin.$_$.od;
  var Collection = kotlin_kotlin.$_$.j5;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var toSet = kotlin_kotlin.$_$.m8;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j3;
  var singleOrNull = kotlin_kotlin.$_$.a8;
  var emptyMap = kotlin_kotlin.$_$.w6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v3;
  var getValue = kotlin_kotlin.$_$.d7;
  var copyOf = kotlin_kotlin.$_$.q6;
  var arrayCopy = kotlin_kotlin.$_$.y5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var to = kotlin_kotlin.$_$.bh;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.of;
  var invoke = kotlin_kotlin.$_$.rg;
  var CoroutineImpl = kotlin_kotlin.$_$.j9;
  var DeepRecursiveScope = kotlin_kotlin.$_$.pf;
  var Unit = kotlin_kotlin.$_$.jg;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r8;
  var initMetadataForLambda = kotlin_kotlin.$_$.fb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cb;
  var enumEntries = kotlin_kotlin.$_$.l9;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var getKClass = kotlin_kotlin.$_$.sc;
  var Exception = kotlin_kotlin.$_$.sf;
  var ensureNotNull = kotlin_kotlin.$_$.qg;
  var contains_0 = kotlin_kotlin.$_$.dd;
  var plus = kotlin_kotlin.$_$.yg;
  var missingFieldExceptionWithNewMessage = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var convertToByte = kotlin_kotlin.$_$.q9;
  var convertToShort = kotlin_kotlin.$_$.s9;
  var IllegalArgumentException = kotlin_kotlin.$_$.tf;
  var isFinite = kotlin_kotlin.$_$.tg;
  var isFinite_0 = kotlin_kotlin.$_$.sg;
  var toUInt = kotlin_kotlin.$_$.xe;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.d1;
  var toULong = kotlin_kotlin.$_$.ze;
  var toUByte = kotlin_kotlin.$_$.we;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.u;
  var toUShort = kotlin_kotlin.$_$.af;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.v1;
  var objectCreate = kotlin_kotlin.$_$.yb;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.b3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.a3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.d3;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var setOf = kotlin_kotlin.$_$.z7;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.n;
  var equals_0 = kotlin_kotlin.$_$.jd;
  var numberToChar = kotlin_kotlin.$_$.xb;
  var toByte = kotlin_kotlin.$_$.ac;
  var startsWith = kotlin_kotlin.$_$.de;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var single = kotlin_kotlin.$_$.ae;
  var toInt = kotlin_kotlin.$_$.se;
  var toList = kotlin_kotlin.$_$.g8;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.m9;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var toNumber = kotlin_kotlin.$_$.ea;
  var last_0 = kotlin_kotlin.$_$.m7;
  var removeLast = kotlin_kotlin.$_$.w7;
  var lastIndexOf = kotlin_kotlin.$_$.wd;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.j;
  var multiply = kotlin_kotlin.$_$.x9;
  var add = kotlin_kotlin.$_$.p9;
  var subtract = kotlin_kotlin.$_$.da;
  var numberToLong = kotlin_kotlin.$_$.z9;
  var negate = kotlin_kotlin.$_$.y9;
  var charArray = kotlin_kotlin.$_$.la;
  var indexOf = kotlin_kotlin.$_$.md;
  var indexOf_0 = kotlin_kotlin.$_$.nd;
  var substring = kotlin_kotlin.$_$.je;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.l3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(JsonNamingStrategy$Builtins$SnakeCase$1);
  initMetadataForClass(JsonNamingStrategy$Builtins$KebabCase$1);
  initMetadataForObject(Builtins, 'Builtins');
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
  initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForObject(RedactedKey, 'RedactedKey');
  initMetadataForClass(JsonPath, 'JsonPath');
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(LexerMode, 'LexerMode', VOID, Enum);
  initMetadataForInterface(PolymorphicJsonDecoder, 'PolymorphicJsonDecoder', VOID, VOID, [JsonDecoder]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [PolymorphicJsonDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [PolymorphicJsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(AbstractJsonTreeEncoder, 'AbstractJsonTreeEncoder', VOID, NamedValueEncoder, [JsonEncoder]);
  initMetadataForClass(JsonTreeEncoder, 'JsonTreeEncoder', VOID, AbstractJsonTreeEncoder);
  initMetadataForClass(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1, VOID, VOID, AbstractEncoder);
  initMetadataForClass(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1, VOID, VOID, AbstractEncoder);
  initMetadataForClass(JsonPrimitiveEncoder, 'JsonPrimitiveEncoder', VOID, AbstractJsonTreeEncoder);
  initMetadataForClass(JsonTreeListEncoder, 'JsonTreeListEncoder', VOID, AbstractJsonTreeEncoder);
  initMetadataForClass(JsonTreeMapEncoder, 'JsonTreeMapEncoder', VOID, JsonTreeEncoder);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  initMetadataForClass(StringJsonWriter, 'StringJsonWriter', StringJsonWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.o18_1 = configuration;
    this.p18_1 = serializersModule;
    this.q18_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).jr = function () {
    return this.p18_1;
  };
  protoOf(Json).r18 = function (serializer, value) {
    var result = new StringJsonWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.x18();
    }
  };
  protoOf(Json).s18 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, LexerMode_OBJ_getInstance(), lexer, deserializer.sn(), null);
    var result = input.tq(deserializer);
    lexer.l19();
    return result;
  };
  protoOf(Json).t18 = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  protoOf(Json).u18 = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  protoOf(Json).v18 = function (string) {
    return this.s18(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.g1a();
    return new JsonImpl(conf, builder.d1a_1);
  }
  function JsonBuilder(json) {
    this.m19_1 = json.o18_1.h1a_1;
    this.n19_1 = json.o18_1.m1a_1;
    this.o19_1 = json.o18_1.i1a_1;
    this.p19_1 = json.o18_1.j1a_1;
    this.q19_1 = json.o18_1.l1a_1;
    this.r19_1 = json.o18_1.n1a_1;
    this.s19_1 = json.o18_1.o1a_1;
    this.t19_1 = json.o18_1.q1a_1;
    this.u19_1 = json.o18_1.x1a_1;
    this.v19_1 = json.o18_1.s1a_1;
    this.w19_1 = json.o18_1.t1a_1;
    this.x19_1 = json.o18_1.u1a_1;
    this.y19_1 = json.o18_1.v1a_1;
    this.z19_1 = json.o18_1.w1a_1;
    this.a1a_1 = json.o18_1.r1a_1;
    this.b1a_1 = json.o18_1.k1a_1;
    this.c1a_1 = json.o18_1.p1a_1;
    this.d1a_1 = json.jr();
    this.e1a_1 = json.o18_1.y1a_1;
    this.f1a_1 = json.o18_1.z1a_1;
  }
  protoOf(JsonBuilder).g1a = function () {
    if (this.c1a_1) {
      // Inline function 'kotlin.require' call
      if (!(this.t19_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.u19_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.q19_1) {
      // Inline function 'kotlin.require' call
      if (!(this.r19_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.r19_1 === '    ')) {
      var tmp0 = this.r19_1;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$6 = false;
            break $l$block;
          }
        }
        tmp$ret$6 = true;
      }
      var allWhitespaces = tmp$ret$6;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.r19_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.m19_1, this.o19_1, this.p19_1, this.b1a_1, this.q19_1, this.n19_1, this.r19_1, this.s19_1, this.c1a_1, this.t19_1, this.a1a_1, this.v19_1, this.w19_1, this.x19_1, this.y19_1, this.z19_1, this.u19_1, this.e1a_1, this.f1a_1);
  };
  function validateConfiguration($this) {
    if (equals($this.jr(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.o18_1);
    $this.jr().k17(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonIgnoreUnknownKeys() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode, exceptionsWithDebugInfo, maxNestingDepth) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    exceptionsWithDebugInfo = exceptionsWithDebugInfo === VOID ? true : exceptionsWithDebugInfo;
    maxNestingDepth = maxNestingDepth === VOID ? 400 : maxNestingDepth;
    this.h1a_1 = encodeDefaults;
    this.i1a_1 = ignoreUnknownKeys;
    this.j1a_1 = isLenient;
    this.k1a_1 = allowStructuredMapKeys;
    this.l1a_1 = prettyPrint;
    this.m1a_1 = explicitNulls;
    this.n1a_1 = prettyPrintIndent;
    this.o1a_1 = coerceInputValues;
    this.p1a_1 = useArrayPolymorphism;
    this.q1a_1 = classDiscriminator;
    this.r1a_1 = allowSpecialFloatingPointValues;
    this.s1a_1 = useAlternativeNames;
    this.t1a_1 = namingStrategy;
    this.u1a_1 = decodeEnumsCaseInsensitive;
    this.v1a_1 = allowTrailingComma;
    this.w1a_1 = allowComments;
    this.x1a_1 = classDiscriminatorMode;
    this.y1a_1 = exceptionsWithDebugInfo;
    this.z1a_1 = maxNestingDepth;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.h1a_1 + ', ignoreUnknownKeys=' + this.i1a_1 + ', isLenient=' + this.j1a_1 + ', ' + ('allowStructuredMapKeys=' + this.k1a_1 + ', prettyPrint=' + this.l1a_1 + ', explicitNulls=' + this.m1a_1 + ', ') + ("prettyPrintIndent='" + this.n1a_1 + "', coerceInputValues=" + this.o1a_1 + ', useArrayPolymorphism=' + this.p1a_1 + ', ') + ("classDiscriminator='" + this.q1a_1 + "', allowSpecialFloatingPointValues=" + this.r1a_1 + ', ') + ('useAlternativeNames=' + this.s1a_1 + ', namingStrategy=' + toString_0(this.t1a_1) + ', decodeEnumsCaseInsensitive=' + this.u1a_1 + ', ') + ('allowTrailingComma=' + this.v1a_1 + ', allowComments=' + this.w1a_1 + ', classDiscriminatorMode=' + this.x1a_1.toString() + ', ') + ('exceptionsWithDebugInfo=' + this.y1a_1 + ', maxNestingDepth=' + this.z1a_1 + ')');
  };
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_instance;
    static_init_called = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    static_init();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance() {
    static_init();
    return ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    static_init();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.d1b();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.e1b_1 = 'null';
  }
  protoOf(JsonNull).c1b = function () {
    return false;
  };
  protoOf(JsonNull).d1b = function () {
    return this.e1b_1;
  };
  protoOf(JsonNull).f1b = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).dz = function (typeParamsSerializers) {
    return this.f1b();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.m1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.n1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.s(_Char___init__impl__6a9atx(58));
    this_0.w(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.g1b_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.g1b_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.g1b_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.g1b_1.l1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).r = function () {
    return this.g1b_1.r();
  };
  protoOf(JsonObject).h1b = function (key) {
    return this.g1b_1.l2(key);
  };
  protoOf(JsonObject).l2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.h1b((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).i1b = function (key) {
    return this.g1b_1.n2(key);
  };
  protoOf(JsonObject).n2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.i1b((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).e1 = function () {
    return this.g1b_1.e1();
  };
  protoOf(JsonObject).o2 = function () {
    return this.g1b_1.o2();
  };
  protoOf(JsonObject).p2 = function () {
    return this.g1b_1.p2();
  };
  protoOf(JsonObject).l1 = function () {
    return this.g1b_1.l1();
  };
  function get_jsonObject(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonObject');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_intOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNull' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var tmp0_elvis_lhs = tmp;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    var result = tmp_1;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      return null;
    return convertToInt(result);
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.e());
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.d1b() + ' is not an Int');
    return convertToInt(result);
  }
  function get_longOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNull' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.e());
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function get_floatOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloatOrNull' call
    var this_0 = _this__u8e3s4.d1b();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDoubleOrNull(this_0);
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.d1b();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.d1b());
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.d1b());
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.d1b());
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.d1b());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$(_this__u8e3s4.toString() + ' does not represent a Boolean');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.k1b_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.k1b_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.k1b_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.k1b_1, ',', '[', ']');
  };
  protoOf(JsonArray).r = function () {
    return this.k1b_1.r();
  };
  protoOf(JsonArray).l1b = function (element) {
    return this.k1b_1.i2(element);
  };
  protoOf(JsonArray).i2 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.l1b(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).t = function () {
    return this.k1b_1.t();
  };
  protoOf(JsonArray).d1 = function (index) {
    return this.k1b_1.d1(index);
  };
  protoOf(JsonArray).j1 = function (index) {
    return this.k1b_1.j1(index);
  };
  protoOf(JsonArray).k2 = function (fromIndex, toIndex) {
    return this.k1b_1.k2(fromIndex, toIndex);
  };
  protoOf(JsonArray).e1 = function () {
    return this.k1b_1.e1();
  };
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.m1b_1 = isString;
    this.n1b_1 = coerceToInlineType;
    this.o1b_1 = toString(body);
    if (!(this.n1b_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.n1b_1.cp()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).c1b = function () {
    return this.m1b_1;
  };
  protoOf(JsonLiteral).d1b = function () {
    return this.o1b_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.m1b_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.o1b_1);
      tmp = this_0.toString();
    } else {
      tmp = this.o1b_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.m1b_1 === other.m1b_1))
      return false;
    if (!(this.o1b_1 === other.o1b_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.m1b_1);
    result = imul(31, result) + getStringHashCode(this.o1b_1) | 0;
    return result;
  };
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return StringJsonLexer_0(Default_getInstance(), _this__u8e3s4.d1b()).p1b();
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.d1b();
    }
    return tmp;
  }
  function JsonPrimitive_1(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonPrimitive_2(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonObjectBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.q1b_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).r1b = function (key, element) {
    return this.q1b_1.v2(key, element);
  };
  protoOf(JsonObjectBuilder).g1a = function () {
    return new JsonObject(this.q1b_1);
  };
  function put(_this__u8e3s4, key, value) {
    return _this__u8e3s4.r1b(key, JsonPrimitive_0(value));
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.do('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.do('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.do('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.do('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.do('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().s1b_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().t1b_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().u1b_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().v1b_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().w1b_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.x1b_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).sn = function () {
    return this.x1b_1;
  };
  protoOf(JsonElementSerializer).y1b = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.ms(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.ms(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.ms(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).tn = function (encoder, value) {
    return this.y1b(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).un = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.b1b();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.s1b_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).sn = function () {
    return this.s1b_1;
  };
  protoOf(JsonPrimitiveSerializer).z1b = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.ms(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.ms(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).tn = function (encoder, value) {
    return this.z1b(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).un = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.b1b();
    if (!(result instanceof JsonPrimitive)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.a1b().o18_1.y1a_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.t1b_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).sn = function () {
    return this.t1b_1;
  };
  protoOf(JsonNullSerializer).a1c = function (encoder, value) {
    verify(encoder);
    encoder.pr();
  };
  protoOf(JsonNullSerializer).tn = function (encoder, value) {
    return this.a1c(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).un = function (decoder) {
    verify_0(decoder);
    if (decoder.fq()) {
      throw decodingExceptionOf("Expected 'null' literal");
    }
    decoder.gq();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.b1c_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).sn();
    this.c1c_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).ap = function () {
    return this.c1c_1;
  };
  protoOf(JsonObjectDescriptor).fp = function (index) {
    return this.b1c_1.fp(index);
  };
  protoOf(JsonObjectDescriptor).gp = function (name) {
    return this.b1c_1.gp(name);
  };
  protoOf(JsonObjectDescriptor).hp = function (index) {
    return this.b1c_1.hp(index);
  };
  protoOf(JsonObjectDescriptor).ip = function (index) {
    return this.b1c_1.ip(index);
  };
  protoOf(JsonObjectDescriptor).jp = function (index) {
    return this.b1c_1.jp(index);
  };
  protoOf(JsonObjectDescriptor).bp = function () {
    return this.b1c_1.bp();
  };
  protoOf(JsonObjectDescriptor).to = function () {
    return this.b1c_1.to();
  };
  protoOf(JsonObjectDescriptor).cp = function () {
    return this.b1c_1.cp();
  };
  protoOf(JsonObjectDescriptor).dp = function () {
    return this.b1c_1.dp();
  };
  protoOf(JsonObjectDescriptor).ep = function () {
    return this.b1c_1.ep();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.v1b_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).sn = function () {
    return this.v1b_1;
  };
  protoOf(JsonObjectSerializer).d1c = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).tn(encoder, value);
  };
  protoOf(JsonObjectSerializer).tn = function (encoder, value) {
    return this.d1c(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).un = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).un(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.e1c_1 = ListSerializer(JsonElementSerializer_getInstance()).sn();
    this.f1c_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).ap = function () {
    return this.f1c_1;
  };
  protoOf(JsonArrayDescriptor).fp = function (index) {
    return this.e1c_1.fp(index);
  };
  protoOf(JsonArrayDescriptor).gp = function (name) {
    return this.e1c_1.gp(name);
  };
  protoOf(JsonArrayDescriptor).hp = function (index) {
    return this.e1c_1.hp(index);
  };
  protoOf(JsonArrayDescriptor).ip = function (index) {
    return this.e1c_1.ip(index);
  };
  protoOf(JsonArrayDescriptor).jp = function (index) {
    return this.e1c_1.jp(index);
  };
  protoOf(JsonArrayDescriptor).bp = function () {
    return this.e1c_1.bp();
  };
  protoOf(JsonArrayDescriptor).to = function () {
    return this.e1c_1.to();
  };
  protoOf(JsonArrayDescriptor).cp = function () {
    return this.e1c_1.cp();
  };
  protoOf(JsonArrayDescriptor).dp = function () {
    return this.e1c_1.dp();
  };
  protoOf(JsonArrayDescriptor).ep = function () {
    return this.e1c_1.ep();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.w1b_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).sn = function () {
    return this.w1b_1;
  };
  protoOf(JsonArraySerializer).g1c = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).tn(encoder, value);
  };
  protoOf(JsonArraySerializer).tn = function (encoder, value) {
    return this.g1c(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).un = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).un(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.u1b_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).sn = function () {
    return this.u1b_1;
  };
  protoOf(JsonLiteralSerializer).h1c = function (encoder, value) {
    verify(encoder);
    if (value.m1b_1) {
      return encoder.yr(value.o1b_1);
    }
    if (!(value.n1b_1 == null)) {
      return encoder.as(value.n1b_1).yr(value.o1b_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.o1b_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.ur(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.o1b_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).cn_1;
      var tmp_1 = encoder.as(serializer_0(Companion_getInstance()).sn());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$4 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.ur(tmp$ret$4);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.o1b_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.wr(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.o1b_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.qr(tmp3_safe_receiver);
    }
    encoder.yr(value.o1b_1);
  };
  protoOf(JsonLiteralSerializer).tn = function (encoder, value) {
    return this.h1c(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).un = function (decoder) {
    var jsonDecoder = asJsonDecoder(decoder);
    var result = jsonDecoder.b1b();
    if (!(result instanceof JsonLiteral)) {
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var shortMessage = 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result));
      var tmp;
      if (jsonDecoder.a1b().o18_1.y1a_1) {
        var tmp$ret$3 = toString(result);
        tmp = toString(minify(tmp$ret$3));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, null, null, inputValue), shortMessage, -1, null, inputValue, null);
    }
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.i1c_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('original', 1, tmp, defer$o$_get_original_$ref_3cje7k(), null);
    return tmp0.n1();
  }
  function defer$o$_get_original_$ref_3cje7k() {
    return constructCallableReference(function (p0) {
      return _get_original__l7ku1m(p0);
    }, 1, 0, 8);
  }
  function defer$1($deferred) {
    this.i1c_1 = lazy($deferred);
  }
  protoOf(defer$1).ap = function () {
    return _get_original__l7ku1m(this).ap();
  };
  protoOf(defer$1).bp = function () {
    return _get_original__l7ku1m(this).bp();
  };
  protoOf(defer$1).dp = function () {
    return _get_original__l7ku1m(this).dp();
  };
  protoOf(defer$1).fp = function (index) {
    return _get_original__l7ku1m(this).fp(index);
  };
  protoOf(defer$1).gp = function (name) {
    return _get_original__l7ku1m(this).gp(name);
  };
  protoOf(defer$1).hp = function (index) {
    return _get_original__l7ku1m(this).hp(index);
  };
  protoOf(defer$1).ip = function (index) {
    return _get_original__l7ku1m(this).ip(index);
  };
  protoOf(defer$1).jp = function (index) {
    return _get_original__l7ku1m(this).jp(index);
  };
  function JsonEncoder() {
  }
  function JsonDecodingException(fullMessage, shortMessage, offset, path, input, hint, cause) {
    cause = cause === VOID ? null : cause;
    JsonException.call(this, fullMessage, cause);
    captureStack(this, JsonDecodingException);
    this.l1c_1 = shortMessage;
    this.m1c_1 = offset;
    this.n1c_1 = path;
    this.o1c_1 = input;
    this.p1c_1 = hint;
  }
  function JsonException(message, cause) {
    SerializationException_init_$Init$(message, cause, this);
    captureStack(this, JsonException);
    this.j1b_1 = message;
    delete this.message;
  }
  protoOf(JsonException).e = function () {
    return this.j1b_1;
  };
  function JsonEncodingException(shortMessage, classSerialName, hint, cause) {
    classSerialName = classSerialName === VOID ? null : classSerialName;
    hint = hint === VOID ? null : hint;
    cause = cause === VOID ? null : cause;
    JsonException.call(this, formatEncodingException(shortMessage, hint), cause);
    captureStack(this, JsonEncodingException);
    this.r1c_1 = shortMessage;
    this.s1c_1 = classSerialName;
    this.t1c_1 = hint;
  }
  function convertCamelCase($this, serialName, delimiter) {
    // Inline function 'kotlin.text.buildString' call
    var capacity = imul(serialName.length, 2);
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0(capacity);
    var bufferedChar = null;
    var previousUpperCharsCount = 0;
    // Inline function 'kotlin.text.forEach' call
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(serialName)) {
      var element = charSequenceGet(serialName, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (isUpperCase(element)) {
        var tmp;
        var tmp_0;
        if (previousUpperCharsCount === 0) {
          // Inline function 'kotlin.text.isNotEmpty' call
          tmp_0 = charSequenceLength(this_0) > 0;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = !(last(this_0) === delimiter);
        } else {
          tmp = false;
        }
        if (tmp) {
          this_0.s(delimiter);
        }
        var tmp0_safe_receiver = bufferedChar;
        var tmp_1 = tmp0_safe_receiver;
        if ((tmp_1 == null ? null : new Char(tmp_1)) == null)
          null;
        else {
          var tmp_2 = tmp0_safe_receiver;
          // Inline function 'kotlin.let' call
          var p0 = (tmp_2 == null ? null : new Char(tmp_2)).w1_1;
          this_0.s(p0);
        }
        previousUpperCharsCount = previousUpperCharsCount + 1 | 0;
        // Inline function 'kotlin.text.lowercaseChar' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$9 = toString_1(element).toLowerCase();
        bufferedChar = charCodeAt(tmp$ret$9, 0);
      } else {
        var tmp_3 = bufferedChar;
        if (!((tmp_3 == null ? null : new Char(tmp_3)) == null)) {
          if (previousUpperCharsCount > 1 && isLetter(element)) {
            this_0.s(delimiter);
          }
          this_0.s(bufferedChar);
          previousUpperCharsCount = 0;
          bufferedChar = null;
        }
        this_0.s(element);
      }
    }
    var tmp_4 = bufferedChar;
    if (!((tmp_4 == null ? null : new Char(tmp_4)) == null)) {
      this_0.s(bufferedChar);
    }
    return this_0.toString();
  }
  function JsonNamingStrategy$Builtins$SnakeCase$1() {
  }
  protoOf(JsonNamingStrategy$Builtins$SnakeCase$1).u1c = function (descriptor, elementIndex, serialName) {
    return convertCamelCase(Builtins_getInstance(), serialName, _Char___init__impl__6a9atx(95));
  };
  protoOf(JsonNamingStrategy$Builtins$SnakeCase$1).toString = function () {
    return 'kotlinx.serialization.json.JsonNamingStrategy.SnakeCase';
  };
  function JsonNamingStrategy$Builtins$KebabCase$1() {
  }
  protoOf(JsonNamingStrategy$Builtins$KebabCase$1).u1c = function (descriptor, elementIndex, serialName) {
    return convertCamelCase(Builtins_getInstance(), serialName, _Char___init__impl__6a9atx(45));
  };
  protoOf(JsonNamingStrategy$Builtins$KebabCase$1).toString = function () {
    return 'kotlinx.serialization.json.JsonNamingStrategy.KebabCase';
  };
  function Builtins() {
    Builtins_instance = this;
    var tmp = this;
    tmp.v1c_1 = new JsonNamingStrategy$Builtins$SnakeCase$1();
    var tmp_0 = this;
    tmp_0.w1c_1 = new JsonNamingStrategy$Builtins$KebabCase$1();
  }
  var Builtins_instance;
  function Builtins_getInstance() {
    if (Builtins_instance == null)
      new Builtins();
    return Builtins_instance;
  }
  function Composer(writer) {
    this.x1c_1 = writer;
    this.y1c_1 = true;
  }
  protoOf(Composer).z1c = function () {
    this.y1c_1 = true;
  };
  protoOf(Composer).a1d = function () {
    return Unit_instance;
  };
  protoOf(Composer).b1d = function () {
    this.y1c_1 = false;
  };
  protoOf(Composer).c1d = function () {
    this.y1c_1 = false;
  };
  protoOf(Composer).d1d = function () {
    return Unit_instance;
  };
  protoOf(Composer).e1d = function (v) {
    return this.x1c_1.f1d(v);
  };
  protoOf(Composer).g1d = function (v) {
    return this.x1c_1.h1d(v);
  };
  protoOf(Composer).i1d = function (v) {
    return this.x1c_1.h1d(v.toString());
  };
  protoOf(Composer).j1d = function (v) {
    return this.x1c_1.h1d(v.toString());
  };
  protoOf(Composer).k1d = function (v) {
    return this.x1c_1.l1d(fromInt(v));
  };
  protoOf(Composer).m1d = function (v) {
    return this.x1c_1.l1d(fromInt(v));
  };
  protoOf(Composer).n1d = function (v) {
    return this.x1c_1.l1d(fromInt(v));
  };
  protoOf(Composer).o1d = function (v) {
    return this.x1c_1.l1d(v);
  };
  protoOf(Composer).p1d = function (v) {
    return this.x1c_1.h1d(v.toString());
  };
  protoOf(Composer).q1d = function (value) {
    return this.x1c_1.r1d(value);
  };
  function Composer_0(sb, json) {
    return json.o18_1.l1a_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.u1d_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).n1d = function (v) {
    if (this.u1d_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.q1d(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.g1d(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).o1d = function (v) {
    if (this.u1d_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.q1d(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.g1d(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).k1d = function (v) {
    if (this.u1d_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.q1d(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.g1d(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).m1d = function (v) {
    if (this.u1d_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.q1d(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.g1d(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.x1d_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).q1d = function (value) {
    if (this.x1d_1) {
      protoOf(Composer).q1d.call(this, value);
    } else {
      protoOf(Composer).g1d.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.a1e_1 = json;
    this.b1e_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).z1c = function () {
    this.y1c_1 = true;
    this.b1e_1 = this.b1e_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).a1d = function () {
    this.b1e_1 = this.b1e_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).b1d = function () {
    this.y1c_1 = false;
    this.g1d('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.b1e_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.g1d(this.a1e_1.o18_1.n1a_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).c1d = function () {
    if (this.y1c_1)
      this.y1c_1 = false;
    else {
      this.b1d();
    }
  };
  protoOf(ComposerWithPrettyPrint).d1d = function () {
    this.e1d(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.d1e_1 = (!descriptor.jp(index) && descriptor.ip(index).to());
    return $this.d1e_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, p0_0, p1);
    }, 2, 0, 9, 'readIfAbsent', [p0]);
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.c1e_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.d1e_1 = false;
  }
  protoOf(JsonElementMarker).e1e = function (index) {
    this.c1e_1.vw(index);
  };
  protoOf(JsonElementMarker).f1e = function () {
    return this.c1e_1.ww();
  };
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp2 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
  }
  function access$formatDecodingException$tJsonExceptionsKt(offset, shortMessage, path, hint, input) {
    return formatDecodingException(offset, shortMessage, path, hint, input);
  }
  function decodingExceptionOf(shortMessage, hint) {
    hint = hint === VOID ? null : hint;
    return new JsonDecodingException(formatDecodingException(-1, shortMessage, null, hint, null), shortMessage, -1, null, null, hint);
  }
  function formatDecodingException(offset, shortMessage, path, hint, input) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (offset >= 0) {
      this_0.q('Unexpected JSON token at offset ' + offset + ': ');
    }
    this_0.q(shortMessage);
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(path == null || isBlank(path))) {
      this_0.q(' at path: ');
      this_0.q(path);
    }
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(hint == null || isBlank(hint))) {
      this_0.q('\n' + hint);
    }
    if (!(input == null)) {
      this_0.q('\nJSON input: ');
      this_0.q(input);
    }
    return this_0.toString();
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.g1e('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.h19_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.h1e(nonFiniteFpMessage(result, null), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidFloatingPointEncoded(value, key) {
    key = key === VOID ? null : key;
    return new JsonEncodingException(nonFiniteFpMessage(value, key), VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.ap() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.bp().toString() + "'"), keyDescriptor.ap(), "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function access$nonFiniteFpMessage$tJsonExceptionsKt(value, key) {
    return nonFiniteFpMessage(value, key);
  }
  function decodingExceptionOf_0(_this__u8e3s4, shortMessage, offset, path, hint, input, cause) {
    cause = cause === VOID ? null : cause;
    // Inline function 'kotlinx.serialization.json.internal.ifDebugInput' call
    var tmp;
    if (_this__u8e3s4.g19_1.y1a_1) {
      tmp = toString(minify(input, offset));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    return new JsonDecodingException(formatDecodingException(offset, shortMessage, path, hint, inputValue), shortMessage, offset, path, inputValue, hint, cause);
  }
  function formatEncodingException(shortMessage, hint) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (hint == null || isBlank(hint)) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    return shortMessage + tmp;
  }
  function nonFiniteFpMessage(value, key) {
    return 'Unexpected special floating-point value ' + toString(value) + (!(key == null) ? ' with key ' + key + '. ' : '. ') + 'By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification.';
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.o18_1.i1a_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.ep();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.r();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$0);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.gp(name);
    if (!(index === -3))
      return index;
    if (!json.o18_1.s1a_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.ap() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.fp(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function getJsonEncodedNames(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? jsonCachedSerialNames(_this__u8e3s4) : toSet(serializationNamesIndices(_this__u8e3s4, json, strategy));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.o18_1.u1a_1 && equals(descriptor.bp(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).n2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.bp(), CLASS_getInstance()) ? json.o18_1.t1a_1 : null;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.j1e(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.j1e(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.dp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.hp(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element instanceof JsonNames) {
            destination.c1(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1e_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.fp(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.u1c(_this__u8e3s4, i, _this__u8e3s4.fp(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.r()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      // Inline function 'kotlin.collections.mutableSetOf' call
      var trackingSet = LinkedHashSet_init_$Create$();
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.dp();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.fp(tmp_2);
        var name = $strategy.u1c($this_serializationNamesIndices, tmp_2, baseName);
        if (!trackingSet.c1(name))
          throw new JsonEncodingException("The transformed name '" + name + "' for property " + baseName + ' already exists ' + ('in ' + toString($this_serializationNamesIndices)), $this_serializationNamesIndices.ap());
        tmp_1[tmp_2] = name;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.bp(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).l2(name)) {
      throw decodingExceptionOf("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.fp(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.fp(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.v2(name, index);
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function RedactedKey() {
  }
  var RedactedKey_instance;
  function RedactedKey_getInstance() {
    return RedactedKey_instance;
  }
  function resize($this) {
    var newSize = imul($this.p1e_1, 2);
    $this.n1e_1 = copyOf($this.n1e_1, newSize);
    var tmp = 0;
    var tmp_0 = new Int32Array(newSize);
    while (tmp < newSize) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    var newIndices = tmp_0;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = $this.o1e_1;
    var endIndex = this_0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_1, newIndices, 0, 0, endIndex);
    $this.o1e_1 = newIndices;
  }
  function JsonPath(configuration) {
    this.l1e_1 = configuration.z1a_1;
    this.m1e_1 = configuration.y1a_1;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.n1e_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.o1e_1 = tmp_2;
    this.p1e_1 = -1;
  }
  protoOf(JsonPath).q1e = function (sd) {
    this.p1e_1 = this.p1e_1 + 1 | 0;
    var depth = this.p1e_1;
    if (depth >= this.l1e_1) {
      jsonTooNested(this.l1e_1);
    }
    if (depth === this.n1e_1.length) {
      resize(this);
    }
    this.n1e_1[depth] = sd;
  };
  protoOf(JsonPath).r1e = function (index) {
    this.o1e_1[this.p1e_1] = index;
  };
  protoOf(JsonPath).s1e = function (key) {
    var tmp;
    if (!(this.o1e_1[this.p1e_1] === -2)) {
      this.p1e_1 = this.p1e_1 + 1 | 0;
      tmp = this.p1e_1 === this.n1e_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.n1e_1[this.p1e_1] = this.m1e_1 ? key : RedactedKey_instance;
    this.o1e_1[this.p1e_1] = -2;
  };
  protoOf(JsonPath).t1e = function () {
    if (this.o1e_1[this.p1e_1] === -2) {
      this.n1e_1[this.p1e_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).u1e = function () {
    var depth = this.p1e_1;
    if (this.o1e_1[depth] === -2) {
      this.o1e_1[depth] = -1;
      this.p1e_1 = this.p1e_1 - 1 | 0;
    }
    if (!(this.p1e_1 === -1)) {
      this.p1e_1 = this.p1e_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).v1e = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q('$');
    // Inline function 'kotlin.repeat' call
    var times = this.p1e_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.n1e_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.bp(), LIST_getInstance())) {
            if (!(this.o1e_1[index] === -1)) {
              this_0.q('[');
              this_0.dc(this.o1e_1[index]);
              this_0.q(']');
            }
          } else {
            var idx = this.o1e_1[index];
            if (idx >= 0) {
              this_0.q('.');
              this_0.q(element.fp(idx));
            }
          }
        } else {
          if (element === RedactedKey_instance) {
            this_0.q('[<debug info disabled>]');
          } else {
            if (!(element === Tombstone_instance)) {
              this_0.q('[');
              this_0.q("'");
              this_0.w(element);
              this_0.q("'");
              this_0.q(']');
            }
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.v1e();
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.ep().t();
    while (_iterator__ex2g4s.u()) {
      var annotation = _iterator__ex2g4s.v();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.w1e_1;
    }
    return json.o18_1.q1a_1;
  }
  function subtypeNotRegisteredMessageJson(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    var tmp;
    if (subClassName == null) {
      tmp = to('Class discriminator was missing and no default serializers were registered ' + scope, null);
    } else {
      tmp = to("Serializer for subclass '" + subClassName + "' is not found " + scope, "Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n" + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
    }
    return tmp;
  }
  function throwJsonElementPolymorphicException(serialName, element) {
    var tmp0_shortMessage = 'Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).o() + '.';
    throw new JsonEncodingException(tmp0_shortMessage, serialName, 'Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
  }
  function access$checkEncodingConflicts$tJsonPolymorphicHelpersKt($receiver, serializer, actualSerializer, classDiscriminator) {
    return checkEncodingConflicts($receiver, serializer, actualSerializer, classDiscriminator);
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function checkEncodingConflicts(_this__u8e3s4, serializer, actualSerializer, classDiscriminator) {
    if (getJsonEncodedNames(actualSerializer.sn(), _this__u8e3s4).i2(classDiscriminator)) {
      var baseName = serializer.sn().ap();
      var actualName = actualSerializer.sn().ap();
      var text = _this__u8e3s4.o18_1.x1a_1.equals(ClassDiscriminatorMode_ALL_JSON_OBJECTS_getInstance()) && baseName === actualName ? 'in ALL_JSON_OBJECTS class discriminator mode' : "as base class '" + baseName + "'";
      var tmp0_shortMessage = "Class '" + actualName + "' cannot be serialized " + text + ' because' + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'.");
      var tmp1_hint = 'You can either change class discriminator in JsonConfiguration, or rename property with @SerialName annotation.';
      throw new JsonEncodingException(tmp0_shortMessage, actualName, tmp1_hint);
    }
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.bp();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.x1e_1)
      return Unit_instance;
    if (!$this.y1e_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.o() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function JsonSerializersModuleValidator(configuration) {
    this.x1e_1 = configuration.p1a_1;
    this.y1e_1 = !configuration.x1a_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).t17 = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).w17 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.sn();
    checkKind_0(this, descriptor, actualClass);
  };
  protoOf(JsonSerializersModuleValidator).x17 = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).y17 = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = LexerMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().e1();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.ms(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.i1f_1.n1f(6);
    if ($this.i1f_1.o1f() === 4) {
      $this.i1f_1.h1e('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.i1f_1.p1f()) {
      var key = $this.j1f_1 ? $this.i1f_1.r1f() : $this.i1f_1.q1f();
      $this.i1f_1.n1f(5);
      var element = $this.s1f();
      // Inline function 'kotlin.collections.set' call
      result.v2(key, element);
      lastToken = $this.i1f_1.t1f();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.i1f_1.h1e('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.i1f_1.n1f(7);
    } else if (lastToken === 4) {
      if (!$this.k1f_1) {
        invalidTrailingComma($this.i1f_1);
      }
      $this.i1f_1.n1f(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, $receiver, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, $receiver, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function readArray($this) {
    var lastToken = $this.i1f_1.t1f();
    if ($this.i1f_1.o1f() === 4) {
      $this.i1f_1.h1e('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.i1f_1.p1f()) {
      var element = $this.s1f();
      result.c1(element);
      lastToken = $this.i1f_1.t1f();
      if (!(lastToken === 4)) {
        var tmp0 = $this.i1f_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.h19_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.h1e(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.i1f_1.n1f(9);
    } else if (lastToken === 4) {
      if (!$this.k1f_1) {
        invalidTrailingComma($this.i1f_1, 'array');
      }
      $this.i1f_1.n1f(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.j1f_1 || !isString) {
      tmp = $this.i1f_1.r1f();
    } else {
      tmp = $this.i1f_1.q1f();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.q1g_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).v1g = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.w1g($this$DeepRecursiveFunction, it, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).c9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.v1g(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 3;
            var tmp0_subject = this.q1g_1.i1f_1.o1f();
            if (tmp0_subject === 1) {
              this.t1g_1 = readValue(this.q1g_1, true);
              this.i8_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.t1g_1 = readValue(this.q1g_1, false);
                this.i8_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.u1g_1 = this.q1g_1;
                  this.u1g_1.m1f_1 = this.u1g_1.m1f_1 + 1 | 0;
                  if (this.u1g_1.m1f_1 >= this.u1g_1.l1f_1) {
                    jsonTooNested(this.u1g_1.l1f_1);
                  }
                  this.i8_1 = 1;
                  suspendResult = readObject_0(this.q1g_1, this.r1g_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    var tmp_0 = this;
                    var this_0 = this.q1g_1;
                    this_0.m1f_1 = this_0.m1f_1 + 1 | 0;
                    if (this_0.m1f_1 >= this_0.l1f_1) {
                      jsonTooNested(this_0.l1f_1);
                    }
                    var result = readArray(this.q1g_1);
                    this_0.m1f_1 = this_0.m1f_1 - 1 | 0;
                    tmp_0.t1g_1 = result;
                    this.i8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_1 = this;
                    this.q1g_1.i1f_1.h1e("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            var result_0 = suspendResult;
            this.u1g_1.m1f_1 = this.u1g_1.m1f_1 - 1 | 0;
            this.t1g_1 = result_0;
            this.i8_1 = 2;
            continue $sm;
          case 2:
            return this.t1g_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).w1g = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.q1g_1, completion);
    i.r1g_1 = $this$DeepRecursiveFunction;
    i.s1g_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$DeepRecursiveFunction, it, $completion) {
      return i.v1g($this$DeepRecursiveFunction, it, $completion);
    }, 2);
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1g_1 = _this__u8e3s4;
    this.d1g_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 5;
            this.f1g_1 = this.c1g_1;
            this.g1g_1 = this.f1g_1.i1f_1.n1f(6);
            if (this.f1g_1.i1f_1.o1f() === 4) {
              this.f1g_1.i1f_1.h1e('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.e1g_1 = LinkedHashMap_init_$Create$();
            this.i8_1 = 1;
            continue $sm;
          case 1:
            if (!this.f1g_1.i1f_1.p1f()) {
              this.i8_1 = 4;
              continue $sm;
            }

            this.h1g_1 = this.f1g_1.j1f_1 ? this.f1g_1.i1f_1.r1f() : this.f1g_1.i1f_1.q1f();
            this.f1g_1.i1f_1.n1f(5);
            this.i8_1 = 2;
            suspendResult = this.d1g_1.kl(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.e1g_1;
            var key = this.h1g_1;
            tmp0.v2(key, element);
            this.g1g_1 = this.f1g_1.i1f_1.t1f();
            var tmp0_subject = this.g1g_1;
            if (tmp0_subject === 4) {
              this.i8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.i8_1 = 4;
                continue $sm;
              } else {
                this.f1g_1.i1f_1.h1e('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.i8_1 = 1;
            continue $sm;
          case 4:
            if (this.g1g_1 === 6) {
              this.f1g_1.i1f_1.n1f(7);
            } else if (this.g1g_1 === 4) {
              if (!this.f1g_1.k1f_1) {
                invalidTrailingComma(this.f1g_1.i1f_1);
              }
              this.f1g_1.i1f_1.n1f(7);
            }

            return new JsonObject(this.e1g_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.i1f_1 = lexer;
    this.j1f_1 = configuration.j1a_1;
    this.k1f_1 = configuration.v1a_1;
    this.l1f_1 = configuration.z1a_1;
    this.m1f_1 = this.i1f_1.i19_1.p1e_1;
  }
  protoOf(JsonTreeReader).s1f = function () {
    var token = this.i1f_1.o1f();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      this.m1f_1 = this.m1f_1 + 1 | 0;
      if (this.m1f_1 >= this.l1f_1) {
        jsonTooNested(this.l1f_1);
      }
      var result;
      if (this.m1f_1 === 200) {
        this.m1f_1 = this.m1f_1 - 1 | 0;
        result = readDeepRecursive(this);
      } else {
        result = readObject(this);
        this.m1f_1 = this.m1f_1 - 1 | 0;
      }
      tmp = result;
    } else if (token === 8) {
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.withDepthControl' call
      this.m1f_1 = this.m1f_1 + 1 | 0;
      if (this.m1f_1 >= this.l1f_1) {
        jsonTooNested(this.l1f_1);
      }
      var result_0 = readArray(this);
      this.m1f_1 = this.m1f_1 - 1 | 0;
      tmp = result_0;
    } else {
      this.i1f_1.h1e('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function jsonTooNested(maxStackDepth) {
    throw decodingExceptionOf('Json input is too nested and may be impossible to parse without stack overflow.', 'Current nesting limit is ' + maxStackDepth + ". To adjust it, use 'maxNestingDepth' in 'Json {}' builder.");
  }
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_instance;
    static_init_called_0 = true;
    LexerMode_OBJ_instance = new LexerMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    LexerMode_LIST_instance = new LexerMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    LexerMode_MAP_instance = new LexerMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    LexerMode_POLY_OBJ_instance = new LexerMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var LexerMode_OBJ_instance;
  var LexerMode_LIST_instance;
  var LexerMode_MAP_instance;
  var LexerMode_POLY_OBJ_instance;
  function values() {
    static_init_0();
    return [LexerMode_OBJ_getInstance(), LexerMode_LIST_getInstance(), LexerMode_MAP_getInstance(), LexerMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    static_init_0();
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var $ENTRIES;
  function LexerMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.z1g_1 = begin;
    this.a1h_1 = end;
  }
  function modeFor(_this__u8e3s4, desc) {
    var tmp0_subject = desc.bp();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = LexerMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = LexerMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.ip(0), _this__u8e3s4.jr());
          var keyKind = keyDescriptor.bp();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = LexerMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.o18_1.k1a_1) {
              tmp_0 = LexerMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = LexerMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.bp(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.cp()) {
      tmp = carrierDescriptor(_this__u8e3s4.ip(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function LexerMode_OBJ_getInstance() {
    static_init_0();
    return LexerMode_OBJ_instance;
  }
  function LexerMode_LIST_getInstance() {
    static_init_0();
    return LexerMode_LIST_instance;
  }
  function LexerMode_MAP_getInstance() {
    static_init_0();
    return LexerMode_MAP_instance;
  }
  function LexerMode_POLY_OBJ_getInstance() {
    static_init_0();
    return LexerMode_POLY_OBJ_instance;
  }
  function PolymorphicJsonDecoder() {
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.i1e_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).c1h = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.i1e_1;
    var value_0 = this_0.n2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.v2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.v2(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).j1e = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.d1h(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.c1h(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).d1h = function (descriptor, key) {
    var tmp0_safe_receiver = this.i1e_1.n2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.n2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.e1h_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.e1h_1 === unknownKey) {
      $receiver.e1h_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.lr(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.a19_1.o1f() === 4) {
      $this.a19_1.h1e('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.c19_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.c19_1 === -1)) {
        hasComma = $this.a19_1.g1h();
      }
    } else {
      $this.a19_1.f1h(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.a19_1.p1f()) {
      if (decodingKey) {
        if ($this.c19_1 === -1) {
          var tmp0 = $this.a19_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.h19_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.h1e(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.a19_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.h19_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.h1e(tmp$ret$3, position_0);
          }
        }
      }
      $this.c19_1 = $this.c19_1 + 1 | 0;
      tmp = $this.c19_1;
    } else {
      if (hasComma && !$this.y18_1.o18_1.v1a_1) {
        invalidTrailingComma($this.a19_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.y18_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.jp(index);
      var elementDescriptor = descriptor.ip(index);
      var tmp;
      if (isOptional && !elementDescriptor.to()) {
        tmp = $this.a19_1.h1h(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.bp(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.to()) {
          tmp_0 = $this.a19_1.h1h(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.a19_1.i1h($this.e19_1.j1a_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.o18_1.m1a_1 && elementDescriptor.to();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.a19_1.q1f();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.a19_1.g1h();
    while ($this.a19_1.p1f()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.a19_1.f1h(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.y18_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.e19_1.o1a_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.a19_1.g1h();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.f19_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.e1e(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.y18_1.o18_1.v1a_1) {
      invalidTrailingComma($this.a19_1);
    }
    var tmp1_safe_receiver = $this.f19_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f1e();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.y18_1) || trySkip($this, $this.d19_1, key)) {
      $this.a19_1.k1h($this.e19_1.j1a_1);
    } else {
      $this.a19_1.i19_1.u1e();
      $this.a19_1.j1h(key);
    }
    return $this.a19_1.g1h();
  }
  function decodeListIndex($this) {
    var hasComma = $this.a19_1.g1h();
    var tmp;
    if ($this.a19_1.p1f()) {
      if (!($this.c19_1 === -1) && !hasComma) {
        $this.a19_1.h1e('Expected end of the array or comma');
      }
      $this.c19_1 = $this.c19_1 + 1 | 0;
      tmp = $this.c19_1;
    } else {
      if (hasComma && !$this.y18_1.o18_1.v1a_1) {
        invalidTrailingComma($this.a19_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.e19_1.j1a_1) {
      tmp = $this.a19_1.m1h();
    } else {
      tmp = $this.a19_1.l1h();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.y18_1 = json;
    this.z18_1 = mode;
    this.a19_1 = lexer;
    this.b19_1 = this.y18_1.jr();
    this.c19_1 = -1;
    this.d19_1 = discriminatorHolder;
    this.e19_1 = this.y18_1.o18_1;
    this.f19_1 = this.e19_1.m1a_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).a1b = function () {
    return this.y18_1;
  };
  protoOf(StreamingJsonDecoder).jr = function () {
    return this.b19_1;
  };
  protoOf(StreamingJsonDecoder).b1h = function () {
    var tmp0_safe_receiver = this.d19_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1h_1;
  };
  protoOf(StreamingJsonDecoder).b1b = function () {
    return (new JsonTreeReader(this.y18_1.o18_1, this.a19_1)).s1f();
  };
  protoOf(StreamingJsonDecoder).tq = function (deserializer) {
    var tmp2_withExceptionHandling_this = this.a19_1.i19_1;
    var tmp3_withExceptionHandling_this = this.a19_1;
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      var tmp_0;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp_0 = true;
      } else {
        tmp_0 = this.y18_1.o18_1.p1a_1;
      }
      if (tmp_0) {
        return deserializer.un(this);
      }
      var discriminator = classDiscriminator(deserializer.sn(), this.y18_1);
      var tmp0_elvis_lhs = this.a19_1.n1h(discriminator, this.e19_1.j1a_1);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_2;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_2 = true;
          } else {
            tmp_2 = this.a1b().o18_1.p1a_1;
          }
          if (tmp_2) {
            tmp$ret$2 = tmp2.un(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.sn(), this.a1b());
          var tmp2_0 = this.b1b();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.sn().ap();
          if (!(tmp2_0 instanceof JsonObject)) {
            var tmp2_1 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2_0).o() + ' as the serialized body of ' + serialName;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path = this.a19_1.i19_1.v1e();
            var tmp_3;
            if (this.a1b().o18_1.y1a_1) {
              var tmp$ret$8 = toString(tmp2_0);
              tmp_3 = toString(minify(tmp$ret$8));
            } else {
              tmp_3 = null;
            }
            var inputValue = tmp_3;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path, null, inputValue), tmp2_1, -1, path, inputValue, null);
          }
          var jsonTree = tmp2_0;
          var tmp0_safe_receiver = jsonTree.i1b(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4 = tmp2.jo(this, type);
          var actualSerializer = (!(tmp_4 == null) ? isInterface(tmp_4, DeserializationStrategy) : false) ? tmp_4 : null;
          if (actualSerializer == null) {
            var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(type, tmp2.ho());
            var message = _destruct__k2r9zo.oe();
            var hint = _destruct__k2r9zo.pe();
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.a19_1.i19_1.v1e();
            var tmp_5;
            if (this.a1b().o18_1.y1a_1) {
              var tmp$ret$13 = jsonTree.toString();
              tmp_5 = toString(minify(tmp$ret$13));
            } else {
              tmp_5 = null;
            }
            var inputValue_0 = tmp_5;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, message, path_0, hint, inputValue_0), message, -1, path_0, inputValue_0, hint);
          }
          tmp$ret$2 = readPolymorphicJson(this.a1b(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_1;
      var tmp_6 = deserializer.jo(this, type_0);
      var actualSerializer_0 = (!(tmp_6 == null) ? isInterface(tmp_6, DeserializationStrategy) : false) ? tmp_6 : null;
      if (actualSerializer_0 == null) {
        var _destruct__k2r9zo_0 = subtypeNotRegisteredMessageJson(type_0, deserializer.ho());
        var message_0 = _destruct__k2r9zo_0.oe();
        var hint_0 = _destruct__k2r9zo_0.pe();
        this.a19_1.h1e(message_0, VOID, hint_0);
      }
      this.d19_1 = new DiscriminatorHolder(discriminator);
      tmp = actualSerializer_0.un(this);
    } catch ($p) {
      var tmp_7;
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        var tmp_8 = plus(e.message, ' at path: ');
        var tmp$ret$14 = tmp2_withExceptionHandling_this.v1e();
        throw missingFieldExceptionWithNewMessage(e, tmp_8 + tmp$ret$14);
      } else {
        if ($p instanceof SerializationException) {
          var e_0 = $p;
          throw e_0;
        } else {
          if ($p instanceof Exception) {
            var e_1 = $p;
            // Inline function 'kotlinx.serialization.json.internal.errorFromDeserializer' call
            var path_1 = tmp2_withExceptionHandling_this.v1e();
            var causeMessage = e_1.message;
            var shortMessage = 'Deserialization failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the decoder';
            var tmp_9;
            if (this.a1b().o18_1.y1a_1) {
              var tmp$ret$19 = tmp3_withExceptionHandling_this.o1h();
              tmp_9 = toString(minify(tmp$ret$19));
            } else {
              tmp_9 = null;
            }
            var inputValue_1 = tmp_9;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, path_1, null, inputValue_1), shortMessage, -1, path_1, inputValue_1, null, e_1);
          } else {
            throw $p;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).uq = function (descriptor) {
    var newMode = modeFor(this.y18_1, descriptor);
    this.a19_1.i19_1.q1e(descriptor);
    this.a19_1.f1h(newMode.z1g_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.a1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.y18_1, newMode, this.a19_1, descriptor, this.d19_1);
        break;
      default:
        var tmp_0;
        if (this.z18_1.equals(newMode) && this.y18_1.o18_1.m1a_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.y18_1, newMode, this.a19_1, descriptor, this.d19_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).vq = function (descriptor) {
    if (descriptor.dp() === 0 && ignoreUnknownKeys(descriptor, this.y18_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.a19_1.g1h() && !this.y18_1.o18_1.v1a_1) {
      invalidTrailingComma(this.a19_1, '');
    }
    this.a19_1.f1h(this.z18_1.a1h_1);
    this.a19_1.i19_1.u1e();
  };
  protoOf(StreamingJsonDecoder).fq = function () {
    var tmp;
    var tmp0_safe_receiver = this.f19_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1e_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.a19_1.p1h();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).gq = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).gr = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.z18_1.equals(LexerMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.a19_1.i19_1.t1e();
    }
    var value = protoOf(AbstractDecoder).gr.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.a19_1.i19_1.s1e(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).lr = function (descriptor) {
    var index;
    switch (this.z18_1.a1_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.z18_1.equals(LexerMode_MAP_getInstance())) {
      this.a19_1.i19_1.r1e(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).hq = function () {
    return this.a19_1.q1h();
  };
  protoOf(StreamingJsonDecoder).iq = function () {
    var value = this.a19_1.r1h();
    if (!(value === fromInt(convertToByte(value)))) {
      this.a19_1.h1e("Failed to parse byte for input '" + value.toString() + "'");
    }
    return convertToByte(value);
  };
  protoOf(StreamingJsonDecoder).jq = function () {
    var value = this.a19_1.r1h();
    if (!(value === fromInt(convertToShort(value)))) {
      this.a19_1.h1e("Failed to parse short for input '" + value.toString() + "'");
    }
    return convertToShort(value);
  };
  protoOf(StreamingJsonDecoder).kq = function () {
    var value = this.a19_1.r1h();
    if (!(value === fromInt(convertToInt(value)))) {
      this.a19_1.h1e("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).lq = function () {
    return this.a19_1.r1h();
  };
  protoOf(StreamingJsonDecoder).mq = function () {
    var tmp0 = this.a19_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r1f();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1e("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.y18_1.o18_1.r1a_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.a19_1, result);
  };
  protoOf(StreamingJsonDecoder).nq = function () {
    var tmp0 = this.a19_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r1f();
      try {
        tmp$ret$0 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1e("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.y18_1.o18_1.r1a_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.a19_1, result);
  };
  protoOf(StreamingJsonDecoder).oq = function () {
    var string = this.a19_1.r1f();
    if (!(string.length === 1)) {
      this.a19_1.h1e("Expected single char, but got '" + string + "'");
    }
    return charCodeAt(string, 0);
  };
  protoOf(StreamingJsonDecoder).pq = function () {
    var tmp;
    if (this.e19_1.j1a_1) {
      tmp = this.a19_1.m1h();
    } else {
      tmp = this.a19_1.q1f();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).rq = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.a19_1, this.y18_1) : protoOf(AbstractDecoder).rq.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).qq = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.y18_1, this.pq(), ' at path ' + this.a19_1.i19_1.v1e());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.s1h_1 = lexer;
    this.t1h_1 = json.jr();
  }
  protoOf(JsonDecoderForUnsignedTypes).jr = function () {
    return this.t1h_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).lr = function (descriptor) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).kq = function () {
    var tmp0 = this.s1h_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r1f();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1e("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).lq = function () {
    var tmp0 = this.s1h_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r1f();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1e("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).iq = function () {
    var tmp0 = this.s1h_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r1f();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1e("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(JsonDecoderForUnsignedTypes).jq = function () {
    var tmp0 = this.s1h_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r1f();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.h1e("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, discriminator, serialName) {
    $this.z1e_1.b1d();
    $this.yr(discriminator);
    $this.z1e_1.e1d(_Char___init__impl__6a9atx(58));
    $this.z1e_1.d1d();
    $this.yr(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.z1e_1 = composer;
    this.a1f_1 = json;
    this.b1f_1 = mode;
    this.c1f_1 = modeReuseCache;
    this.d1f_1 = this.a1f_1.jr();
    this.e1f_1 = this.a1f_1.o18_1;
    this.f1f_1 = false;
    this.g1f_1 = null;
    this.h1f_1 = null;
    var i = this.b1f_1.a1_1;
    if (!(this.c1f_1 == null)) {
      if (!(this.c1f_1[i] === null) || !(this.c1f_1[i] === this)) {
        this.c1f_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).a1b = function () {
    return this.a1f_1;
  };
  protoOf(StreamingJsonEncoder).jr = function () {
    return this.d1f_1;
  };
  protoOf(StreamingJsonEncoder).j1c = function (element) {
    var tmp;
    if (!(this.g1f_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.h1f_1, element);
    }
    this.ms(JsonElementSerializer_getInstance(), element);
  };
  protoOf(StreamingJsonEncoder).rs = function (descriptor, index) {
    return this.e1f_1.h1a_1;
  };
  protoOf(StreamingJsonEncoder).ms = function (serializer, value) {
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.a1b().o18_1.p1a_1) {
          serializer.tn(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp_0;
        if (isPolymorphicSerializer) {
          tmp_0 = !this.a1b().o18_1.x1a_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_1;
          switch (this.a1b().o18_1.x1a_1.a1_1) {
            case 0:
            case 2:
              tmp_1 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.sn().bp();
              tmp_1 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp_0 = tmp_1;
        }
        var needDiscriminator = tmp_0;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.sn(), this.a1b()) : null;
        var tmp_2;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.sn()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var tmp1_elvis_lhs = casted.ko(this, value);
          var tmp_3;
          if (tmp1_elvis_lhs == null) {
            // Inline function 'kotlin.run' call
            var tmp0_elvis_lhs = getKClassFromExpression(value).o();
            var subClassName = tmp0_elvis_lhs == null ? toString(getKClassFromExpression(value)) : tmp0_elvis_lhs;
            var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(subClassName, casted.ho());
            var message_0 = _destruct__k2r9zo.oe();
            var hint = _destruct__k2r9zo.pe();
            throw new JsonEncodingException(message_0, subClassName, hint);
          } else {
            tmp_3 = tmp1_elvis_lhs;
          }
          var actual = tmp_3;
          tmp_2 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_2 = serializer;
        }
        var actualSerializer = tmp_2;
        if (!(baseClassDiscriminator == null)) {
          access$checkEncodingConflicts$tJsonPolymorphicHelpersKt(this.a1b(), serializer, actualSerializer, baseClassDiscriminator);
          checkKind(actualSerializer.sn().bp());
          var serialName = actualSerializer.sn().ap();
          this.g1f_1 = baseClassDiscriminator;
          this.h1f_1 = serialName;
        }
        actualSerializer.tn(this, value);
      }
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof SerializationException) {
        var e = $p;
        throw e;
      } else {
        if ($p instanceof Exception) {
          var e_0 = $p;
          var causeMessage = e_0.message;
          var classSerialName = serializer.sn().ap();
          var message_1 = 'Serialization ' + (isBlank(classSerialName) ? '' : "of '" + classSerialName + "' ") + 'failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the encoder';
          throw new JsonEncodingException(message_1, classSerialName, VOID, e_0);
        } else {
          throw $p;
        }
      }
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).uq = function (descriptor) {
    var newMode = modeFor(this.a1f_1, descriptor);
    if (!(newMode.z1g_1 === _Char___init__impl__6a9atx(0))) {
      this.z1e_1.e1d(newMode.z1g_1);
      this.z1e_1.z1c();
    }
    var discriminator = this.g1f_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.h1f_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.ap() : tmp0_elvis_lhs);
      this.g1f_1 = null;
      this.h1f_1 = null;
    }
    if (this.b1f_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.c1f_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.a1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.z1e_1, this.a1f_1, newMode, this.c1f_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).vq = function (descriptor) {
    if (!(this.b1f_1.a1h_1 === _Char___init__impl__6a9atx(0))) {
      this.z1e_1.a1d();
      this.z1e_1.c1d();
      this.z1e_1.e1d(this.b1f_1.a1h_1);
    }
  };
  protoOf(StreamingJsonEncoder).nr = function (descriptor, index) {
    switch (this.b1f_1.a1_1) {
      case 1:
        if (!this.z1e_1.y1c_1) {
          this.z1e_1.e1d(_Char___init__impl__6a9atx(44));
        }

        this.z1e_1.b1d();
        break;
      case 2:
        if (!this.z1e_1.y1c_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.z1e_1.e1d(_Char___init__impl__6a9atx(44));
            this.z1e_1.b1d();
            tmp_0 = true;
          } else {
            this.z1e_1.e1d(_Char___init__impl__6a9atx(58));
            this.z1e_1.d1d();
            tmp_0 = false;
          }
          tmp.f1f_1 = tmp_0;
        } else {
          this.f1f_1 = true;
          this.z1e_1.b1d();
        }

        break;
      case 3:
        if (index === 0)
          this.f1f_1 = true;
        if (index === 1) {
          this.z1e_1.e1d(_Char___init__impl__6a9atx(44));
          this.z1e_1.d1d();
          this.f1f_1 = false;
        }

        break;
      default:
        if (!this.z1e_1.y1c_1) {
          this.z1e_1.e1d(_Char___init__impl__6a9atx(44));
        }

        this.z1e_1.b1d();
        this.yr(getJsonElementName(descriptor, this.a1f_1, index));
        this.z1e_1.e1d(_Char___init__impl__6a9atx(58));
        this.z1e_1.d1d();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).ns = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.e1f_1.m1a_1) {
      protoOf(AbstractEncoder).ns.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).as = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.z1e_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.z1e_1;
      } else {
        var tmp0 = this.z1e_1.x1c_1;
        var p1 = this.f1f_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp0, p1);
      }
      var tmp$ret$0 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$0, this.a1f_1, this.b1f_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.z1e_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.z1e_1;
      } else {
        var tmp0_0 = this.z1e_1.x1c_1;
        var p1_0 = this.f1f_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp0_0, p1_0);
      }
      var tmp$ret$2 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$2, this.a1f_1, this.b1f_1, null);
    } else if (!(this.g1f_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.h1f_1 = descriptor.ap();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).as.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).pr = function () {
    this.z1e_1.g1d('null');
  };
  protoOf(StreamingJsonEncoder).qr = function (value) {
    if (this.f1f_1) {
      this.yr(value.toString());
    } else {
      this.z1e_1.p1d(value);
    }
  };
  protoOf(StreamingJsonEncoder).rr = function (value) {
    if (this.f1f_1) {
      this.yr(value.toString());
    } else {
      this.z1e_1.k1d(value);
    }
  };
  protoOf(StreamingJsonEncoder).sr = function (value) {
    if (this.f1f_1) {
      this.yr(value.toString());
    } else {
      this.z1e_1.m1d(value);
    }
  };
  protoOf(StreamingJsonEncoder).tr = function (value) {
    if (this.f1f_1) {
      this.yr(value.toString());
    } else {
      this.z1e_1.n1d(value);
    }
  };
  protoOf(StreamingJsonEncoder).ur = function (value) {
    if (this.f1f_1) {
      this.yr(value.toString());
    } else {
      this.z1e_1.o1d(value);
    }
  };
  protoOf(StreamingJsonEncoder).vr = function (value) {
    if (this.f1f_1) {
      this.yr(value.toString());
    } else {
      this.z1e_1.i1d(value);
    }
    if (!this.e1f_1.r1a_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).wr = function (value) {
    if (this.f1f_1) {
      this.yr(value.toString());
    } else {
      this.z1e_1.j1d(value);
    }
    if (!this.e1f_1.r1a_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value);
    }
  };
  protoOf(StreamingJsonEncoder).xr = function (value) {
    this.yr(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).yr = function (value) {
    return this.z1e_1.q1d(value);
  };
  protoOf(StreamingJsonEncoder).zr = function (enumDescriptor, index) {
    this.yr(enumDescriptor.fp(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.cp() && get_unsignedNumberDescriptors().i2(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.cp() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).sn(), serializer_0(Companion_getInstance()).sn(), serializer_2(Companion_getInstance_1()).sn(), serializer_3(Companion_getInstance_2()).sn()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.ac(value, lastPos, i);
          _this__u8e3s4.q(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.ac(value, lastPos, value.length);
    else
      _this__u8e3s4.q(value);
    _this__u8e3s4.s(_Char___init__impl__6a9atx(34));
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(128);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$13 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$13);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$14 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$14);
      ESCAPE_MARKERS = this_7;
    }
  }
  function readJson(json, element, deserializer, previousDecoder) {
    previousDecoder = previousDecoder === VOID ? null : previousDecoder;
    var tmp0_safe_receiver = (!(previousDecoder == null) ? isInterface(previousDecoder, PolymorphicJsonDecoder) : false) ? previousDecoder : null;
    var discriminator = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b1h();
    var tmp;
    if (element instanceof JsonObject) {
      tmp = new JsonTreeDecoder(json, element, deserializer.sn(), discriminator);
    } else {
      if (element instanceof JsonArray) {
        tmp = new JsonTreeListDecoder(json, element);
      } else {
        var tmp_0;
        if (element instanceof JsonLiteral) {
          tmp_0 = true;
        } else {
          tmp_0 = equals(element, JsonNull_getInstance());
        }
        if (tmp_0) {
          tmp = new JsonPrimitiveDecoder(json, element instanceof JsonPrimitive ? element : THROW_CCE());
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    var input = tmp;
    return input.tq(deserializer);
  }
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    var descriptor = deserializer.sn();
    return (new JsonTreeDecoder(_this__u8e3s4, element, descriptor, discriminator, descriptor)).tq(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    var tmp2 = "Failed to parse literal '" + literal.toString() + "' as " + type + ' value';
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var path = $this.a1i(tag);
    var tmp;
    if ($this.a1b().o18_1.y1a_1) {
      var tmp$ret$3 = toString($this.b1i());
      tmp = toString(minify(tmp$ret$3));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.w1h_1 = json;
    this.x1h_1 = value;
    this.y1h_1 = polymorphicDiscriminator;
    this.z1h_1 = this.a1b().o18_1;
  }
  protoOf(AbstractJsonTreeDecoder).a1b = function () {
    return this.w1h_1;
  };
  protoOf(AbstractJsonTreeDecoder).n1 = function () {
    return this.x1h_1;
  };
  protoOf(AbstractJsonTreeDecoder).jr = function () {
    return this.a1b().jr();
  };
  protoOf(AbstractJsonTreeDecoder).b1h = function () {
    return this.y1h_1;
  };
  protoOf(AbstractJsonTreeDecoder).b1i = function () {
    var tmp0_safe_receiver = this.r14();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.c1i(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.n1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).a1i = function (currentTag) {
    return this.t14() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).b1b = function () {
    return this.b1i();
  };
  protoOf(AbstractJsonTreeDecoder).tq = function (deserializer) {
    var tmp2_withExceptionHandling_this = this.b1i();
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
        var tmp_0;
        if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
          tmp_0 = true;
        } else {
          tmp_0 = this.a1b().o18_1.p1a_1;
        }
        if (tmp_0) {
          tmp$ret$2 = deserializer.un(this);
          break $l$block;
        }
        var discriminator = classDiscriminator(deserializer.sn(), this.a1b());
        var tmp2 = this.b1b();
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName = deserializer.sn().ap();
        if (!(tmp2 instanceof JsonObject)) {
          var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path = this.t14();
          var tmp_1;
          if (this.a1b().o18_1.y1a_1) {
            var tmp$ret$8 = toString(tmp2);
            tmp_1 = toString(minify(tmp$ret$8));
          } else {
            tmp_1 = null;
          }
          var inputValue = tmp_1;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
        }
        var jsonTree = tmp2;
        var tmp0_safe_receiver = jsonTree.i1b(discriminator);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
        var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
        var tmp_2 = deserializer.jo(this, type);
        var actualSerializer = (!(tmp_2 == null) ? isInterface(tmp_2, DeserializationStrategy) : false) ? tmp_2 : null;
        if (actualSerializer == null) {
          var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(type, deserializer.ho());
          var message = _destruct__k2r9zo.oe();
          var hint = _destruct__k2r9zo.pe();
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_0 = this.t14();
          var tmp_3;
          if (this.a1b().o18_1.y1a_1) {
            var tmp$ret$13 = jsonTree.toString();
            tmp_3 = toString(minify(tmp$ret$13));
          } else {
            tmp_3 = null;
          }
          var inputValue_0 = tmp_3;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, message, path_0, hint, inputValue_0), message, -1, path_0, inputValue_0, hint);
        }
        tmp$ret$2 = readPolymorphicJson(this.a1b(), discriminator, jsonTree, actualSerializer);
      }
      tmp = tmp$ret$2;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        var tmp_5 = plus(e.message, ' at path: ');
        var tmp$ret$14 = this.t14();
        throw missingFieldExceptionWithNewMessage(e, tmp_5 + tmp$ret$14);
      } else {
        if ($p instanceof SerializationException) {
          var e_0 = $p;
          throw e_0;
        } else {
          if ($p instanceof Exception) {
            var e_1 = $p;
            // Inline function 'kotlinx.serialization.json.internal.errorFromDeserializer' call
            var path_1 = this.t14();
            var causeMessage = e_1.message;
            var shortMessage = 'Deserialization failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the decoder';
            var tmp_6;
            if (this.a1b().o18_1.y1a_1) {
              var tmp$ret$19 = toString(tmp2_withExceptionHandling_this);
              tmp_6 = toString(minify(tmp$ret$19));
            } else {
              tmp_6 = null;
            }
            var inputValue_1 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, shortMessage, path_1, null, inputValue_1), shortMessage, -1, path_1, inputValue_1, null, e_1);
          } else {
            throw $p;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).s14 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).uq = function (descriptor) {
    var currentObject = this.b1i();
    var tmp0_subject = descriptor.bp();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.a1b();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.ap();
      if (!(currentObject instanceof JsonArray)) {
        var tmp2 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.t14();
        var tmp_2;
        if (this.a1b().o18_1.y1a_1) {
          var tmp$ret$6 = toString(currentObject);
          tmp_2 = toString(minify(tmp$ret$6));
        } else {
          tmp_2 = null;
        }
        var inputValue = tmp_2;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.a1b();
        var keyDescriptor = carrierDescriptor(descriptor.ip(0), this_0.jr());
        var keyKind = keyDescriptor.bp();
        var tmp_3;
        var tmp_4;
        if (keyKind instanceof PrimitiveKind) {
          tmp_4 = true;
        } else {
          tmp_4 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_4) {
          var tmp_5 = this.a1b();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.ap();
          if (!(currentObject instanceof JsonObject)) {
            var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_0;
            // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
            var path_0 = this.t14();
            var tmp_6;
            if (this.a1b().o18_1.y1a_1) {
              var tmp$ret$15 = toString(currentObject);
              tmp_6 = toString(minify(tmp$ret$15));
            } else {
              tmp_6 = null;
            }
            var inputValue_0 = tmp_6;
            throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path_0, null, inputValue_0), tmp2_0, -1, path_0, inputValue_0, null);
          }
          tmp_3 = new JsonTreeMapDecoder(tmp_5, currentObject, descriptor);
        } else {
          if (this_0.o18_1.k1a_1) {
            var tmp_7 = this.a1b();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.ap();
            if (!(currentObject instanceof JsonArray)) {
              var tmp2_1 = 'Expected ' + getKClass(JsonArray).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_1;
              // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
              var path_1 = this.t14();
              var tmp_8;
              if (this.a1b().o18_1.y1a_1) {
                var tmp$ret$23 = toString(currentObject);
                tmp_8 = toString(minify(tmp$ret$23));
              } else {
                tmp_8 = null;
              }
              var inputValue_1 = tmp_8;
              throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, path_1, null, inputValue_1), tmp2_1, -1, path_1, inputValue_1, null);
            }
            tmp_3 = new JsonTreeListDecoder(tmp_7, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_3;
      } else {
        var tmp_9 = this.a1b();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.ap();
        if (!(currentObject instanceof JsonObject)) {
          var tmp2_2 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(currentObject).o() + ' as the serialized body of ' + serialName_2;
          // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
          var path_2 = this.t14();
          var tmp_10;
          if (this.a1b().o18_1.y1a_1) {
            var tmp$ret$30 = toString(currentObject);
            tmp_10 = toString(minify(tmp$ret$30));
          } else {
            tmp_10 = null;
          }
          var inputValue_2 = tmp_10;
          throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_2, path_2, null, inputValue_2), tmp2_2, -1, path_2, inputValue_2, null);
        }
        tmp = new JsonTreeDecoder(tmp_9, currentObject, descriptor, this.y1h_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).vq = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).fq = function () {
    var tmp = this.b1i();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).d1i = function (tag, enumDescriptor) {
    var tmp = this.a1b();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp2 = this.c1i(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.ap();
    if (!(tmp2 instanceof JsonPrimitive)) {
      var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.a1i(tag);
      var tmp_0;
      if (this.a1b().o18_1.y1a_1) {
        var tmp$ret$7 = toString(tmp2);
        tmp_0 = toString(minify(tmp$ret$7));
      } else {
        tmp_0 = null;
      }
      var inputValue = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp2.d1b());
  };
  protoOf(AbstractJsonTreeDecoder).f15 = function (tag, enumDescriptor) {
    return this.d1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).e1i = function (tag) {
    return !(this.c1i(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).v14 = function (tag) {
    return this.e1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f1i = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.c1i(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'boolean';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.a1i(tag);
        var tmp;
        if (this.a1b().o18_1.y1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).w14 = function (tag) {
    return this.f1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g1i = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.c1i(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'byte';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.a1i(tag);
        var tmp;
        if (this.a1b().o18_1.y1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToByte(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).x14 = function (tag) {
    return this.g1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h1i = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.c1i(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'short';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.a1i(tag);
        var tmp;
        if (this.a1b().o18_1.y1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToShort(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).y14 = function (tag) {
    return this.h1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i1i = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.c1i(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'int';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.a1i(tag);
        var tmp;
        if (this.a1b().o18_1.y1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_0;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_0 = convertToInt(result);
        } else {
          tmp_0 = null;
        }
        var tmp0_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).z14 = function (tag) {
    return this.i1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j1i = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.c1i(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'long';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.a1i(tag);
        var tmp;
        if (this.a1b().o18_1.y1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).a15 = function (tag) {
    return this.j1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k1i = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.c1i(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'float';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.a1i(tag);
        var tmp;
        if (this.a1b().o18_1.y1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.a1b().o18_1.r1a_1;
    if (specialFp || isFinite(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.a1b().o18_1.y1a_1) {
      var tmp$ret$13 = toString(this.b1i());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).b15 = function (tag) {
    return this.k1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l1i = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.c1i(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'double';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.a1i(tag);
        var tmp;
        if (this.a1b().o18_1.y1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$0;
    var specialFp = this.a1b().o18_1.r1a_1;
    if (specialFp || isFinite_0(result))
      return result;
    // Inline function 'kotlinx.serialization.json.internal.InvalidFloatingPointDecoded' call
    var tmp2_0 = access$nonFiniteFpMessage$tJsonExceptionsKt(result, tag);
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
    var tmp_1;
    if (this.a1b().o18_1.y1a_1) {
      var tmp$ret$13 = toString(this.b1i());
      tmp_1 = toString(minify(tmp$ret$13));
    } else {
      tmp_1 = null;
    }
    var inputValue_0 = tmp_1;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, null, hint, inputValue_0), tmp2_0, -1, null, inputValue_0, hint);
  };
  protoOf(AbstractJsonTreeDecoder).c15 = function (tag) {
    return this.l1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m1i = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.c1i(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'char';
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.a1i(tag);
        var tmp;
        if (this.a1b().o18_1.y1a_1) {
          var tmp$ret$7 = toString(value);
          tmp = toString(minify(tmp$ret$7));
        } else {
          tmp = null;
        }
        var inputValue = tmp;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.d1b()));
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_0.w1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).d15 = function (tag) {
    return this.m1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n1i = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.c1i(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp2 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(value).o() + ' as the serialized body of ' + 'string';
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var path = this.a1i(tag);
      var tmp;
      if (this.a1b().o18_1.y1a_1) {
        var tmp$ret$6 = toString(value);
        tmp = toString(minify(tmp$ret$6));
      } else {
        tmp = null;
      }
      var inputValue = tmp;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, path, null, inputValue), tmp2, -1, path, inputValue, null);
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral)) {
      var tmp2_0 = "Expected string value for a non-null key '" + tag + "', got null literal instead";
      var tmp4 = this.a1i(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint = "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.";
      var tmp_0;
      if (this.a1b().o18_1.y1a_1) {
        var tmp$ret$10 = toString(this.b1i());
        tmp_0 = toString(minify(tmp$ret$10));
      } else {
        tmp_0 = null;
      }
      var inputValue_0 = tmp_0;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, tmp4, hint, inputValue_0), tmp2_0, -1, tmp4, inputValue_0, hint);
    }
    if (!value_0.m1b_1 && !this.a1b().o18_1.j1a_1) {
      var tmp2_1 = "String literal for value of key '" + tag + "' should be quoted";
      var tmp4_0 = this.a1i(tag);
      // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
      var hint_0 = "Use 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.";
      var tmp_1;
      if (this.a1b().o18_1.y1a_1) {
        var tmp$ret$14 = toString(this.b1i());
        tmp_1 = toString(minify(tmp$ret$14));
      } else {
        tmp_1 = null;
      }
      var inputValue_1 = tmp_1;
      throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_1, tmp4_0, hint_0, inputValue_1), tmp2_1, -1, tmp4_0, inputValue_1, hint_0);
    }
    return value_0.o1b_1;
  };
  protoOf(AbstractJsonTreeDecoder).e15 = function (tag) {
    return this.n1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o1i = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.a1b();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp2 = this.c1i(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.ap();
      if (!(tmp2 instanceof JsonPrimitive)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonPrimitive).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.a1i(tag);
        var tmp_1;
        if (this.a1b().o18_1.y1a_1) {
          var tmp$ret$7 = toString(tmp2);
          tmp_1 = toString(minify(tmp$ret$7));
        } else {
          tmp_1 = null;
        }
        var inputValue = tmp_1;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp2.d1b());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.a1b());
    } else {
      tmp = protoOf(NamedValueDecoder).g15.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).g15 = function (tag, inlineDescriptor) {
    return this.o1i((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).rq = function (descriptor) {
    return !(this.r14() == null) ? protoOf(NamedValueDecoder).rq.call(this, descriptor) : (new JsonPrimitiveDecoder(this.a1b(), this.n1(), this.y1h_1)).rq(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, element) {
    var tmp0 = $this.a1b();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.jp(index);
      var elementDescriptor = descriptor.ip(index);
      var tmp;
      if (isOptional && !elementDescriptor.to()) {
        tmp = element instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.bp(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.to()) {
          tmp_0 = element instanceof JsonNull;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_safe_receiver = element instanceof JsonPrimitive ? element : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.o18_1.m1a_1 && elementDescriptor.to();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function throwUnknownKey($this, key) {
    var tmp2 = "Encountered an unknown key '" + key + "'";
    var tmp4 = $this.t14();
    // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
    var hint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.";
    var tmp;
    if ($this.a1b().o18_1.y1a_1) {
      var tmp$ret$3 = $this.n1().toString();
      tmp = toString(minify(tmp$ret$3));
    } else {
      tmp = null;
    }
    var inputValue = tmp;
    throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2, tmp4, hint, inputValue), tmp2, -1, tmp4, inputValue, hint);
  }
  function JsonTreeDecoder(json, value, descriptor, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.v1i_1 = value;
    this.w1i_1 = polyDescriptor;
    this.x1i_1 = this.n1().l1().t();
    this.y1i_1 = this.z1h_1.m1a_1 ? null : new JsonElementMarker(descriptor);
    this.z1i_1 = null;
    this.a1j_1 = null;
  }
  protoOf(JsonTreeDecoder).n1 = function () {
    return this.v1i_1;
  };
  protoOf(JsonTreeDecoder).lr = function (descriptor) {
    var entries = this.x1i_1;
    $l$loop: while (entries.u()) {
      var entry = entries.v();
      var key = entry.m1();
      var index = getJsonNameIndex(descriptor, this.a1b(), key);
      if (!(index === -3)) {
        if (this.z1h_1.o1a_1 && coerceInputValue_0(this, descriptor, index, entry.n1())) {
          continue $l$loop;
        }
        var tmp0_safe_receiver = this.y1i_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.e1e(index);
        }
        this.z1i_1 = key;
        this.a1j_1 = entry.n1();
        return index;
      }
      if (!(key === this.y1h_1) && !ignoreUnknownKeys(descriptor, this.a1b())) {
        throwUnknownKey(this, key);
      }
    }
    var tmp1_safe_receiver = this.y1i_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f1e();
    var markerIndex = tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
    if (!(markerIndex === -1)) {
      this.z1i_1 = descriptor.fp(markerIndex);
      this.a1j_1 = null;
    }
    return markerIndex;
  };
  protoOf(JsonTreeDecoder).fq = function () {
    var tmp;
    var tmp0_safe_receiver = this.y1i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1e_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = protoOf(AbstractJsonTreeDecoder).fq.call(this);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JsonTreeDecoder).n14 = function (descriptor, index) {
    var tmp0_elvis_lhs = this.z1i_1;
    return tmp0_elvis_lhs == null ? descriptor.fp(index) : tmp0_elvis_lhs;
  };
  protoOf(JsonTreeDecoder).c1i = function (tag) {
    var tmp0_elvis_lhs = this.a1j_1;
    return tmp0_elvis_lhs == null ? getValue(this.n1(), tag) : tmp0_elvis_lhs;
  };
  protoOf(JsonTreeDecoder).uq = function (descriptor) {
    if (descriptor === this.w1i_1) {
      var tmp = this.a1b();
      var tmp2 = this.b1i();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.w1i_1.ap();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp2_0 = 'Expected ' + getKClass(JsonObject).o() + ', but had ' + getKClassFromExpression(tmp2).o() + ' as the serialized body of ' + serialName;
        // Inline function 'kotlinx.serialization.json.internal.decodingExceptionOf' call
        var path = this.t14();
        var tmp_0;
        if (this.a1b().o18_1.y1a_1) {
          var tmp$ret$6 = toString(tmp2);
          tmp_0 = toString(minify(tmp$ret$6));
        } else {
          tmp_0 = null;
        }
        var inputValue = tmp_0;
        throw new JsonDecodingException(access$formatDecodingException$tJsonExceptionsKt(-1, tmp2_0, path, null, inputValue), tmp2_0, -1, path, inputValue, null);
      }
      return new JsonTreeDecoder(tmp, tmp2, descriptor, this.y1h_1, this.w1i_1);
    }
    return protoOf(AbstractJsonTreeDecoder).uq.call(this, descriptor);
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.h1j_1 = value;
    this.i1j_1 = this.h1j_1.e1();
    this.j1j_1 = -1;
  }
  protoOf(JsonTreeListDecoder).n1 = function () {
    return this.h1j_1;
  };
  protoOf(JsonTreeListDecoder).n14 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).c1i = function (tag) {
    return this.h1j_1.d1(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).lr = function (descriptor) {
    while (this.j1j_1 < (this.i1j_1 - 1 | 0)) {
      this.j1j_1 = this.j1j_1 + 1 | 0;
      return this.j1j_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.q1j_1 = value;
    this.h15('primitive');
  }
  protoOf(JsonPrimitiveDecoder).n1 = function () {
    return this.q1j_1;
  };
  protoOf(JsonPrimitiveDecoder).lr = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).c1i = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.q1j_1;
  };
  function JsonTreeMapDecoder(json, value, descriptor) {
    JsonTreeDecoder.call(this, json, value, descriptor);
    this.d1k_1 = toList(value.o2());
    this.e1k_1 = imul(this.d1k_1.e1(), 2);
    this.f1k_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).n14 = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.d1k_1.d1(i);
  };
  protoOf(JsonTreeMapDecoder).lr = function (descriptor) {
    while (this.f1k_1 < (this.e1k_1 - 1 | 0)) {
      this.f1k_1 = this.f1k_1 + 1 | 0;
      return this.f1k_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).c1i = function (tag) {
    return (this.f1k_1 % 2 | 0) === 0 ? JsonPrimitive_1(tag) : getValue(this.n1(), tag);
  };
  protoOf(JsonTreeMapDecoder).vq = function (descriptor) {
  };
  function writeJson(json, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
    encoder.ms(serializer, value);
    var tmp;
    if (result._v == null) {
      throwUninitializedPropertyAccessException('result');
    } else {
      tmp = result._v;
    }
    return tmp;
  }
  function JsonTreeEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.s1k_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonTreeEncoder).t1k = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    this.s1k_1.v2(key, element);
  };
  protoOf(JsonTreeEncoder).ns = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.j1k_1.m1a_1) {
      protoOf(AbstractJsonTreeEncoder).ns.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(JsonTreeEncoder).u1k = function () {
    return new JsonObject(this.s1k_1);
  };
  function inlineUnsignedNumberEncoder($this, tag) {
    return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
  }
  function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
    return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
  }
  function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
    this.j1l_1 = this$0;
    this.k1l_1 = $tag;
    AbstractEncoder.call(this);
    this.i1l_1 = this$0.h1k_1.jr();
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).jr = function () {
    return this.i1l_1;
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).l1l = function (s) {
    return this.j1l_1.t1k(this.k1l_1, new JsonLiteral(s, false));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).tr = function (value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.l1l(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).ur = function (value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.l1l(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).rr = function (value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.l1l(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).sr = function (value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.l1l(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
    this.m1l_1 = this$0;
    this.n1l_1 = $tag;
    this.o1l_1 = $inlineDescriptor;
    AbstractEncoder.call(this);
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).jr = function () {
    return this.m1l_1.h1k_1.jr();
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).yr = function (value) {
    return this.m1l_1.t1k(this.n1l_1, new JsonLiteral(value, false, this.o1l_1));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.t1k(this$0.a16(), node);
      return Unit_instance;
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.h1k_1 = json;
    this.i1k_1 = nodeConsumer;
    this.j1k_1 = this.h1k_1.o18_1;
    this.k1k_1 = null;
    this.l1k_1 = null;
  }
  protoOf(AbstractJsonTreeEncoder).a1b = function () {
    return this.h1k_1;
  };
  protoOf(AbstractJsonTreeEncoder).jr = function () {
    return this.h1k_1.jr();
  };
  protoOf(AbstractJsonTreeEncoder).n14 = function (descriptor, index) {
    return getJsonElementName(descriptor, this.h1k_1, index);
  };
  protoOf(AbstractJsonTreeEncoder).j1c = function (element) {
    var tmp;
    if (!(this.k1k_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.l1k_1, element);
    }
    this.ms(JsonElementSerializer_getInstance(), element);
  };
  protoOf(AbstractJsonTreeEncoder).rs = function (descriptor, index) {
    return this.j1k_1.h1a_1;
  };
  protoOf(AbstractJsonTreeEncoder).s14 = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeEncoder).ps = function () {
  };
  protoOf(AbstractJsonTreeEncoder).pr = function () {
    var tmp0_elvis_lhs = this.r14();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.i1k_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.v1k(tag);
  };
  protoOf(AbstractJsonTreeEncoder).v1k = function (tag) {
    return this.t1k(tag, JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeEncoder).n15 = function (tag) {
    return this.v1k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeEncoder).w1k = function (tag, value) {
    return this.t1k(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).o15 = function (tag, value) {
    return this.w1k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).x1k = function (tag, value) {
    return this.t1k(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).p15 = function (tag, value) {
    return this.x1k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).y1k = function (tag, value) {
    return this.t1k(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).q15 = function (tag, value) {
    return this.y1k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).z1k = function (tag, value) {
    return this.t1k(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).r15 = function (tag, value) {
    return this.z1k((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).a1l = function (tag, value) {
    this.t1k(tag, JsonPrimitive_0(value));
    if (!this.j1k_1.r1a_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, tag);
    }
  };
  protoOf(AbstractJsonTreeEncoder).s15 = function (tag, value) {
    return this.a1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).ms = function (serializer, value) {
    // Inline function 'kotlinx.serialization.json.internal.withExceptionHandling' call
    var tmp;
    try {
      if (!(this.r14() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.sn(), this.jr()))) {
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
          if (this.a1b().o18_1.p1a_1) {
            serializer.tn(this, value);
            break $l$block;
          }
          var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
          var tmp_0;
          if (isPolymorphicSerializer) {
            tmp_0 = !this.a1b().o18_1.x1a_1.equals(ClassDiscriminatorMode_NONE_getInstance());
          } else {
            var tmp_1;
            switch (this.a1b().o18_1.x1a_1.a1_1) {
              case 0:
              case 2:
                tmp_1 = false;
                break;
              case 1:
                // Inline function 'kotlin.let' call

                var it = serializer.sn().bp();
                tmp_1 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }
            tmp_0 = tmp_1;
          }
          var needDiscriminator = tmp_0;
          var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.sn(), this.a1b()) : null;
          var tmp_2;
          if (isPolymorphicSerializer) {
            var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (value == null) {
                var message = 'Value for serializer ' + toString(serializer.sn()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                break $l$block_0;
              }
            }
            var tmp1_elvis_lhs = casted.ko(this, value);
            var tmp_3;
            if (tmp1_elvis_lhs == null) {
              // Inline function 'kotlin.run' call
              var tmp0_elvis_lhs = getKClassFromExpression(value).o();
              var subClassName = tmp0_elvis_lhs == null ? toString(getKClassFromExpression(value)) : tmp0_elvis_lhs;
              var _destruct__k2r9zo = subtypeNotRegisteredMessageJson(subClassName, casted.ho());
              var message_0 = _destruct__k2r9zo.oe();
              var hint = _destruct__k2r9zo.pe();
              throw new JsonEncodingException(message_0, subClassName, hint);
            } else {
              tmp_3 = tmp1_elvis_lhs;
            }
            var actual = tmp_3;
            tmp_2 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
          } else {
            tmp_2 = serializer;
          }
          var actualSerializer = tmp_2;
          if (!(baseClassDiscriminator == null)) {
            access$checkEncodingConflicts$tJsonPolymorphicHelpersKt(this.a1b(), serializer, actualSerializer, baseClassDiscriminator);
            checkKind(actualSerializer.sn().bp());
            var serialName = actualSerializer.sn().ap();
            this.k1k_1 = baseClassDiscriminator;
            this.l1k_1 = serialName;
          }
          actualSerializer.tn(this, value);
        }
      } else {
        // Inline function 'kotlin.run' call
        (new JsonPrimitiveEncoder(this.h1k_1, this.i1k_1)).ms(serializer, value);
      }
      tmp = Unit_instance;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof SerializationException) {
        var e = $p;
        throw e;
      } else {
        if ($p instanceof Exception) {
          var e_0 = $p;
          var causeMessage = e_0.message;
          var classSerialName = serializer.sn().ap();
          var message_1 = 'Serialization ' + (isBlank(classSerialName) ? '' : "of '" + classSerialName + "' ") + 'failed because of ' + (causeMessage == null ? 'an exception' : "'" + causeMessage + "' exception") + ' in the encoder';
          throw new JsonEncodingException(message_1, classSerialName, VOID, e_0);
        } else {
          throw $p;
        }
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).b1l = function (tag, value) {
    this.t1k(tag, JsonPrimitive_0(value));
    if (!this.j1k_1.r1a_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, tag);
    }
  };
  protoOf(AbstractJsonTreeEncoder).t15 = function (tag, value) {
    return this.b1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).c1l = function (tag, value) {
    return this.t1k(tag, JsonPrimitive_2(value));
  };
  protoOf(AbstractJsonTreeEncoder).u15 = function (tag, value) {
    return this.c1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).d1l = function (tag, value) {
    return this.t1k(tag, JsonPrimitive_1(toString_1(value)));
  };
  protoOf(AbstractJsonTreeEncoder).v15 = function (tag, value) {
    return this.d1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).e1l = function (tag, value) {
    return this.t1k(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).w15 = function (tag, value) {
    return this.e1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).f1l = function (tag, enumDescriptor, ordinal) {
    return this.t1k(tag, JsonPrimitive_1(enumDescriptor.fp(ordinal)));
  };
  protoOf(AbstractJsonTreeEncoder).x15 = function (tag, enumDescriptor, ordinal) {
    return this.f1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  protoOf(AbstractJsonTreeEncoder).g1l = function (tag, value) {
    this.t1k(tag, JsonPrimitive_1(toString(value)));
  };
  protoOf(AbstractJsonTreeEncoder).l15 = function (tag, value) {
    return this.g1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).h1l = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).y15.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).y15 = function (tag, inlineDescriptor) {
    return this.h1l((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).as = function (descriptor) {
    var tmp;
    if (!(this.r14() == null)) {
      if (!(this.k1k_1 == null))
        this.l1k_1 = descriptor.ap();
      tmp = protoOf(NamedValueEncoder).as.call(this, descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.h1k_1, this.i1k_1)).as(descriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).uq = function (descriptor) {
    var tmp;
    if (this.r14() == null) {
      tmp = this.i1k_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.bp();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.h1k_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.h1k_1;
        var keyDescriptor = carrierDescriptor(descriptor.ip(0), this_0.jr());
        var keyKind = keyDescriptor.bp();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.h1k_1, consumer);
        } else {
          if (this_0.o18_1.k1a_1) {
            tmp_2 = new JsonTreeListEncoder(this.h1k_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.h1k_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.k1k_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.t1k('key', JsonPrimitive_1(discriminator));
        var tmp1_elvis_lhs = this.l1k_1;
        encoder.t1k('value', JsonPrimitive_1(tmp1_elvis_lhs == null ? descriptor.ap() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.l1k_1;
        encoder.t1k(discriminator, JsonPrimitive_1(tmp2_elvis_lhs == null ? descriptor.ap() : tmp2_elvis_lhs));
      }
      this.k1k_1 = null;
      this.l1k_1 = null;
    }
    return encoder;
  };
  protoOf(AbstractJsonTreeEncoder).z15 = function (descriptor) {
    this.i1k_1(this.u1k());
  };
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.bp();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.bp() === ENUM_getInstance();
    }
    return tmp;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.e1m_1 = null;
    this.h15('primitive');
  }
  protoOf(JsonPrimitiveEncoder).t1k = function (key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.e1m_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.e1m_1 = element;
    this.i1k_1(element);
  };
  protoOf(JsonPrimitiveEncoder).u1k = function () {
    var tmp0 = this.e1m_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  };
  function JsonTreeListEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.l1m_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonTreeListEncoder).n14 = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListEncoder).t1k = function (key, element) {
    var idx = toInt(key);
    this.l1m_1.t2(idx, element);
  };
  protoOf(JsonTreeListEncoder).u1k = function () {
    return new JsonArray(this.l1m_1);
  };
  function _get_tag__e6h4qf($this) {
    var tmp = $this.w1l_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.x1l_1 = true;
  }
  protoOf(JsonTreeMapEncoder).t1k = function (key, element) {
    if (this.x1l_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.d1b();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().v1b_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().w1b_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.w1l_1 = tmp_0;
      this.x1l_1 = false;
    } else {
      var tmp0 = this.s1k_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.v2(key_0, element);
      this.x1l_1 = true;
    }
  };
  protoOf(JsonTreeMapEncoder).u1k = function () {
    return new JsonObject(this.s1k_1);
  };
  function writeJson$lambda($result) {
    return function (it) {
      $result._v = it;
      return Unit_instance;
    };
  }
  function appendEscape($this, lastPosition, current) {
    $this.m1m(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.m1m(lastPosition, currentPosition);
    var result = $this.k19_1.toString();
    $this.k19_1.gc(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.j19_1);
    $this.j19_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.o1h(), $this.h19_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.n1m(currentPosition);
    if (currentPosition === -1) {
      $this.h1e('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.o1h();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.o1h(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.h1e("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.k19_1.s(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.h19_1 = startPos;
      $this.o1m();
      if (($this.h19_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.h1e('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.h19_1);
    }
    $this.k19_1.s(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.h1e("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.n1m(start);
    if (current >= charSequenceLength($this.o1h()) || current === -1) {
      $this.h1e('EOF');
    }
    var tmp = $this.o1h();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.h1e("Expected valid boolean literal prefix, but had '" + $this.r1f() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.o1h()) - current | 0) < literalSuffix.length) {
      $this.h1e('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.o1h(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.h1e("Expected valid boolean literal prefix, but had '" + $this.r1f() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.h19_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer(configuration) {
    this.g19_1 = configuration;
    this.h19_1 = 0;
    this.i19_1 = new JsonPath(this.g19_1);
    this.j19_1 = null;
    this.k19_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).o1m = function () {
  };
  protoOf(AbstractJsonLexer).g1h = function () {
    var current = this.p1m();
    var source = this.o1h();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.h19_1 = this.h19_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).q1m = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).l19 = function () {
    var nextToken = this.t1f();
    if (!(nextToken === 10)) {
      this.h1e('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.o1h(), this.h19_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).n1f = function (expected) {
    var token = this.t1f();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true && this.h19_1 > 0 ? this.h19_1 - 1 | 0 : this.h19_1;
      var s = this.h19_1 === charSequenceLength(this.o1h()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.o1h(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.h1e(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).r1m = function (expected) {
    if (this.h19_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.h19_1;
        try {
          this.h19_1 = this.h19_1 - 1 | 0;
          tmp$ret$0 = this.r1f();
          break $l$block;
        }finally {
          this.h19_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.g1e("Expected string literal but 'null' literal was found", this.h19_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true && this.h19_1 > 0 ? this.h19_1 - 1 | 0 : this.h19_1;
    var s = this.h19_1 === charSequenceLength(this.o1h()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.o1h(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.h1e(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).o1f = function () {
    var source = this.o1h();
    var cpos = this.h19_1;
    $l$loop_0: while (true) {
      cpos = this.n1m(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.h19_1 = cpos;
      return charToTokenClass(ch);
    }
    this.h19_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).h1h = function (doConsume) {
    var current = this.p1m();
    current = this.n1m(current);
    var len = charSequenceLength(this.o1h()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.o1h(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.o1h(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.h19_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).p1h = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.h1h(doConsume) : $super.h1h.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).i1h = function (isLenient) {
    var token = this.o1f();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.r1f();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.q1f();
    }
    var string = tmp;
    this.j19_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).s1m = function () {
    this.j19_1 = null;
  };
  protoOf(AbstractJsonLexer).t1m = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.o1h();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).q1f = function () {
    if (!(this.j19_1 == null)) {
      return takePeeked(this);
    }
    return this.l1h();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.n1m(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.h1e('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.m1m(lastPosition, currentPosition);
          currentPosition = this.n1m(currentPosition);
          if (currentPosition === -1) {
            this.h1e('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.t1m(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.h19_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).m1h = function () {
    var result = this.r1f();
    if (result === 'null' && wasUnquotedString(this)) {
      this.h1e("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).r1f = function () {
    if (!(this.j19_1 == null)) {
      return takePeeked(this);
    }
    var current = this.p1m();
    if (current >= charSequenceLength(this.o1h()) || current === -1) {
      this.h1e('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.o1h(), current));
    if (token === 1) {
      return this.q1f();
    }
    if (!(token === 0)) {
      this.h1e('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.o1h(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.o1h(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.o1h())) {
        usedAppend = true;
        this.m1m(this.h19_1, current);
        var eof = this.n1m(current);
        if (eof === -1) {
          this.h19_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.t1m(this.h19_1, current);
    } else {
      tmp = decodedString(this, this.h19_1, current);
    }
    var result = tmp;
    this.h19_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).m1m = function (fromIndex, toIndex) {
    this.k19_1.ac(this.o1h(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).k1h = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.o1f();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.r1f();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.o1f();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.r1f();
        else
          this.l1h();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.c1(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last_0(tokenStack) === 8)) {
          this.h1e('found ] instead of }');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last_0(tokenStack) === 6)) {
          this.h1e('found } instead of ]');
        }
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.h1e('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.t1f();
      if (tokenStack.e1() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.o1h()) + "', currentPosition=" + this.h19_1 + ')';
  };
  protoOf(AbstractJsonLexer).j1h = function (key) {
    var processed = this.t1m(0, this.h19_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    this.g1e("Encountered an unknown key '" + key + "'", lastIndexOf_0, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.");
  };
  protoOf(AbstractJsonLexer).g1e = function (message, position, hint) {
    throw decodingExceptionOf_0(this, message, position, this.i19_1.v1e(), hint, this.o1h());
  };
  protoOf(AbstractJsonLexer).h1e = function (message, position, hint, $super) {
    position = position === VOID ? this.h19_1 : position;
    hint = hint === VOID ? null : hint;
    return $super === VOID ? this.g1e(message, position, hint) : $super.g1e.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).r1h = function () {
    var current = this.p1m();
    current = this.n1m(current);
    if (current >= charSequenceLength(this.o1h()) || current === -1) {
      this.h1e('EOF');
    }
    var tmp;
    if (charSequenceGet(this.o1h(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.o1h())) {
        this.h1e('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = 0n;
    var exponentAccumulator = 0n;
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.o1h()))) {
      var ch = charSequenceGet(this.o1h(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.h1e("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current);
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.h1e("Unexpected symbol '-' in numeric literal", current);
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.h1e("Unexpected symbol '+' in numeric literal", current);
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.h1e("Unexpected symbol '-' in numeric literal", current);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.h1e("Unexpected symbol '" + toString_1(ch) + "' in numeric literal", current - 1 | 0);
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (accumulator > 0n) {
        this.h1e('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.h1e('Expected numeric literal', current);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.h1e('EOF');
      }
      if (!(charSequenceGet(this.o1h(), current) === _Char___init__impl__6a9atx(34))) {
        this.h1e('Expected closing quotation mark', current);
      }
      current = current + 1 | 0;
    }
    this.h19_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(9223372036854775807n) || doubleAccumulator < toNumber(-9223372036854775808n)) {
        this.h1e('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.h1e("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!(accumulator === -9223372036854775808n)) {
      tmp_0 = negate(accumulator);
    } else {
      this.h1e('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).p1b = function () {
    var result = this.r1h();
    var next = this.t1f();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true && this.h19_1 > 0 ? this.h19_1 - 1 | 0 : this.h19_1;
      var s = this.h19_1 === charSequenceLength(this.o1h()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.o1h(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.h1e(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).q1h = function () {
    var current = this.p1m();
    if (current === charSequenceLength(this.o1h())) {
      this.h1e('EOF');
    }
    var tmp;
    if (charSequenceGet(this.o1h(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.h19_1 === charSequenceLength(this.o1h())) {
        this.h1e('EOF');
      }
      if (!(charSequenceGet(this.o1h(), this.h19_1) === _Char___init__impl__6a9atx(34))) {
        this.h1e('Expected closing quotation mark');
      }
      this.h19_1 = this.h19_1 + 1 | 0;
    }
    return result;
  };
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().v1m_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().u1m_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.u1m_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.v1m_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.u1m_1 = charArray(117);
    this.v1m_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source, configuration) {
    StringJsonLexer.call(this, source, configuration);
  }
  protoOf(StringJsonLexerWithComments).t1f = function () {
    var source = this.o1h();
    var cpos = this.p1m();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.h19_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).p1f = function () {
    var current = this.p1m();
    if (current >= this.o1h().length || current === -1)
      return false;
    return this.q1m(charCodeAt(this.o1h(), current));
  };
  protoOf(StringJsonLexerWithComments).f1h = function (expected) {
    var source = this.o1h();
    var current = this.p1m();
    if (current >= source.length || current === -1) {
      this.h19_1 = -1;
      this.r1m(expected);
    }
    var c = charCodeAt(source, current);
    this.h19_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.r1m(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).o1f = function () {
    var source = this.o1h();
    var cpos = this.p1m();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.h19_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).p1m = function () {
    var current = this.h19_1;
    if (current === -1)
      return current;
    var source = this.o1h();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.h19_1 = source.length;
            this.h1e('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.h19_1 = current;
    return current;
  };
  function StringJsonLexer(source, configuration) {
    AbstractJsonLexer.call(this, configuration);
    this.h1n_1 = source;
  }
  protoOf(StringJsonLexer).o1h = function () {
    return this.h1n_1;
  };
  protoOf(StringJsonLexer).n1m = function (position) {
    return position < this.o1h().length ? position : -1;
  };
  protoOf(StringJsonLexer).t1f = function () {
    var source = this.o1h();
    var cpos = this.h19_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.h19_1 = cpos;
      return charToTokenClass(c);
    }
    this.h19_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).p1f = function () {
    var current = this.h19_1;
    if (current === -1)
      return false;
    var source = this.o1h();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.h19_1 = current;
      return this.q1m(c);
    }
    this.h19_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).p1m = function () {
    var current = this.h19_1;
    if (current === -1)
      return current;
    var source = this.o1h();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.h19_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).f1h = function (expected) {
    if (this.h19_1 === -1) {
      this.r1m(expected);
    }
    var source = this.o1h();
    var cpos = this.h19_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.h19_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.r1m(expected);
    }
    this.h19_1 = -1;
    this.r1m(expected);
  };
  protoOf(StringJsonLexer).l1h = function () {
    this.f1h(_Char___init__impl__6a9atx(34));
    var current = this.h19_1;
    var closingQuote = indexOf_0(this.o1h(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.r1f();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false && this.h19_1 > 0 ? this.h19_1 - 1 | 0 : this.h19_1;
      var s = this.h19_1 === charSequenceLength(this.o1h()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.o1h(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.h1e(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.o1h(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.o1h(), this.h19_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.h19_1 = closingQuote + 1 | 0;
    return substring(this.o1h(), current, closingQuote);
  };
  protoOf(StringJsonLexer).n1h = function (keyToMatch, isLenient) {
    var positionSnapshot = this.h19_1;
    try {
      if (!(this.t1f() === 6))
        return null;
      var firstKey = this.i1h(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.s1m();
      if (!(this.t1f() === 5))
        return null;
      return this.i1h(isLenient);
    }finally {
      this.h19_1 = positionSnapshot;
      this.s1m();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.o18_1.w1a_1 ? new StringJsonLexer(source, json.o18_1) : new StringJsonLexerWithComments(source, json.o18_1);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.q18_1;
  }
  function StringJsonWriter() {
    this.w18_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(StringJsonWriter).l1d = function (value) {
    this.w18_1.ec(value);
  };
  protoOf(StringJsonWriter).f1d = function (char) {
    this.w18_1.s(char);
  };
  protoOf(StringJsonWriter).h1d = function (text) {
    this.w18_1.q(text);
  };
  protoOf(StringJsonWriter).r1d = function (text) {
    printQuoted(this.w18_1, text);
  };
  protoOf(StringJsonWriter).x18 = function () {
    this.w18_1.hc();
  };
  protoOf(StringJsonWriter).toString = function () {
    return this.w18_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).to = get_isNullable;
  protoOf(defer$1).cp = get_isInline;
  protoOf(defer$1).ep = get_annotations;
  defineProp(protoOf(JsonException), 'message', function () {
    return this.e();
  });
  protoOf(JsonSerializersModuleValidator).v17 = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  RedactedKey_instance = new RedactedKey();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonElementSerializer_getInstance;
  _.$_$.b = Builtins_getInstance;
  _.$_$.c = JsonNull_getInstance;
  _.$_$.d = JsonArray;
  _.$_$.e = JsonDecoder;
  _.$_$.f = JsonEncoder;
  _.$_$.g = JsonObjectBuilder;
  _.$_$.h = JsonObject;
  _.$_$.i = JsonPrimitive_0;
  _.$_$.j = JsonPrimitive;
  _.$_$.k = Json_0;
  _.$_$.l = get_boolean;
  _.$_$.m = get_booleanOrNull;
  _.$_$.n = get_double;
  _.$_$.o = get_doubleOrNull;
  _.$_$.p = get_float;
  _.$_$.q = get_floatOrNull;
  _.$_$.r = get_int;
  _.$_$.s = get_intOrNull;
  _.$_$.t = get_jsonObject;
  _.$_$.u = get_jsonPrimitive;
  _.$_$.v = get_long;
  _.$_$.w = get_longOrNull;
  _.$_$.x = put;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
