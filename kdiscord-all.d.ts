type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare namespace io.ktor.client.engine.js {
    /** @deprecated  */
    const initHook: any;
}
export declare namespace work.socialhub.kdiscord {
    interface Discord {
        readonly apiHost: string;
        readonly token: string;
        users(): work.socialhub.kdiscord.api.UsersResource;
        channels(): work.socialhub.kdiscord.api.ChannelsResource;
        messages(): work.socialhub.kdiscord.api.MessagesResource;
        reactions(): work.socialhub.kdiscord.api.ReactionsResource;
        guilds(): work.socialhub.kdiscord.api.GuildsResource;
        gateway(): work.socialhub.kdiscord.api.GatewayResource;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kdiscord.Discord": unique symbol;
        };
    }
    namespace Discord {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get DEFAULT_API_HOST(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kdiscord {
    abstract class DiscordFactory extends KtSingleton<DiscordFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace DiscordFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instance(token: string): work.socialhub.kdiscord.Discord;
                instanceWithApiHost(token: string, apiHost: string): work.socialhub.kdiscord.Discord;
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kdiscord.api {
    interface ChannelsResource {
        getChannel(channelId: string): Promise<work.socialhub.kdiscord.entity.share.Response<work.socialhub.kdiscord.entity.Channel>>;
        listDmChannels(): Promise<work.socialhub.kdiscord.entity.share.Response<Array<work.socialhub.kdiscord.entity.Channel>>>;
        createDm(request: work.socialhub.kdiscord.api.request.channels.ChannelsCreateDmRequest): Promise<work.socialhub.kdiscord.entity.share.Response<work.socialhub.kdiscord.entity.Channel>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kdiscord.api.ChannelsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kdiscord.api {
    interface GatewayResource {
        getGateway(): Promise<work.socialhub.kdiscord.entity.share.Response<work.socialhub.kdiscord.api.response.gateway.GatewayResponse>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kdiscord.api.GatewayResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kdiscord.api {
    interface GuildsResource {
        getCurrentUserGuilds(request: work.socialhub.kdiscord.api.request.guilds.GuildsListRequest): Promise<work.socialhub.kdiscord.entity.share.Response<Array<work.socialhub.kdiscord.entity.Guild>>>;
        getGuild(guildId: string): Promise<work.socialhub.kdiscord.entity.share.Response<work.socialhub.kdiscord.entity.Guild>>;
        listGuildChannels(guildId: string): Promise<work.socialhub.kdiscord.entity.share.Response<Array<work.socialhub.kdiscord.entity.Channel>>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kdiscord.api.GuildsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kdiscord.api {
    interface MessagesResource {
        list(request: work.socialhub.kdiscord.api.request.messages.MessagesListRequest): Promise<work.socialhub.kdiscord.entity.share.Response<Array<work.socialhub.kdiscord.entity.Message>>>;
        get(channelId: string, messageId: string): Promise<work.socialhub.kdiscord.entity.share.Response<work.socialhub.kdiscord.entity.Message>>;
        create(request: work.socialhub.kdiscord.api.request.messages.MessagesCreateRequest): Promise<work.socialhub.kdiscord.entity.share.Response<work.socialhub.kdiscord.entity.Message>>;
        edit(request: work.socialhub.kdiscord.api.request.messages.MessagesEditRequest): Promise<work.socialhub.kdiscord.entity.share.Response<work.socialhub.kdiscord.entity.Message>>;
        delete(channelId: string, messageId: string): Promise<work.socialhub.kdiscord.entity.share.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kdiscord.api.MessagesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kdiscord.api {
    interface ReactionsResource {
        createReaction(channelId: string, messageId: string, emoji: string): Promise<work.socialhub.kdiscord.entity.share.ResponseUnit>;
        deleteOwnReaction(channelId: string, messageId: string, emoji: string): Promise<work.socialhub.kdiscord.entity.share.ResponseUnit>;
        getReactions(channelId: string, messageId: string, emoji: string): Promise<work.socialhub.kdiscord.entity.share.Response<Array<work.socialhub.kdiscord.entity.User>>>;
        deleteAllReactions(channelId: string, messageId: string): Promise<work.socialhub.kdiscord.entity.share.ResponseUnit>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kdiscord.api.ReactionsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kdiscord.api {
    interface UsersResource {
        getMe(): Promise<work.socialhub.kdiscord.entity.share.Response<work.socialhub.kdiscord.entity.User>>;
        getUser(userId: string): Promise<work.socialhub.kdiscord.entity.share.Response<work.socialhub.kdiscord.entity.User>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kdiscord.api.UsersResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kdiscord.api.request.channels {
    class ChannelsCreateDmRequest {
        constructor(recipientId: string);
        get recipientId(): string;
        set recipientId(value: string);
    }
    namespace ChannelsCreateDmRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChannelsCreateDmRequest;
        }
    }
}
export declare namespace work.socialhub.kdiscord.api.request.guilds {
    class GuildsListRequest {
        constructor();
        get before(): Nullable<string>;
        set before(value: Nullable<string>);
        get after(): Nullable<string>;
        set after(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get withCounts(): Nullable<boolean>;
        set withCounts(value: Nullable<boolean>);
    }
    namespace GuildsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GuildsListRequest;
        }
    }
}
export declare namespace work.socialhub.kdiscord.api.request.messages {
    class MessagesCreateRequest {
        constructor(channelId: string);
        get channelId(): string;
        set channelId(value: string);
        get content(): Nullable<string>;
        set content(value: Nullable<string>);
        get tts(): Nullable<boolean>;
        set tts(value: Nullable<boolean>);
        get replyMessageId(): Nullable<string>;
        set replyMessageId(value: Nullable<string>);
        get files(): Nullable<Array<work.socialhub.kdiscord.entity.share.FileContent>>;
        set files(value: Nullable<Array<work.socialhub.kdiscord.entity.share.FileContent>>);
    }
    namespace MessagesCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessagesCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kdiscord.api.request.messages {
    class MessagesEditRequest {
        constructor(channelId: string, messageId: string);
        get channelId(): string;
        set channelId(value: string);
        get messageId(): string;
        set messageId(value: string);
        get content(): Nullable<string>;
        set content(value: Nullable<string>);
    }
    namespace MessagesEditRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessagesEditRequest;
        }
    }
}
export declare namespace work.socialhub.kdiscord.api.request.messages {
    class MessagesListRequest {
        constructor(channelId: string);
        get channelId(): string;
        set channelId(value: string);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get around(): Nullable<string>;
        set around(value: Nullable<string>);
        get before(): Nullable<string>;
        set before(value: Nullable<string>);
        get after(): Nullable<string>;
        set after(value: Nullable<string>);
    }
    namespace MessagesListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessagesListRequest;
        }
    }
}
export declare namespace work.socialhub.kdiscord.api.response.gateway {
    class GatewayResponse {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
    }
    namespace GatewayResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GatewayResponse;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity {
    class Attachment {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get filename(): Nullable<string>;
        set filename(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get contentType(): Nullable<string>;
        set contentType(value: Nullable<string>);
        get size(): Nullable<number>;
        set size(value: Nullable<number>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get proxyUrl(): Nullable<string>;
        set proxyUrl(value: Nullable<string>);
        get height(): Nullable<number>;
        set height(value: Nullable<number>);
        get width(): Nullable<number>;
        set width(value: Nullable<number>);
        get ephemeral(): Nullable<boolean>;
        set ephemeral(value: Nullable<boolean>);
        get durationSecs(): Nullable<number>;
        set durationSecs(value: Nullable<number>);
        get waveform(): Nullable<string>;
        set waveform(value: Nullable<string>);
    }
    namespace Attachment {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Attachment;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity {
    class Channel {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get guildId(): Nullable<string>;
        set guildId(value: Nullable<string>);
        get position(): Nullable<number>;
        set position(value: Nullable<number>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get topic(): Nullable<string>;
        set topic(value: Nullable<string>);
        get nsfw(): Nullable<boolean>;
        set nsfw(value: Nullable<boolean>);
        get lastMessageId(): Nullable<string>;
        set lastMessageId(value: Nullable<string>);
        get bitrate(): Nullable<number>;
        set bitrate(value: Nullable<number>);
        get userLimit(): Nullable<number>;
        set userLimit(value: Nullable<number>);
        get rateLimitPerUser(): Nullable<number>;
        set rateLimitPerUser(value: Nullable<number>);
        get recipients(): Nullable<Array<work.socialhub.kdiscord.entity.User>>;
        set recipients(value: Nullable<Array<work.socialhub.kdiscord.entity.User>>);
        get icon(): Nullable<string>;
        set icon(value: Nullable<string>);
        get ownerId(): Nullable<string>;
        set ownerId(value: Nullable<string>);
        get parentId(): Nullable<string>;
        set parentId(value: Nullable<string>);
        get lastPinTimestamp(): Nullable<string>;
        set lastPinTimestamp(value: Nullable<string>);
    }
    namespace Channel {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Channel;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity {
    class Embed {
        constructor();
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get timestamp(): Nullable<string>;
        set timestamp(value: Nullable<string>);
        get color(): Nullable<number>;
        set color(value: Nullable<number>);
        get footer(): Nullable<work.socialhub.kdiscord.entity.EmbedFooter>;
        set footer(value: Nullable<work.socialhub.kdiscord.entity.EmbedFooter>);
        get image(): Nullable<work.socialhub.kdiscord.entity.EmbedMedia>;
        set image(value: Nullable<work.socialhub.kdiscord.entity.EmbedMedia>);
        get thumbnail(): Nullable<work.socialhub.kdiscord.entity.EmbedMedia>;
        set thumbnail(value: Nullable<work.socialhub.kdiscord.entity.EmbedMedia>);
        get video(): Nullable<work.socialhub.kdiscord.entity.EmbedMedia>;
        set video(value: Nullable<work.socialhub.kdiscord.entity.EmbedMedia>);
        get provider(): Nullable<work.socialhub.kdiscord.entity.EmbedProvider>;
        set provider(value: Nullable<work.socialhub.kdiscord.entity.EmbedProvider>);
        get author(): Nullable<work.socialhub.kdiscord.entity.EmbedAuthor>;
        set author(value: Nullable<work.socialhub.kdiscord.entity.EmbedAuthor>);
        get fields(): Nullable<Array<work.socialhub.kdiscord.entity.EmbedField>>;
        set fields(value: Nullable<Array<work.socialhub.kdiscord.entity.EmbedField>>);
        get contentScanVersion(): Nullable<number>;
        set contentScanVersion(value: Nullable<number>);
    }
    namespace Embed {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Embed;
        }
    }
    class EmbedFooter {
        constructor();
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get iconUrl(): Nullable<string>;
        set iconUrl(value: Nullable<string>);
        get proxyIconUrl(): Nullable<string>;
        set proxyIconUrl(value: Nullable<string>);
    }
    namespace EmbedFooter {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EmbedFooter;
        }
    }
    class EmbedMedia {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get proxyUrl(): Nullable<string>;
        set proxyUrl(value: Nullable<string>);
        get height(): Nullable<number>;
        set height(value: Nullable<number>);
        get width(): Nullable<number>;
        set width(value: Nullable<number>);
        get contentType(): Nullable<string>;
        set contentType(value: Nullable<string>);
        get placeholder(): Nullable<string>;
        set placeholder(value: Nullable<string>);
        get placeholderVersion(): Nullable<number>;
        set placeholderVersion(value: Nullable<number>);
    }
    namespace EmbedMedia {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EmbedMedia;
        }
    }
    class EmbedProvider {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
    }
    namespace EmbedProvider {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EmbedProvider;
        }
    }
    class EmbedAuthor {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get iconUrl(): Nullable<string>;
        set iconUrl(value: Nullable<string>);
        get proxyIconUrl(): Nullable<string>;
        set proxyIconUrl(value: Nullable<string>);
    }
    namespace EmbedAuthor {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EmbedAuthor;
        }
    }
    class EmbedField {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get inline(): Nullable<boolean>;
        set inline(value: Nullable<boolean>);
    }
    namespace EmbedField {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EmbedField;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity {
    class Emoji {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get animated(): Nullable<boolean>;
        set animated(value: Nullable<boolean>);
        get requireColons(): Nullable<boolean>;
        set requireColons(value: Nullable<boolean>);
        get managed(): Nullable<boolean>;
        set managed(value: Nullable<boolean>);
        get available(): Nullable<boolean>;
        set available(value: Nullable<boolean>);
    }
    namespace Emoji {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Emoji;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity {
    class Guild {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get icon(): Nullable<string>;
        set icon(value: Nullable<string>);
        get splash(): Nullable<string>;
        set splash(value: Nullable<string>);
        get discoverySplash(): Nullable<string>;
        set discoverySplash(value: Nullable<string>);
        get owner(): Nullable<boolean>;
        set owner(value: Nullable<boolean>);
        get ownerId(): Nullable<string>;
        set ownerId(value: Nullable<string>);
        get permissions(): Nullable<string>;
        set permissions(value: Nullable<string>);
        get afkChannelId(): Nullable<string>;
        set afkChannelId(value: Nullable<string>);
        get afkTimeout(): Nullable<number>;
        set afkTimeout(value: Nullable<number>);
        get verificationLevel(): Nullable<number>;
        set verificationLevel(value: Nullable<number>);
        get roles(): Nullable<Array<work.socialhub.kdiscord.entity.Role>>;
        set roles(value: Nullable<Array<work.socialhub.kdiscord.entity.Role>>);
        get emojis(): Nullable<Array<work.socialhub.kdiscord.entity.Emoji>>;
        set emojis(value: Nullable<Array<work.socialhub.kdiscord.entity.Emoji>>);
        get features(): Nullable<Array<string>>;
        set features(value: Nullable<Array<string>>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get banner(): Nullable<string>;
        set banner(value: Nullable<string>);
        get premiumTier(): Nullable<number>;
        set premiumTier(value: Nullable<number>);
        get premiumSubscriptionCount(): Nullable<number>;
        set premiumSubscriptionCount(value: Nullable<number>);
        get preferredLocale(): Nullable<string>;
        set preferredLocale(value: Nullable<string>);
        get approximateMemberCount(): Nullable<number>;
        set approximateMemberCount(value: Nullable<number>);
        get approximatePresenceCount(): Nullable<number>;
        set approximatePresenceCount(value: Nullable<number>);
    }
    namespace Guild {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Guild;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity {
    class GuildMember {
        constructor();
        get user(): Nullable<work.socialhub.kdiscord.entity.User>;
        set user(value: Nullable<work.socialhub.kdiscord.entity.User>);
        get nick(): Nullable<string>;
        set nick(value: Nullable<string>);
        get avatar(): Nullable<string>;
        set avatar(value: Nullable<string>);
        get roles(): Nullable<Array<string>>;
        set roles(value: Nullable<Array<string>>);
        get joinedAt(): Nullable<string>;
        set joinedAt(value: Nullable<string>);
        get premiumSince(): Nullable<string>;
        set premiumSince(value: Nullable<string>);
        get deaf(): Nullable<boolean>;
        set deaf(value: Nullable<boolean>);
        get mute(): Nullable<boolean>;
        set mute(value: Nullable<boolean>);
        get flags(): Nullable<number>;
        set flags(value: Nullable<number>);
        get pending(): Nullable<boolean>;
        set pending(value: Nullable<boolean>);
        get communicationDisabledUntil(): Nullable<string>;
        set communicationDisabledUntil(value: Nullable<string>);
    }
    namespace GuildMember {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => GuildMember;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity {
    class Message {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get author(): Nullable<work.socialhub.kdiscord.entity.User>;
        set author(value: Nullable<work.socialhub.kdiscord.entity.User>);
        get content(): Nullable<string>;
        set content(value: Nullable<string>);
        get timestamp(): Nullable<string>;
        set timestamp(value: Nullable<string>);
        get editedTimestamp(): Nullable<string>;
        set editedTimestamp(value: Nullable<string>);
        get tts(): Nullable<boolean>;
        set tts(value: Nullable<boolean>);
        get mentionEveryone(): Nullable<boolean>;
        set mentionEveryone(value: Nullable<boolean>);
        get mentions(): Nullable<Array<work.socialhub.kdiscord.entity.User>>;
        set mentions(value: Nullable<Array<work.socialhub.kdiscord.entity.User>>);
        get mentionRoles(): Nullable<Array<string>>;
        set mentionRoles(value: Nullable<Array<string>>);
        get attachments(): Nullable<Array<work.socialhub.kdiscord.entity.Attachment>>;
        set attachments(value: Nullable<Array<work.socialhub.kdiscord.entity.Attachment>>);
        get embeds(): Nullable<Array<work.socialhub.kdiscord.entity.Embed>>;
        set embeds(value: Nullable<Array<work.socialhub.kdiscord.entity.Embed>>);
        get reactions(): Nullable<Array<work.socialhub.kdiscord.entity.Reaction>>;
        set reactions(value: Nullable<Array<work.socialhub.kdiscord.entity.Reaction>>);
        get pinned(): Nullable<boolean>;
        set pinned(value: Nullable<boolean>);
        get webhookId(): Nullable<string>;
        set webhookId(value: Nullable<string>);
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get flags(): Nullable<number>;
        set flags(value: Nullable<number>);
        get components(): Nullable<Array<work.socialhub.kdiscord.entity.MessageComponent>>;
        set components(value: Nullable<Array<work.socialhub.kdiscord.entity.MessageComponent>>);
        get guildId(): Nullable<string>;
        set guildId(value: Nullable<string>);
        get member(): Nullable<work.socialhub.kdiscord.entity.GuildMember>;
        set member(value: Nullable<work.socialhub.kdiscord.entity.GuildMember>);
        get messageReference(): Nullable<work.socialhub.kdiscord.entity.MessageReference>;
        set messageReference(value: Nullable<work.socialhub.kdiscord.entity.MessageReference>);
        get referencedMessage(): Nullable<work.socialhub.kdiscord.entity.Message>;
        set referencedMessage(value: Nullable<work.socialhub.kdiscord.entity.Message>);
        get position(): Nullable<number>;
        set position(value: Nullable<number>);
    }
    namespace Message {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Message;
        }
    }
    class MessageReference {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get messageId(): Nullable<string>;
        set messageId(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get guildId(): Nullable<string>;
        set guildId(value: Nullable<string>);
        get failIfNotExists(): Nullable<boolean>;
        set failIfNotExists(value: Nullable<boolean>);
    }
    namespace MessageReference {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessageReference;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity {
    interface MessageComponent {
        type: Nullable<number>;
        id: Nullable<number>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kdiscord.entity.MessageComponent": unique symbol;
        };
    }
    class ActionRowComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get components(): Nullable<Array<work.socialhub.kdiscord.entity.MessageComponent>>;
        set components(value: Nullable<Array<work.socialhub.kdiscord.entity.MessageComponent>>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace ActionRowComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ActionRowComponent;
        }
    }
    class ButtonComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get style(): Nullable<number>;
        set style(value: Nullable<number>);
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get emoji(): Nullable<work.socialhub.kdiscord.entity.Emoji>;
        set emoji(value: Nullable<work.socialhub.kdiscord.entity.Emoji>);
        get customId(): Nullable<string>;
        set customId(value: Nullable<string>);
        get skuId(): Nullable<string>;
        set skuId(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get disabled(): Nullable<boolean>;
        set disabled(value: Nullable<boolean>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace ButtonComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ButtonComponent;
        }
    }
    class StringSelectComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get customId(): Nullable<string>;
        set customId(value: Nullable<string>);
        get options(): Nullable<Array<work.socialhub.kdiscord.entity.SelectOption>>;
        set options(value: Nullable<Array<work.socialhub.kdiscord.entity.SelectOption>>);
        get placeholder(): Nullable<string>;
        set placeholder(value: Nullable<string>);
        get minValues(): Nullable<number>;
        set minValues(value: Nullable<number>);
        get maxValues(): Nullable<number>;
        set maxValues(value: Nullable<number>);
        get required(): Nullable<boolean>;
        set required(value: Nullable<boolean>);
        get disabled(): Nullable<boolean>;
        set disabled(value: Nullable<boolean>);
        get values(): Nullable<Array<string>>;
        set values(value: Nullable<Array<string>>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace StringSelectComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StringSelectComponent;
        }
    }
    class TextInputComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get customId(): Nullable<string>;
        set customId(value: Nullable<string>);
        get style(): Nullable<number>;
        set style(value: Nullable<number>);
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get minLength(): Nullable<number>;
        set minLength(value: Nullable<number>);
        get maxLength(): Nullable<number>;
        set maxLength(value: Nullable<number>);
        get required(): Nullable<boolean>;
        set required(value: Nullable<boolean>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get placeholder(): Nullable<string>;
        set placeholder(value: Nullable<string>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace TextInputComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TextInputComponent;
        }
    }
    class UserSelectComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get customId(): Nullable<string>;
        set customId(value: Nullable<string>);
        get placeholder(): Nullable<string>;
        set placeholder(value: Nullable<string>);
        get defaultValues(): Nullable<Array<work.socialhub.kdiscord.entity.SelectDefaultValue>>;
        set defaultValues(value: Nullable<Array<work.socialhub.kdiscord.entity.SelectDefaultValue>>);
        get minValues(): Nullable<number>;
        set minValues(value: Nullable<number>);
        get maxValues(): Nullable<number>;
        set maxValues(value: Nullable<number>);
        get required(): Nullable<boolean>;
        set required(value: Nullable<boolean>);
        get disabled(): Nullable<boolean>;
        set disabled(value: Nullable<boolean>);
        get values(): Nullable<Array<string>>;
        set values(value: Nullable<Array<string>>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace UserSelectComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserSelectComponent;
        }
    }
    class RoleSelectComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get customId(): Nullable<string>;
        set customId(value: Nullable<string>);
        get placeholder(): Nullable<string>;
        set placeholder(value: Nullable<string>);
        get defaultValues(): Nullable<Array<work.socialhub.kdiscord.entity.SelectDefaultValue>>;
        set defaultValues(value: Nullable<Array<work.socialhub.kdiscord.entity.SelectDefaultValue>>);
        get minValues(): Nullable<number>;
        set minValues(value: Nullable<number>);
        get maxValues(): Nullable<number>;
        set maxValues(value: Nullable<number>);
        get required(): Nullable<boolean>;
        set required(value: Nullable<boolean>);
        get disabled(): Nullable<boolean>;
        set disabled(value: Nullable<boolean>);
        get values(): Nullable<Array<string>>;
        set values(value: Nullable<Array<string>>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace RoleSelectComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RoleSelectComponent;
        }
    }
    class MentionableSelectComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get customId(): Nullable<string>;
        set customId(value: Nullable<string>);
        get placeholder(): Nullable<string>;
        set placeholder(value: Nullable<string>);
        get defaultValues(): Nullable<Array<work.socialhub.kdiscord.entity.SelectDefaultValue>>;
        set defaultValues(value: Nullable<Array<work.socialhub.kdiscord.entity.SelectDefaultValue>>);
        get minValues(): Nullable<number>;
        set minValues(value: Nullable<number>);
        get maxValues(): Nullable<number>;
        set maxValues(value: Nullable<number>);
        get required(): Nullable<boolean>;
        set required(value: Nullable<boolean>);
        get disabled(): Nullable<boolean>;
        set disabled(value: Nullable<boolean>);
        get values(): Nullable<Array<string>>;
        set values(value: Nullable<Array<string>>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace MentionableSelectComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MentionableSelectComponent;
        }
    }
    class ChannelSelectComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get customId(): Nullable<string>;
        set customId(value: Nullable<string>);
        get channelTypes(): Nullable<Array<number>>;
        set channelTypes(value: Nullable<Array<number>>);
        get placeholder(): Nullable<string>;
        set placeholder(value: Nullable<string>);
        get defaultValues(): Nullable<Array<work.socialhub.kdiscord.entity.SelectDefaultValue>>;
        set defaultValues(value: Nullable<Array<work.socialhub.kdiscord.entity.SelectDefaultValue>>);
        get minValues(): Nullable<number>;
        set minValues(value: Nullable<number>);
        get maxValues(): Nullable<number>;
        set maxValues(value: Nullable<number>);
        get required(): Nullable<boolean>;
        set required(value: Nullable<boolean>);
        get disabled(): Nullable<boolean>;
        set disabled(value: Nullable<boolean>);
        get values(): Nullable<Array<string>>;
        set values(value: Nullable<Array<string>>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace ChannelSelectComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChannelSelectComponent;
        }
    }
    class SectionComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get components(): Nullable<Array<work.socialhub.kdiscord.entity.MessageComponent>>;
        set components(value: Nullable<Array<work.socialhub.kdiscord.entity.MessageComponent>>);
        get accessory(): Nullable<work.socialhub.kdiscord.entity.MessageComponent>;
        set accessory(value: Nullable<work.socialhub.kdiscord.entity.MessageComponent>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace SectionComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SectionComponent;
        }
    }
    class TextDisplayComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get content(): Nullable<string>;
        set content(value: Nullable<string>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace TextDisplayComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TextDisplayComponent;
        }
    }
    class ThumbnailComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get media(): Nullable<work.socialhub.kdiscord.entity.UnfurledMediaItem>;
        set media(value: Nullable<work.socialhub.kdiscord.entity.UnfurledMediaItem>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get spoiler(): Nullable<boolean>;
        set spoiler(value: Nullable<boolean>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace ThumbnailComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ThumbnailComponent;
        }
    }
    class MediaGalleryComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get items(): Nullable<Array<work.socialhub.kdiscord.entity.MediaGalleryItem>>;
        set items(value: Nullable<Array<work.socialhub.kdiscord.entity.MediaGalleryItem>>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace MediaGalleryComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MediaGalleryComponent;
        }
    }
    class FileComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get file(): Nullable<work.socialhub.kdiscord.entity.UnfurledMediaItem>;
        set file(value: Nullable<work.socialhub.kdiscord.entity.UnfurledMediaItem>);
        get spoiler(): Nullable<boolean>;
        set spoiler(value: Nullable<boolean>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get size(): Nullable<number>;
        set size(value: Nullable<number>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace FileComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FileComponent;
        }
    }
    class SeparatorComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get divider(): Nullable<boolean>;
        set divider(value: Nullable<boolean>);
        get spacing(): Nullable<number>;
        set spacing(value: Nullable<number>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace SeparatorComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SeparatorComponent;
        }
    }
    class ContainerComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get components(): Nullable<Array<work.socialhub.kdiscord.entity.MessageComponent>>;
        set components(value: Nullable<Array<work.socialhub.kdiscord.entity.MessageComponent>>);
        get accentColor(): Nullable<number>;
        set accentColor(value: Nullable<number>);
        get spoiler(): Nullable<boolean>;
        set spoiler(value: Nullable<boolean>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace ContainerComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ContainerComponent;
        }
    }
    class LabelComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get component(): Nullable<work.socialhub.kdiscord.entity.MessageComponent>;
        set component(value: Nullable<work.socialhub.kdiscord.entity.MessageComponent>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace LabelComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => LabelComponent;
        }
    }
    class FileUploadComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get customId(): Nullable<string>;
        set customId(value: Nullable<string>);
        get minValues(): Nullable<number>;
        set minValues(value: Nullable<number>);
        get maxValues(): Nullable<number>;
        set maxValues(value: Nullable<number>);
        get required(): Nullable<boolean>;
        set required(value: Nullable<boolean>);
        get values(): Nullable<Array<string>>;
        set values(value: Nullable<Array<string>>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace FileUploadComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FileUploadComponent;
        }
    }
    class RadioGroupComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get customId(): Nullable<string>;
        set customId(value: Nullable<string>);
        get options(): Nullable<Array<work.socialhub.kdiscord.entity.ComponentChoice>>;
        set options(value: Nullable<Array<work.socialhub.kdiscord.entity.ComponentChoice>>);
        get required(): Nullable<boolean>;
        set required(value: Nullable<boolean>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace RadioGroupComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RadioGroupComponent;
        }
    }
    class CheckboxGroupComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get customId(): Nullable<string>;
        set customId(value: Nullable<string>);
        get options(): Nullable<Array<work.socialhub.kdiscord.entity.ComponentChoice>>;
        set options(value: Nullable<Array<work.socialhub.kdiscord.entity.ComponentChoice>>);
        get minValues(): Nullable<number>;
        set minValues(value: Nullable<number>);
        get maxValues(): Nullable<number>;
        set maxValues(value: Nullable<number>);
        get required(): Nullable<boolean>;
        set required(value: Nullable<boolean>);
        get values(): Nullable<Array<string>>;
        set values(value: Nullable<Array<string>>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace CheckboxGroupComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CheckboxGroupComponent;
        }
    }
    class CheckboxComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get customId(): Nullable<string>;
        set customId(value: Nullable<string>);
        get default(): Nullable<boolean>;
        set default(value: Nullable<boolean>);
        get value(): Nullable<boolean>;
        set value(value: Nullable<boolean>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace CheckboxComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CheckboxComponent;
        }
    }
    class UnknownMessageComponent implements work.socialhub.kdiscord.entity.MessageComponent {
        constructor();
        get type(): Nullable<number>;
        set type(value: Nullable<number>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get rawJson(): Nullable<string>;
        set rawJson(value: Nullable<string>);
        readonly __doNotUseOrImplementIt: work.socialhub.kdiscord.entity.MessageComponent["__doNotUseOrImplementIt"];
    }
    namespace UnknownMessageComponent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UnknownMessageComponent;
        }
    }
    class SelectOption {
        constructor();
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get emoji(): Nullable<work.socialhub.kdiscord.entity.Emoji>;
        set emoji(value: Nullable<work.socialhub.kdiscord.entity.Emoji>);
        get default(): Nullable<boolean>;
        set default(value: Nullable<boolean>);
    }
    namespace SelectOption {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SelectOption;
        }
    }
    class SelectDefaultValue {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
    }
    namespace SelectDefaultValue {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SelectDefaultValue;
        }
    }
    class ComponentChoice {
        constructor();
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get default(): Nullable<boolean>;
        set default(value: Nullable<boolean>);
    }
    namespace ComponentChoice {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ComponentChoice;
        }
    }
    class MediaGalleryItem {
        constructor();
        get media(): Nullable<work.socialhub.kdiscord.entity.UnfurledMediaItem>;
        set media(value: Nullable<work.socialhub.kdiscord.entity.UnfurledMediaItem>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get spoiler(): Nullable<boolean>;
        set spoiler(value: Nullable<boolean>);
    }
    namespace MediaGalleryItem {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MediaGalleryItem;
        }
    }
    class UnfurledMediaItem {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get proxyUrl(): Nullable<string>;
        set proxyUrl(value: Nullable<string>);
        get height(): Nullable<number>;
        set height(value: Nullable<number>);
        get width(): Nullable<number>;
        set width(value: Nullable<number>);
        get placeholder(): Nullable<string>;
        set placeholder(value: Nullable<string>);
        get placeholderVersion(): Nullable<number>;
        set placeholderVersion(value: Nullable<number>);
        get contentType(): Nullable<string>;
        set contentType(value: Nullable<string>);
        get flags(): Nullable<number>;
        set flags(value: Nullable<number>);
        get attachmentId(): Nullable<string>;
        set attachmentId(value: Nullable<string>);
    }
    namespace UnfurledMediaItem {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UnfurledMediaItem;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity {
    class Reaction {
        constructor();
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get countDetails(): Nullable<work.socialhub.kdiscord.entity.ReactionCountDetails>;
        set countDetails(value: Nullable<work.socialhub.kdiscord.entity.ReactionCountDetails>);
        get me(): Nullable<boolean>;
        set me(value: Nullable<boolean>);
        get burstColors(): Nullable<Array<string>>;
        set burstColors(value: Nullable<Array<string>>);
        get burstCount(): Nullable<number>;
        set burstCount(value: Nullable<number>);
        get burstMe(): Nullable<boolean>;
        set burstMe(value: Nullable<boolean>);
        get meBurst(): Nullable<boolean>;
        set meBurst(value: Nullable<boolean>);
        get emoji(): Nullable<work.socialhub.kdiscord.entity.Emoji>;
        set emoji(value: Nullable<work.socialhub.kdiscord.entity.Emoji>);
    }
    namespace Reaction {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Reaction;
        }
    }
    class ReactionCountDetails {
        constructor();
        get burst(): Nullable<number>;
        set burst(value: Nullable<number>);
        get normal(): Nullable<number>;
        set normal(value: Nullable<number>);
    }
    namespace ReactionCountDetails {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReactionCountDetails;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity {
    class Role {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get color(): Nullable<number>;
        set color(value: Nullable<number>);
        get hoist(): Nullable<boolean>;
        set hoist(value: Nullable<boolean>);
        get icon(): Nullable<string>;
        set icon(value: Nullable<string>);
        get unicodeEmoji(): Nullable<string>;
        set unicodeEmoji(value: Nullable<string>);
        get position(): Nullable<number>;
        set position(value: Nullable<number>);
        get permissions(): Nullable<string>;
        set permissions(value: Nullable<string>);
        get managed(): Nullable<boolean>;
        set managed(value: Nullable<boolean>);
        get mentionable(): Nullable<boolean>;
        set mentionable(value: Nullable<boolean>);
    }
    namespace Role {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Role;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity {
    class User {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get discriminator(): Nullable<string>;
        set discriminator(value: Nullable<string>);
        get globalName(): Nullable<string>;
        set globalName(value: Nullable<string>);
        get avatar(): Nullable<string>;
        set avatar(value: Nullable<string>);
        get bot(): Nullable<boolean>;
        set bot(value: Nullable<boolean>);
        get system(): Nullable<boolean>;
        set system(value: Nullable<boolean>);
        get mfaEnabled(): Nullable<boolean>;
        set mfaEnabled(value: Nullable<boolean>);
        get banner(): Nullable<string>;
        set banner(value: Nullable<string>);
        get accentColor(): Nullable<number>;
        set accentColor(value: Nullable<number>);
        get locale(): Nullable<string>;
        set locale(value: Nullable<string>);
        get verified(): Nullable<boolean>;
        set verified(value: Nullable<boolean>);
        get email(): Nullable<string>;
        set email(value: Nullable<string>);
        get flags(): Nullable<number>;
        set flags(value: Nullable<number>);
        get premiumType(): Nullable<number>;
        set premiumType(value: Nullable<number>);
        get publicFlags(): Nullable<number>;
        set publicFlags(value: Nullable<number>);
        get clan(): Nullable<work.socialhub.kdiscord.entity.UserPrimaryGuild>;
        set clan(value: Nullable<work.socialhub.kdiscord.entity.UserPrimaryGuild>);
        get primaryGuild(): Nullable<work.socialhub.kdiscord.entity.UserPrimaryGuild>;
        set primaryGuild(value: Nullable<work.socialhub.kdiscord.entity.UserPrimaryGuild>);
    }
    namespace User {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => User;
        }
    }
    class UserPrimaryGuild {
        constructor();
        get identityGuildId(): Nullable<string>;
        set identityGuildId(value: Nullable<string>);
        get identityEnabled(): Nullable<boolean>;
        set identityEnabled(value: Nullable<boolean>);
        get tag(): Nullable<string>;
        set tag(value: Nullable<string>);
        get badge(): Nullable<string>;
        set badge(value: Nullable<string>);
    }
    namespace UserPrimaryGuild {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserPrimaryGuild;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity.share {
    class FileContent {
        constructor(filename: string, bytes: Int8Array);
        get filename(): string;
        set filename(value: string);
        get bytes(): Int8Array;
        set bytes(value: Int8Array);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
    }
    namespace FileContent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FileContent;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity.share {
    class RateLimit {
        constructor();
        get limit(): number;
        set limit(value: number);
        get remaining(): number;
        set remaining(value: number);
        get reset(): Nullable<any>/* Nullable<kotlin.time.Instant> */;
        set reset(value: Nullable<any>/* Nullable<kotlin.time.Instant> */);
        get bucket(): Nullable<string>;
        set bucket(value: Nullable<string>);
    }
    namespace RateLimit {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RateLimit;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    of(response: any/* work.socialhub.khttpclient.HttpResponse */): Nullable<work.socialhub.kdiscord.entity.share.RateLimit>;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity.share {
    class Response<T> {
        constructor(data: T);
        get data(): T;
        set data(value: T);
        get limit(): Nullable<work.socialhub.kdiscord.entity.share.RateLimit>;
        set limit(value: Nullable<work.socialhub.kdiscord.entity.share.RateLimit>);
        get json(): Nullable<string>;
        set json(value: Nullable<string>);
    }
    namespace Response {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new <T>() => Response<T>;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity.share {
    class ResponseUnit {
        constructor();
        get limit(): Nullable<work.socialhub.kdiscord.entity.share.RateLimit>;
        set limit(value: Nullable<work.socialhub.kdiscord.entity.share.RateLimit>);
    }
    namespace ResponseUnit {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ResponseUnit;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity.gateway {
    class ReadyData {
        constructor();
        get v(): Nullable<number>;
        set v(value: Nullable<number>);
        get user(): Nullable<work.socialhub.kdiscord.entity.User>;
        set user(value: Nullable<work.socialhub.kdiscord.entity.User>);
        get sessionId(): Nullable<string>;
        set sessionId(value: Nullable<string>);
        get resumeGatewayUrl(): Nullable<string>;
        set resumeGatewayUrl(value: Nullable<string>);
    }
    namespace ReadyData {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReadyData;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity.gateway.event {
    class MessageDeleteEvent {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get guildId(): Nullable<string>;
        set guildId(value: Nullable<string>);
    }
    namespace MessageDeleteEvent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessageDeleteEvent;
        }
    }
}
export declare namespace work.socialhub.kdiscord.entity.gateway.event {
    class PresenceUpdateEvent {
        constructor();
        get user(): Nullable<work.socialhub.kdiscord.entity.User>;
        set user(value: Nullable<work.socialhub.kdiscord.entity.User>);
        get guildId(): Nullable<string>;
        set guildId(value: Nullable<string>);
        get status(): Nullable<string>;
        set status(value: Nullable<string>);
    }
    namespace PresenceUpdateEvent {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PresenceUpdateEvent;
        }
    }
}
export declare namespace work.socialhub.kdiscord.stream {
    interface DiscordStream {
        addEventListener(listener: work.socialhub.kdiscord.stream.DiscordStreamListener): void;
        removeEventListener(listener: work.socialhub.kdiscord.stream.DiscordStreamListener): void;
        start(): Promise<void>;
        stop(): void;
        isConnected(): boolean;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kdiscord.stream.DiscordStream": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kdiscord.stream {
    abstract class DiscordStreamFactory extends KtSingleton<DiscordStreamFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace DiscordStreamFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instance(token: string): work.socialhub.kdiscord.stream.DiscordStream;
                instanceWithApiHost(token: string, apiHost: string): work.socialhub.kdiscord.stream.DiscordStream;
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kdiscord.stream {
    interface DiscordStreamListener {
        onReady(data: work.socialhub.kdiscord.entity.gateway.ReadyData): void;
        onMessageCreate(message: work.socialhub.kdiscord.entity.Message): void;
        onMessageUpdate(message: work.socialhub.kdiscord.entity.Message): void;
        onMessageDelete(event: work.socialhub.kdiscord.entity.gateway.event.MessageDeleteEvent): void;
        onGuildCreate(guild: work.socialhub.kdiscord.entity.Guild): void;
        onPresenceUpdate(event: work.socialhub.kdiscord.entity.gateway.event.PresenceUpdateEvent): void;
        onUnknownEvent(type: string, raw: string): void;
        onOpen(): void;
        onClose(): void;
        onError(error: Error/* kotlin.Exception */): void;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kdiscord.stream.DiscordStreamListener": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kdiscord {
    abstract class KdiscordFactory extends KtSingleton<KdiscordFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace KdiscordFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instance(token: string): work.socialhub.kdiscord.Discord;
                instanceWithApiHost(token: string, apiHost: string): work.socialhub.kdiscord.Discord;
                streamInstance(token: string): work.socialhub.kdiscord.stream.DiscordStream;
                streamInstanceWithApiHost(token: string, apiHost: string): work.socialhub.kdiscord.stream.DiscordStream;
                private constructor();
            }
        }
    }
}
export as namespace work_socialhub_kdiscord_all;