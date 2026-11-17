(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.zb;
  var initMetadataForInterface = kotlin_kotlin.$_$.eb;
  var VOID = kotlin_kotlin.$_$.c;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.q2;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var constructCallableReference = kotlin_kotlin.$_$.ra;
  var emptyList = kotlin_kotlin.$_$.v6;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g2;
  var lazy = kotlin_kotlin.$_$.vg;
  var KProperty1 = kotlin_kotlin.$_$.xc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.xa;
  var toString = kotlin_kotlin.$_$.cc;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var getKClassFromExpression = kotlin_kotlin.$_$.rc;
  var objectCreate = kotlin_kotlin.$_$.yb;
  var captureStack = kotlin_kotlin.$_$.ja;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.l4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.n4;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.p4;
  var IllegalArgumentException = kotlin_kotlin.$_$.tf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.r;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var isInterface = kotlin_kotlin.$_$.pb;
  var KClass = kotlin_kotlin.$_$.uc;
  var Triple = kotlin_kotlin.$_$.ag;
  var getKClass = kotlin_kotlin.$_$.sc;
  var Pair = kotlin_kotlin.$_$.wf;
  var Entry = kotlin_kotlin.$_$.p5;
  var KtMap = kotlin_kotlin.$_$.q5;
  var KtMutableMap = kotlin_kotlin.$_$.t5;
  var LinkedHashMap = kotlin_kotlin.$_$.m5;
  var HashMap = kotlin_kotlin.$_$.k5;
  var KtSet = kotlin_kotlin.$_$.v5;
  var KtMutableSet = kotlin_kotlin.$_$.u5;
  var LinkedHashSet = kotlin_kotlin.$_$.n5;
  var HashSet = kotlin_kotlin.$_$.l5;
  var Collection = kotlin_kotlin.$_$.j5;
  var KtList = kotlin_kotlin.$_$.o5;
  var KtMutableList = kotlin_kotlin.$_$.r5;
  var ArrayList = kotlin_kotlin.$_$.i5;
  var copyToArray = kotlin_kotlin.$_$.s6;
  var Result = kotlin_kotlin.$_$.xf;
  var ensureNotNull = kotlin_kotlin.$_$.qg;
  var equals = kotlin_kotlin.$_$.ta;
  var getStringHashCode = kotlin_kotlin.$_$.ya;
  var isBlank = kotlin_kotlin.$_$.od;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var toList = kotlin_kotlin.$_$.h8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p3;
  var toHashSet = kotlin_kotlin.$_$.e8;
  var toBooleanArray = kotlin_kotlin.$_$.c8;
  var withIndex = kotlin_kotlin.$_$.o8;
  var to = kotlin_kotlin.$_$.bh;
  var toMap = kotlin_kotlin.$_$.j8;
  var lazy_0 = kotlin_kotlin.$_$.wg;
  var contentEquals = kotlin_kotlin.$_$.d6;
  var initMetadataForObject = kotlin_kotlin.$_$.gb;
  var Char = kotlin_kotlin.$_$.lf;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.g;
  var Duration = kotlin_kotlin.$_$.ff;
  var Companion_getInstance = kotlin_kotlin.$_$.t2;
  var Instant = kotlin_kotlin.$_$.gf;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.u2;
  var Uuid = kotlin_kotlin.$_$.if;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.v2;
  var toIntOrNull = kotlin_kotlin.$_$.re;
  var hashCode = kotlin_kotlin.$_$.za;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.v4;
  var isArray = kotlin_kotlin.$_$.hb;
  var arrayIterator = kotlin_kotlin.$_$.ha;
  var coerceAtLeast = kotlin_kotlin.$_$.hc;
  var addAll = kotlin_kotlin.$_$.w5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.k3;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.q3;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v3;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.w3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m3;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.n3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.t3;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.o3;
  var LinkedHashSet_init_$Create$_1 = kotlin_kotlin.$_$.u3;
  var until = kotlin_kotlin.$_$.mc;
  var step = kotlin_kotlin.$_$.lc;
  var getValue = kotlin_kotlin.$_$.d7;
  var HashMap_init_$Create$_1 = kotlin_kotlin.$_$.l3;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.r3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var get_lastIndex = kotlin_kotlin.$_$.j7;
  var shiftLeft = kotlin_kotlin.$_$.aa;
  var countTrailingZeroBits = kotlin_kotlin.$_$.og;
  var indexOf = kotlin_kotlin.$_$.e7;
  var contentToString = kotlin_kotlin.$_$.h6;
  var Enum = kotlin_kotlin.$_$.qf;
  var joinToString = kotlin_kotlin.$_$.h7;
  var toString_0 = kotlin_kotlin.$_$.ah;
  var KTypeParameter = kotlin_kotlin.$_$.yc;
  var booleanArray = kotlin_kotlin.$_$.ia;
  var emptyMap = kotlin_kotlin.$_$.w6;
  var contentHashCode = kotlin_kotlin.$_$.g6;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.w2;
  var isCharArray = kotlin_kotlin.$_$.kb;
  var copyOf = kotlin_kotlin.$_$.m6;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.m2;
  var isDoubleArray = kotlin_kotlin.$_$.mb;
  var copyOf_0 = kotlin_kotlin.$_$.o6;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.n2;
  var isFloatArray = kotlin_kotlin.$_$.nb;
  var copyOf_1 = kotlin_kotlin.$_$.p6;
  var Companion_instance = kotlin_kotlin.$_$.y2;
  var isLongArray = kotlin_kotlin.$_$.v9;
  var copyOf_2 = kotlin_kotlin.$_$.k6;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.c3;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.s1;
  var ULongArray = kotlin_kotlin.$_$.fg;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.t1;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.p1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.l1;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.q1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.m1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.o2;
  var isIntArray = kotlin_kotlin.$_$.ob;
  var copyOf_3 = kotlin_kotlin.$_$.r6;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.b3;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.j1;
  var UIntArray = kotlin_kotlin.$_$.dg;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.k1;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.g1;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.c1;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.h1;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.d1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.p2;
  var isShortArray = kotlin_kotlin.$_$.rb;
  var copyOf_4 = kotlin_kotlin.$_$.j6;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.d3;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.b2;
  var UShortArray = kotlin_kotlin.$_$.hg;
  var _UShortArray___get_storage__impl__t2jpv5 = kotlin_kotlin.$_$.c2;
  var _UShortArray___init__impl__9b26ef = kotlin_kotlin.$_$.y1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.u1;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.z1;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.v1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.l2;
  var isByteArray = kotlin_kotlin.$_$.jb;
  var copyOf_5 = kotlin_kotlin.$_$.n6;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.a3;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.a1;
  var UByteArray = kotlin_kotlin.$_$.bg;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.b1;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.w;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.t;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.y;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.u;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.k2;
  var isBooleanArray = kotlin_kotlin.$_$.ib;
  var copyOf_6 = kotlin_kotlin.$_$.l6;
  var charArray = kotlin_kotlin.$_$.la;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.o1;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.r1;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.f1;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.i1;
  var _UShortArray___init__impl__9b26ef_0 = kotlin_kotlin.$_$.x1;
  var UShortArray__set_impl_6d8whp = kotlin_kotlin.$_$.a2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.x;
  var UByteArray__set_impl_jvcicn = kotlin_kotlin.$_$.z;
  var trimIndent = kotlin_kotlin.$_$.cf;
  var Unit = kotlin_kotlin.$_$.jg;
  var charSequenceLength = kotlin_kotlin.$_$.oa;
  var lastOrNull = kotlin_kotlin.$_$.l7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.k7;
  var last = kotlin_kotlin.$_$.m7;
  var ULong = kotlin_kotlin.$_$.gg;
  var UInt = kotlin_kotlin.$_$.eg;
  var UByte = kotlin_kotlin.$_$.cg;
  var UShort = kotlin_kotlin.$_$.ig;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xg;
  var asSequence = kotlin_kotlin.$_$.a6;
  var get_js = kotlin_kotlin.$_$.tb;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s2;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  var get_indices = kotlin_kotlin.$_$.g7;
  var get_indices_0 = kotlin_kotlin.$_$.f7;
  var mapOf = kotlin_kotlin.$_$.q7;
  var Companion_instance_0 = kotlin_kotlin.$_$.z2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.pg;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementNames$1);
  initMetadataForClass(elementNames$$inlined$Iterable$1);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.un(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.gr(descriptor, index, deserializer, previousValue) : $super.gr.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.uq(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.tn(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.sn().to();
    if (isNullabilitySupported) {
      return this.ms(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.pr();
    } else {
      this.ps();
      this.ms(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(InstantSerializer, 'InstantSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayClassDesc, 'ArrayClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(HashSetClassDesc, 'HashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(HashMapClassDesc, 'HashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(ReferenceArraySerializer, 'ReferenceArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(HashSetSerializer, 'HashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(LinkedHashSetSerializer, 'LinkedHashSetSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(HashMapSerializer, 'HashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(EnumSerializer, 'EnumSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(EnumDescriptor, 'EnumDescriptor', VOID, PluginGeneratedSerialDescriptor);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NoOpEncoder, 'NoOpEncoder', VOID, AbstractEncoder);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(DoubleArrayBuilder, 'DoubleArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(FloatArrayBuilder, 'FloatArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(LongArrayBuilder, 'LongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ULongArrayBuilder, 'ULongArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(IntArrayBuilder, 'IntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UIntArrayBuilder, 'UIntArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ShortArrayBuilder, 'ShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UShortArrayBuilder, 'UShortArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(ByteArrayBuilder, 'ByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(UByteArrayBuilder, 'UByteArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForClass(BooleanArrayBuilder, 'BooleanArrayBuilder', VOID, PrimitiveArrayBuilder);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(TaggedEncoder, 'TaggedEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(NamedValueEncoder, 'NamedValueEncoder', VOID, TaggedEncoder);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(KeyValueSerializer, 'KeyValueSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(MapEntrySerializer_0, 'MapEntrySerializer', VOID, KeyValueSerializer);
  initMetadataForClass(PairSerializer_0, 'PairSerializer', VOID, KeyValueSerializer);
  initMetadataForClass(TripleSerializer_0, 'TripleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.t17(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializersModuleBuilder, 'SerializersModuleBuilder', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForClass(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', VOID, IllegalArgumentException);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  initMetadataForClass(createCache$1);
  initMetadataForClass(createParametrizedCache$1);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.do('type', serializer_0(StringCompanionObject_instance).sn());
      $this$buildSerialDescriptor.do('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.eo_1.o() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.xn_1 = this$0.fo_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.eo_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return constructCallableReference(function (p0) {
      return p0.sn();
    }, 1, 0, 0);
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.eo_1 = baseClass;
    this.fo_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.go_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).ho = function () {
    return this.eo_1;
  };
  protoOf(PolymorphicSerializer).sn = function () {
    var tmp0 = this.go_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.n1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.eo_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.ko(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.ho());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.jo(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.ho());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    var tmp0_message = missingFields.e1() === 1 ? "Field '" + missingFields.d1(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing";
    MissingFieldException.call($this, tmp0_message, null, missingFields, serialName);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause, missingFields, serialName) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.lo_1 = missingFields;
    this.mo_1 = serialName;
  }
  protoOf(MissingFieldException).no = function (newMessage) {
    return new MissingFieldException(newMessage, this, this.lo_1, this.mo_1);
  };
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.l();
    // Inline function 'kotlin.collections.map' call
    var this_0 = type.k();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$2 = typeOrThrow(item);
      destination.c1(tmp$ret$2);
    }
    var typeArguments = destination;
    var tmp;
    if (typeArguments.r()) {
      var tmp_0;
      if (isInterface_0(rootClass) && !(_this__u8e3s4.po(rootClass) == null)) {
        tmp_0 = null;
      } else {
        tmp_0 = findCachedSerializer(rootClass, isNullable);
      }
      tmp = tmp_0;
    } else {
      var tmp_1;
      if (_this__u8e3s4.oo()) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.Result.getOrNull' call
        var this_1 = findParametrizedCachedSerializer(rootClass, typeArguments, isNullable);
        tmp_1 = _Result___get_isFailure__impl__jpiriv(this_1) ? null : _Result___get_value__impl__bjfvqg(this_1);
      }
      tmp = tmp_1;
    }
    var cachedSerializer = tmp;
    if (!(cachedSerializer == null))
      return cachedSerializer;
    var tmp_2;
    if (typeArguments.r()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _this__u8e3s4.po(rootClass) : tmp0_elvis_lhs;
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_3 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      tmp_2 = tmp_3;
    } else {
      var tmp2_elvis_lhs = serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer);
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var serializers = tmp_4;
      var tmp3_elvis_lhs = parametrizedSerializerOrNull(rootClass, serializers, serializerByKTypeImpl$lambda(typeArguments));
      var tmp4_elvis_lhs = tmp3_elvis_lhs == null ? _this__u8e3s4.qo(rootClass, serializers) : tmp3_elvis_lhs;
      var tmp_5;
      if (tmp4_elvis_lhs == null) {
        // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
        tmp_5 = isInterface_0(rootClass) ? new PolymorphicSerializer(rootClass) : null;
      } else {
        tmp_5 = tmp4_elvis_lhs;
      }
      tmp_2 = tmp_5;
    }
    var contextualSerializer = tmp_2;
    var tmp_6;
    if (contextualSerializer == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_6 = isInterface(contextualSerializer, KSerializer) ? contextualSerializer : THROW_CCE();
    }
    var tmp6_safe_receiver = tmp_6;
    return tmp6_safe_receiver == null ? null : nullable(tmp6_safe_receiver, isNullable);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializersForParameters(_this__u8e3s4, typeArguments, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s = typeArguments.t();
      while (_iterator__ex2g4s.u()) {
        var item = _iterator__ex2g4s.v();
        var tmp$ret$2 = serializer(_this__u8e3s4, item);
        destination.c1(tmp$ret$2);
      }
      tmp = destination;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var _iterator__ex2g4s_0 = typeArguments.t();
      while (_iterator__ex2g4s_0.u()) {
        var item_0 = _iterator__ex2g4s_0.v();
        var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var tmp$ret$5 = tmp_0;
        destination_0.c1(tmp$ret$5);
      }
      tmp = destination_0;
    }
    var serializers = tmp;
    return serializers;
  }
  function parametrizedSerializerOrNull(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp0_elvis_lhs = builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray);
    return tmp0_elvis_lhs == null ? compiledParametrizedSerializer(_this__u8e3s4, serializers) : tmp0_elvis_lhs;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function builtinParametrizedSerializer(_this__u8e3s4, serializers, elementClassifierIfArray) {
    var tmp;
    if (_this__u8e3s4.equals(getKClass(Collection)) || _this__u8e3s4.equals(getKClass(KtList)) || (_this__u8e3s4.equals(getKClass(KtMutableList)) || _this__u8e3s4.equals(getKClass(ArrayList)))) {
      tmp = new ArrayListSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashSet))) {
      tmp = new HashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(KtSet)) || (_this__u8e3s4.equals(getKClass(KtMutableSet)) || _this__u8e3s4.equals(getKClass(LinkedHashSet)))) {
      tmp = new LinkedHashSetSerializer(serializers.d1(0));
    } else if (_this__u8e3s4.equals(getKClass(HashMap))) {
      tmp = new HashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(KtMap)) || (_this__u8e3s4.equals(getKClass(KtMutableMap)) || _this__u8e3s4.equals(getKClass(LinkedHashMap)))) {
      tmp = new LinkedHashMapSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Entry))) {
      tmp = MapEntrySerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Pair))) {
      tmp = PairSerializer(serializers.d1(0), serializers.d1(1));
    } else if (_this__u8e3s4.equals(getKClass(Triple))) {
      tmp = TripleSerializer(serializers.d1(0), serializers.d1(1), serializers.d1(2));
    } else {
      var tmp_0;
      if (isReferenceArray(_this__u8e3s4)) {
        var tmp_1 = elementClassifierIfArray();
        tmp_0 = ArraySerializer((!(tmp_1 == null) ? isInterface(tmp_1, KClass) : false) ? tmp_1 : THROW_CCE(), serializers.d1(0));
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function compiledParametrizedSerializer(_this__u8e3s4, serializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(serializers);
    return constructSerializerForGivenTypeArgs(_this__u8e3s4, tmp$ret$0.slice());
  }
  function serializerByKTypeImpl$lambda($typeArguments) {
    return function () {
      return $typeArguments.d1(0).j();
    };
  }
  function get_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE;
  }
  var SERIALIZERS_CACHE;
  function get_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return SERIALIZERS_CACHE_NULLABLE;
  }
  var SERIALIZERS_CACHE_NULLABLE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE;
  function get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE() {
    _init_properties_SerializersCache_kt__hgwi2p();
    return PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  }
  var PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE;
  function findCachedSerializer(clazz, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp0_safe_receiver = get_SERIALIZERS_CACHE().ro(clazz);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp_0 = isInterface(tmp0_safe_receiver, KSerializer) ? tmp0_safe_receiver : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = get_SERIALIZERS_CACHE_NULLABLE().ro(clazz);
    }
    return tmp;
  }
  function findParametrizedCachedSerializer(clazz, types, isNullable) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp;
    if (!isNullable) {
      var tmp_0 = get_PARAMETRIZED_SERIALIZERS_CACHE().so(clazz, types);
      tmp = new Result(tmp_0) instanceof Result ? tmp_0 : THROW_CCE();
    } else {
      tmp = get_PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE().so(clazz, types);
    }
    return tmp;
  }
  function SERIALIZERS_CACHE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SERIALIZERS_CACHE_NULLABLE$lambda(it) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var tmp0_elvis_lhs = serializerOrNull(it);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.serialization.polymorphicIfInterface' call
      tmp = isInterface_0(it) ? new PolymorphicSerializer(it) : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_nullable(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp_0 = isInterface(tmp2_safe_receiver, KSerializer) ? tmp2_safe_receiver : THROW_CCE();
    }
    return tmp_0;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    return parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda(types));
  }
  function PARAMETRIZED_SERIALIZERS_CACHE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).j();
    };
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda(clazz, types) {
    _init_properties_SerializersCache_kt__hgwi2p();
    var serializers = ensureNotNull(serializersForParameters(EmptySerializersModule_0(), types, true));
    var tmp0_safe_receiver = parametrizedSerializerOrNull(clazz, serializers, PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda(types));
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_nullable(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp = isInterface(tmp1_safe_receiver, KSerializer) ? tmp1_safe_receiver : THROW_CCE();
    }
    return tmp;
  }
  function PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda$lambda($types) {
    return function () {
      return $types.d1(0).j();
    };
  }
  var properties_initialized_SerializersCache_kt_q8kf25;
  function _init_properties_SerializersCache_kt__hgwi2p() {
    if (!properties_initialized_SerializersCache_kt_q8kf25) {
      properties_initialized_SerializersCache_kt_q8kf25 = true;
      SERIALIZERS_CACHE = createCache(SERIALIZERS_CACHE$lambda);
      SERIALIZERS_CACHE_NULLABLE = createCache(SERIALIZERS_CACHE_NULLABLE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE$lambda);
      PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE = createParametrizedCache(PARAMETRIZED_SERIALIZERS_CACHE_NULLABLE$lambda);
    }
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.sn().to()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function serializer_1(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return InstantSerializer_getInstance();
  }
  function serializer_16(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.po(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.sn();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.yo_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.uo_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.xo_1 = original;
    this.yo_1 = kClass;
    this.zo_1 = this.xo_1.ap() + '<' + this.yo_1.o() + '>';
  }
  protoOf(ContextDescriptor).ap = function () {
    return this.zo_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.xo_1, another.xo_1) && another.yo_1.equals(this.yo_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.yo_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.zo_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.yo_1) + ', original: ' + toString(this.xo_1) + ')';
  };
  protoOf(ContextDescriptor).bp = function () {
    return this.xo_1.bp();
  };
  protoOf(ContextDescriptor).to = function () {
    return this.xo_1.to();
  };
  protoOf(ContextDescriptor).cp = function () {
    return this.xo_1.cp();
  };
  protoOf(ContextDescriptor).dp = function () {
    return this.xo_1.dp();
  };
  protoOf(ContextDescriptor).ep = function () {
    return this.xo_1.ep();
  };
  protoOf(ContextDescriptor).fp = function (index) {
    return this.xo_1.fp(index);
  };
  protoOf(ContextDescriptor).gp = function (name) {
    return this.xo_1.gp(name);
  };
  protoOf(ContextDescriptor).hp = function (index) {
    return this.xo_1.hp(index);
  };
  protoOf(ContextDescriptor).ip = function (index) {
    return this.xo_1.ip(index);
  };
  protoOf(ContextDescriptor).jp = function (index) {
    return this.xo_1.jp(index);
  };
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function SerialDescriptor() {
  }
  function get_elementNames(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementNames$$inlined$Iterable$1(_this__u8e3s4);
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementNames$1($this_elementNames) {
    this.lp_1 = $this_elementNames;
    this.kp_1 = $this_elementNames.dp();
  }
  protoOf(elementNames$1).u = function () {
    return this.kp_1 > 0;
  };
  protoOf(elementNames$1).v = function () {
    var tmp = this.lp_1.dp();
    var _unary__edvuaz = this.kp_1;
    this.kp_1 = _unary__edvuaz - 1 | 0;
    return this.lp_1.fp(tmp - _unary__edvuaz | 0);
  };
  function elementNames$$inlined$Iterable$1($this_elementNames) {
    this.mp_1 = $this_elementNames;
  }
  protoOf(elementNames$$inlined$Iterable$1).t = function () {
    return new elementNames$1(this.mp_1);
  };
  function elementDescriptors$1($this_elementDescriptors) {
    this.op_1 = $this_elementDescriptors;
    this.np_1 = $this_elementDescriptors.dp();
  }
  protoOf(elementDescriptors$1).u = function () {
    return this.np_1 > 0;
  };
  protoOf(elementDescriptors$1).v = function () {
    var tmp = this.op_1.dp();
    var _unary__edvuaz = this.np_1;
    this.np_1 = _unary__edvuaz - 1 | 0;
    return this.op_1.ip(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.pp_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).t = function () {
    return new elementDescriptors$1(this.pp_1);
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    var tmp;
    if (builderAction === VOID) {
      tmp = buildClassSerialDescriptor$lambda;
    } else {
      tmp = builderAction;
    }
    builderAction = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.yn_1.e1(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.yn_1.e1(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.vn_1 = serialName;
    this.wn_1 = false;
    this.xn_1 = emptyList();
    this.yn_1 = ArrayList_init_$Create$_0();
    this.zn_1 = HashSet_init_$Create$();
    this.ao_1 = ArrayList_init_$Create$_0();
    this.bo_1 = ArrayList_init_$Create$_0();
    this.co_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ClassSerialDescriptorBuilder).qp = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.zn_1.c1(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.vn_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.yn_1.c1(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ao_1.c1(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.bo_1.c1(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.co_1.c1(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).do = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.qp(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.qp.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.cq_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.n1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.bq_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef(p0);
    }, 1, 0, 1);
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.rp_1 = serialName;
    this.sp_1 = kind;
    this.tp_1 = elementsCount;
    this.up_1 = builder.xn_1;
    this.vp_1 = toHashSet(builder.yn_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.yn_1;
    tmp.wp_1 = copyToArray(this_0);
    this.xp_1 = compactArray(builder.ao_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.bo_1;
    tmp_0.yp_1 = copyToArray(this_1);
    this.zp_1 = toBooleanArray(builder.co_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.wp_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.t();
    while (_iterator__ex2g4s.u()) {
      var item = _iterator__ex2g4s.v();
      var tmp$ret$4 = to(item.ee_1, item.de_1);
      destination.c1(tmp$ret$4);
    }
    tmp_1.aq_1 = toMap(destination);
    this.bq_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.cq_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).ap = function () {
    return this.rp_1;
  };
  protoOf(SerialDescriptorImpl).bp = function () {
    return this.sp_1;
  };
  protoOf(SerialDescriptorImpl).dp = function () {
    return this.tp_1;
  };
  protoOf(SerialDescriptorImpl).ep = function () {
    return this.up_1;
  };
  protoOf(SerialDescriptorImpl).dq = function () {
    return this.vp_1;
  };
  protoOf(SerialDescriptorImpl).fp = function (index) {
    return getChecked(this.wp_1, index);
  };
  protoOf(SerialDescriptorImpl).gp = function (name) {
    var tmp0_elvis_lhs = this.aq_1.n2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(SerialDescriptorImpl).hp = function (index) {
    return getChecked(this.yp_1, index);
  };
  protoOf(SerialDescriptorImpl).ip = function (index) {
    return getChecked(this.xp_1, index);
  };
  protoOf(SerialDescriptorImpl).jp = function (index) {
    return getChecked_0(this.zp_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ap() === other.ap())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.bq_1, other.bq_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.dp() === other.dp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.dp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ip(index).ap() === other.ip(index).ap())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ip(index).bp(), other.ip(index).bp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    return toStringImpl(this);
  };
  function buildClassSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).o());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).eq = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).fq = function () {
    return true;
  };
  protoOf(AbstractDecoder).gq = function () {
    return null;
  };
  protoOf(AbstractDecoder).hq = function () {
    var tmp = this.eq();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).iq = function () {
    var tmp = this.eq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).jq = function () {
    var tmp = this.eq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).kq = function () {
    var tmp = this.eq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).lq = function () {
    var tmp = this.eq();
    return typeof tmp === 'bigint' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).mq = function () {
    var tmp = this.eq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).nq = function () {
    var tmp = this.eq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).oq = function () {
    var tmp = this.eq();
    return tmp instanceof Char ? tmp.w1_1 : THROW_CCE();
  };
  protoOf(AbstractDecoder).pq = function () {
    var tmp = this.eq();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).qq = function (enumDescriptor) {
    var tmp = this.eq();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).rq = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).sq = function (deserializer, previousValue) {
    return this.tq(deserializer);
  };
  protoOf(AbstractDecoder).uq = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).vq = function (descriptor) {
  };
  protoOf(AbstractDecoder).wq = function (descriptor, index) {
    return this.hq();
  };
  protoOf(AbstractDecoder).xq = function (descriptor, index) {
    return this.iq();
  };
  protoOf(AbstractDecoder).yq = function (descriptor, index) {
    return this.jq();
  };
  protoOf(AbstractDecoder).zq = function (descriptor, index) {
    return this.kq();
  };
  protoOf(AbstractDecoder).ar = function (descriptor, index) {
    return this.lq();
  };
  protoOf(AbstractDecoder).br = function (descriptor, index) {
    return this.mq();
  };
  protoOf(AbstractDecoder).cr = function (descriptor, index) {
    return this.nq();
  };
  protoOf(AbstractDecoder).dr = function (descriptor, index) {
    return this.oq();
  };
  protoOf(AbstractDecoder).er = function (descriptor, index) {
    return this.pq();
  };
  protoOf(AbstractDecoder).fr = function (descriptor, index) {
    return this.rq(descriptor.ip(index));
  };
  protoOf(AbstractDecoder).gr = function (descriptor, index, deserializer, previousValue) {
    return this.sq(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).ir = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.sn().to();
    var tmp;
    if (isNullabilitySupported || this.fq()) {
      tmp = this.sq(deserializer, previousValue);
    } else {
      tmp = this.gq();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).uq = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).vq = function (descriptor) {
  };
  protoOf(AbstractEncoder).nr = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).or = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).pr = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).qr = function (value) {
    return this.or(value);
  };
  protoOf(AbstractEncoder).rr = function (value) {
    return this.or(value);
  };
  protoOf(AbstractEncoder).sr = function (value) {
    return this.or(value);
  };
  protoOf(AbstractEncoder).tr = function (value) {
    return this.or(value);
  };
  protoOf(AbstractEncoder).ur = function (value) {
    return this.or(value);
  };
  protoOf(AbstractEncoder).vr = function (value) {
    return this.or(value);
  };
  protoOf(AbstractEncoder).wr = function (value) {
    return this.or(value);
  };
  protoOf(AbstractEncoder).xr = function (value) {
    return this.or(new Char(value));
  };
  protoOf(AbstractEncoder).yr = function (value) {
    return this.or(value);
  };
  protoOf(AbstractEncoder).zr = function (enumDescriptor, index) {
    return this.or(index);
  };
  protoOf(AbstractEncoder).as = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).bs = function (descriptor, index, value) {
    if (this.nr(descriptor, index)) {
      this.qr(value);
    }
  };
  protoOf(AbstractEncoder).cs = function (descriptor, index, value) {
    if (this.nr(descriptor, index)) {
      this.rr(value);
    }
  };
  protoOf(AbstractEncoder).ds = function (descriptor, index, value) {
    if (this.nr(descriptor, index)) {
      this.sr(value);
    }
  };
  protoOf(AbstractEncoder).es = function (descriptor, index, value) {
    if (this.nr(descriptor, index)) {
      this.tr(value);
    }
  };
  protoOf(AbstractEncoder).fs = function (descriptor, index, value) {
    if (this.nr(descriptor, index)) {
      this.ur(value);
    }
  };
  protoOf(AbstractEncoder).gs = function (descriptor, index, value) {
    if (this.nr(descriptor, index)) {
      this.vr(value);
    }
  };
  protoOf(AbstractEncoder).hs = function (descriptor, index, value) {
    if (this.nr(descriptor, index)) {
      this.wr(value);
    }
  };
  protoOf(AbstractEncoder).is = function (descriptor, index, value) {
    if (this.nr(descriptor, index)) {
      this.xr(value);
    }
  };
  protoOf(AbstractEncoder).js = function (descriptor, index, value) {
    if (this.nr(descriptor, index)) {
      this.yr(value);
    }
  };
  protoOf(AbstractEncoder).ks = function (descriptor, index) {
    return this.nr(descriptor, index) ? this.as(descriptor.ip(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).ls = function (descriptor, index, serializer, value) {
    if (this.nr(descriptor, index)) {
      this.ms(serializer, value);
    }
  };
  protoOf(AbstractEncoder).ns = function (descriptor, index, serializer, value) {
    if (this.nr(descriptor, index)) {
      this.os(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.er($this.sn(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    return compositeDecoder.hr($this.sn(), 1, serializer);
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).io = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.sn();
    var composite = encoder.uq(descriptor);
    composite.js(this.sn(), 0, actualSerializer.sn().ap());
    var tmp = this.sn();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$2 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.ls(tmp, 1, tmp$ret$2, value);
    composite.vq(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).tn = function (encoder, value) {
    return this.io(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).un = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.sn();
    var composite = decoder.uq(descriptor);
    var tmp$ret$1;
    $l$block: {
      var klassName = null;
      var value = null;
      if (composite.kr()) {
        tmp$ret$1 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.lr(this.sn());
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName = composite.er(this.sn(), index);
            break;
          case 1:
            var tmp0 = klassName;
            var tmp$ret$2;
            $l$block_0: {
              // Inline function 'kotlin.requireNotNull' call
              if (tmp0 == null) {
                var message = 'Cannot read polymorphic value before its type token';
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$2 = tmp0;
                break $l$block_0;
              }
            }

            klassName = tmp$ret$2;
            var serializer = findPolymorphicSerializer_0(this, composite, klassName);
            value = composite.hr(this.sn(), index, serializer);
            break;
          default:
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var tmp0_0 = value;
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0_0 == null) {
          var message_0 = 'Polymorphic value has not been read for class ' + klassName;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp0_0;
          break $l$block_1;
        }
      }
      var tmp = tmp$ret$4;
      tmp$ret$1 = !(tmp == null) ? tmp : THROW_CCE();
    }
    var result = tmp$ret$1;
    composite.vq(descriptor);
    return result;
  };
  protoOf(AbstractPolymorphicSerializer).jo = function (decoder, klassName) {
    return decoder.jr().ss(this.ho(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).ko = function (encoder, value) {
    return encoder.jr().ts(this.ho(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.o();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.o() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.o() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.us_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).sn = function () {
    return this.us_1;
  };
  protoOf(NothingSerializer_0).vs = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).tn = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.vs(encoder, tmp);
  };
  protoOf(NothingSerializer_0).un = function (decoder) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' does not have instances");
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.ws_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).sn = function () {
    return this.ws_1;
  };
  protoOf(DurationSerializer).xs = function (encoder, value) {
    encoder.yr(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).tn = function (encoder, value) {
    return this.xs(encoder, value instanceof Duration ? value.fk_1 : THROW_CCE());
  };
  protoOf(DurationSerializer).ys = function (decoder) {
    return Companion_getInstance().gk(decoder.pq());
  };
  protoOf(DurationSerializer).un = function (decoder) {
    return new Duration(this.ys(decoder));
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.zs_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).sn = function () {
    return this.zs_1;
  };
  protoOf(InstantSerializer).at = function (encoder, value) {
    encoder.yr(value.toString());
  };
  protoOf(InstantSerializer).tn = function (encoder, value) {
    return this.at(encoder, value instanceof Instant ? value : THROW_CCE());
  };
  protoOf(InstantSerializer).un = function (decoder) {
    return Companion_getInstance_0().tk(decoder.pq());
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.bt_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).sn = function () {
    return this.bt_1;
  };
  protoOf(UuidSerializer).ct = function (encoder, value) {
    encoder.yr(value.toString());
  };
  protoOf(UuidSerializer).tn = function (encoder, value) {
    return this.ct(encoder, value instanceof Uuid ? value : THROW_CCE());
  };
  protoOf(UuidSerializer).un = function (decoder) {
    return Companion_getInstance_1().zl(decoder.pq());
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayClassDesc).ap = function () {
    return 'kotlin.Array';
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).ap = function () {
    return 'kotlin.collections.ArrayList';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(HashSetClassDesc).ap = function () {
    return 'kotlin.collections.HashSet';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(LinkedHashSetClassDesc).ap = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.ft_1 = elementDescriptor;
    this.gt_1 = 1;
  }
  protoOf(ListLikeDescriptor).bp = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).dp = function () {
    return this.gt_1;
  };
  protoOf(ListLikeDescriptor).fp = function (index) {
    requireNonNegativeIndex(index, this.ap());
    return index.toString();
  };
  protoOf(ListLikeDescriptor).gp = function (name) {
    var tmp0_safe_receiver = toIntOrNull(name);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver >= 0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -3 : tmp1_elvis_lhs;
  };
  protoOf(ListLikeDescriptor).jp = function (index) {
    requireNonNegativeIndex(index, this.ap());
    return false;
  };
  protoOf(ListLikeDescriptor).hp = function (index) {
    requireNonNegativeIndex(index, this.ap());
    return emptyList();
  };
  protoOf(ListLikeDescriptor).ip = function (index) {
    requireNonNegativeIndex(index, this.ap());
    return this.ft_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.ft_1, other.ft_1) && this.ap() === other.ap())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.ft_1), 31) + getStringHashCode(this.ap()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.ap() + '(' + toString(this.ft_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.nt_1 = serialName;
    this.ot_1 = keyDescriptor;
    this.pt_1 = valueDescriptor;
    this.qt_1 = 2;
  }
  protoOf(MapLikeDescriptor).ap = function () {
    return this.nt_1;
  };
  protoOf(MapLikeDescriptor).bp = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).dp = function () {
    return this.qt_1;
  };
  protoOf(MapLikeDescriptor).fp = function (index) {
    requireNonNegativeIndex(index, this.ap());
    return index.toString();
  };
  protoOf(MapLikeDescriptor).gp = function (name) {
    var tmp0_safe_receiver = toIntOrNull(name);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver >= 0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? -3 : tmp1_elvis_lhs;
  };
  protoOf(MapLikeDescriptor).jp = function (index) {
    requireNonNegativeIndex(index, this.ap());
    return false;
  };
  protoOf(MapLikeDescriptor).hp = function (index) {
    requireNonNegativeIndex(index, this.ap());
    return emptyList();
  };
  protoOf(MapLikeDescriptor).ip = function (index) {
    requireNonNegativeIndex(index, this.ap());
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.ot_1;
        break;
      case 1:
        tmp = this.pt_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.ap() === other.ap()))
      return false;
    if (!equals(this.ot_1, other.ot_1))
      return false;
    if (!equals(this.pt_1, other.pt_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.ap());
    result = imul(31, result) + hashCode(this.ot_1) | 0;
    result = imul(31, result) + hashCode(this.pt_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.ap() + '(' + toString(this.ot_1) + ', ' + toString(this.pt_1) + ')';
  };
  function requireNonNegativeIndex(index, name) {
    if (index < 0)
      throw IndexOutOfBoundsException_init_$Create$('Illegal index ' + index + ', ' + name + ' expects only non-negative indices');
  }
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.tt_1 = primitive.ap() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).ap = function () {
    return this.tt_1;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.vt_1 = kClass;
    this.wt_1 = new ArrayClassDesc(eSerializer.sn());
  }
  protoOf(ReferenceArraySerializer).sn = function () {
    return this.wt_1;
  };
  protoOf(ReferenceArraySerializer).xt = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ReferenceArraySerializer).yt = function (_this__u8e3s4) {
    return this.xt((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).zt = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  protoOf(ReferenceArraySerializer).au = function (_this__u8e3s4) {
    return this.zt((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).bu = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.arrayListOf' call
      return ArrayList_init_$Create$_0();
    }
    return ArrayList_init_$Create$(initialCapacityHint);
  };
  protoOf(ReferenceArraySerializer).cu = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ReferenceArraySerializer).du = function (_this__u8e3s4) {
    return this.cu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).eu = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.vt_1);
  };
  protoOf(ReferenceArraySerializer).fu = function (_this__u8e3s4) {
    return this.eu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ReferenceArraySerializer).gu = function (_this__u8e3s4, expectedSize) {
    var expectedCapacity = coerceAtLeast(expectedSize, 0);
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$(expectedCapacity);
    addAll(this_0, _this__u8e3s4);
    return this_0;
  };
  protoOf(ReferenceArraySerializer).hu = function (_this__u8e3s4, expectedSize) {
    return this.gu((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ReferenceArraySerializer).iu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.t2(index, element);
  };
  protoOf(ReferenceArraySerializer).ju = function (_this__u8e3s4, index, element) {
    return this.iu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ru_1 = new ArrayListClassDesc(element.sn());
  }
  protoOf(ArrayListSerializer).sn = function () {
    return this.ru_1;
  };
  protoOf(ArrayListSerializer).bu = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.arrayListOf' call
      return ArrayList_init_$Create$_0();
    }
    return ArrayList_init_$Create$(initialCapacityHint);
  };
  protoOf(ArrayListSerializer).su = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(ArrayListSerializer).du = function (_this__u8e3s4) {
    return this.su(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).tu = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).fu = function (_this__u8e3s4) {
    return this.tu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).uu = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof ArrayList) {
      // Inline function 'kotlin.also' call
      _this__u8e3s4.b5(expectedSize);
      return _this__u8e3s4;
    }
    if (expectedSize === _this__u8e3s4.e1())
      return ArrayList_init_$Create$_1(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$(expectedSize);
    this_0.i1(_this__u8e3s4);
    return this_0;
  };
  protoOf(ArrayListSerializer).hu = function (_this__u8e3s4, expectedSize) {
    return this.uu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ArrayListSerializer).vu = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.t2(index, element);
  };
  protoOf(ArrayListSerializer).ju = function (_this__u8e3s4, index, element) {
    return this.vu(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.av_1 = new HashSetClassDesc(eSerializer.sn());
  }
  protoOf(HashSetSerializer).sn = function () {
    return this.av_1;
  };
  protoOf(HashSetSerializer).bu = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return HashSet_init_$Create$();
    return newHashSet(initialCapacityHint);
  };
  protoOf(HashSetSerializer).bv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashSetSerializer).du = function (_this__u8e3s4) {
    return this.bv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).cv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashSetSerializer).fu = function (_this__u8e3s4) {
    return this.cv(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashSetSerializer).dv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof HashSet)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return HashSet_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newHashSet(expectedSize);
    this_0.i1(_this__u8e3s4);
    return this_0;
  };
  protoOf(HashSetSerializer).hu = function (_this__u8e3s4, expectedSize) {
    return this.dv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(HashSetSerializer).ev = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(HashSetSerializer).ju = function (_this__u8e3s4, index, element) {
    return this.ev(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.gv_1 = new LinkedHashSetClassDesc(eSerializer.sn());
  }
  protoOf(LinkedHashSetSerializer).sn = function () {
    return this.gv_1;
  };
  protoOf(LinkedHashSetSerializer).bu = function (initialCapacityHint) {
    if (initialCapacityHint === -1) {
      // Inline function 'kotlin.collections.linkedSetOf' call
      return LinkedHashSet_init_$Create$();
    }
    return newLinkedHashSet(initialCapacityHint);
  };
  protoOf(LinkedHashSetSerializer).hv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashSetSerializer).du = function (_this__u8e3s4) {
    return this.hv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).iv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashSetSerializer).fu = function (_this__u8e3s4) {
    return this.iv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashSetSerializer).dv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof LinkedHashSet)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return LinkedHashSet_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newLinkedHashSet(expectedSize);
    this_0.i1(_this__u8e3s4);
    return this_0;
  };
  protoOf(LinkedHashSetSerializer).hu = function (_this__u8e3s4, expectedSize) {
    return this.dv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtSet) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(LinkedHashSetSerializer).jv = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.c1(element);
  };
  protoOf(LinkedHashSetSerializer).ju = function (_this__u8e3s4, index, element) {
    return this.jv(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.mv_1 = new HashMapClassDesc(kSerializer.sn(), vSerializer.sn());
  }
  protoOf(HashMapSerializer).sn = function () {
    return this.mv_1;
  };
  protoOf(HashMapSerializer).nv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(HashMapSerializer).yt = function (_this__u8e3s4) {
    return this.nv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).ov = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(HashMapSerializer).au = function (_this__u8e3s4) {
    return this.ov((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).bu = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return HashMap_init_$Create$();
    return newHashMap(initialCapacityHint);
  };
  protoOf(HashMapSerializer).pv = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(HashMapSerializer).du = function (_this__u8e3s4) {
    return this.pv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).qv = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(HashMapSerializer).fu = function (_this__u8e3s4) {
    return this.qv(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(HashMapSerializer).rv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof HashMap)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return HashMap_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newHashMap(expectedSize);
    this_0.x2(_this__u8e3s4);
    return this_0;
  };
  protoOf(HashMapSerializer).hu = function (_this__u8e3s4, expectedSize) {
    return this.rv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.yv_1 = new LinkedHashMapClassDesc(kSerializer.sn(), vSerializer.sn());
  }
  protoOf(LinkedHashMapSerializer).sn = function () {
    return this.yv_1;
  };
  protoOf(LinkedHashMapSerializer).nv = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(LinkedHashMapSerializer).yt = function (_this__u8e3s4) {
    return this.nv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ov = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.l1().t();
  };
  protoOf(LinkedHashMapSerializer).au = function (_this__u8e3s4) {
    return this.ov((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).bu = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return LinkedHashMap_init_$Create$();
    return newLinkedHashMap(initialCapacityHint);
  };
  protoOf(LinkedHashMapSerializer).zv = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.e1(), 2);
  };
  protoOf(LinkedHashMapSerializer).du = function (_this__u8e3s4) {
    return this.zv(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).aw = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).fu = function (_this__u8e3s4) {
    return this.aw(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).rv = function (_this__u8e3s4, expectedSize) {
    if (_this__u8e3s4 instanceof LinkedHashMap)
      return _this__u8e3s4;
    if (expectedSize <= _this__u8e3s4.e1())
      return LinkedHashMap_init_$Create$_0(_this__u8e3s4);
    // Inline function 'kotlin.also' call
    var this_0 = newLinkedHashMap(expectedSize);
    this_0.x2(_this__u8e3s4);
    return this_0;
  };
  protoOf(LinkedHashMapSerializer).hu = function (_this__u8e3s4, expectedSize) {
    return this.rv((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ku_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).lu = function (encoder, value) {
    var size = this.yt(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.sn();
    var composite = encoder.qs(descriptor, size);
    var iterator = this.au(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.ls(this.sn(), index, this.ku_1, iterator.v());
      }
       while (inductionVariable < size);
    composite.vq(descriptor);
  };
  protoOf(CollectionLikeSerializer).tn = function (encoder, value) {
    return this.lu(encoder, value);
  };
  protoOf(CollectionLikeSerializer).mu = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.nu(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).nu = function (decoder, index, builder, checkIndex) {
    this.ju(builder, index, decoder.hr(this.sn(), index, this.ku_1));
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).xu = function (_this__u8e3s4) {
    return _this__u8e3s4.e1();
  };
  protoOf(CollectionSerializer).yt = function (_this__u8e3s4) {
    return this.xu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).yu = function (_this__u8e3s4) {
    return _this__u8e3s4.t();
  };
  protoOf(CollectionSerializer).au = function (_this__u8e3s4) {
    return this.yu((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function newHashSet(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return HashSet_init_$Create$_1(capacity);
  }
  function newLinkedHashSet(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return LinkedHashSet_init_$Create$_1(capacity);
  }
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.sv_1 = keySerializer;
    this.tv_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).uv = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.q1_1;
    var last = progression.r1_1;
    var step_0 = progression.s1_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.vv(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).mu = function (decoder, builder, startIndex, size) {
    return this.uv(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).vv = function (decoder, index, builder, checkIndex) {
    var key = decoder.hr(this.sn(), index, this.sv_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.lr(this.sn());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.l2(key)) {
      var tmp_2 = this.tv_1.sn().bp();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.gr(this.sn(), vIndex, this.tv_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.hr(this.sn(), vIndex, this.tv_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.v2(key, value);
  };
  protoOf(MapLikeSerializer).nu = function (decoder, index, builder, checkIndex) {
    return this.vv(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).lu = function (encoder, value) {
    var size = this.yt(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.sn();
    var composite = encoder.qs(descriptor, size);
    var iterator = this.au(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var k = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.n1();
      var tmp = this.sn();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.ls(tmp, _unary__edvuaz, this.sv_1, k);
      var tmp_0 = this.sn();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.ls(tmp_0, _unary__edvuaz_0, this.tv_1, v);
    }
    composite.vq(descriptor);
  };
  protoOf(MapLikeSerializer).tn = function (encoder, value) {
    return this.lu(encoder, value);
  };
  function newHashMap(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return HashMap_init_$Create$_1(capacity);
  }
  function newLinkedHashMap(expectedCapacity) {
    var capacity = estimateCapacityForHashMap(expectedCapacity);
    return LinkedHashMap_init_$Create$_1(capacity);
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).pu = function (decoder, previous) {
    var compositeDecoder = decoder.uq(this.sn());
    var expectedSize = compositeDecoder.mr(this.sn());
    // Inline function 'kotlin.require' call
    if (!(expectedSize >= -1)) {
      var message = 'Decoded collection size should be either non-negative, or -1 (meaning, unknown). Was: ' + expectedSize;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    if (!(previous == null)) {
      tmp = this.hu(previous, this.yt(previous) + coerceAtLeast(expectedSize, 0) | 0);
    } else {
      tmp = this.bu(expectedSize);
    }
    var builder = tmp;
    var startIndex = this.du(builder);
    if (compositeDecoder.kr()) {
      this.mu(compositeDecoder, builder, startIndex, expectedSize);
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.lr(this.sn());
        if (index === -1)
          break $l$loop;
        this.ou(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.vq(this.sn());
    return this.fu(builder);
  };
  protoOf(AbstractCollectionSerializer).un = function (decoder) {
    return this.pu(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).ou = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.nu(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.nu.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.cw_1 = new PrimitiveArrayDescriptor(primitiveSerializer.sn());
  }
  protoOf(PrimitiveArraySerializer).sn = function () {
    return this.cw_1;
  };
  protoOf(PrimitiveArraySerializer).dw = function (_this__u8e3s4) {
    return _this__u8e3s4.ew();
  };
  protoOf(PrimitiveArraySerializer).du = function (_this__u8e3s4) {
    return this.dw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).fw = function (_this__u8e3s4) {
    return _this__u8e3s4.gw();
  };
  protoOf(PrimitiveArraySerializer).fu = function (_this__u8e3s4) {
    return this.fw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).hw = function (_this__u8e3s4) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).au = function (_this__u8e3s4) {
    return this.hw(_this__u8e3s4);
  };
  protoOf(PrimitiveArraySerializer).iw = function (_this__u8e3s4, index, element) {
    // Inline function 'kotlin.error' call
    var message = 'This method lead to boxing and must not be used, use Builder.append instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).ju = function (_this__u8e3s4, index, element) {
    return this.iw(_this__u8e3s4 instanceof PrimitiveArrayBuilder ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  protoOf(PrimitiveArraySerializer).bu = function (initialCapacityHint) {
    if (initialCapacityHint === -1)
      return this.jw();
    return this.kw(initialCapacityHint);
  };
  protoOf(PrimitiveArraySerializer).nw = function (encoder, value) {
    var size = this.yt(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.cw_1;
    var composite = encoder.qs(descriptor, size);
    this.mw(composite, value, size);
    composite.vq(descriptor);
  };
  protoOf(PrimitiveArraySerializer).tn = function (encoder, value) {
    return this.nw(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).lu = function (encoder, value) {
    return this.nw(encoder, value);
  };
  protoOf(PrimitiveArraySerializer).un = function (decoder) {
    return this.pu(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  protoOf(PrimitiveArrayBuilder).pw = function (requiredCapacity, $super) {
    requiredCapacity = requiredCapacity === VOID ? this.ew() + 1 | 0 : requiredCapacity;
    var tmp;
    if ($super === VOID) {
      this.ow(requiredCapacity);
      tmp = Unit_instance;
    } else {
      tmp = $super.ow.call(this, requiredCapacity);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance_1 = this;
    this.qw_1 = new BigInt64Array(0);
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = new BigInt64Array(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = shiftLeft(-1n, elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.uw_1[slot] = $this.uw_1[slot] | shiftLeft(1n, offsetInSlot);
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.uw_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.uw_1[slot];
        while (!(slotMarks === -1n)) {
          var indexInSlot = countTrailingZeroBits(~slotMarks);
          slotMarks = slotMarks | shiftLeft(1n, indexInSlot);
          var index = slotOffset + indexInSlot | 0;
          if ($this.sw_1($this.rw_1, index)) {
            $this.uw_1[slot] = slotMarks;
            return index;
          }
        }
        $this.uw_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_7();
    this.rw_1 = descriptor;
    this.sw_1 = readIfAbsent;
    var elementsCount = this.rw_1.dp();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = 0n;
      } else {
        tmp_0 = shiftLeft(-1n, elementsCount);
      }
      tmp.tw_1 = tmp_0;
      this.uw_1 = Companion_getInstance_7().qw_1;
    } else {
      this.tw_1 = 0n;
      this.uw_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).vw = function (index) {
    if (index < 64) {
      this.tw_1 = this.tw_1 | shiftLeft(1n, index);
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).ww = function () {
    var elementsCount = this.rw_1.dp();
    while (!(this.tw_1 === -1n)) {
      var index = countTrailingZeroBits(~this.tw_1);
      this.tw_1 = this.tw_1 | shiftLeft(1n, index);
      if (this.sw_1(this.rw_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function createSimpleEnumSerializer(serialName, values) {
    return new EnumSerializer(serialName, values);
  }
  function createUnmarkedDescriptor($this, serialName) {
    var d = new EnumDescriptor(serialName, $this.xw_1.length);
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = $this.xw_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      d.mx(element.z_1);
    }
    return d;
  }
  function EnumSerializer$descriptor$delegate$lambda(this$0, $serialName) {
    return function () {
      var tmp0_elvis_lhs = this$0.yw_1;
      return tmp0_elvis_lhs == null ? createUnmarkedDescriptor(this$0, $serialName) : tmp0_elvis_lhs;
    };
  }
  function EnumSerializer$_get_descriptor_$ref_j67dlw() {
    return constructCallableReference(function (p0) {
      return p0.sn();
    }, 1, 0, 2);
  }
  function EnumSerializer(serialName, values) {
    this.xw_1 = values;
    this.yw_1 = null;
    var tmp = this;
    tmp.zw_1 = lazy_0(EnumSerializer$descriptor$delegate$lambda(this, serialName));
  }
  protoOf(EnumSerializer).sn = function () {
    var tmp0 = this.zw_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, EnumSerializer$_get_descriptor_$ref_j67dlw(), null);
    return tmp0.n1();
  };
  protoOf(EnumSerializer).nx = function (encoder, value) {
    var index = indexOf(this.xw_1, value);
    if (index === -1) {
      throw SerializationException_init_$Create$_0(toString(value) + ' is not a valid enum ' + this.sn().ap() + ', ' + ('must be one of ' + contentToString(this.xw_1)));
    }
    encoder.zr(this.sn(), index);
  };
  protoOf(EnumSerializer).tn = function (encoder, value) {
    return this.nx(encoder, value instanceof Enum ? value : THROW_CCE());
  };
  protoOf(EnumSerializer).un = function (decoder) {
    var index = decoder.qq(this.sn());
    if (!(0 <= index ? index <= (this.xw_1.length - 1 | 0) : false)) {
      throw SerializationException_init_$Create$_0('' + index + ' is not among valid ' + this.sn().ap() + ' enum values, ' + ('values size is ' + this.xw_1.length));
    }
    return this.xw_1[index];
  };
  protoOf(EnumSerializer).toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.sn().ap() + '>';
  };
  function _get_elementDescriptors__y23q9p($this) {
    var tmp0 = $this.by_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('elementDescriptors', 1, tmp, EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a(), null);
    return tmp0.n1();
  }
  function EnumDescriptor$elementDescriptors$delegate$lambda($elementsCount, $name, this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = $elementsCount;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        tmp_1[tmp_2] = buildSerialDescriptor($name + '.' + this$0.fp(tmp_2), OBJECT_getInstance(), []);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function EnumDescriptor$_get_elementDescriptors_$ref_5lvk4a() {
    return constructCallableReference(function (p0) {
      return _get_elementDescriptors__y23q9p(p0);
    }, 1, 0, 3);
  }
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, VOID, elementsCount);
    this.ay_1 = ENUM_getInstance();
    var tmp = this;
    tmp.by_1 = lazy_0(EnumDescriptor$elementDescriptors$delegate$lambda(elementsCount, name, this));
  }
  protoOf(EnumDescriptor).bp = function () {
    return this.ay_1;
  };
  protoOf(EnumDescriptor).ip = function (index) {
    return getChecked(_get_elementDescriptors__y23q9p(this), index);
  };
  protoOf(EnumDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!isInterface(other, SerialDescriptor))
      return false;
    if (!(other.bp() === ENUM_getInstance()))
      return false;
    if (!(this.ap() === other.ap()))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  protoOf(EnumDescriptor).toString = function () {
    return joinToString(get_elementNames(this), ', ', this.ap() + '(', ')');
  };
  protoOf(EnumDescriptor).hashCode = function () {
    var result = getStringHashCode(this.ap());
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = get_elementNames(this).t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var elementsHashCode = accumulator;
    result = imul(31, result) + elementsHashCode | 0;
    return result;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.qy_1 = true;
  }
  protoOf(InlineClassDescriptor).cp = function () {
    return this.qy_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ap() === other.ap())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.qy_1 && contentEquals(this.cy(), other.cy()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.dp() === other.dp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.dp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ip(index).ap() === other.ip(index).ap())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ip(index).bp(), other.ip(index).bp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.ry_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.ry_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).sn = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).tn = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).un = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function missingFieldExceptionWithNewMessage(exception, message) {
    return exception.no(message);
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.uy_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).jr = function () {
    return this.uy_1;
  };
  protoOf(NoOpEncoder).or = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).pr = function () {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).qr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).rr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).sr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).tr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).ur = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).vr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).wr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).xr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).yr = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).zr = function (enumDescriptor, index) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.vy_1 = OBJECT_getInstance();
    this.wy_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).bp = function () {
    return this.vy_1;
  };
  protoOf(NothingSerialDescriptor).ap = function () {
    return this.wy_1;
  };
  protoOf(NothingSerialDescriptor).dp = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).fp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).gp = function (name) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).jp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).ip = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).hp = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.wy_1) + imul(31, this.vy_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.xy_1 = serializer;
    this.yy_1 = new SerialDescriptorForNullable(this.xy_1.sn());
  }
  protoOf(NullableSerializer).sn = function () {
    return this.yy_1;
  };
  protoOf(NullableSerializer).zy = function (encoder, value) {
    if (!(value == null)) {
      encoder.ps();
      encoder.ms(this.xy_1, value);
    } else {
      encoder.pr();
    }
  };
  protoOf(NullableSerializer).tn = function (encoder, value) {
    return this.zy(encoder, value);
  };
  protoOf(NullableSerializer).un = function (decoder) {
    return decoder.fq() ? decoder.tq(this.xy_1) : decoder.gq();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.xy_1, other.xy_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.xy_1);
  };
  function SerialDescriptorForNullable(original) {
    this.uo_1 = original;
    this.vo_1 = this.uo_1.ap() + '?';
    this.wo_1 = cachedSerialNames(this.uo_1);
  }
  protoOf(SerialDescriptorForNullable).ap = function () {
    return this.vo_1;
  };
  protoOf(SerialDescriptorForNullable).dq = function () {
    return this.wo_1;
  };
  protoOf(SerialDescriptorForNullable).to = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.uo_1, other.uo_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.uo_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.uo_1), 31);
  };
  protoOf(SerialDescriptorForNullable).bp = function () {
    return this.uo_1.bp();
  };
  protoOf(SerialDescriptorForNullable).cp = function () {
    return this.uo_1.cp();
  };
  protoOf(SerialDescriptorForNullable).dp = function () {
    return this.uo_1.dp();
  };
  protoOf(SerialDescriptorForNullable).ep = function () {
    return this.uo_1.ep();
  };
  protoOf(SerialDescriptorForNullable).fp = function (index) {
    return this.uo_1.fp(index);
  };
  protoOf(SerialDescriptorForNullable).gp = function (name) {
    return this.uo_1.gp(name);
  };
  protoOf(SerialDescriptorForNullable).hp = function (index) {
    return this.uo_1.hp(index);
  };
  protoOf(SerialDescriptorForNullable).ip = function (index) {
    return this.uo_1.ip(index);
  };
  protoOf(SerialDescriptorForNullable).jp = function (index) {
    return this.uo_1.jp(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.xn_1 = this$0.bz_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return constructCallableReference(function (p0) {
      return p0.sn();
    }, 1, 0, 4);
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.az_1 = objectInstance;
    this.bz_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.cz_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).sn = function () {
    var tmp0 = this.cz_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.n1();
  };
  protoOf(ObjectSerializer).io = function (encoder, value) {
    encoder.uq(this.sn()).vq(this.sn());
  };
  protoOf(ObjectSerializer).tn = function (encoder, value) {
    return this.io(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(ObjectSerializer).un = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.sn();
    var composite = decoder.uq(descriptor);
    var tmp$ret$1;
    $l$block_0: {
      if (composite.kr()) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      }
      var index = composite.lr(this.sn());
      if (index === -1) {
        tmp$ret$1 = Unit_instance;
        break $l$block_0;
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    var result = tmp$ret$1;
    composite.vq(descriptor);
    return this.az_1;
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function kclass(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var t = _this__u8e3s4.j();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        throw IllegalArgumentException_init_$Create$('Captured type parameter ' + toString(t) + ' from generic non-reified function. ' + ('Such functionality cannot be supported because ' + toString(t) + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + toString(t) + '.'));
      } else {
        throw IllegalArgumentException_init_$Create$('Only KClass supported as classifier, got ' + toString_0(t));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function typeOrThrow(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0 = _this__u8e3s4.fi_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + toString_0(_this__u8e3s4.fi_1);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.r())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.dq();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.dp());
    var inductionVariable = 0;
    var last = _this__u8e3s4.dp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.fp(i);
        result.c1(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.o();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$_0();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.fp(i);
          missingFields.c1(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.ap());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.jx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.n1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.lx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.n1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.ex_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.ex_1[i];
        indices.v2(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.bx_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sy();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return constructCallableReference(function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    }, 1, 0, 5);
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.bx_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ty();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2 = item.sn();
          destination.c1(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return constructCallableReference(function (p0) {
      return p0.cy();
    }, 1, 0, 6);
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.cy());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return constructCallableReference(function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    }, 1, 0, 7);
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.ax_1 = serialName;
    this.bx_1 = generatedSerializer;
    this.cx_1 = elementsCount;
    this.dx_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.cx_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ex_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.cx_1;
    tmp_3.fx_1 = Array(size);
    this.gx_1 = null;
    this.hx_1 = booleanArray(this.cx_1);
    this.ix_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.jx_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.kx_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.lx_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).ap = function () {
    return this.ax_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).dp = function () {
    return this.cx_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).bp = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).ep = function () {
    var tmp0_elvis_lhs = this.gx_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).dq = function () {
    return this.ix_1.o2();
  };
  protoOf(PluginGeneratedSerialDescriptor).cy = function () {
    var tmp0 = this.kx_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.n1();
  };
  protoOf(PluginGeneratedSerialDescriptor).dy = function (name, isOptional) {
    this.dx_1 = this.dx_1 + 1 | 0;
    this.ex_1[this.dx_1] = name;
    this.hx_1[this.dx_1] = isOptional;
    this.fx_1[this.dx_1] = null;
    if (this.dx_1 === (this.cx_1 - 1 | 0)) {
      this.ix_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).mx = function (name, isOptional, $super) {
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.dy(name, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.dy.call(this, name, isOptional);
    }
    return tmp;
  };
  protoOf(PluginGeneratedSerialDescriptor).ip = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).sn();
  };
  protoOf(PluginGeneratedSerialDescriptor).jp = function (index) {
    return getChecked_0(this.hx_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).hp = function (index) {
    var tmp0_elvis_lhs = getChecked(this.fx_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).fp = function (index) {
    return getChecked(this.ex_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).gp = function (name) {
    var tmp0_elvis_lhs = this.ix_1.n2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ap() === other.ap())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.cy(), other.cy())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.dp() === other.dp())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.dp();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ip(index).ap() === other.ip(index).ap())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ip(index).bp(), other.ip(index).bp())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.ap());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.ap();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.bp();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.dp());
    var tmp_0 = _this__u8e3s4.ap() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.fp(i) + ': ' + $this_toStringImpl.ip(i).ap();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  function SerializerFactory() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_2()));
  }
  protoOf(CharArraySerializer_0).gz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.gz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).hz = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return CharArrayBuilder_init_$Create$(_this__u8e3s4);
    return new CharArrayBuilder(copyOf(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(CharArraySerializer_0).hu = function (_this__u8e3s4, expectedSize) {
    return this.hz((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(CharArraySerializer_0).kw = function (size) {
    return CharArrayBuilder_init_$Create$_0(size);
  };
  protoOf(CharArraySerializer_0).jw = function () {
    return CharArrayBuilder_init_$Create$_1();
  };
  protoOf(CharArraySerializer_0).iz = function (decoder, index, builder, checkIndex) {
    builder.lz(decoder.dr(this.cw_1, index));
  };
  protoOf(CharArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    return this.iz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).lw = function (decoder, index, builder, checkIndex) {
    return this.iz(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(CharArraySerializer_0).mz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.is(this.cw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).mw = function (encoder, content, size) {
    return this.mz(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).pz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.pz((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).qz = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return DoubleArrayBuilder_init_$Create$(_this__u8e3s4);
    return new DoubleArrayBuilder(copyOf_0(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(DoubleArraySerializer_0).hu = function (_this__u8e3s4, expectedSize) {
    return this.qz((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(DoubleArraySerializer_0).kw = function (size) {
    return DoubleArrayBuilder_init_$Create$_0(size);
  };
  protoOf(DoubleArraySerializer_0).jw = function () {
    return DoubleArrayBuilder_init_$Create$_1();
  };
  protoOf(DoubleArraySerializer_0).rz = function (decoder, index, builder, checkIndex) {
    builder.uz(decoder.cr(this.cw_1, index));
  };
  protoOf(DoubleArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    return this.rz(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).lw = function (decoder, index, builder, checkIndex) {
    return this.rz(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(DoubleArraySerializer_0).vz = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.hs(this.cw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).mw = function (encoder, content, size) {
    return this.vz(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).yz = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.yz((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).zz = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return FloatArrayBuilder_init_$Create$(_this__u8e3s4);
    return new FloatArrayBuilder(copyOf_1(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(FloatArraySerializer_0).hu = function (_this__u8e3s4, expectedSize) {
    return this.zz((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(FloatArraySerializer_0).kw = function (size) {
    return FloatArrayBuilder_init_$Create$_0(size);
  };
  protoOf(FloatArraySerializer_0).jw = function () {
    return FloatArrayBuilder_init_$Create$_1();
  };
  protoOf(FloatArraySerializer_0).a10 = function (decoder, index, builder, checkIndex) {
    builder.d10(decoder.br(this.cw_1, index));
  };
  protoOf(FloatArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    return this.a10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).lw = function (decoder, index, builder, checkIndex) {
    return this.a10(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(FloatArraySerializer_0).e10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.gs(this.cw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).mw = function (encoder, content, size) {
    return this.e10(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_instance));
  }
  protoOf(LongArraySerializer_0).h10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.h10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).i10 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return LongArrayBuilder_init_$Create$(_this__u8e3s4);
    return new LongArrayBuilder(copyOf_2(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(LongArraySerializer_0).hu = function (_this__u8e3s4, expectedSize) {
    return this.i10((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(LongArraySerializer_0).kw = function (size) {
    return LongArrayBuilder_init_$Create$_0(size);
  };
  protoOf(LongArraySerializer_0).jw = function () {
    return LongArrayBuilder_init_$Create$_1();
  };
  protoOf(LongArraySerializer_0).j10 = function (decoder, index, builder, checkIndex) {
    builder.m10(decoder.ar(this.cw_1, index));
  };
  protoOf(LongArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    return this.j10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).lw = function (decoder, index, builder, checkIndex) {
    return this.j10(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(LongArraySerializer_0).n10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.fs(this.cw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).mw = function (encoder, content, size) {
    return this.n10(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_3()));
  }
  protoOf(ULongArraySerializer_0).q10 = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.q10(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.hn_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).r10 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4))
      return ULongArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _ULongArray___init__impl__twm1l3(copyOf_2(_ULongArray___get_storage__impl__28e64j(_this__u8e3s4), expectedSize));
    return new ULongArrayBuilder(tmp$ret$0, _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4));
  };
  protoOf(ULongArraySerializer_0).hu = function (_this__u8e3s4, expectedSize) {
    return this.r10(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.hn_1 : THROW_CCE(), expectedSize);
  };
  protoOf(ULongArraySerializer_0).kw = function (size) {
    return ULongArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ULongArraySerializer_0).jw = function () {
    return ULongArrayBuilder_init_$Create$_1();
  };
  protoOf(ULongArraySerializer_0).s10 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.fr(this.cw_1, index).lq();
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    builder.v10(tmp$ret$0);
  };
  protoOf(ULongArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    return this.s10(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).lw = function (decoder, index, builder, checkIndex) {
    return this.s10(decoder, index, builder instanceof ULongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ULongArraySerializer_0).w10 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ks(this.cw_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.ur(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).mw = function (encoder, content, size) {
    return this.w10(encoder, content instanceof ULongArray ? content.hn_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).z10 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.z10((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).a11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return IntArrayBuilder_init_$Create$(_this__u8e3s4);
    return new IntArrayBuilder(copyOf_3(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(IntArraySerializer_0).hu = function (_this__u8e3s4, expectedSize) {
    return this.a11((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(IntArraySerializer_0).kw = function (size) {
    return IntArrayBuilder_init_$Create$_0(size);
  };
  protoOf(IntArraySerializer_0).jw = function () {
    return IntArrayBuilder_init_$Create$_1();
  };
  protoOf(IntArraySerializer_0).b11 = function (decoder, index, builder, checkIndex) {
    builder.e11(decoder.zq(this.cw_1, index));
  };
  protoOf(IntArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    return this.b11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).lw = function (decoder, index, builder, checkIndex) {
    return this.b11(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(IntArraySerializer_0).f11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.es(this.cw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).mw = function (encoder, content, size) {
    return this.f11(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_4()));
  }
  protoOf(UIntArraySerializer_0).i11 = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.i11(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.xm_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).j11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4))
      return UIntArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UIntArray___init__impl__ghjpc6(copyOf_3(_UIntArray___get_storage__impl__92a0v0(_this__u8e3s4), expectedSize));
    return new UIntArrayBuilder(tmp$ret$0, _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4));
  };
  protoOf(UIntArraySerializer_0).hu = function (_this__u8e3s4, expectedSize) {
    return this.j11(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.xm_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UIntArraySerializer_0).kw = function (size) {
    return UIntArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UIntArraySerializer_0).jw = function () {
    return UIntArrayBuilder_init_$Create$_1();
  };
  protoOf(UIntArraySerializer_0).k11 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.fr(this.cw_1, index).kq();
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
    builder.n11(tmp$ret$0);
  };
  protoOf(UIntArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    return this.k11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).lw = function (decoder, index, builder, checkIndex) {
    return this.k11(decoder, index, builder instanceof UIntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UIntArraySerializer_0).o11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ks(this.cw_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.tr(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).mw = function (encoder, content, size) {
    return this.o11(encoder, content instanceof UIntArray ? content.xm_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).r11 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.r11((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).s11 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return ShortArrayBuilder_init_$Create$(_this__u8e3s4);
    return new ShortArrayBuilder(copyOf_4(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(ShortArraySerializer_0).hu = function (_this__u8e3s4, expectedSize) {
    return this.s11((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ShortArraySerializer_0).kw = function (size) {
    return ShortArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ShortArraySerializer_0).jw = function () {
    return ShortArrayBuilder_init_$Create$_1();
  };
  protoOf(ShortArraySerializer_0).t11 = function (decoder, index, builder, checkIndex) {
    builder.w11(decoder.yq(this.cw_1, index));
  };
  protoOf(ShortArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    return this.t11(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).lw = function (decoder, index, builder, checkIndex) {
    return this.t11(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ShortArraySerializer_0).x11 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.ds(this.cw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).mw = function (encoder, content, size) {
    return this.x11(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_5()));
  }
  protoOf(UShortArraySerializer_0).a12 = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.a12(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.rn_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).b12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UShortArray___get_size__impl__jqto1b(_this__u8e3s4))
      return UShortArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UShortArray___init__impl__9b26ef(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(_this__u8e3s4), expectedSize));
    return new UShortArrayBuilder(tmp$ret$0, _UShortArray___get_size__impl__jqto1b(_this__u8e3s4));
  };
  protoOf(UShortArraySerializer_0).hu = function (_this__u8e3s4, expectedSize) {
    return this.b12(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.rn_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UShortArraySerializer_0).kw = function (size) {
    return UShortArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UShortArraySerializer_0).jw = function () {
    return UShortArrayBuilder_init_$Create$_1();
  };
  protoOf(UShortArraySerializer_0).c12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.fr(this.cw_1, index).jq();
    var tmp$ret$0 = _UShort___init__impl__jigrne(this_0);
    builder.f12(tmp$ret$0);
  };
  protoOf(UShortArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    return this.c12(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).lw = function (decoder, index, builder, checkIndex) {
    return this.c12(decoder, index, builder instanceof UShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UShortArraySerializer_0).g12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ks(this.cw_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.sr(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).mw = function (encoder, content, size) {
    return this.g12(encoder, content instanceof UShortArray ? content.rn_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).j12 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.j12((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).k12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return ByteArrayBuilder_init_$Create$(_this__u8e3s4);
    return new ByteArrayBuilder(copyOf_5(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(ByteArraySerializer_0).hu = function (_this__u8e3s4, expectedSize) {
    return this.k12((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(ByteArraySerializer_0).kw = function (size) {
    return ByteArrayBuilder_init_$Create$_0(size);
  };
  protoOf(ByteArraySerializer_0).jw = function () {
    return ByteArrayBuilder_init_$Create$_1();
  };
  protoOf(ByteArraySerializer_0).l12 = function (decoder, index, builder, checkIndex) {
    builder.o12(decoder.xq(this.cw_1, index));
  };
  protoOf(ByteArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    return this.l12(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).lw = function (decoder, index, builder, checkIndex) {
    return this.l12(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(ByteArraySerializer_0).p12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.cs(this.cw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).mw = function (encoder, content, size) {
    return this.p12(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_6()));
  }
  protoOf(UByteArraySerializer_0).s12 = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.s12(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.nm_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).t12 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4))
      return UByteArrayBuilder_init_$Create$(_this__u8e3s4);
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0 = _UByteArray___init__impl__ip4y9n(copyOf_5(_UByteArray___get_storage__impl__d4kctt(_this__u8e3s4), expectedSize));
    return new UByteArrayBuilder(tmp$ret$0, _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4));
  };
  protoOf(UByteArraySerializer_0).hu = function (_this__u8e3s4, expectedSize) {
    return this.t12(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.nm_1 : THROW_CCE(), expectedSize);
  };
  protoOf(UByteArraySerializer_0).kw = function (size) {
    return UByteArrayBuilder_init_$Create$_0(size);
  };
  protoOf(UByteArraySerializer_0).jw = function () {
    return UByteArrayBuilder_init_$Create$_1();
  };
  protoOf(UByteArraySerializer_0).u12 = function (decoder, index, builder, checkIndex) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.fr(this.cw_1, index).iq();
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(this_0);
    builder.x12(tmp$ret$0);
  };
  protoOf(UByteArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    return this.u12(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).lw = function (decoder, index, builder, checkIndex) {
    return this.u12(decoder, index, builder instanceof UByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(UByteArraySerializer_0).y12 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.ks(this.cw_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.rr(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).mw = function (encoder, content, size) {
    return this.y12(encoder, content instanceof UByteArray ? content.nm_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).b13 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).yt = function (_this__u8e3s4) {
    return this.b13((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).c13 = function (_this__u8e3s4, expectedSize) {
    if (expectedSize === _this__u8e3s4.length)
      return BooleanArrayBuilder_init_$Create$(_this__u8e3s4);
    return new BooleanArrayBuilder(copyOf_6(_this__u8e3s4, expectedSize), _this__u8e3s4.length);
  };
  protoOf(BooleanArraySerializer_0).hu = function (_this__u8e3s4, expectedSize) {
    return this.c13((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE(), expectedSize);
  };
  protoOf(BooleanArraySerializer_0).kw = function (size) {
    return BooleanArrayBuilder_init_$Create$_0(size);
  };
  protoOf(BooleanArraySerializer_0).jw = function () {
    return BooleanArrayBuilder_init_$Create$_1();
  };
  protoOf(BooleanArraySerializer_0).d13 = function (decoder, index, builder, checkIndex) {
    builder.g13(decoder.wq(this.cw_1, index));
  };
  protoOf(BooleanArraySerializer_0).nu = function (decoder, index, builder, checkIndex) {
    return this.d13(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).lw = function (decoder, index, builder, checkIndex) {
    return this.d13(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(BooleanArraySerializer_0).h13 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.bs(this.cw_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).mw = function (encoder, content, size) {
    return this.h13(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder_init_$Init$(bufferWithData, $this) {
    CharArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function CharArrayBuilder_init_$Create$(bufferWithData) {
    return CharArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    CharArrayBuilder.call($this, charArray(initialCapacity), 0);
    return $this;
  }
  function CharArrayBuilder_init_$Create$_0(initialCapacity) {
    return CharArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder_init_$Init$_1($this) {
    CharArrayBuilder.call($this, charArray(10), 0);
    return $this;
  }
  function CharArrayBuilder_init_$Create$_1() {
    return CharArrayBuilder_init_$Init$_1(objectCreate(protoOf(CharArrayBuilder)));
  }
  function CharArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.jz_1 = bufferWithData;
    this.kz_1 = initialPosition;
  }
  protoOf(CharArrayBuilder).ew = function () {
    return this.kz_1;
  };
  protoOf(CharArrayBuilder).ow = function (requiredCapacity) {
    if (this.jz_1.length < requiredCapacity)
      this.jz_1 = copyOf(this.jz_1, coerceAtLeast(requiredCapacity, imul(this.jz_1.length, 2)));
  };
  protoOf(CharArrayBuilder).lz = function (c) {
    this.pw();
    var tmp = this.jz_1;
    var _unary__edvuaz = this.kz_1;
    this.kz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(CharArrayBuilder).gw = function () {
    return copyOf(this.jz_1, this.kz_1);
  };
  function DoubleArrayBuilder_init_$Init$(bufferWithData, $this) {
    DoubleArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$(bufferWithData) {
    return DoubleArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    DoubleArrayBuilder.call($this, new Float64Array(initialCapacity), 0);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$_0(initialCapacity) {
    return DoubleArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder_init_$Init$_1($this) {
    DoubleArrayBuilder.call($this, new Float64Array(10), 0);
    return $this;
  }
  function DoubleArrayBuilder_init_$Create$_1() {
    return DoubleArrayBuilder_init_$Init$_1(objectCreate(protoOf(DoubleArrayBuilder)));
  }
  function DoubleArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.sz_1 = bufferWithData;
    this.tz_1 = initialPosition;
  }
  protoOf(DoubleArrayBuilder).ew = function () {
    return this.tz_1;
  };
  protoOf(DoubleArrayBuilder).ow = function (requiredCapacity) {
    if (this.sz_1.length < requiredCapacity)
      this.sz_1 = copyOf_0(this.sz_1, coerceAtLeast(requiredCapacity, imul(this.sz_1.length, 2)));
  };
  protoOf(DoubleArrayBuilder).uz = function (c) {
    this.pw();
    var tmp = this.sz_1;
    var _unary__edvuaz = this.tz_1;
    this.tz_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(DoubleArrayBuilder).gw = function () {
    return copyOf_0(this.sz_1, this.tz_1);
  };
  function FloatArrayBuilder_init_$Init$(bufferWithData, $this) {
    FloatArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$(bufferWithData) {
    return FloatArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    FloatArrayBuilder.call($this, new Float32Array(initialCapacity), 0);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$_0(initialCapacity) {
    return FloatArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder_init_$Init$_1($this) {
    FloatArrayBuilder.call($this, new Float32Array(10), 0);
    return $this;
  }
  function FloatArrayBuilder_init_$Create$_1() {
    return FloatArrayBuilder_init_$Init$_1(objectCreate(protoOf(FloatArrayBuilder)));
  }
  function FloatArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.b10_1 = bufferWithData;
    this.c10_1 = initialPosition;
  }
  protoOf(FloatArrayBuilder).ew = function () {
    return this.c10_1;
  };
  protoOf(FloatArrayBuilder).ow = function (requiredCapacity) {
    if (this.b10_1.length < requiredCapacity)
      this.b10_1 = copyOf_1(this.b10_1, coerceAtLeast(requiredCapacity, imul(this.b10_1.length, 2)));
  };
  protoOf(FloatArrayBuilder).d10 = function (c) {
    this.pw();
    var tmp = this.b10_1;
    var _unary__edvuaz = this.c10_1;
    this.c10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(FloatArrayBuilder).gw = function () {
    return copyOf_1(this.b10_1, this.c10_1);
  };
  function LongArrayBuilder_init_$Init$(bufferWithData, $this) {
    LongArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function LongArrayBuilder_init_$Create$(bufferWithData) {
    return LongArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    LongArrayBuilder.call($this, new BigInt64Array(initialCapacity), 0);
    return $this;
  }
  function LongArrayBuilder_init_$Create$_0(initialCapacity) {
    return LongArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder_init_$Init$_1($this) {
    LongArrayBuilder.call($this, new BigInt64Array(10), 0);
    return $this;
  }
  function LongArrayBuilder_init_$Create$_1() {
    return LongArrayBuilder_init_$Init$_1(objectCreate(protoOf(LongArrayBuilder)));
  }
  function LongArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.k10_1 = bufferWithData;
    this.l10_1 = initialPosition;
  }
  protoOf(LongArrayBuilder).ew = function () {
    return this.l10_1;
  };
  protoOf(LongArrayBuilder).ow = function (requiredCapacity) {
    if (this.k10_1.length < requiredCapacity)
      this.k10_1 = copyOf_2(this.k10_1, coerceAtLeast(requiredCapacity, imul(this.k10_1.length, 2)));
  };
  protoOf(LongArrayBuilder).m10 = function (c) {
    this.pw();
    var tmp = this.k10_1;
    var _unary__edvuaz = this.l10_1;
    this.l10_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(LongArrayBuilder).gw = function () {
    return copyOf_2(this.k10_1, this.l10_1);
  };
  function ULongArrayBuilder_init_$Init$(bufferWithData, $this) {
    ULongArrayBuilder.call($this, bufferWithData, _ULongArray___get_size__impl__ju6dtr(bufferWithData));
    return $this;
  }
  function ULongArrayBuilder_init_$Create$(bufferWithData) {
    return ULongArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ULongArrayBuilder.call($this, _ULongArray___init__impl__twm1l3_0(initialCapacity), 0);
    return $this;
  }
  function ULongArrayBuilder_init_$Create$_0(initialCapacity) {
    return ULongArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder_init_$Init$_1($this) {
    ULongArrayBuilder.call($this, _ULongArray___init__impl__twm1l3_0(10), 0);
    return $this;
  }
  function ULongArrayBuilder_init_$Create$_1() {
    return ULongArrayBuilder_init_$Init$_1(objectCreate(protoOf(ULongArrayBuilder)));
  }
  function ULongArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.t10_1 = bufferWithData;
    this.u10_1 = initialPosition;
  }
  protoOf(ULongArrayBuilder).ew = function () {
    return this.u10_1;
  };
  protoOf(ULongArrayBuilder).ow = function (requiredCapacity) {
    if (_ULongArray___get_size__impl__ju6dtr(this.t10_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.t10_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_ULongArray___get_size__impl__ju6dtr(this.t10_1), 2));
      tmp.t10_1 = _ULongArray___init__impl__twm1l3(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
    }
  };
  protoOf(ULongArrayBuilder).v10 = function (c) {
    this.pw();
    var tmp = this.t10_1;
    var _unary__edvuaz = this.u10_1;
    this.u10_1 = _unary__edvuaz + 1 | 0;
    ULongArray__set_impl_z19mvh(tmp, _unary__edvuaz, c);
  };
  protoOf(ULongArrayBuilder).i13 = function () {
    var tmp0 = this.t10_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.u10_1;
    return _ULongArray___init__impl__twm1l3(copyOf_2(_ULongArray___get_storage__impl__28e64j(tmp0), newSize));
  };
  protoOf(ULongArrayBuilder).gw = function () {
    return new ULongArray(this.i13());
  };
  function IntArrayBuilder_init_$Init$(bufferWithData, $this) {
    IntArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function IntArrayBuilder_init_$Create$(bufferWithData) {
    return IntArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    IntArrayBuilder.call($this, new Int32Array(initialCapacity), 0);
    return $this;
  }
  function IntArrayBuilder_init_$Create$_0(initialCapacity) {
    return IntArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder_init_$Init$_1($this) {
    IntArrayBuilder.call($this, new Int32Array(10), 0);
    return $this;
  }
  function IntArrayBuilder_init_$Create$_1() {
    return IntArrayBuilder_init_$Init$_1(objectCreate(protoOf(IntArrayBuilder)));
  }
  function IntArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.c11_1 = bufferWithData;
    this.d11_1 = initialPosition;
  }
  protoOf(IntArrayBuilder).ew = function () {
    return this.d11_1;
  };
  protoOf(IntArrayBuilder).ow = function (requiredCapacity) {
    if (this.c11_1.length < requiredCapacity)
      this.c11_1 = copyOf_3(this.c11_1, coerceAtLeast(requiredCapacity, imul(this.c11_1.length, 2)));
  };
  protoOf(IntArrayBuilder).e11 = function (c) {
    this.pw();
    var tmp = this.c11_1;
    var _unary__edvuaz = this.d11_1;
    this.d11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(IntArrayBuilder).gw = function () {
    return copyOf_3(this.c11_1, this.d11_1);
  };
  function UIntArrayBuilder_init_$Init$(bufferWithData, $this) {
    UIntArrayBuilder.call($this, bufferWithData, _UIntArray___get_size__impl__r6l8ci(bufferWithData));
    return $this;
  }
  function UIntArrayBuilder_init_$Create$(bufferWithData) {
    return UIntArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UIntArrayBuilder.call($this, _UIntArray___init__impl__ghjpc6_0(initialCapacity), 0);
    return $this;
  }
  function UIntArrayBuilder_init_$Create$_0(initialCapacity) {
    return UIntArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder_init_$Init$_1($this) {
    UIntArrayBuilder.call($this, _UIntArray___init__impl__ghjpc6_0(10), 0);
    return $this;
  }
  function UIntArrayBuilder_init_$Create$_1() {
    return UIntArrayBuilder_init_$Init$_1(objectCreate(protoOf(UIntArrayBuilder)));
  }
  function UIntArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.l11_1 = bufferWithData;
    this.m11_1 = initialPosition;
  }
  protoOf(UIntArrayBuilder).ew = function () {
    return this.m11_1;
  };
  protoOf(UIntArrayBuilder).ow = function (requiredCapacity) {
    if (_UIntArray___get_size__impl__r6l8ci(this.l11_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.l11_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UIntArray___get_size__impl__r6l8ci(this.l11_1), 2));
      tmp.l11_1 = _UIntArray___init__impl__ghjpc6(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
    }
  };
  protoOf(UIntArrayBuilder).n11 = function (c) {
    this.pw();
    var tmp = this.l11_1;
    var _unary__edvuaz = this.m11_1;
    this.m11_1 = _unary__edvuaz + 1 | 0;
    UIntArray__set_impl_7f2zu2(tmp, _unary__edvuaz, c);
  };
  protoOf(UIntArrayBuilder).j13 = function () {
    var tmp0 = this.l11_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.m11_1;
    return _UIntArray___init__impl__ghjpc6(copyOf_3(_UIntArray___get_storage__impl__92a0v0(tmp0), newSize));
  };
  protoOf(UIntArrayBuilder).gw = function () {
    return new UIntArray(this.j13());
  };
  function ShortArrayBuilder_init_$Init$(bufferWithData, $this) {
    ShortArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$(bufferWithData) {
    return ShortArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ShortArrayBuilder.call($this, new Int16Array(initialCapacity), 0);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$_0(initialCapacity) {
    return ShortArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder_init_$Init$_1($this) {
    ShortArrayBuilder.call($this, new Int16Array(10), 0);
    return $this;
  }
  function ShortArrayBuilder_init_$Create$_1() {
    return ShortArrayBuilder_init_$Init$_1(objectCreate(protoOf(ShortArrayBuilder)));
  }
  function ShortArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.u11_1 = bufferWithData;
    this.v11_1 = initialPosition;
  }
  protoOf(ShortArrayBuilder).ew = function () {
    return this.v11_1;
  };
  protoOf(ShortArrayBuilder).ow = function (requiredCapacity) {
    if (this.u11_1.length < requiredCapacity)
      this.u11_1 = copyOf_4(this.u11_1, coerceAtLeast(requiredCapacity, imul(this.u11_1.length, 2)));
  };
  protoOf(ShortArrayBuilder).w11 = function (c) {
    this.pw();
    var tmp = this.u11_1;
    var _unary__edvuaz = this.v11_1;
    this.v11_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ShortArrayBuilder).gw = function () {
    return copyOf_4(this.u11_1, this.v11_1);
  };
  function UShortArrayBuilder_init_$Init$(bufferWithData, $this) {
    UShortArrayBuilder.call($this, bufferWithData, _UShortArray___get_size__impl__jqto1b(bufferWithData));
    return $this;
  }
  function UShortArrayBuilder_init_$Create$(bufferWithData) {
    return UShortArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UShortArrayBuilder.call($this, _UShortArray___init__impl__9b26ef_0(initialCapacity), 0);
    return $this;
  }
  function UShortArrayBuilder_init_$Create$_0(initialCapacity) {
    return UShortArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder_init_$Init$_1($this) {
    UShortArrayBuilder.call($this, _UShortArray___init__impl__9b26ef_0(10), 0);
    return $this;
  }
  function UShortArrayBuilder_init_$Create$_1() {
    return UShortArrayBuilder_init_$Init$_1(objectCreate(protoOf(UShortArrayBuilder)));
  }
  function UShortArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.d12_1 = bufferWithData;
    this.e12_1 = initialPosition;
  }
  protoOf(UShortArrayBuilder).ew = function () {
    return this.e12_1;
  };
  protoOf(UShortArrayBuilder).ow = function (requiredCapacity) {
    if (_UShortArray___get_size__impl__jqto1b(this.d12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.d12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UShortArray___get_size__impl__jqto1b(this.d12_1), 2));
      tmp.d12_1 = _UShortArray___init__impl__9b26ef(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
    }
  };
  protoOf(UShortArrayBuilder).f12 = function (c) {
    this.pw();
    var tmp = this.d12_1;
    var _unary__edvuaz = this.e12_1;
    this.e12_1 = _unary__edvuaz + 1 | 0;
    UShortArray__set_impl_6d8whp(tmp, _unary__edvuaz, c);
  };
  protoOf(UShortArrayBuilder).k13 = function () {
    var tmp0 = this.d12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.e12_1;
    return _UShortArray___init__impl__9b26ef(copyOf_4(_UShortArray___get_storage__impl__t2jpv5(tmp0), newSize));
  };
  protoOf(UShortArrayBuilder).gw = function () {
    return new UShortArray(this.k13());
  };
  function ByteArrayBuilder_init_$Init$(bufferWithData, $this) {
    ByteArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$(bufferWithData) {
    return ByteArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    ByteArrayBuilder.call($this, new Int8Array(initialCapacity), 0);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$_0(initialCapacity) {
    return ByteArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder_init_$Init$_1($this) {
    ByteArrayBuilder.call($this, new Int8Array(10), 0);
    return $this;
  }
  function ByteArrayBuilder_init_$Create$_1() {
    return ByteArrayBuilder_init_$Init$_1(objectCreate(protoOf(ByteArrayBuilder)));
  }
  function ByteArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.m12_1 = bufferWithData;
    this.n12_1 = initialPosition;
  }
  protoOf(ByteArrayBuilder).ew = function () {
    return this.n12_1;
  };
  protoOf(ByteArrayBuilder).ow = function (requiredCapacity) {
    if (this.m12_1.length < requiredCapacity)
      this.m12_1 = copyOf_5(this.m12_1, coerceAtLeast(requiredCapacity, imul(this.m12_1.length, 2)));
  };
  protoOf(ByteArrayBuilder).o12 = function (c) {
    this.pw();
    var tmp = this.m12_1;
    var _unary__edvuaz = this.n12_1;
    this.n12_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(ByteArrayBuilder).gw = function () {
    return copyOf_5(this.m12_1, this.n12_1);
  };
  function UByteArrayBuilder_init_$Init$(bufferWithData, $this) {
    UByteArrayBuilder.call($this, bufferWithData, _UByteArray___get_size__impl__h6pkdv(bufferWithData));
    return $this;
  }
  function UByteArrayBuilder_init_$Create$(bufferWithData) {
    return UByteArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    UByteArrayBuilder.call($this, _UByteArray___init__impl__ip4y9n_0(initialCapacity), 0);
    return $this;
  }
  function UByteArrayBuilder_init_$Create$_0(initialCapacity) {
    return UByteArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder_init_$Init$_1($this) {
    UByteArrayBuilder.call($this, _UByteArray___init__impl__ip4y9n_0(10), 0);
    return $this;
  }
  function UByteArrayBuilder_init_$Create$_1() {
    return UByteArrayBuilder_init_$Init$_1(objectCreate(protoOf(UByteArrayBuilder)));
  }
  function UByteArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.v12_1 = bufferWithData;
    this.w12_1 = initialPosition;
  }
  protoOf(UByteArrayBuilder).ew = function () {
    return this.w12_1;
  };
  protoOf(UByteArrayBuilder).ow = function (requiredCapacity) {
    if (_UByteArray___get_size__impl__h6pkdv(this.v12_1) < requiredCapacity) {
      var tmp = this;
      var tmp0 = this.v12_1;
      // Inline function 'kotlin.collections.copyOf' call
      var newSize = coerceAtLeast(requiredCapacity, imul(_UByteArray___get_size__impl__h6pkdv(this.v12_1), 2));
      tmp.v12_1 = _UByteArray___init__impl__ip4y9n(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
    }
  };
  protoOf(UByteArrayBuilder).x12 = function (c) {
    this.pw();
    var tmp = this.v12_1;
    var _unary__edvuaz = this.w12_1;
    this.w12_1 = _unary__edvuaz + 1 | 0;
    UByteArray__set_impl_jvcicn(tmp, _unary__edvuaz, c);
  };
  protoOf(UByteArrayBuilder).l13 = function () {
    var tmp0 = this.v12_1;
    // Inline function 'kotlin.collections.copyOf' call
    var newSize = this.w12_1;
    return _UByteArray___init__impl__ip4y9n(copyOf_5(_UByteArray___get_storage__impl__d4kctt(tmp0), newSize));
  };
  protoOf(UByteArrayBuilder).gw = function () {
    return new UByteArray(this.l13());
  };
  function BooleanArrayBuilder_init_$Init$(bufferWithData, $this) {
    BooleanArrayBuilder.call($this, bufferWithData, bufferWithData.length);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$(bufferWithData) {
    return BooleanArrayBuilder_init_$Init$(bufferWithData, objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder_init_$Init$_0(initialCapacity, $this) {
    BooleanArrayBuilder.call($this, booleanArray(initialCapacity), 0);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$_0(initialCapacity) {
    return BooleanArrayBuilder_init_$Init$_0(initialCapacity, objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder_init_$Init$_1($this) {
    BooleanArrayBuilder.call($this, booleanArray(10), 0);
    return $this;
  }
  function BooleanArrayBuilder_init_$Create$_1() {
    return BooleanArrayBuilder_init_$Init$_1(objectCreate(protoOf(BooleanArrayBuilder)));
  }
  function BooleanArrayBuilder(bufferWithData, initialPosition) {
    PrimitiveArrayBuilder.call(this);
    this.e13_1 = bufferWithData;
    this.f13_1 = initialPosition;
  }
  protoOf(BooleanArrayBuilder).ew = function () {
    return this.f13_1;
  };
  protoOf(BooleanArrayBuilder).ow = function (requiredCapacity) {
    if (this.e13_1.length < requiredCapacity)
      this.e13_1 = copyOf_6(this.e13_1, coerceAtLeast(requiredCapacity, imul(this.e13_1.length, 2)));
  };
  protoOf(BooleanArrayBuilder).g13 = function (c) {
    this.pw();
    var tmp = this.e13_1;
    var _unary__edvuaz = this.f13_1;
    this.f13_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = c;
  };
  protoOf(BooleanArrayBuilder).gw = function () {
    return copyOf_6(this.e13_1, this.f13_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function IntSerializer() {
    IntSerializer_instance = this;
    this.m13_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).sn = function () {
    return this.m13_1;
  };
  protoOf(IntSerializer).n13 = function (encoder, value) {
    return encoder.tr(value);
  };
  protoOf(IntSerializer).tn = function (encoder, value) {
    return this.n13(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).un = function (decoder) {
    return decoder.kq();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.o13_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).sn = function () {
    return this.o13_1;
  };
  protoOf(StringSerializer).p13 = function (encoder, value) {
    return encoder.yr(value);
  };
  protoOf(StringSerializer).tn = function (encoder, value) {
    return this.p13(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).un = function (decoder) {
    return decoder.pq();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.q13_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).sn = function () {
    return this.q13_1;
  };
  protoOf(LongSerializer).r13 = function (encoder, value) {
    return encoder.ur(value);
  };
  protoOf(LongSerializer).tn = function (encoder, value) {
    return this.r13(encoder, (!(value == null) ? typeof value === 'bigint' : false) ? value : THROW_CCE());
  };
  protoOf(LongSerializer).un = function (decoder) {
    return decoder.lq();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.s13_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).sn = function () {
    return this.s13_1;
  };
  protoOf(BooleanSerializer).t13 = function (encoder, value) {
    return encoder.qr(value);
  };
  protoOf(BooleanSerializer).tn = function (encoder, value) {
    return this.t13(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).un = function (decoder) {
    return decoder.hq();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.u13_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).sn = function () {
    return this.u13_1;
  };
  protoOf(DoubleSerializer).v13 = function (encoder, value) {
    return encoder.wr(value);
  };
  protoOf(DoubleSerializer).tn = function (encoder, value) {
    return this.v13(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(DoubleSerializer).un = function (decoder) {
    return decoder.nq();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().n2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.w13_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.w13_1 = serialName;
    this.x13_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).ap = function () {
    return this.w13_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).bp = function () {
    return this.x13_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).dp = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).fp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).gp = function (name) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).jp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).ip = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).hp = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.w13_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.w13_1 === other.w13_1 && equals(this.x13_1, other.x13_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.w13_1) + imul(31, this.x13_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().p2();
    var _iterator__ex2g4s = values.t();
    while (_iterator__ex2g4s.u()) {
      var primitive = _iterator__ex2g4s.v();
      var primitiveName = primitive.sn().ap();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).o() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.y13_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).sn = function () {
    return this.y13_1;
  };
  protoOf(ByteSerializer).z13 = function (encoder, value) {
    return encoder.rr(value);
  };
  protoOf(ByteSerializer).tn = function (encoder, value) {
    return this.z13(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ByteSerializer).un = function (decoder) {
    return decoder.iq();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.a14_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).sn = function () {
    return this.a14_1;
  };
  protoOf(ShortSerializer).b14 = function (encoder, value) {
    return encoder.sr(value);
  };
  protoOf(ShortSerializer).tn = function (encoder, value) {
    return this.b14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(ShortSerializer).un = function (decoder) {
    return decoder.jq();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.c14_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).sn = function () {
    return this.c14_1;
  };
  protoOf(CharSerializer).d14 = function (encoder, value) {
    return encoder.xr(value);
  };
  protoOf(CharSerializer).tn = function (encoder, value) {
    return this.d14(encoder, value instanceof Char ? value.w1_1 : THROW_CCE());
  };
  protoOf(CharSerializer).e14 = function (decoder) {
    return decoder.oq();
  };
  protoOf(CharSerializer).un = function (decoder) {
    return new Char(this.e14(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.f14_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).sn = function () {
    return this.f14_1;
  };
  protoOf(FloatSerializer).g14 = function (encoder, value) {
    return encoder.vr(value);
  };
  protoOf(FloatSerializer).tn = function (encoder, value) {
    return this.g14(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(FloatSerializer).un = function (decoder) {
    return decoder.mq();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.h14_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).sn = function () {
    return this.h14_1.sn();
  };
  protoOf(UnitSerializer).i14 = function (encoder, value) {
    this.h14_1.io(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).tn = function (encoder, value) {
    return this.i14(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(UnitSerializer).j14 = function (decoder) {
    this.h14_1.un(decoder);
  };
  protoOf(UnitSerializer).un = function (decoder) {
    this.j14(decoder);
    return Unit_instance;
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).m14 = function (_this__u8e3s4, index) {
    return this.o14(this.n14(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).o14 = function (nestedName) {
    var tmp0_elvis_lhs = this.r14();
    return this.s14(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).n14 = function (descriptor, index) {
    return descriptor.fp(index);
  };
  protoOf(NamedValueDecoder).s14 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).t14 = function () {
    return this.p14_1.r() ? '$' : joinToString(this.p14_1, '.', '$.');
  };
  function NamedValueEncoder() {
    TaggedEncoder.call(this);
  }
  protoOf(NamedValueEncoder).m14 = function (_this__u8e3s4, index) {
    return this.o14(this.n14(_this__u8e3s4, index));
  };
  protoOf(NamedValueEncoder).o14 = function (nestedName) {
    var tmp0_elvis_lhs = this.r14();
    return this.s14(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueEncoder).n14 = function (descriptor, index) {
    return descriptor.fp(index);
  };
  protoOf(NamedValueEncoder).s14 = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.h15(tag);
    var r = block();
    if (!$this.q14_1) {
      $this.i15();
    }
    $this.q14_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.sq($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.sn().to();
      var tmp;
      if (isNullabilitySupported || tmp0.fq()) {
        tmp = this$0.sq($deserializer, $previousValue);
      } else {
        tmp = tmp0.gq();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.p14_1 = ArrayList_init_$Create$_0();
    this.q14_1 = false;
  }
  protoOf(TaggedDecoder).jr = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).u14 = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).v14 = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).w14 = function (tag) {
    var tmp = this.u14(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).x14 = function (tag) {
    var tmp = this.u14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).y14 = function (tag) {
    var tmp = this.u14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).z14 = function (tag) {
    var tmp = this.u14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).a15 = function (tag) {
    var tmp = this.u14(tag);
    return typeof tmp === 'bigint' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).b15 = function (tag) {
    var tmp = this.u14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).c15 = function (tag) {
    var tmp = this.u14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).d15 = function (tag) {
    var tmp = this.u14(tag);
    return tmp instanceof Char ? tmp.w1_1 : THROW_CCE();
  };
  protoOf(TaggedDecoder).e15 = function (tag) {
    var tmp = this.u14(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).f15 = function (tag, enumDescriptor) {
    var tmp = this.u14(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).g15 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.h15(tag);
    return this;
  };
  protoOf(TaggedDecoder).sq = function (deserializer, previousValue) {
    return this.tq(deserializer);
  };
  protoOf(TaggedDecoder).rq = function (descriptor) {
    return this.g15(this.i15(), descriptor);
  };
  protoOf(TaggedDecoder).fq = function () {
    var tmp0_elvis_lhs = this.r14();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.v14(currentTag);
  };
  protoOf(TaggedDecoder).gq = function () {
    return null;
  };
  protoOf(TaggedDecoder).hq = function () {
    return this.w14(this.i15());
  };
  protoOf(TaggedDecoder).iq = function () {
    return this.x14(this.i15());
  };
  protoOf(TaggedDecoder).jq = function () {
    return this.y14(this.i15());
  };
  protoOf(TaggedDecoder).kq = function () {
    return this.z14(this.i15());
  };
  protoOf(TaggedDecoder).lq = function () {
    return this.a15(this.i15());
  };
  protoOf(TaggedDecoder).mq = function () {
    return this.b15(this.i15());
  };
  protoOf(TaggedDecoder).nq = function () {
    return this.c15(this.i15());
  };
  protoOf(TaggedDecoder).oq = function () {
    return this.d15(this.i15());
  };
  protoOf(TaggedDecoder).pq = function () {
    return this.e15(this.i15());
  };
  protoOf(TaggedDecoder).qq = function (enumDescriptor) {
    return this.f15(this.i15(), enumDescriptor);
  };
  protoOf(TaggedDecoder).uq = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).vq = function (descriptor) {
  };
  protoOf(TaggedDecoder).wq = function (descriptor, index) {
    return this.w14(this.m14(descriptor, index));
  };
  protoOf(TaggedDecoder).xq = function (descriptor, index) {
    return this.x14(this.m14(descriptor, index));
  };
  protoOf(TaggedDecoder).yq = function (descriptor, index) {
    return this.y14(this.m14(descriptor, index));
  };
  protoOf(TaggedDecoder).zq = function (descriptor, index) {
    return this.z14(this.m14(descriptor, index));
  };
  protoOf(TaggedDecoder).ar = function (descriptor, index) {
    return this.a15(this.m14(descriptor, index));
  };
  protoOf(TaggedDecoder).br = function (descriptor, index) {
    return this.b15(this.m14(descriptor, index));
  };
  protoOf(TaggedDecoder).cr = function (descriptor, index) {
    return this.c15(this.m14(descriptor, index));
  };
  protoOf(TaggedDecoder).dr = function (descriptor, index) {
    return this.d15(this.m14(descriptor, index));
  };
  protoOf(TaggedDecoder).er = function (descriptor, index) {
    return this.e15(this.m14(descriptor, index));
  };
  protoOf(TaggedDecoder).fr = function (descriptor, index) {
    return this.g15(this.m14(descriptor, index), descriptor.ip(index));
  };
  protoOf(TaggedDecoder).gr = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.m14(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ir = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.m14(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).r14 = function () {
    return lastOrNull(this.p14_1);
  };
  protoOf(TaggedDecoder).h15 = function (name) {
    this.p14_1.c1(name);
  };
  protoOf(TaggedDecoder).i15 = function () {
    var r = this.p14_1.u2(get_lastIndex_0(this.p14_1));
    this.q14_1 = true;
    return r;
  };
  function encodeElement($this, desc, index) {
    var tag = $this.m14(desc, index);
    $this.h15(tag);
    return true;
  }
  function TaggedEncoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.k15_1 = ArrayList_init_$Create$_0();
  }
  protoOf(TaggedEncoder).jr = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedEncoder).l15 = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(TaggedEncoder).m15 = function (tag) {
  };
  protoOf(TaggedEncoder).n15 = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  protoOf(TaggedEncoder).o15 = function (tag, value) {
    return this.l15(tag, value);
  };
  protoOf(TaggedEncoder).p15 = function (tag, value) {
    return this.l15(tag, value);
  };
  protoOf(TaggedEncoder).q15 = function (tag, value) {
    return this.l15(tag, value);
  };
  protoOf(TaggedEncoder).r15 = function (tag, value) {
    return this.l15(tag, value);
  };
  protoOf(TaggedEncoder).s15 = function (tag, value) {
    return this.l15(tag, value);
  };
  protoOf(TaggedEncoder).t15 = function (tag, value) {
    return this.l15(tag, value);
  };
  protoOf(TaggedEncoder).u15 = function (tag, value) {
    return this.l15(tag, value);
  };
  protoOf(TaggedEncoder).v15 = function (tag, value) {
    return this.l15(tag, new Char(value));
  };
  protoOf(TaggedEncoder).w15 = function (tag, value) {
    return this.l15(tag, value);
  };
  protoOf(TaggedEncoder).x15 = function (tag, enumDescriptor, ordinal) {
    return this.l15(tag, ordinal);
  };
  protoOf(TaggedEncoder).y15 = function (tag, inlineDescriptor) {
    // Inline function 'kotlin.apply' call
    this.h15(tag);
    return this;
  };
  protoOf(TaggedEncoder).as = function (descriptor) {
    return this.y15(this.i15(), descriptor);
  };
  protoOf(TaggedEncoder).ps = function () {
    return this.m15(this.a16());
  };
  protoOf(TaggedEncoder).pr = function () {
    return this.n15(this.i15());
  };
  protoOf(TaggedEncoder).qr = function (value) {
    return this.u15(this.i15(), value);
  };
  protoOf(TaggedEncoder).rr = function (value) {
    return this.p15(this.i15(), value);
  };
  protoOf(TaggedEncoder).sr = function (value) {
    return this.q15(this.i15(), value);
  };
  protoOf(TaggedEncoder).tr = function (value) {
    return this.o15(this.i15(), value);
  };
  protoOf(TaggedEncoder).ur = function (value) {
    return this.r15(this.i15(), value);
  };
  protoOf(TaggedEncoder).vr = function (value) {
    return this.s15(this.i15(), value);
  };
  protoOf(TaggedEncoder).wr = function (value) {
    return this.t15(this.i15(), value);
  };
  protoOf(TaggedEncoder).xr = function (value) {
    return this.v15(this.i15(), value);
  };
  protoOf(TaggedEncoder).yr = function (value) {
    return this.w15(this.i15(), value);
  };
  protoOf(TaggedEncoder).zr = function (enumDescriptor, index) {
    return this.x15(this.i15(), enumDescriptor, index);
  };
  protoOf(TaggedEncoder).uq = function (descriptor) {
    return this;
  };
  protoOf(TaggedEncoder).vq = function (descriptor) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.k15_1.r()) {
      this.i15();
    }
    this.z15(descriptor);
  };
  protoOf(TaggedEncoder).z15 = function (descriptor) {
  };
  protoOf(TaggedEncoder).bs = function (descriptor, index, value) {
    return this.u15(this.m14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).cs = function (descriptor, index, value) {
    return this.p15(this.m14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ds = function (descriptor, index, value) {
    return this.q15(this.m14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).es = function (descriptor, index, value) {
    return this.o15(this.m14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).fs = function (descriptor, index, value) {
    return this.r15(this.m14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).gs = function (descriptor, index, value) {
    return this.s15(this.m14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).hs = function (descriptor, index, value) {
    return this.t15(this.m14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).is = function (descriptor, index, value) {
    return this.v15(this.m14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).js = function (descriptor, index, value) {
    return this.w15(this.m14(descriptor, index), value);
  };
  protoOf(TaggedEncoder).ks = function (descriptor, index) {
    return this.y15(this.m14(descriptor, index), descriptor.ip(index));
  };
  protoOf(TaggedEncoder).ls = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.ms(serializer, value);
    }
  };
  protoOf(TaggedEncoder).ns = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index)) {
      this.os(serializer, value);
    }
  };
  protoOf(TaggedEncoder).a16 = function () {
    return last(this.k15_1);
  };
  protoOf(TaggedEncoder).r14 = function () {
    return lastOrNull(this.k15_1);
  };
  protoOf(TaggedEncoder).h15 = function (name) {
    this.k15_1.c1(name);
  };
  protoOf(TaggedEncoder).i15 = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.k15_1.r()) {
      tmp = this.k15_1.u2(get_lastIndex_0(this.k15_1));
    } else {
      throw SerializationException_init_$Create$_0('No tag in stack for requested element');
    }
    return tmp;
  };
  function get_NULL() {
    _init_properties_Tuples_kt__dz0qyd();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.b16_1 = key;
    this.c16_1 = value;
  }
  protoOf(MapEntry).m1 = function () {
    return this.b16_1;
  };
  protoOf(MapEntry).n1 = function () {
    return this.c16_1;
  };
  protoOf(MapEntry).toString = function () {
    return 'MapEntry(key=' + toString_0(this.b16_1) + ', value=' + toString_0(this.c16_1) + ')';
  };
  protoOf(MapEntry).hashCode = function () {
    var result = this.b16_1 == null ? 0 : hashCode(this.b16_1);
    result = imul(result, 31) + (this.c16_1 == null ? 0 : hashCode(this.c16_1)) | 0;
    return result;
  };
  protoOf(MapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    if (!equals(this.b16_1, other.b16_1))
      return false;
    if (!equals(this.c16_1, other.c16_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.do('key', $keySerializer.sn());
      $this$buildSerialDescriptor.do('value', $valueSerializer.sn());
      return Unit_instance;
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.f16_1 = buildSerialDescriptor('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(MapEntrySerializer_0).sn = function () {
    return this.f16_1;
  };
  protoOf(MapEntrySerializer_0).g16 = function (_this__u8e3s4) {
    return _this__u8e3s4.m1();
  };
  protoOf(MapEntrySerializer_0).h16 = function (_this__u8e3s4) {
    return this.g16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).i16 = function (_this__u8e3s4) {
    return _this__u8e3s4.n1();
  };
  protoOf(MapEntrySerializer_0).j16 = function (_this__u8e3s4) {
    return this.i16((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(MapEntrySerializer_0).k16 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.do('first', $keySerializer.sn());
      $this$buildClassSerialDescriptor.do('second', $valueSerializer.sn());
      return Unit_instance;
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.q16_1 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  protoOf(PairSerializer_0).sn = function () {
    return this.q16_1;
  };
  protoOf(PairSerializer_0).r16 = function (_this__u8e3s4) {
    return _this__u8e3s4.me_1;
  };
  protoOf(PairSerializer_0).h16 = function (_this__u8e3s4) {
    return this.r16(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).s16 = function (_this__u8e3s4) {
    return _this__u8e3s4.ne_1;
  };
  protoOf(PairSerializer_0).j16 = function (_this__u8e3s4) {
    return this.s16(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PairSerializer_0).k16 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.hr($this.w16_1, 0, $this.t16_1);
    var b = composite.hr($this.w16_1, 1, $this.u16_1);
    var c = composite.hr($this.w16_1, 2, $this.v16_1);
    composite.vq($this.w16_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.lr($this.w16_1);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.hr($this.w16_1, 0, $this.t16_1);
          break;
        case 1:
          b = composite.hr($this.w16_1, 1, $this.u16_1);
          break;
        case 2:
          c = composite.hr($this.w16_1, 2, $this.v16_1);
          break;
        default:
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
      }
    }
    composite.vq($this.w16_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    return new Triple(a, b, c);
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      $this$buildClassSerialDescriptor.do('first', this$0.t16_1.sn());
      $this$buildClassSerialDescriptor.do('second', this$0.u16_1.sn());
      $this$buildClassSerialDescriptor.do('third', this$0.v16_1.sn());
      return Unit_instance;
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.t16_1 = aSerializer;
    this.u16_1 = bSerializer;
    this.v16_1 = cSerializer;
    var tmp = this;
    tmp.w16_1 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  protoOf(TripleSerializer_0).sn = function () {
    return this.w16_1;
  };
  protoOf(TripleSerializer_0).x16 = function (encoder, value) {
    var structuredEncoder = encoder.uq(this.w16_1);
    structuredEncoder.ls(this.w16_1, 0, this.t16_1, value.wl_1);
    structuredEncoder.ls(this.w16_1, 1, this.u16_1, value.xl_1);
    structuredEncoder.ls(this.w16_1, 2, this.v16_1, value.yl_1);
    structuredEncoder.vq(this.w16_1);
  };
  protoOf(TripleSerializer_0).tn = function (encoder, value) {
    return this.x16(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  protoOf(TripleSerializer_0).un = function (decoder) {
    var composite = decoder.uq(this.w16_1);
    if (composite.kr()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.l16_1 = keySerializer;
    this.m16_1 = valueSerializer;
  }
  protoOf(KeyValueSerializer).n16 = function (encoder, value) {
    var structuredEncoder = encoder.uq(this.sn());
    structuredEncoder.ls(this.sn(), 0, this.l16_1, this.h16(value));
    structuredEncoder.ls(this.sn(), 1, this.m16_1, this.j16(value));
    structuredEncoder.vq(this.sn());
  };
  protoOf(KeyValueSerializer).tn = function (encoder, value) {
    return this.n16(encoder, value);
  };
  protoOf(KeyValueSerializer).un = function (decoder) {
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var descriptor = this.sn();
    var composite = decoder.uq(descriptor);
    var tmp$ret$1;
    $l$block: {
      if (composite.kr()) {
        var key = composite.hr(this.sn(), 0, this.l16_1);
        var value = composite.hr(this.sn(), 1, this.m16_1);
        tmp$ret$1 = this.k16(key, value);
        break $l$block;
      }
      var key_0 = get_NULL();
      var value_0 = get_NULL();
      mainLoop: while (true) {
        var idx = composite.lr(this.sn());
        switch (idx) {
          case -1:
            break mainLoop;
          case 0:
            key_0 = composite.hr(this.sn(), 0, this.l16_1);
            break;
          case 1:
            value_0 = composite.hr(this.sn(), 1, this.m16_1);
            break;
          default:
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
        }
      }
      if (key_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'key' is missing");
      if (value_0 === get_NULL())
        throw SerializationException_init_$Create$_0("Element 'value' is missing");
      tmp$ret$1 = this.k16(key_0, value_0);
    }
    var result = tmp$ret$1;
    composite.vq(descriptor);
    return result;
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function _init_properties_Tuples_kt__dz0qyd() {
    if (!properties_initialized_Tuples_kt_3vs7ar) {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.y16_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_instance));
  }
  protoOf(ULongSerializer).sn = function () {
    return this.y16_1;
  };
  protoOf(ULongSerializer).z16 = function (encoder, value) {
    var tmp = encoder.as(this.y16_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.ur(tmp$ret$0);
  };
  protoOf(ULongSerializer).tn = function (encoder, value) {
    return this.z16(encoder, value instanceof ULong ? value.cn_1 : THROW_CCE());
  };
  protoOf(ULongSerializer).a17 = function (decoder) {
    // Inline function 'kotlin.toULong' call
    var this_0 = decoder.rq(this.y16_1).lq();
    return _ULong___init__impl__c78o9k(this_0);
  };
  protoOf(ULongSerializer).un = function (decoder) {
    return new ULong(this.a17(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.b17_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).sn = function () {
    return this.b17_1;
  };
  protoOf(UIntSerializer).c17 = function (encoder, value) {
    var tmp = encoder.as(this.b17_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.tr(tmp$ret$0);
  };
  protoOf(UIntSerializer).tn = function (encoder, value) {
    return this.c17(encoder, value instanceof UInt ? value.sm_1 : THROW_CCE());
  };
  protoOf(UIntSerializer).d17 = function (decoder) {
    // Inline function 'kotlin.toUInt' call
    var this_0 = decoder.rq(this.b17_1).kq();
    return _UInt___init__impl__l7qpdl(this_0);
  };
  protoOf(UIntSerializer).un = function (decoder) {
    return new UInt(this.d17(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.e17_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).sn = function () {
    return this.e17_1;
  };
  protoOf(UByteSerializer).f17 = function (encoder, value) {
    var tmp = encoder.as(this.e17_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.rr(tmp$ret$0);
  };
  protoOf(UByteSerializer).tn = function (encoder, value) {
    return this.f17(encoder, value instanceof UByte ? value.im_1 : THROW_CCE());
  };
  protoOf(UByteSerializer).g17 = function (decoder) {
    // Inline function 'kotlin.toUByte' call
    var this_0 = decoder.rq(this.e17_1).iq();
    return _UByte___init__impl__g9hnc4(this_0);
  };
  protoOf(UByteSerializer).un = function (decoder) {
    return new UByte(this.g17(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.h17_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).sn = function () {
    return this.h17_1;
  };
  protoOf(UShortSerializer).i17 = function (encoder, value) {
    var tmp = encoder.as(this.h17_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.sr(tmp$ret$0);
  };
  protoOf(UShortSerializer).tn = function (encoder, value) {
    return this.i17(encoder, value instanceof UShort ? value.mn_1 : THROW_CCE());
  };
  protoOf(UShortSerializer).j17 = function (decoder) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = decoder.rq(this.h17_1).jq();
    return _UShort___init__impl__jigrne(this_0);
  };
  protoOf(UShortSerializer).un = function (decoder) {
    return new UShort(this.j17(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).po = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.qo(kClass, typeArgumentsSerializers) : $super.qo.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.l17_1 = class2ContextualFactory;
    this.m17_1 = polyBase2Serializers;
    this.n17_1 = polyBase2DefaultSerializerProvider;
    this.o17_1 = polyBase2NamedSerializers;
    this.p17_1 = polyBase2DefaultDeserializerProvider;
    this.q17_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).oo = function () {
    return this.q17_1;
  };
  protoOf(SerialModuleImpl).ts = function (baseClass, value) {
    if (!baseClass.ma(value))
      return null;
    var tmp0_safe_receiver = this.m17_1.n2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.n17_1.n2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).ss = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.o17_1.n2(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).n2(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.p17_1.n2(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).qo = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.l17_1.n2(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r17(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).k17 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.l17_1.l1().t();
    while (_iterator__ex2g4s.u()) {
      var element = _iterator__ex2g4s.v();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.m1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.n1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.u17_1;
        collector.v17(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.t17(kclass, serial.s17_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.m17_1.l1().t();
    while (_iterator__ex2g4s_0.u()) {
      var element_0 = _iterator__ex2g4s_0.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.m1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.n1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.l1().t();
      while (_iterator__ex2g4s_1.u()) {
        var element_1 = _iterator__ex2g4s_1.v();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.m1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.n1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$15 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.w17(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.n17_1.l1().t();
    while (_iterator__ex2g4s_2.u()) {
      var element_2 = _iterator__ex2g4s_2.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.n1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.x17(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.p17_1.l1().t();
    while (_iterator__ex2g4s_3.u()) {
      var element_3 = _iterator__ex2g4s_3.v();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.m1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.n1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.y17(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.u17_1 = serializer;
  }
  protoOf(Argless).r17 = function (typeArgumentsSerializers) {
    return this.u17_1;
  };
  protoOf(Argless).equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.u17_1, this.u17_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Argless).hashCode = function () {
    return hashCode(this.u17_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.s17_1 = provider;
  }
  protoOf(WithTypeArguments).r17 = function (typeArgumentsSerializers) {
    return this.s17_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function SerializersModuleBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp.z17_1 = HashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_0.a18_1 = HashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_1.b18_1 = HashMap_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_2.c18_1 = HashMap_init_$Create$();
    var tmp_3 = this;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp_3.d18_1 = HashMap_init_$Create$();
    this.e18_1 = false;
  }
  protoOf(SerializersModuleBuilder).v17 = function (kClass, serializer) {
    return this.f18(kClass, new Argless(serializer));
  };
  protoOf(SerializersModuleBuilder).t17 = function (kClass, provider) {
    return this.f18(kClass, new WithTypeArguments(provider));
  };
  protoOf(SerializersModuleBuilder).w17 = function (baseClass, actualClass, actualSerializer) {
    this.g18(baseClass, actualClass, actualSerializer);
  };
  protoOf(SerializersModuleBuilder).x17 = function (baseClass, defaultSerializerProvider) {
    this.h18(baseClass, defaultSerializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).y17 = function (baseClass, defaultDeserializerProvider) {
    this.i18(baseClass, defaultDeserializerProvider, false);
  };
  protoOf(SerializersModuleBuilder).j18 = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.z17_1.n2(forClass);
      if (!(previous == null) && !equals(previous, provider)) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + toString(forClass) + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    this.z17_1.v2(forClass, provider);
    if (isInterface_0(forClass))
      this.e18_1 = true;
  };
  protoOf(SerializersModuleBuilder).f18 = function (forClass, provider, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.j18(forClass, provider, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.j18.call(this, forClass, provider, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).h18 = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.b18_1.n2(baseClass);
    if (!(previous == null) && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.b18_1.v2(baseClass, defaultSerializerProvider);
  };
  protoOf(SerializersModuleBuilder).i18 = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.d18_1.n2(baseClass);
    if (!(previous == null) && !equals(previous, defaultDeserializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for ' + toString(baseClass) + ' is already registered: ' + toString(previous));
    }
    // Inline function 'kotlin.collections.set' call
    this.d18_1.v2(baseClass, defaultDeserializerProvider);
  };
  protoOf(SerializersModuleBuilder).k18 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.sn().ap();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.a18_1;
    var value = this_0.n2(baseClass);
    var tmp;
    if (value == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer = HashMap_init_$Create$();
      this_0.v2(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    var baseClassSerializers = tmp;
    // Inline function 'kotlin.collections.getOrPut' call
    var this_1 = this.c18_1;
    var value_0 = this_1.n2(baseClass);
    var tmp_0;
    if (value_0 == null) {
      // Inline function 'kotlin.collections.hashMapOf' call
      var answer_0 = HashMap_init_$Create$();
      this_1.v2(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    var names = tmp_0;
    var previousSerializer = baseClassSerializers.n2(concreteClass);
    if (!(previousSerializer == null) && !equals(previousSerializer, concreteSerializer)) {
      if (allowOverwrite)
        names.w2(previousSerializer.sn().ap());
      else
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
    }
    var previousByName = names.n2(name);
    if (!(previousByName == null) && !equals(previousByName, concreteSerializer)) {
      // Inline function 'kotlin.sequences.find' call
      var tmp0 = asSequence(baseClassSerializers);
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var _iterator__ex2g4s = tmp0.t();
        while (_iterator__ex2g4s.u()) {
          var element = _iterator__ex2g4s.v();
          if (element.n1() === previousByName) {
            tmp$ret$7 = element;
            break $l$block;
          }
        }
        tmp$ret$7 = null;
      }
      var tmp0_safe_receiver = tmp$ret$7;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1();
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'Name ' + name + ' is registered in the module but no Kotlin class is associated with it.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var previousClass = tmp_1;
      if (allowOverwrite)
        baseClassSerializers.w2(previousClass);
      else
        throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers in a scope of '" + toString(baseClass) + "' " + ("have the same serial name '" + name + "': " + toString(concreteSerializer) + " for '" + toString(concreteClass) + "' and " + toString(previousByName) + " for '" + toString(previousClass) + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.v2(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.v2(name, concreteSerializer);
  };
  protoOf(SerializersModuleBuilder).g18 = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $super) {
    allowOverwrite = allowOverwrite === VOID ? false : allowOverwrite;
    var tmp;
    if ($super === VOID) {
      this.k18(baseClass, concreteClass, concreteSerializer, allowOverwrite);
      tmp = Unit_instance;
    } else {
      tmp = $super.k18.call(this, baseClass, concreteClass, concreteSerializer, allowOverwrite);
    }
    return tmp;
  };
  protoOf(SerializersModuleBuilder).gw = function () {
    return new SerialModuleImpl(this.z17_1, this.a18_1, this.b18_1, this.c18_1, this.d18_1, this.e18_1);
  };
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + toString(concreteClass) + ' already registered in the scope of ' + toString(baseClass));
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass) {
    var tmp = SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, objectCreate(protoOf(SerializerAlreadyRegisteredException)));
    captureStack(tmp, SerializerAlreadyRegisteredException_init_$Create$);
    return tmp;
  }
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init_$Init$_0(msg, this);
    captureStack(this, SerializerAlreadyRegisteredException);
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.l18_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.l18_1.equals(tmp0_other_with_cast.l18_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.l18_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.l18_1) + ')';
  };
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4) + 'To get enum serializer on Kotlin/JS, it should be annotated with @Serializable annotation.');
  }
  function isInterface_0(_this__u8e3s4) {
    return get_isInterfaceHack(_this__u8e3s4);
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp0_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().gb()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().ob());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = isInterface(assocObject, KSerializer) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.dz(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          tmp_0 = null;
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function createCache(factory) {
    return new createCache$1(factory);
  }
  function createParametrizedCache(factory) {
    return new createParametrizedCache$1(factory);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(_this__u8e3s4);
  }
  function estimateCapacityForHashMap(requiredCapacity) {
    return requiredCapacity;
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().pb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_9(Companion_getInstance_2())), to(PrimitiveClasses_getInstance().sb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().nb(), serializer_10(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().zb(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().mb(), serializer_11(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().yb(), FloatArraySerializer()), to(PrimitiveClasses_getInstance().lb(), serializer_5(Companion_instance)), to(PrimitiveClasses_getInstance().xb(), LongArraySerializer()), to(getKClass(ULong), serializer_1(Companion_getInstance_3())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().kb(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().vb(), IntArraySerializer()), to(getKClass(UInt), serializer_2(Companion_getInstance_4())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().jb(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().ub(), ShortArraySerializer()), to(getKClass(UShort), serializer_4(Companion_getInstance_5())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().ib(), serializer_7(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().tb(), ByteArraySerializer()), to(getKClass(UByte), serializer_3(Companion_getInstance_6())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().hb(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().rb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().gb(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance())), to(getKClass(Instant), serializer_15(Companion_getInstance_0())), to(getKClass(Uuid), serializer_16(Companion_getInstance_1()))]);
  }
  function get_isInterfaceHack(_this__u8e3s4) {
    if (_this__u8e3s4 === PrimitiveClasses_getInstance().gb())
      return false;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function createCache$1($factory) {
    this.m18_1 = $factory;
  }
  protoOf(createCache$1).ro = function (key) {
    return this.m18_1(key);
  };
  function createParametrizedCache$1($factory) {
    this.n18_1 = $factory;
  }
  protoOf(createParametrizedCache$1).so = function (key, types) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = this.n18_1(key, types);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).to = get_isNullable;
  protoOf(SerialDescriptorImpl).cp = get_isInline;
  protoOf(AbstractDecoder).hr = decodeSerializableElement$default;
  protoOf(AbstractDecoder).tq = decodeSerializableValue;
  protoOf(AbstractDecoder).kr = decodeSequentially;
  protoOf(AbstractDecoder).mr = decodeCollectionSize;
  protoOf(AbstractEncoder).ps = encodeNotNullMark;
  protoOf(AbstractEncoder).qs = beginCollection;
  protoOf(AbstractEncoder).ms = encodeSerializableValue;
  protoOf(AbstractEncoder).os = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).rs = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).to = get_isNullable;
  protoOf(ListLikeDescriptor).cp = get_isInline;
  protoOf(ListLikeDescriptor).ep = get_annotations;
  protoOf(MapLikeDescriptor).to = get_isNullable;
  protoOf(MapLikeDescriptor).cp = get_isInline;
  protoOf(MapLikeDescriptor).ep = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).to = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).cp = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).ty = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).to = get_isNullable;
  protoOf(NothingSerialDescriptor).cp = get_isInline;
  protoOf(NothingSerialDescriptor).ep = get_annotations;
  protoOf(PrimitiveSerialDescriptor_0).to = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).cp = get_isInline;
  protoOf(PrimitiveSerialDescriptor_0).ep = get_annotations;
  protoOf(TaggedDecoder).hr = decodeSerializableElement$default;
  protoOf(TaggedDecoder).tq = decodeSerializableValue;
  protoOf(TaggedDecoder).kr = decodeSequentially;
  protoOf(TaggedDecoder).mr = decodeCollectionSize;
  protoOf(TaggedEncoder).qs = beginCollection;
  protoOf(TaggedEncoder).ms = encodeSerializableValue;
  protoOf(TaggedEncoder).os = encodeNullableSerializableValue;
  protoOf(TaggedEncoder).rs = shouldEncodeElementDefault;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SEALED_getInstance;
  _.$_$.b = STRING_getInstance;
  _.$_$.c = CONTEXTUAL_getInstance;
  _.$_$.d = ENUM_getInstance;
  _.$_$.e = CLASS_getInstance;
  _.$_$.f = LIST_getInstance;
  _.$_$.g = MAP_getInstance;
  _.$_$.h = OBJECT_getInstance;
  _.$_$.i = BooleanSerializer_getInstance;
  _.$_$.j = DoubleSerializer_getInstance;
  _.$_$.k = IntSerializer_getInstance;
  _.$_$.l = LongSerializer_getInstance;
  _.$_$.m = StringSerializer_getInstance;
  _.$_$.n = SerializationException_init_$Create$_0;
  _.$_$.o = SerializationException_init_$Init$_1;
  _.$_$.p = UnknownFieldException_init_$Create$;
  _.$_$.q = ListSerializer;
  _.$_$.r = MapSerializer;
  _.$_$.s = get_nullable;
  _.$_$.t = serializer_0;
  _.$_$.u = serializer_4;
  _.$_$.v = serializer_2;
  _.$_$.w = serializer_3;
  _.$_$.x = serializer_1;
  _.$_$.y = PolymorphicKind;
  _.$_$.z = PrimitiveKind;
  _.$_$.a1 = PrimitiveSerialDescriptor;
  _.$_$.b1 = get_annotations;
  _.$_$.c1 = get_isInline;
  _.$_$.d1 = get_isNullable;
  _.$_$.e1 = SerialDescriptor;
  _.$_$.f1 = ENUM;
  _.$_$.g1 = buildClassSerialDescriptor;
  _.$_$.h1 = buildSerialDescriptor;
  _.$_$.i1 = getContextualDescriptor;
  _.$_$.j1 = AbstractDecoder;
  _.$_$.k1 = AbstractEncoder;
  _.$_$.l1 = CompositeDecoder;
  _.$_$.m1 = CompositeEncoder;
  _.$_$.n1 = Decoder;
  _.$_$.o1 = Encoder;
  _.$_$.p1 = AbstractPolymorphicSerializer;
  _.$_$.q1 = ElementMarker;
  _.$_$.r1 = typeParametersSerializers;
  _.$_$.s1 = GeneratedSerializer;
  _.$_$.t1 = InlinePrimitiveDescriptor;
  _.$_$.u1 = NamedValueDecoder;
  _.$_$.v1 = NamedValueEncoder;
  _.$_$.w1 = PluginGeneratedSerialDescriptor;
  _.$_$.x1 = ReferenceArraySerializer;
  _.$_$.y1 = SerializerFactory;
  _.$_$.z1 = createSimpleEnumSerializer;
  _.$_$.a2 = jsonCachedSerialNames;
  _.$_$.b2 = missingFieldExceptionWithNewMessage;
  _.$_$.c2 = throwMissingFieldException;
  _.$_$.d2 = EmptySerializersModule_0;
  _.$_$.e2 = SerializersModuleBuilder;
  _.$_$.f2 = contextual;
  _.$_$.g2 = SerializersModuleCollector;
  _.$_$.h2 = DeserializationStrategy;
  _.$_$.i2 = KSerializer;
  _.$_$.j2 = MissingFieldException;
  _.$_$.k2 = SerializableWith;
  _.$_$.l2 = SerializationException;
  _.$_$.m2 = SerializationStrategy;
  _.$_$.n2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
