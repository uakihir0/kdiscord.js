(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-coroutines-core.js', './khttpclient.js', './ktor-ktor-http.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-coroutines-core.js'), require('./khttpclient.js'), require('./ktor-ktor-http.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kdiscord-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kdiscord-core'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kdiscord-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kdiscord-core'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'kdiscord-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'kdiscord-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kdiscord-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kdiscord-core'.");
    }
    if (typeof khttpclient === 'undefined') {
      throw new Error("Error loading module 'kdiscord-core'. Its dependency 'khttpclient' was not found. Please, check whether 'khttpclient' is loaded prior to 'kdiscord-core'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'kdiscord-core'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'kdiscord-core'.");
    }
    globalThis['kdiscord-core'] = factory(typeof globalThis['kdiscord-core'] === 'undefined' ? {} : globalThis['kdiscord-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-coroutines-core'], khttpclient, globalThis['ktor-ktor-http']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_work_socialhub_khttpclient, kotlin_io_ktor_ktor_http) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.zb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.bb;
  var initMetadataForInterface = kotlin_kotlin.$_$.eb;
  var defineProp = kotlin_kotlin.$_$.sa;
  var VOID = kotlin_kotlin.$_$.c;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.g4;
  var objectCreate = kotlin_kotlin.$_$.yb;
  var captureStack = kotlin_kotlin.$_$.ja;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.i4;
  var Exception = kotlin_kotlin.$_$.sf;
  var initMetadataForClass = kotlin_kotlin.$_$.ab;
  var initMetadataForObject = kotlin_kotlin.$_$.gb;
  var Unit_instance = kotlin_kotlin.$_$.e3;
  var CoroutineImpl = kotlin_kotlin.$_$.j9;
  var await_0 = kotlin_kotlin.$_$.f3;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.r8;
  var jsIsFunction = kotlin_kotlin.$_$.ub;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.cb;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var THROW_CCE = kotlin_kotlin.$_$.zf;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var SerializableWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var getKClass = kotlin_kotlin.$_$.sc;
  var ReferenceArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g2;
  var lazy = kotlin_kotlin.$_$.vg;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s2;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.u;
  var get_intOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.s;
  var Companion_instance = kotlin_kotlin.$_$.z2;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.t;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.p;
  var createFailure = kotlin_kotlin.$_$.pg;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.r;
  var JsonObjectBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var put = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.x;
  var buildClassSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var JsonDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var isInterface = kotlin_kotlin.$_$.pb;
  var toString = kotlin_kotlin.$_$.cc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s4;
  var arrayOf = kotlin_kotlin.$_$.mg;
  var createKType = kotlin_kotlin.$_$.qc;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var JsonEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var getKClassFromExpression = kotlin_kotlin.$_$.rc;
  var toInt = kotlin_kotlin.$_$.se;
  var Companion_getInstance = kotlin_kotlin.$_$.u2;
  var toDouble = kotlin_kotlin.$_$.pe;
  var numberToLong = kotlin_kotlin.$_$.z9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xg;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i3;
  var to = kotlin_kotlin.$_$.bh;
  var toMap = kotlin_kotlin.$_$.j8;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c6;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var get_boolean = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var get_booleanOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var get_double = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var get_doubleOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var get_float = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.p;
  var get_floatOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var get_long = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.v;
  var get_longOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.w;
  var get_int = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.r;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o4;
  var println = kotlin_kotlin.$_$.n9;
  var Enum = kotlin_kotlin.$_$.qf;
  var Builtins_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.k;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var HttpRequest = kotlin_work_socialhub_khttpclient.$_$.b;
  var initMetadataForLambda = kotlin_kotlin.$_$.fb;
  var constructCallableReference = kotlin_kotlin.$_$.ra;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var withContext = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.oc;
  var promisify = kotlin_kotlin.$_$.v8;
  var copyToArray = kotlin_kotlin.$_$.s6;
  var encodeURLPathPart = kotlin_io_ktor_ktor_http.$_$.v1;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.f5;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForInterface(Discord, 'Discord');
  initMetadataForClass(DiscordException, 'DiscordException', VOID, Exception);
  initMetadataForObject(DiscordFactory, 'DiscordFactory');
  function getChannel$suspendBridge(channelId, $completion) {
  }
  function listDmChannels$suspendBridge($completion) {
  }
  function createDm$suspendBridge(request, $completion) {
  }
  initMetadataForInterface(ChannelsResource, 'ChannelsResource', VOID, VOID, VOID, [1, 2, 0]);
  initMetadataForCoroutine($getGateway$virtualSuspendBridgeCOROUTINE$, CoroutineImpl);
  function getGateway$suspendBridge($completion) {
  }
  initMetadataForInterface(GatewayResource, 'GatewayResource', VOID, VOID, VOID, [0, 1]);
  function getCurrentUserGuilds$suspendBridge(request, $completion) {
  }
  function getGuild$suspendBridge(guildId, $completion) {
  }
  function listGuildChannels$suspendBridge(guildId, $completion) {
  }
  initMetadataForInterface(GuildsResource, 'GuildsResource', VOID, VOID, VOID, [1, 2]);
  function list$suspendBridge(request, $completion) {
  }
  function get$suspendBridge(channelId, messageId, $completion) {
  }
  function create$suspendBridge(request, $completion) {
  }
  function edit$suspendBridge(request, $completion) {
  }
  function delete$suspendBridge(channelId, messageId, $completion) {
  }
  initMetadataForInterface(MessagesResource, 'MessagesResource', VOID, VOID, VOID, [1, 2, 3]);
  function createReaction$suspendBridge(channelId, messageId, emoji, $completion) {
  }
  function deleteOwnReaction$suspendBridge(channelId, messageId, emoji, $completion) {
  }
  function getReactions$suspendBridge(channelId, messageId, emoji, $completion) {
  }
  function deleteAllReactions$suspendBridge(channelId, messageId, $completion) {
  }
  initMetadataForInterface(ReactionsResource, 'ReactionsResource', VOID, VOID, VOID, [3, 4, 2]);
  function getMe$suspendBridge($completion) {
  }
  function getUser$suspendBridge(userId, $completion) {
  }
  initMetadataForInterface(UsersResource, 'UsersResource', VOID, VOID, VOID, [0, 1, 2]);
  initMetadataForClass(ChannelsCreateDmRequest, 'ChannelsCreateDmRequest');
  initMetadataForClass(GuildsListRequest, 'GuildsListRequest', GuildsListRequest);
  initMetadataForClass(MessagesCreateRequest, 'MessagesCreateRequest');
  initMetadataForClass(MessagesEditRequest, 'MessagesEditRequest');
  initMetadataForClass(MessagesListRequest, 'MessagesListRequest');
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GatewayResponse, 'GatewayResponse', GatewayResponse, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Attachment, 'Attachment', Attachment, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Channel, 'Channel', Channel, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Embed, 'Embed', Embed, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EmbedFooter, 'EmbedFooter', EmbedFooter, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EmbedMedia, 'EmbedMedia', EmbedMedia, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EmbedProvider, 'EmbedProvider', EmbedProvider, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EmbedAuthor, 'EmbedAuthor', EmbedAuthor, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(EmbedField, 'EmbedField', EmbedField, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Emoji, 'Emoji', Emoji, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Guild, 'Guild', Guild, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForCompanion(Companion_11);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(GuildMember, 'GuildMember', GuildMember, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForCompanion(Companion_12);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Message, 'Message', Message, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForCompanion(Companion_13);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(MessageReference, 'MessageReference', MessageReference, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
  initMetadataForCompanion(Companion_14, VOID, [SerializerFactory]);
  initMetadataForInterface(MessageComponent, 'MessageComponent', VOID, VOID, VOID, VOID, VOID, {0: MessageComponentSerializer_getInstance});
  initMetadataForCompanion(Companion_15);
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ActionRowComponent, 'ActionRowComponent', ActionRowComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_13});
  initMetadataForCompanion(Companion_16);
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ButtonComponent, 'ButtonComponent', ButtonComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_14});
  initMetadataForCompanion(Companion_17);
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StringSelectComponent, 'StringSelectComponent', StringSelectComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_15});
  initMetadataForCompanion(Companion_18);
  initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TextInputComponent, 'TextInputComponent', TextInputComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_16});
  initMetadataForCompanion(Companion_19);
  initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UserSelectComponent, 'UserSelectComponent', UserSelectComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_17});
  initMetadataForCompanion(Companion_20);
  initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RoleSelectComponent, 'RoleSelectComponent', RoleSelectComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_18});
  initMetadataForCompanion(Companion_21);
  initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(MentionableSelectComponent, 'MentionableSelectComponent', MentionableSelectComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_19});
  initMetadataForCompanion(Companion_22);
  initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ChannelSelectComponent, 'ChannelSelectComponent', ChannelSelectComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_20});
  initMetadataForCompanion(Companion_23);
  initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SectionComponent, 'SectionComponent', SectionComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_21});
  initMetadataForCompanion(Companion_24);
  initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TextDisplayComponent, 'TextDisplayComponent', TextDisplayComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_22});
  initMetadataForCompanion(Companion_25);
  initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ThumbnailComponent, 'ThumbnailComponent', ThumbnailComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_23});
  initMetadataForCompanion(Companion_26);
  initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(MediaGalleryComponent, 'MediaGalleryComponent', MediaGalleryComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_24});
  initMetadataForCompanion(Companion_27);
  initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FileComponent, 'FileComponent', FileComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_25});
  initMetadataForCompanion(Companion_28);
  initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SeparatorComponent, 'SeparatorComponent', SeparatorComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_26});
  initMetadataForCompanion(Companion_29);
  initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ContainerComponent, 'ContainerComponent', ContainerComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_27});
  initMetadataForCompanion(Companion_30);
  initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LabelComponent, 'LabelComponent', LabelComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_28});
  initMetadataForCompanion(Companion_31);
  initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FileUploadComponent, 'FileUploadComponent', FileUploadComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_29});
  initMetadataForCompanion(Companion_32);
  initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RadioGroupComponent, 'RadioGroupComponent', RadioGroupComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_30});
  initMetadataForCompanion(Companion_33);
  initMetadataForObject($serializer_31, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CheckboxGroupComponent, 'CheckboxGroupComponent', CheckboxGroupComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_31});
  initMetadataForCompanion(Companion_34);
  initMetadataForObject($serializer_32, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CheckboxComponent, 'CheckboxComponent', CheckboxComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_32});
  initMetadataForCompanion(Companion_35);
  initMetadataForObject($serializer_33, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UnknownMessageComponent, 'UnknownMessageComponent', UnknownMessageComponent, VOID, [MessageComponent], VOID, VOID, {0: $serializer_getInstance_33});
  initMetadataForCompanion(Companion_36);
  initMetadataForObject($serializer_34, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SelectOption, 'SelectOption', SelectOption, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_34});
  initMetadataForCompanion(Companion_37);
  initMetadataForObject($serializer_35, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SelectDefaultValue, 'SelectDefaultValue', SelectDefaultValue, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_35});
  initMetadataForCompanion(Companion_38);
  initMetadataForObject($serializer_36, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ComponentChoice, 'ComponentChoice', ComponentChoice, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_36});
  initMetadataForCompanion(Companion_39);
  initMetadataForObject($serializer_37, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(MediaGalleryItem, 'MediaGalleryItem', MediaGalleryItem, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_37});
  initMetadataForCompanion(Companion_40);
  initMetadataForObject($serializer_38, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UnfurledMediaItem, 'UnfurledMediaItem', UnfurledMediaItem, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_38});
  initMetadataForObject(MessageComponentSerializer, 'MessageComponentSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_41);
  initMetadataForObject($serializer_39, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Reaction, 'Reaction', Reaction, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_39});
  initMetadataForCompanion(Companion_42);
  initMetadataForObject($serializer_40, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ReactionCountDetails, 'ReactionCountDetails', ReactionCountDetails, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_40});
  initMetadataForCompanion(Companion_43);
  initMetadataForObject($serializer_41, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Role, 'Role', Role, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_41});
  initMetadataForCompanion(Companion_44);
  initMetadataForObject($serializer_42, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(User, 'User', User, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_42});
  initMetadataForCompanion(Companion_45);
  initMetadataForObject($serializer_43, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UserPrimaryGuild, 'UserPrimaryGuild', UserPrimaryGuild, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_43});
  initMetadataForClass(FileContent, 'FileContent');
  initMetadataForCompanion(Companion_46);
  initMetadataForClass(RateLimit, 'RateLimit', RateLimit);
  initMetadataForClass(Response, 'Response');
  initMetadataForClass(ResponseUnit, 'ResponseUnit', ResponseUnit);
  initMetadataForObject(AnySerializer, 'AnySerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(DiscordImpl, 'DiscordImpl', VOID, VOID, [Discord]);
  initMetadataForObject(InternalUtility, 'InternalUtility');
  initMetadataForCompanion(Companion_47);
  initMetadataForClass(AbstractResourceImpl, 'AbstractResourceImpl', VOID, VOID, VOID, [1]);
  initMetadataForCompanion(Companion_48);
  initMetadataForObject($serializer_44, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CreateDmBody, 'CreateDmBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_44});
  initMetadataForLambda(ChannelsResourceImpl$getChannel$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelsResourceImpl$getChannelBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelsResourceImpl$listDmChannels$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelsResourceImpl$listDmChannelsBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelsResourceImpl$createDm$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelsResourceImpl$createDmBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($getChannelCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getChannel$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($listDmChannelsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($listDmChannels$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($createDmCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($createDm$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ChannelsResourceImpl, 'ChannelsResourceImpl', VOID, AbstractResourceImpl, [ChannelsResource], [1, 0]);
  initMetadataForLambda(GatewayResourceImpl$getGateway$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(GatewayResourceImpl$getGatewayBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($getGatewayCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getGateway$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(GatewayResourceImpl, 'GatewayResourceImpl', VOID, AbstractResourceImpl, [GatewayResource], [0, 1]);
  initMetadataForLambda(GuildsResourceImpl$getCurrentUserGuilds$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(GuildsResourceImpl$getCurrentUserGuildsBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(GuildsResourceImpl$getGuild$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(GuildsResourceImpl$getGuildBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(GuildsResourceImpl$listGuildChannels$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(GuildsResourceImpl$listGuildChannelsBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($getCurrentUserGuildsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getCurrentUserGuilds$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getGuildCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getGuild$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($listGuildChannelsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($listGuildChannels$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(GuildsResourceImpl, 'GuildsResourceImpl', VOID, AbstractResourceImpl, [GuildsResource], [1]);
  initMetadataForCompanion(Companion_49);
  initMetadataForObject($serializer_45, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_50);
  initMetadataForObject($serializer_46, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_51);
  initMetadataForObject($serializer_47, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_52);
  initMetadataForObject($serializer_48, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CreateMessageBody, 'CreateMessageBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_45});
  initMetadataForClass(MessageReferenceBody, 'MessageReferenceBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_46});
  initMetadataForClass(AttachmentBody, 'AttachmentBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_47});
  initMetadataForClass(EditMessageBody, 'EditMessageBody', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_48});
  initMetadataForLambda(MessagesResourceImpl$list$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MessagesResourceImpl$listBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MessagesResourceImpl$get$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MessagesResourceImpl$getBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MessagesResourceImpl$create$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MessagesResourceImpl$createBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MessagesResourceImpl$edit$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MessagesResourceImpl$editBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MessagesResourceImpl$delete$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MessagesResourceImpl$deleteBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($listCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($list$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($get$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($createCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($create$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($editCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($edit$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($deleteCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($delete$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(MessagesResourceImpl, 'MessagesResourceImpl', VOID, AbstractResourceImpl, [MessagesResource], [1, 2]);
  initMetadataForLambda(ReactionsResourceImpl$createReaction$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ReactionsResourceImpl$createReactionBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ReactionsResourceImpl$deleteOwnReaction$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ReactionsResourceImpl$deleteOwnReactionBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ReactionsResourceImpl$getReactions$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ReactionsResourceImpl$getReactionsBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ReactionsResourceImpl$deleteAllReactions$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ReactionsResourceImpl$deleteAllReactionsBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($createReactionCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($createReaction$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($deleteOwnReactionCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($deleteOwnReaction$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getReactionsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getReactions$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($deleteAllReactionsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($deleteAllReactions$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ReactionsResourceImpl, 'ReactionsResourceImpl', VOID, AbstractResourceImpl, [ReactionsResource], [3, 2, 1]);
  initMetadataForLambda(UsersResourceImpl$getMe$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UsersResourceImpl$getMeBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UsersResourceImpl$getUser$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(UsersResourceImpl$getUserBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($getMeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getMe$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getUserCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getUser$suspendBridgeCOROUTINE$, CoroutineImpl);
  initMetadataForClass(UsersResourceImpl, 'UsersResourceImpl', VOID, AbstractResourceImpl, [UsersResource], [0, 1]);
  initMetadataForObject(MediaType, 'MediaType');
  //endregion
  function Companion() {
    this.DEFAULT_API_HOST = 'https://discord.com/api/v10';
  }
  protoOf(Companion).x56 = function () {
    return this.DEFAULT_API_HOST;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function Discord() {
  }
  function DiscordException_init_$Init$(e, $this) {
    Exception_init_$Init$(e, $this);
    DiscordException.call($this);
    return $this;
  }
  function DiscordException_init_$Create$(e) {
    var tmp = DiscordException_init_$Init$(e, objectCreate(protoOf(DiscordException)));
    captureStack(tmp, DiscordException_init_$Create$);
    return tmp;
  }
  function DiscordException_init_$Init$_0(status, body, $this) {
    Exception_init_$Init$_0('status code: ' + status + ', body: ' + body, $this);
    DiscordException.call($this);
    $this.a57_1 = status;
    $this.b57_1 = body;
    return $this;
  }
  function DiscordException_init_$Create$_0(status, body) {
    var tmp = DiscordException_init_$Init$_0(status, body, objectCreate(protoOf(DiscordException)));
    captureStack(tmp, DiscordException_init_$Create$_0);
    return tmp;
  }
  function DiscordException() {
    captureStack(this, DiscordException);
    this.a57_1 = null;
    this.b57_1 = null;
    this.c57_1 = null;
  }
  function DiscordFactory() {
  }
  protoOf(DiscordFactory).instance = function (token) {
    return new DiscordImpl('https://discord.com/api/v10', token);
  };
  protoOf(DiscordFactory).instanceWithApiHost = function (token, apiHost) {
    return new DiscordImpl(apiHost, token);
  };
  var DiscordFactory_instance;
  function DiscordFactory_getInstance() {
    return DiscordFactory_instance;
  }
  function ChannelsResource() {
  }
  function getGateway$virtualSuspendBridge($this, $completion) {
    var tmp = new $getGateway$virtualSuspendBridgeCOROUTINE$($this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  }
  function $getGateway$virtualSuspendBridgeCOROUTINE$($this, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u57_1 = $this;
  }
  protoOf($getGateway$virtualSuspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (jsIsFunction(this.u57_1.w57)) {
              this.i8_1 = 2;
              suspendResult = this.u57_1.w57(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.u57_1.getGateway(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.v57_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.v57_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.v57_1;
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
  function GatewayResource() {
  }
  function GuildsResource() {
  }
  function MessagesResource() {
  }
  function ReactionsResource() {
  }
  function UsersResource() {
  }
  function ChannelsCreateDmRequest(recipientId) {
    this.recipientId = recipientId;
  }
  protoOf(ChannelsCreateDmRequest).p59 = function (_set____db54di) {
    this.recipientId = _set____db54di;
  };
  protoOf(ChannelsCreateDmRequest).q59 = function () {
    return this.recipientId;
  };
  function GuildsListRequest() {
    this.before = null;
    this.after = null;
    this.limit = null;
    this.withCounts = null;
  }
  protoOf(GuildsListRequest).r59 = function (_set____db54di) {
    this.before = _set____db54di;
  };
  protoOf(GuildsListRequest).s59 = function () {
    return this.before;
  };
  protoOf(GuildsListRequest).t59 = function (_set____db54di) {
    this.after = _set____db54di;
  };
  protoOf(GuildsListRequest).u59 = function () {
    return this.after;
  };
  protoOf(GuildsListRequest).v59 = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(GuildsListRequest).w59 = function () {
    return this.limit;
  };
  protoOf(GuildsListRequest).x59 = function (_set____db54di) {
    this.withCounts = _set____db54di;
  };
  protoOf(GuildsListRequest).y59 = function () {
    return this.withCounts;
  };
  function MessagesCreateRequest(channelId) {
    this.channelId = channelId;
    this.content = null;
    this.tts = null;
    this.replyMessageId = null;
    this.files = null;
  }
  protoOf(MessagesCreateRequest).z59 = function (_set____db54di) {
    this.channelId = _set____db54di;
  };
  protoOf(MessagesCreateRequest).a5a = function () {
    return this.channelId;
  };
  protoOf(MessagesCreateRequest).b5a = function (_set____db54di) {
    this.content = _set____db54di;
  };
  protoOf(MessagesCreateRequest).d1b = function () {
    return this.content;
  };
  protoOf(MessagesCreateRequest).c5a = function (_set____db54di) {
    this.tts = _set____db54di;
  };
  protoOf(MessagesCreateRequest).d5a = function () {
    return this.tts;
  };
  protoOf(MessagesCreateRequest).e5a = function (_set____db54di) {
    this.replyMessageId = _set____db54di;
  };
  protoOf(MessagesCreateRequest).f5a = function () {
    return this.replyMessageId;
  };
  protoOf(MessagesCreateRequest).g5a = function (_set____db54di) {
    this.files = _set____db54di;
  };
  protoOf(MessagesCreateRequest).h5a = function () {
    return this.files;
  };
  function MessagesEditRequest(channelId, messageId) {
    this.channelId = channelId;
    this.messageId = messageId;
    this.content = null;
  }
  protoOf(MessagesEditRequest).z59 = function (_set____db54di) {
    this.channelId = _set____db54di;
  };
  protoOf(MessagesEditRequest).a5a = function () {
    return this.channelId;
  };
  protoOf(MessagesEditRequest).i5a = function (_set____db54di) {
    this.messageId = _set____db54di;
  };
  protoOf(MessagesEditRequest).j5a = function () {
    return this.messageId;
  };
  protoOf(MessagesEditRequest).b5a = function (_set____db54di) {
    this.content = _set____db54di;
  };
  protoOf(MessagesEditRequest).d1b = function () {
    return this.content;
  };
  function MessagesListRequest(channelId) {
    this.channelId = channelId;
    this.limit = null;
    this.around = null;
    this.before = null;
    this.after = null;
  }
  protoOf(MessagesListRequest).z59 = function (_set____db54di) {
    this.channelId = _set____db54di;
  };
  protoOf(MessagesListRequest).a5a = function () {
    return this.channelId;
  };
  protoOf(MessagesListRequest).v59 = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(MessagesListRequest).w59 = function () {
    return this.limit;
  };
  protoOf(MessagesListRequest).k5a = function (_set____db54di) {
    this.around = _set____db54di;
  };
  protoOf(MessagesListRequest).l5a = function () {
    return this.around;
  };
  protoOf(MessagesListRequest).r59 = function (_set____db54di) {
    this.before = _set____db54di;
  };
  protoOf(MessagesListRequest).s59 = function () {
    return this.before;
  };
  protoOf(MessagesListRequest).t59 = function (_set____db54di) {
    this.after = _set____db54di;
  };
  protoOf(MessagesListRequest).u59 = function () {
    return this.after;
  };
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.api.response.gateway.GatewayResponse', this, 1);
    tmp0_serialDesc.dy('url', true);
    this.m5a_1 = tmp0_serialDesc;
  }
  protoOf($serializer).n5a = function (encoder, value) {
    var tmp0_desc = this.m5a_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.url == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer).tn = function (encoder, value) {
    return this.n5a(encoder, value instanceof GatewayResponse ? value : THROW_CCE());
  };
  protoOf($serializer).un = function (decoder) {
    var tmp0_desc = this.m5a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.uq(tmp0_desc);
    if (tmp5_input.kr()) {
      tmp4_local0 = tmp5_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.vq(tmp0_desc);
    return GatewayResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer).sn = function () {
    return this.m5a_1;
  };
  protoOf($serializer).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function GatewayResponse_init_$Init$(seen0, url, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().m5a_1);
    }
    if (0 === (seen0 & 1))
      $this.url = null;
    else
      $this.url = url;
    return $this;
  }
  function GatewayResponse_init_$Create$(seen0, url, serializationConstructorMarker) {
    return GatewayResponse_init_$Init$(seen0, url, serializationConstructorMarker, objectCreate(protoOf(GatewayResponse)));
  }
  function GatewayResponse() {
    this.url = null;
  }
  protoOf(GatewayResponse).o5a = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(GatewayResponse).c3w = function () {
    return this.url;
  };
  function Companion_1() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Attachment', this, 12);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('filename', true);
    tmp0_serialDesc.dy('description', true);
    tmp0_serialDesc.dy('contentType', true);
    tmp0_serialDesc.dy('size', true);
    tmp0_serialDesc.dy('url', true);
    tmp0_serialDesc.dy('proxyUrl', true);
    tmp0_serialDesc.dy('height', true);
    tmp0_serialDesc.dy('width', true);
    tmp0_serialDesc.dy('ephemeral', true);
    tmp0_serialDesc.dy('durationSecs', true);
    tmp0_serialDesc.dy('waveform', true);
    this.p5a_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).q5a = function (encoder, value) {
    var tmp0_desc = this.p5a_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.filename == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.filename);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.description == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.contentType == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.contentType);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.size == null)) {
      tmp1_output.ns(tmp0_desc, 4, IntSerializer_getInstance(), value.size);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.url == null)) {
      tmp1_output.ns(tmp0_desc, 5, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.proxyUrl == null)) {
      tmp1_output.ns(tmp0_desc, 6, StringSerializer_getInstance(), value.proxyUrl);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.height == null)) {
      tmp1_output.ns(tmp0_desc, 7, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.width == null)) {
      tmp1_output.ns(tmp0_desc, 8, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.ephemeral == null)) {
      tmp1_output.ns(tmp0_desc, 9, BooleanSerializer_getInstance(), value.ephemeral);
    }
    if (tmp1_output.rs(tmp0_desc, 10) ? true : !(value.durationSecs == null)) {
      tmp1_output.ns(tmp0_desc, 10, DoubleSerializer_getInstance(), value.durationSecs);
    }
    if (tmp1_output.rs(tmp0_desc, 11) ? true : !(value.waveform == null)) {
      tmp1_output.ns(tmp0_desc, 11, StringSerializer_getInstance(), value.waveform);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_0).tn = function (encoder, value) {
    return this.q5a(encoder, value instanceof Attachment ? value : THROW_CCE());
  };
  protoOf($serializer_0).un = function (decoder) {
    var tmp0_desc = this.p5a_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_input = decoder.uq(tmp0_desc);
    if (tmp16_input.kr()) {
      tmp4_local0 = tmp16_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp16_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp16_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp16_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp16_input.ir(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp16_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp16_input.ir(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp16_input.ir(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp16_input.ir(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp16_input.ir(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp16_input.ir(tmp0_desc, 10, DoubleSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp16_input.ir(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp16_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp16_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp16_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp16_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp16_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp16_input.ir(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp16_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp16_input.ir(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp16_input.ir(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp16_input.ir(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp16_input.ir(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp16_input.ir(tmp0_desc, 10, DoubleSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp16_input.ir(tmp0_desc, 11, StringSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp16_input.vq(tmp0_desc);
    return Attachment_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, null);
  };
  protoOf($serializer_0).sn = function () {
    return this.p5a_1;
  };
  protoOf($serializer_0).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(DoubleSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Attachment_init_$Init$(seen0, id, filename, description, contentType, size, url, proxyUrl, height, width, ephemeral, durationSecs, waveform, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().p5a_1);
    }
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.filename = null;
    else
      $this.filename = filename;
    if (0 === (seen0 & 4))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 8))
      $this.contentType = null;
    else
      $this.contentType = contentType;
    if (0 === (seen0 & 16))
      $this.size = null;
    else
      $this.size = size;
    if (0 === (seen0 & 32))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 64))
      $this.proxyUrl = null;
    else
      $this.proxyUrl = proxyUrl;
    if (0 === (seen0 & 128))
      $this.height = null;
    else
      $this.height = height;
    if (0 === (seen0 & 256))
      $this.width = null;
    else
      $this.width = width;
    if (0 === (seen0 & 512))
      $this.ephemeral = null;
    else
      $this.ephemeral = ephemeral;
    if (0 === (seen0 & 1024))
      $this.durationSecs = null;
    else
      $this.durationSecs = durationSecs;
    if (0 === (seen0 & 2048))
      $this.waveform = null;
    else
      $this.waveform = waveform;
    return $this;
  }
  function Attachment_init_$Create$(seen0, id, filename, description, contentType, size, url, proxyUrl, height, width, ephemeral, durationSecs, waveform, serializationConstructorMarker) {
    return Attachment_init_$Init$(seen0, id, filename, description, contentType, size, url, proxyUrl, height, width, ephemeral, durationSecs, waveform, serializationConstructorMarker, objectCreate(protoOf(Attachment)));
  }
  function Attachment() {
    this.id = null;
    this.filename = null;
    this.description = null;
    this.contentType = null;
    this.size = null;
    this.url = null;
    this.proxyUrl = null;
    this.height = null;
    this.width = null;
    this.ephemeral = null;
    this.durationSecs = null;
    this.waveform = null;
  }
  protoOf(Attachment).r5a = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(Attachment).s5a = function () {
    return this.id;
  };
  protoOf(Attachment).t5a = function (_set____db54di) {
    this.filename = _set____db54di;
  };
  protoOf(Attachment).u5a = function () {
    return this.filename;
  };
  protoOf(Attachment).v5a = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(Attachment).w5a = function () {
    return this.description;
  };
  protoOf(Attachment).x5a = function (_set____db54di) {
    this.contentType = _set____db54di;
  };
  protoOf(Attachment).k3a = function () {
    return this.contentType;
  };
  protoOf(Attachment).y5a = function (_set____db54di) {
    this.size = _set____db54di;
  };
  protoOf(Attachment).e1 = function () {
    return this.size;
  };
  protoOf(Attachment).o5a = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(Attachment).c3w = function () {
    return this.url;
  };
  protoOf(Attachment).z5a = function (_set____db54di) {
    this.proxyUrl = _set____db54di;
  };
  protoOf(Attachment).a5b = function () {
    return this.proxyUrl;
  };
  protoOf(Attachment).b5b = function (_set____db54di) {
    this.height = _set____db54di;
  };
  protoOf(Attachment).c5b = function () {
    return this.height;
  };
  protoOf(Attachment).d5b = function (_set____db54di) {
    this.width = _set____db54di;
  };
  protoOf(Attachment).e5b = function () {
    return this.width;
  };
  protoOf(Attachment).f5b = function (_set____db54di) {
    this.ephemeral = _set____db54di;
  };
  protoOf(Attachment).g5b = function () {
    return this.ephemeral;
  };
  protoOf(Attachment).h5b = function (_set____db54di) {
    this.durationSecs = _set____db54di;
  };
  protoOf(Attachment).i5b = function () {
    return this.durationSecs;
  };
  protoOf(Attachment).j5b = function (_set____db54di) {
    this.waveform = _set____db54di;
  };
  protoOf(Attachment).k5b = function () {
    return this.waveform;
  };
  function Channel$Companion$$childSerializers$_anonymous__ao7gx3() {
    return new ReferenceArraySerializer(getKClass(User), $serializer_getInstance_42());
  }
  function Companion_2() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.l5b_1 = [null, null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, Channel$Companion$$childSerializers$_anonymous__ao7gx3), null, null, null, null];
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Channel', this, 16);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('guildId', true);
    tmp0_serialDesc.dy('position', true);
    tmp0_serialDesc.dy('name', true);
    tmp0_serialDesc.dy('topic', true);
    tmp0_serialDesc.dy('nsfw', true);
    tmp0_serialDesc.dy('lastMessageId', true);
    tmp0_serialDesc.dy('bitrate', true);
    tmp0_serialDesc.dy('userLimit', true);
    tmp0_serialDesc.dy('rateLimitPerUser', true);
    tmp0_serialDesc.dy('recipients', true);
    tmp0_serialDesc.dy('icon', true);
    tmp0_serialDesc.dy('ownerId', true);
    tmp0_serialDesc.dy('parentId', true);
    tmp0_serialDesc.dy('lastPinTimestamp', true);
    this.m5b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).n5b = function (encoder, value) {
    var tmp0_desc = this.m5b_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().l5b_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.type == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.type);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.guildId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.guildId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.position == null)) {
      tmp1_output.ns(tmp0_desc, 3, IntSerializer_getInstance(), value.position);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.name == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.topic == null)) {
      tmp1_output.ns(tmp0_desc, 5, StringSerializer_getInstance(), value.topic);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.nsfw == null)) {
      tmp1_output.ns(tmp0_desc, 6, BooleanSerializer_getInstance(), value.nsfw);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.lastMessageId == null)) {
      tmp1_output.ns(tmp0_desc, 7, StringSerializer_getInstance(), value.lastMessageId);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.bitrate == null)) {
      tmp1_output.ns(tmp0_desc, 8, IntSerializer_getInstance(), value.bitrate);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.userLimit == null)) {
      tmp1_output.ns(tmp0_desc, 9, IntSerializer_getInstance(), value.userLimit);
    }
    if (tmp1_output.rs(tmp0_desc, 10) ? true : !(value.rateLimitPerUser == null)) {
      tmp1_output.ns(tmp0_desc, 10, IntSerializer_getInstance(), value.rateLimitPerUser);
    }
    if (tmp1_output.rs(tmp0_desc, 11) ? true : !(value.recipients == null)) {
      tmp1_output.ns(tmp0_desc, 11, tmp2_cached[11].n1(), value.recipients);
    }
    if (tmp1_output.rs(tmp0_desc, 12) ? true : !(value.icon == null)) {
      tmp1_output.ns(tmp0_desc, 12, StringSerializer_getInstance(), value.icon);
    }
    if (tmp1_output.rs(tmp0_desc, 13) ? true : !(value.ownerId == null)) {
      tmp1_output.ns(tmp0_desc, 13, StringSerializer_getInstance(), value.ownerId);
    }
    if (tmp1_output.rs(tmp0_desc, 14) ? true : !(value.parentId == null)) {
      tmp1_output.ns(tmp0_desc, 14, StringSerializer_getInstance(), value.parentId);
    }
    if (tmp1_output.rs(tmp0_desc, 15) ? true : !(value.lastPinTimestamp == null)) {
      tmp1_output.ns(tmp0_desc, 15, StringSerializer_getInstance(), value.lastPinTimestamp);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_1).tn = function (encoder, value) {
    return this.n5b(encoder, value instanceof Channel ? value : THROW_CCE());
  };
  protoOf($serializer_1).un = function (decoder) {
    var tmp0_desc = this.m5b_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_input = decoder.uq(tmp0_desc);
    var tmp21_cached = Companion_getInstance_3().l5b_1;
    if (tmp20_input.kr()) {
      tmp4_local0 = tmp20_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp20_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp20_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp20_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp20_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp20_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp20_input.ir(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp20_input.ir(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp20_input.ir(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp20_input.ir(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp20_input.ir(tmp0_desc, 10, IntSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp20_input.ir(tmp0_desc, 11, tmp21_cached[11].n1(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp20_input.ir(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp20_input.ir(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp20_input.ir(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp20_input.ir(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp20_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp20_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp20_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp20_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp20_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp20_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp20_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp20_input.ir(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp20_input.ir(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp20_input.ir(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp20_input.ir(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp20_input.ir(tmp0_desc, 10, IntSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp20_input.ir(tmp0_desc, 11, tmp21_cached[11].n1(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp20_input.ir(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp20_input.ir(tmp0_desc, 13, StringSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp20_input.ir(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp20_input.ir(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp20_input.vq(tmp0_desc);
    return Channel_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, null);
  };
  protoOf($serializer_1).sn = function () {
    return this.m5b_1;
  };
  protoOf($serializer_1).sy = function () {
    var tmp0_cached = Companion_getInstance_3().l5b_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[11].n1()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Channel_init_$Init$(seen0, id, type, guildId, position, name, topic, nsfw, lastMessageId, bitrate, userLimit, rateLimitPerUser, recipients, icon, ownerId, parentId, lastPinTimestamp, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().m5b_1);
    }
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 4))
      $this.guildId = null;
    else
      $this.guildId = guildId;
    if (0 === (seen0 & 8))
      $this.position = null;
    else
      $this.position = position;
    if (0 === (seen0 & 16))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 32))
      $this.topic = null;
    else
      $this.topic = topic;
    if (0 === (seen0 & 64))
      $this.nsfw = null;
    else
      $this.nsfw = nsfw;
    if (0 === (seen0 & 128))
      $this.lastMessageId = null;
    else
      $this.lastMessageId = lastMessageId;
    if (0 === (seen0 & 256))
      $this.bitrate = null;
    else
      $this.bitrate = bitrate;
    if (0 === (seen0 & 512))
      $this.userLimit = null;
    else
      $this.userLimit = userLimit;
    if (0 === (seen0 & 1024))
      $this.rateLimitPerUser = null;
    else
      $this.rateLimitPerUser = rateLimitPerUser;
    if (0 === (seen0 & 2048))
      $this.recipients = null;
    else
      $this.recipients = recipients;
    if (0 === (seen0 & 4096))
      $this.icon = null;
    else
      $this.icon = icon;
    if (0 === (seen0 & 8192))
      $this.ownerId = null;
    else
      $this.ownerId = ownerId;
    if (0 === (seen0 & 16384))
      $this.parentId = null;
    else
      $this.parentId = parentId;
    if (0 === (seen0 & 32768))
      $this.lastPinTimestamp = null;
    else
      $this.lastPinTimestamp = lastPinTimestamp;
    return $this;
  }
  function Channel_init_$Create$(seen0, id, type, guildId, position, name, topic, nsfw, lastMessageId, bitrate, userLimit, rateLimitPerUser, recipients, icon, ownerId, parentId, lastPinTimestamp, serializationConstructorMarker) {
    return Channel_init_$Init$(seen0, id, type, guildId, position, name, topic, nsfw, lastMessageId, bitrate, userLimit, rateLimitPerUser, recipients, icon, ownerId, parentId, lastPinTimestamp, serializationConstructorMarker, objectCreate(protoOf(Channel)));
  }
  function Channel() {
    Companion_getInstance_3();
    this.id = null;
    this.type = null;
    this.guildId = null;
    this.position = null;
    this.name = null;
    this.topic = null;
    this.nsfw = null;
    this.lastMessageId = null;
    this.bitrate = null;
    this.userLimit = null;
    this.rateLimitPerUser = null;
    this.recipients = null;
    this.icon = null;
    this.ownerId = null;
    this.parentId = null;
    this.lastPinTimestamp = null;
  }
  protoOf(Channel).r5a = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(Channel).s5a = function () {
    return this.id;
  };
  protoOf(Channel).o5b = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(Channel).p5b = function () {
    return this.type;
  };
  protoOf(Channel).q5b = function (_set____db54di) {
    this.guildId = _set____db54di;
  };
  protoOf(Channel).r5b = function () {
    return this.guildId;
  };
  protoOf(Channel).s5b = function (_set____db54di) {
    this.position = _set____db54di;
  };
  protoOf(Channel).t5b = function () {
    return this.position;
  };
  protoOf(Channel).u5b = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(Channel).m = function () {
    return this.name;
  };
  protoOf(Channel).v5b = function (_set____db54di) {
    this.topic = _set____db54di;
  };
  protoOf(Channel).w5b = function () {
    return this.topic;
  };
  protoOf(Channel).x5b = function (_set____db54di) {
    this.nsfw = _set____db54di;
  };
  protoOf(Channel).y5b = function () {
    return this.nsfw;
  };
  protoOf(Channel).z5b = function (_set____db54di) {
    this.lastMessageId = _set____db54di;
  };
  protoOf(Channel).a5c = function () {
    return this.lastMessageId;
  };
  protoOf(Channel).b5c = function (_set____db54di) {
    this.bitrate = _set____db54di;
  };
  protoOf(Channel).c5c = function () {
    return this.bitrate;
  };
  protoOf(Channel).d5c = function (_set____db54di) {
    this.userLimit = _set____db54di;
  };
  protoOf(Channel).e5c = function () {
    return this.userLimit;
  };
  protoOf(Channel).f5c = function (_set____db54di) {
    this.rateLimitPerUser = _set____db54di;
  };
  protoOf(Channel).g5c = function () {
    return this.rateLimitPerUser;
  };
  protoOf(Channel).h5c = function (_set____db54di) {
    this.recipients = _set____db54di;
  };
  protoOf(Channel).i5c = function () {
    return this.recipients;
  };
  protoOf(Channel).j5c = function (_set____db54di) {
    this.icon = _set____db54di;
  };
  protoOf(Channel).k5c = function () {
    return this.icon;
  };
  protoOf(Channel).l5c = function (_set____db54di) {
    this.ownerId = _set____db54di;
  };
  protoOf(Channel).m5c = function () {
    return this.ownerId;
  };
  protoOf(Channel).n5c = function (_set____db54di) {
    this.parentId = _set____db54di;
  };
  protoOf(Channel).o5c = function () {
    return this.parentId;
  };
  protoOf(Channel).p5c = function (_set____db54di) {
    this.lastPinTimestamp = _set____db54di;
  };
  protoOf(Channel).q5c = function () {
    return this.lastPinTimestamp;
  };
  function Embed$Companion$$childSerializers$_anonymous__41n0y9() {
    return new ReferenceArraySerializer(getKClass(EmbedField), $serializer_getInstance_7());
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r5c_1 = [null, null, null, null, null, null, null, null, null, null, null, null, lazy(tmp_0, Embed$Companion$$childSerializers$_anonymous__41n0y9), null];
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Embed', this, 14);
    tmp0_serialDesc.dy('title', true);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('description', true);
    tmp0_serialDesc.dy('url', true);
    tmp0_serialDesc.dy('timestamp', true);
    tmp0_serialDesc.dy('color', true);
    tmp0_serialDesc.dy('footer', true);
    tmp0_serialDesc.dy('image', true);
    tmp0_serialDesc.dy('thumbnail', true);
    tmp0_serialDesc.dy('video', true);
    tmp0_serialDesc.dy('provider', true);
    tmp0_serialDesc.dy('author', true);
    tmp0_serialDesc.dy('fields', true);
    tmp0_serialDesc.dy('contentScanVersion', true);
    this.s5c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).t5c = function (encoder, value) {
    var tmp0_desc = this.s5c_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().r5c_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.title == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.title);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.type == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.type);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.description == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.url == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.timestamp == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.timestamp);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.color == null)) {
      tmp1_output.ns(tmp0_desc, 5, IntSerializer_getInstance(), value.color);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.footer == null)) {
      tmp1_output.ns(tmp0_desc, 6, $serializer_getInstance_3(), value.footer);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.image == null)) {
      tmp1_output.ns(tmp0_desc, 7, $serializer_getInstance_4(), value.image);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.thumbnail == null)) {
      tmp1_output.ns(tmp0_desc, 8, $serializer_getInstance_4(), value.thumbnail);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.video == null)) {
      tmp1_output.ns(tmp0_desc, 9, $serializer_getInstance_4(), value.video);
    }
    if (tmp1_output.rs(tmp0_desc, 10) ? true : !(value.provider == null)) {
      tmp1_output.ns(tmp0_desc, 10, $serializer_getInstance_5(), value.provider);
    }
    if (tmp1_output.rs(tmp0_desc, 11) ? true : !(value.author == null)) {
      tmp1_output.ns(tmp0_desc, 11, $serializer_getInstance_6(), value.author);
    }
    if (tmp1_output.rs(tmp0_desc, 12) ? true : !(value.fields == null)) {
      tmp1_output.ns(tmp0_desc, 12, tmp2_cached[12].n1(), value.fields);
    }
    if (tmp1_output.rs(tmp0_desc, 13) ? true : !(value.contentScanVersion == null)) {
      tmp1_output.ns(tmp0_desc, 13, IntSerializer_getInstance(), value.contentScanVersion);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_2).tn = function (encoder, value) {
    return this.t5c(encoder, value instanceof Embed ? value : THROW_CCE());
  };
  protoOf($serializer_2).un = function (decoder) {
    var tmp0_desc = this.s5c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_input = decoder.uq(tmp0_desc);
    var tmp19_cached = Companion_getInstance_4().r5c_1;
    if (tmp18_input.kr()) {
      tmp4_local0 = tmp18_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp18_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp18_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp18_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp18_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp18_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp18_input.ir(tmp0_desc, 6, $serializer_getInstance_3(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp18_input.ir(tmp0_desc, 7, $serializer_getInstance_4(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp18_input.ir(tmp0_desc, 8, $serializer_getInstance_4(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp18_input.ir(tmp0_desc, 9, $serializer_getInstance_4(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp18_input.ir(tmp0_desc, 10, $serializer_getInstance_5(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp18_input.ir(tmp0_desc, 11, $serializer_getInstance_6(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp18_input.ir(tmp0_desc, 12, tmp19_cached[12].n1(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp18_input.ir(tmp0_desc, 13, IntSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp18_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp18_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp18_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp18_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp18_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp18_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp18_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp18_input.ir(tmp0_desc, 6, $serializer_getInstance_3(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp18_input.ir(tmp0_desc, 7, $serializer_getInstance_4(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp18_input.ir(tmp0_desc, 8, $serializer_getInstance_4(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp18_input.ir(tmp0_desc, 9, $serializer_getInstance_4(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp18_input.ir(tmp0_desc, 10, $serializer_getInstance_5(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp18_input.ir(tmp0_desc, 11, $serializer_getInstance_6(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp18_input.ir(tmp0_desc, 12, tmp19_cached[12].n1(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp18_input.ir(tmp0_desc, 13, IntSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp18_input.vq(tmp0_desc);
    return Embed_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, null);
  };
  protoOf($serializer_2).sn = function () {
    return this.s5c_1;
  };
  protoOf($serializer_2).sy = function () {
    var tmp0_cached = Companion_getInstance_4().r5c_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable($serializer_getInstance_3()), get_nullable($serializer_getInstance_4()), get_nullable($serializer_getInstance_4()), get_nullable($serializer_getInstance_4()), get_nullable($serializer_getInstance_5()), get_nullable($serializer_getInstance_6()), get_nullable(tmp0_cached[12].n1()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function Embed_init_$Init$(seen0, title, type, description, url, timestamp, color, footer, image, thumbnail, video, provider, author, fields, contentScanVersion, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_2().s5c_1);
    }
    if (0 === (seen0 & 1))
      $this.title = null;
    else
      $this.title = title;
    if (0 === (seen0 & 2))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 4))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 8))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 16))
      $this.timestamp = null;
    else
      $this.timestamp = timestamp;
    if (0 === (seen0 & 32))
      $this.color = null;
    else
      $this.color = color;
    if (0 === (seen0 & 64))
      $this.footer = null;
    else
      $this.footer = footer;
    if (0 === (seen0 & 128))
      $this.image = null;
    else
      $this.image = image;
    if (0 === (seen0 & 256))
      $this.thumbnail = null;
    else
      $this.thumbnail = thumbnail;
    if (0 === (seen0 & 512))
      $this.video = null;
    else
      $this.video = video;
    if (0 === (seen0 & 1024))
      $this.provider = null;
    else
      $this.provider = provider;
    if (0 === (seen0 & 2048))
      $this.author = null;
    else
      $this.author = author;
    if (0 === (seen0 & 4096))
      $this.fields = null;
    else
      $this.fields = fields;
    if (0 === (seen0 & 8192))
      $this.contentScanVersion = null;
    else
      $this.contentScanVersion = contentScanVersion;
    return $this;
  }
  function Embed_init_$Create$(seen0, title, type, description, url, timestamp, color, footer, image, thumbnail, video, provider, author, fields, contentScanVersion, serializationConstructorMarker) {
    return Embed_init_$Init$(seen0, title, type, description, url, timestamp, color, footer, image, thumbnail, video, provider, author, fields, contentScanVersion, serializationConstructorMarker, objectCreate(protoOf(Embed)));
  }
  function Embed() {
    Companion_getInstance_4();
    this.title = null;
    this.type = null;
    this.description = null;
    this.url = null;
    this.timestamp = null;
    this.color = null;
    this.footer = null;
    this.image = null;
    this.thumbnail = null;
    this.video = null;
    this.provider = null;
    this.author = null;
    this.fields = null;
    this.contentScanVersion = null;
  }
  protoOf(Embed).u5c = function (_set____db54di) {
    this.title = _set____db54di;
  };
  protoOf(Embed).v5c = function () {
    return this.title;
  };
  protoOf(Embed).w5c = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(Embed).p5b = function () {
    return this.type;
  };
  protoOf(Embed).v5a = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(Embed).w5a = function () {
    return this.description;
  };
  protoOf(Embed).o5a = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(Embed).c3w = function () {
    return this.url;
  };
  protoOf(Embed).x5c = function (_set____db54di) {
    this.timestamp = _set____db54di;
  };
  protoOf(Embed).y5c = function () {
    return this.timestamp;
  };
  protoOf(Embed).z5c = function (_set____db54di) {
    this.color = _set____db54di;
  };
  protoOf(Embed).a5d = function () {
    return this.color;
  };
  protoOf(Embed).b5d = function (_set____db54di) {
    this.footer = _set____db54di;
  };
  protoOf(Embed).c5d = function () {
    return this.footer;
  };
  protoOf(Embed).d5d = function (_set____db54di) {
    this.image = _set____db54di;
  };
  protoOf(Embed).e5d = function () {
    return this.image;
  };
  protoOf(Embed).f5d = function (_set____db54di) {
    this.thumbnail = _set____db54di;
  };
  protoOf(Embed).g5d = function () {
    return this.thumbnail;
  };
  protoOf(Embed).h5d = function (_set____db54di) {
    this.video = _set____db54di;
  };
  protoOf(Embed).i5d = function () {
    return this.video;
  };
  protoOf(Embed).j5d = function (_set____db54di) {
    this.provider = _set____db54di;
  };
  protoOf(Embed).k5d = function () {
    return this.provider;
  };
  protoOf(Embed).l5d = function (_set____db54di) {
    this.author = _set____db54di;
  };
  protoOf(Embed).m5d = function () {
    return this.author;
  };
  protoOf(Embed).n5d = function (_set____db54di) {
    this.fields = _set____db54di;
  };
  protoOf(Embed).o5d = function () {
    return this.fields;
  };
  protoOf(Embed).p5d = function (_set____db54di) {
    this.contentScanVersion = _set____db54di;
  };
  protoOf(Embed).q5d = function () {
    return this.contentScanVersion;
  };
  function Companion_4() {
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.EmbedFooter', this, 3);
    tmp0_serialDesc.dy('text', true);
    tmp0_serialDesc.dy('iconUrl', true);
    tmp0_serialDesc.dy('proxyIconUrl', true);
    this.r5d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).s5d = function (encoder, value) {
    var tmp0_desc = this.r5d_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.text == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.text);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.iconUrl == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.iconUrl);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.proxyIconUrl == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.proxyIconUrl);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_3).tn = function (encoder, value) {
    return this.s5d(encoder, value instanceof EmbedFooter ? value : THROW_CCE());
  };
  protoOf($serializer_3).un = function (decoder) {
    var tmp0_desc = this.r5d_1;
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
    return EmbedFooter_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_3).sn = function () {
    return this.r5d_1;
  };
  protoOf($serializer_3).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function EmbedFooter_init_$Init$(seen0, text, iconUrl, proxyIconUrl, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().r5d_1);
    }
    if (0 === (seen0 & 1))
      $this.text = null;
    else
      $this.text = text;
    if (0 === (seen0 & 2))
      $this.iconUrl = null;
    else
      $this.iconUrl = iconUrl;
    if (0 === (seen0 & 4))
      $this.proxyIconUrl = null;
    else
      $this.proxyIconUrl = proxyIconUrl;
    return $this;
  }
  function EmbedFooter_init_$Create$(seen0, text, iconUrl, proxyIconUrl, serializationConstructorMarker) {
    return EmbedFooter_init_$Init$(seen0, text, iconUrl, proxyIconUrl, serializationConstructorMarker, objectCreate(protoOf(EmbedFooter)));
  }
  function EmbedFooter() {
    this.text = null;
    this.iconUrl = null;
    this.proxyIconUrl = null;
  }
  protoOf(EmbedFooter).t5d = function (_set____db54di) {
    this.text = _set____db54di;
  };
  protoOf(EmbedFooter).u5d = function () {
    return this.text;
  };
  protoOf(EmbedFooter).v5d = function (_set____db54di) {
    this.iconUrl = _set____db54di;
  };
  protoOf(EmbedFooter).w5d = function () {
    return this.iconUrl;
  };
  protoOf(EmbedFooter).x5d = function (_set____db54di) {
    this.proxyIconUrl = _set____db54di;
  };
  protoOf(EmbedFooter).y5d = function () {
    return this.proxyIconUrl;
  };
  function Companion_5() {
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.EmbedMedia', this, 7);
    tmp0_serialDesc.dy('url', true);
    tmp0_serialDesc.dy('proxyUrl', true);
    tmp0_serialDesc.dy('height', true);
    tmp0_serialDesc.dy('width', true);
    tmp0_serialDesc.dy('contentType', true);
    tmp0_serialDesc.dy('placeholder', true);
    tmp0_serialDesc.dy('placeholderVersion', true);
    this.z5d_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).a5e = function (encoder, value) {
    var tmp0_desc = this.z5d_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.url == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.proxyUrl == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.proxyUrl);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.height == null)) {
      tmp1_output.ns(tmp0_desc, 2, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.width == null)) {
      tmp1_output.ns(tmp0_desc, 3, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.contentType == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.contentType);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.placeholder == null)) {
      tmp1_output.ns(tmp0_desc, 5, StringSerializer_getInstance(), value.placeholder);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.placeholderVersion == null)) {
      tmp1_output.ns(tmp0_desc, 6, IntSerializer_getInstance(), value.placeholderVersion);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_4).tn = function (encoder, value) {
    return this.a5e(encoder, value instanceof EmbedMedia ? value : THROW_CCE());
  };
  protoOf($serializer_4).un = function (decoder) {
    var tmp0_desc = this.z5d_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.uq(tmp0_desc);
    if (tmp11_input.kr()) {
      tmp4_local0 = tmp11_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.ir(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.ir(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.vq(tmp0_desc);
    return EmbedMedia_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_4).sn = function () {
    return this.z5d_1;
  };
  protoOf($serializer_4).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function EmbedMedia_init_$Init$(seen0, url, proxyUrl, height, width, contentType, placeholder, placeholderVersion, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().z5d_1);
    }
    if (0 === (seen0 & 1))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 2))
      $this.proxyUrl = null;
    else
      $this.proxyUrl = proxyUrl;
    if (0 === (seen0 & 4))
      $this.height = null;
    else
      $this.height = height;
    if (0 === (seen0 & 8))
      $this.width = null;
    else
      $this.width = width;
    if (0 === (seen0 & 16))
      $this.contentType = null;
    else
      $this.contentType = contentType;
    if (0 === (seen0 & 32))
      $this.placeholder = null;
    else
      $this.placeholder = placeholder;
    if (0 === (seen0 & 64))
      $this.placeholderVersion = null;
    else
      $this.placeholderVersion = placeholderVersion;
    return $this;
  }
  function EmbedMedia_init_$Create$(seen0, url, proxyUrl, height, width, contentType, placeholder, placeholderVersion, serializationConstructorMarker) {
    return EmbedMedia_init_$Init$(seen0, url, proxyUrl, height, width, contentType, placeholder, placeholderVersion, serializationConstructorMarker, objectCreate(protoOf(EmbedMedia)));
  }
  function EmbedMedia() {
    this.url = null;
    this.proxyUrl = null;
    this.height = null;
    this.width = null;
    this.contentType = null;
    this.placeholder = null;
    this.placeholderVersion = null;
  }
  protoOf(EmbedMedia).o5a = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(EmbedMedia).c3w = function () {
    return this.url;
  };
  protoOf(EmbedMedia).z5a = function (_set____db54di) {
    this.proxyUrl = _set____db54di;
  };
  protoOf(EmbedMedia).a5b = function () {
    return this.proxyUrl;
  };
  protoOf(EmbedMedia).b5b = function (_set____db54di) {
    this.height = _set____db54di;
  };
  protoOf(EmbedMedia).c5b = function () {
    return this.height;
  };
  protoOf(EmbedMedia).d5b = function (_set____db54di) {
    this.width = _set____db54di;
  };
  protoOf(EmbedMedia).e5b = function () {
    return this.width;
  };
  protoOf(EmbedMedia).x5a = function (_set____db54di) {
    this.contentType = _set____db54di;
  };
  protoOf(EmbedMedia).k3a = function () {
    return this.contentType;
  };
  protoOf(EmbedMedia).b5e = function (_set____db54di) {
    this.placeholder = _set____db54di;
  };
  protoOf(EmbedMedia).c5e = function () {
    return this.placeholder;
  };
  protoOf(EmbedMedia).d5e = function (_set____db54di) {
    this.placeholderVersion = _set____db54di;
  };
  protoOf(EmbedMedia).e5e = function () {
    return this.placeholderVersion;
  };
  function Companion_6() {
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.EmbedProvider', this, 2);
    tmp0_serialDesc.dy('name', true);
    tmp0_serialDesc.dy('url', true);
    this.f5e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).g5e = function (encoder, value) {
    var tmp0_desc = this.f5e_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.url == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.url);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_5).tn = function (encoder, value) {
    return this.g5e(encoder, value instanceof EmbedProvider ? value : THROW_CCE());
  };
  protoOf($serializer_5).un = function (decoder) {
    var tmp0_desc = this.f5e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.uq(tmp0_desc);
    if (tmp6_input.kr()) {
      tmp4_local0 = tmp6_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.vq(tmp0_desc);
    return EmbedProvider_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_5).sn = function () {
    return this.f5e_1;
  };
  protoOf($serializer_5).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function EmbedProvider_init_$Init$(seen0, name, url, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().f5e_1);
    }
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.url = null;
    else
      $this.url = url;
    return $this;
  }
  function EmbedProvider_init_$Create$(seen0, name, url, serializationConstructorMarker) {
    return EmbedProvider_init_$Init$(seen0, name, url, serializationConstructorMarker, objectCreate(protoOf(EmbedProvider)));
  }
  function EmbedProvider() {
    this.name = null;
    this.url = null;
  }
  protoOf(EmbedProvider).u5b = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(EmbedProvider).m = function () {
    return this.name;
  };
  protoOf(EmbedProvider).o5a = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(EmbedProvider).c3w = function () {
    return this.url;
  };
  function Companion_7() {
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.EmbedAuthor', this, 4);
    tmp0_serialDesc.dy('name', true);
    tmp0_serialDesc.dy('url', true);
    tmp0_serialDesc.dy('iconUrl', true);
    tmp0_serialDesc.dy('proxyIconUrl', true);
    this.h5e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).i5e = function (encoder, value) {
    var tmp0_desc = this.h5e_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.url == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.iconUrl == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.iconUrl);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.proxyIconUrl == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.proxyIconUrl);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_6).tn = function (encoder, value) {
    return this.i5e(encoder, value instanceof EmbedAuthor ? value : THROW_CCE());
  };
  protoOf($serializer_6).un = function (decoder) {
    var tmp0_desc = this.h5e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.uq(tmp0_desc);
    if (tmp8_input.kr()) {
      tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
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
    return EmbedAuthor_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_6).sn = function () {
    return this.h5e_1;
  };
  protoOf($serializer_6).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function EmbedAuthor_init_$Init$(seen0, name, url, iconUrl, proxyIconUrl, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().h5e_1);
    }
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 4))
      $this.iconUrl = null;
    else
      $this.iconUrl = iconUrl;
    if (0 === (seen0 & 8))
      $this.proxyIconUrl = null;
    else
      $this.proxyIconUrl = proxyIconUrl;
    return $this;
  }
  function EmbedAuthor_init_$Create$(seen0, name, url, iconUrl, proxyIconUrl, serializationConstructorMarker) {
    return EmbedAuthor_init_$Init$(seen0, name, url, iconUrl, proxyIconUrl, serializationConstructorMarker, objectCreate(protoOf(EmbedAuthor)));
  }
  function EmbedAuthor() {
    this.name = null;
    this.url = null;
    this.iconUrl = null;
    this.proxyIconUrl = null;
  }
  protoOf(EmbedAuthor).u5b = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(EmbedAuthor).m = function () {
    return this.name;
  };
  protoOf(EmbedAuthor).o5a = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(EmbedAuthor).c3w = function () {
    return this.url;
  };
  protoOf(EmbedAuthor).v5d = function (_set____db54di) {
    this.iconUrl = _set____db54di;
  };
  protoOf(EmbedAuthor).w5d = function () {
    return this.iconUrl;
  };
  protoOf(EmbedAuthor).x5d = function (_set____db54di) {
    this.proxyIconUrl = _set____db54di;
  };
  protoOf(EmbedAuthor).y5d = function () {
    return this.proxyIconUrl;
  };
  function Companion_8() {
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.EmbedField', this, 3);
    tmp0_serialDesc.dy('name', true);
    tmp0_serialDesc.dy('value', true);
    tmp0_serialDesc.dy('inline', true);
    this.j5e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).k5e = function (encoder, value) {
    var tmp0_desc = this.j5e_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.name == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.value == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.value);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.inline == null)) {
      tmp1_output.ns(tmp0_desc, 2, BooleanSerializer_getInstance(), value.inline);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_7).tn = function (encoder, value) {
    return this.k5e(encoder, value instanceof EmbedField ? value : THROW_CCE());
  };
  protoOf($serializer_7).un = function (decoder) {
    var tmp0_desc = this.j5e_1;
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
      tmp6_local2 = tmp7_input.ir(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
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
            tmp6_local2 = tmp7_input.ir(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vq(tmp0_desc);
    return EmbedField_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_7).sn = function () {
    return this.j5e_1;
  };
  protoOf($serializer_7).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function EmbedField_init_$Init$(seen0, name, value, inline, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_7().j5e_1);
    }
    if (0 === (seen0 & 1))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 2))
      $this.value = null;
    else
      $this.value = value;
    if (0 === (seen0 & 4))
      $this.inline = null;
    else
      $this.inline = inline;
    return $this;
  }
  function EmbedField_init_$Create$(seen0, name, value, inline, serializationConstructorMarker) {
    return EmbedField_init_$Init$(seen0, name, value, inline, serializationConstructorMarker, objectCreate(protoOf(EmbedField)));
  }
  function EmbedField() {
    this.name = null;
    this.value = null;
    this.inline = null;
  }
  protoOf(EmbedField).u5b = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(EmbedField).m = function () {
    return this.name;
  };
  protoOf(EmbedField).l5e = function (_set____db54di) {
    this.value = _set____db54di;
  };
  protoOf(EmbedField).n1 = function () {
    return this.value;
  };
  protoOf(EmbedField).m5e = function (_set____db54di) {
    this.inline = _set____db54di;
  };
  protoOf(EmbedField).n5e = function () {
    return this.inline;
  };
  function Companion_9() {
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Emoji', this, 6);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('name', true);
    tmp0_serialDesc.dy('animated', true);
    tmp0_serialDesc.dy('requireColons', true);
    tmp0_serialDesc.dy('managed', true);
    tmp0_serialDesc.dy('available', true);
    this.o5e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).p5e = function (encoder, value) {
    var tmp0_desc = this.o5e_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.name == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.animated == null)) {
      tmp1_output.ns(tmp0_desc, 2, BooleanSerializer_getInstance(), value.animated);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.requireColons == null)) {
      tmp1_output.ns(tmp0_desc, 3, BooleanSerializer_getInstance(), value.requireColons);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.managed == null)) {
      tmp1_output.ns(tmp0_desc, 4, BooleanSerializer_getInstance(), value.managed);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.available == null)) {
      tmp1_output.ns(tmp0_desc, 5, BooleanSerializer_getInstance(), value.available);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_8).tn = function (encoder, value) {
    return this.p5e(encoder, value instanceof Emoji ? value : THROW_CCE());
  };
  protoOf($serializer_8).un = function (decoder) {
    var tmp0_desc = this.o5e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.uq(tmp0_desc);
    if (tmp10_input.kr()) {
      tmp4_local0 = tmp10_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.ir(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.ir(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.ir(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.ir(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.ir(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.ir(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.vq(tmp0_desc);
    return Emoji_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_8).sn = function () {
    return this.o5e_1;
  };
  protoOf($serializer_8).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function Emoji_init_$Init$(seen0, id, name, animated, requireColons, managed, available, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_8().o5e_1);
    }
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 4))
      $this.animated = null;
    else
      $this.animated = animated;
    if (0 === (seen0 & 8))
      $this.requireColons = null;
    else
      $this.requireColons = requireColons;
    if (0 === (seen0 & 16))
      $this.managed = null;
    else
      $this.managed = managed;
    if (0 === (seen0 & 32))
      $this.available = null;
    else
      $this.available = available;
    return $this;
  }
  function Emoji_init_$Create$(seen0, id, name, animated, requireColons, managed, available, serializationConstructorMarker) {
    return Emoji_init_$Init$(seen0, id, name, animated, requireColons, managed, available, serializationConstructorMarker, objectCreate(protoOf(Emoji)));
  }
  function Emoji() {
    this.id = null;
    this.name = null;
    this.animated = null;
    this.requireColons = null;
    this.managed = null;
    this.available = null;
  }
  protoOf(Emoji).r5a = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(Emoji).s5a = function () {
    return this.id;
  };
  protoOf(Emoji).u5b = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(Emoji).m = function () {
    return this.name;
  };
  protoOf(Emoji).q5e = function (_set____db54di) {
    this.animated = _set____db54di;
  };
  protoOf(Emoji).r5e = function () {
    return this.animated;
  };
  protoOf(Emoji).s5e = function (_set____db54di) {
    this.requireColons = _set____db54di;
  };
  protoOf(Emoji).t5e = function () {
    return this.requireColons;
  };
  protoOf(Emoji).u5e = function (_set____db54di) {
    this.managed = _set____db54di;
  };
  protoOf(Emoji).v5e = function () {
    return this.managed;
  };
  protoOf(Emoji).w5e = function (_set____db54di) {
    this.available = _set____db54di;
  };
  protoOf(Emoji).x5e = function () {
    return this.available;
  };
  function Guild$Companion$$childSerializers$_anonymous__kcz0qf() {
    return new ReferenceArraySerializer(getKClass(Role), $serializer_getInstance_41());
  }
  function Guild$Companion$$childSerializers$_anonymous__kcz0qf_0() {
    return new ReferenceArraySerializer(getKClass(Emoji), $serializer_getInstance_8());
  }
  function Guild$Companion$$childSerializers$_anonymous__kcz0qf_1() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pb(), StringSerializer_getInstance());
  }
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Guild$Companion$$childSerializers$_anonymous__kcz0qf);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, Guild$Companion$$childSerializers$_anonymous__kcz0qf_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.y5e_1 = [null, null, null, null, null, null, null, null, null, null, null, tmp_1, tmp_3, lazy(tmp_4, Guild$Companion$$childSerializers$_anonymous__kcz0qf_1), null, null, null, null, null, null, null];
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Guild', this, 21);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('name', true);
    tmp0_serialDesc.dy('icon', true);
    tmp0_serialDesc.dy('splash', true);
    tmp0_serialDesc.dy('discoverySplash', true);
    tmp0_serialDesc.dy('owner', true);
    tmp0_serialDesc.dy('ownerId', true);
    tmp0_serialDesc.dy('permissions', true);
    tmp0_serialDesc.dy('afkChannelId', true);
    tmp0_serialDesc.dy('afkTimeout', true);
    tmp0_serialDesc.dy('verificationLevel', true);
    tmp0_serialDesc.dy('roles', true);
    tmp0_serialDesc.dy('emojis', true);
    tmp0_serialDesc.dy('features', true);
    tmp0_serialDesc.dy('description', true);
    tmp0_serialDesc.dy('banner', true);
    tmp0_serialDesc.dy('premiumTier', true);
    tmp0_serialDesc.dy('premiumSubscriptionCount', true);
    tmp0_serialDesc.dy('preferredLocale', true);
    tmp0_serialDesc.dy('approximateMemberCount', true);
    tmp0_serialDesc.dy('approximatePresenceCount', true);
    this.z5e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).a5f = function (encoder, value) {
    var tmp0_desc = this.z5e_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().y5e_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.name == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.icon == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.icon);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.splash == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.splash);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.discoverySplash == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.discoverySplash);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.owner == null)) {
      tmp1_output.ns(tmp0_desc, 5, BooleanSerializer_getInstance(), value.owner);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.ownerId == null)) {
      tmp1_output.ns(tmp0_desc, 6, StringSerializer_getInstance(), value.ownerId);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.permissions == null)) {
      tmp1_output.ns(tmp0_desc, 7, StringSerializer_getInstance(), value.permissions);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.afkChannelId == null)) {
      tmp1_output.ns(tmp0_desc, 8, StringSerializer_getInstance(), value.afkChannelId);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.afkTimeout == null)) {
      tmp1_output.ns(tmp0_desc, 9, IntSerializer_getInstance(), value.afkTimeout);
    }
    if (tmp1_output.rs(tmp0_desc, 10) ? true : !(value.verificationLevel == null)) {
      tmp1_output.ns(tmp0_desc, 10, IntSerializer_getInstance(), value.verificationLevel);
    }
    if (tmp1_output.rs(tmp0_desc, 11) ? true : !(value.roles == null)) {
      tmp1_output.ns(tmp0_desc, 11, tmp2_cached[11].n1(), value.roles);
    }
    if (tmp1_output.rs(tmp0_desc, 12) ? true : !(value.emojis == null)) {
      tmp1_output.ns(tmp0_desc, 12, tmp2_cached[12].n1(), value.emojis);
    }
    if (tmp1_output.rs(tmp0_desc, 13) ? true : !(value.features == null)) {
      tmp1_output.ns(tmp0_desc, 13, tmp2_cached[13].n1(), value.features);
    }
    if (tmp1_output.rs(tmp0_desc, 14) ? true : !(value.description == null)) {
      tmp1_output.ns(tmp0_desc, 14, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.rs(tmp0_desc, 15) ? true : !(value.banner == null)) {
      tmp1_output.ns(tmp0_desc, 15, StringSerializer_getInstance(), value.banner);
    }
    if (tmp1_output.rs(tmp0_desc, 16) ? true : !(value.premiumTier == null)) {
      tmp1_output.ns(tmp0_desc, 16, IntSerializer_getInstance(), value.premiumTier);
    }
    if (tmp1_output.rs(tmp0_desc, 17) ? true : !(value.premiumSubscriptionCount == null)) {
      tmp1_output.ns(tmp0_desc, 17, IntSerializer_getInstance(), value.premiumSubscriptionCount);
    }
    if (tmp1_output.rs(tmp0_desc, 18) ? true : !(value.preferredLocale == null)) {
      tmp1_output.ns(tmp0_desc, 18, StringSerializer_getInstance(), value.preferredLocale);
    }
    if (tmp1_output.rs(tmp0_desc, 19) ? true : !(value.approximateMemberCount == null)) {
      tmp1_output.ns(tmp0_desc, 19, IntSerializer_getInstance(), value.approximateMemberCount);
    }
    if (tmp1_output.rs(tmp0_desc, 20) ? true : !(value.approximatePresenceCount == null)) {
      tmp1_output.ns(tmp0_desc, 20, IntSerializer_getInstance(), value.approximatePresenceCount);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_9).tn = function (encoder, value) {
    return this.a5f(encoder, value instanceof Guild ? value : THROW_CCE());
  };
  protoOf($serializer_9).un = function (decoder) {
    var tmp0_desc = this.z5e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_local18 = null;
    var tmp23_local19 = null;
    var tmp24_local20 = null;
    var tmp25_input = decoder.uq(tmp0_desc);
    var tmp26_cached = Companion_getInstance_11().y5e_1;
    if (tmp25_input.kr()) {
      tmp4_local0 = tmp25_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp25_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp25_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp25_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp25_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp25_input.ir(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp25_input.ir(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp25_input.ir(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp25_input.ir(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp25_input.ir(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp25_input.ir(tmp0_desc, 10, IntSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp25_input.ir(tmp0_desc, 11, tmp26_cached[11].n1(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp25_input.ir(tmp0_desc, 12, tmp26_cached[12].n1(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp25_input.ir(tmp0_desc, 13, tmp26_cached[13].n1(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp25_input.ir(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp25_input.ir(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp25_input.ir(tmp0_desc, 16, IntSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp25_input.ir(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp25_input.ir(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp25_input.ir(tmp0_desc, 19, IntSerializer_getInstance(), tmp23_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp25_input.ir(tmp0_desc, 20, IntSerializer_getInstance(), tmp24_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp25_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp25_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp25_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp25_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp25_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp25_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp25_input.ir(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp25_input.ir(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp25_input.ir(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp25_input.ir(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp25_input.ir(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp25_input.ir(tmp0_desc, 10, IntSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp25_input.ir(tmp0_desc, 11, tmp26_cached[11].n1(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp25_input.ir(tmp0_desc, 12, tmp26_cached[12].n1(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp25_input.ir(tmp0_desc, 13, tmp26_cached[13].n1(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp25_input.ir(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp25_input.ir(tmp0_desc, 15, StringSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp25_input.ir(tmp0_desc, 16, IntSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp25_input.ir(tmp0_desc, 17, IntSerializer_getInstance(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp25_input.ir(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp25_input.ir(tmp0_desc, 19, IntSerializer_getInstance(), tmp23_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp25_input.ir(tmp0_desc, 20, IntSerializer_getInstance(), tmp24_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp25_input.vq(tmp0_desc);
    return Guild_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, null);
  };
  protoOf($serializer_9).sn = function () {
    return this.z5e_1;
  };
  protoOf($serializer_9).sy = function () {
    var tmp0_cached = Companion_getInstance_11().y5e_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[11].n1()), get_nullable(tmp0_cached[12].n1()), get_nullable(tmp0_cached[13].n1()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function Guild_init_$Init$(seen0, id, name, icon, splash, discoverySplash, owner, ownerId, permissions, afkChannelId, afkTimeout, verificationLevel, roles, emojis, features, description, banner, premiumTier, premiumSubscriptionCount, preferredLocale, approximateMemberCount, approximatePresenceCount, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_9().z5e_1);
    }
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 4))
      $this.icon = null;
    else
      $this.icon = icon;
    if (0 === (seen0 & 8))
      $this.splash = null;
    else
      $this.splash = splash;
    if (0 === (seen0 & 16))
      $this.discoverySplash = null;
    else
      $this.discoverySplash = discoverySplash;
    if (0 === (seen0 & 32))
      $this.owner = null;
    else
      $this.owner = owner;
    if (0 === (seen0 & 64))
      $this.ownerId = null;
    else
      $this.ownerId = ownerId;
    if (0 === (seen0 & 128))
      $this.permissions = null;
    else
      $this.permissions = permissions;
    if (0 === (seen0 & 256))
      $this.afkChannelId = null;
    else
      $this.afkChannelId = afkChannelId;
    if (0 === (seen0 & 512))
      $this.afkTimeout = null;
    else
      $this.afkTimeout = afkTimeout;
    if (0 === (seen0 & 1024))
      $this.verificationLevel = null;
    else
      $this.verificationLevel = verificationLevel;
    if (0 === (seen0 & 2048))
      $this.roles = null;
    else
      $this.roles = roles;
    if (0 === (seen0 & 4096))
      $this.emojis = null;
    else
      $this.emojis = emojis;
    if (0 === (seen0 & 8192))
      $this.features = null;
    else
      $this.features = features;
    if (0 === (seen0 & 16384))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 32768))
      $this.banner = null;
    else
      $this.banner = banner;
    if (0 === (seen0 & 65536))
      $this.premiumTier = null;
    else
      $this.premiumTier = premiumTier;
    if (0 === (seen0 & 131072))
      $this.premiumSubscriptionCount = null;
    else
      $this.premiumSubscriptionCount = premiumSubscriptionCount;
    if (0 === (seen0 & 262144))
      $this.preferredLocale = null;
    else
      $this.preferredLocale = preferredLocale;
    if (0 === (seen0 & 524288))
      $this.approximateMemberCount = null;
    else
      $this.approximateMemberCount = approximateMemberCount;
    if (0 === (seen0 & 1048576))
      $this.approximatePresenceCount = null;
    else
      $this.approximatePresenceCount = approximatePresenceCount;
    return $this;
  }
  function Guild_init_$Create$(seen0, id, name, icon, splash, discoverySplash, owner, ownerId, permissions, afkChannelId, afkTimeout, verificationLevel, roles, emojis, features, description, banner, premiumTier, premiumSubscriptionCount, preferredLocale, approximateMemberCount, approximatePresenceCount, serializationConstructorMarker) {
    return Guild_init_$Init$(seen0, id, name, icon, splash, discoverySplash, owner, ownerId, permissions, afkChannelId, afkTimeout, verificationLevel, roles, emojis, features, description, banner, premiumTier, premiumSubscriptionCount, preferredLocale, approximateMemberCount, approximatePresenceCount, serializationConstructorMarker, objectCreate(protoOf(Guild)));
  }
  function Guild() {
    Companion_getInstance_11();
    this.id = null;
    this.name = null;
    this.icon = null;
    this.splash = null;
    this.discoverySplash = null;
    this.owner = null;
    this.ownerId = null;
    this.permissions = null;
    this.afkChannelId = null;
    this.afkTimeout = null;
    this.verificationLevel = null;
    this.roles = null;
    this.emojis = null;
    this.features = null;
    this.description = null;
    this.banner = null;
    this.premiumTier = null;
    this.premiumSubscriptionCount = null;
    this.preferredLocale = null;
    this.approximateMemberCount = null;
    this.approximatePresenceCount = null;
  }
  protoOf(Guild).r5a = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(Guild).s5a = function () {
    return this.id;
  };
  protoOf(Guild).u5b = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(Guild).m = function () {
    return this.name;
  };
  protoOf(Guild).j5c = function (_set____db54di) {
    this.icon = _set____db54di;
  };
  protoOf(Guild).k5c = function () {
    return this.icon;
  };
  protoOf(Guild).b5f = function (_set____db54di) {
    this.splash = _set____db54di;
  };
  protoOf(Guild).c5f = function () {
    return this.splash;
  };
  protoOf(Guild).d5f = function (_set____db54di) {
    this.discoverySplash = _set____db54di;
  };
  protoOf(Guild).e5f = function () {
    return this.discoverySplash;
  };
  protoOf(Guild).f5f = function (_set____db54di) {
    this.owner = _set____db54di;
  };
  protoOf(Guild).g5f = function () {
    return this.owner;
  };
  protoOf(Guild).l5c = function (_set____db54di) {
    this.ownerId = _set____db54di;
  };
  protoOf(Guild).m5c = function () {
    return this.ownerId;
  };
  protoOf(Guild).h5f = function (_set____db54di) {
    this.permissions = _set____db54di;
  };
  protoOf(Guild).i5f = function () {
    return this.permissions;
  };
  protoOf(Guild).j5f = function (_set____db54di) {
    this.afkChannelId = _set____db54di;
  };
  protoOf(Guild).k5f = function () {
    return this.afkChannelId;
  };
  protoOf(Guild).l5f = function (_set____db54di) {
    this.afkTimeout = _set____db54di;
  };
  protoOf(Guild).m5f = function () {
    return this.afkTimeout;
  };
  protoOf(Guild).n5f = function (_set____db54di) {
    this.verificationLevel = _set____db54di;
  };
  protoOf(Guild).o5f = function () {
    return this.verificationLevel;
  };
  protoOf(Guild).p5f = function (_set____db54di) {
    this.roles = _set____db54di;
  };
  protoOf(Guild).q5f = function () {
    return this.roles;
  };
  protoOf(Guild).r5f = function (_set____db54di) {
    this.emojis = _set____db54di;
  };
  protoOf(Guild).s5f = function () {
    return this.emojis;
  };
  protoOf(Guild).t5f = function (_set____db54di) {
    this.features = _set____db54di;
  };
  protoOf(Guild).u5f = function () {
    return this.features;
  };
  protoOf(Guild).v5a = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(Guild).w5a = function () {
    return this.description;
  };
  protoOf(Guild).v5f = function (_set____db54di) {
    this.banner = _set____db54di;
  };
  protoOf(Guild).w5f = function () {
    return this.banner;
  };
  protoOf(Guild).x5f = function (_set____db54di) {
    this.premiumTier = _set____db54di;
  };
  protoOf(Guild).y5f = function () {
    return this.premiumTier;
  };
  protoOf(Guild).z5f = function (_set____db54di) {
    this.premiumSubscriptionCount = _set____db54di;
  };
  protoOf(Guild).a5g = function () {
    return this.premiumSubscriptionCount;
  };
  protoOf(Guild).b5g = function (_set____db54di) {
    this.preferredLocale = _set____db54di;
  };
  protoOf(Guild).c5g = function () {
    return this.preferredLocale;
  };
  protoOf(Guild).d5g = function (_set____db54di) {
    this.approximateMemberCount = _set____db54di;
  };
  protoOf(Guild).e5g = function () {
    return this.approximateMemberCount;
  };
  protoOf(Guild).f5g = function (_set____db54di) {
    this.approximatePresenceCount = _set____db54di;
  };
  protoOf(Guild).g5g = function () {
    return this.approximatePresenceCount;
  };
  function GuildMember$Companion$$childSerializers$_anonymous__jvbpf() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pb(), StringSerializer_getInstance());
  }
  function Companion_11() {
    Companion_instance_12 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h5g_1 = [null, null, null, lazy(tmp_0, GuildMember$Companion$$childSerializers$_anonymous__jvbpf), null, null, null, null, null, null, null];
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.GuildMember', this, 11);
    tmp0_serialDesc.dy('user', true);
    tmp0_serialDesc.dy('nick', true);
    tmp0_serialDesc.dy('avatar', true);
    tmp0_serialDesc.dy('roles', true);
    tmp0_serialDesc.dy('joinedAt', true);
    tmp0_serialDesc.dy('premiumSince', true);
    tmp0_serialDesc.dy('deaf', true);
    tmp0_serialDesc.dy('mute', true);
    tmp0_serialDesc.dy('flags', true);
    tmp0_serialDesc.dy('pending', true);
    tmp0_serialDesc.dy('communicationDisabledUntil', true);
    this.i5g_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).j5g = function (encoder, value) {
    var tmp0_desc = this.i5g_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().h5g_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.user == null)) {
      tmp1_output.ns(tmp0_desc, 0, $serializer_getInstance_42(), value.user);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.nick == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.nick);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.avatar == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.avatar);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.roles == null)) {
      tmp1_output.ns(tmp0_desc, 3, tmp2_cached[3].n1(), value.roles);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.joinedAt == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.joinedAt);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.premiumSince == null)) {
      tmp1_output.ns(tmp0_desc, 5, StringSerializer_getInstance(), value.premiumSince);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.deaf == null)) {
      tmp1_output.ns(tmp0_desc, 6, BooleanSerializer_getInstance(), value.deaf);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.mute == null)) {
      tmp1_output.ns(tmp0_desc, 7, BooleanSerializer_getInstance(), value.mute);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.flags == null)) {
      tmp1_output.ns(tmp0_desc, 8, IntSerializer_getInstance(), value.flags);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.pending == null)) {
      tmp1_output.ns(tmp0_desc, 9, BooleanSerializer_getInstance(), value.pending);
    }
    if (tmp1_output.rs(tmp0_desc, 10) ? true : !(value.communicationDisabledUntil == null)) {
      tmp1_output.ns(tmp0_desc, 10, StringSerializer_getInstance(), value.communicationDisabledUntil);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_10).tn = function (encoder, value) {
    return this.j5g(encoder, value instanceof GuildMember ? value : THROW_CCE());
  };
  protoOf($serializer_10).un = function (decoder) {
    var tmp0_desc = this.i5g_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_input = decoder.uq(tmp0_desc);
    var tmp16_cached = Companion_getInstance_12().h5g_1;
    if (tmp15_input.kr()) {
      tmp4_local0 = tmp15_input.ir(tmp0_desc, 0, $serializer_getInstance_42(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.ir(tmp0_desc, 3, tmp16_cached[3].n1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.ir(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.ir(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.ir(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.ir(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.ir(tmp0_desc, 0, $serializer_getInstance_42(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.ir(tmp0_desc, 3, tmp16_cached[3].n1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.ir(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.ir(tmp0_desc, 8, IntSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.ir(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.ir(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.vq(tmp0_desc);
    return GuildMember_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_10).sn = function () {
    return this.i5g_1;
  };
  protoOf($serializer_10).sy = function () {
    var tmp0_cached = Companion_getInstance_12().h5g_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_42()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3].n1()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function GuildMember_init_$Init$(seen0, user, nick, avatar, roles, joinedAt, premiumSince, deaf, mute, flags, pending, communicationDisabledUntil, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_10().i5g_1);
    }
    if (0 === (seen0 & 1))
      $this.user = null;
    else
      $this.user = user;
    if (0 === (seen0 & 2))
      $this.nick = null;
    else
      $this.nick = nick;
    if (0 === (seen0 & 4))
      $this.avatar = null;
    else
      $this.avatar = avatar;
    if (0 === (seen0 & 8))
      $this.roles = null;
    else
      $this.roles = roles;
    if (0 === (seen0 & 16))
      $this.joinedAt = null;
    else
      $this.joinedAt = joinedAt;
    if (0 === (seen0 & 32))
      $this.premiumSince = null;
    else
      $this.premiumSince = premiumSince;
    if (0 === (seen0 & 64))
      $this.deaf = null;
    else
      $this.deaf = deaf;
    if (0 === (seen0 & 128))
      $this.mute = null;
    else
      $this.mute = mute;
    if (0 === (seen0 & 256))
      $this.flags = null;
    else
      $this.flags = flags;
    if (0 === (seen0 & 512))
      $this.pending = null;
    else
      $this.pending = pending;
    if (0 === (seen0 & 1024))
      $this.communicationDisabledUntil = null;
    else
      $this.communicationDisabledUntil = communicationDisabledUntil;
    return $this;
  }
  function GuildMember_init_$Create$(seen0, user, nick, avatar, roles, joinedAt, premiumSince, deaf, mute, flags, pending, communicationDisabledUntil, serializationConstructorMarker) {
    return GuildMember_init_$Init$(seen0, user, nick, avatar, roles, joinedAt, premiumSince, deaf, mute, flags, pending, communicationDisabledUntil, serializationConstructorMarker, objectCreate(protoOf(GuildMember)));
  }
  function GuildMember() {
    Companion_getInstance_12();
    this.user = null;
    this.nick = null;
    this.avatar = null;
    this.roles = null;
    this.joinedAt = null;
    this.premiumSince = null;
    this.deaf = null;
    this.mute = null;
    this.flags = null;
    this.pending = null;
    this.communicationDisabledUntil = null;
  }
  protoOf(GuildMember).k5g = function (_set____db54di) {
    this.user = _set____db54di;
  };
  protoOf(GuildMember).s39 = function () {
    return this.user;
  };
  protoOf(GuildMember).l5g = function (_set____db54di) {
    this.nick = _set____db54di;
  };
  protoOf(GuildMember).m5g = function () {
    return this.nick;
  };
  protoOf(GuildMember).n5g = function (_set____db54di) {
    this.avatar = _set____db54di;
  };
  protoOf(GuildMember).o5g = function () {
    return this.avatar;
  };
  protoOf(GuildMember).p5g = function (_set____db54di) {
    this.roles = _set____db54di;
  };
  protoOf(GuildMember).q5f = function () {
    return this.roles;
  };
  protoOf(GuildMember).q5g = function (_set____db54di) {
    this.joinedAt = _set____db54di;
  };
  protoOf(GuildMember).r5g = function () {
    return this.joinedAt;
  };
  protoOf(GuildMember).s5g = function (_set____db54di) {
    this.premiumSince = _set____db54di;
  };
  protoOf(GuildMember).t5g = function () {
    return this.premiumSince;
  };
  protoOf(GuildMember).u5g = function (_set____db54di) {
    this.deaf = _set____db54di;
  };
  protoOf(GuildMember).v5g = function () {
    return this.deaf;
  };
  protoOf(GuildMember).w5g = function (_set____db54di) {
    this.mute = _set____db54di;
  };
  protoOf(GuildMember).x5g = function () {
    return this.mute;
  };
  protoOf(GuildMember).y5g = function (_set____db54di) {
    this.flags = _set____db54di;
  };
  protoOf(GuildMember).z5g = function () {
    return this.flags;
  };
  protoOf(GuildMember).a5h = function (_set____db54di) {
    this.pending = _set____db54di;
  };
  protoOf(GuildMember).b5h = function () {
    return this.pending;
  };
  protoOf(GuildMember).c5h = function (_set____db54di) {
    this.communicationDisabledUntil = _set____db54di;
  };
  protoOf(GuildMember).d5h = function () {
    return this.communicationDisabledUntil;
  };
  function Message$Companion$$childSerializers$_anonymous__yfg1gj() {
    return new ReferenceArraySerializer(getKClass(User), $serializer_getInstance_42());
  }
  function Message$Companion$$childSerializers$_anonymous__yfg1gj_0() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pb(), StringSerializer_getInstance());
  }
  function Message$Companion$$childSerializers$_anonymous__yfg1gj_1() {
    return new ReferenceArraySerializer(getKClass(Attachment), $serializer_getInstance_0());
  }
  function Message$Companion$$childSerializers$_anonymous__yfg1gj_2() {
    return new ReferenceArraySerializer(getKClass(Embed), $serializer_getInstance_2());
  }
  function Message$Companion$$childSerializers$_anonymous__yfg1gj_3() {
    return new ReferenceArraySerializer(getKClass(Reaction), $serializer_getInstance_39());
  }
  function Message$Companion$$childSerializers$_anonymous__yfg1gj_4() {
    return new ReferenceArraySerializer(getKClass(MessageComponent), MessageComponentSerializer_getInstance());
  }
  function Companion_12() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, Message$Companion$$childSerializers$_anonymous__yfg1gj);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, Message$Companion$$childSerializers$_anonymous__yfg1gj_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, Message$Companion$$childSerializers$_anonymous__yfg1gj_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, Message$Companion$$childSerializers$_anonymous__yfg1gj_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, Message$Companion$$childSerializers$_anonymous__yfg1gj_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e5h_1 = [null, null, null, null, null, null, null, null, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, null, null, null, null, lazy(tmp_10, Message$Companion$$childSerializers$_anonymous__yfg1gj_4), null, null, null, null, null];
  }
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Message', this, 23);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('channelId', true);
    tmp0_serialDesc.dy('author', true);
    tmp0_serialDesc.dy('content', true);
    tmp0_serialDesc.dy('timestamp', true);
    tmp0_serialDesc.dy('editedTimestamp', true);
    tmp0_serialDesc.dy('tts', true);
    tmp0_serialDesc.dy('mentionEveryone', true);
    tmp0_serialDesc.dy('mentions', true);
    tmp0_serialDesc.dy('mentionRoles', true);
    tmp0_serialDesc.dy('attachments', true);
    tmp0_serialDesc.dy('embeds', true);
    tmp0_serialDesc.dy('reactions', true);
    tmp0_serialDesc.dy('pinned', true);
    tmp0_serialDesc.dy('webhookId', true);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('flags', true);
    tmp0_serialDesc.dy('components', true);
    tmp0_serialDesc.dy('guildId', true);
    tmp0_serialDesc.dy('member', true);
    tmp0_serialDesc.dy('messageReference', true);
    tmp0_serialDesc.dy('referencedMessage', true);
    tmp0_serialDesc.dy('position', true);
    this.f5h_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).g5h = function (encoder, value) {
    var tmp0_desc = this.f5h_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().e5h_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.channelId == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.channelId);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.author == null)) {
      tmp1_output.ns(tmp0_desc, 2, $serializer_getInstance_42(), value.author);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.content == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.content);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.timestamp == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.timestamp);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.editedTimestamp == null)) {
      tmp1_output.ns(tmp0_desc, 5, StringSerializer_getInstance(), value.editedTimestamp);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.tts == null)) {
      tmp1_output.ns(tmp0_desc, 6, BooleanSerializer_getInstance(), value.tts);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.mentionEveryone == null)) {
      tmp1_output.ns(tmp0_desc, 7, BooleanSerializer_getInstance(), value.mentionEveryone);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.mentions == null)) {
      tmp1_output.ns(tmp0_desc, 8, tmp2_cached[8].n1(), value.mentions);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.mentionRoles == null)) {
      tmp1_output.ns(tmp0_desc, 9, tmp2_cached[9].n1(), value.mentionRoles);
    }
    if (tmp1_output.rs(tmp0_desc, 10) ? true : !(value.attachments == null)) {
      tmp1_output.ns(tmp0_desc, 10, tmp2_cached[10].n1(), value.attachments);
    }
    if (tmp1_output.rs(tmp0_desc, 11) ? true : !(value.embeds == null)) {
      tmp1_output.ns(tmp0_desc, 11, tmp2_cached[11].n1(), value.embeds);
    }
    if (tmp1_output.rs(tmp0_desc, 12) ? true : !(value.reactions == null)) {
      tmp1_output.ns(tmp0_desc, 12, tmp2_cached[12].n1(), value.reactions);
    }
    if (tmp1_output.rs(tmp0_desc, 13) ? true : !(value.pinned == null)) {
      tmp1_output.ns(tmp0_desc, 13, BooleanSerializer_getInstance(), value.pinned);
    }
    if (tmp1_output.rs(tmp0_desc, 14) ? true : !(value.webhookId == null)) {
      tmp1_output.ns(tmp0_desc, 14, StringSerializer_getInstance(), value.webhookId);
    }
    if (tmp1_output.rs(tmp0_desc, 15) ? true : !(value.type == null)) {
      tmp1_output.ns(tmp0_desc, 15, IntSerializer_getInstance(), value.type);
    }
    if (tmp1_output.rs(tmp0_desc, 16) ? true : !(value.flags == null)) {
      tmp1_output.ns(tmp0_desc, 16, IntSerializer_getInstance(), value.flags);
    }
    if (tmp1_output.rs(tmp0_desc, 17) ? true : !(value.components == null)) {
      tmp1_output.ns(tmp0_desc, 17, tmp2_cached[17].n1(), value.components);
    }
    if (tmp1_output.rs(tmp0_desc, 18) ? true : !(value.guildId == null)) {
      tmp1_output.ns(tmp0_desc, 18, StringSerializer_getInstance(), value.guildId);
    }
    if (tmp1_output.rs(tmp0_desc, 19) ? true : !(value.member == null)) {
      tmp1_output.ns(tmp0_desc, 19, $serializer_getInstance_10(), value.member);
    }
    if (tmp1_output.rs(tmp0_desc, 20) ? true : !(value.messageReference == null)) {
      tmp1_output.ns(tmp0_desc, 20, $serializer_getInstance_12(), value.messageReference);
    }
    if (tmp1_output.rs(tmp0_desc, 21) ? true : !(value.referencedMessage == null)) {
      tmp1_output.ns(tmp0_desc, 21, $serializer_getInstance_11(), value.referencedMessage);
    }
    if (tmp1_output.rs(tmp0_desc, 22) ? true : !(value.position == null)) {
      tmp1_output.ns(tmp0_desc, 22, IntSerializer_getInstance(), value.position);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_11).tn = function (encoder, value) {
    return this.g5h(encoder, value instanceof Message ? value : THROW_CCE());
  };
  protoOf($serializer_11).un = function (decoder) {
    var tmp0_desc = this.f5h_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_local18 = null;
    var tmp23_local19 = null;
    var tmp24_local20 = null;
    var tmp25_local21 = null;
    var tmp26_local22 = null;
    var tmp27_input = decoder.uq(tmp0_desc);
    var tmp28_cached = Companion_getInstance_13().e5h_1;
    if (tmp27_input.kr()) {
      tmp4_local0 = tmp27_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp27_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp27_input.ir(tmp0_desc, 2, $serializer_getInstance_42(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp27_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp27_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp27_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp27_input.ir(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp27_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp27_input.ir(tmp0_desc, 8, tmp28_cached[8].n1(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp27_input.ir(tmp0_desc, 9, tmp28_cached[9].n1(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp27_input.ir(tmp0_desc, 10, tmp28_cached[10].n1(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp27_input.ir(tmp0_desc, 11, tmp28_cached[11].n1(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp27_input.ir(tmp0_desc, 12, tmp28_cached[12].n1(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp27_input.ir(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp27_input.ir(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp27_input.ir(tmp0_desc, 15, IntSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp27_input.ir(tmp0_desc, 16, IntSerializer_getInstance(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp27_input.ir(tmp0_desc, 17, tmp28_cached[17].n1(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp27_input.ir(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp27_input.ir(tmp0_desc, 19, $serializer_getInstance_10(), tmp23_local19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp27_input.ir(tmp0_desc, 20, $serializer_getInstance_12(), tmp24_local20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp25_local21 = tmp27_input.ir(tmp0_desc, 21, $serializer_getInstance_11(), tmp25_local21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp26_local22 = tmp27_input.ir(tmp0_desc, 22, IntSerializer_getInstance(), tmp26_local22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp27_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp27_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp27_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp27_input.ir(tmp0_desc, 2, $serializer_getInstance_42(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp27_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp27_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp27_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp27_input.ir(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp27_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp27_input.ir(tmp0_desc, 8, tmp28_cached[8].n1(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp27_input.ir(tmp0_desc, 9, tmp28_cached[9].n1(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp27_input.ir(tmp0_desc, 10, tmp28_cached[10].n1(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp27_input.ir(tmp0_desc, 11, tmp28_cached[11].n1(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp27_input.ir(tmp0_desc, 12, tmp28_cached[12].n1(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp27_input.ir(tmp0_desc, 13, BooleanSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp27_input.ir(tmp0_desc, 14, StringSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp27_input.ir(tmp0_desc, 15, IntSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp27_input.ir(tmp0_desc, 16, IntSerializer_getInstance(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp27_input.ir(tmp0_desc, 17, tmp28_cached[17].n1(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp27_input.ir(tmp0_desc, 18, StringSerializer_getInstance(), tmp22_local18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp27_input.ir(tmp0_desc, 19, $serializer_getInstance_10(), tmp23_local19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp27_input.ir(tmp0_desc, 20, $serializer_getInstance_12(), tmp24_local20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp25_local21 = tmp27_input.ir(tmp0_desc, 21, $serializer_getInstance_11(), tmp25_local21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp26_local22 = tmp27_input.ir(tmp0_desc, 22, IntSerializer_getInstance(), tmp26_local22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp27_input.vq(tmp0_desc);
    return Message_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, tmp25_local21, tmp26_local22, null);
  };
  protoOf($serializer_11).sn = function () {
    return this.f5h_1;
  };
  protoOf($serializer_11).sy = function () {
    var tmp0_cached = Companion_getInstance_13().e5h_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_42()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[8].n1()), get_nullable(tmp0_cached[9].n1()), get_nullable(tmp0_cached[10].n1()), get_nullable(tmp0_cached[11].n1()), get_nullable(tmp0_cached[12].n1()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[17].n1()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_10()), get_nullable($serializer_getInstance_12()), get_nullable($serializer_getInstance_11()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function Message_init_$Init$(seen0, id, channelId, author, content, timestamp, editedTimestamp, tts, mentionEveryone, mentions, mentionRoles, attachments, embeds, reactions, pinned, webhookId, type, flags, components, guildId, member, messageReference, referencedMessage, position, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_11().f5h_1);
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
      $this.author = null;
    else
      $this.author = author;
    if (0 === (seen0 & 8))
      $this.content = null;
    else
      $this.content = content;
    if (0 === (seen0 & 16))
      $this.timestamp = null;
    else
      $this.timestamp = timestamp;
    if (0 === (seen0 & 32))
      $this.editedTimestamp = null;
    else
      $this.editedTimestamp = editedTimestamp;
    if (0 === (seen0 & 64))
      $this.tts = null;
    else
      $this.tts = tts;
    if (0 === (seen0 & 128))
      $this.mentionEveryone = null;
    else
      $this.mentionEveryone = mentionEveryone;
    if (0 === (seen0 & 256))
      $this.mentions = null;
    else
      $this.mentions = mentions;
    if (0 === (seen0 & 512))
      $this.mentionRoles = null;
    else
      $this.mentionRoles = mentionRoles;
    if (0 === (seen0 & 1024))
      $this.attachments = null;
    else
      $this.attachments = attachments;
    if (0 === (seen0 & 2048))
      $this.embeds = null;
    else
      $this.embeds = embeds;
    if (0 === (seen0 & 4096))
      $this.reactions = null;
    else
      $this.reactions = reactions;
    if (0 === (seen0 & 8192))
      $this.pinned = null;
    else
      $this.pinned = pinned;
    if (0 === (seen0 & 16384))
      $this.webhookId = null;
    else
      $this.webhookId = webhookId;
    if (0 === (seen0 & 32768))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 65536))
      $this.flags = null;
    else
      $this.flags = flags;
    if (0 === (seen0 & 131072))
      $this.components = null;
    else
      $this.components = components;
    if (0 === (seen0 & 262144))
      $this.guildId = null;
    else
      $this.guildId = guildId;
    if (0 === (seen0 & 524288))
      $this.member = null;
    else
      $this.member = member;
    if (0 === (seen0 & 1048576))
      $this.messageReference = null;
    else
      $this.messageReference = messageReference;
    if (0 === (seen0 & 2097152))
      $this.referencedMessage = null;
    else
      $this.referencedMessage = referencedMessage;
    if (0 === (seen0 & 4194304))
      $this.position = null;
    else
      $this.position = position;
    return $this;
  }
  function Message_init_$Create$(seen0, id, channelId, author, content, timestamp, editedTimestamp, tts, mentionEveryone, mentions, mentionRoles, attachments, embeds, reactions, pinned, webhookId, type, flags, components, guildId, member, messageReference, referencedMessage, position, serializationConstructorMarker) {
    return Message_init_$Init$(seen0, id, channelId, author, content, timestamp, editedTimestamp, tts, mentionEveryone, mentions, mentionRoles, attachments, embeds, reactions, pinned, webhookId, type, flags, components, guildId, member, messageReference, referencedMessage, position, serializationConstructorMarker, objectCreate(protoOf(Message)));
  }
  function Message() {
    Companion_getInstance_13();
    this.id = null;
    this.channelId = null;
    this.author = null;
    this.content = null;
    this.timestamp = null;
    this.editedTimestamp = null;
    this.tts = null;
    this.mentionEveryone = null;
    this.mentions = null;
    this.mentionRoles = null;
    this.attachments = null;
    this.embeds = null;
    this.reactions = null;
    this.pinned = null;
    this.webhookId = null;
    this.type = null;
    this.flags = null;
    this.components = null;
    this.guildId = null;
    this.member = null;
    this.messageReference = null;
    this.referencedMessage = null;
    this.position = null;
  }
  protoOf(Message).r5a = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(Message).s5a = function () {
    return this.id;
  };
  protoOf(Message).h5h = function (_set____db54di) {
    this.channelId = _set____db54di;
  };
  protoOf(Message).a5a = function () {
    return this.channelId;
  };
  protoOf(Message).i5h = function (_set____db54di) {
    this.author = _set____db54di;
  };
  protoOf(Message).m5d = function () {
    return this.author;
  };
  protoOf(Message).b5a = function (_set____db54di) {
    this.content = _set____db54di;
  };
  protoOf(Message).d1b = function () {
    return this.content;
  };
  protoOf(Message).x5c = function (_set____db54di) {
    this.timestamp = _set____db54di;
  };
  protoOf(Message).y5c = function () {
    return this.timestamp;
  };
  protoOf(Message).j5h = function (_set____db54di) {
    this.editedTimestamp = _set____db54di;
  };
  protoOf(Message).k5h = function () {
    return this.editedTimestamp;
  };
  protoOf(Message).c5a = function (_set____db54di) {
    this.tts = _set____db54di;
  };
  protoOf(Message).d5a = function () {
    return this.tts;
  };
  protoOf(Message).l5h = function (_set____db54di) {
    this.mentionEveryone = _set____db54di;
  };
  protoOf(Message).m5h = function () {
    return this.mentionEveryone;
  };
  protoOf(Message).n5h = function (_set____db54di) {
    this.mentions = _set____db54di;
  };
  protoOf(Message).o5h = function () {
    return this.mentions;
  };
  protoOf(Message).p5h = function (_set____db54di) {
    this.mentionRoles = _set____db54di;
  };
  protoOf(Message).q5h = function () {
    return this.mentionRoles;
  };
  protoOf(Message).r5h = function (_set____db54di) {
    this.attachments = _set____db54di;
  };
  protoOf(Message).s5h = function () {
    return this.attachments;
  };
  protoOf(Message).t5h = function (_set____db54di) {
    this.embeds = _set____db54di;
  };
  protoOf(Message).u5h = function () {
    return this.embeds;
  };
  protoOf(Message).v5h = function (_set____db54di) {
    this.reactions = _set____db54di;
  };
  protoOf(Message).w5h = function () {
    return this.reactions;
  };
  protoOf(Message).x5h = function (_set____db54di) {
    this.pinned = _set____db54di;
  };
  protoOf(Message).y5h = function () {
    return this.pinned;
  };
  protoOf(Message).z5h = function (_set____db54di) {
    this.webhookId = _set____db54di;
  };
  protoOf(Message).a5i = function () {
    return this.webhookId;
  };
  protoOf(Message).o5b = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(Message).p5b = function () {
    return this.type;
  };
  protoOf(Message).y5g = function (_set____db54di) {
    this.flags = _set____db54di;
  };
  protoOf(Message).z5g = function () {
    return this.flags;
  };
  protoOf(Message).b5i = function (_set____db54di) {
    this.components = _set____db54di;
  };
  protoOf(Message).c5i = function () {
    return this.components;
  };
  protoOf(Message).q5b = function (_set____db54di) {
    this.guildId = _set____db54di;
  };
  protoOf(Message).r5b = function () {
    return this.guildId;
  };
  protoOf(Message).d5i = function (_set____db54di) {
    this.member = _set____db54di;
  };
  protoOf(Message).e5i = function () {
    return this.member;
  };
  protoOf(Message).f5i = function (_set____db54di) {
    this.messageReference = _set____db54di;
  };
  protoOf(Message).g5i = function () {
    return this.messageReference;
  };
  protoOf(Message).h5i = function (_set____db54di) {
    this.referencedMessage = _set____db54di;
  };
  protoOf(Message).i5i = function () {
    return this.referencedMessage;
  };
  protoOf(Message).s5b = function (_set____db54di) {
    this.position = _set____db54di;
  };
  protoOf(Message).t5b = function () {
    return this.position;
  };
  function Companion_13() {
  }
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.MessageReference', this, 5);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('messageId', true);
    tmp0_serialDesc.dy('channelId', true);
    tmp0_serialDesc.dy('guildId', true);
    tmp0_serialDesc.dy('failIfNotExists', true);
    this.j5i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).k5i = function (encoder, value) {
    var tmp0_desc = this.j5i_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.type == null)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.type);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.messageId == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.messageId);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.channelId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.channelId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.guildId == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.guildId);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.failIfNotExists == null)) {
      tmp1_output.ns(tmp0_desc, 4, BooleanSerializer_getInstance(), value.failIfNotExists);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_12).tn = function (encoder, value) {
    return this.k5i(encoder, value instanceof MessageReference ? value : THROW_CCE());
  };
  protoOf($serializer_12).un = function (decoder) {
    var tmp0_desc = this.j5i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.uq(tmp0_desc);
    if (tmp9_input.kr()) {
      tmp4_local0 = tmp9_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.vq(tmp0_desc);
    return MessageReference_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_12).sn = function () {
    return this.j5i_1;
  };
  protoOf($serializer_12).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function MessageReference_init_$Init$(seen0, type, messageId, channelId, guildId, failIfNotExists, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().j5i_1);
    }
    if (0 === (seen0 & 1))
      $this.type = null;
    else
      $this.type = type;
    if (0 === (seen0 & 2))
      $this.messageId = null;
    else
      $this.messageId = messageId;
    if (0 === (seen0 & 4))
      $this.channelId = null;
    else
      $this.channelId = channelId;
    if (0 === (seen0 & 8))
      $this.guildId = null;
    else
      $this.guildId = guildId;
    if (0 === (seen0 & 16))
      $this.failIfNotExists = null;
    else
      $this.failIfNotExists = failIfNotExists;
    return $this;
  }
  function MessageReference_init_$Create$(seen0, type, messageId, channelId, guildId, failIfNotExists, serializationConstructorMarker) {
    return MessageReference_init_$Init$(seen0, type, messageId, channelId, guildId, failIfNotExists, serializationConstructorMarker, objectCreate(protoOf(MessageReference)));
  }
  function MessageReference() {
    this.type = null;
    this.messageId = null;
    this.channelId = null;
    this.guildId = null;
    this.failIfNotExists = null;
  }
  protoOf(MessageReference).o5b = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(MessageReference).p5b = function () {
    return this.type;
  };
  protoOf(MessageReference).l5i = function (_set____db54di) {
    this.messageId = _set____db54di;
  };
  protoOf(MessageReference).j5a = function () {
    return this.messageId;
  };
  protoOf(MessageReference).h5h = function (_set____db54di) {
    this.channelId = _set____db54di;
  };
  protoOf(MessageReference).a5a = function () {
    return this.channelId;
  };
  protoOf(MessageReference).q5b = function (_set____db54di) {
    this.guildId = _set____db54di;
  };
  protoOf(MessageReference).r5b = function () {
    return this.guildId;
  };
  protoOf(MessageReference).m5i = function (_set____db54di) {
    this.failIfNotExists = _set____db54di;
  };
  protoOf(MessageReference).n5i = function () {
    return this.failIfNotExists;
  };
  function Companion_14() {
  }
  protoOf(Companion_14).f1b = function () {
    return MessageComponentSerializer_getInstance();
  };
  protoOf(Companion_14).dz = function (typeParamsSerializers) {
    return this.f1b();
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function MessageComponent() {
  }
  function ActionRowComponent$Companion$$childSerializers$_anonymous__2du6i7() {
    return new ReferenceArraySerializer(getKClass(MessageComponent), MessageComponentSerializer_getInstance());
  }
  function Companion_15() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p5i_1 = [null, null, lazy(tmp_0, ActionRowComponent$Companion$$childSerializers$_anonymous__2du6i7)];
  }
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.ActionRowComponent', this, 3);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('components', true);
    this.q5i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).r5i = function (encoder, value) {
    var tmp0_desc = this.q5i_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().p5i_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.s5i_1 === 1)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.s5i_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.t5i_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.t5i_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.components == null)) {
      tmp1_output.ns(tmp0_desc, 2, tmp2_cached[2].n1(), value.components);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_13).tn = function (encoder, value) {
    return this.r5i(encoder, value instanceof ActionRowComponent ? value : THROW_CCE());
  };
  protoOf($serializer_13).un = function (decoder) {
    var tmp0_desc = this.q5i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.uq(tmp0_desc);
    var tmp8_cached = Companion_getInstance_16().p5i_1;
    if (tmp7_input.kr()) {
      tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ir(tmp0_desc, 2, tmp8_cached[2].n1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ir(tmp0_desc, 2, tmp8_cached[2].n1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vq(tmp0_desc);
    return ActionRowComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_13).sn = function () {
    return this.q5i_1;
  };
  protoOf($serializer_13).sy = function () {
    var tmp0_cached = Companion_getInstance_16().p5i_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[2].n1())];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function ActionRowComponent_init_$Init$(seen0, type, id, components, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().q5i_1);
    }
    if (0 === (seen0 & 1))
      $this.s5i_1 = 1;
    else
      $this.s5i_1 = type;
    if (0 === (seen0 & 2))
      $this.t5i_1 = null;
    else
      $this.t5i_1 = id;
    if (0 === (seen0 & 4))
      $this.components = null;
    else
      $this.components = components;
    return $this;
  }
  function ActionRowComponent_init_$Create$(seen0, type, id, components, serializationConstructorMarker) {
    return ActionRowComponent_init_$Init$(seen0, type, id, components, serializationConstructorMarker, objectCreate(protoOf(ActionRowComponent)));
  }
  function ActionRowComponent() {
    Companion_getInstance_16();
    this.s5i_1 = 1;
    this.t5i_1 = null;
    this.components = null;
  }
  protoOf(ActionRowComponent).o5b = function (_set____db54di) {
    this.s5i_1 = _set____db54di;
  };
  protoOf(ActionRowComponent).p5b = function () {
    return this.s5i_1;
  };
  protoOf(ActionRowComponent).o5i = function (_set____db54di) {
    this.t5i_1 = _set____db54di;
  };
  protoOf(ActionRowComponent).s5a = function () {
    return this.t5i_1;
  };
  protoOf(ActionRowComponent).b5i = function (_set____db54di) {
    this.components = _set____db54di;
  };
  protoOf(ActionRowComponent).c5i = function () {
    return this.components;
  };
  function Companion_16() {
  }
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.ButtonComponent', this, 9);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('style', true);
    tmp0_serialDesc.dy('label', true);
    tmp0_serialDesc.dy('emoji', true);
    tmp0_serialDesc.dy('customId', true);
    tmp0_serialDesc.dy('skuId', true);
    tmp0_serialDesc.dy('url', true);
    tmp0_serialDesc.dy('disabled', true);
    this.u5i_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).v5i = function (encoder, value) {
    var tmp0_desc = this.u5i_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.w5i_1 === 2)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.w5i_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.x5i_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.x5i_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.style == null)) {
      tmp1_output.ns(tmp0_desc, 2, IntSerializer_getInstance(), value.style);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.label == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.label);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.emoji == null)) {
      tmp1_output.ns(tmp0_desc, 4, $serializer_getInstance_8(), value.emoji);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.customId == null)) {
      tmp1_output.ns(tmp0_desc, 5, StringSerializer_getInstance(), value.customId);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.skuId == null)) {
      tmp1_output.ns(tmp0_desc, 6, StringSerializer_getInstance(), value.skuId);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.url == null)) {
      tmp1_output.ns(tmp0_desc, 7, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.disabled == null)) {
      tmp1_output.ns(tmp0_desc, 8, BooleanSerializer_getInstance(), value.disabled);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_14).tn = function (encoder, value) {
    return this.v5i(encoder, value instanceof ButtonComponent ? value : THROW_CCE());
  };
  protoOf($serializer_14).un = function (decoder) {
    var tmp0_desc = this.u5i_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_input = decoder.uq(tmp0_desc);
    if (tmp13_input.kr()) {
      tmp4_local0 = tmp13_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.ir(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.ir(tmp0_desc, 4, $serializer_getInstance_8(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.ir(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.ir(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.ir(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.ir(tmp0_desc, 4, $serializer_getInstance_8(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.ir(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.ir(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.vq(tmp0_desc);
    return ButtonComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_14).sn = function () {
    return this.u5i_1;
  };
  protoOf($serializer_14).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_8()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function ButtonComponent_init_$Init$(seen0, type, id, style, label, emoji, customId, skuId, url, disabled, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().u5i_1);
    }
    if (0 === (seen0 & 1))
      $this.w5i_1 = 2;
    else
      $this.w5i_1 = type;
    if (0 === (seen0 & 2))
      $this.x5i_1 = null;
    else
      $this.x5i_1 = id;
    if (0 === (seen0 & 4))
      $this.style = null;
    else
      $this.style = style;
    if (0 === (seen0 & 8))
      $this.label = null;
    else
      $this.label = label;
    if (0 === (seen0 & 16))
      $this.emoji = null;
    else
      $this.emoji = emoji;
    if (0 === (seen0 & 32))
      $this.customId = null;
    else
      $this.customId = customId;
    if (0 === (seen0 & 64))
      $this.skuId = null;
    else
      $this.skuId = skuId;
    if (0 === (seen0 & 128))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 256))
      $this.disabled = null;
    else
      $this.disabled = disabled;
    return $this;
  }
  function ButtonComponent_init_$Create$(seen0, type, id, style, label, emoji, customId, skuId, url, disabled, serializationConstructorMarker) {
    return ButtonComponent_init_$Init$(seen0, type, id, style, label, emoji, customId, skuId, url, disabled, serializationConstructorMarker, objectCreate(protoOf(ButtonComponent)));
  }
  function ButtonComponent() {
    this.w5i_1 = 2;
    this.x5i_1 = null;
    this.style = null;
    this.label = null;
    this.emoji = null;
    this.customId = null;
    this.skuId = null;
    this.url = null;
    this.disabled = null;
  }
  protoOf(ButtonComponent).o5b = function (_set____db54di) {
    this.w5i_1 = _set____db54di;
  };
  protoOf(ButtonComponent).p5b = function () {
    return this.w5i_1;
  };
  protoOf(ButtonComponent).o5i = function (_set____db54di) {
    this.x5i_1 = _set____db54di;
  };
  protoOf(ButtonComponent).s5a = function () {
    return this.x5i_1;
  };
  protoOf(ButtonComponent).y5i = function (_set____db54di) {
    this.style = _set____db54di;
  };
  protoOf(ButtonComponent).z5i = function () {
    return this.style;
  };
  protoOf(ButtonComponent).a5j = function (_set____db54di) {
    this.label = _set____db54di;
  };
  protoOf(ButtonComponent).b5j = function () {
    return this.label;
  };
  protoOf(ButtonComponent).c5j = function (_set____db54di) {
    this.emoji = _set____db54di;
  };
  protoOf(ButtonComponent).d5j = function () {
    return this.emoji;
  };
  protoOf(ButtonComponent).e5j = function (_set____db54di) {
    this.customId = _set____db54di;
  };
  protoOf(ButtonComponent).f5j = function () {
    return this.customId;
  };
  protoOf(ButtonComponent).g5j = function (_set____db54di) {
    this.skuId = _set____db54di;
  };
  protoOf(ButtonComponent).h5j = function () {
    return this.skuId;
  };
  protoOf(ButtonComponent).o5a = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(ButtonComponent).c3w = function () {
    return this.url;
  };
  protoOf(ButtonComponent).i5j = function (_set____db54di) {
    this.disabled = _set____db54di;
  };
  protoOf(ButtonComponent).j5j = function () {
    return this.disabled;
  };
  function StringSelectComponent$Companion$$childSerializers$_anonymous__33gc4a() {
    return new ReferenceArraySerializer(getKClass(SelectOption), $serializer_getInstance_34());
  }
  function StringSelectComponent$Companion$$childSerializers$_anonymous__33gc4a_0() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pb(), StringSerializer_getInstance());
  }
  function Companion_17() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, StringSelectComponent$Companion$$childSerializers$_anonymous__33gc4a);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k5j_1 = [null, null, null, tmp_1, null, null, null, null, null, lazy(tmp_2, StringSelectComponent$Companion$$childSerializers$_anonymous__33gc4a_0)];
  }
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.StringSelectComponent', this, 10);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('customId', true);
    tmp0_serialDesc.dy('options', true);
    tmp0_serialDesc.dy('placeholder', true);
    tmp0_serialDesc.dy('minValues', true);
    tmp0_serialDesc.dy('maxValues', true);
    tmp0_serialDesc.dy('required', true);
    tmp0_serialDesc.dy('disabled', true);
    tmp0_serialDesc.dy('values', true);
    this.l5j_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).m5j = function (encoder, value) {
    var tmp0_desc = this.l5j_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_18().k5j_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.n5j_1 === 3)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.n5j_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.o5j_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.o5j_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.customId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.customId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.options == null)) {
      tmp1_output.ns(tmp0_desc, 3, tmp2_cached[3].n1(), value.options);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.placeholder == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.placeholder);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.minValues == null)) {
      tmp1_output.ns(tmp0_desc, 5, IntSerializer_getInstance(), value.minValues);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.maxValues == null)) {
      tmp1_output.ns(tmp0_desc, 6, IntSerializer_getInstance(), value.maxValues);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.required == null)) {
      tmp1_output.ns(tmp0_desc, 7, BooleanSerializer_getInstance(), value.required);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.disabled == null)) {
      tmp1_output.ns(tmp0_desc, 8, BooleanSerializer_getInstance(), value.disabled);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.values == null)) {
      tmp1_output.ns(tmp0_desc, 9, tmp2_cached[9].n1(), value.values);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_15).tn = function (encoder, value) {
    return this.m5j(encoder, value instanceof StringSelectComponent ? value : THROW_CCE());
  };
  protoOf($serializer_15).un = function (decoder) {
    var tmp0_desc = this.l5j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.uq(tmp0_desc);
    var tmp15_cached = Companion_getInstance_18().k5j_1;
    if (tmp14_input.kr()) {
      tmp4_local0 = tmp14_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.ir(tmp0_desc, 3, tmp15_cached[3].n1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.ir(tmp0_desc, 9, tmp15_cached[9].n1(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.ir(tmp0_desc, 3, tmp15_cached[3].n1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.ir(tmp0_desc, 9, tmp15_cached[9].n1(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.vq(tmp0_desc);
    return StringSelectComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  protoOf($serializer_15).sn = function () {
    return this.l5j_1;
  };
  protoOf($serializer_15).sy = function () {
    var tmp0_cached = Companion_getInstance_18().k5j_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3].n1()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[9].n1())];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function StringSelectComponent_init_$Init$(seen0, type, id, customId, options, placeholder, minValues, maxValues, required, disabled, values, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_15().l5j_1);
    }
    if (0 === (seen0 & 1))
      $this.n5j_1 = 3;
    else
      $this.n5j_1 = type;
    if (0 === (seen0 & 2))
      $this.o5j_1 = null;
    else
      $this.o5j_1 = id;
    if (0 === (seen0 & 4))
      $this.customId = null;
    else
      $this.customId = customId;
    if (0 === (seen0 & 8))
      $this.options = null;
    else
      $this.options = options;
    if (0 === (seen0 & 16))
      $this.placeholder = null;
    else
      $this.placeholder = placeholder;
    if (0 === (seen0 & 32))
      $this.minValues = null;
    else
      $this.minValues = minValues;
    if (0 === (seen0 & 64))
      $this.maxValues = null;
    else
      $this.maxValues = maxValues;
    if (0 === (seen0 & 128))
      $this.required = null;
    else
      $this.required = required;
    if (0 === (seen0 & 256))
      $this.disabled = null;
    else
      $this.disabled = disabled;
    if (0 === (seen0 & 512))
      $this.values = null;
    else
      $this.values = values;
    return $this;
  }
  function StringSelectComponent_init_$Create$(seen0, type, id, customId, options, placeholder, minValues, maxValues, required, disabled, values, serializationConstructorMarker) {
    return StringSelectComponent_init_$Init$(seen0, type, id, customId, options, placeholder, minValues, maxValues, required, disabled, values, serializationConstructorMarker, objectCreate(protoOf(StringSelectComponent)));
  }
  function StringSelectComponent() {
    Companion_getInstance_18();
    this.n5j_1 = 3;
    this.o5j_1 = null;
    this.customId = null;
    this.options = null;
    this.placeholder = null;
    this.minValues = null;
    this.maxValues = null;
    this.required = null;
    this.disabled = null;
    this.values = null;
  }
  protoOf(StringSelectComponent).o5b = function (_set____db54di) {
    this.n5j_1 = _set____db54di;
  };
  protoOf(StringSelectComponent).p5b = function () {
    return this.n5j_1;
  };
  protoOf(StringSelectComponent).o5i = function (_set____db54di) {
    this.o5j_1 = _set____db54di;
  };
  protoOf(StringSelectComponent).s5a = function () {
    return this.o5j_1;
  };
  protoOf(StringSelectComponent).e5j = function (_set____db54di) {
    this.customId = _set____db54di;
  };
  protoOf(StringSelectComponent).f5j = function () {
    return this.customId;
  };
  protoOf(StringSelectComponent).p5j = function (_set____db54di) {
    this.options = _set____db54di;
  };
  protoOf(StringSelectComponent).q5j = function () {
    return this.options;
  };
  protoOf(StringSelectComponent).b5e = function (_set____db54di) {
    this.placeholder = _set____db54di;
  };
  protoOf(StringSelectComponent).c5e = function () {
    return this.placeholder;
  };
  protoOf(StringSelectComponent).r5j = function (_set____db54di) {
    this.minValues = _set____db54di;
  };
  protoOf(StringSelectComponent).s5j = function () {
    return this.minValues;
  };
  protoOf(StringSelectComponent).t5j = function (_set____db54di) {
    this.maxValues = _set____db54di;
  };
  protoOf(StringSelectComponent).u5j = function () {
    return this.maxValues;
  };
  protoOf(StringSelectComponent).v5j = function (_set____db54di) {
    this.required = _set____db54di;
  };
  protoOf(StringSelectComponent).w5j = function () {
    return this.required;
  };
  protoOf(StringSelectComponent).i5j = function (_set____db54di) {
    this.disabled = _set____db54di;
  };
  protoOf(StringSelectComponent).j5j = function () {
    return this.disabled;
  };
  protoOf(StringSelectComponent).x5j = function (_set____db54di) {
    this.values = _set____db54di;
  };
  protoOf(StringSelectComponent).p2 = function () {
    return this.values;
  };
  function Companion_18() {
  }
  var Companion_instance_19;
  function Companion_getInstance_19() {
    return Companion_instance_19;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.TextInputComponent', this, 10);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('customId', true);
    tmp0_serialDesc.dy('style', true);
    tmp0_serialDesc.dy('label', true);
    tmp0_serialDesc.dy('minLength', true);
    tmp0_serialDesc.dy('maxLength', true);
    tmp0_serialDesc.dy('required', true);
    tmp0_serialDesc.dy('value', true);
    tmp0_serialDesc.dy('placeholder', true);
    this.y5j_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).z5j = function (encoder, value) {
    var tmp0_desc = this.y5j_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.a5k_1 === 4)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.a5k_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.b5k_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.b5k_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.customId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.customId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.style == null)) {
      tmp1_output.ns(tmp0_desc, 3, IntSerializer_getInstance(), value.style);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.label == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.label);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.minLength == null)) {
      tmp1_output.ns(tmp0_desc, 5, IntSerializer_getInstance(), value.minLength);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.maxLength == null)) {
      tmp1_output.ns(tmp0_desc, 6, IntSerializer_getInstance(), value.maxLength);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.required == null)) {
      tmp1_output.ns(tmp0_desc, 7, BooleanSerializer_getInstance(), value.required);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.value == null)) {
      tmp1_output.ns(tmp0_desc, 8, StringSerializer_getInstance(), value.value);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.placeholder == null)) {
      tmp1_output.ns(tmp0_desc, 9, StringSerializer_getInstance(), value.placeholder);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_16).tn = function (encoder, value) {
    return this.z5j(encoder, value instanceof TextInputComponent ? value : THROW_CCE());
  };
  protoOf($serializer_16).un = function (decoder) {
    var tmp0_desc = this.y5j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.uq(tmp0_desc);
    if (tmp14_input.kr()) {
      tmp4_local0 = tmp14_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.ir(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.ir(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.ir(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.ir(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.vq(tmp0_desc);
    return TextInputComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  protoOf($serializer_16).sn = function () {
    return this.y5j_1;
  };
  protoOf($serializer_16).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function TextInputComponent_init_$Init$(seen0, type, id, customId, style, label, minLength, maxLength, required, value, placeholder, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().y5j_1);
    }
    if (0 === (seen0 & 1))
      $this.a5k_1 = 4;
    else
      $this.a5k_1 = type;
    if (0 === (seen0 & 2))
      $this.b5k_1 = null;
    else
      $this.b5k_1 = id;
    if (0 === (seen0 & 4))
      $this.customId = null;
    else
      $this.customId = customId;
    if (0 === (seen0 & 8))
      $this.style = null;
    else
      $this.style = style;
    if (0 === (seen0 & 16))
      $this.label = null;
    else
      $this.label = label;
    if (0 === (seen0 & 32))
      $this.minLength = null;
    else
      $this.minLength = minLength;
    if (0 === (seen0 & 64))
      $this.maxLength = null;
    else
      $this.maxLength = maxLength;
    if (0 === (seen0 & 128))
      $this.required = null;
    else
      $this.required = required;
    if (0 === (seen0 & 256))
      $this.value = null;
    else
      $this.value = value;
    if (0 === (seen0 & 512))
      $this.placeholder = null;
    else
      $this.placeholder = placeholder;
    return $this;
  }
  function TextInputComponent_init_$Create$(seen0, type, id, customId, style, label, minLength, maxLength, required, value, placeholder, serializationConstructorMarker) {
    return TextInputComponent_init_$Init$(seen0, type, id, customId, style, label, minLength, maxLength, required, value, placeholder, serializationConstructorMarker, objectCreate(protoOf(TextInputComponent)));
  }
  function TextInputComponent() {
    this.a5k_1 = 4;
    this.b5k_1 = null;
    this.customId = null;
    this.style = null;
    this.label = null;
    this.minLength = null;
    this.maxLength = null;
    this.required = null;
    this.value = null;
    this.placeholder = null;
  }
  protoOf(TextInputComponent).o5b = function (_set____db54di) {
    this.a5k_1 = _set____db54di;
  };
  protoOf(TextInputComponent).p5b = function () {
    return this.a5k_1;
  };
  protoOf(TextInputComponent).o5i = function (_set____db54di) {
    this.b5k_1 = _set____db54di;
  };
  protoOf(TextInputComponent).s5a = function () {
    return this.b5k_1;
  };
  protoOf(TextInputComponent).e5j = function (_set____db54di) {
    this.customId = _set____db54di;
  };
  protoOf(TextInputComponent).f5j = function () {
    return this.customId;
  };
  protoOf(TextInputComponent).y5i = function (_set____db54di) {
    this.style = _set____db54di;
  };
  protoOf(TextInputComponent).z5i = function () {
    return this.style;
  };
  protoOf(TextInputComponent).a5j = function (_set____db54di) {
    this.label = _set____db54di;
  };
  protoOf(TextInputComponent).b5j = function () {
    return this.label;
  };
  protoOf(TextInputComponent).c5k = function (_set____db54di) {
    this.minLength = _set____db54di;
  };
  protoOf(TextInputComponent).d5k = function () {
    return this.minLength;
  };
  protoOf(TextInputComponent).e5k = function (_set____db54di) {
    this.maxLength = _set____db54di;
  };
  protoOf(TextInputComponent).f5k = function () {
    return this.maxLength;
  };
  protoOf(TextInputComponent).v5j = function (_set____db54di) {
    this.required = _set____db54di;
  };
  protoOf(TextInputComponent).w5j = function () {
    return this.required;
  };
  protoOf(TextInputComponent).l5e = function (_set____db54di) {
    this.value = _set____db54di;
  };
  protoOf(TextInputComponent).n1 = function () {
    return this.value;
  };
  protoOf(TextInputComponent).b5e = function (_set____db54di) {
    this.placeholder = _set____db54di;
  };
  protoOf(TextInputComponent).c5e = function () {
    return this.placeholder;
  };
  function UserSelectComponent$Companion$$childSerializers$_anonymous__8jh7e4() {
    return new ReferenceArraySerializer(getKClass(SelectDefaultValue), $serializer_getInstance_35());
  }
  function UserSelectComponent$Companion$$childSerializers$_anonymous__8jh7e4_0() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pb(), StringSerializer_getInstance());
  }
  function Companion_19() {
    Companion_instance_20 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, UserSelectComponent$Companion$$childSerializers$_anonymous__8jh7e4);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.g5k_1 = [null, null, null, null, tmp_1, null, null, null, null, lazy(tmp_2, UserSelectComponent$Companion$$childSerializers$_anonymous__8jh7e4_0)];
  }
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_19();
    return Companion_instance_20;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.UserSelectComponent', this, 10);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('customId', true);
    tmp0_serialDesc.dy('placeholder', true);
    tmp0_serialDesc.dy('defaultValues', true);
    tmp0_serialDesc.dy('minValues', true);
    tmp0_serialDesc.dy('maxValues', true);
    tmp0_serialDesc.dy('required', true);
    tmp0_serialDesc.dy('disabled', true);
    tmp0_serialDesc.dy('values', true);
    this.h5k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).i5k = function (encoder, value) {
    var tmp0_desc = this.h5k_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().g5k_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.j5k_1 === 5)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.j5k_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.k5k_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.k5k_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.customId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.customId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.placeholder == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.placeholder);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.defaultValues == null)) {
      tmp1_output.ns(tmp0_desc, 4, tmp2_cached[4].n1(), value.defaultValues);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.minValues == null)) {
      tmp1_output.ns(tmp0_desc, 5, IntSerializer_getInstance(), value.minValues);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.maxValues == null)) {
      tmp1_output.ns(tmp0_desc, 6, IntSerializer_getInstance(), value.maxValues);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.required == null)) {
      tmp1_output.ns(tmp0_desc, 7, BooleanSerializer_getInstance(), value.required);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.disabled == null)) {
      tmp1_output.ns(tmp0_desc, 8, BooleanSerializer_getInstance(), value.disabled);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.values == null)) {
      tmp1_output.ns(tmp0_desc, 9, tmp2_cached[9].n1(), value.values);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_17).tn = function (encoder, value) {
    return this.i5k(encoder, value instanceof UserSelectComponent ? value : THROW_CCE());
  };
  protoOf($serializer_17).un = function (decoder) {
    var tmp0_desc = this.h5k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.uq(tmp0_desc);
    var tmp15_cached = Companion_getInstance_20().g5k_1;
    if (tmp14_input.kr()) {
      tmp4_local0 = tmp14_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.ir(tmp0_desc, 4, tmp15_cached[4].n1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.ir(tmp0_desc, 9, tmp15_cached[9].n1(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.ir(tmp0_desc, 4, tmp15_cached[4].n1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.ir(tmp0_desc, 9, tmp15_cached[9].n1(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.vq(tmp0_desc);
    return UserSelectComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  protoOf($serializer_17).sn = function () {
    return this.h5k_1;
  };
  protoOf($serializer_17).sy = function () {
    var tmp0_cached = Companion_getInstance_20().g5k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[4].n1()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[9].n1())];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function UserSelectComponent_init_$Init$(seen0, type, id, customId, placeholder, defaultValues, minValues, maxValues, required, disabled, values, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_17().h5k_1);
    }
    if (0 === (seen0 & 1))
      $this.j5k_1 = 5;
    else
      $this.j5k_1 = type;
    if (0 === (seen0 & 2))
      $this.k5k_1 = null;
    else
      $this.k5k_1 = id;
    if (0 === (seen0 & 4))
      $this.customId = null;
    else
      $this.customId = customId;
    if (0 === (seen0 & 8))
      $this.placeholder = null;
    else
      $this.placeholder = placeholder;
    if (0 === (seen0 & 16))
      $this.defaultValues = null;
    else
      $this.defaultValues = defaultValues;
    if (0 === (seen0 & 32))
      $this.minValues = null;
    else
      $this.minValues = minValues;
    if (0 === (seen0 & 64))
      $this.maxValues = null;
    else
      $this.maxValues = maxValues;
    if (0 === (seen0 & 128))
      $this.required = null;
    else
      $this.required = required;
    if (0 === (seen0 & 256))
      $this.disabled = null;
    else
      $this.disabled = disabled;
    if (0 === (seen0 & 512))
      $this.values = null;
    else
      $this.values = values;
    return $this;
  }
  function UserSelectComponent_init_$Create$(seen0, type, id, customId, placeholder, defaultValues, minValues, maxValues, required, disabled, values, serializationConstructorMarker) {
    return UserSelectComponent_init_$Init$(seen0, type, id, customId, placeholder, defaultValues, minValues, maxValues, required, disabled, values, serializationConstructorMarker, objectCreate(protoOf(UserSelectComponent)));
  }
  function UserSelectComponent() {
    Companion_getInstance_20();
    this.j5k_1 = 5;
    this.k5k_1 = null;
    this.customId = null;
    this.placeholder = null;
    this.defaultValues = null;
    this.minValues = null;
    this.maxValues = null;
    this.required = null;
    this.disabled = null;
    this.values = null;
  }
  protoOf(UserSelectComponent).o5b = function (_set____db54di) {
    this.j5k_1 = _set____db54di;
  };
  protoOf(UserSelectComponent).p5b = function () {
    return this.j5k_1;
  };
  protoOf(UserSelectComponent).o5i = function (_set____db54di) {
    this.k5k_1 = _set____db54di;
  };
  protoOf(UserSelectComponent).s5a = function () {
    return this.k5k_1;
  };
  protoOf(UserSelectComponent).e5j = function (_set____db54di) {
    this.customId = _set____db54di;
  };
  protoOf(UserSelectComponent).f5j = function () {
    return this.customId;
  };
  protoOf(UserSelectComponent).b5e = function (_set____db54di) {
    this.placeholder = _set____db54di;
  };
  protoOf(UserSelectComponent).c5e = function () {
    return this.placeholder;
  };
  protoOf(UserSelectComponent).l5k = function (_set____db54di) {
    this.defaultValues = _set____db54di;
  };
  protoOf(UserSelectComponent).m5k = function () {
    return this.defaultValues;
  };
  protoOf(UserSelectComponent).r5j = function (_set____db54di) {
    this.minValues = _set____db54di;
  };
  protoOf(UserSelectComponent).s5j = function () {
    return this.minValues;
  };
  protoOf(UserSelectComponent).t5j = function (_set____db54di) {
    this.maxValues = _set____db54di;
  };
  protoOf(UserSelectComponent).u5j = function () {
    return this.maxValues;
  };
  protoOf(UserSelectComponent).v5j = function (_set____db54di) {
    this.required = _set____db54di;
  };
  protoOf(UserSelectComponent).w5j = function () {
    return this.required;
  };
  protoOf(UserSelectComponent).i5j = function (_set____db54di) {
    this.disabled = _set____db54di;
  };
  protoOf(UserSelectComponent).j5j = function () {
    return this.disabled;
  };
  protoOf(UserSelectComponent).x5j = function (_set____db54di) {
    this.values = _set____db54di;
  };
  protoOf(UserSelectComponent).p2 = function () {
    return this.values;
  };
  function RoleSelectComponent$Companion$$childSerializers$_anonymous__m4qe73() {
    return new ReferenceArraySerializer(getKClass(SelectDefaultValue), $serializer_getInstance_35());
  }
  function RoleSelectComponent$Companion$$childSerializers$_anonymous__m4qe73_0() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pb(), StringSerializer_getInstance());
  }
  function Companion_20() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, RoleSelectComponent$Companion$$childSerializers$_anonymous__m4qe73);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n5k_1 = [null, null, null, null, tmp_1, null, null, null, null, lazy(tmp_2, RoleSelectComponent$Companion$$childSerializers$_anonymous__m4qe73_0)];
  }
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_20();
    return Companion_instance_21;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.RoleSelectComponent', this, 10);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('customId', true);
    tmp0_serialDesc.dy('placeholder', true);
    tmp0_serialDesc.dy('defaultValues', true);
    tmp0_serialDesc.dy('minValues', true);
    tmp0_serialDesc.dy('maxValues', true);
    tmp0_serialDesc.dy('required', true);
    tmp0_serialDesc.dy('disabled', true);
    tmp0_serialDesc.dy('values', true);
    this.o5k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).p5k = function (encoder, value) {
    var tmp0_desc = this.o5k_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().n5k_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.q5k_1 === 6)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.q5k_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.r5k_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.r5k_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.customId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.customId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.placeholder == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.placeholder);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.defaultValues == null)) {
      tmp1_output.ns(tmp0_desc, 4, tmp2_cached[4].n1(), value.defaultValues);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.minValues == null)) {
      tmp1_output.ns(tmp0_desc, 5, IntSerializer_getInstance(), value.minValues);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.maxValues == null)) {
      tmp1_output.ns(tmp0_desc, 6, IntSerializer_getInstance(), value.maxValues);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.required == null)) {
      tmp1_output.ns(tmp0_desc, 7, BooleanSerializer_getInstance(), value.required);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.disabled == null)) {
      tmp1_output.ns(tmp0_desc, 8, BooleanSerializer_getInstance(), value.disabled);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.values == null)) {
      tmp1_output.ns(tmp0_desc, 9, tmp2_cached[9].n1(), value.values);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_18).tn = function (encoder, value) {
    return this.p5k(encoder, value instanceof RoleSelectComponent ? value : THROW_CCE());
  };
  protoOf($serializer_18).un = function (decoder) {
    var tmp0_desc = this.o5k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.uq(tmp0_desc);
    var tmp15_cached = Companion_getInstance_21().n5k_1;
    if (tmp14_input.kr()) {
      tmp4_local0 = tmp14_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.ir(tmp0_desc, 4, tmp15_cached[4].n1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.ir(tmp0_desc, 9, tmp15_cached[9].n1(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.ir(tmp0_desc, 4, tmp15_cached[4].n1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.ir(tmp0_desc, 9, tmp15_cached[9].n1(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.vq(tmp0_desc);
    return RoleSelectComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  protoOf($serializer_18).sn = function () {
    return this.o5k_1;
  };
  protoOf($serializer_18).sy = function () {
    var tmp0_cached = Companion_getInstance_21().n5k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[4].n1()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[9].n1())];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function RoleSelectComponent_init_$Init$(seen0, type, id, customId, placeholder, defaultValues, minValues, maxValues, required, disabled, values, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_18().o5k_1);
    }
    if (0 === (seen0 & 1))
      $this.q5k_1 = 6;
    else
      $this.q5k_1 = type;
    if (0 === (seen0 & 2))
      $this.r5k_1 = null;
    else
      $this.r5k_1 = id;
    if (0 === (seen0 & 4))
      $this.customId = null;
    else
      $this.customId = customId;
    if (0 === (seen0 & 8))
      $this.placeholder = null;
    else
      $this.placeholder = placeholder;
    if (0 === (seen0 & 16))
      $this.defaultValues = null;
    else
      $this.defaultValues = defaultValues;
    if (0 === (seen0 & 32))
      $this.minValues = null;
    else
      $this.minValues = minValues;
    if (0 === (seen0 & 64))
      $this.maxValues = null;
    else
      $this.maxValues = maxValues;
    if (0 === (seen0 & 128))
      $this.required = null;
    else
      $this.required = required;
    if (0 === (seen0 & 256))
      $this.disabled = null;
    else
      $this.disabled = disabled;
    if (0 === (seen0 & 512))
      $this.values = null;
    else
      $this.values = values;
    return $this;
  }
  function RoleSelectComponent_init_$Create$(seen0, type, id, customId, placeholder, defaultValues, minValues, maxValues, required, disabled, values, serializationConstructorMarker) {
    return RoleSelectComponent_init_$Init$(seen0, type, id, customId, placeholder, defaultValues, minValues, maxValues, required, disabled, values, serializationConstructorMarker, objectCreate(protoOf(RoleSelectComponent)));
  }
  function RoleSelectComponent() {
    Companion_getInstance_21();
    this.q5k_1 = 6;
    this.r5k_1 = null;
    this.customId = null;
    this.placeholder = null;
    this.defaultValues = null;
    this.minValues = null;
    this.maxValues = null;
    this.required = null;
    this.disabled = null;
    this.values = null;
  }
  protoOf(RoleSelectComponent).o5b = function (_set____db54di) {
    this.q5k_1 = _set____db54di;
  };
  protoOf(RoleSelectComponent).p5b = function () {
    return this.q5k_1;
  };
  protoOf(RoleSelectComponent).o5i = function (_set____db54di) {
    this.r5k_1 = _set____db54di;
  };
  protoOf(RoleSelectComponent).s5a = function () {
    return this.r5k_1;
  };
  protoOf(RoleSelectComponent).e5j = function (_set____db54di) {
    this.customId = _set____db54di;
  };
  protoOf(RoleSelectComponent).f5j = function () {
    return this.customId;
  };
  protoOf(RoleSelectComponent).b5e = function (_set____db54di) {
    this.placeholder = _set____db54di;
  };
  protoOf(RoleSelectComponent).c5e = function () {
    return this.placeholder;
  };
  protoOf(RoleSelectComponent).l5k = function (_set____db54di) {
    this.defaultValues = _set____db54di;
  };
  protoOf(RoleSelectComponent).m5k = function () {
    return this.defaultValues;
  };
  protoOf(RoleSelectComponent).r5j = function (_set____db54di) {
    this.minValues = _set____db54di;
  };
  protoOf(RoleSelectComponent).s5j = function () {
    return this.minValues;
  };
  protoOf(RoleSelectComponent).t5j = function (_set____db54di) {
    this.maxValues = _set____db54di;
  };
  protoOf(RoleSelectComponent).u5j = function () {
    return this.maxValues;
  };
  protoOf(RoleSelectComponent).v5j = function (_set____db54di) {
    this.required = _set____db54di;
  };
  protoOf(RoleSelectComponent).w5j = function () {
    return this.required;
  };
  protoOf(RoleSelectComponent).i5j = function (_set____db54di) {
    this.disabled = _set____db54di;
  };
  protoOf(RoleSelectComponent).j5j = function () {
    return this.disabled;
  };
  protoOf(RoleSelectComponent).x5j = function (_set____db54di) {
    this.values = _set____db54di;
  };
  protoOf(RoleSelectComponent).p2 = function () {
    return this.values;
  };
  function MentionableSelectComponent$Companion$$childSerializers$_anonymous__1udf83() {
    return new ReferenceArraySerializer(getKClass(SelectDefaultValue), $serializer_getInstance_35());
  }
  function MentionableSelectComponent$Companion$$childSerializers$_anonymous__1udf83_0() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pb(), StringSerializer_getInstance());
  }
  function Companion_21() {
    Companion_instance_22 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, MentionableSelectComponent$Companion$$childSerializers$_anonymous__1udf83);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s5k_1 = [null, null, null, null, tmp_1, null, null, null, null, lazy(tmp_2, MentionableSelectComponent$Companion$$childSerializers$_anonymous__1udf83_0)];
  }
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_21();
    return Companion_instance_22;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.MentionableSelectComponent', this, 10);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('customId', true);
    tmp0_serialDesc.dy('placeholder', true);
    tmp0_serialDesc.dy('defaultValues', true);
    tmp0_serialDesc.dy('minValues', true);
    tmp0_serialDesc.dy('maxValues', true);
    tmp0_serialDesc.dy('required', true);
    tmp0_serialDesc.dy('disabled', true);
    tmp0_serialDesc.dy('values', true);
    this.t5k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).u5k = function (encoder, value) {
    var tmp0_desc = this.t5k_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().s5k_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.v5k_1 === 7)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.v5k_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.w5k_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.w5k_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.customId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.customId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.placeholder == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.placeholder);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.defaultValues == null)) {
      tmp1_output.ns(tmp0_desc, 4, tmp2_cached[4].n1(), value.defaultValues);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.minValues == null)) {
      tmp1_output.ns(tmp0_desc, 5, IntSerializer_getInstance(), value.minValues);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.maxValues == null)) {
      tmp1_output.ns(tmp0_desc, 6, IntSerializer_getInstance(), value.maxValues);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.required == null)) {
      tmp1_output.ns(tmp0_desc, 7, BooleanSerializer_getInstance(), value.required);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.disabled == null)) {
      tmp1_output.ns(tmp0_desc, 8, BooleanSerializer_getInstance(), value.disabled);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.values == null)) {
      tmp1_output.ns(tmp0_desc, 9, tmp2_cached[9].n1(), value.values);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_19).tn = function (encoder, value) {
    return this.u5k(encoder, value instanceof MentionableSelectComponent ? value : THROW_CCE());
  };
  protoOf($serializer_19).un = function (decoder) {
    var tmp0_desc = this.t5k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.uq(tmp0_desc);
    var tmp15_cached = Companion_getInstance_22().s5k_1;
    if (tmp14_input.kr()) {
      tmp4_local0 = tmp14_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.ir(tmp0_desc, 4, tmp15_cached[4].n1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.ir(tmp0_desc, 9, tmp15_cached[9].n1(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.ir(tmp0_desc, 4, tmp15_cached[4].n1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.ir(tmp0_desc, 9, tmp15_cached[9].n1(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.vq(tmp0_desc);
    return MentionableSelectComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  protoOf($serializer_19).sn = function () {
    return this.t5k_1;
  };
  protoOf($serializer_19).sy = function () {
    var tmp0_cached = Companion_getInstance_22().s5k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[4].n1()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[9].n1())];
  };
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function MentionableSelectComponent_init_$Init$(seen0, type, id, customId, placeholder, defaultValues, minValues, maxValues, required, disabled, values, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_19().t5k_1);
    }
    if (0 === (seen0 & 1))
      $this.v5k_1 = 7;
    else
      $this.v5k_1 = type;
    if (0 === (seen0 & 2))
      $this.w5k_1 = null;
    else
      $this.w5k_1 = id;
    if (0 === (seen0 & 4))
      $this.customId = null;
    else
      $this.customId = customId;
    if (0 === (seen0 & 8))
      $this.placeholder = null;
    else
      $this.placeholder = placeholder;
    if (0 === (seen0 & 16))
      $this.defaultValues = null;
    else
      $this.defaultValues = defaultValues;
    if (0 === (seen0 & 32))
      $this.minValues = null;
    else
      $this.minValues = minValues;
    if (0 === (seen0 & 64))
      $this.maxValues = null;
    else
      $this.maxValues = maxValues;
    if (0 === (seen0 & 128))
      $this.required = null;
    else
      $this.required = required;
    if (0 === (seen0 & 256))
      $this.disabled = null;
    else
      $this.disabled = disabled;
    if (0 === (seen0 & 512))
      $this.values = null;
    else
      $this.values = values;
    return $this;
  }
  function MentionableSelectComponent_init_$Create$(seen0, type, id, customId, placeholder, defaultValues, minValues, maxValues, required, disabled, values, serializationConstructorMarker) {
    return MentionableSelectComponent_init_$Init$(seen0, type, id, customId, placeholder, defaultValues, minValues, maxValues, required, disabled, values, serializationConstructorMarker, objectCreate(protoOf(MentionableSelectComponent)));
  }
  function MentionableSelectComponent() {
    Companion_getInstance_22();
    this.v5k_1 = 7;
    this.w5k_1 = null;
    this.customId = null;
    this.placeholder = null;
    this.defaultValues = null;
    this.minValues = null;
    this.maxValues = null;
    this.required = null;
    this.disabled = null;
    this.values = null;
  }
  protoOf(MentionableSelectComponent).o5b = function (_set____db54di) {
    this.v5k_1 = _set____db54di;
  };
  protoOf(MentionableSelectComponent).p5b = function () {
    return this.v5k_1;
  };
  protoOf(MentionableSelectComponent).o5i = function (_set____db54di) {
    this.w5k_1 = _set____db54di;
  };
  protoOf(MentionableSelectComponent).s5a = function () {
    return this.w5k_1;
  };
  protoOf(MentionableSelectComponent).e5j = function (_set____db54di) {
    this.customId = _set____db54di;
  };
  protoOf(MentionableSelectComponent).f5j = function () {
    return this.customId;
  };
  protoOf(MentionableSelectComponent).b5e = function (_set____db54di) {
    this.placeholder = _set____db54di;
  };
  protoOf(MentionableSelectComponent).c5e = function () {
    return this.placeholder;
  };
  protoOf(MentionableSelectComponent).l5k = function (_set____db54di) {
    this.defaultValues = _set____db54di;
  };
  protoOf(MentionableSelectComponent).m5k = function () {
    return this.defaultValues;
  };
  protoOf(MentionableSelectComponent).r5j = function (_set____db54di) {
    this.minValues = _set____db54di;
  };
  protoOf(MentionableSelectComponent).s5j = function () {
    return this.minValues;
  };
  protoOf(MentionableSelectComponent).t5j = function (_set____db54di) {
    this.maxValues = _set____db54di;
  };
  protoOf(MentionableSelectComponent).u5j = function () {
    return this.maxValues;
  };
  protoOf(MentionableSelectComponent).v5j = function (_set____db54di) {
    this.required = _set____db54di;
  };
  protoOf(MentionableSelectComponent).w5j = function () {
    return this.required;
  };
  protoOf(MentionableSelectComponent).i5j = function (_set____db54di) {
    this.disabled = _set____db54di;
  };
  protoOf(MentionableSelectComponent).j5j = function () {
    return this.disabled;
  };
  protoOf(MentionableSelectComponent).x5j = function (_set____db54di) {
    this.values = _set____db54di;
  };
  protoOf(MentionableSelectComponent).p2 = function () {
    return this.values;
  };
  function ChannelSelectComponent$Companion$$childSerializers$_anonymous__edg37w() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().kb(), IntSerializer_getInstance());
  }
  function ChannelSelectComponent$Companion$$childSerializers$_anonymous__edg37w_0() {
    return new ReferenceArraySerializer(getKClass(SelectDefaultValue), $serializer_getInstance_35());
  }
  function ChannelSelectComponent$Companion$$childSerializers$_anonymous__edg37w_1() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pb(), StringSerializer_getInstance());
  }
  function Companion_22() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ChannelSelectComponent$Companion$$childSerializers$_anonymous__edg37w);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, ChannelSelectComponent$Companion$$childSerializers$_anonymous__edg37w_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x5k_1 = [null, null, null, tmp_1, null, tmp_3, null, null, null, null, lazy(tmp_4, ChannelSelectComponent$Companion$$childSerializers$_anonymous__edg37w_1)];
  }
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_22();
    return Companion_instance_23;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.ChannelSelectComponent', this, 11);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('customId', true);
    tmp0_serialDesc.dy('channelTypes', true);
    tmp0_serialDesc.dy('placeholder', true);
    tmp0_serialDesc.dy('defaultValues', true);
    tmp0_serialDesc.dy('minValues', true);
    tmp0_serialDesc.dy('maxValues', true);
    tmp0_serialDesc.dy('required', true);
    tmp0_serialDesc.dy('disabled', true);
    tmp0_serialDesc.dy('values', true);
    this.y5k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).z5k = function (encoder, value) {
    var tmp0_desc = this.y5k_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().x5k_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.a5l_1 === 8)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.a5l_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.b5l_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.b5l_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.customId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.customId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.channelTypes == null)) {
      tmp1_output.ns(tmp0_desc, 3, tmp2_cached[3].n1(), value.channelTypes);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.placeholder == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.placeholder);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.defaultValues == null)) {
      tmp1_output.ns(tmp0_desc, 5, tmp2_cached[5].n1(), value.defaultValues);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.minValues == null)) {
      tmp1_output.ns(tmp0_desc, 6, IntSerializer_getInstance(), value.minValues);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.maxValues == null)) {
      tmp1_output.ns(tmp0_desc, 7, IntSerializer_getInstance(), value.maxValues);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.required == null)) {
      tmp1_output.ns(tmp0_desc, 8, BooleanSerializer_getInstance(), value.required);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.disabled == null)) {
      tmp1_output.ns(tmp0_desc, 9, BooleanSerializer_getInstance(), value.disabled);
    }
    if (tmp1_output.rs(tmp0_desc, 10) ? true : !(value.values == null)) {
      tmp1_output.ns(tmp0_desc, 10, tmp2_cached[10].n1(), value.values);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_20).tn = function (encoder, value) {
    return this.z5k(encoder, value instanceof ChannelSelectComponent ? value : THROW_CCE());
  };
  protoOf($serializer_20).un = function (decoder) {
    var tmp0_desc = this.y5k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_input = decoder.uq(tmp0_desc);
    var tmp16_cached = Companion_getInstance_23().x5k_1;
    if (tmp15_input.kr()) {
      tmp4_local0 = tmp15_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.ir(tmp0_desc, 3, tmp16_cached[3].n1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.ir(tmp0_desc, 5, tmp16_cached[5].n1(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.ir(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.ir(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.ir(tmp0_desc, 10, tmp16_cached[10].n1(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.ir(tmp0_desc, 3, tmp16_cached[3].n1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.ir(tmp0_desc, 5, tmp16_cached[5].n1(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.ir(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.ir(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.ir(tmp0_desc, 10, tmp16_cached[10].n1(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.vq(tmp0_desc);
    return ChannelSelectComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_20).sn = function () {
    return this.y5k_1;
  };
  protoOf($serializer_20).sy = function () {
    var tmp0_cached = Companion_getInstance_23().x5k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3].n1()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[5].n1()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[10].n1())];
  };
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function ChannelSelectComponent_init_$Init$(seen0, type, id, customId, channelTypes, placeholder, defaultValues, minValues, maxValues, required, disabled, values, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_20().y5k_1);
    }
    if (0 === (seen0 & 1))
      $this.a5l_1 = 8;
    else
      $this.a5l_1 = type;
    if (0 === (seen0 & 2))
      $this.b5l_1 = null;
    else
      $this.b5l_1 = id;
    if (0 === (seen0 & 4))
      $this.customId = null;
    else
      $this.customId = customId;
    if (0 === (seen0 & 8))
      $this.channelTypes = null;
    else
      $this.channelTypes = channelTypes;
    if (0 === (seen0 & 16))
      $this.placeholder = null;
    else
      $this.placeholder = placeholder;
    if (0 === (seen0 & 32))
      $this.defaultValues = null;
    else
      $this.defaultValues = defaultValues;
    if (0 === (seen0 & 64))
      $this.minValues = null;
    else
      $this.minValues = minValues;
    if (0 === (seen0 & 128))
      $this.maxValues = null;
    else
      $this.maxValues = maxValues;
    if (0 === (seen0 & 256))
      $this.required = null;
    else
      $this.required = required;
    if (0 === (seen0 & 512))
      $this.disabled = null;
    else
      $this.disabled = disabled;
    if (0 === (seen0 & 1024))
      $this.values = null;
    else
      $this.values = values;
    return $this;
  }
  function ChannelSelectComponent_init_$Create$(seen0, type, id, customId, channelTypes, placeholder, defaultValues, minValues, maxValues, required, disabled, values, serializationConstructorMarker) {
    return ChannelSelectComponent_init_$Init$(seen0, type, id, customId, channelTypes, placeholder, defaultValues, minValues, maxValues, required, disabled, values, serializationConstructorMarker, objectCreate(protoOf(ChannelSelectComponent)));
  }
  function ChannelSelectComponent() {
    Companion_getInstance_23();
    this.a5l_1 = 8;
    this.b5l_1 = null;
    this.customId = null;
    this.channelTypes = null;
    this.placeholder = null;
    this.defaultValues = null;
    this.minValues = null;
    this.maxValues = null;
    this.required = null;
    this.disabled = null;
    this.values = null;
  }
  protoOf(ChannelSelectComponent).o5b = function (_set____db54di) {
    this.a5l_1 = _set____db54di;
  };
  protoOf(ChannelSelectComponent).p5b = function () {
    return this.a5l_1;
  };
  protoOf(ChannelSelectComponent).o5i = function (_set____db54di) {
    this.b5l_1 = _set____db54di;
  };
  protoOf(ChannelSelectComponent).s5a = function () {
    return this.b5l_1;
  };
  protoOf(ChannelSelectComponent).e5j = function (_set____db54di) {
    this.customId = _set____db54di;
  };
  protoOf(ChannelSelectComponent).f5j = function () {
    return this.customId;
  };
  protoOf(ChannelSelectComponent).c5l = function (_set____db54di) {
    this.channelTypes = _set____db54di;
  };
  protoOf(ChannelSelectComponent).d5l = function () {
    return this.channelTypes;
  };
  protoOf(ChannelSelectComponent).b5e = function (_set____db54di) {
    this.placeholder = _set____db54di;
  };
  protoOf(ChannelSelectComponent).c5e = function () {
    return this.placeholder;
  };
  protoOf(ChannelSelectComponent).l5k = function (_set____db54di) {
    this.defaultValues = _set____db54di;
  };
  protoOf(ChannelSelectComponent).m5k = function () {
    return this.defaultValues;
  };
  protoOf(ChannelSelectComponent).r5j = function (_set____db54di) {
    this.minValues = _set____db54di;
  };
  protoOf(ChannelSelectComponent).s5j = function () {
    return this.minValues;
  };
  protoOf(ChannelSelectComponent).t5j = function (_set____db54di) {
    this.maxValues = _set____db54di;
  };
  protoOf(ChannelSelectComponent).u5j = function () {
    return this.maxValues;
  };
  protoOf(ChannelSelectComponent).v5j = function (_set____db54di) {
    this.required = _set____db54di;
  };
  protoOf(ChannelSelectComponent).w5j = function () {
    return this.required;
  };
  protoOf(ChannelSelectComponent).i5j = function (_set____db54di) {
    this.disabled = _set____db54di;
  };
  protoOf(ChannelSelectComponent).j5j = function () {
    return this.disabled;
  };
  protoOf(ChannelSelectComponent).x5j = function (_set____db54di) {
    this.values = _set____db54di;
  };
  protoOf(ChannelSelectComponent).p2 = function () {
    return this.values;
  };
  function SectionComponent$Companion$$childSerializers$_anonymous__qitrpu() {
    return new ReferenceArraySerializer(getKClass(MessageComponent), MessageComponentSerializer_getInstance());
  }
  function Companion_23() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e5l_1 = [null, null, lazy(tmp_0, SectionComponent$Companion$$childSerializers$_anonymous__qitrpu), null];
  }
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.SectionComponent', this, 4);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('components', true);
    tmp0_serialDesc.dy('accessory', true);
    this.f5l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).g5l = function (encoder, value) {
    var tmp0_desc = this.f5l_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().e5l_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.h5l_1 === 9)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.h5l_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.i5l_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.i5l_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.components == null)) {
      tmp1_output.ns(tmp0_desc, 2, tmp2_cached[2].n1(), value.components);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.accessory == null)) {
      tmp1_output.ns(tmp0_desc, 3, MessageComponentSerializer_getInstance(), value.accessory);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_21).tn = function (encoder, value) {
    return this.g5l(encoder, value instanceof SectionComponent ? value : THROW_CCE());
  };
  protoOf($serializer_21).un = function (decoder) {
    var tmp0_desc = this.f5l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.uq(tmp0_desc);
    var tmp9_cached = Companion_getInstance_24().e5l_1;
    if (tmp8_input.kr()) {
      tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ir(tmp0_desc, 2, tmp9_cached[2].n1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ir(tmp0_desc, 3, MessageComponentSerializer_getInstance(), tmp7_local3);
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
            tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ir(tmp0_desc, 2, tmp9_cached[2].n1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ir(tmp0_desc, 3, MessageComponentSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.vq(tmp0_desc);
    return SectionComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_21).sn = function () {
    return this.f5l_1;
  };
  protoOf($serializer_21).sy = function () {
    var tmp0_cached = Companion_getInstance_24().e5l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[2].n1()), get_nullable(MessageComponentSerializer_getInstance())];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function SectionComponent_init_$Init$(seen0, type, id, components, accessory, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_21().f5l_1);
    }
    if (0 === (seen0 & 1))
      $this.h5l_1 = 9;
    else
      $this.h5l_1 = type;
    if (0 === (seen0 & 2))
      $this.i5l_1 = null;
    else
      $this.i5l_1 = id;
    if (0 === (seen0 & 4))
      $this.components = null;
    else
      $this.components = components;
    if (0 === (seen0 & 8))
      $this.accessory = null;
    else
      $this.accessory = accessory;
    return $this;
  }
  function SectionComponent_init_$Create$(seen0, type, id, components, accessory, serializationConstructorMarker) {
    return SectionComponent_init_$Init$(seen0, type, id, components, accessory, serializationConstructorMarker, objectCreate(protoOf(SectionComponent)));
  }
  function SectionComponent() {
    Companion_getInstance_24();
    this.h5l_1 = 9;
    this.i5l_1 = null;
    this.components = null;
    this.accessory = null;
  }
  protoOf(SectionComponent).o5b = function (_set____db54di) {
    this.h5l_1 = _set____db54di;
  };
  protoOf(SectionComponent).p5b = function () {
    return this.h5l_1;
  };
  protoOf(SectionComponent).o5i = function (_set____db54di) {
    this.i5l_1 = _set____db54di;
  };
  protoOf(SectionComponent).s5a = function () {
    return this.i5l_1;
  };
  protoOf(SectionComponent).b5i = function (_set____db54di) {
    this.components = _set____db54di;
  };
  protoOf(SectionComponent).c5i = function () {
    return this.components;
  };
  protoOf(SectionComponent).j5l = function (_set____db54di) {
    this.accessory = _set____db54di;
  };
  protoOf(SectionComponent).k5l = function () {
    return this.accessory;
  };
  function Companion_24() {
  }
  var Companion_instance_25;
  function Companion_getInstance_25() {
    return Companion_instance_25;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.TextDisplayComponent', this, 3);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('content', true);
    this.l5l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).m5l = function (encoder, value) {
    var tmp0_desc = this.l5l_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.n5l_1 === 10)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.n5l_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.o5l_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.o5l_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.content == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.content);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_22).tn = function (encoder, value) {
    return this.m5l(encoder, value instanceof TextDisplayComponent ? value : THROW_CCE());
  };
  protoOf($serializer_22).un = function (decoder) {
    var tmp0_desc = this.l5l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.uq(tmp0_desc);
    if (tmp7_input.kr()) {
      tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
    return TextDisplayComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_22).sn = function () {
    return this.l5l_1;
  };
  protoOf($serializer_22).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function TextDisplayComponent_init_$Init$(seen0, type, id, content, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_22().l5l_1);
    }
    if (0 === (seen0 & 1))
      $this.n5l_1 = 10;
    else
      $this.n5l_1 = type;
    if (0 === (seen0 & 2))
      $this.o5l_1 = null;
    else
      $this.o5l_1 = id;
    if (0 === (seen0 & 4))
      $this.content = null;
    else
      $this.content = content;
    return $this;
  }
  function TextDisplayComponent_init_$Create$(seen0, type, id, content, serializationConstructorMarker) {
    return TextDisplayComponent_init_$Init$(seen0, type, id, content, serializationConstructorMarker, objectCreate(protoOf(TextDisplayComponent)));
  }
  function TextDisplayComponent() {
    this.n5l_1 = 10;
    this.o5l_1 = null;
    this.content = null;
  }
  protoOf(TextDisplayComponent).o5b = function (_set____db54di) {
    this.n5l_1 = _set____db54di;
  };
  protoOf(TextDisplayComponent).p5b = function () {
    return this.n5l_1;
  };
  protoOf(TextDisplayComponent).o5i = function (_set____db54di) {
    this.o5l_1 = _set____db54di;
  };
  protoOf(TextDisplayComponent).s5a = function () {
    return this.o5l_1;
  };
  protoOf(TextDisplayComponent).b5a = function (_set____db54di) {
    this.content = _set____db54di;
  };
  protoOf(TextDisplayComponent).d1b = function () {
    return this.content;
  };
  function Companion_25() {
  }
  var Companion_instance_26;
  function Companion_getInstance_26() {
    return Companion_instance_26;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.ThumbnailComponent', this, 5);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('media', true);
    tmp0_serialDesc.dy('description', true);
    tmp0_serialDesc.dy('spoiler', true);
    this.p5l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).q5l = function (encoder, value) {
    var tmp0_desc = this.p5l_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.r5l_1 === 11)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.r5l_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.s5l_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.s5l_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.media == null)) {
      tmp1_output.ns(tmp0_desc, 2, $serializer_getInstance_38(), value.media);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.description == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.spoiler == null)) {
      tmp1_output.ns(tmp0_desc, 4, BooleanSerializer_getInstance(), value.spoiler);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_23).tn = function (encoder, value) {
    return this.q5l(encoder, value instanceof ThumbnailComponent ? value : THROW_CCE());
  };
  protoOf($serializer_23).un = function (decoder) {
    var tmp0_desc = this.p5l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.uq(tmp0_desc);
    if (tmp9_input.kr()) {
      tmp4_local0 = tmp9_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ir(tmp0_desc, 2, $serializer_getInstance_38(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ir(tmp0_desc, 2, $serializer_getInstance_38(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.vq(tmp0_desc);
    return ThumbnailComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_23).sn = function () {
    return this.p5l_1;
  };
  protoOf($serializer_23).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable($serializer_getInstance_38()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  };
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function ThumbnailComponent_init_$Init$(seen0, type, id, media, description, spoiler, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_23().p5l_1);
    }
    if (0 === (seen0 & 1))
      $this.r5l_1 = 11;
    else
      $this.r5l_1 = type;
    if (0 === (seen0 & 2))
      $this.s5l_1 = null;
    else
      $this.s5l_1 = id;
    if (0 === (seen0 & 4))
      $this.media = null;
    else
      $this.media = media;
    if (0 === (seen0 & 8))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 16))
      $this.spoiler = null;
    else
      $this.spoiler = spoiler;
    return $this;
  }
  function ThumbnailComponent_init_$Create$(seen0, type, id, media, description, spoiler, serializationConstructorMarker) {
    return ThumbnailComponent_init_$Init$(seen0, type, id, media, description, spoiler, serializationConstructorMarker, objectCreate(protoOf(ThumbnailComponent)));
  }
  function ThumbnailComponent() {
    this.r5l_1 = 11;
    this.s5l_1 = null;
    this.media = null;
    this.description = null;
    this.spoiler = null;
  }
  protoOf(ThumbnailComponent).o5b = function (_set____db54di) {
    this.r5l_1 = _set____db54di;
  };
  protoOf(ThumbnailComponent).p5b = function () {
    return this.r5l_1;
  };
  protoOf(ThumbnailComponent).o5i = function (_set____db54di) {
    this.s5l_1 = _set____db54di;
  };
  protoOf(ThumbnailComponent).s5a = function () {
    return this.s5l_1;
  };
  protoOf(ThumbnailComponent).t5l = function (_set____db54di) {
    this.media = _set____db54di;
  };
  protoOf(ThumbnailComponent).u5l = function () {
    return this.media;
  };
  protoOf(ThumbnailComponent).v5a = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(ThumbnailComponent).w5a = function () {
    return this.description;
  };
  protoOf(ThumbnailComponent).v5l = function (_set____db54di) {
    this.spoiler = _set____db54di;
  };
  protoOf(ThumbnailComponent).w5l = function () {
    return this.spoiler;
  };
  function MediaGalleryComponent$Companion$$childSerializers$_anonymous__69byjf() {
    return new ReferenceArraySerializer(getKClass(MediaGalleryItem), $serializer_getInstance_37());
  }
  function Companion_26() {
    Companion_instance_27 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.x5l_1 = [null, null, lazy(tmp_0, MediaGalleryComponent$Companion$$childSerializers$_anonymous__69byjf)];
  }
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_26();
    return Companion_instance_27;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.MediaGalleryComponent', this, 3);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('items', true);
    this.y5l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).z5l = function (encoder, value) {
    var tmp0_desc = this.y5l_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().x5l_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.a5m_1 === 12)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.a5m_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.b5m_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.b5m_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.items == null)) {
      tmp1_output.ns(tmp0_desc, 2, tmp2_cached[2].n1(), value.items);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_24).tn = function (encoder, value) {
    return this.z5l(encoder, value instanceof MediaGalleryComponent ? value : THROW_CCE());
  };
  protoOf($serializer_24).un = function (decoder) {
    var tmp0_desc = this.y5l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.uq(tmp0_desc);
    var tmp8_cached = Companion_getInstance_27().x5l_1;
    if (tmp7_input.kr()) {
      tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ir(tmp0_desc, 2, tmp8_cached[2].n1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ir(tmp0_desc, 2, tmp8_cached[2].n1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vq(tmp0_desc);
    return MediaGalleryComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_24).sn = function () {
    return this.y5l_1;
  };
  protoOf($serializer_24).sy = function () {
    var tmp0_cached = Companion_getInstance_27().x5l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[2].n1())];
  };
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function MediaGalleryComponent_init_$Init$(seen0, type, id, items, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_24().y5l_1);
    }
    if (0 === (seen0 & 1))
      $this.a5m_1 = 12;
    else
      $this.a5m_1 = type;
    if (0 === (seen0 & 2))
      $this.b5m_1 = null;
    else
      $this.b5m_1 = id;
    if (0 === (seen0 & 4))
      $this.items = null;
    else
      $this.items = items;
    return $this;
  }
  function MediaGalleryComponent_init_$Create$(seen0, type, id, items, serializationConstructorMarker) {
    return MediaGalleryComponent_init_$Init$(seen0, type, id, items, serializationConstructorMarker, objectCreate(protoOf(MediaGalleryComponent)));
  }
  function MediaGalleryComponent() {
    Companion_getInstance_27();
    this.a5m_1 = 12;
    this.b5m_1 = null;
    this.items = null;
  }
  protoOf(MediaGalleryComponent).o5b = function (_set____db54di) {
    this.a5m_1 = _set____db54di;
  };
  protoOf(MediaGalleryComponent).p5b = function () {
    return this.a5m_1;
  };
  protoOf(MediaGalleryComponent).o5i = function (_set____db54di) {
    this.b5m_1 = _set____db54di;
  };
  protoOf(MediaGalleryComponent).s5a = function () {
    return this.b5m_1;
  };
  protoOf(MediaGalleryComponent).c5m = function (_set____db54di) {
    this.items = _set____db54di;
  };
  protoOf(MediaGalleryComponent).d5m = function () {
    return this.items;
  };
  function Companion_27() {
  }
  var Companion_instance_28;
  function Companion_getInstance_28() {
    return Companion_instance_28;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.FileComponent', this, 6);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('file', true);
    tmp0_serialDesc.dy('spoiler', true);
    tmp0_serialDesc.dy('name', true);
    tmp0_serialDesc.dy('size', true);
    this.e5m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).f5m = function (encoder, value) {
    var tmp0_desc = this.e5m_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.g5m_1 === 13)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.g5m_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.h5m_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.h5m_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.file == null)) {
      tmp1_output.ns(tmp0_desc, 2, $serializer_getInstance_38(), value.file);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.spoiler == null)) {
      tmp1_output.ns(tmp0_desc, 3, BooleanSerializer_getInstance(), value.spoiler);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.name == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.size == null)) {
      tmp1_output.ns(tmp0_desc, 5, IntSerializer_getInstance(), value.size);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_25).tn = function (encoder, value) {
    return this.f5m(encoder, value instanceof FileComponent ? value : THROW_CCE());
  };
  protoOf($serializer_25).un = function (decoder) {
    var tmp0_desc = this.e5m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.uq(tmp0_desc);
    if (tmp10_input.kr()) {
      tmp4_local0 = tmp10_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.ir(tmp0_desc, 2, $serializer_getInstance_38(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.ir(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.ir(tmp0_desc, 2, $serializer_getInstance_38(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.ir(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.vq(tmp0_desc);
    return FileComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_25).sn = function () {
    return this.e5m_1;
  };
  protoOf($serializer_25).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable($serializer_getInstance_38()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 == null)
      new $serializer_25();
    return $serializer_instance_25;
  }
  function FileComponent_init_$Init$(seen0, type, id, file, spoiler, name, size, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_25().e5m_1);
    }
    if (0 === (seen0 & 1))
      $this.g5m_1 = 13;
    else
      $this.g5m_1 = type;
    if (0 === (seen0 & 2))
      $this.h5m_1 = null;
    else
      $this.h5m_1 = id;
    if (0 === (seen0 & 4))
      $this.file = null;
    else
      $this.file = file;
    if (0 === (seen0 & 8))
      $this.spoiler = null;
    else
      $this.spoiler = spoiler;
    if (0 === (seen0 & 16))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 32))
      $this.size = null;
    else
      $this.size = size;
    return $this;
  }
  function FileComponent_init_$Create$(seen0, type, id, file, spoiler, name, size, serializationConstructorMarker) {
    return FileComponent_init_$Init$(seen0, type, id, file, spoiler, name, size, serializationConstructorMarker, objectCreate(protoOf(FileComponent)));
  }
  function FileComponent() {
    this.g5m_1 = 13;
    this.h5m_1 = null;
    this.file = null;
    this.spoiler = null;
    this.name = null;
    this.size = null;
  }
  protoOf(FileComponent).o5b = function (_set____db54di) {
    this.g5m_1 = _set____db54di;
  };
  protoOf(FileComponent).p5b = function () {
    return this.g5m_1;
  };
  protoOf(FileComponent).o5i = function (_set____db54di) {
    this.h5m_1 = _set____db54di;
  };
  protoOf(FileComponent).s5a = function () {
    return this.h5m_1;
  };
  protoOf(FileComponent).i5m = function (_set____db54di) {
    this.file = _set____db54di;
  };
  protoOf(FileComponent).j5m = function () {
    return this.file;
  };
  protoOf(FileComponent).v5l = function (_set____db54di) {
    this.spoiler = _set____db54di;
  };
  protoOf(FileComponent).w5l = function () {
    return this.spoiler;
  };
  protoOf(FileComponent).u5b = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(FileComponent).m = function () {
    return this.name;
  };
  protoOf(FileComponent).y5a = function (_set____db54di) {
    this.size = _set____db54di;
  };
  protoOf(FileComponent).e1 = function () {
    return this.size;
  };
  function Companion_28() {
  }
  var Companion_instance_29;
  function Companion_getInstance_29() {
    return Companion_instance_29;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.SeparatorComponent', this, 4);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('divider', true);
    tmp0_serialDesc.dy('spacing', true);
    this.k5m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).l5m = function (encoder, value) {
    var tmp0_desc = this.k5m_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.m5m_1 === 14)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.m5m_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.n5m_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.n5m_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.divider == null)) {
      tmp1_output.ns(tmp0_desc, 2, BooleanSerializer_getInstance(), value.divider);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.spacing == null)) {
      tmp1_output.ns(tmp0_desc, 3, IntSerializer_getInstance(), value.spacing);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_26).tn = function (encoder, value) {
    return this.l5m(encoder, value instanceof SeparatorComponent ? value : THROW_CCE());
  };
  protoOf($serializer_26).un = function (decoder) {
    var tmp0_desc = this.k5m_1;
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
      tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ir(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
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
            tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ir(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.vq(tmp0_desc);
    return SeparatorComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_26).sn = function () {
    return this.k5m_1;
  };
  protoOf($serializer_26).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 == null)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function SeparatorComponent_init_$Init$(seen0, type, id, divider, spacing, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_26().k5m_1);
    }
    if (0 === (seen0 & 1))
      $this.m5m_1 = 14;
    else
      $this.m5m_1 = type;
    if (0 === (seen0 & 2))
      $this.n5m_1 = null;
    else
      $this.n5m_1 = id;
    if (0 === (seen0 & 4))
      $this.divider = null;
    else
      $this.divider = divider;
    if (0 === (seen0 & 8))
      $this.spacing = null;
    else
      $this.spacing = spacing;
    return $this;
  }
  function SeparatorComponent_init_$Create$(seen0, type, id, divider, spacing, serializationConstructorMarker) {
    return SeparatorComponent_init_$Init$(seen0, type, id, divider, spacing, serializationConstructorMarker, objectCreate(protoOf(SeparatorComponent)));
  }
  function SeparatorComponent() {
    this.m5m_1 = 14;
    this.n5m_1 = null;
    this.divider = null;
    this.spacing = null;
  }
  protoOf(SeparatorComponent).o5b = function (_set____db54di) {
    this.m5m_1 = _set____db54di;
  };
  protoOf(SeparatorComponent).p5b = function () {
    return this.m5m_1;
  };
  protoOf(SeparatorComponent).o5i = function (_set____db54di) {
    this.n5m_1 = _set____db54di;
  };
  protoOf(SeparatorComponent).s5a = function () {
    return this.n5m_1;
  };
  protoOf(SeparatorComponent).o5m = function (_set____db54di) {
    this.divider = _set____db54di;
  };
  protoOf(SeparatorComponent).p5m = function () {
    return this.divider;
  };
  protoOf(SeparatorComponent).q5m = function (_set____db54di) {
    this.spacing = _set____db54di;
  };
  protoOf(SeparatorComponent).r5m = function () {
    return this.spacing;
  };
  function ContainerComponent$Companion$$childSerializers$_anonymous__81yjwy() {
    return new ReferenceArraySerializer(getKClass(MessageComponent), MessageComponentSerializer_getInstance());
  }
  function Companion_29() {
    Companion_instance_30 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s5m_1 = [null, null, lazy(tmp_0, ContainerComponent$Companion$$childSerializers$_anonymous__81yjwy), null, null];
  }
  var Companion_instance_30;
  function Companion_getInstance_30() {
    if (Companion_instance_30 == null)
      new Companion_29();
    return Companion_instance_30;
  }
  function $serializer_27() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.ContainerComponent', this, 5);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('components', true);
    tmp0_serialDesc.dy('accentColor', true);
    tmp0_serialDesc.dy('spoiler', true);
    this.t5m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).u5m = function (encoder, value) {
    var tmp0_desc = this.t5m_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().s5m_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.v5m_1 === 17)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.v5m_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.w5m_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.w5m_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.components == null)) {
      tmp1_output.ns(tmp0_desc, 2, tmp2_cached[2].n1(), value.components);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.accentColor == null)) {
      tmp1_output.ns(tmp0_desc, 3, IntSerializer_getInstance(), value.accentColor);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.spoiler == null)) {
      tmp1_output.ns(tmp0_desc, 4, BooleanSerializer_getInstance(), value.spoiler);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_27).tn = function (encoder, value) {
    return this.u5m(encoder, value instanceof ContainerComponent ? value : THROW_CCE());
  };
  protoOf($serializer_27).un = function (decoder) {
    var tmp0_desc = this.t5m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.uq(tmp0_desc);
    var tmp10_cached = Companion_getInstance_30().s5m_1;
    if (tmp9_input.kr()) {
      tmp4_local0 = tmp9_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ir(tmp0_desc, 2, tmp10_cached[2].n1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ir(tmp0_desc, 2, tmp10_cached[2].n1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.vq(tmp0_desc);
    return ContainerComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_27).sn = function () {
    return this.t5m_1;
  };
  protoOf($serializer_27).sy = function () {
    var tmp0_cached = Companion_getInstance_30().s5m_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[2].n1()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  };
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function ContainerComponent_init_$Init$(seen0, type, id, components, accentColor, spoiler, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().t5m_1);
    }
    if (0 === (seen0 & 1))
      $this.v5m_1 = 17;
    else
      $this.v5m_1 = type;
    if (0 === (seen0 & 2))
      $this.w5m_1 = null;
    else
      $this.w5m_1 = id;
    if (0 === (seen0 & 4))
      $this.components = null;
    else
      $this.components = components;
    if (0 === (seen0 & 8))
      $this.accentColor = null;
    else
      $this.accentColor = accentColor;
    if (0 === (seen0 & 16))
      $this.spoiler = null;
    else
      $this.spoiler = spoiler;
    return $this;
  }
  function ContainerComponent_init_$Create$(seen0, type, id, components, accentColor, spoiler, serializationConstructorMarker) {
    return ContainerComponent_init_$Init$(seen0, type, id, components, accentColor, spoiler, serializationConstructorMarker, objectCreate(protoOf(ContainerComponent)));
  }
  function ContainerComponent() {
    Companion_getInstance_30();
    this.v5m_1 = 17;
    this.w5m_1 = null;
    this.components = null;
    this.accentColor = null;
    this.spoiler = null;
  }
  protoOf(ContainerComponent).o5b = function (_set____db54di) {
    this.v5m_1 = _set____db54di;
  };
  protoOf(ContainerComponent).p5b = function () {
    return this.v5m_1;
  };
  protoOf(ContainerComponent).o5i = function (_set____db54di) {
    this.w5m_1 = _set____db54di;
  };
  protoOf(ContainerComponent).s5a = function () {
    return this.w5m_1;
  };
  protoOf(ContainerComponent).b5i = function (_set____db54di) {
    this.components = _set____db54di;
  };
  protoOf(ContainerComponent).c5i = function () {
    return this.components;
  };
  protoOf(ContainerComponent).x5m = function (_set____db54di) {
    this.accentColor = _set____db54di;
  };
  protoOf(ContainerComponent).y5m = function () {
    return this.accentColor;
  };
  protoOf(ContainerComponent).v5l = function (_set____db54di) {
    this.spoiler = _set____db54di;
  };
  protoOf(ContainerComponent).w5l = function () {
    return this.spoiler;
  };
  function Companion_30() {
  }
  var Companion_instance_31;
  function Companion_getInstance_31() {
    return Companion_instance_31;
  }
  function $serializer_28() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.LabelComponent', this, 5);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('label', true);
    tmp0_serialDesc.dy('description', true);
    tmp0_serialDesc.dy('component', true);
    this.z5m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).a5n = function (encoder, value) {
    var tmp0_desc = this.z5m_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.b5n_1 === 18)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.b5n_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.c5n_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.c5n_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.label == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.label);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.description == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.component == null)) {
      tmp1_output.ns(tmp0_desc, 4, MessageComponentSerializer_getInstance(), value.component);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_28).tn = function (encoder, value) {
    return this.a5n(encoder, value instanceof LabelComponent ? value : THROW_CCE());
  };
  protoOf($serializer_28).un = function (decoder) {
    var tmp0_desc = this.z5m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.uq(tmp0_desc);
    if (tmp9_input.kr()) {
      tmp4_local0 = tmp9_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ir(tmp0_desc, 4, MessageComponentSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ir(tmp0_desc, 4, MessageComponentSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.vq(tmp0_desc);
    return LabelComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_28).sn = function () {
    return this.z5m_1;
  };
  protoOf($serializer_28).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(MessageComponentSerializer_getInstance())];
  };
  var $serializer_instance_28;
  function $serializer_getInstance_28() {
    if ($serializer_instance_28 == null)
      new $serializer_28();
    return $serializer_instance_28;
  }
  function LabelComponent_init_$Init$(seen0, type, id, label, description, component, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_28().z5m_1);
    }
    if (0 === (seen0 & 1))
      $this.b5n_1 = 18;
    else
      $this.b5n_1 = type;
    if (0 === (seen0 & 2))
      $this.c5n_1 = null;
    else
      $this.c5n_1 = id;
    if (0 === (seen0 & 4))
      $this.label = null;
    else
      $this.label = label;
    if (0 === (seen0 & 8))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 16))
      $this.component = null;
    else
      $this.component = component;
    return $this;
  }
  function LabelComponent_init_$Create$(seen0, type, id, label, description, component, serializationConstructorMarker) {
    return LabelComponent_init_$Init$(seen0, type, id, label, description, component, serializationConstructorMarker, objectCreate(protoOf(LabelComponent)));
  }
  function LabelComponent() {
    this.b5n_1 = 18;
    this.c5n_1 = null;
    this.label = null;
    this.description = null;
    this.component = null;
  }
  protoOf(LabelComponent).o5b = function (_set____db54di) {
    this.b5n_1 = _set____db54di;
  };
  protoOf(LabelComponent).p5b = function () {
    return this.b5n_1;
  };
  protoOf(LabelComponent).o5i = function (_set____db54di) {
    this.c5n_1 = _set____db54di;
  };
  protoOf(LabelComponent).s5a = function () {
    return this.c5n_1;
  };
  protoOf(LabelComponent).a5j = function (_set____db54di) {
    this.label = _set____db54di;
  };
  protoOf(LabelComponent).b5j = function () {
    return this.label;
  };
  protoOf(LabelComponent).v5a = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(LabelComponent).w5a = function () {
    return this.description;
  };
  protoOf(LabelComponent).d5n = function (_set____db54di) {
    this.component = _set____db54di;
  };
  protoOf(LabelComponent).e5n = function () {
    return this.component;
  };
  function FileUploadComponent$Companion$$childSerializers$_anonymous__en3kvq() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pb(), StringSerializer_getInstance());
  }
  function Companion_31() {
    Companion_instance_32 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.f5n_1 = [null, null, null, null, null, null, lazy(tmp_0, FileUploadComponent$Companion$$childSerializers$_anonymous__en3kvq)];
  }
  var Companion_instance_32;
  function Companion_getInstance_32() {
    if (Companion_instance_32 == null)
      new Companion_31();
    return Companion_instance_32;
  }
  function $serializer_29() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.FileUploadComponent', this, 7);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('customId', true);
    tmp0_serialDesc.dy('minValues', true);
    tmp0_serialDesc.dy('maxValues', true);
    tmp0_serialDesc.dy('required', true);
    tmp0_serialDesc.dy('values', true);
    this.g5n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_29).h5n = function (encoder, value) {
    var tmp0_desc = this.g5n_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_32().f5n_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.i5n_1 === 19)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.i5n_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.j5n_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.j5n_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.customId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.customId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.minValues == null)) {
      tmp1_output.ns(tmp0_desc, 3, IntSerializer_getInstance(), value.minValues);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.maxValues == null)) {
      tmp1_output.ns(tmp0_desc, 4, IntSerializer_getInstance(), value.maxValues);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.required == null)) {
      tmp1_output.ns(tmp0_desc, 5, BooleanSerializer_getInstance(), value.required);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.values == null)) {
      tmp1_output.ns(tmp0_desc, 6, tmp2_cached[6].n1(), value.values);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_29).tn = function (encoder, value) {
    return this.h5n(encoder, value instanceof FileUploadComponent ? value : THROW_CCE());
  };
  protoOf($serializer_29).un = function (decoder) {
    var tmp0_desc = this.g5n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.uq(tmp0_desc);
    var tmp12_cached = Companion_getInstance_32().f5n_1;
    if (tmp11_input.kr()) {
      tmp4_local0 = tmp11_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.ir(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.ir(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.ir(tmp0_desc, 6, tmp12_cached[6].n1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.ir(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.ir(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.ir(tmp0_desc, 6, tmp12_cached[6].n1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.vq(tmp0_desc);
    return FileUploadComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_29).sn = function () {
    return this.g5n_1;
  };
  protoOf($serializer_29).sy = function () {
    var tmp0_cached = Companion_getInstance_32().f5n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[6].n1())];
  };
  var $serializer_instance_29;
  function $serializer_getInstance_29() {
    if ($serializer_instance_29 == null)
      new $serializer_29();
    return $serializer_instance_29;
  }
  function FileUploadComponent_init_$Init$(seen0, type, id, customId, minValues, maxValues, required, values, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_29().g5n_1);
    }
    if (0 === (seen0 & 1))
      $this.i5n_1 = 19;
    else
      $this.i5n_1 = type;
    if (0 === (seen0 & 2))
      $this.j5n_1 = null;
    else
      $this.j5n_1 = id;
    if (0 === (seen0 & 4))
      $this.customId = null;
    else
      $this.customId = customId;
    if (0 === (seen0 & 8))
      $this.minValues = null;
    else
      $this.minValues = minValues;
    if (0 === (seen0 & 16))
      $this.maxValues = null;
    else
      $this.maxValues = maxValues;
    if (0 === (seen0 & 32))
      $this.required = null;
    else
      $this.required = required;
    if (0 === (seen0 & 64))
      $this.values = null;
    else
      $this.values = values;
    return $this;
  }
  function FileUploadComponent_init_$Create$(seen0, type, id, customId, minValues, maxValues, required, values, serializationConstructorMarker) {
    return FileUploadComponent_init_$Init$(seen0, type, id, customId, minValues, maxValues, required, values, serializationConstructorMarker, objectCreate(protoOf(FileUploadComponent)));
  }
  function FileUploadComponent() {
    Companion_getInstance_32();
    this.i5n_1 = 19;
    this.j5n_1 = null;
    this.customId = null;
    this.minValues = null;
    this.maxValues = null;
    this.required = null;
    this.values = null;
  }
  protoOf(FileUploadComponent).o5b = function (_set____db54di) {
    this.i5n_1 = _set____db54di;
  };
  protoOf(FileUploadComponent).p5b = function () {
    return this.i5n_1;
  };
  protoOf(FileUploadComponent).o5i = function (_set____db54di) {
    this.j5n_1 = _set____db54di;
  };
  protoOf(FileUploadComponent).s5a = function () {
    return this.j5n_1;
  };
  protoOf(FileUploadComponent).e5j = function (_set____db54di) {
    this.customId = _set____db54di;
  };
  protoOf(FileUploadComponent).f5j = function () {
    return this.customId;
  };
  protoOf(FileUploadComponent).r5j = function (_set____db54di) {
    this.minValues = _set____db54di;
  };
  protoOf(FileUploadComponent).s5j = function () {
    return this.minValues;
  };
  protoOf(FileUploadComponent).t5j = function (_set____db54di) {
    this.maxValues = _set____db54di;
  };
  protoOf(FileUploadComponent).u5j = function () {
    return this.maxValues;
  };
  protoOf(FileUploadComponent).v5j = function (_set____db54di) {
    this.required = _set____db54di;
  };
  protoOf(FileUploadComponent).w5j = function () {
    return this.required;
  };
  protoOf(FileUploadComponent).x5j = function (_set____db54di) {
    this.values = _set____db54di;
  };
  protoOf(FileUploadComponent).p2 = function () {
    return this.values;
  };
  function RadioGroupComponent$Companion$$childSerializers$_anonymous__pnl4mn() {
    return new ReferenceArraySerializer(getKClass(ComponentChoice), $serializer_getInstance_36());
  }
  function Companion_32() {
    Companion_instance_33 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k5n_1 = [null, null, null, lazy(tmp_0, RadioGroupComponent$Companion$$childSerializers$_anonymous__pnl4mn), null, null];
  }
  var Companion_instance_33;
  function Companion_getInstance_33() {
    if (Companion_instance_33 == null)
      new Companion_32();
    return Companion_instance_33;
  }
  function $serializer_30() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.RadioGroupComponent', this, 6);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('customId', true);
    tmp0_serialDesc.dy('options', true);
    tmp0_serialDesc.dy('required', true);
    tmp0_serialDesc.dy('value', true);
    this.l5n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_30).m5n = function (encoder, value) {
    var tmp0_desc = this.l5n_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_33().k5n_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.n5n_1 === 21)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.n5n_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.o5n_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.o5n_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.customId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.customId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.options == null)) {
      tmp1_output.ns(tmp0_desc, 3, tmp2_cached[3].n1(), value.options);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.required == null)) {
      tmp1_output.ns(tmp0_desc, 4, BooleanSerializer_getInstance(), value.required);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.value == null)) {
      tmp1_output.ns(tmp0_desc, 5, StringSerializer_getInstance(), value.value);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_30).tn = function (encoder, value) {
    return this.m5n(encoder, value instanceof RadioGroupComponent ? value : THROW_CCE());
  };
  protoOf($serializer_30).un = function (decoder) {
    var tmp0_desc = this.l5n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.uq(tmp0_desc);
    var tmp11_cached = Companion_getInstance_33().k5n_1;
    if (tmp10_input.kr()) {
      tmp4_local0 = tmp10_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.ir(tmp0_desc, 3, tmp11_cached[3].n1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.ir(tmp0_desc, 3, tmp11_cached[3].n1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.vq(tmp0_desc);
    return RadioGroupComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_30).sn = function () {
    return this.l5n_1;
  };
  protoOf($serializer_30).sy = function () {
    var tmp0_cached = Companion_getInstance_33().k5n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3].n1()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_30;
  function $serializer_getInstance_30() {
    if ($serializer_instance_30 == null)
      new $serializer_30();
    return $serializer_instance_30;
  }
  function RadioGroupComponent_init_$Init$(seen0, type, id, customId, options, required, value, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_30().l5n_1);
    }
    if (0 === (seen0 & 1))
      $this.n5n_1 = 21;
    else
      $this.n5n_1 = type;
    if (0 === (seen0 & 2))
      $this.o5n_1 = null;
    else
      $this.o5n_1 = id;
    if (0 === (seen0 & 4))
      $this.customId = null;
    else
      $this.customId = customId;
    if (0 === (seen0 & 8))
      $this.options = null;
    else
      $this.options = options;
    if (0 === (seen0 & 16))
      $this.required = null;
    else
      $this.required = required;
    if (0 === (seen0 & 32))
      $this.value = null;
    else
      $this.value = value;
    return $this;
  }
  function RadioGroupComponent_init_$Create$(seen0, type, id, customId, options, required, value, serializationConstructorMarker) {
    return RadioGroupComponent_init_$Init$(seen0, type, id, customId, options, required, value, serializationConstructorMarker, objectCreate(protoOf(RadioGroupComponent)));
  }
  function RadioGroupComponent() {
    Companion_getInstance_33();
    this.n5n_1 = 21;
    this.o5n_1 = null;
    this.customId = null;
    this.options = null;
    this.required = null;
    this.value = null;
  }
  protoOf(RadioGroupComponent).o5b = function (_set____db54di) {
    this.n5n_1 = _set____db54di;
  };
  protoOf(RadioGroupComponent).p5b = function () {
    return this.n5n_1;
  };
  protoOf(RadioGroupComponent).o5i = function (_set____db54di) {
    this.o5n_1 = _set____db54di;
  };
  protoOf(RadioGroupComponent).s5a = function () {
    return this.o5n_1;
  };
  protoOf(RadioGroupComponent).e5j = function (_set____db54di) {
    this.customId = _set____db54di;
  };
  protoOf(RadioGroupComponent).f5j = function () {
    return this.customId;
  };
  protoOf(RadioGroupComponent).p5n = function (_set____db54di) {
    this.options = _set____db54di;
  };
  protoOf(RadioGroupComponent).q5j = function () {
    return this.options;
  };
  protoOf(RadioGroupComponent).v5j = function (_set____db54di) {
    this.required = _set____db54di;
  };
  protoOf(RadioGroupComponent).w5j = function () {
    return this.required;
  };
  protoOf(RadioGroupComponent).l5e = function (_set____db54di) {
    this.value = _set____db54di;
  };
  protoOf(RadioGroupComponent).n1 = function () {
    return this.value;
  };
  function CheckboxGroupComponent$Companion$$childSerializers$_anonymous__5ys1br() {
    return new ReferenceArraySerializer(getKClass(ComponentChoice), $serializer_getInstance_36());
  }
  function CheckboxGroupComponent$Companion$$childSerializers$_anonymous__5ys1br_0() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pb(), StringSerializer_getInstance());
  }
  function Companion_33() {
    Companion_instance_34 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, CheckboxGroupComponent$Companion$$childSerializers$_anonymous__5ys1br);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q5n_1 = [null, null, null, tmp_1, null, null, null, lazy(tmp_2, CheckboxGroupComponent$Companion$$childSerializers$_anonymous__5ys1br_0)];
  }
  var Companion_instance_34;
  function Companion_getInstance_34() {
    if (Companion_instance_34 == null)
      new Companion_33();
    return Companion_instance_34;
  }
  function $serializer_31() {
    $serializer_instance_31 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.CheckboxGroupComponent', this, 8);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('customId', true);
    tmp0_serialDesc.dy('options', true);
    tmp0_serialDesc.dy('minValues', true);
    tmp0_serialDesc.dy('maxValues', true);
    tmp0_serialDesc.dy('required', true);
    tmp0_serialDesc.dy('values', true);
    this.r5n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_31).s5n = function (encoder, value) {
    var tmp0_desc = this.r5n_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_34().q5n_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.t5n_1 === 22)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.t5n_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.u5n_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.u5n_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.customId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.customId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.options == null)) {
      tmp1_output.ns(tmp0_desc, 3, tmp2_cached[3].n1(), value.options);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.minValues == null)) {
      tmp1_output.ns(tmp0_desc, 4, IntSerializer_getInstance(), value.minValues);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.maxValues == null)) {
      tmp1_output.ns(tmp0_desc, 5, IntSerializer_getInstance(), value.maxValues);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.required == null)) {
      tmp1_output.ns(tmp0_desc, 6, BooleanSerializer_getInstance(), value.required);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.values == null)) {
      tmp1_output.ns(tmp0_desc, 7, tmp2_cached[7].n1(), value.values);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_31).tn = function (encoder, value) {
    return this.s5n(encoder, value instanceof CheckboxGroupComponent ? value : THROW_CCE());
  };
  protoOf($serializer_31).un = function (decoder) {
    var tmp0_desc = this.r5n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.uq(tmp0_desc);
    var tmp13_cached = Companion_getInstance_34().q5n_1;
    if (tmp12_input.kr()) {
      tmp4_local0 = tmp12_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.ir(tmp0_desc, 3, tmp13_cached[3].n1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.ir(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.ir(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.ir(tmp0_desc, 7, tmp13_cached[7].n1(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.ir(tmp0_desc, 3, tmp13_cached[3].n1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.ir(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.ir(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.ir(tmp0_desc, 7, tmp13_cached[7].n1(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.vq(tmp0_desc);
    return CheckboxGroupComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_31).sn = function () {
    return this.r5n_1;
  };
  protoOf($serializer_31).sy = function () {
    var tmp0_cached = Companion_getInstance_34().q5n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3].n1()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[7].n1())];
  };
  var $serializer_instance_31;
  function $serializer_getInstance_31() {
    if ($serializer_instance_31 == null)
      new $serializer_31();
    return $serializer_instance_31;
  }
  function CheckboxGroupComponent_init_$Init$(seen0, type, id, customId, options, minValues, maxValues, required, values, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_31().r5n_1);
    }
    if (0 === (seen0 & 1))
      $this.t5n_1 = 22;
    else
      $this.t5n_1 = type;
    if (0 === (seen0 & 2))
      $this.u5n_1 = null;
    else
      $this.u5n_1 = id;
    if (0 === (seen0 & 4))
      $this.customId = null;
    else
      $this.customId = customId;
    if (0 === (seen0 & 8))
      $this.options = null;
    else
      $this.options = options;
    if (0 === (seen0 & 16))
      $this.minValues = null;
    else
      $this.minValues = minValues;
    if (0 === (seen0 & 32))
      $this.maxValues = null;
    else
      $this.maxValues = maxValues;
    if (0 === (seen0 & 64))
      $this.required = null;
    else
      $this.required = required;
    if (0 === (seen0 & 128))
      $this.values = null;
    else
      $this.values = values;
    return $this;
  }
  function CheckboxGroupComponent_init_$Create$(seen0, type, id, customId, options, minValues, maxValues, required, values, serializationConstructorMarker) {
    return CheckboxGroupComponent_init_$Init$(seen0, type, id, customId, options, minValues, maxValues, required, values, serializationConstructorMarker, objectCreate(protoOf(CheckboxGroupComponent)));
  }
  function CheckboxGroupComponent() {
    Companion_getInstance_34();
    this.t5n_1 = 22;
    this.u5n_1 = null;
    this.customId = null;
    this.options = null;
    this.minValues = null;
    this.maxValues = null;
    this.required = null;
    this.values = null;
  }
  protoOf(CheckboxGroupComponent).o5b = function (_set____db54di) {
    this.t5n_1 = _set____db54di;
  };
  protoOf(CheckboxGroupComponent).p5b = function () {
    return this.t5n_1;
  };
  protoOf(CheckboxGroupComponent).o5i = function (_set____db54di) {
    this.u5n_1 = _set____db54di;
  };
  protoOf(CheckboxGroupComponent).s5a = function () {
    return this.u5n_1;
  };
  protoOf(CheckboxGroupComponent).e5j = function (_set____db54di) {
    this.customId = _set____db54di;
  };
  protoOf(CheckboxGroupComponent).f5j = function () {
    return this.customId;
  };
  protoOf(CheckboxGroupComponent).p5n = function (_set____db54di) {
    this.options = _set____db54di;
  };
  protoOf(CheckboxGroupComponent).q5j = function () {
    return this.options;
  };
  protoOf(CheckboxGroupComponent).r5j = function (_set____db54di) {
    this.minValues = _set____db54di;
  };
  protoOf(CheckboxGroupComponent).s5j = function () {
    return this.minValues;
  };
  protoOf(CheckboxGroupComponent).t5j = function (_set____db54di) {
    this.maxValues = _set____db54di;
  };
  protoOf(CheckboxGroupComponent).u5j = function () {
    return this.maxValues;
  };
  protoOf(CheckboxGroupComponent).v5j = function (_set____db54di) {
    this.required = _set____db54di;
  };
  protoOf(CheckboxGroupComponent).w5j = function () {
    return this.required;
  };
  protoOf(CheckboxGroupComponent).x5j = function (_set____db54di) {
    this.values = _set____db54di;
  };
  protoOf(CheckboxGroupComponent).p2 = function () {
    return this.values;
  };
  function Companion_34() {
  }
  var Companion_instance_35;
  function Companion_getInstance_35() {
    return Companion_instance_35;
  }
  function $serializer_32() {
    $serializer_instance_32 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.CheckboxComponent', this, 5);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('customId', true);
    tmp0_serialDesc.dy('default', true);
    tmp0_serialDesc.dy('value', true);
    this.v5n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_32).w5n = function (encoder, value) {
    var tmp0_desc = this.v5n_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.x5n_1 === 23)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.x5n_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.y5n_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.y5n_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.customId == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.customId);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.default == null)) {
      tmp1_output.ns(tmp0_desc, 3, BooleanSerializer_getInstance(), value.default);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.value == null)) {
      tmp1_output.ns(tmp0_desc, 4, BooleanSerializer_getInstance(), value.value);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_32).tn = function (encoder, value) {
    return this.w5n(encoder, value instanceof CheckboxComponent ? value : THROW_CCE());
  };
  protoOf($serializer_32).un = function (decoder) {
    var tmp0_desc = this.v5n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.uq(tmp0_desc);
    if (tmp9_input.kr()) {
      tmp4_local0 = tmp9_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ir(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ir(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.vq(tmp0_desc);
    return CheckboxComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_32).sn = function () {
    return this.v5n_1;
  };
  protoOf($serializer_32).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  };
  var $serializer_instance_32;
  function $serializer_getInstance_32() {
    if ($serializer_instance_32 == null)
      new $serializer_32();
    return $serializer_instance_32;
  }
  function CheckboxComponent_init_$Init$(seen0, type, id, customId, default_0, value, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_32().v5n_1);
    }
    if (0 === (seen0 & 1))
      $this.x5n_1 = 23;
    else
      $this.x5n_1 = type;
    if (0 === (seen0 & 2))
      $this.y5n_1 = null;
    else
      $this.y5n_1 = id;
    if (0 === (seen0 & 4))
      $this.customId = null;
    else
      $this.customId = customId;
    if (0 === (seen0 & 8))
      $this.default = null;
    else
      $this.default = default_0;
    if (0 === (seen0 & 16))
      $this.value = null;
    else
      $this.value = value;
    return $this;
  }
  function CheckboxComponent_init_$Create$(seen0, type, id, customId, default_0, value, serializationConstructorMarker) {
    return CheckboxComponent_init_$Init$(seen0, type, id, customId, default_0, value, serializationConstructorMarker, objectCreate(protoOf(CheckboxComponent)));
  }
  function CheckboxComponent() {
    this.x5n_1 = 23;
    this.y5n_1 = null;
    this.customId = null;
    this.default = null;
    this.value = null;
  }
  protoOf(CheckboxComponent).o5b = function (_set____db54di) {
    this.x5n_1 = _set____db54di;
  };
  protoOf(CheckboxComponent).p5b = function () {
    return this.x5n_1;
  };
  protoOf(CheckboxComponent).o5i = function (_set____db54di) {
    this.y5n_1 = _set____db54di;
  };
  protoOf(CheckboxComponent).s5a = function () {
    return this.y5n_1;
  };
  protoOf(CheckboxComponent).e5j = function (_set____db54di) {
    this.customId = _set____db54di;
  };
  protoOf(CheckboxComponent).f5j = function () {
    return this.customId;
  };
  protoOf(CheckboxComponent).z5n = function (_set____db54di) {
    this.default = _set____db54di;
  };
  protoOf(CheckboxComponent).a5o = function () {
    return this.default;
  };
  protoOf(CheckboxComponent).b5o = function (_set____db54di) {
    this.value = _set____db54di;
  };
  protoOf(CheckboxComponent).n1 = function () {
    return this.value;
  };
  function Companion_35() {
  }
  var Companion_instance_36;
  function Companion_getInstance_36() {
    return Companion_instance_36;
  }
  function $serializer_33() {
    $serializer_instance_33 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.UnknownMessageComponent', this, 3);
    tmp0_serialDesc.dy('type', true);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('rawJson', true);
    this.c5o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_33).d5o = function (encoder, value) {
    var tmp0_desc = this.c5o_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.e5o_1 == null)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.e5o_1);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.f5o_1 == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.f5o_1);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.rawJson == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.rawJson);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_33).tn = function (encoder, value) {
    return this.d5o(encoder, value instanceof UnknownMessageComponent ? value : THROW_CCE());
  };
  protoOf($serializer_33).un = function (decoder) {
    var tmp0_desc = this.c5o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.uq(tmp0_desc);
    if (tmp7_input.kr()) {
      tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
    return UnknownMessageComponent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_33).sn = function () {
    return this.c5o_1;
  };
  protoOf($serializer_33).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_33;
  function $serializer_getInstance_33() {
    if ($serializer_instance_33 == null)
      new $serializer_33();
    return $serializer_instance_33;
  }
  function UnknownMessageComponent_init_$Init$(seen0, type, id, rawJson, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_33().c5o_1);
    }
    if (0 === (seen0 & 1))
      $this.e5o_1 = null;
    else
      $this.e5o_1 = type;
    if (0 === (seen0 & 2))
      $this.f5o_1 = null;
    else
      $this.f5o_1 = id;
    if (0 === (seen0 & 4))
      $this.rawJson = null;
    else
      $this.rawJson = rawJson;
    return $this;
  }
  function UnknownMessageComponent_init_$Create$(seen0, type, id, rawJson, serializationConstructorMarker) {
    return UnknownMessageComponent_init_$Init$(seen0, type, id, rawJson, serializationConstructorMarker, objectCreate(protoOf(UnknownMessageComponent)));
  }
  function UnknownMessageComponent() {
    this.e5o_1 = null;
    this.f5o_1 = null;
    this.rawJson = null;
  }
  protoOf(UnknownMessageComponent).o5b = function (_set____db54di) {
    this.e5o_1 = _set____db54di;
  };
  protoOf(UnknownMessageComponent).p5b = function () {
    return this.e5o_1;
  };
  protoOf(UnknownMessageComponent).o5i = function (_set____db54di) {
    this.f5o_1 = _set____db54di;
  };
  protoOf(UnknownMessageComponent).s5a = function () {
    return this.f5o_1;
  };
  protoOf(UnknownMessageComponent).g5o = function (_set____db54di) {
    this.rawJson = _set____db54di;
  };
  protoOf(UnknownMessageComponent).h5o = function () {
    return this.rawJson;
  };
  function Companion_36() {
  }
  var Companion_instance_37;
  function Companion_getInstance_37() {
    return Companion_instance_37;
  }
  function $serializer_34() {
    $serializer_instance_34 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.SelectOption', this, 5);
    tmp0_serialDesc.dy('label', true);
    tmp0_serialDesc.dy('value', true);
    tmp0_serialDesc.dy('description', true);
    tmp0_serialDesc.dy('emoji', true);
    tmp0_serialDesc.dy('default', true);
    this.i5o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_34).j5o = function (encoder, value) {
    var tmp0_desc = this.i5o_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.label == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.label);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.value == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.value);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.description == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.emoji == null)) {
      tmp1_output.ns(tmp0_desc, 3, $serializer_getInstance_8(), value.emoji);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.default == null)) {
      tmp1_output.ns(tmp0_desc, 4, BooleanSerializer_getInstance(), value.default);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_34).tn = function (encoder, value) {
    return this.j5o(encoder, value instanceof SelectOption ? value : THROW_CCE());
  };
  protoOf($serializer_34).un = function (decoder) {
    var tmp0_desc = this.i5o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.uq(tmp0_desc);
    if (tmp9_input.kr()) {
      tmp4_local0 = tmp9_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ir(tmp0_desc, 3, $serializer_getInstance_8(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ir(tmp0_desc, 3, $serializer_getInstance_8(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ir(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.vq(tmp0_desc);
    return SelectOption_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_34).sn = function () {
    return this.i5o_1;
  };
  protoOf($serializer_34).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_8()), get_nullable(BooleanSerializer_getInstance())];
  };
  var $serializer_instance_34;
  function $serializer_getInstance_34() {
    if ($serializer_instance_34 == null)
      new $serializer_34();
    return $serializer_instance_34;
  }
  function SelectOption_init_$Init$(seen0, label, value, description, emoji, default_0, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_34().i5o_1);
    }
    if (0 === (seen0 & 1))
      $this.label = null;
    else
      $this.label = label;
    if (0 === (seen0 & 2))
      $this.value = null;
    else
      $this.value = value;
    if (0 === (seen0 & 4))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 8))
      $this.emoji = null;
    else
      $this.emoji = emoji;
    if (0 === (seen0 & 16))
      $this.default = null;
    else
      $this.default = default_0;
    return $this;
  }
  function SelectOption_init_$Create$(seen0, label, value, description, emoji, default_0, serializationConstructorMarker) {
    return SelectOption_init_$Init$(seen0, label, value, description, emoji, default_0, serializationConstructorMarker, objectCreate(protoOf(SelectOption)));
  }
  function SelectOption() {
    this.label = null;
    this.value = null;
    this.description = null;
    this.emoji = null;
    this.default = null;
  }
  protoOf(SelectOption).a5j = function (_set____db54di) {
    this.label = _set____db54di;
  };
  protoOf(SelectOption).b5j = function () {
    return this.label;
  };
  protoOf(SelectOption).l5e = function (_set____db54di) {
    this.value = _set____db54di;
  };
  protoOf(SelectOption).n1 = function () {
    return this.value;
  };
  protoOf(SelectOption).v5a = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(SelectOption).w5a = function () {
    return this.description;
  };
  protoOf(SelectOption).c5j = function (_set____db54di) {
    this.emoji = _set____db54di;
  };
  protoOf(SelectOption).d5j = function () {
    return this.emoji;
  };
  protoOf(SelectOption).z5n = function (_set____db54di) {
    this.default = _set____db54di;
  };
  protoOf(SelectOption).a5o = function () {
    return this.default;
  };
  function Companion_37() {
  }
  var Companion_instance_38;
  function Companion_getInstance_38() {
    return Companion_instance_38;
  }
  function $serializer_35() {
    $serializer_instance_35 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.SelectDefaultValue', this, 2);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('type', true);
    this.k5o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_35).l5o = function (encoder, value) {
    var tmp0_desc = this.k5o_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.type == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.type);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_35).tn = function (encoder, value) {
    return this.l5o(encoder, value instanceof SelectDefaultValue ? value : THROW_CCE());
  };
  protoOf($serializer_35).un = function (decoder) {
    var tmp0_desc = this.k5o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.uq(tmp0_desc);
    if (tmp6_input.kr()) {
      tmp4_local0 = tmp6_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.vq(tmp0_desc);
    return SelectDefaultValue_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_35).sn = function () {
    return this.k5o_1;
  };
  protoOf($serializer_35).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_35;
  function $serializer_getInstance_35() {
    if ($serializer_instance_35 == null)
      new $serializer_35();
    return $serializer_instance_35;
  }
  function SelectDefaultValue_init_$Init$(seen0, id, type, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_35().k5o_1);
    }
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.type = null;
    else
      $this.type = type;
    return $this;
  }
  function SelectDefaultValue_init_$Create$(seen0, id, type, serializationConstructorMarker) {
    return SelectDefaultValue_init_$Init$(seen0, id, type, serializationConstructorMarker, objectCreate(protoOf(SelectDefaultValue)));
  }
  function SelectDefaultValue() {
    this.id = null;
    this.type = null;
  }
  protoOf(SelectDefaultValue).r5a = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(SelectDefaultValue).s5a = function () {
    return this.id;
  };
  protoOf(SelectDefaultValue).w5c = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(SelectDefaultValue).p5b = function () {
    return this.type;
  };
  function Companion_38() {
  }
  var Companion_instance_39;
  function Companion_getInstance_39() {
    return Companion_instance_39;
  }
  function $serializer_36() {
    $serializer_instance_36 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.ComponentChoice', this, 4);
    tmp0_serialDesc.dy('value', true);
    tmp0_serialDesc.dy('label', true);
    tmp0_serialDesc.dy('description', true);
    tmp0_serialDesc.dy('default', true);
    this.m5o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_36).n5o = function (encoder, value) {
    var tmp0_desc = this.m5o_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.value == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.value);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.label == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.label);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.description == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.default == null)) {
      tmp1_output.ns(tmp0_desc, 3, BooleanSerializer_getInstance(), value.default);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_36).tn = function (encoder, value) {
    return this.n5o(encoder, value instanceof ComponentChoice ? value : THROW_CCE());
  };
  protoOf($serializer_36).un = function (decoder) {
    var tmp0_desc = this.m5o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.uq(tmp0_desc);
    if (tmp8_input.kr()) {
      tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ir(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ir(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.vq(tmp0_desc);
    return ComponentChoice_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_36).sn = function () {
    return this.m5o_1;
  };
  protoOf($serializer_36).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  };
  var $serializer_instance_36;
  function $serializer_getInstance_36() {
    if ($serializer_instance_36 == null)
      new $serializer_36();
    return $serializer_instance_36;
  }
  function ComponentChoice_init_$Init$(seen0, value, label, description, default_0, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_36().m5o_1);
    }
    if (0 === (seen0 & 1))
      $this.value = null;
    else
      $this.value = value;
    if (0 === (seen0 & 2))
      $this.label = null;
    else
      $this.label = label;
    if (0 === (seen0 & 4))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 8))
      $this.default = null;
    else
      $this.default = default_0;
    return $this;
  }
  function ComponentChoice_init_$Create$(seen0, value, label, description, default_0, serializationConstructorMarker) {
    return ComponentChoice_init_$Init$(seen0, value, label, description, default_0, serializationConstructorMarker, objectCreate(protoOf(ComponentChoice)));
  }
  function ComponentChoice() {
    this.value = null;
    this.label = null;
    this.description = null;
    this.default = null;
  }
  protoOf(ComponentChoice).l5e = function (_set____db54di) {
    this.value = _set____db54di;
  };
  protoOf(ComponentChoice).n1 = function () {
    return this.value;
  };
  protoOf(ComponentChoice).a5j = function (_set____db54di) {
    this.label = _set____db54di;
  };
  protoOf(ComponentChoice).b5j = function () {
    return this.label;
  };
  protoOf(ComponentChoice).v5a = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(ComponentChoice).w5a = function () {
    return this.description;
  };
  protoOf(ComponentChoice).z5n = function (_set____db54di) {
    this.default = _set____db54di;
  };
  protoOf(ComponentChoice).a5o = function () {
    return this.default;
  };
  function Companion_39() {
  }
  var Companion_instance_40;
  function Companion_getInstance_40() {
    return Companion_instance_40;
  }
  function $serializer_37() {
    $serializer_instance_37 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.MediaGalleryItem', this, 3);
    tmp0_serialDesc.dy('media', true);
    tmp0_serialDesc.dy('description', true);
    tmp0_serialDesc.dy('spoiler', true);
    this.o5o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_37).p5o = function (encoder, value) {
    var tmp0_desc = this.o5o_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.media == null)) {
      tmp1_output.ns(tmp0_desc, 0, $serializer_getInstance_38(), value.media);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.description == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.description);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.spoiler == null)) {
      tmp1_output.ns(tmp0_desc, 2, BooleanSerializer_getInstance(), value.spoiler);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_37).tn = function (encoder, value) {
    return this.p5o(encoder, value instanceof MediaGalleryItem ? value : THROW_CCE());
  };
  protoOf($serializer_37).un = function (decoder) {
    var tmp0_desc = this.o5o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.uq(tmp0_desc);
    if (tmp7_input.kr()) {
      tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, $serializer_getInstance_38(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ir(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.ir(tmp0_desc, 0, $serializer_getInstance_38(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ir(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vq(tmp0_desc);
    return MediaGalleryItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_37).sn = function () {
    return this.o5o_1;
  };
  protoOf($serializer_37).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_38()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  };
  var $serializer_instance_37;
  function $serializer_getInstance_37() {
    if ($serializer_instance_37 == null)
      new $serializer_37();
    return $serializer_instance_37;
  }
  function MediaGalleryItem_init_$Init$(seen0, media, description, spoiler, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_37().o5o_1);
    }
    if (0 === (seen0 & 1))
      $this.media = null;
    else
      $this.media = media;
    if (0 === (seen0 & 2))
      $this.description = null;
    else
      $this.description = description;
    if (0 === (seen0 & 4))
      $this.spoiler = null;
    else
      $this.spoiler = spoiler;
    return $this;
  }
  function MediaGalleryItem_init_$Create$(seen0, media, description, spoiler, serializationConstructorMarker) {
    return MediaGalleryItem_init_$Init$(seen0, media, description, spoiler, serializationConstructorMarker, objectCreate(protoOf(MediaGalleryItem)));
  }
  function MediaGalleryItem() {
    this.media = null;
    this.description = null;
    this.spoiler = null;
  }
  protoOf(MediaGalleryItem).t5l = function (_set____db54di) {
    this.media = _set____db54di;
  };
  protoOf(MediaGalleryItem).u5l = function () {
    return this.media;
  };
  protoOf(MediaGalleryItem).v5a = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(MediaGalleryItem).w5a = function () {
    return this.description;
  };
  protoOf(MediaGalleryItem).v5l = function (_set____db54di) {
    this.spoiler = _set____db54di;
  };
  protoOf(MediaGalleryItem).w5l = function () {
    return this.spoiler;
  };
  function Companion_40() {
  }
  var Companion_instance_41;
  function Companion_getInstance_41() {
    return Companion_instance_41;
  }
  function $serializer_38() {
    $serializer_instance_38 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.UnfurledMediaItem', this, 9);
    tmp0_serialDesc.dy('url', true);
    tmp0_serialDesc.dy('proxyUrl', true);
    tmp0_serialDesc.dy('height', true);
    tmp0_serialDesc.dy('width', true);
    tmp0_serialDesc.dy('placeholder', true);
    tmp0_serialDesc.dy('placeholderVersion', true);
    tmp0_serialDesc.dy('contentType', true);
    tmp0_serialDesc.dy('flags', true);
    tmp0_serialDesc.dy('attachmentId', true);
    this.q5o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_38).r5o = function (encoder, value) {
    var tmp0_desc = this.q5o_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.url == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.url);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.proxyUrl == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.proxyUrl);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.height == null)) {
      tmp1_output.ns(tmp0_desc, 2, IntSerializer_getInstance(), value.height);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.width == null)) {
      tmp1_output.ns(tmp0_desc, 3, IntSerializer_getInstance(), value.width);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.placeholder == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.placeholder);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.placeholderVersion == null)) {
      tmp1_output.ns(tmp0_desc, 5, IntSerializer_getInstance(), value.placeholderVersion);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.contentType == null)) {
      tmp1_output.ns(tmp0_desc, 6, StringSerializer_getInstance(), value.contentType);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.flags == null)) {
      tmp1_output.ns(tmp0_desc, 7, IntSerializer_getInstance(), value.flags);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.attachmentId == null)) {
      tmp1_output.ns(tmp0_desc, 8, StringSerializer_getInstance(), value.attachmentId);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_38).tn = function (encoder, value) {
    return this.r5o(encoder, value instanceof UnfurledMediaItem ? value : THROW_CCE());
  };
  protoOf($serializer_38).un = function (decoder) {
    var tmp0_desc = this.q5o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_input = decoder.uq(tmp0_desc);
    if (tmp13_input.kr()) {
      tmp4_local0 = tmp13_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.ir(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.ir(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.ir(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.ir(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.ir(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.ir(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.ir(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.ir(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.ir(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.ir(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.vq(tmp0_desc);
    return UnfurledMediaItem_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_38).sn = function () {
    return this.q5o_1;
  };
  protoOf($serializer_38).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_38;
  function $serializer_getInstance_38() {
    if ($serializer_instance_38 == null)
      new $serializer_38();
    return $serializer_instance_38;
  }
  function UnfurledMediaItem_init_$Init$(seen0, url, proxyUrl, height, width, placeholder, placeholderVersion, contentType, flags, attachmentId, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_38().q5o_1);
    }
    if (0 === (seen0 & 1))
      $this.url = null;
    else
      $this.url = url;
    if (0 === (seen0 & 2))
      $this.proxyUrl = null;
    else
      $this.proxyUrl = proxyUrl;
    if (0 === (seen0 & 4))
      $this.height = null;
    else
      $this.height = height;
    if (0 === (seen0 & 8))
      $this.width = null;
    else
      $this.width = width;
    if (0 === (seen0 & 16))
      $this.placeholder = null;
    else
      $this.placeholder = placeholder;
    if (0 === (seen0 & 32))
      $this.placeholderVersion = null;
    else
      $this.placeholderVersion = placeholderVersion;
    if (0 === (seen0 & 64))
      $this.contentType = null;
    else
      $this.contentType = contentType;
    if (0 === (seen0 & 128))
      $this.flags = null;
    else
      $this.flags = flags;
    if (0 === (seen0 & 256))
      $this.attachmentId = null;
    else
      $this.attachmentId = attachmentId;
    return $this;
  }
  function UnfurledMediaItem_init_$Create$(seen0, url, proxyUrl, height, width, placeholder, placeholderVersion, contentType, flags, attachmentId, serializationConstructorMarker) {
    return UnfurledMediaItem_init_$Init$(seen0, url, proxyUrl, height, width, placeholder, placeholderVersion, contentType, flags, attachmentId, serializationConstructorMarker, objectCreate(protoOf(UnfurledMediaItem)));
  }
  function UnfurledMediaItem() {
    this.url = null;
    this.proxyUrl = null;
    this.height = null;
    this.width = null;
    this.placeholder = null;
    this.placeholderVersion = null;
    this.contentType = null;
    this.flags = null;
    this.attachmentId = null;
  }
  protoOf(UnfurledMediaItem).o5a = function (_set____db54di) {
    this.url = _set____db54di;
  };
  protoOf(UnfurledMediaItem).c3w = function () {
    return this.url;
  };
  protoOf(UnfurledMediaItem).z5a = function (_set____db54di) {
    this.proxyUrl = _set____db54di;
  };
  protoOf(UnfurledMediaItem).a5b = function () {
    return this.proxyUrl;
  };
  protoOf(UnfurledMediaItem).b5b = function (_set____db54di) {
    this.height = _set____db54di;
  };
  protoOf(UnfurledMediaItem).c5b = function () {
    return this.height;
  };
  protoOf(UnfurledMediaItem).d5b = function (_set____db54di) {
    this.width = _set____db54di;
  };
  protoOf(UnfurledMediaItem).e5b = function () {
    return this.width;
  };
  protoOf(UnfurledMediaItem).b5e = function (_set____db54di) {
    this.placeholder = _set____db54di;
  };
  protoOf(UnfurledMediaItem).c5e = function () {
    return this.placeholder;
  };
  protoOf(UnfurledMediaItem).d5e = function (_set____db54di) {
    this.placeholderVersion = _set____db54di;
  };
  protoOf(UnfurledMediaItem).e5e = function () {
    return this.placeholderVersion;
  };
  protoOf(UnfurledMediaItem).x5a = function (_set____db54di) {
    this.contentType = _set____db54di;
  };
  protoOf(UnfurledMediaItem).k3a = function () {
    return this.contentType;
  };
  protoOf(UnfurledMediaItem).y5g = function (_set____db54di) {
    this.flags = _set____db54di;
  };
  protoOf(UnfurledMediaItem).z5g = function () {
    return this.flags;
  };
  protoOf(UnfurledMediaItem).s5o = function (_set____db54di) {
    this.attachmentId = _set____db54di;
  };
  protoOf(UnfurledMediaItem).t5o = function () {
    return this.attachmentId;
  };
  function unknownComponent($this, jsonObject) {
    // Inline function 'kotlin.also' call
    var this_0 = new UnknownMessageComponent();
    var tmp = this_0;
    var tmp0_safe_receiver = jsonObject.i1b('type');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    tmp.e5o_1 = tmp1_safe_receiver == null ? null : get_intOrNull(tmp1_safe_receiver);
    var tmp_0 = this_0;
    var tmp2_safe_receiver = jsonObject.i1b('id');
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
    tmp_0.f5o_1 = tmp3_safe_receiver == null ? null : get_intOrNull(tmp3_safe_receiver);
    this_0.rawJson = jsonObject.toString();
    return this_0;
  }
  function unknownJson($this, jsonEncoder, component) {
    var tmp0_safe_receiver = component.rawJson;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.runCatching' call
      MessageComponentSerializer_getInstance();
      var tmp_0;
      try {
        // Inline function 'kotlin.Companion.success' call
        var value = get_jsonObject(jsonEncoder.a1b().v18(tmp0_safe_receiver));
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
      tmp = _Result___get_isFailure__impl__jpiriv(this_0) ? null : _Result___get_value__impl__bjfvqg(this_0);
    }
    var raw = tmp;
    if (!(raw == null)) {
      return raw;
    }
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    var tmp0_safe_receiver_0 = component.e5o_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      put(builder, 'type', tmp0_safe_receiver_0);
    }
    var tmp1_safe_receiver = component.f5o_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      put(builder, 'id', tmp1_safe_receiver);
    }
    return builder.g1a();
  }
  function MessageComponentSerializer() {
    MessageComponentSerializer_instance = this;
    this.u5o_1 = buildClassSerialDescriptor('work.socialhub.kdiscord.entity.MessageComponent', []);
  }
  protoOf(MessageComponentSerializer).sn = function () {
    return this.u5o_1;
  };
  protoOf(MessageComponentSerializer).un = function (decoder) {
    var tmp0_elvis_lhs = isInterface(decoder, JsonDecoder) ? decoder : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'MessageComponent can only be decoded from JSON';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var jsonDecoder = tmp;
    var element = jsonDecoder.b1b();
    var jsonObject = get_jsonObject(element);
    var tmp1_safe_receiver = jsonObject.i1b('type');
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonPrimitive(tmp1_safe_receiver);
    var tmp_0;
    switch (tmp2_safe_receiver == null ? null : get_intOrNull(tmp2_safe_receiver)) {
      case 1:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_0 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_1 = this_0.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_2 = serializer(this_1, createKType(getKClass(ActionRowComponent), arrayOf([]), false));
        var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
        tmp_0 = this_0.u18(tmp$ret$2, element);
        break;
      case 2:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_3 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_4 = this_3.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_5 = serializer(this_4, createKType(getKClass(ButtonComponent), arrayOf([]), false));
        var tmp$ret$5 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
        tmp_0 = this_3.u18(tmp$ret$5, element);
        break;
      case 3:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_6 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_7 = this_6.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_8 = serializer(this_7, createKType(getKClass(StringSelectComponent), arrayOf([]), false));
        var tmp$ret$8 = isInterface(this_8, KSerializer) ? this_8 : THROW_CCE();
        tmp_0 = this_6.u18(tmp$ret$8, element);
        break;
      case 4:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_9 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_10 = this_9.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_11 = serializer(this_10, createKType(getKClass(TextInputComponent), arrayOf([]), false));
        var tmp$ret$11 = isInterface(this_11, KSerializer) ? this_11 : THROW_CCE();
        tmp_0 = this_9.u18(tmp$ret$11, element);
        break;
      case 5:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_12 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_13 = this_12.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_14 = serializer(this_13, createKType(getKClass(UserSelectComponent), arrayOf([]), false));
        var tmp$ret$14 = isInterface(this_14, KSerializer) ? this_14 : THROW_CCE();
        tmp_0 = this_12.u18(tmp$ret$14, element);
        break;
      case 6:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_15 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_16 = this_15.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_17 = serializer(this_16, createKType(getKClass(RoleSelectComponent), arrayOf([]), false));
        var tmp$ret$17 = isInterface(this_17, KSerializer) ? this_17 : THROW_CCE();
        tmp_0 = this_15.u18(tmp$ret$17, element);
        break;
      case 7:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_18 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_19 = this_18.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_20 = serializer(this_19, createKType(getKClass(MentionableSelectComponent), arrayOf([]), false));
        var tmp$ret$20 = isInterface(this_20, KSerializer) ? this_20 : THROW_CCE();
        tmp_0 = this_18.u18(tmp$ret$20, element);
        break;
      case 8:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_21 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_22 = this_21.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_23 = serializer(this_22, createKType(getKClass(ChannelSelectComponent), arrayOf([]), false));
        var tmp$ret$23 = isInterface(this_23, KSerializer) ? this_23 : THROW_CCE();
        tmp_0 = this_21.u18(tmp$ret$23, element);
        break;
      case 9:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_24 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_25 = this_24.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_26 = serializer(this_25, createKType(getKClass(SectionComponent), arrayOf([]), false));
        var tmp$ret$26 = isInterface(this_26, KSerializer) ? this_26 : THROW_CCE();
        tmp_0 = this_24.u18(tmp$ret$26, element);
        break;
      case 10:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_27 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_28 = this_27.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_29 = serializer(this_28, createKType(getKClass(TextDisplayComponent), arrayOf([]), false));
        var tmp$ret$29 = isInterface(this_29, KSerializer) ? this_29 : THROW_CCE();
        tmp_0 = this_27.u18(tmp$ret$29, element);
        break;
      case 11:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_30 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_31 = this_30.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_32 = serializer(this_31, createKType(getKClass(ThumbnailComponent), arrayOf([]), false));
        var tmp$ret$32 = isInterface(this_32, KSerializer) ? this_32 : THROW_CCE();
        tmp_0 = this_30.u18(tmp$ret$32, element);
        break;
      case 12:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_33 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_34 = this_33.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_35 = serializer(this_34, createKType(getKClass(MediaGalleryComponent), arrayOf([]), false));
        var tmp$ret$35 = isInterface(this_35, KSerializer) ? this_35 : THROW_CCE();
        tmp_0 = this_33.u18(tmp$ret$35, element);
        break;
      case 13:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_36 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_37 = this_36.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_38 = serializer(this_37, createKType(getKClass(FileComponent), arrayOf([]), false));
        var tmp$ret$38 = isInterface(this_38, KSerializer) ? this_38 : THROW_CCE();
        tmp_0 = this_36.u18(tmp$ret$38, element);
        break;
      case 14:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_39 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_40 = this_39.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_41 = serializer(this_40, createKType(getKClass(SeparatorComponent), arrayOf([]), false));
        var tmp$ret$41 = isInterface(this_41, KSerializer) ? this_41 : THROW_CCE();
        tmp_0 = this_39.u18(tmp$ret$41, element);
        break;
      case 17:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_42 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_43 = this_42.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_44 = serializer(this_43, createKType(getKClass(ContainerComponent), arrayOf([]), false));
        var tmp$ret$44 = isInterface(this_44, KSerializer) ? this_44 : THROW_CCE();
        tmp_0 = this_42.u18(tmp$ret$44, element);
        break;
      case 18:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_45 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_46 = this_45.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_47 = serializer(this_46, createKType(getKClass(LabelComponent), arrayOf([]), false));
        var tmp$ret$47 = isInterface(this_47, KSerializer) ? this_47 : THROW_CCE();
        tmp_0 = this_45.u18(tmp$ret$47, element);
        break;
      case 19:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_48 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_49 = this_48.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_50 = serializer(this_49, createKType(getKClass(FileUploadComponent), arrayOf([]), false));
        var tmp$ret$50 = isInterface(this_50, KSerializer) ? this_50 : THROW_CCE();
        tmp_0 = this_48.u18(tmp$ret$50, element);
        break;
      case 21:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_51 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_52 = this_51.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_53 = serializer(this_52, createKType(getKClass(RadioGroupComponent), arrayOf([]), false));
        var tmp$ret$53 = isInterface(this_53, KSerializer) ? this_53 : THROW_CCE();
        tmp_0 = this_51.u18(tmp$ret$53, element);
        break;
      case 22:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_54 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_55 = this_54.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_56 = serializer(this_55, createKType(getKClass(CheckboxGroupComponent), arrayOf([]), false));
        var tmp$ret$56 = isInterface(this_56, KSerializer) ? this_56 : THROW_CCE();
        tmp_0 = this_54.u18(tmp$ret$56, element);
        break;
      case 23:
        // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call

        var this_57 = jsonDecoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call

        var this_58 = this_57.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call

        var this_59 = serializer(this_58, createKType(getKClass(CheckboxComponent), arrayOf([]), false));
        var tmp$ret$59 = isInterface(this_59, KSerializer) ? this_59 : THROW_CCE();
        tmp_0 = this_57.u18(tmp$ret$59, element);
        break;
      default:
        tmp_0 = unknownComponent(this, jsonObject);
        break;
    }
    return tmp_0;
  };
  protoOf(MessageComponentSerializer).v5o = function (encoder, value) {
    var tmp0_elvis_lhs = isInterface(encoder, JsonEncoder) ? encoder : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'MessageComponent can only be encoded to JSON';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var jsonEncoder = tmp;
    var tmp_0;
    if (value instanceof ActionRowComponent) {
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var this_0 = jsonEncoder.a1b();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.jr();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(ActionRowComponent), arrayOf([]), false));
      var tmp$ret$2 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp_0 = this_0.t18(tmp$ret$2, value);
    } else {
      if (value instanceof ButtonComponent) {
        // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
        var this_3 = jsonEncoder.a1b();
        // Inline function 'kotlinx.serialization.serializer' call
        var this_4 = this_3.jr();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_5 = serializer(this_4, createKType(getKClass(ButtonComponent), arrayOf([]), false));
        var tmp$ret$5 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
        tmp_0 = this_3.t18(tmp$ret$5, value);
      } else {
        if (value instanceof StringSelectComponent) {
          // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
          var this_6 = jsonEncoder.a1b();
          // Inline function 'kotlinx.serialization.serializer' call
          var this_7 = this_6.jr();
          // Inline function 'kotlinx.serialization.internal.cast' call
          var this_8 = serializer(this_7, createKType(getKClass(StringSelectComponent), arrayOf([]), false));
          var tmp$ret$8 = isInterface(this_8, KSerializer) ? this_8 : THROW_CCE();
          tmp_0 = this_6.t18(tmp$ret$8, value);
        } else {
          if (value instanceof TextInputComponent) {
            // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
            var this_9 = jsonEncoder.a1b();
            // Inline function 'kotlinx.serialization.serializer' call
            var this_10 = this_9.jr();
            // Inline function 'kotlinx.serialization.internal.cast' call
            var this_11 = serializer(this_10, createKType(getKClass(TextInputComponent), arrayOf([]), false));
            var tmp$ret$11 = isInterface(this_11, KSerializer) ? this_11 : THROW_CCE();
            tmp_0 = this_9.t18(tmp$ret$11, value);
          } else {
            if (value instanceof UserSelectComponent) {
              // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
              var this_12 = jsonEncoder.a1b();
              // Inline function 'kotlinx.serialization.serializer' call
              var this_13 = this_12.jr();
              // Inline function 'kotlinx.serialization.internal.cast' call
              var this_14 = serializer(this_13, createKType(getKClass(UserSelectComponent), arrayOf([]), false));
              var tmp$ret$14 = isInterface(this_14, KSerializer) ? this_14 : THROW_CCE();
              tmp_0 = this_12.t18(tmp$ret$14, value);
            } else {
              if (value instanceof RoleSelectComponent) {
                // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                var this_15 = jsonEncoder.a1b();
                // Inline function 'kotlinx.serialization.serializer' call
                var this_16 = this_15.jr();
                // Inline function 'kotlinx.serialization.internal.cast' call
                var this_17 = serializer(this_16, createKType(getKClass(RoleSelectComponent), arrayOf([]), false));
                var tmp$ret$17 = isInterface(this_17, KSerializer) ? this_17 : THROW_CCE();
                tmp_0 = this_15.t18(tmp$ret$17, value);
              } else {
                if (value instanceof MentionableSelectComponent) {
                  // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                  var this_18 = jsonEncoder.a1b();
                  // Inline function 'kotlinx.serialization.serializer' call
                  var this_19 = this_18.jr();
                  // Inline function 'kotlinx.serialization.internal.cast' call
                  var this_20 = serializer(this_19, createKType(getKClass(MentionableSelectComponent), arrayOf([]), false));
                  var tmp$ret$20 = isInterface(this_20, KSerializer) ? this_20 : THROW_CCE();
                  tmp_0 = this_18.t18(tmp$ret$20, value);
                } else {
                  if (value instanceof ChannelSelectComponent) {
                    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                    var this_21 = jsonEncoder.a1b();
                    // Inline function 'kotlinx.serialization.serializer' call
                    var this_22 = this_21.jr();
                    // Inline function 'kotlinx.serialization.internal.cast' call
                    var this_23 = serializer(this_22, createKType(getKClass(ChannelSelectComponent), arrayOf([]), false));
                    var tmp$ret$23 = isInterface(this_23, KSerializer) ? this_23 : THROW_CCE();
                    tmp_0 = this_21.t18(tmp$ret$23, value);
                  } else {
                    if (value instanceof SectionComponent) {
                      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                      var this_24 = jsonEncoder.a1b();
                      // Inline function 'kotlinx.serialization.serializer' call
                      var this_25 = this_24.jr();
                      // Inline function 'kotlinx.serialization.internal.cast' call
                      var this_26 = serializer(this_25, createKType(getKClass(SectionComponent), arrayOf([]), false));
                      var tmp$ret$26 = isInterface(this_26, KSerializer) ? this_26 : THROW_CCE();
                      tmp_0 = this_24.t18(tmp$ret$26, value);
                    } else {
                      if (value instanceof TextDisplayComponent) {
                        // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                        var this_27 = jsonEncoder.a1b();
                        // Inline function 'kotlinx.serialization.serializer' call
                        var this_28 = this_27.jr();
                        // Inline function 'kotlinx.serialization.internal.cast' call
                        var this_29 = serializer(this_28, createKType(getKClass(TextDisplayComponent), arrayOf([]), false));
                        var tmp$ret$29 = isInterface(this_29, KSerializer) ? this_29 : THROW_CCE();
                        tmp_0 = this_27.t18(tmp$ret$29, value);
                      } else {
                        if (value instanceof ThumbnailComponent) {
                          // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                          var this_30 = jsonEncoder.a1b();
                          // Inline function 'kotlinx.serialization.serializer' call
                          var this_31 = this_30.jr();
                          // Inline function 'kotlinx.serialization.internal.cast' call
                          var this_32 = serializer(this_31, createKType(getKClass(ThumbnailComponent), arrayOf([]), false));
                          var tmp$ret$32 = isInterface(this_32, KSerializer) ? this_32 : THROW_CCE();
                          tmp_0 = this_30.t18(tmp$ret$32, value);
                        } else {
                          if (value instanceof MediaGalleryComponent) {
                            // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                            var this_33 = jsonEncoder.a1b();
                            // Inline function 'kotlinx.serialization.serializer' call
                            var this_34 = this_33.jr();
                            // Inline function 'kotlinx.serialization.internal.cast' call
                            var this_35 = serializer(this_34, createKType(getKClass(MediaGalleryComponent), arrayOf([]), false));
                            var tmp$ret$35 = isInterface(this_35, KSerializer) ? this_35 : THROW_CCE();
                            tmp_0 = this_33.t18(tmp$ret$35, value);
                          } else {
                            if (value instanceof FileComponent) {
                              // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                              var this_36 = jsonEncoder.a1b();
                              // Inline function 'kotlinx.serialization.serializer' call
                              var this_37 = this_36.jr();
                              // Inline function 'kotlinx.serialization.internal.cast' call
                              var this_38 = serializer(this_37, createKType(getKClass(FileComponent), arrayOf([]), false));
                              var tmp$ret$38 = isInterface(this_38, KSerializer) ? this_38 : THROW_CCE();
                              tmp_0 = this_36.t18(tmp$ret$38, value);
                            } else {
                              if (value instanceof SeparatorComponent) {
                                // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                                var this_39 = jsonEncoder.a1b();
                                // Inline function 'kotlinx.serialization.serializer' call
                                var this_40 = this_39.jr();
                                // Inline function 'kotlinx.serialization.internal.cast' call
                                var this_41 = serializer(this_40, createKType(getKClass(SeparatorComponent), arrayOf([]), false));
                                var tmp$ret$41 = isInterface(this_41, KSerializer) ? this_41 : THROW_CCE();
                                tmp_0 = this_39.t18(tmp$ret$41, value);
                              } else {
                                if (value instanceof ContainerComponent) {
                                  // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                                  var this_42 = jsonEncoder.a1b();
                                  // Inline function 'kotlinx.serialization.serializer' call
                                  var this_43 = this_42.jr();
                                  // Inline function 'kotlinx.serialization.internal.cast' call
                                  var this_44 = serializer(this_43, createKType(getKClass(ContainerComponent), arrayOf([]), false));
                                  var tmp$ret$44 = isInterface(this_44, KSerializer) ? this_44 : THROW_CCE();
                                  tmp_0 = this_42.t18(tmp$ret$44, value);
                                } else {
                                  if (value instanceof LabelComponent) {
                                    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                                    var this_45 = jsonEncoder.a1b();
                                    // Inline function 'kotlinx.serialization.serializer' call
                                    var this_46 = this_45.jr();
                                    // Inline function 'kotlinx.serialization.internal.cast' call
                                    var this_47 = serializer(this_46, createKType(getKClass(LabelComponent), arrayOf([]), false));
                                    var tmp$ret$47 = isInterface(this_47, KSerializer) ? this_47 : THROW_CCE();
                                    tmp_0 = this_45.t18(tmp$ret$47, value);
                                  } else {
                                    if (value instanceof FileUploadComponent) {
                                      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                                      var this_48 = jsonEncoder.a1b();
                                      // Inline function 'kotlinx.serialization.serializer' call
                                      var this_49 = this_48.jr();
                                      // Inline function 'kotlinx.serialization.internal.cast' call
                                      var this_50 = serializer(this_49, createKType(getKClass(FileUploadComponent), arrayOf([]), false));
                                      var tmp$ret$50 = isInterface(this_50, KSerializer) ? this_50 : THROW_CCE();
                                      tmp_0 = this_48.t18(tmp$ret$50, value);
                                    } else {
                                      if (value instanceof RadioGroupComponent) {
                                        // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                                        var this_51 = jsonEncoder.a1b();
                                        // Inline function 'kotlinx.serialization.serializer' call
                                        var this_52 = this_51.jr();
                                        // Inline function 'kotlinx.serialization.internal.cast' call
                                        var this_53 = serializer(this_52, createKType(getKClass(RadioGroupComponent), arrayOf([]), false));
                                        var tmp$ret$53 = isInterface(this_53, KSerializer) ? this_53 : THROW_CCE();
                                        tmp_0 = this_51.t18(tmp$ret$53, value);
                                      } else {
                                        if (value instanceof CheckboxGroupComponent) {
                                          // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                                          var this_54 = jsonEncoder.a1b();
                                          // Inline function 'kotlinx.serialization.serializer' call
                                          var this_55 = this_54.jr();
                                          // Inline function 'kotlinx.serialization.internal.cast' call
                                          var this_56 = serializer(this_55, createKType(getKClass(CheckboxGroupComponent), arrayOf([]), false));
                                          var tmp$ret$56 = isInterface(this_56, KSerializer) ? this_56 : THROW_CCE();
                                          tmp_0 = this_54.t18(tmp$ret$56, value);
                                        } else {
                                          if (value instanceof CheckboxComponent) {
                                            // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
                                            var this_57 = jsonEncoder.a1b();
                                            // Inline function 'kotlinx.serialization.serializer' call
                                            var this_58 = this_57.jr();
                                            // Inline function 'kotlinx.serialization.internal.cast' call
                                            var this_59 = serializer(this_58, createKType(getKClass(CheckboxComponent), arrayOf([]), false));
                                            var tmp$ret$59 = isInterface(this_59, KSerializer) ? this_59 : THROW_CCE();
                                            tmp_0 = this_57.t18(tmp$ret$59, value);
                                          } else {
                                            if (value instanceof UnknownMessageComponent) {
                                              tmp_0 = unknownJson(this, jsonEncoder, value);
                                            } else {
                                              // Inline function 'kotlin.error' call
                                              var message_0 = 'Unsupported MessageComponent implementation: ' + toString(getKClassFromExpression(value));
                                              throw IllegalStateException_init_$Create$(toString(message_0));
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    var element = tmp_0;
    jsonEncoder.j1c(element);
  };
  protoOf(MessageComponentSerializer).tn = function (encoder, value) {
    return this.v5o(encoder, (!(value == null) ? isInterface(value, MessageComponent) : false) ? value : THROW_CCE());
  };
  var MessageComponentSerializer_instance;
  function MessageComponentSerializer_getInstance() {
    if (MessageComponentSerializer_instance == null)
      new MessageComponentSerializer();
    return MessageComponentSerializer_instance;
  }
  function Reaction$Companion$$childSerializers$_anonymous__txlc75() {
    return new ReferenceArraySerializer(PrimitiveClasses_getInstance().pb(), StringSerializer_getInstance());
  }
  function Companion_41() {
    Companion_instance_42 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w5o_1 = [null, null, null, lazy(tmp_0, Reaction$Companion$$childSerializers$_anonymous__txlc75), null, null, null, null];
  }
  var Companion_instance_42;
  function Companion_getInstance_42() {
    if (Companion_instance_42 == null)
      new Companion_41();
    return Companion_instance_42;
  }
  function $serializer_39() {
    $serializer_instance_39 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Reaction', this, 8);
    tmp0_serialDesc.dy('count', true);
    tmp0_serialDesc.dy('countDetails', true);
    tmp0_serialDesc.dy('me', true);
    tmp0_serialDesc.dy('burstColors', true);
    tmp0_serialDesc.dy('burstCount', true);
    tmp0_serialDesc.dy('burstMe', true);
    tmp0_serialDesc.dy('meBurst', true);
    tmp0_serialDesc.dy('emoji', true);
    this.x5o_1 = tmp0_serialDesc;
  }
  protoOf($serializer_39).y5o = function (encoder, value) {
    var tmp0_desc = this.x5o_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_42().w5o_1;
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.count == null)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.count);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.countDetails == null)) {
      tmp1_output.ns(tmp0_desc, 1, $serializer_getInstance_40(), value.countDetails);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.me == null)) {
      tmp1_output.ns(tmp0_desc, 2, BooleanSerializer_getInstance(), value.me);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.burstColors == null)) {
      tmp1_output.ns(tmp0_desc, 3, tmp2_cached[3].n1(), value.burstColors);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.burstCount == null)) {
      tmp1_output.ns(tmp0_desc, 4, IntSerializer_getInstance(), value.burstCount);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.burstMe == null)) {
      tmp1_output.ns(tmp0_desc, 5, BooleanSerializer_getInstance(), value.burstMe);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.meBurst == null)) {
      tmp1_output.ns(tmp0_desc, 6, BooleanSerializer_getInstance(), value.meBurst);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.emoji == null)) {
      tmp1_output.ns(tmp0_desc, 7, $serializer_getInstance_8(), value.emoji);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_39).tn = function (encoder, value) {
    return this.y5o(encoder, value instanceof Reaction ? value : THROW_CCE());
  };
  protoOf($serializer_39).un = function (decoder) {
    var tmp0_desc = this.x5o_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.uq(tmp0_desc);
    var tmp13_cached = Companion_getInstance_42().w5o_1;
    if (tmp12_input.kr()) {
      tmp4_local0 = tmp12_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.ir(tmp0_desc, 1, $serializer_getInstance_40(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.ir(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.ir(tmp0_desc, 3, tmp13_cached[3].n1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.ir(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.ir(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.ir(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.ir(tmp0_desc, 7, $serializer_getInstance_8(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.ir(tmp0_desc, 1, $serializer_getInstance_40(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.ir(tmp0_desc, 2, BooleanSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.ir(tmp0_desc, 3, tmp13_cached[3].n1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.ir(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.ir(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.ir(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.ir(tmp0_desc, 7, $serializer_getInstance_8(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.vq(tmp0_desc);
    return Reaction_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_39).sn = function () {
    return this.x5o_1;
  };
  protoOf($serializer_39).sy = function () {
    var tmp0_cached = Companion_getInstance_42().w5o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable($serializer_getInstance_40()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[3].n1()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_8())];
  };
  var $serializer_instance_39;
  function $serializer_getInstance_39() {
    if ($serializer_instance_39 == null)
      new $serializer_39();
    return $serializer_instance_39;
  }
  function Reaction_init_$Init$(seen0, count, countDetails, me, burstColors, burstCount, burstMe, meBurst, emoji, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_39().x5o_1);
    }
    if (0 === (seen0 & 1))
      $this.count = null;
    else
      $this.count = count;
    if (0 === (seen0 & 2))
      $this.countDetails = null;
    else
      $this.countDetails = countDetails;
    if (0 === (seen0 & 4))
      $this.me = null;
    else
      $this.me = me;
    if (0 === (seen0 & 8))
      $this.burstColors = null;
    else
      $this.burstColors = burstColors;
    if (0 === (seen0 & 16))
      $this.burstCount = null;
    else
      $this.burstCount = burstCount;
    if (0 === (seen0 & 32))
      $this.burstMe = null;
    else
      $this.burstMe = burstMe;
    if (0 === (seen0 & 64))
      $this.meBurst = null;
    else
      $this.meBurst = meBurst;
    if (0 === (seen0 & 128))
      $this.emoji = null;
    else
      $this.emoji = emoji;
    return $this;
  }
  function Reaction_init_$Create$(seen0, count, countDetails, me, burstColors, burstCount, burstMe, meBurst, emoji, serializationConstructorMarker) {
    return Reaction_init_$Init$(seen0, count, countDetails, me, burstColors, burstCount, burstMe, meBurst, emoji, serializationConstructorMarker, objectCreate(protoOf(Reaction)));
  }
  function Reaction() {
    Companion_getInstance_42();
    this.count = null;
    this.countDetails = null;
    this.me = null;
    this.burstColors = null;
    this.burstCount = null;
    this.burstMe = null;
    this.meBurst = null;
    this.emoji = null;
  }
  protoOf(Reaction).z5o = function (_set____db54di) {
    this.count = _set____db54di;
  };
  protoOf(Reaction).a5p = function () {
    return this.count;
  };
  protoOf(Reaction).b5p = function (_set____db54di) {
    this.countDetails = _set____db54di;
  };
  protoOf(Reaction).c5p = function () {
    return this.countDetails;
  };
  protoOf(Reaction).d5p = function (_set____db54di) {
    this.me = _set____db54di;
  };
  protoOf(Reaction).e5p = function () {
    return this.me;
  };
  protoOf(Reaction).f5p = function (_set____db54di) {
    this.burstColors = _set____db54di;
  };
  protoOf(Reaction).g5p = function () {
    return this.burstColors;
  };
  protoOf(Reaction).h5p = function (_set____db54di) {
    this.burstCount = _set____db54di;
  };
  protoOf(Reaction).i5p = function () {
    return this.burstCount;
  };
  protoOf(Reaction).j5p = function (_set____db54di) {
    this.burstMe = _set____db54di;
  };
  protoOf(Reaction).k5p = function () {
    return this.burstMe;
  };
  protoOf(Reaction).l5p = function (_set____db54di) {
    this.meBurst = _set____db54di;
  };
  protoOf(Reaction).m5p = function () {
    return this.meBurst;
  };
  protoOf(Reaction).c5j = function (_set____db54di) {
    this.emoji = _set____db54di;
  };
  protoOf(Reaction).d5j = function () {
    return this.emoji;
  };
  function Companion_42() {
  }
  var Companion_instance_43;
  function Companion_getInstance_43() {
    return Companion_instance_43;
  }
  function $serializer_40() {
    $serializer_instance_40 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.ReactionCountDetails', this, 2);
    tmp0_serialDesc.dy('burst', true);
    tmp0_serialDesc.dy('normal', true);
    this.n5p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_40).o5p = function (encoder, value) {
    var tmp0_desc = this.n5p_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.burst == null)) {
      tmp1_output.ns(tmp0_desc, 0, IntSerializer_getInstance(), value.burst);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.normal == null)) {
      tmp1_output.ns(tmp0_desc, 1, IntSerializer_getInstance(), value.normal);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_40).tn = function (encoder, value) {
    return this.o5p(encoder, value instanceof ReactionCountDetails ? value : THROW_CCE());
  };
  protoOf($serializer_40).un = function (decoder) {
    var tmp0_desc = this.n5p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.uq(tmp0_desc);
    if (tmp6_input.kr()) {
      tmp4_local0 = tmp6_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ir(tmp0_desc, 0, IntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.ir(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.vq(tmp0_desc);
    return ReactionCountDetails_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_40).sn = function () {
    return this.n5p_1;
  };
  protoOf($serializer_40).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_40;
  function $serializer_getInstance_40() {
    if ($serializer_instance_40 == null)
      new $serializer_40();
    return $serializer_instance_40;
  }
  function ReactionCountDetails_init_$Init$(seen0, burst, normal, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_40().n5p_1);
    }
    if (0 === (seen0 & 1))
      $this.burst = null;
    else
      $this.burst = burst;
    if (0 === (seen0 & 2))
      $this.normal = null;
    else
      $this.normal = normal;
    return $this;
  }
  function ReactionCountDetails_init_$Create$(seen0, burst, normal, serializationConstructorMarker) {
    return ReactionCountDetails_init_$Init$(seen0, burst, normal, serializationConstructorMarker, objectCreate(protoOf(ReactionCountDetails)));
  }
  function ReactionCountDetails() {
    this.burst = null;
    this.normal = null;
  }
  protoOf(ReactionCountDetails).p5p = function (_set____db54di) {
    this.burst = _set____db54di;
  };
  protoOf(ReactionCountDetails).q5p = function () {
    return this.burst;
  };
  protoOf(ReactionCountDetails).r5p = function (_set____db54di) {
    this.normal = _set____db54di;
  };
  protoOf(ReactionCountDetails).s5p = function () {
    return this.normal;
  };
  function Companion_43() {
  }
  var Companion_instance_44;
  function Companion_getInstance_44() {
    return Companion_instance_44;
  }
  function $serializer_41() {
    $serializer_instance_41 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.Role', this, 10);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('name', true);
    tmp0_serialDesc.dy('color', true);
    tmp0_serialDesc.dy('hoist', true);
    tmp0_serialDesc.dy('icon', true);
    tmp0_serialDesc.dy('unicodeEmoji', true);
    tmp0_serialDesc.dy('position', true);
    tmp0_serialDesc.dy('permissions', true);
    tmp0_serialDesc.dy('managed', true);
    tmp0_serialDesc.dy('mentionable', true);
    this.t5p_1 = tmp0_serialDesc;
  }
  protoOf($serializer_41).u5p = function (encoder, value) {
    var tmp0_desc = this.t5p_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.name == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.name);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.color == null)) {
      tmp1_output.ns(tmp0_desc, 2, IntSerializer_getInstance(), value.color);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.hoist == null)) {
      tmp1_output.ns(tmp0_desc, 3, BooleanSerializer_getInstance(), value.hoist);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.icon == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.icon);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.unicodeEmoji == null)) {
      tmp1_output.ns(tmp0_desc, 5, StringSerializer_getInstance(), value.unicodeEmoji);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.position == null)) {
      tmp1_output.ns(tmp0_desc, 6, IntSerializer_getInstance(), value.position);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.permissions == null)) {
      tmp1_output.ns(tmp0_desc, 7, StringSerializer_getInstance(), value.permissions);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.managed == null)) {
      tmp1_output.ns(tmp0_desc, 8, BooleanSerializer_getInstance(), value.managed);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.mentionable == null)) {
      tmp1_output.ns(tmp0_desc, 9, BooleanSerializer_getInstance(), value.mentionable);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_41).tn = function (encoder, value) {
    return this.u5p(encoder, value instanceof Role ? value : THROW_CCE());
  };
  protoOf($serializer_41).un = function (decoder) {
    var tmp0_desc = this.t5p_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_input = decoder.uq(tmp0_desc);
    if (tmp14_input.kr()) {
      tmp4_local0 = tmp14_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp14_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp14_input.ir(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp14_input.ir(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp14_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp14_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp14_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp14_input.ir(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp14_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp14_input.ir(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp14_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp14_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp14_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp14_input.ir(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp14_input.ir(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp14_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp14_input.ir(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp14_input.ir(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp14_input.ir(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp14_input.ir(tmp0_desc, 8, BooleanSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp14_input.ir(tmp0_desc, 9, BooleanSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp14_input.vq(tmp0_desc);
    return Role_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, null);
  };
  protoOf($serializer_41).sn = function () {
    return this.t5p_1;
  };
  protoOf($serializer_41).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  };
  var $serializer_instance_41;
  function $serializer_getInstance_41() {
    if ($serializer_instance_41 == null)
      new $serializer_41();
    return $serializer_instance_41;
  }
  function Role_init_$Init$(seen0, id, name, color, hoist, icon, unicodeEmoji, position, permissions, managed, mentionable, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_41().t5p_1);
    }
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.name = null;
    else
      $this.name = name;
    if (0 === (seen0 & 4))
      $this.color = null;
    else
      $this.color = color;
    if (0 === (seen0 & 8))
      $this.hoist = null;
    else
      $this.hoist = hoist;
    if (0 === (seen0 & 16))
      $this.icon = null;
    else
      $this.icon = icon;
    if (0 === (seen0 & 32))
      $this.unicodeEmoji = null;
    else
      $this.unicodeEmoji = unicodeEmoji;
    if (0 === (seen0 & 64))
      $this.position = null;
    else
      $this.position = position;
    if (0 === (seen0 & 128))
      $this.permissions = null;
    else
      $this.permissions = permissions;
    if (0 === (seen0 & 256))
      $this.managed = null;
    else
      $this.managed = managed;
    if (0 === (seen0 & 512))
      $this.mentionable = null;
    else
      $this.mentionable = mentionable;
    return $this;
  }
  function Role_init_$Create$(seen0, id, name, color, hoist, icon, unicodeEmoji, position, permissions, managed, mentionable, serializationConstructorMarker) {
    return Role_init_$Init$(seen0, id, name, color, hoist, icon, unicodeEmoji, position, permissions, managed, mentionable, serializationConstructorMarker, objectCreate(protoOf(Role)));
  }
  function Role() {
    this.id = null;
    this.name = null;
    this.color = null;
    this.hoist = null;
    this.icon = null;
    this.unicodeEmoji = null;
    this.position = null;
    this.permissions = null;
    this.managed = null;
    this.mentionable = null;
  }
  protoOf(Role).r5a = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(Role).s5a = function () {
    return this.id;
  };
  protoOf(Role).u5b = function (_set____db54di) {
    this.name = _set____db54di;
  };
  protoOf(Role).m = function () {
    return this.name;
  };
  protoOf(Role).z5c = function (_set____db54di) {
    this.color = _set____db54di;
  };
  protoOf(Role).a5d = function () {
    return this.color;
  };
  protoOf(Role).v5p = function (_set____db54di) {
    this.hoist = _set____db54di;
  };
  protoOf(Role).w5p = function () {
    return this.hoist;
  };
  protoOf(Role).j5c = function (_set____db54di) {
    this.icon = _set____db54di;
  };
  protoOf(Role).k5c = function () {
    return this.icon;
  };
  protoOf(Role).x5p = function (_set____db54di) {
    this.unicodeEmoji = _set____db54di;
  };
  protoOf(Role).y5p = function () {
    return this.unicodeEmoji;
  };
  protoOf(Role).s5b = function (_set____db54di) {
    this.position = _set____db54di;
  };
  protoOf(Role).t5b = function () {
    return this.position;
  };
  protoOf(Role).h5f = function (_set____db54di) {
    this.permissions = _set____db54di;
  };
  protoOf(Role).i5f = function () {
    return this.permissions;
  };
  protoOf(Role).u5e = function (_set____db54di) {
    this.managed = _set____db54di;
  };
  protoOf(Role).v5e = function () {
    return this.managed;
  };
  protoOf(Role).z5p = function (_set____db54di) {
    this.mentionable = _set____db54di;
  };
  protoOf(Role).a5q = function () {
    return this.mentionable;
  };
  function Companion_44() {
  }
  var Companion_instance_45;
  function Companion_getInstance_45() {
    return Companion_instance_45;
  }
  function $serializer_42() {
    $serializer_instance_42 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.User', this, 18);
    tmp0_serialDesc.dy('id', true);
    tmp0_serialDesc.dy('username', true);
    tmp0_serialDesc.dy('discriminator', true);
    tmp0_serialDesc.dy('globalName', true);
    tmp0_serialDesc.dy('avatar', true);
    tmp0_serialDesc.dy('bot', true);
    tmp0_serialDesc.dy('system', true);
    tmp0_serialDesc.dy('mfaEnabled', true);
    tmp0_serialDesc.dy('banner', true);
    tmp0_serialDesc.dy('accentColor', true);
    tmp0_serialDesc.dy('locale', true);
    tmp0_serialDesc.dy('verified', true);
    tmp0_serialDesc.dy('email', true);
    tmp0_serialDesc.dy('flags', true);
    tmp0_serialDesc.dy('premiumType', true);
    tmp0_serialDesc.dy('publicFlags', true);
    tmp0_serialDesc.dy('clan', true);
    tmp0_serialDesc.dy('primaryGuild', true);
    this.b5q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_42).c5q = function (encoder, value) {
    var tmp0_desc = this.b5q_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.id == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.username == null)) {
      tmp1_output.ns(tmp0_desc, 1, StringSerializer_getInstance(), value.username);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.discriminator == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.discriminator);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.globalName == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.globalName);
    }
    if (tmp1_output.rs(tmp0_desc, 4) ? true : !(value.avatar == null)) {
      tmp1_output.ns(tmp0_desc, 4, StringSerializer_getInstance(), value.avatar);
    }
    if (tmp1_output.rs(tmp0_desc, 5) ? true : !(value.bot == null)) {
      tmp1_output.ns(tmp0_desc, 5, BooleanSerializer_getInstance(), value.bot);
    }
    if (tmp1_output.rs(tmp0_desc, 6) ? true : !(value.system == null)) {
      tmp1_output.ns(tmp0_desc, 6, BooleanSerializer_getInstance(), value.system);
    }
    if (tmp1_output.rs(tmp0_desc, 7) ? true : !(value.mfaEnabled == null)) {
      tmp1_output.ns(tmp0_desc, 7, BooleanSerializer_getInstance(), value.mfaEnabled);
    }
    if (tmp1_output.rs(tmp0_desc, 8) ? true : !(value.banner == null)) {
      tmp1_output.ns(tmp0_desc, 8, StringSerializer_getInstance(), value.banner);
    }
    if (tmp1_output.rs(tmp0_desc, 9) ? true : !(value.accentColor == null)) {
      tmp1_output.ns(tmp0_desc, 9, IntSerializer_getInstance(), value.accentColor);
    }
    if (tmp1_output.rs(tmp0_desc, 10) ? true : !(value.locale == null)) {
      tmp1_output.ns(tmp0_desc, 10, StringSerializer_getInstance(), value.locale);
    }
    if (tmp1_output.rs(tmp0_desc, 11) ? true : !(value.verified == null)) {
      tmp1_output.ns(tmp0_desc, 11, BooleanSerializer_getInstance(), value.verified);
    }
    if (tmp1_output.rs(tmp0_desc, 12) ? true : !(value.email == null)) {
      tmp1_output.ns(tmp0_desc, 12, StringSerializer_getInstance(), value.email);
    }
    if (tmp1_output.rs(tmp0_desc, 13) ? true : !(value.flags == null)) {
      tmp1_output.ns(tmp0_desc, 13, IntSerializer_getInstance(), value.flags);
    }
    if (tmp1_output.rs(tmp0_desc, 14) ? true : !(value.premiumType == null)) {
      tmp1_output.ns(tmp0_desc, 14, IntSerializer_getInstance(), value.premiumType);
    }
    if (tmp1_output.rs(tmp0_desc, 15) ? true : !(value.publicFlags == null)) {
      tmp1_output.ns(tmp0_desc, 15, IntSerializer_getInstance(), value.publicFlags);
    }
    if (tmp1_output.rs(tmp0_desc, 16) ? true : !(value.clan == null)) {
      tmp1_output.ns(tmp0_desc, 16, $serializer_getInstance_43(), value.clan);
    }
    if (tmp1_output.rs(tmp0_desc, 17) ? true : !(value.primaryGuild == null)) {
      tmp1_output.ns(tmp0_desc, 17, $serializer_getInstance_43(), value.primaryGuild);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_42).tn = function (encoder, value) {
    return this.c5q(encoder, value instanceof User ? value : THROW_CCE());
  };
  protoOf($serializer_42).un = function (decoder) {
    var tmp0_desc = this.b5q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = null;
    var tmp22_input = decoder.uq(tmp0_desc);
    if (tmp22_input.kr()) {
      tmp4_local0 = tmp22_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp22_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp22_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp22_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp22_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp22_input.ir(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp22_input.ir(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp22_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp22_input.ir(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp22_input.ir(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp22_input.ir(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp22_input.ir(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp15_local11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp22_input.ir(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp22_input.ir(tmp0_desc, 13, IntSerializer_getInstance(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp22_input.ir(tmp0_desc, 14, IntSerializer_getInstance(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp22_input.ir(tmp0_desc, 15, IntSerializer_getInstance(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp22_input.ir(tmp0_desc, 16, $serializer_getInstance_43(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp22_input.ir(tmp0_desc, 17, $serializer_getInstance_43(), tmp21_local17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp22_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp22_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp22_input.ir(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp22_input.ir(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp22_input.ir(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp22_input.ir(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp22_input.ir(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp22_input.ir(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp22_input.ir(tmp0_desc, 7, BooleanSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp22_input.ir(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp22_input.ir(tmp0_desc, 9, IntSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp22_input.ir(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp22_input.ir(tmp0_desc, 11, BooleanSerializer_getInstance(), tmp15_local11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp22_input.ir(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp22_input.ir(tmp0_desc, 13, IntSerializer_getInstance(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp22_input.ir(tmp0_desc, 14, IntSerializer_getInstance(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp22_input.ir(tmp0_desc, 15, IntSerializer_getInstance(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp22_input.ir(tmp0_desc, 16, $serializer_getInstance_43(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp22_input.ir(tmp0_desc, 17, $serializer_getInstance_43(), tmp21_local17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp22_input.vq(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, null);
  };
  protoOf($serializer_42).sn = function () {
    return this.b5q_1;
  };
  protoOf($serializer_42).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable($serializer_getInstance_43()), get_nullable($serializer_getInstance_43())];
  };
  var $serializer_instance_42;
  function $serializer_getInstance_42() {
    if ($serializer_instance_42 == null)
      new $serializer_42();
    return $serializer_instance_42;
  }
  function User_init_$Init$(seen0, id, username, discriminator, globalName, avatar, bot, system, mfaEnabled, banner, accentColor, locale, verified, email, flags, premiumType, publicFlags, clan, primaryGuild, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_42().b5q_1);
    }
    if (0 === (seen0 & 1))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 2))
      $this.username = null;
    else
      $this.username = username;
    if (0 === (seen0 & 4))
      $this.discriminator = null;
    else
      $this.discriminator = discriminator;
    if (0 === (seen0 & 8))
      $this.globalName = null;
    else
      $this.globalName = globalName;
    if (0 === (seen0 & 16))
      $this.avatar = null;
    else
      $this.avatar = avatar;
    if (0 === (seen0 & 32))
      $this.bot = null;
    else
      $this.bot = bot;
    if (0 === (seen0 & 64))
      $this.system = null;
    else
      $this.system = system;
    if (0 === (seen0 & 128))
      $this.mfaEnabled = null;
    else
      $this.mfaEnabled = mfaEnabled;
    if (0 === (seen0 & 256))
      $this.banner = null;
    else
      $this.banner = banner;
    if (0 === (seen0 & 512))
      $this.accentColor = null;
    else
      $this.accentColor = accentColor;
    if (0 === (seen0 & 1024))
      $this.locale = null;
    else
      $this.locale = locale;
    if (0 === (seen0 & 2048))
      $this.verified = null;
    else
      $this.verified = verified;
    if (0 === (seen0 & 4096))
      $this.email = null;
    else
      $this.email = email;
    if (0 === (seen0 & 8192))
      $this.flags = null;
    else
      $this.flags = flags;
    if (0 === (seen0 & 16384))
      $this.premiumType = null;
    else
      $this.premiumType = premiumType;
    if (0 === (seen0 & 32768))
      $this.publicFlags = null;
    else
      $this.publicFlags = publicFlags;
    if (0 === (seen0 & 65536))
      $this.clan = null;
    else
      $this.clan = clan;
    if (0 === (seen0 & 131072))
      $this.primaryGuild = null;
    else
      $this.primaryGuild = primaryGuild;
    return $this;
  }
  function User_init_$Create$(seen0, id, username, discriminator, globalName, avatar, bot, system, mfaEnabled, banner, accentColor, locale, verified, email, flags, premiumType, publicFlags, clan, primaryGuild, serializationConstructorMarker) {
    return User_init_$Init$(seen0, id, username, discriminator, globalName, avatar, bot, system, mfaEnabled, banner, accentColor, locale, verified, email, flags, premiumType, publicFlags, clan, primaryGuild, serializationConstructorMarker, objectCreate(protoOf(User)));
  }
  function User() {
    this.id = null;
    this.username = null;
    this.discriminator = null;
    this.globalName = null;
    this.avatar = null;
    this.bot = null;
    this.system = null;
    this.mfaEnabled = null;
    this.banner = null;
    this.accentColor = null;
    this.locale = null;
    this.verified = null;
    this.email = null;
    this.flags = null;
    this.premiumType = null;
    this.publicFlags = null;
    this.clan = null;
    this.primaryGuild = null;
  }
  protoOf(User).r5a = function (_set____db54di) {
    this.id = _set____db54di;
  };
  protoOf(User).s5a = function () {
    return this.id;
  };
  protoOf(User).d5q = function (_set____db54di) {
    this.username = _set____db54di;
  };
  protoOf(User).e5q = function () {
    return this.username;
  };
  protoOf(User).f5q = function (_set____db54di) {
    this.discriminator = _set____db54di;
  };
  protoOf(User).b1h = function () {
    return this.discriminator;
  };
  protoOf(User).g5q = function (_set____db54di) {
    this.globalName = _set____db54di;
  };
  protoOf(User).h5q = function () {
    return this.globalName;
  };
  protoOf(User).n5g = function (_set____db54di) {
    this.avatar = _set____db54di;
  };
  protoOf(User).o5g = function () {
    return this.avatar;
  };
  protoOf(User).i5q = function (_set____db54di) {
    this.bot = _set____db54di;
  };
  protoOf(User).j5q = function () {
    return this.bot;
  };
  protoOf(User).k5q = function (_set____db54di) {
    this.system = _set____db54di;
  };
  protoOf(User).l5q = function () {
    return this.system;
  };
  protoOf(User).m5q = function (_set____db54di) {
    this.mfaEnabled = _set____db54di;
  };
  protoOf(User).n5q = function () {
    return this.mfaEnabled;
  };
  protoOf(User).v5f = function (_set____db54di) {
    this.banner = _set____db54di;
  };
  protoOf(User).w5f = function () {
    return this.banner;
  };
  protoOf(User).x5m = function (_set____db54di) {
    this.accentColor = _set____db54di;
  };
  protoOf(User).y5m = function () {
    return this.accentColor;
  };
  protoOf(User).o5q = function (_set____db54di) {
    this.locale = _set____db54di;
  };
  protoOf(User).p5q = function () {
    return this.locale;
  };
  protoOf(User).q5q = function (_set____db54di) {
    this.verified = _set____db54di;
  };
  protoOf(User).r5q = function () {
    return this.verified;
  };
  protoOf(User).s5q = function (_set____db54di) {
    this.email = _set____db54di;
  };
  protoOf(User).t5q = function () {
    return this.email;
  };
  protoOf(User).y5g = function (_set____db54di) {
    this.flags = _set____db54di;
  };
  protoOf(User).z5g = function () {
    return this.flags;
  };
  protoOf(User).u5q = function (_set____db54di) {
    this.premiumType = _set____db54di;
  };
  protoOf(User).v5q = function () {
    return this.premiumType;
  };
  protoOf(User).w5q = function (_set____db54di) {
    this.publicFlags = _set____db54di;
  };
  protoOf(User).x5q = function () {
    return this.publicFlags;
  };
  protoOf(User).y5q = function (_set____db54di) {
    this.clan = _set____db54di;
  };
  protoOf(User).z5q = function () {
    return this.clan;
  };
  protoOf(User).a5r = function (_set____db54di) {
    this.primaryGuild = _set____db54di;
  };
  protoOf(User).b5r = function () {
    return this.primaryGuild;
  };
  function Companion_45() {
  }
  var Companion_instance_46;
  function Companion_getInstance_46() {
    return Companion_instance_46;
  }
  function $serializer_43() {
    $serializer_instance_43 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.entity.UserPrimaryGuild', this, 4);
    tmp0_serialDesc.dy('identityGuildId', true);
    tmp0_serialDesc.dy('identityEnabled', true);
    tmp0_serialDesc.dy('tag', true);
    tmp0_serialDesc.dy('badge', true);
    this.c5r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_43).d5r = function (encoder, value) {
    var tmp0_desc = this.c5r_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    if (tmp1_output.rs(tmp0_desc, 0) ? true : !(value.identityGuildId == null)) {
      tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.identityGuildId);
    }
    if (tmp1_output.rs(tmp0_desc, 1) ? true : !(value.identityEnabled == null)) {
      tmp1_output.ns(tmp0_desc, 1, BooleanSerializer_getInstance(), value.identityEnabled);
    }
    if (tmp1_output.rs(tmp0_desc, 2) ? true : !(value.tag == null)) {
      tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.tag);
    }
    if (tmp1_output.rs(tmp0_desc, 3) ? true : !(value.badge == null)) {
      tmp1_output.ns(tmp0_desc, 3, StringSerializer_getInstance(), value.badge);
    }
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_43).tn = function (encoder, value) {
    return this.d5r(encoder, value instanceof UserPrimaryGuild ? value : THROW_CCE());
  };
  protoOf($serializer_43).un = function (decoder) {
    var tmp0_desc = this.c5r_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.uq(tmp0_desc);
    if (tmp8_input.kr()) {
      tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
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
    return UserPrimaryGuild_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_43).sn = function () {
    return this.c5r_1;
  };
  protoOf($serializer_43).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_43;
  function $serializer_getInstance_43() {
    if ($serializer_instance_43 == null)
      new $serializer_43();
    return $serializer_instance_43;
  }
  function UserPrimaryGuild_init_$Init$(seen0, identityGuildId, identityEnabled, tag, badge, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_43().c5r_1);
    }
    if (0 === (seen0 & 1))
      $this.identityGuildId = null;
    else
      $this.identityGuildId = identityGuildId;
    if (0 === (seen0 & 2))
      $this.identityEnabled = null;
    else
      $this.identityEnabled = identityEnabled;
    if (0 === (seen0 & 4))
      $this.tag = null;
    else
      $this.tag = tag;
    if (0 === (seen0 & 8))
      $this.badge = null;
    else
      $this.badge = badge;
    return $this;
  }
  function UserPrimaryGuild_init_$Create$(seen0, identityGuildId, identityEnabled, tag, badge, serializationConstructorMarker) {
    return UserPrimaryGuild_init_$Init$(seen0, identityGuildId, identityEnabled, tag, badge, serializationConstructorMarker, objectCreate(protoOf(UserPrimaryGuild)));
  }
  function UserPrimaryGuild() {
    this.identityGuildId = null;
    this.identityEnabled = null;
    this.tag = null;
    this.badge = null;
  }
  protoOf(UserPrimaryGuild).e5r = function (_set____db54di) {
    this.identityGuildId = _set____db54di;
  };
  protoOf(UserPrimaryGuild).f5r = function () {
    return this.identityGuildId;
  };
  protoOf(UserPrimaryGuild).g5r = function (_set____db54di) {
    this.identityEnabled = _set____db54di;
  };
  protoOf(UserPrimaryGuild).h5r = function () {
    return this.identityEnabled;
  };
  protoOf(UserPrimaryGuild).i5r = function (_set____db54di) {
    this.tag = _set____db54di;
  };
  protoOf(UserPrimaryGuild).j5r = function () {
    return this.tag;
  };
  protoOf(UserPrimaryGuild).k5r = function (_set____db54di) {
    this.badge = _set____db54di;
  };
  protoOf(UserPrimaryGuild).l5r = function () {
    return this.badge;
  };
  function FileContent(filename, bytes) {
    this.filename = filename;
    this.bytes = bytes;
    this.description = null;
  }
  protoOf(FileContent).m5r = function (_set____db54di) {
    this.filename = _set____db54di;
  };
  protoOf(FileContent).u5a = function () {
    return this.filename;
  };
  protoOf(FileContent).n5r = function (_set____db54di) {
    this.bytes = _set____db54di;
  };
  protoOf(FileContent).o5r = function () {
    return this.bytes;
  };
  protoOf(FileContent).v5a = function (_set____db54di) {
    this.description = _set____db54di;
  };
  protoOf(FileContent).w5a = function () {
    return this.description;
  };
  function Companion_46() {
    this.p5r_1 = 'X-RateLimit-Limit';
    this.q5r_1 = 'X-RateLimit-Remaining';
    this.r5r_1 = 'X-RateLimit-Reset';
    this.s5r_1 = 'X-RateLimit-Bucket';
  }
  protoOf(Companion_46).of = function (response) {
    try {
      var limit = response.y53_1.n2('X-RateLimit-Limit');
      var remaining = response.y53_1.n2('X-RateLimit-Remaining');
      var reset = response.y53_1.n2('X-RateLimit-Reset');
      var bucket = response.y53_1.n2('X-RateLimit-Bucket');
      // Inline function 'kotlin.also' call
      var this_0 = new RateLimit();
      var tmp;
      if (limit == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp = !limit.r();
      }
      if (tmp === true) {
        this_0.limit = toInt(limit.d1(0));
      }
      var tmp_0;
      if (remaining == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !remaining.r();
      }
      if (tmp_0 === true) {
        this_0.remaining = toInt(remaining.d1(0));
      }
      var tmp_1;
      if (reset == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_1 = !reset.r();
      }
      if (tmp_1 === true) {
        this_0.reset = Companion_getInstance().rk(numberToLong(toDouble(reset.d1(0))));
      }
      var tmp_2;
      if (bucket == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_2 = !bucket.r();
      }
      if (tmp_2 === true) {
        this_0.bucket = bucket.d1(0);
      }
      return this_0;
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        return null;
      } else {
        throw $p;
      }
    }
  };
  var Companion_instance_47;
  function Companion_getInstance_47() {
    return Companion_instance_47;
  }
  function RateLimit() {
    this.limit = 0;
    this.remaining = 0;
    this.reset = null;
    this.bucket = null;
  }
  protoOf(RateLimit).t5r = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(RateLimit).w59 = function () {
    return this.limit;
  };
  protoOf(RateLimit).u5r = function (_set____db54di) {
    this.remaining = _set____db54di;
  };
  protoOf(RateLimit).v5r = function () {
    return this.remaining;
  };
  protoOf(RateLimit).w5r = function (_set____db54di) {
    this.reset = _set____db54di;
  };
  protoOf(RateLimit).x5r = function () {
    return this.reset;
  };
  protoOf(RateLimit).y5r = function (_set____db54di) {
    this.bucket = _set____db54di;
  };
  protoOf(RateLimit).z5r = function () {
    return this.bucket;
  };
  function Response(data) {
    this.data = data;
    this.limit = null;
    this.json = null;
  }
  protoOf(Response).a5s = function (_set____db54di) {
    this.data = _set____db54di;
  };
  protoOf(Response).b5s = function () {
    return this.data;
  };
  protoOf(Response).c5s = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(Response).w59 = function () {
    return this.limit;
  };
  protoOf(Response).d5s = function (_set____db54di) {
    this.json = _set____db54di;
  };
  protoOf(Response).a1b = function () {
    return this.json;
  };
  function ResponseUnit() {
    this.limit = null;
  }
  protoOf(ResponseUnit).c5s = function (_set____db54di) {
    this.limit = _set____db54di;
  };
  protoOf(ResponseUnit).w59 = function () {
    return this.limit;
  };
  function toAny($this, $receiver) {
    if ($receiver instanceof JsonPrimitive) {
      var tmp;
      if ($receiver.c1b()) {
        tmp = $receiver.d1b();
      } else if (!(get_intOrNull($receiver) == null)) {
        tmp = get_int($receiver);
      } else if (!(get_longOrNull($receiver) == null)) {
        tmp = get_long($receiver);
      } else if (!(get_floatOrNull($receiver) == null)) {
        tmp = get_float($receiver);
      } else if (!(get_doubleOrNull($receiver) == null)) {
        tmp = get_double($receiver);
      } else if (!(get_booleanOrNull($receiver) == null)) {
        tmp = get_boolean($receiver);
      } else {
        throw IllegalStateException_init_$Create$("Can't deserialize unknown type: " + $receiver.toString());
      }
      return tmp;
    } else {
      if ($receiver instanceof JsonArray) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault($receiver, 10));
        var _iterator__ex2g4s = $receiver.t();
        while (_iterator__ex2g4s.u()) {
          var item = _iterator__ex2g4s.v();
          var tmp$ret$2 = toAny(AnySerializer_getInstance(), item);
          destination.c1(tmp$ret$2);
        }
        return destination;
      } else {
        if ($receiver instanceof JsonObject) {
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_0 = ArrayList_init_$Create$($receiver.e1());
          // Inline function 'kotlin.collections.iterator' call
          var _iterator__ex2g4s_0 = $receiver.l1().t();
          while (_iterator__ex2g4s_0.u()) {
            var item_0 = _iterator__ex2g4s_0.v();
            var tmp$ret$6 = to(item_0.m1(), toAny(AnySerializer_getInstance(), item_0.n1()));
            destination_0.c1(tmp$ret$6);
          }
          return toMap(destination_0);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  function AnySerializer$additionalSerializer$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return false;
  }
  function AnySerializer() {
    AnySerializer_instance = this;
    var tmp = this;
    tmp.e5s_1 = AnySerializer$additionalSerializer$lambda;
    this.f5s_1 = buildClassSerialDescriptor('Any', []);
  }
  protoOf(AnySerializer).sn = function () {
    return this.f5s_1;
  };
  protoOf(AnySerializer).un = function (decoder) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!isInterface(decoder, JsonDecoder)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var element = decoder.b1b();
    return toAny(this, element);
  };
  protoOf(AnySerializer).g5s = function (encoder, value) {
    if (typeof value === 'number') {
      encoder.tr(value);
    } else {
      if (typeof value === 'bigint') {
        encoder.ur(value);
      } else {
        if (typeof value === 'number') {
          encoder.sr(value);
        } else {
          if (typeof value === 'number') {
            encoder.vr(value);
          } else {
            if (typeof value === 'number') {
              encoder.wr(value);
            } else {
              if (typeof value === 'string') {
                encoder.yr(value);
              } else {
                if (typeof value === 'boolean') {
                  encoder.qr(value);
                } else {
                  if (value instanceof Enum) {
                    encoder.yr(toString(this));
                  } else {
                    if (!this.e5s_1(encoder, value)) {
                      println("Can't serialize unknown type: " + toString(getKClassFromExpression(value)));
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  protoOf(AnySerializer).tn = function (encoder, value) {
    return this.g5s(encoder, !(value == null) ? value : THROW_CCE());
  };
  var AnySerializer_instance;
  function AnySerializer_getInstance() {
    if (AnySerializer_instance == null)
      new AnySerializer();
    return AnySerializer_instance;
  }
  function DiscordImpl(apiHost, token) {
    this.h5s_1 = apiHost;
    this.i5s_1 = token;
    this.j5s_1 = new UsersResourceImpl(this.h5s_1, this.i5s_1);
    this.k5s_1 = new ChannelsResourceImpl(this.h5s_1, this.i5s_1);
    this.l5s_1 = new MessagesResourceImpl(this.h5s_1, this.i5s_1);
    this.m5s_1 = new ReactionsResourceImpl(this.h5s_1, this.i5s_1);
    this.n5s_1 = new GuildsResourceImpl(this.h5s_1, this.i5s_1);
    this.o5s_1 = new GatewayResourceImpl(this.h5s_1, this.i5s_1);
  }
  protoOf(DiscordImpl).y56 = function () {
    return this.h5s_1;
  };
  protoOf(DiscordImpl).z56 = function () {
    return this.i5s_1;
  };
  protoOf(DiscordImpl).users = function () {
    return this.j5s_1;
  };
  protoOf(DiscordImpl).channels = function () {
    return this.k5s_1;
  };
  protoOf(DiscordImpl).messages = function () {
    return this.l5s_1;
  };
  protoOf(DiscordImpl).reactions = function () {
    return this.m5s_1;
  };
  protoOf(DiscordImpl).guilds = function () {
    return this.n5s_1;
  };
  protoOf(DiscordImpl).gateway = function () {
    return this.o5s_1;
  };
  function InternalUtility$json$lambda($this$Json) {
    $this$Json.n19_1 = false;
    $this$Json.m19_1 = true;
    $this$Json.o19_1 = true;
    $this$Json.w19_1 = Builtins_getInstance().v1c_1;
    var tmp = $this$Json;
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    builder.v17(PrimitiveClasses_getInstance().eb(), AnySerializer_getInstance());
    tmp.d1a_1 = builder.gw();
    return Unit_instance;
  }
  function InternalUtility() {
    InternalUtility_instance = this;
    var tmp = this;
    tmp.p5s_1 = Json(VOID, InternalUtility$json$lambda);
  }
  var InternalUtility_instance;
  function InternalUtility_getInstance() {
    if (InternalUtility_instance == null)
      new InternalUtility();
    return InternalUtility_instance;
  }
  function Companion_47() {
    this.q5s_1 = 'kdiscord (https://github.com/uakihir0/kdiscord, 0.0.1)';
  }
  var Companion_instance_48;
  function Companion_getInstance_48() {
    return Companion_instance_48;
  }
  function AbstractResourceImpl(uri, token) {
    this.r5s_1 = uri;
    this.s5s_1 = token;
  }
  protoOf(AbstractResourceImpl).t5s = function (_this__u8e3s4) {
    return _this__u8e3s4.d53('Authorization', this.s5s_1).d53('User-Agent', 'kdiscord (https://github.com/uakihir0/kdiscord, 0.0.1)');
  };
  protoOf(AbstractResourceImpl).u5s = function (response) {
    var exception = DiscordException_init_$Create$_0(response.x53_1, response.b54());
    if (response.x53_1 === 429) {
      try {
        var body = get_jsonObject(InternalUtility_getInstance().p5s_1.v18(response.b54()));
        var tmp = exception;
        var tmp0_safe_receiver = body.i1b('retry_after');
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
        tmp.c57_1 = tmp1_safe_receiver == null ? null : get_doubleOrNull(tmp1_safe_receiver);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
        } else {
          throw $p;
        }
      }
    }
    return exception;
  };
  protoOf(AbstractResourceImpl).v5s = function (_this__u8e3s4, key, value) {
    if (!(value == null)) {
      _this__u8e3s4.e53(key, value);
    }
    return _this__u8e3s4;
  };
  function Companion_48() {
  }
  var Companion_instance_49;
  function Companion_getInstance_49() {
    return Companion_instance_49;
  }
  function $serializer_44() {
    $serializer_instance_44 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.internal.api.ChannelsResourceImpl.CreateDmBody', this, 1);
    tmp0_serialDesc.dy('recipientId', false);
    this.w5s_1 = tmp0_serialDesc;
  }
  protoOf($serializer_44).x5s = function (encoder, value) {
    var tmp0_desc = this.w5s_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    tmp1_output.js(tmp0_desc, 0, value.y5s_1);
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_44).tn = function (encoder, value) {
    return this.x5s(encoder, value instanceof CreateDmBody ? value : THROW_CCE());
  };
  protoOf($serializer_44).un = function (decoder) {
    var tmp0_desc = this.w5s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.uq(tmp0_desc);
    if (tmp5_input.kr()) {
      tmp4_local0 = tmp5_input.er(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.er(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.vq(tmp0_desc);
    return CreateDmBody_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_44).sn = function () {
    return this.w5s_1;
  };
  protoOf($serializer_44).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  var $serializer_instance_44;
  function $serializer_getInstance_44() {
    if ($serializer_instance_44 == null)
      new $serializer_44();
    return $serializer_instance_44;
  }
  function CreateDmBody_init_$Init$(seen0, recipientId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_44().w5s_1);
    }
    $this.y5s_1 = recipientId;
    return $this;
  }
  function CreateDmBody_init_$Create$(seen0, recipientId, serializationConstructorMarker) {
    return CreateDmBody_init_$Init$(seen0, recipientId, serializationConstructorMarker, objectCreate(protoOf(CreateDmBody)));
  }
  function CreateDmBody(recipientId) {
    this.y5s_1 = recipientId;
  }
  function ChannelsResourceImpl$getChannel$slambda(this$0, $channelId, resultContinuation) {
    this.h5t_1 = this$0;
    this.i5t_1 = $channelId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelsResourceImpl$getChannel$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ChannelsResourceImpl$getChannel$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelsResourceImpl$getChannel$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.h5t_1.t5s((new HttpRequest()).b53(this.h5t_1.r5s_1 + '/channels/' + this.i5t_1)).c53(MediaType_getInstance().l5t_1).g53(this);
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
  protoOf(ChannelsResourceImpl$getChannel$slambda).p2n = function ($this$withContext, completion) {
    var i = new ChannelsResourceImpl$getChannel$slambda(this.h5t_1, this.i5t_1, completion);
    i.j5t_1 = $this$withContext;
    return i;
  };
  function ChannelsResourceImpl$getChannel$slambda_0(this$0, $channelId, resultContinuation) {
    var i = new ChannelsResourceImpl$getChannel$slambda(this$0, $channelId, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function ChannelsResourceImpl$getChannelBlocking$slambda(this$0, $channelId, resultContinuation) {
    this.u5t_1 = this$0;
    this.v5t_1 = $channelId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelsResourceImpl$getChannelBlocking$slambda).x5t = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ChannelsResourceImpl$getChannelBlocking$slambda).e9 = function (p1, $completion) {
    return this.x5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelsResourceImpl$getChannelBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.u5t_1.e57(this.v5t_1, this);
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
  protoOf(ChannelsResourceImpl$getChannelBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new ChannelsResourceImpl$getChannelBlocking$slambda(this.u5t_1, this.v5t_1, completion);
    i.w5t_1 = $this$toBlocking;
    return i;
  };
  function ChannelsResourceImpl$getChannelBlocking$slambda_0(this$0, $channelId, resultContinuation) {
    var i = new ChannelsResourceImpl$getChannelBlocking$slambda(this$0, $channelId, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.x5t($this$toBlocking, $completion);
    }, 1);
  }
  function ChannelsResourceImpl$listDmChannels$slambda(this$0, resultContinuation) {
    this.g5u_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelsResourceImpl$listDmChannels$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ChannelsResourceImpl$listDmChannels$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelsResourceImpl$listDmChannels$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.g5u_1.t5s((new HttpRequest()).b53(this.g5u_1.r5s_1 + '/users/@me/channels')).c53(MediaType_getInstance().l5t_1).g53(this);
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
  protoOf(ChannelsResourceImpl$listDmChannels$slambda).p2n = function ($this$withContext, completion) {
    var i = new ChannelsResourceImpl$listDmChannels$slambda(this.g5u_1, completion);
    i.h5u_1 = $this$withContext;
    return i;
  };
  function ChannelsResourceImpl$listDmChannels$slambda_0(this$0, resultContinuation) {
    var i = new ChannelsResourceImpl$listDmChannels$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function ChannelsResourceImpl$listDmChannelsBlocking$slambda(this$0, resultContinuation) {
    this.q5u_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelsResourceImpl$listDmChannelsBlocking$slambda).s5u = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ChannelsResourceImpl$listDmChannelsBlocking$slambda).e9 = function (p1, $completion) {
    return this.s5u((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelsResourceImpl$listDmChannelsBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.q5u_1.h57(this);
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
  protoOf(ChannelsResourceImpl$listDmChannelsBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new ChannelsResourceImpl$listDmChannelsBlocking$slambda(this.q5u_1, completion);
    i.r5u_1 = $this$toBlocking;
    return i;
  };
  function ChannelsResourceImpl$listDmChannelsBlocking$slambda_0(this$0, resultContinuation) {
    var i = new ChannelsResourceImpl$listDmChannelsBlocking$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.s5u($this$toBlocking, $completion);
    }, 1);
  }
  function ChannelsResourceImpl$createDm$slambda(this$0, $request, resultContinuation) {
    this.b5v_1 = this$0;
    this.c5v_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelsResourceImpl$createDm$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ChannelsResourceImpl$createDm$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelsResourceImpl$createDm$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            var tmp_0 = this.b5v_1.t5s((new HttpRequest()).b53(this.b5v_1.r5s_1 + '/users/@me/channels')).c53(MediaType_getInstance().l5t_1);
            var tmp0 = InternalUtility_getInstance();
            var obj = new CreateDmBody(this.c5v_1.recipientId);
            var this_0 = tmp0.p5s_1;
            var this_1 = this_0.jr();
            var this_2 = serializer(this_1, createKType(getKClass(CreateDmBody), arrayOf([]), false));
            suspendResult = tmp_0.k51(this_0.r18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj)).h53(this);
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
  protoOf(ChannelsResourceImpl$createDm$slambda).p2n = function ($this$withContext, completion) {
    var i = new ChannelsResourceImpl$createDm$slambda(this.b5v_1, this.c5v_1, completion);
    i.d5v_1 = $this$withContext;
    return i;
  };
  function ChannelsResourceImpl$createDm$slambda_0(this$0, $request, resultContinuation) {
    var i = new ChannelsResourceImpl$createDm$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function ChannelsResourceImpl$createDmBlocking$slambda(this$0, $request, resultContinuation) {
    this.m5v_1 = this$0;
    this.n5v_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelsResourceImpl$createDmBlocking$slambda).x5t = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ChannelsResourceImpl$createDmBlocking$slambda).e9 = function (p1, $completion) {
    return this.x5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelsResourceImpl$createDmBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.m5v_1.k57(this.n5v_1, this);
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
  protoOf(ChannelsResourceImpl$createDmBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new ChannelsResourceImpl$createDmBlocking$slambda(this.m5v_1, this.n5v_1, completion);
    i.o5v_1 = $this$toBlocking;
    return i;
  };
  function ChannelsResourceImpl$createDmBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new ChannelsResourceImpl$createDmBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.x5t($this$toBlocking, $completion);
    }, 1);
  }
  function $getChannelCOROUTINE$(_this__u8e3s4, channelId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x5v_1 = _this__u8e3s4;
    this.y5v_1 = channelId;
  }
  protoOf($getChannelCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.c5w_1 = this.x5v_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.b5w_1 = this.c5w_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, ChannelsResourceImpl$getChannel$slambda_0(this.x5v_1, this.y5v_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a5w_1 = suspendResult;
            var containsArg = this.a5w_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.a5w_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(getKClass(Channel), arrayOf([]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.a5w_1);
              this_3.json = this.a5w_1.b54();
              tmp_1.z5v_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.b5w_1.u5s(this.a5w_1);
          case 4:
            return this.z5v_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $getChannel$suspendBridgeCOROUTINE$(_this__u8e3s4, channelId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l5w_1 = _this__u8e3s4;
    this.m5w_1 = channelId;
  }
  protoOf($getChannel$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.l5w_1.getChannel === protoOf(ChannelsResourceImpl).getChannel) {
              this.i8_1 = 2;
              suspendResult = this.l5w_1.d57(this.m5w_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.l5w_1.getChannel(this.m5w_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.n5w_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.n5w_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.n5w_1;
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
  function $listDmChannelsCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y5w_1 = _this__u8e3s4;
  }
  protoOf($listDmChannelsCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.c5x_1 = this.y5w_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.b5x_1 = this.c5x_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, ChannelsResourceImpl$listDmChannels$slambda_0(this.y5w_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a5x_1 = suspendResult;
            var containsArg = this.a5x_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.a5x_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ob(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Channel), arrayOf([]), false))]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.a5x_1);
              this_3.json = this.a5x_1.b54();
              tmp_1.z5w_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.b5x_1.u5s(this.a5x_1);
          case 4:
            return this.z5w_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $listDmChannels$suspendBridgeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l5x_1 = _this__u8e3s4;
  }
  protoOf($listDmChannels$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.l5x_1.listDmChannels === protoOf(ChannelsResourceImpl).listDmChannels) {
              this.i8_1 = 2;
              suspendResult = this.l5x_1.g57(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.l5x_1.listDmChannels(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.m5x_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.m5x_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.m5x_1;
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
  function $createDmCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v5x_1 = _this__u8e3s4;
    this.w5x_1 = request;
  }
  protoOf($createDmCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.a5y_1 = this.v5x_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.z5x_1 = this.a5y_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, ChannelsResourceImpl$createDm$slambda_0(this.v5x_1, this.w5x_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y5x_1 = suspendResult;
            var containsArg = this.y5x_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.y5x_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(getKClass(Channel), arrayOf([]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.y5x_1);
              this_3.json = this.y5x_1.b54();
              tmp_1.x5x_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.z5x_1.u5s(this.y5x_1);
          case 4:
            return this.x5x_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $createDm$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j5y_1 = _this__u8e3s4;
    this.k5y_1 = request;
  }
  protoOf($createDm$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.j5y_1.createDm === protoOf(ChannelsResourceImpl).createDm) {
              this.i8_1 = 2;
              suspendResult = this.j5y_1.j57(this.k5y_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.j5y_1.createDm(this.k5y_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.l5y_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.l5y_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.l5y_1;
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
  function ChannelsResourceImpl(uri, token) {
    AbstractResourceImpl.call(this, uri, token);
  }
  protoOf(ChannelsResourceImpl).d57 = function (channelId, $completion) {
    var tmp = new $getChannelCOROUTINE$(this, channelId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ChannelsResourceImpl).getChannel = function (channelId) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.d57(channelId, $completion);
    });
  };
  protoOf(ChannelsResourceImpl).e57 = function (channelId, $completion) {
    var tmp = new $getChannel$suspendBridgeCOROUTINE$(this, channelId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ChannelsResourceImpl).f57 = function (channelId) {
    return toBlocking(ChannelsResourceImpl$getChannelBlocking$slambda_0(this, channelId, null));
  };
  protoOf(ChannelsResourceImpl).g57 = function ($completion) {
    var tmp = new $listDmChannelsCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ChannelsResourceImpl).listDmChannels = function () {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.g57($completion);
    });
  };
  protoOf(ChannelsResourceImpl).h57 = function ($completion) {
    var tmp = new $listDmChannels$suspendBridgeCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ChannelsResourceImpl).i57 = function () {
    return toBlocking(ChannelsResourceImpl$listDmChannelsBlocking$slambda_0(this, null));
  };
  protoOf(ChannelsResourceImpl).j57 = function (request, $completion) {
    var tmp = new $createDmCOROUTINE$(this, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ChannelsResourceImpl).createDm = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.j57(request, $completion);
    });
  };
  protoOf(ChannelsResourceImpl).k57 = function (request, $completion) {
    var tmp = new $createDm$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ChannelsResourceImpl).l57 = function (request) {
    return toBlocking(ChannelsResourceImpl$createDmBlocking$slambda_0(this, request, null));
  };
  function GatewayResourceImpl$getGateway$slambda(this$0, resultContinuation) {
    this.u5y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GatewayResourceImpl$getGateway$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GatewayResourceImpl$getGateway$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GatewayResourceImpl$getGateway$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.u5y_1.t5s((new HttpRequest()).b53(this.u5y_1.r5s_1 + '/gateway')).c53(MediaType_getInstance().l5t_1).g53(this);
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
  protoOf(GatewayResourceImpl$getGateway$slambda).p2n = function ($this$withContext, completion) {
    var i = new GatewayResourceImpl$getGateway$slambda(this.u5y_1, completion);
    i.v5y_1 = $this$withContext;
    return i;
  };
  function GatewayResourceImpl$getGateway$slambda_0(this$0, resultContinuation) {
    var i = new GatewayResourceImpl$getGateway$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function GatewayResourceImpl$getGatewayBlocking$slambda(this$0, resultContinuation) {
    this.e5z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GatewayResourceImpl$getGatewayBlocking$slambda).g5z = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GatewayResourceImpl$getGatewayBlocking$slambda).e9 = function (p1, $completion) {
    return this.g5z((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GatewayResourceImpl$getGatewayBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.e5z_1.w57(this);
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
  protoOf(GatewayResourceImpl$getGatewayBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new GatewayResourceImpl$getGatewayBlocking$slambda(this.e5z_1, completion);
    i.f5z_1 = $this$toBlocking;
    return i;
  };
  function GatewayResourceImpl$getGatewayBlocking$slambda_0(this$0, resultContinuation) {
    var i = new GatewayResourceImpl$getGatewayBlocking$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.g5z($this$toBlocking, $completion);
    }, 1);
  }
  function $getGatewayCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p5z_1 = _this__u8e3s4;
  }
  protoOf($getGatewayCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.t5z_1 = this.p5z_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.s5z_1 = this.t5z_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, GatewayResourceImpl$getGateway$slambda_0(this.p5z_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r5z_1 = suspendResult;
            var containsArg = this.r5z_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.r5z_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(getKClass(GatewayResponse), arrayOf([]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.r5z_1);
              this_3.json = this.r5z_1.b54();
              tmp_1.q5z_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.s5z_1.u5s(this.r5z_1);
          case 4:
            return this.q5z_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $getGateway$suspendBridgeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c60_1 = _this__u8e3s4;
  }
  protoOf($getGateway$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.c60_1.getGateway === protoOf(GatewayResourceImpl).getGateway) {
              this.i8_1 = 2;
              suspendResult = this.c60_1.x57(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.c60_1.getGateway(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.d60_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.d60_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.d60_1;
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
  function GatewayResourceImpl(uri, token) {
    AbstractResourceImpl.call(this, uri, token);
  }
  protoOf(GatewayResourceImpl).x57 = function ($completion) {
    var tmp = new $getGatewayCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GatewayResourceImpl).getGateway = function () {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.x57($completion);
    });
  };
  protoOf(GatewayResourceImpl).w57 = function ($completion) {
    var tmp = new $getGateway$suspendBridgeCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GatewayResourceImpl).y57 = function () {
    return toBlocking(GatewayResourceImpl$getGatewayBlocking$slambda_0(this, null));
  };
  function GuildsResourceImpl$getCurrentUserGuilds$slambda(this$0, $request, resultContinuation) {
    this.o60_1 = this$0;
    this.p60_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GuildsResourceImpl$getCurrentUserGuilds$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GuildsResourceImpl$getCurrentUserGuilds$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GuildsResourceImpl$getCurrentUserGuilds$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.o60_1.t5s(this.o60_1.v5s(this.o60_1.v5s(this.o60_1.v5s(this.o60_1.v5s((new HttpRequest()).b53(this.o60_1.r5s_1 + '/users/@me/guilds'), 'before', this.p60_1.before), 'after', this.p60_1.after), 'limit', this.p60_1.limit), 'with_counts', this.p60_1.withCounts)).c53(MediaType_getInstance().l5t_1).g53(this);
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
  protoOf(GuildsResourceImpl$getCurrentUserGuilds$slambda).p2n = function ($this$withContext, completion) {
    var i = new GuildsResourceImpl$getCurrentUserGuilds$slambda(this.o60_1, this.p60_1, completion);
    i.q60_1 = $this$withContext;
    return i;
  };
  function GuildsResourceImpl$getCurrentUserGuilds$slambda_0(this$0, $request, resultContinuation) {
    var i = new GuildsResourceImpl$getCurrentUserGuilds$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function GuildsResourceImpl$getCurrentUserGuildsBlocking$slambda(this$0, $request, resultContinuation) {
    this.z60_1 = this$0;
    this.a61_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GuildsResourceImpl$getCurrentUserGuildsBlocking$slambda).c61 = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GuildsResourceImpl$getCurrentUserGuildsBlocking$slambda).e9 = function (p1, $completion) {
    return this.c61((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GuildsResourceImpl$getCurrentUserGuildsBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.z60_1.a58(this.a61_1, this);
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
  protoOf(GuildsResourceImpl$getCurrentUserGuildsBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new GuildsResourceImpl$getCurrentUserGuildsBlocking$slambda(this.z60_1, this.a61_1, completion);
    i.b61_1 = $this$toBlocking;
    return i;
  };
  function GuildsResourceImpl$getCurrentUserGuildsBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new GuildsResourceImpl$getCurrentUserGuildsBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.c61($this$toBlocking, $completion);
    }, 1);
  }
  function GuildsResourceImpl$getGuild$slambda(this$0, $guildId, resultContinuation) {
    this.l61_1 = this$0;
    this.m61_1 = $guildId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GuildsResourceImpl$getGuild$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GuildsResourceImpl$getGuild$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GuildsResourceImpl$getGuild$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.l61_1.t5s((new HttpRequest()).b53(this.l61_1.r5s_1 + '/guilds/' + this.m61_1)).c53(MediaType_getInstance().l5t_1).g53(this);
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
  protoOf(GuildsResourceImpl$getGuild$slambda).p2n = function ($this$withContext, completion) {
    var i = new GuildsResourceImpl$getGuild$slambda(this.l61_1, this.m61_1, completion);
    i.n61_1 = $this$withContext;
    return i;
  };
  function GuildsResourceImpl$getGuild$slambda_0(this$0, $guildId, resultContinuation) {
    var i = new GuildsResourceImpl$getGuild$slambda(this$0, $guildId, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function GuildsResourceImpl$getGuildBlocking$slambda(this$0, $guildId, resultContinuation) {
    this.w61_1 = this$0;
    this.x61_1 = $guildId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GuildsResourceImpl$getGuildBlocking$slambda).z61 = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GuildsResourceImpl$getGuildBlocking$slambda).e9 = function (p1, $completion) {
    return this.z61((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GuildsResourceImpl$getGuildBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.w61_1.d58(this.x61_1, this);
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
  protoOf(GuildsResourceImpl$getGuildBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new GuildsResourceImpl$getGuildBlocking$slambda(this.w61_1, this.x61_1, completion);
    i.y61_1 = $this$toBlocking;
    return i;
  };
  function GuildsResourceImpl$getGuildBlocking$slambda_0(this$0, $guildId, resultContinuation) {
    var i = new GuildsResourceImpl$getGuildBlocking$slambda(this$0, $guildId, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.z61($this$toBlocking, $completion);
    }, 1);
  }
  function GuildsResourceImpl$listGuildChannels$slambda(this$0, $guildId, resultContinuation) {
    this.i62_1 = this$0;
    this.j62_1 = $guildId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GuildsResourceImpl$listGuildChannels$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GuildsResourceImpl$listGuildChannels$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GuildsResourceImpl$listGuildChannels$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.i62_1.t5s((new HttpRequest()).b53(this.i62_1.r5s_1 + '/guilds/' + this.j62_1 + '/channels')).c53(MediaType_getInstance().l5t_1).g53(this);
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
  protoOf(GuildsResourceImpl$listGuildChannels$slambda).p2n = function ($this$withContext, completion) {
    var i = new GuildsResourceImpl$listGuildChannels$slambda(this.i62_1, this.j62_1, completion);
    i.k62_1 = $this$withContext;
    return i;
  };
  function GuildsResourceImpl$listGuildChannels$slambda_0(this$0, $guildId, resultContinuation) {
    var i = new GuildsResourceImpl$listGuildChannels$slambda(this$0, $guildId, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function GuildsResourceImpl$listGuildChannelsBlocking$slambda(this$0, $guildId, resultContinuation) {
    this.t62_1 = this$0;
    this.u62_1 = $guildId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(GuildsResourceImpl$listGuildChannelsBlocking$slambda).s5u = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GuildsResourceImpl$listGuildChannelsBlocking$slambda).e9 = function (p1, $completion) {
    return this.s5u((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(GuildsResourceImpl$listGuildChannelsBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.t62_1.g58(this.u62_1, this);
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
  protoOf(GuildsResourceImpl$listGuildChannelsBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new GuildsResourceImpl$listGuildChannelsBlocking$slambda(this.t62_1, this.u62_1, completion);
    i.v62_1 = $this$toBlocking;
    return i;
  };
  function GuildsResourceImpl$listGuildChannelsBlocking$slambda_0(this$0, $guildId, resultContinuation) {
    var i = new GuildsResourceImpl$listGuildChannelsBlocking$slambda(this$0, $guildId, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.s5u($this$toBlocking, $completion);
    }, 1);
  }
  function $getCurrentUserGuildsCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e63_1 = _this__u8e3s4;
    this.f63_1 = request;
  }
  protoOf($getCurrentUserGuildsCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.j63_1 = this.e63_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.i63_1 = this.j63_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, GuildsResourceImpl$getCurrentUserGuilds$slambda_0(this.e63_1, this.f63_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h63_1 = suspendResult;
            var containsArg = this.h63_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.h63_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ob(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Guild), arrayOf([]), false))]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.h63_1);
              this_3.json = this.h63_1.b54();
              tmp_1.g63_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.i63_1.u5s(this.h63_1);
          case 4:
            return this.g63_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $getCurrentUserGuilds$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s63_1 = _this__u8e3s4;
    this.t63_1 = request;
  }
  protoOf($getCurrentUserGuilds$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.s63_1.getCurrentUserGuilds === protoOf(GuildsResourceImpl).getCurrentUserGuilds) {
              this.i8_1 = 2;
              suspendResult = this.s63_1.z57(this.t63_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.s63_1.getCurrentUserGuilds(this.t63_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.u63_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.u63_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.u63_1;
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
  function $getGuildCOROUTINE$(_this__u8e3s4, guildId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f64_1 = _this__u8e3s4;
    this.g64_1 = guildId;
  }
  protoOf($getGuildCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.k64_1 = this.f64_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.j64_1 = this.k64_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, GuildsResourceImpl$getGuild$slambda_0(this.f64_1, this.g64_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i64_1 = suspendResult;
            var containsArg = this.i64_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.i64_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(getKClass(Guild), arrayOf([]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.i64_1);
              this_3.json = this.i64_1.b54();
              tmp_1.h64_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.j64_1.u5s(this.i64_1);
          case 4:
            return this.h64_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $getGuild$suspendBridgeCOROUTINE$(_this__u8e3s4, guildId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t64_1 = _this__u8e3s4;
    this.u64_1 = guildId;
  }
  protoOf($getGuild$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.t64_1.getGuild === protoOf(GuildsResourceImpl).getGuild) {
              this.i8_1 = 2;
              suspendResult = this.t64_1.c58(this.u64_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.t64_1.getGuild(this.u64_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.v64_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.v64_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.v64_1;
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
  function $listGuildChannelsCOROUTINE$(_this__u8e3s4, guildId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e65_1 = _this__u8e3s4;
    this.f65_1 = guildId;
  }
  protoOf($listGuildChannelsCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.j65_1 = this.e65_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.i65_1 = this.j65_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, GuildsResourceImpl$listGuildChannels$slambda_0(this.e65_1, this.f65_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h65_1 = suspendResult;
            var containsArg = this.h65_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.h65_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ob(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Channel), arrayOf([]), false))]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.h65_1);
              this_3.json = this.h65_1.b54();
              tmp_1.g65_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.i65_1.u5s(this.h65_1);
          case 4:
            return this.g65_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $listGuildChannels$suspendBridgeCOROUTINE$(_this__u8e3s4, guildId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s65_1 = _this__u8e3s4;
    this.t65_1 = guildId;
  }
  protoOf($listGuildChannels$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.s65_1.listGuildChannels === protoOf(GuildsResourceImpl).listGuildChannels) {
              this.i8_1 = 2;
              suspendResult = this.s65_1.f58(this.t65_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.s65_1.listGuildChannels(this.t65_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.u65_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.u65_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.u65_1;
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
  function GuildsResourceImpl(uri, token) {
    AbstractResourceImpl.call(this, uri, token);
  }
  protoOf(GuildsResourceImpl).z57 = function (request, $completion) {
    var tmp = new $getCurrentUserGuildsCOROUTINE$(this, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GuildsResourceImpl).getCurrentUserGuilds = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.z57(request, $completion);
    });
  };
  protoOf(GuildsResourceImpl).a58 = function (request, $completion) {
    var tmp = new $getCurrentUserGuilds$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GuildsResourceImpl).b58 = function (request) {
    return toBlocking(GuildsResourceImpl$getCurrentUserGuildsBlocking$slambda_0(this, request, null));
  };
  protoOf(GuildsResourceImpl).c58 = function (guildId, $completion) {
    var tmp = new $getGuildCOROUTINE$(this, guildId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GuildsResourceImpl).getGuild = function (guildId) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.c58(guildId, $completion);
    });
  };
  protoOf(GuildsResourceImpl).d58 = function (guildId, $completion) {
    var tmp = new $getGuild$suspendBridgeCOROUTINE$(this, guildId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GuildsResourceImpl).e58 = function (guildId) {
    return toBlocking(GuildsResourceImpl$getGuildBlocking$slambda_0(this, guildId, null));
  };
  protoOf(GuildsResourceImpl).f58 = function (guildId, $completion) {
    var tmp = new $listGuildChannelsCOROUTINE$(this, guildId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GuildsResourceImpl).listGuildChannels = function (guildId) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.f58(guildId, $completion);
    });
  };
  protoOf(GuildsResourceImpl).g58 = function (guildId, $completion) {
    var tmp = new $listGuildChannels$suspendBridgeCOROUTINE$(this, guildId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(GuildsResourceImpl).h58 = function (guildId) {
    return toBlocking(GuildsResourceImpl$listGuildChannelsBlocking$slambda_0(this, guildId, null));
  };
  function MessagesResourceImpl$CreateMessageBody$Companion$$childSerializers$_anonymous__vkyigp() {
    return new ReferenceArraySerializer(getKClass(AttachmentBody), $serializer_getInstance_47());
  }
  function Companion_49() {
    Companion_instance_50 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v65_1 = [null, null, null, lazy(tmp_0, MessagesResourceImpl$CreateMessageBody$Companion$$childSerializers$_anonymous__vkyigp)];
  }
  var Companion_instance_50;
  function Companion_getInstance_50() {
    if (Companion_instance_50 == null)
      new Companion_49();
    return Companion_instance_50;
  }
  function $serializer_45() {
    $serializer_instance_45 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.internal.api.MessagesResourceImpl.CreateMessageBody', this, 4);
    tmp0_serialDesc.dy('content', false);
    tmp0_serialDesc.dy('tts', false);
    tmp0_serialDesc.dy('messageReference', false);
    tmp0_serialDesc.dy('attachments', false);
    this.w65_1 = tmp0_serialDesc;
  }
  protoOf($serializer_45).x65 = function (encoder, value) {
    var tmp0_desc = this.w65_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    var tmp2_cached = Companion_getInstance_50().v65_1;
    tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.y65_1);
    tmp1_output.ns(tmp0_desc, 1, BooleanSerializer_getInstance(), value.z65_1);
    tmp1_output.ns(tmp0_desc, 2, $serializer_getInstance_46(), value.a66_1);
    tmp1_output.ns(tmp0_desc, 3, tmp2_cached[3].n1(), value.b66_1);
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_45).tn = function (encoder, value) {
    return this.x65(encoder, value instanceof CreateMessageBody ? value : THROW_CCE());
  };
  protoOf($serializer_45).un = function (decoder) {
    var tmp0_desc = this.w65_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.uq(tmp0_desc);
    var tmp9_cached = Companion_getInstance_50().v65_1;
    if (tmp8_input.kr()) {
      tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ir(tmp0_desc, 2, $serializer_getInstance_46(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ir(tmp0_desc, 3, tmp9_cached[3].n1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ir(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ir(tmp0_desc, 2, $serializer_getInstance_46(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ir(tmp0_desc, 3, tmp9_cached[3].n1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.vq(tmp0_desc);
    return CreateMessageBody_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_45).sn = function () {
    return this.w65_1;
  };
  protoOf($serializer_45).sy = function () {
    var tmp0_cached = Companion_getInstance_50().v65_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable($serializer_getInstance_46()), get_nullable(tmp0_cached[3].n1())];
  };
  var $serializer_instance_45;
  function $serializer_getInstance_45() {
    if ($serializer_instance_45 == null)
      new $serializer_45();
    return $serializer_instance_45;
  }
  function CreateMessageBody_init_$Init$(seen0, content, tts, messageReference, attachments, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_45().w65_1);
    }
    $this.y65_1 = content;
    $this.z65_1 = tts;
    $this.a66_1 = messageReference;
    $this.b66_1 = attachments;
    return $this;
  }
  function CreateMessageBody_init_$Create$(seen0, content, tts, messageReference, attachments, serializationConstructorMarker) {
    return CreateMessageBody_init_$Init$(seen0, content, tts, messageReference, attachments, serializationConstructorMarker, objectCreate(protoOf(CreateMessageBody)));
  }
  function Companion_50() {
  }
  var Companion_instance_51;
  function Companion_getInstance_51() {
    return Companion_instance_51;
  }
  function $serializer_46() {
    $serializer_instance_46 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.internal.api.MessagesResourceImpl.MessageReferenceBody', this, 1);
    tmp0_serialDesc.dy('messageId', false);
    this.c66_1 = tmp0_serialDesc;
  }
  protoOf($serializer_46).d66 = function (encoder, value) {
    var tmp0_desc = this.c66_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    tmp1_output.js(tmp0_desc, 0, value.e66_1);
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_46).tn = function (encoder, value) {
    return this.d66(encoder, value instanceof MessageReferenceBody ? value : THROW_CCE());
  };
  protoOf($serializer_46).un = function (decoder) {
    var tmp0_desc = this.c66_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.uq(tmp0_desc);
    if (tmp5_input.kr()) {
      tmp4_local0 = tmp5_input.er(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.er(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.vq(tmp0_desc);
    return MessageReferenceBody_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_46).sn = function () {
    return this.c66_1;
  };
  protoOf($serializer_46).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  var $serializer_instance_46;
  function $serializer_getInstance_46() {
    if ($serializer_instance_46 == null)
      new $serializer_46();
    return $serializer_instance_46;
  }
  function MessageReferenceBody_init_$Init$(seen0, messageId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_46().c66_1);
    }
    $this.e66_1 = messageId;
    return $this;
  }
  function MessageReferenceBody_init_$Create$(seen0, messageId, serializationConstructorMarker) {
    return MessageReferenceBody_init_$Init$(seen0, messageId, serializationConstructorMarker, objectCreate(protoOf(MessageReferenceBody)));
  }
  function Companion_51() {
  }
  var Companion_instance_52;
  function Companion_getInstance_52() {
    return Companion_instance_52;
  }
  function $serializer_47() {
    $serializer_instance_47 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.internal.api.MessagesResourceImpl.AttachmentBody', this, 3);
    tmp0_serialDesc.dy('id', false);
    tmp0_serialDesc.dy('filename', false);
    tmp0_serialDesc.dy('description', false);
    this.f66_1 = tmp0_serialDesc;
  }
  protoOf($serializer_47).g66 = function (encoder, value) {
    var tmp0_desc = this.f66_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    tmp1_output.es(tmp0_desc, 0, value.h66_1);
    tmp1_output.js(tmp0_desc, 1, value.i66_1);
    tmp1_output.ns(tmp0_desc, 2, StringSerializer_getInstance(), value.j66_1);
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_47).tn = function (encoder, value) {
    return this.g66(encoder, value instanceof AttachmentBody ? value : THROW_CCE());
  };
  protoOf($serializer_47).un = function (decoder) {
    var tmp0_desc = this.f66_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.uq(tmp0_desc);
    if (tmp7_input.kr()) {
      tmp4_local0 = tmp7_input.zq(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.er(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.zq(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.er(tmp0_desc, 1);
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
    return AttachmentBody_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_47).sn = function () {
    return this.f66_1;
  };
  protoOf($serializer_47).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_47;
  function $serializer_getInstance_47() {
    if ($serializer_instance_47 == null)
      new $serializer_47();
    return $serializer_instance_47;
  }
  function AttachmentBody_init_$Init$(seen0, id, filename, description, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_47().f66_1);
    }
    $this.h66_1 = id;
    $this.i66_1 = filename;
    $this.j66_1 = description;
    return $this;
  }
  function AttachmentBody_init_$Create$(seen0, id, filename, description, serializationConstructorMarker) {
    return AttachmentBody_init_$Init$(seen0, id, filename, description, serializationConstructorMarker, objectCreate(protoOf(AttachmentBody)));
  }
  function Companion_52() {
  }
  var Companion_instance_53;
  function Companion_getInstance_53() {
    return Companion_instance_53;
  }
  function $serializer_48() {
    $serializer_instance_48 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('work.socialhub.kdiscord.internal.api.MessagesResourceImpl.EditMessageBody', this, 1);
    tmp0_serialDesc.dy('content', false);
    this.k66_1 = tmp0_serialDesc;
  }
  protoOf($serializer_48).l66 = function (encoder, value) {
    var tmp0_desc = this.k66_1;
    var tmp1_output = encoder.uq(tmp0_desc);
    tmp1_output.ns(tmp0_desc, 0, StringSerializer_getInstance(), value.m66_1);
    tmp1_output.vq(tmp0_desc);
  };
  protoOf($serializer_48).tn = function (encoder, value) {
    return this.l66(encoder, value instanceof EditMessageBody ? value : THROW_CCE());
  };
  protoOf($serializer_48).un = function (decoder) {
    var tmp0_desc = this.k66_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.uq(tmp0_desc);
    if (tmp5_input.kr()) {
      tmp4_local0 = tmp5_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.lr(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.ir(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.vq(tmp0_desc);
    return EditMessageBody_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_48).sn = function () {
    return this.k66_1;
  };
  protoOf($serializer_48).sy = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_48;
  function $serializer_getInstance_48() {
    if ($serializer_instance_48 == null)
      new $serializer_48();
    return $serializer_instance_48;
  }
  function EditMessageBody_init_$Init$(seen0, content, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_48().k66_1);
    }
    $this.m66_1 = content;
    return $this;
  }
  function EditMessageBody_init_$Create$(seen0, content, serializationConstructorMarker) {
    return EditMessageBody_init_$Init$(seen0, content, serializationConstructorMarker, objectCreate(protoOf(EditMessageBody)));
  }
  function CreateMessageBody(content, tts, messageReference, attachments) {
    Companion_getInstance_50();
    this.y65_1 = content;
    this.z65_1 = tts;
    this.a66_1 = messageReference;
    this.b66_1 = attachments;
  }
  function MessageReferenceBody(messageId) {
    this.e66_1 = messageId;
  }
  function AttachmentBody(id, filename, description) {
    this.h66_1 = id;
    this.i66_1 = filename;
    this.j66_1 = description;
  }
  function EditMessageBody(content) {
    this.m66_1 = content;
  }
  function MessagesResourceImpl$list$slambda(this$0, $request, resultContinuation) {
    this.v66_1 = this$0;
    this.w66_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessagesResourceImpl$list$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl$list$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessagesResourceImpl$list$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.v66_1.t5s(this.v66_1.v5s(this.v66_1.v5s(this.v66_1.v5s(this.v66_1.v5s((new HttpRequest()).b53(this.v66_1.r5s_1 + '/channels/' + this.w66_1.channelId + '/messages'), 'limit', this.w66_1.limit), 'around', this.w66_1.around), 'before', this.w66_1.before), 'after', this.w66_1.after)).c53(MediaType_getInstance().l5t_1).g53(this);
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
  protoOf(MessagesResourceImpl$list$slambda).p2n = function ($this$withContext, completion) {
    var i = new MessagesResourceImpl$list$slambda(this.v66_1, this.w66_1, completion);
    i.x66_1 = $this$withContext;
    return i;
  };
  function MessagesResourceImpl$list$slambda_0(this$0, $request, resultContinuation) {
    var i = new MessagesResourceImpl$list$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function MessagesResourceImpl$listBlocking$slambda(this$0, $request, resultContinuation) {
    this.g67_1 = this$0;
    this.h67_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessagesResourceImpl$listBlocking$slambda).j67 = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl$listBlocking$slambda).e9 = function (p1, $completion) {
    return this.j67((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessagesResourceImpl$listBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.g67_1.j58(this.h67_1, this);
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
  protoOf(MessagesResourceImpl$listBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new MessagesResourceImpl$listBlocking$slambda(this.g67_1, this.h67_1, completion);
    i.i67_1 = $this$toBlocking;
    return i;
  };
  function MessagesResourceImpl$listBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new MessagesResourceImpl$listBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.j67($this$toBlocking, $completion);
    }, 1);
  }
  function MessagesResourceImpl$get$slambda(this$0, $channelId, $messageId, resultContinuation) {
    this.s67_1 = this$0;
    this.t67_1 = $channelId;
    this.u67_1 = $messageId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessagesResourceImpl$get$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl$get$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessagesResourceImpl$get$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.s67_1.t5s((new HttpRequest()).b53(this.s67_1.r5s_1 + '/channels/' + this.t67_1 + '/messages/' + this.u67_1)).c53(MediaType_getInstance().l5t_1).g53(this);
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
  protoOf(MessagesResourceImpl$get$slambda).p2n = function ($this$withContext, completion) {
    var i = new MessagesResourceImpl$get$slambda(this.s67_1, this.t67_1, this.u67_1, completion);
    i.v67_1 = $this$withContext;
    return i;
  };
  function MessagesResourceImpl$get$slambda_0(this$0, $channelId, $messageId, resultContinuation) {
    var i = new MessagesResourceImpl$get$slambda(this$0, $channelId, $messageId, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function MessagesResourceImpl$getBlocking$slambda(this$0, $channelId, $messageId, resultContinuation) {
    this.e68_1 = this$0;
    this.f68_1 = $channelId;
    this.g68_1 = $messageId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessagesResourceImpl$getBlocking$slambda).i68 = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl$getBlocking$slambda).e9 = function (p1, $completion) {
    return this.i68((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessagesResourceImpl$getBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.e68_1.m58(this.f68_1, this.g68_1, this);
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
  protoOf(MessagesResourceImpl$getBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new MessagesResourceImpl$getBlocking$slambda(this.e68_1, this.f68_1, this.g68_1, completion);
    i.h68_1 = $this$toBlocking;
    return i;
  };
  function MessagesResourceImpl$getBlocking$slambda_0(this$0, $channelId, $messageId, resultContinuation) {
    var i = new MessagesResourceImpl$getBlocking$slambda(this$0, $channelId, $messageId, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.i68($this$toBlocking, $completion);
    }, 1);
  }
  function MessagesResourceImpl$create$slambda($request, this$0, resultContinuation) {
    this.r68_1 = $request;
    this.s68_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessagesResourceImpl$create$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl$create$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessagesResourceImpl$create$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            var files = this.r68_1.files;
            var tmp_0;
            if (files == null) {
              tmp_0 = null;
            } else {
              var destination = ArrayList_init_$Create$(files.length);
              var index = 0;
              var inductionVariable = 0;
              var last = files.length;
              while (inductionVariable < last) {
                var item = files[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var _unary__edvuaz = index;
                index = _unary__edvuaz + 1 | 0;
                destination.c1(new AttachmentBody(_unary__edvuaz, item.filename, item.description));
              }
              tmp_0 = destination;
            }

            var tmp1_safe_receiver = tmp_0;
            var tmp_1;
            if (tmp1_safe_receiver == null) {
              tmp_1 = null;
            } else {
              tmp_1 = copyToArray(tmp1_safe_receiver);
            }

            var attachments = tmp_1;
            var tmp_2 = this.r68_1.content;
            var tmp_3 = this.r68_1.tts;
            var tmp2_safe_receiver = this.r68_1.replyMessageId;
            var tmp_4;
            if (tmp2_safe_receiver == null) {
              tmp_4 = null;
            } else {
              tmp_4 = new MessageReferenceBody(tmp2_safe_receiver);
            }

            var body = new CreateMessageBody(tmp_2, tmp_3, tmp_4, attachments);
            var http = this.s68_1.t5s((new HttpRequest()).b53(this.s68_1.r5s_1 + '/channels/' + this.r68_1.channelId + '/messages')).c53(MediaType_getInstance().l5t_1);
            var tmp_5;
            if (files == null) {
              tmp_5 = true;
            } else {
              tmp_5 = files.length === 0;
            }

            if (tmp_5) {
              this.i8_1 = 2;
              var this_0 = InternalUtility_getInstance().p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(getKClass(CreateMessageBody), arrayOf([]), false));
              suspendResult = http.k51(this_0.r18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), body)).h53(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var this_3 = InternalUtility_getInstance().p5s_1;
              var this_4 = this_3.jr();
              var this_5 = serializer(this_4, createKType(getKClass(CreateMessageBody), arrayOf([]), false));
              http.f53('payload_json', this_3.r18(isInterface(this_5, KSerializer) ? this_5 : THROW_CCE(), body));
              var index_0 = 0;
              var inductionVariable_0 = 0;
              var last_0 = files.length;
              while (inductionVariable_0 < last_0) {
                var item_0 = files[inductionVariable_0];
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var _unary__edvuaz_0 = index_0;
                index_0 = _unary__edvuaz_0 + 1 | 0;
                http.j51('files[' + _unary__edvuaz_0 + ']', item_0.filename, item_0.bytes);
              }
              this.i8_1 = 1;
              suspendResult = http.h53(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.u68_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.u68_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.u68_1;
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
  protoOf(MessagesResourceImpl$create$slambda).p2n = function ($this$withContext, completion) {
    var i = new MessagesResourceImpl$create$slambda(this.r68_1, this.s68_1, completion);
    i.t68_1 = $this$withContext;
    return i;
  };
  function MessagesResourceImpl$create$slambda_0($request, this$0, resultContinuation) {
    var i = new MessagesResourceImpl$create$slambda($request, this$0, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function MessagesResourceImpl$createBlocking$slambda(this$0, $request, resultContinuation) {
    this.d69_1 = this$0;
    this.e69_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessagesResourceImpl$createBlocking$slambda).i68 = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl$createBlocking$slambda).e9 = function (p1, $completion) {
    return this.i68((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessagesResourceImpl$createBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.d69_1.p58(this.e69_1, this);
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
  protoOf(MessagesResourceImpl$createBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new MessagesResourceImpl$createBlocking$slambda(this.d69_1, this.e69_1, completion);
    i.f69_1 = $this$toBlocking;
    return i;
  };
  function MessagesResourceImpl$createBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new MessagesResourceImpl$createBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.i68($this$toBlocking, $completion);
    }, 1);
  }
  function MessagesResourceImpl$edit$slambda(this$0, $request, resultContinuation) {
    this.o69_1 = this$0;
    this.p69_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessagesResourceImpl$edit$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl$edit$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessagesResourceImpl$edit$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            var tmp_0 = this.o69_1.t5s((new HttpRequest()).b53(this.o69_1.r5s_1 + '/channels/' + this.p69_1.channelId + '/messages/' + this.p69_1.messageId)).c53(MediaType_getInstance().l5t_1);
            var tmp0 = InternalUtility_getInstance();
            var obj = new EditMessageBody(this.p69_1.content);
            var this_0 = tmp0.p5s_1;
            var this_1 = this_0.jr();
            var this_2 = serializer(this_1, createKType(getKClass(EditMessageBody), arrayOf([]), false));
            suspendResult = tmp_0.k51(this_0.r18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj)).k53(this);
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
  protoOf(MessagesResourceImpl$edit$slambda).p2n = function ($this$withContext, completion) {
    var i = new MessagesResourceImpl$edit$slambda(this.o69_1, this.p69_1, completion);
    i.q69_1 = $this$withContext;
    return i;
  };
  function MessagesResourceImpl$edit$slambda_0(this$0, $request, resultContinuation) {
    var i = new MessagesResourceImpl$edit$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function MessagesResourceImpl$editBlocking$slambda(this$0, $request, resultContinuation) {
    this.z69_1 = this$0;
    this.a6a_1 = $request;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessagesResourceImpl$editBlocking$slambda).i68 = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl$editBlocking$slambda).e9 = function (p1, $completion) {
    return this.i68((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessagesResourceImpl$editBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.z69_1.s58(this.a6a_1, this);
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
  protoOf(MessagesResourceImpl$editBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new MessagesResourceImpl$editBlocking$slambda(this.z69_1, this.a6a_1, completion);
    i.b6a_1 = $this$toBlocking;
    return i;
  };
  function MessagesResourceImpl$editBlocking$slambda_0(this$0, $request, resultContinuation) {
    var i = new MessagesResourceImpl$editBlocking$slambda(this$0, $request, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.i68($this$toBlocking, $completion);
    }, 1);
  }
  function MessagesResourceImpl$delete$slambda(this$0, $channelId, $messageId, resultContinuation) {
    this.k6a_1 = this$0;
    this.l6a_1 = $channelId;
    this.m6a_1 = $messageId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessagesResourceImpl$delete$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl$delete$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessagesResourceImpl$delete$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.k6a_1.t5s((new HttpRequest()).b53(this.k6a_1.r5s_1 + '/channels/' + this.l6a_1 + '/messages/' + this.m6a_1)).c53(MediaType_getInstance().l5t_1).j53(this);
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
  protoOf(MessagesResourceImpl$delete$slambda).p2n = function ($this$withContext, completion) {
    var i = new MessagesResourceImpl$delete$slambda(this.k6a_1, this.l6a_1, this.m6a_1, completion);
    i.n6a_1 = $this$withContext;
    return i;
  };
  function MessagesResourceImpl$delete$slambda_0(this$0, $channelId, $messageId, resultContinuation) {
    var i = new MessagesResourceImpl$delete$slambda(this$0, $channelId, $messageId, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function MessagesResourceImpl$deleteBlocking$slambda(this$0, $channelId, $messageId, resultContinuation) {
    this.w6a_1 = this$0;
    this.x6a_1 = $channelId;
    this.y6a_1 = $messageId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MessagesResourceImpl$deleteBlocking$slambda).a6b = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl$deleteBlocking$slambda).e9 = function (p1, $completion) {
    return this.a6b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MessagesResourceImpl$deleteBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.w6a_1.v58(this.x6a_1, this.y6a_1, this);
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
  protoOf(MessagesResourceImpl$deleteBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new MessagesResourceImpl$deleteBlocking$slambda(this.w6a_1, this.x6a_1, this.y6a_1, completion);
    i.z6a_1 = $this$toBlocking;
    return i;
  };
  function MessagesResourceImpl$deleteBlocking$slambda_0(this$0, $channelId, $messageId, resultContinuation) {
    var i = new MessagesResourceImpl$deleteBlocking$slambda(this$0, $channelId, $messageId, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.a6b($this$toBlocking, $completion);
    }, 1);
  }
  function $listCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j6b_1 = _this__u8e3s4;
    this.k6b_1 = request;
  }
  protoOf($listCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.o6b_1 = this.j6b_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.n6b_1 = this.o6b_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, MessagesResourceImpl$list$slambda_0(this.j6b_1, this.k6b_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m6b_1 = suspendResult;
            var containsArg = this.m6b_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.m6b_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ob(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Message), arrayOf([]), false))]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.m6b_1);
              this_3.json = this.m6b_1.b54();
              tmp_1.l6b_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.n6b_1.u5s(this.m6b_1);
          case 4:
            return this.l6b_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $list$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x6b_1 = _this__u8e3s4;
    this.y6b_1 = request;
  }
  protoOf($list$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.x6b_1.list === protoOf(MessagesResourceImpl).list) {
              this.i8_1 = 2;
              suspendResult = this.x6b_1.i58(this.y6b_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.x6b_1.list(this.y6b_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.z6b_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.z6b_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.z6b_1;
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
  function $getCOROUTINE$(_this__u8e3s4, channelId, messageId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k6c_1 = _this__u8e3s4;
    this.l6c_1 = channelId;
    this.m6c_1 = messageId;
  }
  protoOf($getCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.q6c_1 = this.k6c_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.p6c_1 = this.q6c_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, MessagesResourceImpl$get$slambda_0(this.k6c_1, this.l6c_1, this.m6c_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o6c_1 = suspendResult;
            var containsArg = this.o6c_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.o6c_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(getKClass(Message), arrayOf([]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.o6c_1);
              this_3.json = this.o6c_1.b54();
              tmp_1.n6c_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.p6c_1.u5s(this.o6c_1);
          case 4:
            return this.n6c_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $get$suspendBridgeCOROUTINE$(_this__u8e3s4, channelId, messageId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z6c_1 = _this__u8e3s4;
    this.a6d_1 = channelId;
    this.b6d_1 = messageId;
  }
  protoOf($get$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.z6c_1.get === protoOf(MessagesResourceImpl).get) {
              this.i8_1 = 2;
              suspendResult = this.z6c_1.l58(this.a6d_1, this.b6d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.z6c_1.get(this.a6d_1, this.b6d_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.c6d_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.c6d_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.c6d_1;
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
  function $createCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l6d_1 = _this__u8e3s4;
    this.m6d_1 = request;
  }
  protoOf($createCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.q6d_1 = this.l6d_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.p6d_1 = this.q6d_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, MessagesResourceImpl$create$slambda_0(this.m6d_1, this.l6d_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o6d_1 = suspendResult;
            var containsArg = this.o6d_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.o6d_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(getKClass(Message), arrayOf([]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.o6d_1);
              this_3.json = this.o6d_1.b54();
              tmp_1.n6d_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.p6d_1.u5s(this.o6d_1);
          case 4:
            return this.n6d_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $create$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z6d_1 = _this__u8e3s4;
    this.a6e_1 = request;
  }
  protoOf($create$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.z6d_1.create === protoOf(MessagesResourceImpl).create) {
              this.i8_1 = 2;
              suspendResult = this.z6d_1.o58(this.a6e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.z6d_1.create(this.a6e_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.b6e_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.b6e_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.b6e_1;
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
  function $editCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k6e_1 = _this__u8e3s4;
    this.l6e_1 = request;
  }
  protoOf($editCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.p6e_1 = this.k6e_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.o6e_1 = this.p6e_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, MessagesResourceImpl$edit$slambda_0(this.k6e_1, this.l6e_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n6e_1 = suspendResult;
            var containsArg = this.n6e_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.n6e_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(getKClass(Message), arrayOf([]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.n6e_1);
              this_3.json = this.n6e_1.b54();
              tmp_1.m6e_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.o6e_1.u5s(this.n6e_1);
          case 4:
            return this.m6e_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $edit$suspendBridgeCOROUTINE$(_this__u8e3s4, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y6e_1 = _this__u8e3s4;
    this.z6e_1 = request;
  }
  protoOf($edit$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.y6e_1.edit === protoOf(MessagesResourceImpl).edit) {
              this.i8_1 = 2;
              suspendResult = this.y6e_1.r58(this.z6e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.y6e_1.edit(this.z6e_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.a6f_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.a6f_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.a6f_1;
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
  function $deleteCOROUTINE$(_this__u8e3s4, channelId, messageId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j6f_1 = _this__u8e3s4;
    this.k6f_1 = channelId;
    this.l6f_1 = messageId;
  }
  protoOf($deleteCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.p6f_1 = this.j6f_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.o6f_1 = this.p6f_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, MessagesResourceImpl$delete$slambda_0(this.j6f_1, this.k6f_1, this.l6f_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n6f_1 = suspendResult;
            var containsArg = this.n6f_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var this_0 = new ResponseUnit();
              this_0.limit = Companion_instance_47.of(this.n6f_1);
              tmp_1.m6f_1 = this_0;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.o6f_1.u5s(this.n6f_1);
          case 4:
            return this.m6f_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $delete$suspendBridgeCOROUTINE$(_this__u8e3s4, channelId, messageId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y6f_1 = _this__u8e3s4;
    this.z6f_1 = channelId;
    this.a6g_1 = messageId;
  }
  protoOf($delete$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.y6f_1.delete === protoOf(MessagesResourceImpl).delete) {
              this.i8_1 = 2;
              suspendResult = this.y6f_1.u58(this.z6f_1, this.a6g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.y6f_1.delete(this.z6f_1, this.a6g_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.b6g_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.b6g_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.b6g_1;
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
  function MessagesResourceImpl(uri, token) {
    AbstractResourceImpl.call(this, uri, token);
  }
  protoOf(MessagesResourceImpl).i58 = function (request, $completion) {
    var tmp = new $listCOROUTINE$(this, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl).list = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.i58(request, $completion);
    });
  };
  protoOf(MessagesResourceImpl).j58 = function (request, $completion) {
    var tmp = new $list$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl).k58 = function (request) {
    return toBlocking(MessagesResourceImpl$listBlocking$slambda_0(this, request, null));
  };
  protoOf(MessagesResourceImpl).l58 = function (channelId, messageId, $completion) {
    var tmp = new $getCOROUTINE$(this, channelId, messageId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl).get = function (channelId, messageId) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.l58(channelId, messageId, $completion);
    });
  };
  protoOf(MessagesResourceImpl).m58 = function (channelId, messageId, $completion) {
    var tmp = new $get$suspendBridgeCOROUTINE$(this, channelId, messageId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl).n58 = function (channelId, messageId) {
    return toBlocking(MessagesResourceImpl$getBlocking$slambda_0(this, channelId, messageId, null));
  };
  protoOf(MessagesResourceImpl).o58 = function (request, $completion) {
    var tmp = new $createCOROUTINE$(this, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl).create = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.o58(request, $completion);
    });
  };
  protoOf(MessagesResourceImpl).p58 = function (request, $completion) {
    var tmp = new $create$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl).q58 = function (request) {
    return toBlocking(MessagesResourceImpl$createBlocking$slambda_0(this, request, null));
  };
  protoOf(MessagesResourceImpl).r58 = function (request, $completion) {
    var tmp = new $editCOROUTINE$(this, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl).edit = function (request) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.r58(request, $completion);
    });
  };
  protoOf(MessagesResourceImpl).s58 = function (request, $completion) {
    var tmp = new $edit$suspendBridgeCOROUTINE$(this, request, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl).t58 = function (request) {
    return toBlocking(MessagesResourceImpl$editBlocking$slambda_0(this, request, null));
  };
  protoOf(MessagesResourceImpl).u58 = function (channelId, messageId, $completion) {
    var tmp = new $deleteCOROUTINE$(this, channelId, messageId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl).delete = function (channelId, messageId) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.u58(channelId, messageId, $completion);
    });
  };
  protoOf(MessagesResourceImpl).v58 = function (channelId, messageId, $completion) {
    var tmp = new $delete$suspendBridgeCOROUTINE$(this, channelId, messageId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(MessagesResourceImpl).w58 = function (channelId, messageId) {
    return toBlocking(MessagesResourceImpl$deleteBlocking$slambda_0(this, channelId, messageId, null));
  };
  function ReactionsResourceImpl$createReaction$slambda(this$0, $channelId, $messageId, $emoji, resultContinuation) {
    this.k6g_1 = this$0;
    this.l6g_1 = $channelId;
    this.m6g_1 = $messageId;
    this.n6g_1 = $emoji;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReactionsResourceImpl$createReaction$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl$createReaction$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ReactionsResourceImpl$createReaction$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.k6g_1.t5s((new HttpRequest()).b53(this.k6g_1.r5s_1 + '/channels/' + this.l6g_1 + '/messages/' + this.m6g_1 + '/reactions/' + encodeURLPathPart(this.n6g_1) + '/@me')).c53(MediaType_getInstance().l5t_1).i53(this);
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
  protoOf(ReactionsResourceImpl$createReaction$slambda).p2n = function ($this$withContext, completion) {
    var i = new ReactionsResourceImpl$createReaction$slambda(this.k6g_1, this.l6g_1, this.m6g_1, this.n6g_1, completion);
    i.o6g_1 = $this$withContext;
    return i;
  };
  function ReactionsResourceImpl$createReaction$slambda_0(this$0, $channelId, $messageId, $emoji, resultContinuation) {
    var i = new ReactionsResourceImpl$createReaction$slambda(this$0, $channelId, $messageId, $emoji, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function ReactionsResourceImpl$createReactionBlocking$slambda(this$0, $channelId, $messageId, $emoji, resultContinuation) {
    this.x6g_1 = this$0;
    this.y6g_1 = $channelId;
    this.z6g_1 = $messageId;
    this.a6h_1 = $emoji;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReactionsResourceImpl$createReactionBlocking$slambda).a6b = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl$createReactionBlocking$slambda).e9 = function (p1, $completion) {
    return this.a6b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ReactionsResourceImpl$createReactionBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.x6g_1.y58(this.y6g_1, this.z6g_1, this.a6h_1, this);
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
  protoOf(ReactionsResourceImpl$createReactionBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new ReactionsResourceImpl$createReactionBlocking$slambda(this.x6g_1, this.y6g_1, this.z6g_1, this.a6h_1, completion);
    i.b6h_1 = $this$toBlocking;
    return i;
  };
  function ReactionsResourceImpl$createReactionBlocking$slambda_0(this$0, $channelId, $messageId, $emoji, resultContinuation) {
    var i = new ReactionsResourceImpl$createReactionBlocking$slambda(this$0, $channelId, $messageId, $emoji, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.a6b($this$toBlocking, $completion);
    }, 1);
  }
  function ReactionsResourceImpl$deleteOwnReaction$slambda(this$0, $channelId, $messageId, $emoji, resultContinuation) {
    this.k6h_1 = this$0;
    this.l6h_1 = $channelId;
    this.m6h_1 = $messageId;
    this.n6h_1 = $emoji;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReactionsResourceImpl$deleteOwnReaction$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl$deleteOwnReaction$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ReactionsResourceImpl$deleteOwnReaction$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.k6h_1.t5s((new HttpRequest()).b53(this.k6h_1.r5s_1 + '/channels/' + this.l6h_1 + '/messages/' + this.m6h_1 + '/reactions/' + encodeURLPathPart(this.n6h_1) + '/@me')).c53(MediaType_getInstance().l5t_1).j53(this);
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
  protoOf(ReactionsResourceImpl$deleteOwnReaction$slambda).p2n = function ($this$withContext, completion) {
    var i = new ReactionsResourceImpl$deleteOwnReaction$slambda(this.k6h_1, this.l6h_1, this.m6h_1, this.n6h_1, completion);
    i.o6h_1 = $this$withContext;
    return i;
  };
  function ReactionsResourceImpl$deleteOwnReaction$slambda_0(this$0, $channelId, $messageId, $emoji, resultContinuation) {
    var i = new ReactionsResourceImpl$deleteOwnReaction$slambda(this$0, $channelId, $messageId, $emoji, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function ReactionsResourceImpl$deleteOwnReactionBlocking$slambda(this$0, $channelId, $messageId, $emoji, resultContinuation) {
    this.x6h_1 = this$0;
    this.y6h_1 = $channelId;
    this.z6h_1 = $messageId;
    this.a6i_1 = $emoji;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReactionsResourceImpl$deleteOwnReactionBlocking$slambda).a6b = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl$deleteOwnReactionBlocking$slambda).e9 = function (p1, $completion) {
    return this.a6b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ReactionsResourceImpl$deleteOwnReactionBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.x6h_1.b59(this.y6h_1, this.z6h_1, this.a6i_1, this);
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
  protoOf(ReactionsResourceImpl$deleteOwnReactionBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new ReactionsResourceImpl$deleteOwnReactionBlocking$slambda(this.x6h_1, this.y6h_1, this.z6h_1, this.a6i_1, completion);
    i.b6i_1 = $this$toBlocking;
    return i;
  };
  function ReactionsResourceImpl$deleteOwnReactionBlocking$slambda_0(this$0, $channelId, $messageId, $emoji, resultContinuation) {
    var i = new ReactionsResourceImpl$deleteOwnReactionBlocking$slambda(this$0, $channelId, $messageId, $emoji, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.a6b($this$toBlocking, $completion);
    }, 1);
  }
  function ReactionsResourceImpl$getReactions$slambda(this$0, $channelId, $messageId, $emoji, resultContinuation) {
    this.k6i_1 = this$0;
    this.l6i_1 = $channelId;
    this.m6i_1 = $messageId;
    this.n6i_1 = $emoji;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReactionsResourceImpl$getReactions$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl$getReactions$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ReactionsResourceImpl$getReactions$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.k6i_1.t5s((new HttpRequest()).b53(this.k6i_1.r5s_1 + '/channels/' + this.l6i_1 + '/messages/' + this.m6i_1 + '/reactions/' + encodeURLPathPart(this.n6i_1))).c53(MediaType_getInstance().l5t_1).g53(this);
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
  protoOf(ReactionsResourceImpl$getReactions$slambda).p2n = function ($this$withContext, completion) {
    var i = new ReactionsResourceImpl$getReactions$slambda(this.k6i_1, this.l6i_1, this.m6i_1, this.n6i_1, completion);
    i.o6i_1 = $this$withContext;
    return i;
  };
  function ReactionsResourceImpl$getReactions$slambda_0(this$0, $channelId, $messageId, $emoji, resultContinuation) {
    var i = new ReactionsResourceImpl$getReactions$slambda(this$0, $channelId, $messageId, $emoji, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function ReactionsResourceImpl$getReactionsBlocking$slambda(this$0, $channelId, $messageId, $emoji, resultContinuation) {
    this.x6i_1 = this$0;
    this.y6i_1 = $channelId;
    this.z6i_1 = $messageId;
    this.a6j_1 = $emoji;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReactionsResourceImpl$getReactionsBlocking$slambda).c6j = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl$getReactionsBlocking$slambda).e9 = function (p1, $completion) {
    return this.c6j((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ReactionsResourceImpl$getReactionsBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.x6i_1.e59(this.y6i_1, this.z6i_1, this.a6j_1, this);
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
  protoOf(ReactionsResourceImpl$getReactionsBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new ReactionsResourceImpl$getReactionsBlocking$slambda(this.x6i_1, this.y6i_1, this.z6i_1, this.a6j_1, completion);
    i.b6j_1 = $this$toBlocking;
    return i;
  };
  function ReactionsResourceImpl$getReactionsBlocking$slambda_0(this$0, $channelId, $messageId, $emoji, resultContinuation) {
    var i = new ReactionsResourceImpl$getReactionsBlocking$slambda(this$0, $channelId, $messageId, $emoji, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.c6j($this$toBlocking, $completion);
    }, 1);
  }
  function ReactionsResourceImpl$deleteAllReactions$slambda(this$0, $channelId, $messageId, resultContinuation) {
    this.l6j_1 = this$0;
    this.m6j_1 = $channelId;
    this.n6j_1 = $messageId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReactionsResourceImpl$deleteAllReactions$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl$deleteAllReactions$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ReactionsResourceImpl$deleteAllReactions$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.l6j_1.t5s((new HttpRequest()).b53(this.l6j_1.r5s_1 + '/channels/' + this.m6j_1 + '/messages/' + this.n6j_1 + '/reactions')).c53(MediaType_getInstance().l5t_1).j53(this);
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
  protoOf(ReactionsResourceImpl$deleteAllReactions$slambda).p2n = function ($this$withContext, completion) {
    var i = new ReactionsResourceImpl$deleteAllReactions$slambda(this.l6j_1, this.m6j_1, this.n6j_1, completion);
    i.o6j_1 = $this$withContext;
    return i;
  };
  function ReactionsResourceImpl$deleteAllReactions$slambda_0(this$0, $channelId, $messageId, resultContinuation) {
    var i = new ReactionsResourceImpl$deleteAllReactions$slambda(this$0, $channelId, $messageId, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function ReactionsResourceImpl$deleteAllReactionsBlocking$slambda(this$0, $channelId, $messageId, resultContinuation) {
    this.x6j_1 = this$0;
    this.y6j_1 = $channelId;
    this.z6j_1 = $messageId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReactionsResourceImpl$deleteAllReactionsBlocking$slambda).a6b = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl$deleteAllReactionsBlocking$slambda).e9 = function (p1, $completion) {
    return this.a6b((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ReactionsResourceImpl$deleteAllReactionsBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.x6j_1.h59(this.y6j_1, this.z6j_1, this);
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
  protoOf(ReactionsResourceImpl$deleteAllReactionsBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new ReactionsResourceImpl$deleteAllReactionsBlocking$slambda(this.x6j_1, this.y6j_1, this.z6j_1, completion);
    i.a6k_1 = $this$toBlocking;
    return i;
  };
  function ReactionsResourceImpl$deleteAllReactionsBlocking$slambda_0(this$0, $channelId, $messageId, resultContinuation) {
    var i = new ReactionsResourceImpl$deleteAllReactionsBlocking$slambda(this$0, $channelId, $messageId, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.a6b($this$toBlocking, $completion);
    }, 1);
  }
  function $createReactionCOROUTINE$(_this__u8e3s4, channelId, messageId, emoji, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j6k_1 = _this__u8e3s4;
    this.k6k_1 = channelId;
    this.l6k_1 = messageId;
    this.m6k_1 = emoji;
  }
  protoOf($createReactionCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.q6k_1 = this.j6k_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.p6k_1 = this.q6k_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, ReactionsResourceImpl$createReaction$slambda_0(this.j6k_1, this.k6k_1, this.l6k_1, this.m6k_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o6k_1 = suspendResult;
            var containsArg = this.o6k_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var this_0 = new ResponseUnit();
              this_0.limit = Companion_instance_47.of(this.o6k_1);
              tmp_1.n6k_1 = this_0;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.p6k_1.u5s(this.o6k_1);
          case 4:
            return this.n6k_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $createReaction$suspendBridgeCOROUTINE$(_this__u8e3s4, channelId, messageId, emoji, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z6k_1 = _this__u8e3s4;
    this.a6l_1 = channelId;
    this.b6l_1 = messageId;
    this.c6l_1 = emoji;
  }
  protoOf($createReaction$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.z6k_1.createReaction === protoOf(ReactionsResourceImpl).createReaction) {
              this.i8_1 = 2;
              suspendResult = this.z6k_1.x58(this.a6l_1, this.b6l_1, this.c6l_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.z6k_1.createReaction(this.a6l_1, this.b6l_1, this.c6l_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.d6l_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.d6l_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.d6l_1;
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
  function $deleteOwnReactionCOROUTINE$(_this__u8e3s4, channelId, messageId, emoji, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o6l_1 = _this__u8e3s4;
    this.p6l_1 = channelId;
    this.q6l_1 = messageId;
    this.r6l_1 = emoji;
  }
  protoOf($deleteOwnReactionCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.v6l_1 = this.o6l_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.u6l_1 = this.v6l_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, ReactionsResourceImpl$deleteOwnReaction$slambda_0(this.o6l_1, this.p6l_1, this.q6l_1, this.r6l_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t6l_1 = suspendResult;
            var containsArg = this.t6l_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var this_0 = new ResponseUnit();
              this_0.limit = Companion_instance_47.of(this.t6l_1);
              tmp_1.s6l_1 = this_0;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.u6l_1.u5s(this.t6l_1);
          case 4:
            return this.s6l_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $deleteOwnReaction$suspendBridgeCOROUTINE$(_this__u8e3s4, channelId, messageId, emoji, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e6m_1 = _this__u8e3s4;
    this.f6m_1 = channelId;
    this.g6m_1 = messageId;
    this.h6m_1 = emoji;
  }
  protoOf($deleteOwnReaction$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.e6m_1.deleteOwnReaction === protoOf(ReactionsResourceImpl).deleteOwnReaction) {
              this.i8_1 = 2;
              suspendResult = this.e6m_1.a59(this.f6m_1, this.g6m_1, this.h6m_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.e6m_1.deleteOwnReaction(this.f6m_1, this.g6m_1, this.h6m_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.i6m_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.i6m_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.i6m_1;
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
  function $getReactionsCOROUTINE$(_this__u8e3s4, channelId, messageId, emoji, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r6m_1 = _this__u8e3s4;
    this.s6m_1 = channelId;
    this.t6m_1 = messageId;
    this.u6m_1 = emoji;
  }
  protoOf($getReactionsCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.y6m_1 = this.r6m_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.x6m_1 = this.y6m_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, ReactionsResourceImpl$getReactions$slambda_0(this.r6m_1, this.s6m_1, this.t6m_1, this.u6m_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w6m_1 = suspendResult;
            var containsArg = this.w6m_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.w6m_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().ob(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(User), arrayOf([]), false))]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.w6m_1);
              this_3.json = this.w6m_1.b54();
              tmp_1.v6m_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.x6m_1.u5s(this.w6m_1);
          case 4:
            return this.v6m_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $getReactions$suspendBridgeCOROUTINE$(_this__u8e3s4, channelId, messageId, emoji, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h6n_1 = _this__u8e3s4;
    this.i6n_1 = channelId;
    this.j6n_1 = messageId;
    this.k6n_1 = emoji;
  }
  protoOf($getReactions$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.h6n_1.getReactions === protoOf(ReactionsResourceImpl).getReactions) {
              this.i8_1 = 2;
              suspendResult = this.h6n_1.d59(this.i6n_1, this.j6n_1, this.k6n_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.h6n_1.getReactions(this.i6n_1, this.j6n_1, this.k6n_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.l6n_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.l6n_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.l6n_1;
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
  function $deleteAllReactionsCOROUTINE$(_this__u8e3s4, channelId, messageId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u6n_1 = _this__u8e3s4;
    this.v6n_1 = channelId;
    this.w6n_1 = messageId;
  }
  protoOf($deleteAllReactionsCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.a6o_1 = this.u6n_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.z6n_1 = this.a6o_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, ReactionsResourceImpl$deleteAllReactions$slambda_0(this.u6n_1, this.v6n_1, this.w6n_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y6n_1 = suspendResult;
            var containsArg = this.y6n_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var this_0 = new ResponseUnit();
              this_0.limit = Companion_instance_47.of(this.y6n_1);
              tmp_1.x6n_1 = this_0;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.z6n_1.u5s(this.y6n_1);
          case 4:
            return this.x6n_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $deleteAllReactions$suspendBridgeCOROUTINE$(_this__u8e3s4, channelId, messageId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j6o_1 = _this__u8e3s4;
    this.k6o_1 = channelId;
    this.l6o_1 = messageId;
  }
  protoOf($deleteAllReactions$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.j6o_1.deleteAllReactions === protoOf(ReactionsResourceImpl).deleteAllReactions) {
              this.i8_1 = 2;
              suspendResult = this.j6o_1.g59(this.k6o_1, this.l6o_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.j6o_1.deleteAllReactions(this.k6o_1, this.l6o_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.m6o_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.m6o_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.m6o_1;
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
  function ReactionsResourceImpl(uri, token) {
    AbstractResourceImpl.call(this, uri, token);
  }
  protoOf(ReactionsResourceImpl).x58 = function (channelId, messageId, emoji, $completion) {
    var tmp = new $createReactionCOROUTINE$(this, channelId, messageId, emoji, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl).createReaction = function (channelId, messageId, emoji) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.x58(channelId, messageId, emoji, $completion);
    });
  };
  protoOf(ReactionsResourceImpl).y58 = function (channelId, messageId, emoji, $completion) {
    var tmp = new $createReaction$suspendBridgeCOROUTINE$(this, channelId, messageId, emoji, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl).z58 = function (channelId, messageId, emoji) {
    return toBlocking(ReactionsResourceImpl$createReactionBlocking$slambda_0(this, channelId, messageId, emoji, null));
  };
  protoOf(ReactionsResourceImpl).a59 = function (channelId, messageId, emoji, $completion) {
    var tmp = new $deleteOwnReactionCOROUTINE$(this, channelId, messageId, emoji, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl).deleteOwnReaction = function (channelId, messageId, emoji) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.a59(channelId, messageId, emoji, $completion);
    });
  };
  protoOf(ReactionsResourceImpl).b59 = function (channelId, messageId, emoji, $completion) {
    var tmp = new $deleteOwnReaction$suspendBridgeCOROUTINE$(this, channelId, messageId, emoji, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl).c59 = function (channelId, messageId, emoji) {
    return toBlocking(ReactionsResourceImpl$deleteOwnReactionBlocking$slambda_0(this, channelId, messageId, emoji, null));
  };
  protoOf(ReactionsResourceImpl).d59 = function (channelId, messageId, emoji, $completion) {
    var tmp = new $getReactionsCOROUTINE$(this, channelId, messageId, emoji, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl).getReactions = function (channelId, messageId, emoji) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.d59(channelId, messageId, emoji, $completion);
    });
  };
  protoOf(ReactionsResourceImpl).e59 = function (channelId, messageId, emoji, $completion) {
    var tmp = new $getReactions$suspendBridgeCOROUTINE$(this, channelId, messageId, emoji, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl).f59 = function (channelId, messageId, emoji) {
    return toBlocking(ReactionsResourceImpl$getReactionsBlocking$slambda_0(this, channelId, messageId, emoji, null));
  };
  protoOf(ReactionsResourceImpl).g59 = function (channelId, messageId, $completion) {
    var tmp = new $deleteAllReactionsCOROUTINE$(this, channelId, messageId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl).deleteAllReactions = function (channelId, messageId) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.g59(channelId, messageId, $completion);
    });
  };
  protoOf(ReactionsResourceImpl).h59 = function (channelId, messageId, $completion) {
    var tmp = new $deleteAllReactions$suspendBridgeCOROUTINE$(this, channelId, messageId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(ReactionsResourceImpl).i59 = function (channelId, messageId) {
    return toBlocking(ReactionsResourceImpl$deleteAllReactionsBlocking$slambda_0(this, channelId, messageId, null));
  };
  function UsersResourceImpl$getMe$slambda(this$0, resultContinuation) {
    this.v6o_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UsersResourceImpl$getMe$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(UsersResourceImpl$getMe$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UsersResourceImpl$getMe$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.v6o_1.t5s((new HttpRequest()).b53(this.v6o_1.r5s_1 + '/users/@me')).c53(MediaType_getInstance().l5t_1).g53(this);
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
  protoOf(UsersResourceImpl$getMe$slambda).p2n = function ($this$withContext, completion) {
    var i = new UsersResourceImpl$getMe$slambda(this.v6o_1, completion);
    i.w6o_1 = $this$withContext;
    return i;
  };
  function UsersResourceImpl$getMe$slambda_0(this$0, resultContinuation) {
    var i = new UsersResourceImpl$getMe$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function UsersResourceImpl$getMeBlocking$slambda(this$0, resultContinuation) {
    this.f6p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UsersResourceImpl$getMeBlocking$slambda).h6p = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(UsersResourceImpl$getMeBlocking$slambda).e9 = function (p1, $completion) {
    return this.h6p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UsersResourceImpl$getMeBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.f6p_1.k59(this);
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
  protoOf(UsersResourceImpl$getMeBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new UsersResourceImpl$getMeBlocking$slambda(this.f6p_1, completion);
    i.g6p_1 = $this$toBlocking;
    return i;
  };
  function UsersResourceImpl$getMeBlocking$slambda_0(this$0, resultContinuation) {
    var i = new UsersResourceImpl$getMeBlocking$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.h6p($this$toBlocking, $completion);
    }, 1);
  }
  function UsersResourceImpl$getUser$slambda(this$0, $userId, resultContinuation) {
    this.q6p_1 = this$0;
    this.r6p_1 = $userId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UsersResourceImpl$getUser$slambda).k5t = function ($this$withContext, $completion) {
    var tmp = this.p2n($this$withContext, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(UsersResourceImpl$getUser$slambda).e9 = function (p1, $completion) {
    return this.k5t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UsersResourceImpl$getUser$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.q6p_1.t5s((new HttpRequest()).b53(this.q6p_1.r5s_1 + '/users/' + this.r6p_1)).c53(MediaType_getInstance().l5t_1).g53(this);
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
  protoOf(UsersResourceImpl$getUser$slambda).p2n = function ($this$withContext, completion) {
    var i = new UsersResourceImpl$getUser$slambda(this.q6p_1, this.r6p_1, completion);
    i.s6p_1 = $this$withContext;
    return i;
  };
  function UsersResourceImpl$getUser$slambda_0(this$0, $userId, resultContinuation) {
    var i = new UsersResourceImpl$getUser$slambda(this$0, $userId, resultContinuation);
    return constructCallableReference(function ($this$withContext, $completion) {
      return i.k5t($this$withContext, $completion);
    }, 1);
  }
  function UsersResourceImpl$getUserBlocking$slambda(this$0, $userId, resultContinuation) {
    this.b6q_1 = this$0;
    this.c6q_1 = $userId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UsersResourceImpl$getUserBlocking$slambda).h6p = function ($this$toBlocking, $completion) {
    var tmp = this.p2n($this$toBlocking, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(UsersResourceImpl$getUserBlocking$slambda).e9 = function (p1, $completion) {
    return this.h6p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UsersResourceImpl$getUserBlocking$slambda).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 2;
            this.i8_1 = 1;
            suspendResult = this.b6q_1.n59(this.c6q_1, this);
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
  protoOf(UsersResourceImpl$getUserBlocking$slambda).p2n = function ($this$toBlocking, completion) {
    var i = new UsersResourceImpl$getUserBlocking$slambda(this.b6q_1, this.c6q_1, completion);
    i.d6q_1 = $this$toBlocking;
    return i;
  };
  function UsersResourceImpl$getUserBlocking$slambda_0(this$0, $userId, resultContinuation) {
    var i = new UsersResourceImpl$getUserBlocking$slambda(this$0, $userId, resultContinuation);
    return constructCallableReference(function ($this$toBlocking, $completion) {
      return i.h6p($this$toBlocking, $completion);
    }, 1);
  }
  function $getMeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m6q_1 = _this__u8e3s4;
  }
  protoOf($getMeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.q6q_1 = this.m6q_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.p6q_1 = this.q6q_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, UsersResourceImpl$getMe$slambda_0(this.m6q_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o6q_1 = suspendResult;
            var containsArg = this.o6q_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.o6q_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(getKClass(User), arrayOf([]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.o6q_1);
              this_3.json = this.o6q_1.b54();
              tmp_1.n6q_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.p6q_1.u5s(this.o6q_1);
          case 4:
            return this.n6q_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $getMe$suspendBridgeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z6q_1 = _this__u8e3s4;
  }
  protoOf($getMe$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.z6q_1.getMe === protoOf(UsersResourceImpl).getMe) {
              this.i8_1 = 2;
              suspendResult = this.z6q_1.j59(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.z6q_1.getMe(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.a6r_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.a6r_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.a6r_1;
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
  function $getUserCOROUTINE$(_this__u8e3s4, userId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l6r_1 = _this__u8e3s4;
    this.m6r_1 = userId;
  }
  protoOf($getUserCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 6;
            this.q6r_1 = this.l6r_1;
            this.i8_1 = 1;
            continue $sm;
          case 1:
            this.p6r_1 = this.q6r_1;
            this.j8_1 = 5;
            this.i8_1 = 2;
            var tmp_0 = Dispatchers_getInstance().f22_1;
            suspendResult = withContext(tmp_0, UsersResourceImpl$getUser$slambda_0(this.l6r_1, this.m6r_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o6r_1 = suspendResult;
            var containsArg = this.o6r_1.x53_1;
            if (200 <= containsArg ? containsArg <= 299 : false) {
              var tmp_1 = this;
              var tmp0 = InternalUtility_getInstance();
              var obj = this.o6r_1.b54();
              var this_0 = tmp0.p5s_1;
              var this_1 = this_0.jr();
              var this_2 = serializer(this_1, createKType(getKClass(User), arrayOf([]), false));
              var this_3 = new Response(this_0.s18(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), obj));
              this_3.limit = Companion_instance_47.of(this.o6r_1);
              this_3.json = this.o6r_1.b54();
              tmp_1.n6r_1 = this_3;
              this.j8_1 = 6;
              this.i8_1 = 4;
              continue $sm;
            } else {
              this.i8_1 = 3;
              continue $sm;
            }

          case 3:
            throw this.p6r_1.u5s(this.o6r_1);
          case 4:
            return this.n6r_1;
          case 5:
            this.j8_1 = 6;
            var tmp_2 = this.l8_1;
            if (tmp_2 instanceof Exception) {
              var e = this.l8_1;
              var tmp0_elvis_lhs = e instanceof DiscordException ? e : null;
              throw tmp0_elvis_lhs == null ? DiscordException_init_$Create$(e) : tmp0_elvis_lhs;
            } else {
              throw this.l8_1;
            }

          case 6:
            throw this.l8_1;
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
  function $getUser$suspendBridgeCOROUTINE$(_this__u8e3s4, userId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z6r_1 = _this__u8e3s4;
    this.a6s_1 = userId;
  }
  protoOf($getUser$suspendBridgeCOROUTINE$).q8 = function () {
    var suspendResult = this.k8_1;
    $sm: do
      try {
        var tmp = this.i8_1;
        switch (tmp) {
          case 0:
            this.j8_1 = 4;
            if (this.z6r_1.getUser === protoOf(UsersResourceImpl).getUser) {
              this.i8_1 = 2;
              suspendResult = this.z6r_1.m59(this.a6s_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.i8_1 = 1;
              suspendResult = await_0(this.z6r_1.getUser(this.a6s_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.b6s_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 2:
            this.b6s_1 = suspendResult;
            this.i8_1 = 3;
            continue $sm;
          case 3:
            return this.b6s_1;
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
  function UsersResourceImpl(uri, token) {
    AbstractResourceImpl.call(this, uri, token);
  }
  protoOf(UsersResourceImpl).j59 = function ($completion) {
    var tmp = new $getMeCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(UsersResourceImpl).getMe = function () {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.j59($completion);
    });
  };
  protoOf(UsersResourceImpl).k59 = function ($completion) {
    var tmp = new $getMe$suspendBridgeCOROUTINE$(this, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(UsersResourceImpl).l59 = function () {
    return toBlocking(UsersResourceImpl$getMeBlocking$slambda_0(this, null));
  };
  protoOf(UsersResourceImpl).m59 = function (userId, $completion) {
    var tmp = new $getUserCOROUTINE$(this, userId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(UsersResourceImpl).getUser = function (userId) {
    var tmp = this;
    return promisify(function ($completion) {
      return tmp.m59(userId, $completion);
    });
  };
  protoOf(UsersResourceImpl).n59 = function (userId, $completion) {
    var tmp = new $getUser$suspendBridgeCOROUTINE$(this, userId, $completion);
    tmp.k8_1 = Unit_instance;
    tmp.l8_1 = null;
    return tmp.q8();
  };
  protoOf(UsersResourceImpl).o59 = function (userId) {
    return toBlocking(UsersResourceImpl$getUserBlocking$slambda_0(this, userId, null));
  };
  function MediaType() {
    MediaType_instance = this;
    this.l5t_1 = Application_getInstance().x2x_1.toString();
  }
  var MediaType_instance;
  function MediaType_getInstance() {
    if (MediaType_instance == null)
      new MediaType();
    return MediaType_instance;
  }
  function toBlocking(block) {
    throw UnsupportedOperationException_init_$Create$('Blocking operations are not supported in JavaScript. Please use suspend functions or Promise-based APIs instead.');
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
  protoOf($serializer_8).ty = typeParametersSerializers;
  protoOf($serializer_9).ty = typeParametersSerializers;
  protoOf($serializer_10).ty = typeParametersSerializers;
  protoOf($serializer_11).ty = typeParametersSerializers;
  protoOf($serializer_12).ty = typeParametersSerializers;
  protoOf($serializer_13).ty = typeParametersSerializers;
  defineProp(protoOf(ActionRowComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(ActionRowComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_14).ty = typeParametersSerializers;
  defineProp(protoOf(ButtonComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(ButtonComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_15).ty = typeParametersSerializers;
  defineProp(protoOf(StringSelectComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(StringSelectComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_16).ty = typeParametersSerializers;
  defineProp(protoOf(TextInputComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(TextInputComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_17).ty = typeParametersSerializers;
  defineProp(protoOf(UserSelectComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(UserSelectComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_18).ty = typeParametersSerializers;
  defineProp(protoOf(RoleSelectComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(RoleSelectComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_19).ty = typeParametersSerializers;
  defineProp(protoOf(MentionableSelectComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(MentionableSelectComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_20).ty = typeParametersSerializers;
  defineProp(protoOf(ChannelSelectComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(ChannelSelectComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_21).ty = typeParametersSerializers;
  defineProp(protoOf(SectionComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(SectionComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_22).ty = typeParametersSerializers;
  defineProp(protoOf(TextDisplayComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(TextDisplayComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_23).ty = typeParametersSerializers;
  defineProp(protoOf(ThumbnailComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(ThumbnailComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_24).ty = typeParametersSerializers;
  defineProp(protoOf(MediaGalleryComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(MediaGalleryComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_25).ty = typeParametersSerializers;
  defineProp(protoOf(FileComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(FileComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_26).ty = typeParametersSerializers;
  defineProp(protoOf(SeparatorComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(SeparatorComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_27).ty = typeParametersSerializers;
  defineProp(protoOf(ContainerComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(ContainerComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_28).ty = typeParametersSerializers;
  defineProp(protoOf(LabelComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(LabelComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_29).ty = typeParametersSerializers;
  defineProp(protoOf(FileUploadComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(FileUploadComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_30).ty = typeParametersSerializers;
  defineProp(protoOf(RadioGroupComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(RadioGroupComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_31).ty = typeParametersSerializers;
  defineProp(protoOf(CheckboxGroupComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(CheckboxGroupComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_32).ty = typeParametersSerializers;
  defineProp(protoOf(CheckboxComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(CheckboxComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_33).ty = typeParametersSerializers;
  defineProp(protoOf(UnknownMessageComponent), 'type', function () {
    return this.p5b();
  }, function (value) {
    this.o5b(value);
  });
  defineProp(protoOf(UnknownMessageComponent), 'id', function () {
    return this.s5a();
  }, function (value) {
    this.o5i(value);
  });
  protoOf($serializer_34).ty = typeParametersSerializers;
  protoOf($serializer_35).ty = typeParametersSerializers;
  protoOf($serializer_36).ty = typeParametersSerializers;
  protoOf($serializer_37).ty = typeParametersSerializers;
  protoOf($serializer_38).ty = typeParametersSerializers;
  protoOf($serializer_39).ty = typeParametersSerializers;
  protoOf($serializer_40).ty = typeParametersSerializers;
  protoOf($serializer_41).ty = typeParametersSerializers;
  protoOf($serializer_42).ty = typeParametersSerializers;
  protoOf($serializer_43).ty = typeParametersSerializers;
  defineProp(protoOf(DiscordImpl), 'apiHost', function () {
    return this.y56();
  });
  defineProp(protoOf(DiscordImpl), 'token', function () {
    return this.z56();
  });
  protoOf($serializer_44).ty = typeParametersSerializers;
  protoOf($serializer_45).ty = typeParametersSerializers;
  protoOf($serializer_46).ty = typeParametersSerializers;
  protoOf($serializer_47).ty = typeParametersSerializers;
  protoOf($serializer_48).ty = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  DiscordFactory_instance = new DiscordFactory();
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_5 = new Companion_4();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  Companion_instance_9 = new Companion_8();
  Companion_instance_10 = new Companion_9();
  Companion_instance_14 = new Companion_13();
  Companion_instance_15 = new Companion_14();
  Companion_instance_17 = new Companion_16();
  Companion_instance_19 = new Companion_18();
  Companion_instance_25 = new Companion_24();
  Companion_instance_26 = new Companion_25();
  Companion_instance_28 = new Companion_27();
  Companion_instance_29 = new Companion_28();
  Companion_instance_31 = new Companion_30();
  Companion_instance_35 = new Companion_34();
  Companion_instance_36 = new Companion_35();
  Companion_instance_37 = new Companion_36();
  Companion_instance_38 = new Companion_37();
  Companion_instance_39 = new Companion_38();
  Companion_instance_40 = new Companion_39();
  Companion_instance_41 = new Companion_40();
  Companion_instance_43 = new Companion_42();
  Companion_instance_44 = new Companion_43();
  Companion_instance_45 = new Companion_44();
  Companion_instance_46 = new Companion_45();
  Companion_instance_47 = new Companion_46();
  Companion_instance_48 = new Companion_47();
  Companion_instance_49 = new Companion_48();
  Companion_instance_51 = new Companion_50();
  Companion_instance_52 = new Companion_51();
  Companion_instance_53 = new Companion_52();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var work = _.work || (_.work = {});
    var socialhub = work.socialhub || (work.socialhub = {});
    var kdiscord = socialhub.kdiscord || (socialhub.kdiscord = {});
    var Discord = {};
    kdiscord.Discord = Discord;
    defineProp(kdiscord.Discord, 'Companion', Companion_getInstance_0, VOID, true);
    var work_0 = _.work || (_.work = {});
    var socialhub_0 = work_0.socialhub || (work_0.socialhub = {});
    var kdiscord_0 = socialhub_0.kdiscord || (socialhub_0.kdiscord = {});
    defineProp(kdiscord_0, 'DiscordFactory', DiscordFactory_getInstance, VOID, true);
    var work_1 = _.work || (_.work = {});
    var socialhub_1 = work_1.socialhub || (work_1.socialhub = {});
    var kdiscord_1 = socialhub_1.kdiscord || (socialhub_1.kdiscord = {});
    var api = kdiscord_1.api || (kdiscord_1.api = {});
    var work_2 = _.work || (_.work = {});
    var socialhub_2 = work_2.socialhub || (work_2.socialhub = {});
    var kdiscord_2 = socialhub_2.kdiscord || (socialhub_2.kdiscord = {});
    var api_0 = kdiscord_2.api || (kdiscord_2.api = {});
    var work_3 = _.work || (_.work = {});
    var socialhub_3 = work_3.socialhub || (work_3.socialhub = {});
    var kdiscord_3 = socialhub_3.kdiscord || (socialhub_3.kdiscord = {});
    var api_1 = kdiscord_3.api || (kdiscord_3.api = {});
    var work_4 = _.work || (_.work = {});
    var socialhub_4 = work_4.socialhub || (work_4.socialhub = {});
    var kdiscord_4 = socialhub_4.kdiscord || (socialhub_4.kdiscord = {});
    var api_2 = kdiscord_4.api || (kdiscord_4.api = {});
    var work_5 = _.work || (_.work = {});
    var socialhub_5 = work_5.socialhub || (work_5.socialhub = {});
    var kdiscord_5 = socialhub_5.kdiscord || (socialhub_5.kdiscord = {});
    var api_3 = kdiscord_5.api || (kdiscord_5.api = {});
    var work_6 = _.work || (_.work = {});
    var socialhub_6 = work_6.socialhub || (work_6.socialhub = {});
    var kdiscord_6 = socialhub_6.kdiscord || (socialhub_6.kdiscord = {});
    var api_4 = kdiscord_6.api || (kdiscord_6.api = {});
    var work_7 = _.work || (_.work = {});
    var socialhub_7 = work_7.socialhub || (work_7.socialhub = {});
    var kdiscord_7 = socialhub_7.kdiscord || (socialhub_7.kdiscord = {});
    var api_5 = kdiscord_7.api || (kdiscord_7.api = {});
    var request = api_5.request || (api_5.request = {});
    var channels = request.channels || (request.channels = {});
    channels.ChannelsCreateDmRequest = ChannelsCreateDmRequest;
    var work_8 = _.work || (_.work = {});
    var socialhub_8 = work_8.socialhub || (work_8.socialhub = {});
    var kdiscord_8 = socialhub_8.kdiscord || (socialhub_8.kdiscord = {});
    var api_6 = kdiscord_8.api || (kdiscord_8.api = {});
    var request_0 = api_6.request || (api_6.request = {});
    var guilds = request_0.guilds || (request_0.guilds = {});
    guilds.GuildsListRequest = GuildsListRequest;
    var work_9 = _.work || (_.work = {});
    var socialhub_9 = work_9.socialhub || (work_9.socialhub = {});
    var kdiscord_9 = socialhub_9.kdiscord || (socialhub_9.kdiscord = {});
    var api_7 = kdiscord_9.api || (kdiscord_9.api = {});
    var request_1 = api_7.request || (api_7.request = {});
    var messages = request_1.messages || (request_1.messages = {});
    messages.MessagesCreateRequest = MessagesCreateRequest;
    var work_10 = _.work || (_.work = {});
    var socialhub_10 = work_10.socialhub || (work_10.socialhub = {});
    var kdiscord_10 = socialhub_10.kdiscord || (socialhub_10.kdiscord = {});
    var api_8 = kdiscord_10.api || (kdiscord_10.api = {});
    var request_2 = api_8.request || (api_8.request = {});
    var messages_0 = request_2.messages || (request_2.messages = {});
    messages_0.MessagesEditRequest = MessagesEditRequest;
    var work_11 = _.work || (_.work = {});
    var socialhub_11 = work_11.socialhub || (work_11.socialhub = {});
    var kdiscord_11 = socialhub_11.kdiscord || (socialhub_11.kdiscord = {});
    var api_9 = kdiscord_11.api || (kdiscord_11.api = {});
    var request_3 = api_9.request || (api_9.request = {});
    var messages_1 = request_3.messages || (request_3.messages = {});
    messages_1.MessagesListRequest = MessagesListRequest;
    var work_12 = _.work || (_.work = {});
    var socialhub_12 = work_12.socialhub || (work_12.socialhub = {});
    var kdiscord_12 = socialhub_12.kdiscord || (socialhub_12.kdiscord = {});
    var api_10 = kdiscord_12.api || (kdiscord_12.api = {});
    var response = api_10.response || (api_10.response = {});
    var gateway = response.gateway || (response.gateway = {});
    gateway.GatewayResponse = GatewayResponse;
    var work_13 = _.work || (_.work = {});
    var socialhub_13 = work_13.socialhub || (work_13.socialhub = {});
    var kdiscord_13 = socialhub_13.kdiscord || (socialhub_13.kdiscord = {});
    var entity = kdiscord_13.entity || (kdiscord_13.entity = {});
    entity.Attachment = Attachment;
    var work_14 = _.work || (_.work = {});
    var socialhub_14 = work_14.socialhub || (work_14.socialhub = {});
    var kdiscord_14 = socialhub_14.kdiscord || (socialhub_14.kdiscord = {});
    var entity_0 = kdiscord_14.entity || (kdiscord_14.entity = {});
    entity_0.Channel = Channel;
    var work_15 = _.work || (_.work = {});
    var socialhub_15 = work_15.socialhub || (work_15.socialhub = {});
    var kdiscord_15 = socialhub_15.kdiscord || (socialhub_15.kdiscord = {});
    var entity_1 = kdiscord_15.entity || (kdiscord_15.entity = {});
    entity_1.Embed = Embed;
    entity_1.EmbedFooter = EmbedFooter;
    entity_1.EmbedMedia = EmbedMedia;
    entity_1.EmbedProvider = EmbedProvider;
    entity_1.EmbedAuthor = EmbedAuthor;
    entity_1.EmbedField = EmbedField;
    var work_16 = _.work || (_.work = {});
    var socialhub_16 = work_16.socialhub || (work_16.socialhub = {});
    var kdiscord_16 = socialhub_16.kdiscord || (socialhub_16.kdiscord = {});
    var entity_2 = kdiscord_16.entity || (kdiscord_16.entity = {});
    entity_2.Emoji = Emoji;
    var work_17 = _.work || (_.work = {});
    var socialhub_17 = work_17.socialhub || (work_17.socialhub = {});
    var kdiscord_17 = socialhub_17.kdiscord || (socialhub_17.kdiscord = {});
    var entity_3 = kdiscord_17.entity || (kdiscord_17.entity = {});
    entity_3.Guild = Guild;
    var work_18 = _.work || (_.work = {});
    var socialhub_18 = work_18.socialhub || (work_18.socialhub = {});
    var kdiscord_18 = socialhub_18.kdiscord || (socialhub_18.kdiscord = {});
    var entity_4 = kdiscord_18.entity || (kdiscord_18.entity = {});
    entity_4.GuildMember = GuildMember;
    var work_19 = _.work || (_.work = {});
    var socialhub_19 = work_19.socialhub || (work_19.socialhub = {});
    var kdiscord_19 = socialhub_19.kdiscord || (socialhub_19.kdiscord = {});
    var entity_5 = kdiscord_19.entity || (kdiscord_19.entity = {});
    entity_5.Message = Message;
    entity_5.MessageReference = MessageReference;
    var work_20 = _.work || (_.work = {});
    var socialhub_20 = work_20.socialhub || (work_20.socialhub = {});
    var kdiscord_20 = socialhub_20.kdiscord || (socialhub_20.kdiscord = {});
    var entity_6 = kdiscord_20.entity || (kdiscord_20.entity = {});
    entity_6.ActionRowComponent = ActionRowComponent;
    entity_6.ButtonComponent = ButtonComponent;
    entity_6.StringSelectComponent = StringSelectComponent;
    entity_6.TextInputComponent = TextInputComponent;
    entity_6.UserSelectComponent = UserSelectComponent;
    entity_6.RoleSelectComponent = RoleSelectComponent;
    entity_6.MentionableSelectComponent = MentionableSelectComponent;
    entity_6.ChannelSelectComponent = ChannelSelectComponent;
    entity_6.SectionComponent = SectionComponent;
    entity_6.TextDisplayComponent = TextDisplayComponent;
    entity_6.ThumbnailComponent = ThumbnailComponent;
    entity_6.MediaGalleryComponent = MediaGalleryComponent;
    entity_6.FileComponent = FileComponent;
    entity_6.SeparatorComponent = SeparatorComponent;
    entity_6.ContainerComponent = ContainerComponent;
    entity_6.LabelComponent = LabelComponent;
    entity_6.FileUploadComponent = FileUploadComponent;
    entity_6.RadioGroupComponent = RadioGroupComponent;
    entity_6.CheckboxGroupComponent = CheckboxGroupComponent;
    entity_6.CheckboxComponent = CheckboxComponent;
    entity_6.UnknownMessageComponent = UnknownMessageComponent;
    entity_6.SelectOption = SelectOption;
    entity_6.SelectDefaultValue = SelectDefaultValue;
    entity_6.ComponentChoice = ComponentChoice;
    entity_6.MediaGalleryItem = MediaGalleryItem;
    entity_6.UnfurledMediaItem = UnfurledMediaItem;
    var work_21 = _.work || (_.work = {});
    var socialhub_21 = work_21.socialhub || (work_21.socialhub = {});
    var kdiscord_21 = socialhub_21.kdiscord || (socialhub_21.kdiscord = {});
    var entity_7 = kdiscord_21.entity || (kdiscord_21.entity = {});
    entity_7.Reaction = Reaction;
    entity_7.ReactionCountDetails = ReactionCountDetails;
    var work_22 = _.work || (_.work = {});
    var socialhub_22 = work_22.socialhub || (work_22.socialhub = {});
    var kdiscord_22 = socialhub_22.kdiscord || (socialhub_22.kdiscord = {});
    var entity_8 = kdiscord_22.entity || (kdiscord_22.entity = {});
    entity_8.Role = Role;
    var work_23 = _.work || (_.work = {});
    var socialhub_23 = work_23.socialhub || (work_23.socialhub = {});
    var kdiscord_23 = socialhub_23.kdiscord || (socialhub_23.kdiscord = {});
    var entity_9 = kdiscord_23.entity || (kdiscord_23.entity = {});
    entity_9.User = User;
    entity_9.UserPrimaryGuild = UserPrimaryGuild;
    var work_24 = _.work || (_.work = {});
    var socialhub_24 = work_24.socialhub || (work_24.socialhub = {});
    var kdiscord_24 = socialhub_24.kdiscord || (socialhub_24.kdiscord = {});
    var entity_10 = kdiscord_24.entity || (kdiscord_24.entity = {});
    var share = entity_10.share || (entity_10.share = {});
    share.FileContent = FileContent;
    var work_25 = _.work || (_.work = {});
    var socialhub_25 = work_25.socialhub || (work_25.socialhub = {});
    var kdiscord_25 = socialhub_25.kdiscord || (socialhub_25.kdiscord = {});
    var entity_11 = kdiscord_25.entity || (kdiscord_25.entity = {});
    var share_0 = entity_11.share || (entity_11.share = {});
    share_0.RateLimit = RateLimit;
    defineProp(share_0.RateLimit, 'Companion', Companion_getInstance_47, VOID, true);
    var work_26 = _.work || (_.work = {});
    var socialhub_26 = work_26.socialhub || (work_26.socialhub = {});
    var kdiscord_26 = socialhub_26.kdiscord || (socialhub_26.kdiscord = {});
    var entity_12 = kdiscord_26.entity || (kdiscord_26.entity = {});
    var share_1 = entity_12.share || (entity_12.share = {});
    share_1.Response = Response;
    var work_27 = _.work || (_.work = {});
    var socialhub_27 = work_27.socialhub || (work_27.socialhub = {});
    var kdiscord_27 = socialhub_27.kdiscord || (socialhub_27.kdiscord = {});
    var entity_13 = kdiscord_27.entity || (kdiscord_27.entity = {});
    var share_2 = entity_13.share || (entity_13.share = {});
    share_2.ResponseUnit = ResponseUnit;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = $serializer_getInstance_42;
  _.$_$.b = InternalUtility_getInstance;
  _.$_$.c = DiscordFactory_instance;
  _.$_$.d = getGateway$virtualSuspendBridge;
  _.$_$.e = Guild;
  _.$_$.f = Message;
  //endregion
  return _;
}));

//# sourceMappingURL=kdiscord-core.js.map
