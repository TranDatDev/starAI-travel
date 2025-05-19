
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PartnerInfo
 * 
 */
export type PartnerInfo = $Result.DefaultSelection<Prisma.$PartnerInfoPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model ReviewService
 * 
 */
export type ReviewService = $Result.DefaultSelection<Prisma.$ReviewServicePayload>
/**
 * Model UserHistory
 * 
 */
export type UserHistory = $Result.DefaultSelection<Prisma.$UserHistoryPayload>
/**
 * Model ManagerHistory
 * 
 */
export type ManagerHistory = $Result.DefaultSelection<Prisma.$ManagerHistoryPayload>
/**
 * Model AdminHistory
 * 
 */
export type AdminHistory = $Result.DefaultSelection<Prisma.$AdminHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  PARTNER: 'PARTNER',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PartnerStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type PartnerStatus = (typeof PartnerStatus)[keyof typeof PartnerStatus]


export const ServiceType: {
  ACCOMMODATION: 'ACCOMMODATION',
  RESTAURANT: 'RESTAURANT',
  ATTRACTION: 'ATTRACTION'
};

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]


export const ManagerAction: {
  MANAGE_USER: 'MANAGE_USER',
  MANAGE_PARTNER: 'MANAGE_PARTNER'
};

export type ManagerAction = (typeof ManagerAction)[keyof typeof ManagerAction]


export const AdminAction: {
  MANAGE_MANAGER: 'MANAGE_MANAGER',
  RESTORE_USER: 'RESTORE_USER',
  ANALYZE_DATA: 'ANALYZE_DATA',
  MANAGE_AI: 'MANAGE_AI'
};

export type AdminAction = (typeof AdminAction)[keyof typeof AdminAction]


export const TargetType: {
  USER: 'USER',
  PARTNER: 'PARTNER',
  POST: 'POST',
  TOURISM_INFO: 'TOURISM_INFO',
  AI_MODEL: 'AI_MODEL'
};

export type TargetType = (typeof TargetType)[keyof typeof TargetType]


export const HttpMethod: {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  OPTIONS: 'OPTIONS',
  HEAD: 'HEAD'
};

export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PartnerStatus = $Enums.PartnerStatus

export const PartnerStatus: typeof $Enums.PartnerStatus

export type ServiceType = $Enums.ServiceType

export const ServiceType: typeof $Enums.ServiceType

export type ManagerAction = $Enums.ManagerAction

export const ManagerAction: typeof $Enums.ManagerAction

export type AdminAction = $Enums.AdminAction

export const AdminAction: typeof $Enums.AdminAction

export type TargetType = $Enums.TargetType

export const TargetType: typeof $Enums.TargetType

export type HttpMethod = $Enums.HttpMethod

export const HttpMethod: typeof $Enums.HttpMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partnerInfo`: Exposes CRUD operations for the **PartnerInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartnerInfos
    * const partnerInfos = await prisma.partnerInfo.findMany()
    * ```
    */
  get partnerInfo(): Prisma.PartnerInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewService`: Exposes CRUD operations for the **ReviewService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewServices
    * const reviewServices = await prisma.reviewService.findMany()
    * ```
    */
  get reviewService(): Prisma.ReviewServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userHistory`: Exposes CRUD operations for the **UserHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserHistories
    * const userHistories = await prisma.userHistory.findMany()
    * ```
    */
  get userHistory(): Prisma.UserHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.managerHistory`: Exposes CRUD operations for the **ManagerHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManagerHistories
    * const managerHistories = await prisma.managerHistory.findMany()
    * ```
    */
  get managerHistory(): Prisma.ManagerHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminHistory`: Exposes CRUD operations for the **AdminHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminHistories
    * const adminHistories = await prisma.adminHistory.findMany()
    * ```
    */
  get adminHistory(): Prisma.AdminHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Profile: 'Profile',
    Post: 'Post',
    PartnerInfo: 'PartnerInfo',
    Staff: 'Staff',
    ReviewService: 'ReviewService',
    UserHistory: 'UserHistory',
    ManagerHistory: 'ManagerHistory',
    AdminHistory: 'AdminHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "profile" | "post" | "partnerInfo" | "staff" | "reviewService" | "userHistory" | "managerHistory" | "adminHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PartnerInfo: {
        payload: Prisma.$PartnerInfoPayload<ExtArgs>
        fields: Prisma.PartnerInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerInfoPayload>
          }
          findFirst: {
            args: Prisma.PartnerInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerInfoPayload>
          }
          findMany: {
            args: Prisma.PartnerInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerInfoPayload>[]
          }
          create: {
            args: Prisma.PartnerInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerInfoPayload>
          }
          createMany: {
            args: Prisma.PartnerInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartnerInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerInfoPayload>
          }
          update: {
            args: Prisma.PartnerInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerInfoPayload>
          }
          deleteMany: {
            args: Prisma.PartnerInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartnerInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerInfoPayload>
          }
          aggregate: {
            args: Prisma.PartnerInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartnerInfo>
          }
          groupBy: {
            args: Prisma.PartnerInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerInfoCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerInfoCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      ReviewService: {
        payload: Prisma.$ReviewServicePayload<ExtArgs>
        fields: Prisma.ReviewServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewServicePayload>
          }
          findFirst: {
            args: Prisma.ReviewServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewServicePayload>
          }
          findMany: {
            args: Prisma.ReviewServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewServicePayload>[]
          }
          create: {
            args: Prisma.ReviewServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewServicePayload>
          }
          createMany: {
            args: Prisma.ReviewServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewServicePayload>
          }
          update: {
            args: Prisma.ReviewServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewServicePayload>
          }
          deleteMany: {
            args: Prisma.ReviewServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewServicePayload>
          }
          aggregate: {
            args: Prisma.ReviewServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewService>
          }
          groupBy: {
            args: Prisma.ReviewServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewServiceCountAggregateOutputType> | number
          }
        }
      }
      UserHistory: {
        payload: Prisma.$UserHistoryPayload<ExtArgs>
        fields: Prisma.UserHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHistoryPayload>
          }
          findFirst: {
            args: Prisma.UserHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHistoryPayload>
          }
          findMany: {
            args: Prisma.UserHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHistoryPayload>[]
          }
          create: {
            args: Prisma.UserHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHistoryPayload>
          }
          createMany: {
            args: Prisma.UserHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHistoryPayload>
          }
          update: {
            args: Prisma.UserHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHistoryPayload>
          }
          deleteMany: {
            args: Prisma.UserHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHistoryPayload>
          }
          aggregate: {
            args: Prisma.UserHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserHistory>
          }
          groupBy: {
            args: Prisma.UserHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserHistoryCountAggregateOutputType> | number
          }
        }
      }
      ManagerHistory: {
        payload: Prisma.$ManagerHistoryPayload<ExtArgs>
        fields: Prisma.ManagerHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagerHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagerHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerHistoryPayload>
          }
          findFirst: {
            args: Prisma.ManagerHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagerHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerHistoryPayload>
          }
          findMany: {
            args: Prisma.ManagerHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerHistoryPayload>[]
          }
          create: {
            args: Prisma.ManagerHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerHistoryPayload>
          }
          createMany: {
            args: Prisma.ManagerHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ManagerHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerHistoryPayload>
          }
          update: {
            args: Prisma.ManagerHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ManagerHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagerHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ManagerHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerHistoryPayload>
          }
          aggregate: {
            args: Prisma.ManagerHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManagerHistory>
          }
          groupBy: {
            args: Prisma.ManagerHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagerHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagerHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ManagerHistoryCountAggregateOutputType> | number
          }
        }
      }
      AdminHistory: {
        payload: Prisma.$AdminHistoryPayload<ExtArgs>
        fields: Prisma.AdminHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminHistoryPayload>
          }
          findFirst: {
            args: Prisma.AdminHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminHistoryPayload>
          }
          findMany: {
            args: Prisma.AdminHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminHistoryPayload>[]
          }
          create: {
            args: Prisma.AdminHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminHistoryPayload>
          }
          createMany: {
            args: Prisma.AdminHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminHistoryPayload>
          }
          update: {
            args: Prisma.AdminHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminHistoryPayload>
          }
          deleteMany: {
            args: Prisma.AdminHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminHistoryPayload>
          }
          aggregate: {
            args: Prisma.AdminHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminHistory>
          }
          groupBy: {
            args: Prisma.AdminHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<AdminHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    profile?: ProfileOmit
    post?: PostOmit
    partnerInfo?: PartnerInfoOmit
    staff?: StaffOmit
    reviewService?: ReviewServiceOmit
    userHistory?: UserHistoryOmit
    managerHistory?: ManagerHistoryOmit
    adminHistory?: AdminHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    userHistory: number
    managerLogs: number
    adminLogs: number
    verifiedPartners: number
    reviewServices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    userHistory?: boolean | UserCountOutputTypeCountUserHistoryArgs
    managerLogs?: boolean | UserCountOutputTypeCountManagerLogsArgs
    adminLogs?: boolean | UserCountOutputTypeCountAdminLogsArgs
    verifiedPartners?: boolean | UserCountOutputTypeCountVerifiedPartnersArgs
    reviewServices?: boolean | UserCountOutputTypeCountReviewServicesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagerLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdminLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerifiedPartnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerInfoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewServiceWhereInput
  }


  /**
   * Count Type PartnerInfoCountOutputType
   */

  export type PartnerInfoCountOutputType = {
    staffMembers: number
  }

  export type PartnerInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffMembers?: boolean | PartnerInfoCountOutputTypeCountStaffMembersArgs
  }

  // Custom InputTypes
  /**
   * PartnerInfoCountOutputType without action
   */
  export type PartnerInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfoCountOutputType
     */
    select?: PartnerInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartnerInfoCountOutputType without action
   */
  export type PartnerInfoCountOutputTypeCountStaffMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    avatar: string | null
    language: string | null
    theme: string | null
    isBanned: boolean | null
    isDeleted: boolean | null
    isVerified: boolean | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    avatar: string | null
    language: string | null
    theme: string | null
    isBanned: boolean | null
    isDeleted: boolean | null
    isVerified: boolean | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phoneNumber: number
    avatar: number
    language: number
    theme: number
    isBanned: number
    isDeleted: number
    isVerified: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phoneNumber?: true
    avatar?: true
    language?: true
    theme?: true
    isBanned?: true
    isDeleted?: true
    isVerified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phoneNumber?: true
    avatar?: true
    language?: true
    theme?: true
    isBanned?: true
    isDeleted?: true
    isVerified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phoneNumber?: true
    avatar?: true
    language?: true
    theme?: true
    isBanned?: true
    isDeleted?: true
    isVerified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    phoneNumber: string | null
    avatar: string | null
    language: string | null
    theme: string | null
    isBanned: boolean
    isDeleted: boolean
    isVerified: boolean
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    avatar?: boolean
    language?: boolean
    theme?: boolean
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    partnerInfo?: boolean | User$partnerInfoArgs<ExtArgs>
    userHistory?: boolean | User$userHistoryArgs<ExtArgs>
    managerLogs?: boolean | User$managerLogsArgs<ExtArgs>
    adminLogs?: boolean | User$adminLogsArgs<ExtArgs>
    verifiedPartners?: boolean | User$verifiedPartnersArgs<ExtArgs>
    reviewServices?: boolean | User$reviewServicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    avatar?: boolean
    language?: boolean
    theme?: boolean
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phoneNumber" | "avatar" | "language" | "theme" | "isBanned" | "isDeleted" | "isVerified" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    partnerInfo?: boolean | User$partnerInfoArgs<ExtArgs>
    userHistory?: boolean | User$userHistoryArgs<ExtArgs>
    managerLogs?: boolean | User$managerLogsArgs<ExtArgs>
    adminLogs?: boolean | User$adminLogsArgs<ExtArgs>
    verifiedPartners?: boolean | User$verifiedPartnersArgs<ExtArgs>
    reviewServices?: boolean | User$reviewServicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      partnerInfo: Prisma.$PartnerInfoPayload<ExtArgs> | null
      userHistory: Prisma.$UserHistoryPayload<ExtArgs>[]
      managerLogs: Prisma.$ManagerHistoryPayload<ExtArgs>[]
      adminLogs: Prisma.$AdminHistoryPayload<ExtArgs>[]
      verifiedPartners: Prisma.$PartnerInfoPayload<ExtArgs>[]
      reviewServices: Prisma.$ReviewServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      phoneNumber: string | null
      avatar: string | null
      language: string | null
      theme: string | null
      isBanned: boolean
      isDeleted: boolean
      isVerified: boolean
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partnerInfo<T extends User$partnerInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$partnerInfoArgs<ExtArgs>>): Prisma__PartnerInfoClient<$Result.GetResult<Prisma.$PartnerInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userHistory<T extends User$userHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$userHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    managerLogs<T extends User$managerLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$managerLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adminLogs<T extends User$adminLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$adminLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verifiedPartners<T extends User$verifiedPartnersArgs<ExtArgs> = {}>(args?: Subset<T, User$verifiedPartnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewServices<T extends User$reviewServicesArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly language: FieldRef<"User", 'String'>
    readonly theme: FieldRef<"User", 'String'>
    readonly isBanned: FieldRef<"User", 'Boolean'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.partnerInfo
   */
  export type User$partnerInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfo
     */
    select?: PartnerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerInfo
     */
    omit?: PartnerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInfoInclude<ExtArgs> | null
    where?: PartnerInfoWhereInput
  }

  /**
   * User.userHistory
   */
  export type User$userHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHistory
     */
    select?: UserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHistory
     */
    omit?: UserHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHistoryInclude<ExtArgs> | null
    where?: UserHistoryWhereInput
    orderBy?: UserHistoryOrderByWithRelationInput | UserHistoryOrderByWithRelationInput[]
    cursor?: UserHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHistoryScalarFieldEnum | UserHistoryScalarFieldEnum[]
  }

  /**
   * User.managerLogs
   */
  export type User$managerLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerHistory
     */
    select?: ManagerHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerHistory
     */
    omit?: ManagerHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerHistoryInclude<ExtArgs> | null
    where?: ManagerHistoryWhereInput
    orderBy?: ManagerHistoryOrderByWithRelationInput | ManagerHistoryOrderByWithRelationInput[]
    cursor?: ManagerHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManagerHistoryScalarFieldEnum | ManagerHistoryScalarFieldEnum[]
  }

  /**
   * User.adminLogs
   */
  export type User$adminLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminHistory
     */
    select?: AdminHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminHistory
     */
    omit?: AdminHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminHistoryInclude<ExtArgs> | null
    where?: AdminHistoryWhereInput
    orderBy?: AdminHistoryOrderByWithRelationInput | AdminHistoryOrderByWithRelationInput[]
    cursor?: AdminHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminHistoryScalarFieldEnum | AdminHistoryScalarFieldEnum[]
  }

  /**
   * User.verifiedPartners
   */
  export type User$verifiedPartnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfo
     */
    select?: PartnerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerInfo
     */
    omit?: PartnerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInfoInclude<ExtArgs> | null
    where?: PartnerInfoWhereInput
    orderBy?: PartnerInfoOrderByWithRelationInput | PartnerInfoOrderByWithRelationInput[]
    cursor?: PartnerInfoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerInfoScalarFieldEnum | PartnerInfoScalarFieldEnum[]
  }

  /**
   * User.reviewServices
   */
  export type User$reviewServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewService
     */
    select?: ReviewServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewService
     */
    omit?: ReviewServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewServiceInclude<ExtArgs> | null
    where?: ReviewServiceWhereInput
    orderBy?: ReviewServiceOrderByWithRelationInput | ReviewServiceOrderByWithRelationInput[]
    cursor?: ReviewServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewServiceScalarFieldEnum | ReviewServiceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    birthday: Date | null
    gender: string | null
    location: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    birthday: Date | null
    gender: string | null
    location: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    birthday: number
    gender: number
    location: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    birthday?: true
    gender?: true
    location?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    birthday?: true
    gender?: true
    location?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    birthday?: true
    gender?: true
    location?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: string
    bio: string | null
    birthday: Date | null
    gender: string | null
    location: string | null
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    birthday?: boolean
    gender?: boolean
    location?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>



  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
    birthday?: boolean
    gender?: boolean
    location?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bio" | "birthday" | "gender" | "location", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bio: string | null
      birthday: Date | null
      gender: string | null
      location: string | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly birthday: FieldRef<"Profile", 'DateTime'>
    readonly gender: FieldRef<"Profile", 'String'>
    readonly location: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    imageUrl: string | null
    isPublic: boolean | null
    isDeleted: boolean | null
    isDisabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    imageUrl: string | null
    isPublic: boolean | null
    isDeleted: boolean | null
    isDisabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    imageUrl: number
    isPublic: number
    isDeleted: number
    isDisabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    imageUrl?: true
    isPublic?: true
    isDeleted?: true
    isDisabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    imageUrl?: true
    isPublic?: true
    isDeleted?: true
    isDisabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    imageUrl?: true
    isPublic?: true
    isDeleted?: true
    isDisabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    userId: string
    title: string
    content: string
    imageUrl: string | null
    isPublic: boolean
    isDeleted: boolean
    isDisabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    isPublic?: boolean
    isDeleted?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    isPublic?: boolean
    isDeleted?: boolean
    isDisabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "content" | "imageUrl" | "isPublic" | "isDeleted" | "isDisabled" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      content: string
      imageUrl: string | null
      isPublic: boolean
      isDeleted: boolean
      isDisabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly imageUrl: FieldRef<"Post", 'String'>
    readonly isPublic: FieldRef<"Post", 'Boolean'>
    readonly isDeleted: FieldRef<"Post", 'Boolean'>
    readonly isDisabled: FieldRef<"Post", 'Boolean'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PartnerInfo
   */

  export type AggregatePartnerInfo = {
    _count: PartnerInfoCountAggregateOutputType | null
    _min: PartnerInfoMinAggregateOutputType | null
    _max: PartnerInfoMaxAggregateOutputType | null
  }

  export type PartnerInfoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organization: string | null
    licenseNumber: string | null
    status: $Enums.PartnerStatus | null
    verifiedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerInfoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organization: string | null
    licenseNumber: string | null
    status: $Enums.PartnerStatus | null
    verifiedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartnerInfoCountAggregateOutputType = {
    id: number
    userId: number
    organization: number
    licenseNumber: number
    status: number
    verifiedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartnerInfoMinAggregateInputType = {
    id?: true
    userId?: true
    organization?: true
    licenseNumber?: true
    status?: true
    verifiedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerInfoMaxAggregateInputType = {
    id?: true
    userId?: true
    organization?: true
    licenseNumber?: true
    status?: true
    verifiedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartnerInfoCountAggregateInputType = {
    id?: true
    userId?: true
    organization?: true
    licenseNumber?: true
    status?: true
    verifiedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartnerInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerInfo to aggregate.
     */
    where?: PartnerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerInfos to fetch.
     */
    orderBy?: PartnerInfoOrderByWithRelationInput | PartnerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartnerInfos
    **/
    _count?: true | PartnerInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerInfoMaxAggregateInputType
  }

  export type GetPartnerInfoAggregateType<T extends PartnerInfoAggregateArgs> = {
        [P in keyof T & keyof AggregatePartnerInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartnerInfo[P]>
      : GetScalarType<T[P], AggregatePartnerInfo[P]>
  }




  export type PartnerInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerInfoWhereInput
    orderBy?: PartnerInfoOrderByWithAggregationInput | PartnerInfoOrderByWithAggregationInput[]
    by: PartnerInfoScalarFieldEnum[] | PartnerInfoScalarFieldEnum
    having?: PartnerInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerInfoCountAggregateInputType | true
    _min?: PartnerInfoMinAggregateInputType
    _max?: PartnerInfoMaxAggregateInputType
  }

  export type PartnerInfoGroupByOutputType = {
    id: string
    userId: string
    organization: string | null
    licenseNumber: string | null
    status: $Enums.PartnerStatus
    verifiedById: string | null
    createdAt: Date
    updatedAt: Date
    _count: PartnerInfoCountAggregateOutputType | null
    _min: PartnerInfoMinAggregateOutputType | null
    _max: PartnerInfoMaxAggregateOutputType | null
  }

  type GetPartnerInfoGroupByPayload<T extends PartnerInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerInfoGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerInfoGroupByOutputType[P]>
        }
      >
    >


  export type PartnerInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organization?: boolean
    licenseNumber?: boolean
    status?: boolean
    verifiedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | PartnerInfo$verifiedByArgs<ExtArgs>
    staffMembers?: boolean | PartnerInfo$staffMembersArgs<ExtArgs>
    _count?: boolean | PartnerInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partnerInfo"]>



  export type PartnerInfoSelectScalar = {
    id?: boolean
    userId?: boolean
    organization?: boolean
    licenseNumber?: boolean
    status?: boolean
    verifiedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartnerInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organization" | "licenseNumber" | "status" | "verifiedById" | "createdAt" | "updatedAt", ExtArgs["result"]["partnerInfo"]>
  export type PartnerInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | PartnerInfo$verifiedByArgs<ExtArgs>
    staffMembers?: boolean | PartnerInfo$staffMembersArgs<ExtArgs>
    _count?: boolean | PartnerInfoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PartnerInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartnerInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      verifiedBy: Prisma.$UserPayload<ExtArgs> | null
      staffMembers: Prisma.$StaffPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organization: string | null
      licenseNumber: string | null
      status: $Enums.PartnerStatus
      verifiedById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partnerInfo"]>
    composites: {}
  }

  type PartnerInfoGetPayload<S extends boolean | null | undefined | PartnerInfoDefaultArgs> = $Result.GetResult<Prisma.$PartnerInfoPayload, S>

  type PartnerInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerInfoCountAggregateInputType | true
    }

  export interface PartnerInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartnerInfo'], meta: { name: 'PartnerInfo' } }
    /**
     * Find zero or one PartnerInfo that matches the filter.
     * @param {PartnerInfoFindUniqueArgs} args - Arguments to find a PartnerInfo
     * @example
     * // Get one PartnerInfo
     * const partnerInfo = await prisma.partnerInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerInfoFindUniqueArgs>(args: SelectSubset<T, PartnerInfoFindUniqueArgs<ExtArgs>>): Prisma__PartnerInfoClient<$Result.GetResult<Prisma.$PartnerInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartnerInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerInfoFindUniqueOrThrowArgs} args - Arguments to find a PartnerInfo
     * @example
     * // Get one PartnerInfo
     * const partnerInfo = await prisma.partnerInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerInfoClient<$Result.GetResult<Prisma.$PartnerInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartnerInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerInfoFindFirstArgs} args - Arguments to find a PartnerInfo
     * @example
     * // Get one PartnerInfo
     * const partnerInfo = await prisma.partnerInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerInfoFindFirstArgs>(args?: SelectSubset<T, PartnerInfoFindFirstArgs<ExtArgs>>): Prisma__PartnerInfoClient<$Result.GetResult<Prisma.$PartnerInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartnerInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerInfoFindFirstOrThrowArgs} args - Arguments to find a PartnerInfo
     * @example
     * // Get one PartnerInfo
     * const partnerInfo = await prisma.partnerInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerInfoClient<$Result.GetResult<Prisma.$PartnerInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartnerInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartnerInfos
     * const partnerInfos = await prisma.partnerInfo.findMany()
     * 
     * // Get first 10 PartnerInfos
     * const partnerInfos = await prisma.partnerInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerInfoWithIdOnly = await prisma.partnerInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerInfoFindManyArgs>(args?: SelectSubset<T, PartnerInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartnerInfo.
     * @param {PartnerInfoCreateArgs} args - Arguments to create a PartnerInfo.
     * @example
     * // Create one PartnerInfo
     * const PartnerInfo = await prisma.partnerInfo.create({
     *   data: {
     *     // ... data to create a PartnerInfo
     *   }
     * })
     * 
     */
    create<T extends PartnerInfoCreateArgs>(args: SelectSubset<T, PartnerInfoCreateArgs<ExtArgs>>): Prisma__PartnerInfoClient<$Result.GetResult<Prisma.$PartnerInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartnerInfos.
     * @param {PartnerInfoCreateManyArgs} args - Arguments to create many PartnerInfos.
     * @example
     * // Create many PartnerInfos
     * const partnerInfo = await prisma.partnerInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerInfoCreateManyArgs>(args?: SelectSubset<T, PartnerInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PartnerInfo.
     * @param {PartnerInfoDeleteArgs} args - Arguments to delete one PartnerInfo.
     * @example
     * // Delete one PartnerInfo
     * const PartnerInfo = await prisma.partnerInfo.delete({
     *   where: {
     *     // ... filter to delete one PartnerInfo
     *   }
     * })
     * 
     */
    delete<T extends PartnerInfoDeleteArgs>(args: SelectSubset<T, PartnerInfoDeleteArgs<ExtArgs>>): Prisma__PartnerInfoClient<$Result.GetResult<Prisma.$PartnerInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartnerInfo.
     * @param {PartnerInfoUpdateArgs} args - Arguments to update one PartnerInfo.
     * @example
     * // Update one PartnerInfo
     * const partnerInfo = await prisma.partnerInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerInfoUpdateArgs>(args: SelectSubset<T, PartnerInfoUpdateArgs<ExtArgs>>): Prisma__PartnerInfoClient<$Result.GetResult<Prisma.$PartnerInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartnerInfos.
     * @param {PartnerInfoDeleteManyArgs} args - Arguments to filter PartnerInfos to delete.
     * @example
     * // Delete a few PartnerInfos
     * const { count } = await prisma.partnerInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerInfoDeleteManyArgs>(args?: SelectSubset<T, PartnerInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartnerInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartnerInfos
     * const partnerInfo = await prisma.partnerInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerInfoUpdateManyArgs>(args: SelectSubset<T, PartnerInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PartnerInfo.
     * @param {PartnerInfoUpsertArgs} args - Arguments to update or create a PartnerInfo.
     * @example
     * // Update or create a PartnerInfo
     * const partnerInfo = await prisma.partnerInfo.upsert({
     *   create: {
     *     // ... data to create a PartnerInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartnerInfo we want to update
     *   }
     * })
     */
    upsert<T extends PartnerInfoUpsertArgs>(args: SelectSubset<T, PartnerInfoUpsertArgs<ExtArgs>>): Prisma__PartnerInfoClient<$Result.GetResult<Prisma.$PartnerInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartnerInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerInfoCountArgs} args - Arguments to filter PartnerInfos to count.
     * @example
     * // Count the number of PartnerInfos
     * const count = await prisma.partnerInfo.count({
     *   where: {
     *     // ... the filter for the PartnerInfos we want to count
     *   }
     * })
    **/
    count<T extends PartnerInfoCountArgs>(
      args?: Subset<T, PartnerInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartnerInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerInfoAggregateArgs>(args: Subset<T, PartnerInfoAggregateArgs>): Prisma.PrismaPromise<GetPartnerInfoAggregateType<T>>

    /**
     * Group by PartnerInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerInfoGroupByArgs['orderBy'] }
        : { orderBy?: PartnerInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartnerInfo model
   */
  readonly fields: PartnerInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartnerInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    verifiedBy<T extends PartnerInfo$verifiedByArgs<ExtArgs> = {}>(args?: Subset<T, PartnerInfo$verifiedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staffMembers<T extends PartnerInfo$staffMembersArgs<ExtArgs> = {}>(args?: Subset<T, PartnerInfo$staffMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartnerInfo model
   */
  interface PartnerInfoFieldRefs {
    readonly id: FieldRef<"PartnerInfo", 'String'>
    readonly userId: FieldRef<"PartnerInfo", 'String'>
    readonly organization: FieldRef<"PartnerInfo", 'String'>
    readonly licenseNumber: FieldRef<"PartnerInfo", 'String'>
    readonly status: FieldRef<"PartnerInfo", 'PartnerStatus'>
    readonly verifiedById: FieldRef<"PartnerInfo", 'String'>
    readonly createdAt: FieldRef<"PartnerInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"PartnerInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartnerInfo findUnique
   */
  export type PartnerInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfo
     */
    select?: PartnerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerInfo
     */
    omit?: PartnerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInfoInclude<ExtArgs> | null
    /**
     * Filter, which PartnerInfo to fetch.
     */
    where: PartnerInfoWhereUniqueInput
  }

  /**
   * PartnerInfo findUniqueOrThrow
   */
  export type PartnerInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfo
     */
    select?: PartnerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerInfo
     */
    omit?: PartnerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInfoInclude<ExtArgs> | null
    /**
     * Filter, which PartnerInfo to fetch.
     */
    where: PartnerInfoWhereUniqueInput
  }

  /**
   * PartnerInfo findFirst
   */
  export type PartnerInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfo
     */
    select?: PartnerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerInfo
     */
    omit?: PartnerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInfoInclude<ExtArgs> | null
    /**
     * Filter, which PartnerInfo to fetch.
     */
    where?: PartnerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerInfos to fetch.
     */
    orderBy?: PartnerInfoOrderByWithRelationInput | PartnerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerInfos.
     */
    cursor?: PartnerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerInfos.
     */
    distinct?: PartnerInfoScalarFieldEnum | PartnerInfoScalarFieldEnum[]
  }

  /**
   * PartnerInfo findFirstOrThrow
   */
  export type PartnerInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfo
     */
    select?: PartnerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerInfo
     */
    omit?: PartnerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInfoInclude<ExtArgs> | null
    /**
     * Filter, which PartnerInfo to fetch.
     */
    where?: PartnerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerInfos to fetch.
     */
    orderBy?: PartnerInfoOrderByWithRelationInput | PartnerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartnerInfos.
     */
    cursor?: PartnerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartnerInfos.
     */
    distinct?: PartnerInfoScalarFieldEnum | PartnerInfoScalarFieldEnum[]
  }

  /**
   * PartnerInfo findMany
   */
  export type PartnerInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfo
     */
    select?: PartnerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerInfo
     */
    omit?: PartnerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInfoInclude<ExtArgs> | null
    /**
     * Filter, which PartnerInfos to fetch.
     */
    where?: PartnerInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartnerInfos to fetch.
     */
    orderBy?: PartnerInfoOrderByWithRelationInput | PartnerInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartnerInfos.
     */
    cursor?: PartnerInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartnerInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartnerInfos.
     */
    skip?: number
    distinct?: PartnerInfoScalarFieldEnum | PartnerInfoScalarFieldEnum[]
  }

  /**
   * PartnerInfo create
   */
  export type PartnerInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfo
     */
    select?: PartnerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerInfo
     */
    omit?: PartnerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a PartnerInfo.
     */
    data: XOR<PartnerInfoCreateInput, PartnerInfoUncheckedCreateInput>
  }

  /**
   * PartnerInfo createMany
   */
  export type PartnerInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartnerInfos.
     */
    data: PartnerInfoCreateManyInput | PartnerInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartnerInfo update
   */
  export type PartnerInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfo
     */
    select?: PartnerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerInfo
     */
    omit?: PartnerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a PartnerInfo.
     */
    data: XOR<PartnerInfoUpdateInput, PartnerInfoUncheckedUpdateInput>
    /**
     * Choose, which PartnerInfo to update.
     */
    where: PartnerInfoWhereUniqueInput
  }

  /**
   * PartnerInfo updateMany
   */
  export type PartnerInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartnerInfos.
     */
    data: XOR<PartnerInfoUpdateManyMutationInput, PartnerInfoUncheckedUpdateManyInput>
    /**
     * Filter which PartnerInfos to update
     */
    where?: PartnerInfoWhereInput
    /**
     * Limit how many PartnerInfos to update.
     */
    limit?: number
  }

  /**
   * PartnerInfo upsert
   */
  export type PartnerInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfo
     */
    select?: PartnerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerInfo
     */
    omit?: PartnerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the PartnerInfo to update in case it exists.
     */
    where: PartnerInfoWhereUniqueInput
    /**
     * In case the PartnerInfo found by the `where` argument doesn't exist, create a new PartnerInfo with this data.
     */
    create: XOR<PartnerInfoCreateInput, PartnerInfoUncheckedCreateInput>
    /**
     * In case the PartnerInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerInfoUpdateInput, PartnerInfoUncheckedUpdateInput>
  }

  /**
   * PartnerInfo delete
   */
  export type PartnerInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfo
     */
    select?: PartnerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerInfo
     */
    omit?: PartnerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInfoInclude<ExtArgs> | null
    /**
     * Filter which PartnerInfo to delete.
     */
    where: PartnerInfoWhereUniqueInput
  }

  /**
   * PartnerInfo deleteMany
   */
  export type PartnerInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartnerInfos to delete
     */
    where?: PartnerInfoWhereInput
    /**
     * Limit how many PartnerInfos to delete.
     */
    limit?: number
  }

  /**
   * PartnerInfo.verifiedBy
   */
  export type PartnerInfo$verifiedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PartnerInfo.staffMembers
   */
  export type PartnerInfo$staffMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * PartnerInfo without action
   */
  export type PartnerInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartnerInfo
     */
    select?: PartnerInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartnerInfo
     */
    omit?: PartnerInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInfoInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    partnerId: string | null
    name: string | null
    position: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    partnerId: string | null
    name: string | null
    position: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    partnerId: number
    name: number
    position: number
    email: number
    phoneNumber: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true
    partnerId?: true
    name?: true
    position?: true
    email?: true
    phoneNumber?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    partnerId?: true
    name?: true
    position?: true
    email?: true
    phoneNumber?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    partnerId?: true
    name?: true
    position?: true
    email?: true
    phoneNumber?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    partnerId: string
    name: string
    position: string
    email: string
    phoneNumber: string
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    partnerId?: boolean
    name?: boolean
    position?: boolean
    email?: boolean
    phoneNumber?: boolean
    partner?: boolean | PartnerInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>



  export type StaffSelectScalar = {
    id?: boolean
    partnerId?: boolean
    name?: boolean
    position?: boolean
    email?: boolean
    phoneNumber?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "partnerId" | "name" | "position" | "email" | "phoneNumber", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partner?: boolean | PartnerInfoDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      partner: Prisma.$PartnerInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      partnerId: string
      name: string
      position: string
      email: string
      phoneNumber: string
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partner<T extends PartnerInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartnerInfoDefaultArgs<ExtArgs>>): Prisma__PartnerInfoClient<$Result.GetResult<Prisma.$PartnerInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'String'>
    readonly partnerId: FieldRef<"Staff", 'String'>
    readonly name: FieldRef<"Staff", 'String'>
    readonly position: FieldRef<"Staff", 'String'>
    readonly email: FieldRef<"Staff", 'String'>
    readonly phoneNumber: FieldRef<"Staff", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model ReviewService
   */

  export type AggregateReviewService = {
    _count: ReviewServiceCountAggregateOutputType | null
    _avg: ReviewServiceAvgAggregateOutputType | null
    _sum: ReviewServiceSumAggregateOutputType | null
    _min: ReviewServiceMinAggregateOutputType | null
    _max: ReviewServiceMaxAggregateOutputType | null
  }

  export type ReviewServiceAvgAggregateOutputType = {
    reviewStars: number | null
  }

  export type ReviewServiceSumAggregateOutputType = {
    reviewStars: number | null
  }

  export type ReviewServiceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    serviceId: string | null
    service: $Enums.ServiceType | null
    reviewStars: number | null
    comment: string | null
    reviewedAt: Date | null
  }

  export type ReviewServiceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    serviceId: string | null
    service: $Enums.ServiceType | null
    reviewStars: number | null
    comment: string | null
    reviewedAt: Date | null
  }

  export type ReviewServiceCountAggregateOutputType = {
    id: number
    userId: number
    serviceId: number
    service: number
    reviewStars: number
    comment: number
    reviewedAt: number
    metadata: number
    _all: number
  }


  export type ReviewServiceAvgAggregateInputType = {
    reviewStars?: true
  }

  export type ReviewServiceSumAggregateInputType = {
    reviewStars?: true
  }

  export type ReviewServiceMinAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    service?: true
    reviewStars?: true
    comment?: true
    reviewedAt?: true
  }

  export type ReviewServiceMaxAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    service?: true
    reviewStars?: true
    comment?: true
    reviewedAt?: true
  }

  export type ReviewServiceCountAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    service?: true
    reviewStars?: true
    comment?: true
    reviewedAt?: true
    metadata?: true
    _all?: true
  }

  export type ReviewServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewService to aggregate.
     */
    where?: ReviewServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewServices to fetch.
     */
    orderBy?: ReviewServiceOrderByWithRelationInput | ReviewServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewServices
    **/
    _count?: true | ReviewServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewServiceMaxAggregateInputType
  }

  export type GetReviewServiceAggregateType<T extends ReviewServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewService[P]>
      : GetScalarType<T[P], AggregateReviewService[P]>
  }




  export type ReviewServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewServiceWhereInput
    orderBy?: ReviewServiceOrderByWithAggregationInput | ReviewServiceOrderByWithAggregationInput[]
    by: ReviewServiceScalarFieldEnum[] | ReviewServiceScalarFieldEnum
    having?: ReviewServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewServiceCountAggregateInputType | true
    _avg?: ReviewServiceAvgAggregateInputType
    _sum?: ReviewServiceSumAggregateInputType
    _min?: ReviewServiceMinAggregateInputType
    _max?: ReviewServiceMaxAggregateInputType
  }

  export type ReviewServiceGroupByOutputType = {
    id: string
    userId: string
    serviceId: string
    service: $Enums.ServiceType
    reviewStars: number
    comment: string | null
    reviewedAt: Date
    metadata: JsonValue | null
    _count: ReviewServiceCountAggregateOutputType | null
    _avg: ReviewServiceAvgAggregateOutputType | null
    _sum: ReviewServiceSumAggregateOutputType | null
    _min: ReviewServiceMinAggregateOutputType | null
    _max: ReviewServiceMaxAggregateOutputType | null
  }

  type GetReviewServiceGroupByPayload<T extends ReviewServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewServiceGroupByOutputType[P]>
        }
      >
    >


  export type ReviewServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    service?: boolean
    reviewStars?: boolean
    comment?: boolean
    reviewedAt?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewService"]>



  export type ReviewServiceSelectScalar = {
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    service?: boolean
    reviewStars?: boolean
    comment?: boolean
    reviewedAt?: boolean
    metadata?: boolean
  }

  export type ReviewServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "serviceId" | "service" | "reviewStars" | "comment" | "reviewedAt" | "metadata", ExtArgs["result"]["reviewService"]>
  export type ReviewServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewService"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      serviceId: string
      service: $Enums.ServiceType
      reviewStars: number
      comment: string | null
      reviewedAt: Date
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["reviewService"]>
    composites: {}
  }

  type ReviewServiceGetPayload<S extends boolean | null | undefined | ReviewServiceDefaultArgs> = $Result.GetResult<Prisma.$ReviewServicePayload, S>

  type ReviewServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewServiceCountAggregateInputType | true
    }

  export interface ReviewServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewService'], meta: { name: 'ReviewService' } }
    /**
     * Find zero or one ReviewService that matches the filter.
     * @param {ReviewServiceFindUniqueArgs} args - Arguments to find a ReviewService
     * @example
     * // Get one ReviewService
     * const reviewService = await prisma.reviewService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewServiceFindUniqueArgs>(args: SelectSubset<T, ReviewServiceFindUniqueArgs<ExtArgs>>): Prisma__ReviewServiceClient<$Result.GetResult<Prisma.$ReviewServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewServiceFindUniqueOrThrowArgs} args - Arguments to find a ReviewService
     * @example
     * // Get one ReviewService
     * const reviewService = await prisma.reviewService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewServiceClient<$Result.GetResult<Prisma.$ReviewServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewServiceFindFirstArgs} args - Arguments to find a ReviewService
     * @example
     * // Get one ReviewService
     * const reviewService = await prisma.reviewService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewServiceFindFirstArgs>(args?: SelectSubset<T, ReviewServiceFindFirstArgs<ExtArgs>>): Prisma__ReviewServiceClient<$Result.GetResult<Prisma.$ReviewServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewServiceFindFirstOrThrowArgs} args - Arguments to find a ReviewService
     * @example
     * // Get one ReviewService
     * const reviewService = await prisma.reviewService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewServiceClient<$Result.GetResult<Prisma.$ReviewServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewServices
     * const reviewServices = await prisma.reviewService.findMany()
     * 
     * // Get first 10 ReviewServices
     * const reviewServices = await prisma.reviewService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewServiceWithIdOnly = await prisma.reviewService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewServiceFindManyArgs>(args?: SelectSubset<T, ReviewServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewService.
     * @param {ReviewServiceCreateArgs} args - Arguments to create a ReviewService.
     * @example
     * // Create one ReviewService
     * const ReviewService = await prisma.reviewService.create({
     *   data: {
     *     // ... data to create a ReviewService
     *   }
     * })
     * 
     */
    create<T extends ReviewServiceCreateArgs>(args: SelectSubset<T, ReviewServiceCreateArgs<ExtArgs>>): Prisma__ReviewServiceClient<$Result.GetResult<Prisma.$ReviewServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewServices.
     * @param {ReviewServiceCreateManyArgs} args - Arguments to create many ReviewServices.
     * @example
     * // Create many ReviewServices
     * const reviewService = await prisma.reviewService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewServiceCreateManyArgs>(args?: SelectSubset<T, ReviewServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReviewService.
     * @param {ReviewServiceDeleteArgs} args - Arguments to delete one ReviewService.
     * @example
     * // Delete one ReviewService
     * const ReviewService = await prisma.reviewService.delete({
     *   where: {
     *     // ... filter to delete one ReviewService
     *   }
     * })
     * 
     */
    delete<T extends ReviewServiceDeleteArgs>(args: SelectSubset<T, ReviewServiceDeleteArgs<ExtArgs>>): Prisma__ReviewServiceClient<$Result.GetResult<Prisma.$ReviewServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewService.
     * @param {ReviewServiceUpdateArgs} args - Arguments to update one ReviewService.
     * @example
     * // Update one ReviewService
     * const reviewService = await prisma.reviewService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewServiceUpdateArgs>(args: SelectSubset<T, ReviewServiceUpdateArgs<ExtArgs>>): Prisma__ReviewServiceClient<$Result.GetResult<Prisma.$ReviewServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewServices.
     * @param {ReviewServiceDeleteManyArgs} args - Arguments to filter ReviewServices to delete.
     * @example
     * // Delete a few ReviewServices
     * const { count } = await prisma.reviewService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewServiceDeleteManyArgs>(args?: SelectSubset<T, ReviewServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewServices
     * const reviewService = await prisma.reviewService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewServiceUpdateManyArgs>(args: SelectSubset<T, ReviewServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewService.
     * @param {ReviewServiceUpsertArgs} args - Arguments to update or create a ReviewService.
     * @example
     * // Update or create a ReviewService
     * const reviewService = await prisma.reviewService.upsert({
     *   create: {
     *     // ... data to create a ReviewService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewService we want to update
     *   }
     * })
     */
    upsert<T extends ReviewServiceUpsertArgs>(args: SelectSubset<T, ReviewServiceUpsertArgs<ExtArgs>>): Prisma__ReviewServiceClient<$Result.GetResult<Prisma.$ReviewServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewServiceCountArgs} args - Arguments to filter ReviewServices to count.
     * @example
     * // Count the number of ReviewServices
     * const count = await prisma.reviewService.count({
     *   where: {
     *     // ... the filter for the ReviewServices we want to count
     *   }
     * })
    **/
    count<T extends ReviewServiceCountArgs>(
      args?: Subset<T, ReviewServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewServiceAggregateArgs>(args: Subset<T, ReviewServiceAggregateArgs>): Prisma.PrismaPromise<GetReviewServiceAggregateType<T>>

    /**
     * Group by ReviewService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewServiceGroupByArgs['orderBy'] }
        : { orderBy?: ReviewServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewService model
   */
  readonly fields: ReviewServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewService model
   */
  interface ReviewServiceFieldRefs {
    readonly id: FieldRef<"ReviewService", 'String'>
    readonly userId: FieldRef<"ReviewService", 'String'>
    readonly serviceId: FieldRef<"ReviewService", 'String'>
    readonly service: FieldRef<"ReviewService", 'ServiceType'>
    readonly reviewStars: FieldRef<"ReviewService", 'Int'>
    readonly comment: FieldRef<"ReviewService", 'String'>
    readonly reviewedAt: FieldRef<"ReviewService", 'DateTime'>
    readonly metadata: FieldRef<"ReviewService", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ReviewService findUnique
   */
  export type ReviewServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewService
     */
    select?: ReviewServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewService
     */
    omit?: ReviewServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewServiceInclude<ExtArgs> | null
    /**
     * Filter, which ReviewService to fetch.
     */
    where: ReviewServiceWhereUniqueInput
  }

  /**
   * ReviewService findUniqueOrThrow
   */
  export type ReviewServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewService
     */
    select?: ReviewServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewService
     */
    omit?: ReviewServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewServiceInclude<ExtArgs> | null
    /**
     * Filter, which ReviewService to fetch.
     */
    where: ReviewServiceWhereUniqueInput
  }

  /**
   * ReviewService findFirst
   */
  export type ReviewServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewService
     */
    select?: ReviewServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewService
     */
    omit?: ReviewServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewServiceInclude<ExtArgs> | null
    /**
     * Filter, which ReviewService to fetch.
     */
    where?: ReviewServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewServices to fetch.
     */
    orderBy?: ReviewServiceOrderByWithRelationInput | ReviewServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewServices.
     */
    cursor?: ReviewServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewServices.
     */
    distinct?: ReviewServiceScalarFieldEnum | ReviewServiceScalarFieldEnum[]
  }

  /**
   * ReviewService findFirstOrThrow
   */
  export type ReviewServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewService
     */
    select?: ReviewServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewService
     */
    omit?: ReviewServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewServiceInclude<ExtArgs> | null
    /**
     * Filter, which ReviewService to fetch.
     */
    where?: ReviewServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewServices to fetch.
     */
    orderBy?: ReviewServiceOrderByWithRelationInput | ReviewServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewServices.
     */
    cursor?: ReviewServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewServices.
     */
    distinct?: ReviewServiceScalarFieldEnum | ReviewServiceScalarFieldEnum[]
  }

  /**
   * ReviewService findMany
   */
  export type ReviewServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewService
     */
    select?: ReviewServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewService
     */
    omit?: ReviewServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewServiceInclude<ExtArgs> | null
    /**
     * Filter, which ReviewServices to fetch.
     */
    where?: ReviewServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewServices to fetch.
     */
    orderBy?: ReviewServiceOrderByWithRelationInput | ReviewServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewServices.
     */
    cursor?: ReviewServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewServices.
     */
    skip?: number
    distinct?: ReviewServiceScalarFieldEnum | ReviewServiceScalarFieldEnum[]
  }

  /**
   * ReviewService create
   */
  export type ReviewServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewService
     */
    select?: ReviewServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewService
     */
    omit?: ReviewServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewService.
     */
    data: XOR<ReviewServiceCreateInput, ReviewServiceUncheckedCreateInput>
  }

  /**
   * ReviewService createMany
   */
  export type ReviewServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewServices.
     */
    data: ReviewServiceCreateManyInput | ReviewServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewService update
   */
  export type ReviewServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewService
     */
    select?: ReviewServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewService
     */
    omit?: ReviewServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewService.
     */
    data: XOR<ReviewServiceUpdateInput, ReviewServiceUncheckedUpdateInput>
    /**
     * Choose, which ReviewService to update.
     */
    where: ReviewServiceWhereUniqueInput
  }

  /**
   * ReviewService updateMany
   */
  export type ReviewServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewServices.
     */
    data: XOR<ReviewServiceUpdateManyMutationInput, ReviewServiceUncheckedUpdateManyInput>
    /**
     * Filter which ReviewServices to update
     */
    where?: ReviewServiceWhereInput
    /**
     * Limit how many ReviewServices to update.
     */
    limit?: number
  }

  /**
   * ReviewService upsert
   */
  export type ReviewServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewService
     */
    select?: ReviewServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewService
     */
    omit?: ReviewServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewService to update in case it exists.
     */
    where: ReviewServiceWhereUniqueInput
    /**
     * In case the ReviewService found by the `where` argument doesn't exist, create a new ReviewService with this data.
     */
    create: XOR<ReviewServiceCreateInput, ReviewServiceUncheckedCreateInput>
    /**
     * In case the ReviewService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewServiceUpdateInput, ReviewServiceUncheckedUpdateInput>
  }

  /**
   * ReviewService delete
   */
  export type ReviewServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewService
     */
    select?: ReviewServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewService
     */
    omit?: ReviewServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewServiceInclude<ExtArgs> | null
    /**
     * Filter which ReviewService to delete.
     */
    where: ReviewServiceWhereUniqueInput
  }

  /**
   * ReviewService deleteMany
   */
  export type ReviewServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewServices to delete
     */
    where?: ReviewServiceWhereInput
    /**
     * Limit how many ReviewServices to delete.
     */
    limit?: number
  }

  /**
   * ReviewService without action
   */
  export type ReviewServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewService
     */
    select?: ReviewServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewService
     */
    omit?: ReviewServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewServiceInclude<ExtArgs> | null
  }


  /**
   * Model UserHistory
   */

  export type AggregateUserHistory = {
    _count: UserHistoryCountAggregateOutputType | null
    _min: UserHistoryMinAggregateOutputType | null
    _max: UserHistoryMaxAggregateOutputType | null
  }

  export type UserHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    serviceId: string | null
    service: $Enums.ServiceType | null
    viewedAt: Date | null
  }

  export type UserHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    serviceId: string | null
    service: $Enums.ServiceType | null
    viewedAt: Date | null
  }

  export type UserHistoryCountAggregateOutputType = {
    id: number
    userId: number
    serviceId: number
    service: number
    viewedAt: number
    metadata: number
    _all: number
  }


  export type UserHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    service?: true
    viewedAt?: true
  }

  export type UserHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    service?: true
    viewedAt?: true
  }

  export type UserHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    service?: true
    viewedAt?: true
    metadata?: true
    _all?: true
  }

  export type UserHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHistory to aggregate.
     */
    where?: UserHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHistories to fetch.
     */
    orderBy?: UserHistoryOrderByWithRelationInput | UserHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserHistories
    **/
    _count?: true | UserHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserHistoryMaxAggregateInputType
  }

  export type GetUserHistoryAggregateType<T extends UserHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserHistory[P]>
      : GetScalarType<T[P], AggregateUserHistory[P]>
  }




  export type UserHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHistoryWhereInput
    orderBy?: UserHistoryOrderByWithAggregationInput | UserHistoryOrderByWithAggregationInput[]
    by: UserHistoryScalarFieldEnum[] | UserHistoryScalarFieldEnum
    having?: UserHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserHistoryCountAggregateInputType | true
    _min?: UserHistoryMinAggregateInputType
    _max?: UserHistoryMaxAggregateInputType
  }

  export type UserHistoryGroupByOutputType = {
    id: string
    userId: string
    serviceId: string
    service: $Enums.ServiceType
    viewedAt: Date
    metadata: JsonValue | null
    _count: UserHistoryCountAggregateOutputType | null
    _min: UserHistoryMinAggregateOutputType | null
    _max: UserHistoryMaxAggregateOutputType | null
  }

  type GetUserHistoryGroupByPayload<T extends UserHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserHistoryGroupByOutputType[P]>
        }
      >
    >


  export type UserHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    service?: boolean
    viewedAt?: boolean
    metadata?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHistory"]>



  export type UserHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    service?: boolean
    viewedAt?: boolean
    metadata?: boolean
  }

  export type UserHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "serviceId" | "service" | "viewedAt" | "metadata", ExtArgs["result"]["userHistory"]>
  export type UserHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      serviceId: string
      service: $Enums.ServiceType
      viewedAt: Date
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["userHistory"]>
    composites: {}
  }

  type UserHistoryGetPayload<S extends boolean | null | undefined | UserHistoryDefaultArgs> = $Result.GetResult<Prisma.$UserHistoryPayload, S>

  type UserHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserHistoryCountAggregateInputType | true
    }

  export interface UserHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserHistory'], meta: { name: 'UserHistory' } }
    /**
     * Find zero or one UserHistory that matches the filter.
     * @param {UserHistoryFindUniqueArgs} args - Arguments to find a UserHistory
     * @example
     * // Get one UserHistory
     * const userHistory = await prisma.userHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserHistoryFindUniqueArgs>(args: SelectSubset<T, UserHistoryFindUniqueArgs<ExtArgs>>): Prisma__UserHistoryClient<$Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserHistoryFindUniqueOrThrowArgs} args - Arguments to find a UserHistory
     * @example
     * // Get one UserHistory
     * const userHistory = await prisma.userHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserHistoryClient<$Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHistoryFindFirstArgs} args - Arguments to find a UserHistory
     * @example
     * // Get one UserHistory
     * const userHistory = await prisma.userHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserHistoryFindFirstArgs>(args?: SelectSubset<T, UserHistoryFindFirstArgs<ExtArgs>>): Prisma__UserHistoryClient<$Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHistoryFindFirstOrThrowArgs} args - Arguments to find a UserHistory
     * @example
     * // Get one UserHistory
     * const userHistory = await prisma.userHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserHistoryClient<$Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserHistories
     * const userHistories = await prisma.userHistory.findMany()
     * 
     * // Get first 10 UserHistories
     * const userHistories = await prisma.userHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userHistoryWithIdOnly = await prisma.userHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserHistoryFindManyArgs>(args?: SelectSubset<T, UserHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserHistory.
     * @param {UserHistoryCreateArgs} args - Arguments to create a UserHistory.
     * @example
     * // Create one UserHistory
     * const UserHistory = await prisma.userHistory.create({
     *   data: {
     *     // ... data to create a UserHistory
     *   }
     * })
     * 
     */
    create<T extends UserHistoryCreateArgs>(args: SelectSubset<T, UserHistoryCreateArgs<ExtArgs>>): Prisma__UserHistoryClient<$Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserHistories.
     * @param {UserHistoryCreateManyArgs} args - Arguments to create many UserHistories.
     * @example
     * // Create many UserHistories
     * const userHistory = await prisma.userHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserHistoryCreateManyArgs>(args?: SelectSubset<T, UserHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserHistory.
     * @param {UserHistoryDeleteArgs} args - Arguments to delete one UserHistory.
     * @example
     * // Delete one UserHistory
     * const UserHistory = await prisma.userHistory.delete({
     *   where: {
     *     // ... filter to delete one UserHistory
     *   }
     * })
     * 
     */
    delete<T extends UserHistoryDeleteArgs>(args: SelectSubset<T, UserHistoryDeleteArgs<ExtArgs>>): Prisma__UserHistoryClient<$Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserHistory.
     * @param {UserHistoryUpdateArgs} args - Arguments to update one UserHistory.
     * @example
     * // Update one UserHistory
     * const userHistory = await prisma.userHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserHistoryUpdateArgs>(args: SelectSubset<T, UserHistoryUpdateArgs<ExtArgs>>): Prisma__UserHistoryClient<$Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserHistories.
     * @param {UserHistoryDeleteManyArgs} args - Arguments to filter UserHistories to delete.
     * @example
     * // Delete a few UserHistories
     * const { count } = await prisma.userHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserHistoryDeleteManyArgs>(args?: SelectSubset<T, UserHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserHistories
     * const userHistory = await prisma.userHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserHistoryUpdateManyArgs>(args: SelectSubset<T, UserHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserHistory.
     * @param {UserHistoryUpsertArgs} args - Arguments to update or create a UserHistory.
     * @example
     * // Update or create a UserHistory
     * const userHistory = await prisma.userHistory.upsert({
     *   create: {
     *     // ... data to create a UserHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserHistory we want to update
     *   }
     * })
     */
    upsert<T extends UserHistoryUpsertArgs>(args: SelectSubset<T, UserHistoryUpsertArgs<ExtArgs>>): Prisma__UserHistoryClient<$Result.GetResult<Prisma.$UserHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHistoryCountArgs} args - Arguments to filter UserHistories to count.
     * @example
     * // Count the number of UserHistories
     * const count = await prisma.userHistory.count({
     *   where: {
     *     // ... the filter for the UserHistories we want to count
     *   }
     * })
    **/
    count<T extends UserHistoryCountArgs>(
      args?: Subset<T, UserHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserHistoryAggregateArgs>(args: Subset<T, UserHistoryAggregateArgs>): Prisma.PrismaPromise<GetUserHistoryAggregateType<T>>

    /**
     * Group by UserHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserHistoryGroupByArgs['orderBy'] }
        : { orderBy?: UserHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserHistory model
   */
  readonly fields: UserHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserHistory model
   */
  interface UserHistoryFieldRefs {
    readonly id: FieldRef<"UserHistory", 'String'>
    readonly userId: FieldRef<"UserHistory", 'String'>
    readonly serviceId: FieldRef<"UserHistory", 'String'>
    readonly service: FieldRef<"UserHistory", 'ServiceType'>
    readonly viewedAt: FieldRef<"UserHistory", 'DateTime'>
    readonly metadata: FieldRef<"UserHistory", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * UserHistory findUnique
   */
  export type UserHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHistory
     */
    select?: UserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHistory
     */
    omit?: UserHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserHistory to fetch.
     */
    where: UserHistoryWhereUniqueInput
  }

  /**
   * UserHistory findUniqueOrThrow
   */
  export type UserHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHistory
     */
    select?: UserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHistory
     */
    omit?: UserHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserHistory to fetch.
     */
    where: UserHistoryWhereUniqueInput
  }

  /**
   * UserHistory findFirst
   */
  export type UserHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHistory
     */
    select?: UserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHistory
     */
    omit?: UserHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserHistory to fetch.
     */
    where?: UserHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHistories to fetch.
     */
    orderBy?: UserHistoryOrderByWithRelationInput | UserHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHistories.
     */
    cursor?: UserHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHistories.
     */
    distinct?: UserHistoryScalarFieldEnum | UserHistoryScalarFieldEnum[]
  }

  /**
   * UserHistory findFirstOrThrow
   */
  export type UserHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHistory
     */
    select?: UserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHistory
     */
    omit?: UserHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserHistory to fetch.
     */
    where?: UserHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHistories to fetch.
     */
    orderBy?: UserHistoryOrderByWithRelationInput | UserHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHistories.
     */
    cursor?: UserHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHistories.
     */
    distinct?: UserHistoryScalarFieldEnum | UserHistoryScalarFieldEnum[]
  }

  /**
   * UserHistory findMany
   */
  export type UserHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHistory
     */
    select?: UserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHistory
     */
    omit?: UserHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserHistories to fetch.
     */
    where?: UserHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHistories to fetch.
     */
    orderBy?: UserHistoryOrderByWithRelationInput | UserHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserHistories.
     */
    cursor?: UserHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHistories.
     */
    skip?: number
    distinct?: UserHistoryScalarFieldEnum | UserHistoryScalarFieldEnum[]
  }

  /**
   * UserHistory create
   */
  export type UserHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHistory
     */
    select?: UserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHistory
     */
    omit?: UserHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserHistory.
     */
    data: XOR<UserHistoryCreateInput, UserHistoryUncheckedCreateInput>
  }

  /**
   * UserHistory createMany
   */
  export type UserHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserHistories.
     */
    data: UserHistoryCreateManyInput | UserHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserHistory update
   */
  export type UserHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHistory
     */
    select?: UserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHistory
     */
    omit?: UserHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserHistory.
     */
    data: XOR<UserHistoryUpdateInput, UserHistoryUncheckedUpdateInput>
    /**
     * Choose, which UserHistory to update.
     */
    where: UserHistoryWhereUniqueInput
  }

  /**
   * UserHistory updateMany
   */
  export type UserHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserHistories.
     */
    data: XOR<UserHistoryUpdateManyMutationInput, UserHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UserHistories to update
     */
    where?: UserHistoryWhereInput
    /**
     * Limit how many UserHistories to update.
     */
    limit?: number
  }

  /**
   * UserHistory upsert
   */
  export type UserHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHistory
     */
    select?: UserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHistory
     */
    omit?: UserHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserHistory to update in case it exists.
     */
    where: UserHistoryWhereUniqueInput
    /**
     * In case the UserHistory found by the `where` argument doesn't exist, create a new UserHistory with this data.
     */
    create: XOR<UserHistoryCreateInput, UserHistoryUncheckedCreateInput>
    /**
     * In case the UserHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserHistoryUpdateInput, UserHistoryUncheckedUpdateInput>
  }

  /**
   * UserHistory delete
   */
  export type UserHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHistory
     */
    select?: UserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHistory
     */
    omit?: UserHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHistoryInclude<ExtArgs> | null
    /**
     * Filter which UserHistory to delete.
     */
    where: UserHistoryWhereUniqueInput
  }

  /**
   * UserHistory deleteMany
   */
  export type UserHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHistories to delete
     */
    where?: UserHistoryWhereInput
    /**
     * Limit how many UserHistories to delete.
     */
    limit?: number
  }

  /**
   * UserHistory without action
   */
  export type UserHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHistory
     */
    select?: UserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHistory
     */
    omit?: UserHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ManagerHistory
   */

  export type AggregateManagerHistory = {
    _count: ManagerHistoryCountAggregateOutputType | null
    _min: ManagerHistoryMinAggregateOutputType | null
    _max: ManagerHistoryMaxAggregateOutputType | null
  }

  export type ManagerHistoryMinAggregateOutputType = {
    id: string | null
    managerId: string | null
    action: $Enums.ManagerAction | null
    targetId: string | null
    targetType: $Enums.TargetType | null
    description: string | null
    httpMethod: $Enums.HttpMethod | null
    httpUrl: string | null
    actedAt: Date | null
  }

  export type ManagerHistoryMaxAggregateOutputType = {
    id: string | null
    managerId: string | null
    action: $Enums.ManagerAction | null
    targetId: string | null
    targetType: $Enums.TargetType | null
    description: string | null
    httpMethod: $Enums.HttpMethod | null
    httpUrl: string | null
    actedAt: Date | null
  }

  export type ManagerHistoryCountAggregateOutputType = {
    id: number
    managerId: number
    action: number
    actionScope: number
    targetId: number
    targetType: number
    description: number
    httpMethod: number
    httpUrl: number
    httpQuery: number
    httpParams: number
    httpBody: number
    httpHeaders: number
    actedAt: number
    _all: number
  }


  export type ManagerHistoryMinAggregateInputType = {
    id?: true
    managerId?: true
    action?: true
    targetId?: true
    targetType?: true
    description?: true
    httpMethod?: true
    httpUrl?: true
    actedAt?: true
  }

  export type ManagerHistoryMaxAggregateInputType = {
    id?: true
    managerId?: true
    action?: true
    targetId?: true
    targetType?: true
    description?: true
    httpMethod?: true
    httpUrl?: true
    actedAt?: true
  }

  export type ManagerHistoryCountAggregateInputType = {
    id?: true
    managerId?: true
    action?: true
    actionScope?: true
    targetId?: true
    targetType?: true
    description?: true
    httpMethod?: true
    httpUrl?: true
    httpQuery?: true
    httpParams?: true
    httpBody?: true
    httpHeaders?: true
    actedAt?: true
    _all?: true
  }

  export type ManagerHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagerHistory to aggregate.
     */
    where?: ManagerHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerHistories to fetch.
     */
    orderBy?: ManagerHistoryOrderByWithRelationInput | ManagerHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagerHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManagerHistories
    **/
    _count?: true | ManagerHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagerHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagerHistoryMaxAggregateInputType
  }

  export type GetManagerHistoryAggregateType<T extends ManagerHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateManagerHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManagerHistory[P]>
      : GetScalarType<T[P], AggregateManagerHistory[P]>
  }




  export type ManagerHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerHistoryWhereInput
    orderBy?: ManagerHistoryOrderByWithAggregationInput | ManagerHistoryOrderByWithAggregationInput[]
    by: ManagerHistoryScalarFieldEnum[] | ManagerHistoryScalarFieldEnum
    having?: ManagerHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagerHistoryCountAggregateInputType | true
    _min?: ManagerHistoryMinAggregateInputType
    _max?: ManagerHistoryMaxAggregateInputType
  }

  export type ManagerHistoryGroupByOutputType = {
    id: string
    managerId: string
    action: $Enums.ManagerAction
    actionScope: JsonValue | null
    targetId: string | null
    targetType: $Enums.TargetType | null
    description: string | null
    httpMethod: $Enums.HttpMethod | null
    httpUrl: string | null
    httpQuery: JsonValue | null
    httpParams: JsonValue | null
    httpBody: JsonValue | null
    httpHeaders: JsonValue | null
    actedAt: Date
    _count: ManagerHistoryCountAggregateOutputType | null
    _min: ManagerHistoryMinAggregateOutputType | null
    _max: ManagerHistoryMaxAggregateOutputType | null
  }

  type GetManagerHistoryGroupByPayload<T extends ManagerHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagerHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagerHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagerHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ManagerHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ManagerHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    managerId?: boolean
    action?: boolean
    actionScope?: boolean
    targetId?: boolean
    targetType?: boolean
    description?: boolean
    httpMethod?: boolean
    httpUrl?: boolean
    httpQuery?: boolean
    httpParams?: boolean
    httpBody?: boolean
    httpHeaders?: boolean
    actedAt?: boolean
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managerHistory"]>



  export type ManagerHistorySelectScalar = {
    id?: boolean
    managerId?: boolean
    action?: boolean
    actionScope?: boolean
    targetId?: boolean
    targetType?: boolean
    description?: boolean
    httpMethod?: boolean
    httpUrl?: boolean
    httpQuery?: boolean
    httpParams?: boolean
    httpBody?: boolean
    httpHeaders?: boolean
    actedAt?: boolean
  }

  export type ManagerHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "managerId" | "action" | "actionScope" | "targetId" | "targetType" | "description" | "httpMethod" | "httpUrl" | "httpQuery" | "httpParams" | "httpBody" | "httpHeaders" | "actedAt", ExtArgs["result"]["managerHistory"]>
  export type ManagerHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ManagerHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManagerHistory"
    objects: {
      manager: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      managerId: string
      action: $Enums.ManagerAction
      actionScope: Prisma.JsonValue | null
      targetId: string | null
      targetType: $Enums.TargetType | null
      description: string | null
      httpMethod: $Enums.HttpMethod | null
      httpUrl: string | null
      httpQuery: Prisma.JsonValue | null
      httpParams: Prisma.JsonValue | null
      httpBody: Prisma.JsonValue | null
      httpHeaders: Prisma.JsonValue | null
      actedAt: Date
    }, ExtArgs["result"]["managerHistory"]>
    composites: {}
  }

  type ManagerHistoryGetPayload<S extends boolean | null | undefined | ManagerHistoryDefaultArgs> = $Result.GetResult<Prisma.$ManagerHistoryPayload, S>

  type ManagerHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagerHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagerHistoryCountAggregateInputType | true
    }

  export interface ManagerHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManagerHistory'], meta: { name: 'ManagerHistory' } }
    /**
     * Find zero or one ManagerHistory that matches the filter.
     * @param {ManagerHistoryFindUniqueArgs} args - Arguments to find a ManagerHistory
     * @example
     * // Get one ManagerHistory
     * const managerHistory = await prisma.managerHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagerHistoryFindUniqueArgs>(args: SelectSubset<T, ManagerHistoryFindUniqueArgs<ExtArgs>>): Prisma__ManagerHistoryClient<$Result.GetResult<Prisma.$ManagerHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ManagerHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagerHistoryFindUniqueOrThrowArgs} args - Arguments to find a ManagerHistory
     * @example
     * // Get one ManagerHistory
     * const managerHistory = await prisma.managerHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagerHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagerHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagerHistoryClient<$Result.GetResult<Prisma.$ManagerHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManagerHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerHistoryFindFirstArgs} args - Arguments to find a ManagerHistory
     * @example
     * // Get one ManagerHistory
     * const managerHistory = await prisma.managerHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagerHistoryFindFirstArgs>(args?: SelectSubset<T, ManagerHistoryFindFirstArgs<ExtArgs>>): Prisma__ManagerHistoryClient<$Result.GetResult<Prisma.$ManagerHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManagerHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerHistoryFindFirstOrThrowArgs} args - Arguments to find a ManagerHistory
     * @example
     * // Get one ManagerHistory
     * const managerHistory = await prisma.managerHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagerHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagerHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagerHistoryClient<$Result.GetResult<Prisma.$ManagerHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ManagerHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManagerHistories
     * const managerHistories = await prisma.managerHistory.findMany()
     * 
     * // Get first 10 ManagerHistories
     * const managerHistories = await prisma.managerHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managerHistoryWithIdOnly = await prisma.managerHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManagerHistoryFindManyArgs>(args?: SelectSubset<T, ManagerHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ManagerHistory.
     * @param {ManagerHistoryCreateArgs} args - Arguments to create a ManagerHistory.
     * @example
     * // Create one ManagerHistory
     * const ManagerHistory = await prisma.managerHistory.create({
     *   data: {
     *     // ... data to create a ManagerHistory
     *   }
     * })
     * 
     */
    create<T extends ManagerHistoryCreateArgs>(args: SelectSubset<T, ManagerHistoryCreateArgs<ExtArgs>>): Prisma__ManagerHistoryClient<$Result.GetResult<Prisma.$ManagerHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ManagerHistories.
     * @param {ManagerHistoryCreateManyArgs} args - Arguments to create many ManagerHistories.
     * @example
     * // Create many ManagerHistories
     * const managerHistory = await prisma.managerHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagerHistoryCreateManyArgs>(args?: SelectSubset<T, ManagerHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ManagerHistory.
     * @param {ManagerHistoryDeleteArgs} args - Arguments to delete one ManagerHistory.
     * @example
     * // Delete one ManagerHistory
     * const ManagerHistory = await prisma.managerHistory.delete({
     *   where: {
     *     // ... filter to delete one ManagerHistory
     *   }
     * })
     * 
     */
    delete<T extends ManagerHistoryDeleteArgs>(args: SelectSubset<T, ManagerHistoryDeleteArgs<ExtArgs>>): Prisma__ManagerHistoryClient<$Result.GetResult<Prisma.$ManagerHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ManagerHistory.
     * @param {ManagerHistoryUpdateArgs} args - Arguments to update one ManagerHistory.
     * @example
     * // Update one ManagerHistory
     * const managerHistory = await prisma.managerHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagerHistoryUpdateArgs>(args: SelectSubset<T, ManagerHistoryUpdateArgs<ExtArgs>>): Prisma__ManagerHistoryClient<$Result.GetResult<Prisma.$ManagerHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ManagerHistories.
     * @param {ManagerHistoryDeleteManyArgs} args - Arguments to filter ManagerHistories to delete.
     * @example
     * // Delete a few ManagerHistories
     * const { count } = await prisma.managerHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagerHistoryDeleteManyArgs>(args?: SelectSubset<T, ManagerHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagerHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManagerHistories
     * const managerHistory = await prisma.managerHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagerHistoryUpdateManyArgs>(args: SelectSubset<T, ManagerHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ManagerHistory.
     * @param {ManagerHistoryUpsertArgs} args - Arguments to update or create a ManagerHistory.
     * @example
     * // Update or create a ManagerHistory
     * const managerHistory = await prisma.managerHistory.upsert({
     *   create: {
     *     // ... data to create a ManagerHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManagerHistory we want to update
     *   }
     * })
     */
    upsert<T extends ManagerHistoryUpsertArgs>(args: SelectSubset<T, ManagerHistoryUpsertArgs<ExtArgs>>): Prisma__ManagerHistoryClient<$Result.GetResult<Prisma.$ManagerHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ManagerHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerHistoryCountArgs} args - Arguments to filter ManagerHistories to count.
     * @example
     * // Count the number of ManagerHistories
     * const count = await prisma.managerHistory.count({
     *   where: {
     *     // ... the filter for the ManagerHistories we want to count
     *   }
     * })
    **/
    count<T extends ManagerHistoryCountArgs>(
      args?: Subset<T, ManagerHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagerHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManagerHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManagerHistoryAggregateArgs>(args: Subset<T, ManagerHistoryAggregateArgs>): Prisma.PrismaPromise<GetManagerHistoryAggregateType<T>>

    /**
     * Group by ManagerHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManagerHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagerHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ManagerHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManagerHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagerHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManagerHistory model
   */
  readonly fields: ManagerHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManagerHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagerHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ManagerHistory model
   */
  interface ManagerHistoryFieldRefs {
    readonly id: FieldRef<"ManagerHistory", 'String'>
    readonly managerId: FieldRef<"ManagerHistory", 'String'>
    readonly action: FieldRef<"ManagerHistory", 'ManagerAction'>
    readonly actionScope: FieldRef<"ManagerHistory", 'Json'>
    readonly targetId: FieldRef<"ManagerHistory", 'String'>
    readonly targetType: FieldRef<"ManagerHistory", 'TargetType'>
    readonly description: FieldRef<"ManagerHistory", 'String'>
    readonly httpMethod: FieldRef<"ManagerHistory", 'HttpMethod'>
    readonly httpUrl: FieldRef<"ManagerHistory", 'String'>
    readonly httpQuery: FieldRef<"ManagerHistory", 'Json'>
    readonly httpParams: FieldRef<"ManagerHistory", 'Json'>
    readonly httpBody: FieldRef<"ManagerHistory", 'Json'>
    readonly httpHeaders: FieldRef<"ManagerHistory", 'Json'>
    readonly actedAt: FieldRef<"ManagerHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ManagerHistory findUnique
   */
  export type ManagerHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerHistory
     */
    select?: ManagerHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerHistory
     */
    omit?: ManagerHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ManagerHistory to fetch.
     */
    where: ManagerHistoryWhereUniqueInput
  }

  /**
   * ManagerHistory findUniqueOrThrow
   */
  export type ManagerHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerHistory
     */
    select?: ManagerHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerHistory
     */
    omit?: ManagerHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ManagerHistory to fetch.
     */
    where: ManagerHistoryWhereUniqueInput
  }

  /**
   * ManagerHistory findFirst
   */
  export type ManagerHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerHistory
     */
    select?: ManagerHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerHistory
     */
    omit?: ManagerHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ManagerHistory to fetch.
     */
    where?: ManagerHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerHistories to fetch.
     */
    orderBy?: ManagerHistoryOrderByWithRelationInput | ManagerHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagerHistories.
     */
    cursor?: ManagerHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagerHistories.
     */
    distinct?: ManagerHistoryScalarFieldEnum | ManagerHistoryScalarFieldEnum[]
  }

  /**
   * ManagerHistory findFirstOrThrow
   */
  export type ManagerHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerHistory
     */
    select?: ManagerHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerHistory
     */
    omit?: ManagerHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ManagerHistory to fetch.
     */
    where?: ManagerHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerHistories to fetch.
     */
    orderBy?: ManagerHistoryOrderByWithRelationInput | ManagerHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagerHistories.
     */
    cursor?: ManagerHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagerHistories.
     */
    distinct?: ManagerHistoryScalarFieldEnum | ManagerHistoryScalarFieldEnum[]
  }

  /**
   * ManagerHistory findMany
   */
  export type ManagerHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerHistory
     */
    select?: ManagerHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerHistory
     */
    omit?: ManagerHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ManagerHistories to fetch.
     */
    where?: ManagerHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerHistories to fetch.
     */
    orderBy?: ManagerHistoryOrderByWithRelationInput | ManagerHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManagerHistories.
     */
    cursor?: ManagerHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerHistories.
     */
    skip?: number
    distinct?: ManagerHistoryScalarFieldEnum | ManagerHistoryScalarFieldEnum[]
  }

  /**
   * ManagerHistory create
   */
  export type ManagerHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerHistory
     */
    select?: ManagerHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerHistory
     */
    omit?: ManagerHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ManagerHistory.
     */
    data: XOR<ManagerHistoryCreateInput, ManagerHistoryUncheckedCreateInput>
  }

  /**
   * ManagerHistory createMany
   */
  export type ManagerHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManagerHistories.
     */
    data: ManagerHistoryCreateManyInput | ManagerHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManagerHistory update
   */
  export type ManagerHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerHistory
     */
    select?: ManagerHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerHistory
     */
    omit?: ManagerHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ManagerHistory.
     */
    data: XOR<ManagerHistoryUpdateInput, ManagerHistoryUncheckedUpdateInput>
    /**
     * Choose, which ManagerHistory to update.
     */
    where: ManagerHistoryWhereUniqueInput
  }

  /**
   * ManagerHistory updateMany
   */
  export type ManagerHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManagerHistories.
     */
    data: XOR<ManagerHistoryUpdateManyMutationInput, ManagerHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ManagerHistories to update
     */
    where?: ManagerHistoryWhereInput
    /**
     * Limit how many ManagerHistories to update.
     */
    limit?: number
  }

  /**
   * ManagerHistory upsert
   */
  export type ManagerHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerHistory
     */
    select?: ManagerHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerHistory
     */
    omit?: ManagerHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ManagerHistory to update in case it exists.
     */
    where: ManagerHistoryWhereUniqueInput
    /**
     * In case the ManagerHistory found by the `where` argument doesn't exist, create a new ManagerHistory with this data.
     */
    create: XOR<ManagerHistoryCreateInput, ManagerHistoryUncheckedCreateInput>
    /**
     * In case the ManagerHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagerHistoryUpdateInput, ManagerHistoryUncheckedUpdateInput>
  }

  /**
   * ManagerHistory delete
   */
  export type ManagerHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerHistory
     */
    select?: ManagerHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerHistory
     */
    omit?: ManagerHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerHistoryInclude<ExtArgs> | null
    /**
     * Filter which ManagerHistory to delete.
     */
    where: ManagerHistoryWhereUniqueInput
  }

  /**
   * ManagerHistory deleteMany
   */
  export type ManagerHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagerHistories to delete
     */
    where?: ManagerHistoryWhereInput
    /**
     * Limit how many ManagerHistories to delete.
     */
    limit?: number
  }

  /**
   * ManagerHistory without action
   */
  export type ManagerHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerHistory
     */
    select?: ManagerHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerHistory
     */
    omit?: ManagerHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerHistoryInclude<ExtArgs> | null
  }


  /**
   * Model AdminHistory
   */

  export type AggregateAdminHistory = {
    _count: AdminHistoryCountAggregateOutputType | null
    _min: AdminHistoryMinAggregateOutputType | null
    _max: AdminHistoryMaxAggregateOutputType | null
  }

  export type AdminHistoryMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: $Enums.AdminAction | null
    targetId: string | null
    targetType: $Enums.TargetType | null
    description: string | null
    httpMethod: $Enums.HttpMethod | null
    httpUrl: string | null
    actedAt: Date | null
  }

  export type AdminHistoryMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: $Enums.AdminAction | null
    targetId: string | null
    targetType: $Enums.TargetType | null
    description: string | null
    httpMethod: $Enums.HttpMethod | null
    httpUrl: string | null
    actedAt: Date | null
  }

  export type AdminHistoryCountAggregateOutputType = {
    id: number
    adminId: number
    action: number
    targetId: number
    targetType: number
    description: number
    httpMethod: number
    httpUrl: number
    httpQuery: number
    httpParams: number
    httpBody: number
    httpHeaders: number
    actedAt: number
    _all: number
  }


  export type AdminHistoryMinAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    targetId?: true
    targetType?: true
    description?: true
    httpMethod?: true
    httpUrl?: true
    actedAt?: true
  }

  export type AdminHistoryMaxAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    targetId?: true
    targetType?: true
    description?: true
    httpMethod?: true
    httpUrl?: true
    actedAt?: true
  }

  export type AdminHistoryCountAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    targetId?: true
    targetType?: true
    description?: true
    httpMethod?: true
    httpUrl?: true
    httpQuery?: true
    httpParams?: true
    httpBody?: true
    httpHeaders?: true
    actedAt?: true
    _all?: true
  }

  export type AdminHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminHistory to aggregate.
     */
    where?: AdminHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminHistories to fetch.
     */
    orderBy?: AdminHistoryOrderByWithRelationInput | AdminHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminHistories
    **/
    _count?: true | AdminHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminHistoryMaxAggregateInputType
  }

  export type GetAdminHistoryAggregateType<T extends AdminHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminHistory[P]>
      : GetScalarType<T[P], AggregateAdminHistory[P]>
  }




  export type AdminHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminHistoryWhereInput
    orderBy?: AdminHistoryOrderByWithAggregationInput | AdminHistoryOrderByWithAggregationInput[]
    by: AdminHistoryScalarFieldEnum[] | AdminHistoryScalarFieldEnum
    having?: AdminHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminHistoryCountAggregateInputType | true
    _min?: AdminHistoryMinAggregateInputType
    _max?: AdminHistoryMaxAggregateInputType
  }

  export type AdminHistoryGroupByOutputType = {
    id: string
    adminId: string
    action: $Enums.AdminAction
    targetId: string | null
    targetType: $Enums.TargetType | null
    description: string | null
    httpMethod: $Enums.HttpMethod | null
    httpUrl: string | null
    httpQuery: JsonValue | null
    httpParams: JsonValue | null
    httpBody: JsonValue | null
    httpHeaders: JsonValue | null
    actedAt: Date
    _count: AdminHistoryCountAggregateOutputType | null
    _min: AdminHistoryMinAggregateOutputType | null
    _max: AdminHistoryMaxAggregateOutputType | null
  }

  type GetAdminHistoryGroupByPayload<T extends AdminHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], AdminHistoryGroupByOutputType[P]>
        }
      >
    >


  export type AdminHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    targetId?: boolean
    targetType?: boolean
    description?: boolean
    httpMethod?: boolean
    httpUrl?: boolean
    httpQuery?: boolean
    httpParams?: boolean
    httpBody?: boolean
    httpHeaders?: boolean
    actedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminHistory"]>



  export type AdminHistorySelectScalar = {
    id?: boolean
    adminId?: boolean
    action?: boolean
    targetId?: boolean
    targetType?: boolean
    description?: boolean
    httpMethod?: boolean
    httpUrl?: boolean
    httpQuery?: boolean
    httpParams?: boolean
    httpBody?: boolean
    httpHeaders?: boolean
    actedAt?: boolean
  }

  export type AdminHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "action" | "targetId" | "targetType" | "description" | "httpMethod" | "httpUrl" | "httpQuery" | "httpParams" | "httpBody" | "httpHeaders" | "actedAt", ExtArgs["result"]["adminHistory"]>
  export type AdminHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminHistory"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      action: $Enums.AdminAction
      targetId: string | null
      targetType: $Enums.TargetType | null
      description: string | null
      httpMethod: $Enums.HttpMethod | null
      httpUrl: string | null
      httpQuery: Prisma.JsonValue | null
      httpParams: Prisma.JsonValue | null
      httpBody: Prisma.JsonValue | null
      httpHeaders: Prisma.JsonValue | null
      actedAt: Date
    }, ExtArgs["result"]["adminHistory"]>
    composites: {}
  }

  type AdminHistoryGetPayload<S extends boolean | null | undefined | AdminHistoryDefaultArgs> = $Result.GetResult<Prisma.$AdminHistoryPayload, S>

  type AdminHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminHistoryCountAggregateInputType | true
    }

  export interface AdminHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminHistory'], meta: { name: 'AdminHistory' } }
    /**
     * Find zero or one AdminHistory that matches the filter.
     * @param {AdminHistoryFindUniqueArgs} args - Arguments to find a AdminHistory
     * @example
     * // Get one AdminHistory
     * const adminHistory = await prisma.adminHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminHistoryFindUniqueArgs>(args: SelectSubset<T, AdminHistoryFindUniqueArgs<ExtArgs>>): Prisma__AdminHistoryClient<$Result.GetResult<Prisma.$AdminHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminHistoryFindUniqueOrThrowArgs} args - Arguments to find a AdminHistory
     * @example
     * // Get one AdminHistory
     * const adminHistory = await prisma.adminHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminHistoryClient<$Result.GetResult<Prisma.$AdminHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminHistoryFindFirstArgs} args - Arguments to find a AdminHistory
     * @example
     * // Get one AdminHistory
     * const adminHistory = await prisma.adminHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminHistoryFindFirstArgs>(args?: SelectSubset<T, AdminHistoryFindFirstArgs<ExtArgs>>): Prisma__AdminHistoryClient<$Result.GetResult<Prisma.$AdminHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminHistoryFindFirstOrThrowArgs} args - Arguments to find a AdminHistory
     * @example
     * // Get one AdminHistory
     * const adminHistory = await prisma.adminHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminHistoryClient<$Result.GetResult<Prisma.$AdminHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminHistories
     * const adminHistories = await prisma.adminHistory.findMany()
     * 
     * // Get first 10 AdminHistories
     * const adminHistories = await prisma.adminHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminHistoryWithIdOnly = await prisma.adminHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminHistoryFindManyArgs>(args?: SelectSubset<T, AdminHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminHistory.
     * @param {AdminHistoryCreateArgs} args - Arguments to create a AdminHistory.
     * @example
     * // Create one AdminHistory
     * const AdminHistory = await prisma.adminHistory.create({
     *   data: {
     *     // ... data to create a AdminHistory
     *   }
     * })
     * 
     */
    create<T extends AdminHistoryCreateArgs>(args: SelectSubset<T, AdminHistoryCreateArgs<ExtArgs>>): Prisma__AdminHistoryClient<$Result.GetResult<Prisma.$AdminHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminHistories.
     * @param {AdminHistoryCreateManyArgs} args - Arguments to create many AdminHistories.
     * @example
     * // Create many AdminHistories
     * const adminHistory = await prisma.adminHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminHistoryCreateManyArgs>(args?: SelectSubset<T, AdminHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminHistory.
     * @param {AdminHistoryDeleteArgs} args - Arguments to delete one AdminHistory.
     * @example
     * // Delete one AdminHistory
     * const AdminHistory = await prisma.adminHistory.delete({
     *   where: {
     *     // ... filter to delete one AdminHistory
     *   }
     * })
     * 
     */
    delete<T extends AdminHistoryDeleteArgs>(args: SelectSubset<T, AdminHistoryDeleteArgs<ExtArgs>>): Prisma__AdminHistoryClient<$Result.GetResult<Prisma.$AdminHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminHistory.
     * @param {AdminHistoryUpdateArgs} args - Arguments to update one AdminHistory.
     * @example
     * // Update one AdminHistory
     * const adminHistory = await prisma.adminHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminHistoryUpdateArgs>(args: SelectSubset<T, AdminHistoryUpdateArgs<ExtArgs>>): Prisma__AdminHistoryClient<$Result.GetResult<Prisma.$AdminHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminHistories.
     * @param {AdminHistoryDeleteManyArgs} args - Arguments to filter AdminHistories to delete.
     * @example
     * // Delete a few AdminHistories
     * const { count } = await prisma.adminHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminHistoryDeleteManyArgs>(args?: SelectSubset<T, AdminHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminHistories
     * const adminHistory = await prisma.adminHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminHistoryUpdateManyArgs>(args: SelectSubset<T, AdminHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminHistory.
     * @param {AdminHistoryUpsertArgs} args - Arguments to update or create a AdminHistory.
     * @example
     * // Update or create a AdminHistory
     * const adminHistory = await prisma.adminHistory.upsert({
     *   create: {
     *     // ... data to create a AdminHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminHistory we want to update
     *   }
     * })
     */
    upsert<T extends AdminHistoryUpsertArgs>(args: SelectSubset<T, AdminHistoryUpsertArgs<ExtArgs>>): Prisma__AdminHistoryClient<$Result.GetResult<Prisma.$AdminHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminHistoryCountArgs} args - Arguments to filter AdminHistories to count.
     * @example
     * // Count the number of AdminHistories
     * const count = await prisma.adminHistory.count({
     *   where: {
     *     // ... the filter for the AdminHistories we want to count
     *   }
     * })
    **/
    count<T extends AdminHistoryCountArgs>(
      args?: Subset<T, AdminHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminHistoryAggregateArgs>(args: Subset<T, AdminHistoryAggregateArgs>): Prisma.PrismaPromise<GetAdminHistoryAggregateType<T>>

    /**
     * Group by AdminHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminHistoryGroupByArgs['orderBy'] }
        : { orderBy?: AdminHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminHistory model
   */
  readonly fields: AdminHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminHistory model
   */
  interface AdminHistoryFieldRefs {
    readonly id: FieldRef<"AdminHistory", 'String'>
    readonly adminId: FieldRef<"AdminHistory", 'String'>
    readonly action: FieldRef<"AdminHistory", 'AdminAction'>
    readonly targetId: FieldRef<"AdminHistory", 'String'>
    readonly targetType: FieldRef<"AdminHistory", 'TargetType'>
    readonly description: FieldRef<"AdminHistory", 'String'>
    readonly httpMethod: FieldRef<"AdminHistory", 'HttpMethod'>
    readonly httpUrl: FieldRef<"AdminHistory", 'String'>
    readonly httpQuery: FieldRef<"AdminHistory", 'Json'>
    readonly httpParams: FieldRef<"AdminHistory", 'Json'>
    readonly httpBody: FieldRef<"AdminHistory", 'Json'>
    readonly httpHeaders: FieldRef<"AdminHistory", 'Json'>
    readonly actedAt: FieldRef<"AdminHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminHistory findUnique
   */
  export type AdminHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminHistory
     */
    select?: AdminHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminHistory
     */
    omit?: AdminHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AdminHistory to fetch.
     */
    where: AdminHistoryWhereUniqueInput
  }

  /**
   * AdminHistory findUniqueOrThrow
   */
  export type AdminHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminHistory
     */
    select?: AdminHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminHistory
     */
    omit?: AdminHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AdminHistory to fetch.
     */
    where: AdminHistoryWhereUniqueInput
  }

  /**
   * AdminHistory findFirst
   */
  export type AdminHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminHistory
     */
    select?: AdminHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminHistory
     */
    omit?: AdminHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AdminHistory to fetch.
     */
    where?: AdminHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminHistories to fetch.
     */
    orderBy?: AdminHistoryOrderByWithRelationInput | AdminHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminHistories.
     */
    cursor?: AdminHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminHistories.
     */
    distinct?: AdminHistoryScalarFieldEnum | AdminHistoryScalarFieldEnum[]
  }

  /**
   * AdminHistory findFirstOrThrow
   */
  export type AdminHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminHistory
     */
    select?: AdminHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminHistory
     */
    omit?: AdminHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AdminHistory to fetch.
     */
    where?: AdminHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminHistories to fetch.
     */
    orderBy?: AdminHistoryOrderByWithRelationInput | AdminHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminHistories.
     */
    cursor?: AdminHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminHistories.
     */
    distinct?: AdminHistoryScalarFieldEnum | AdminHistoryScalarFieldEnum[]
  }

  /**
   * AdminHistory findMany
   */
  export type AdminHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminHistory
     */
    select?: AdminHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminHistory
     */
    omit?: AdminHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AdminHistories to fetch.
     */
    where?: AdminHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminHistories to fetch.
     */
    orderBy?: AdminHistoryOrderByWithRelationInput | AdminHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminHistories.
     */
    cursor?: AdminHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminHistories.
     */
    skip?: number
    distinct?: AdminHistoryScalarFieldEnum | AdminHistoryScalarFieldEnum[]
  }

  /**
   * AdminHistory create
   */
  export type AdminHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminHistory
     */
    select?: AdminHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminHistory
     */
    omit?: AdminHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminHistory.
     */
    data: XOR<AdminHistoryCreateInput, AdminHistoryUncheckedCreateInput>
  }

  /**
   * AdminHistory createMany
   */
  export type AdminHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminHistories.
     */
    data: AdminHistoryCreateManyInput | AdminHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminHistory update
   */
  export type AdminHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminHistory
     */
    select?: AdminHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminHistory
     */
    omit?: AdminHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminHistory.
     */
    data: XOR<AdminHistoryUpdateInput, AdminHistoryUncheckedUpdateInput>
    /**
     * Choose, which AdminHistory to update.
     */
    where: AdminHistoryWhereUniqueInput
  }

  /**
   * AdminHistory updateMany
   */
  export type AdminHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminHistories.
     */
    data: XOR<AdminHistoryUpdateManyMutationInput, AdminHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AdminHistories to update
     */
    where?: AdminHistoryWhereInput
    /**
     * Limit how many AdminHistories to update.
     */
    limit?: number
  }

  /**
   * AdminHistory upsert
   */
  export type AdminHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminHistory
     */
    select?: AdminHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminHistory
     */
    omit?: AdminHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminHistory to update in case it exists.
     */
    where: AdminHistoryWhereUniqueInput
    /**
     * In case the AdminHistory found by the `where` argument doesn't exist, create a new AdminHistory with this data.
     */
    create: XOR<AdminHistoryCreateInput, AdminHistoryUncheckedCreateInput>
    /**
     * In case the AdminHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminHistoryUpdateInput, AdminHistoryUncheckedUpdateInput>
  }

  /**
   * AdminHistory delete
   */
  export type AdminHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminHistory
     */
    select?: AdminHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminHistory
     */
    omit?: AdminHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminHistoryInclude<ExtArgs> | null
    /**
     * Filter which AdminHistory to delete.
     */
    where: AdminHistoryWhereUniqueInput
  }

  /**
   * AdminHistory deleteMany
   */
  export type AdminHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminHistories to delete
     */
    where?: AdminHistoryWhereInput
    /**
     * Limit how many AdminHistories to delete.
     */
    limit?: number
  }

  /**
   * AdminHistory without action
   */
  export type AdminHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminHistory
     */
    select?: AdminHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminHistory
     */
    omit?: AdminHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber',
    avatar: 'avatar',
    language: 'language',
    theme: 'theme',
    isBanned: 'isBanned',
    isDeleted: 'isDeleted',
    isVerified: 'isVerified',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    birthday: 'birthday',
    gender: 'gender',
    location: 'location'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl',
    isPublic: 'isPublic',
    isDeleted: 'isDeleted',
    isDisabled: 'isDisabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PartnerInfoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organization: 'organization',
    licenseNumber: 'licenseNumber',
    status: 'status',
    verifiedById: 'verifiedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartnerInfoScalarFieldEnum = (typeof PartnerInfoScalarFieldEnum)[keyof typeof PartnerInfoScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    partnerId: 'partnerId',
    name: 'name',
    position: 'position',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const ReviewServiceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    serviceId: 'serviceId',
    service: 'service',
    reviewStars: 'reviewStars',
    comment: 'comment',
    reviewedAt: 'reviewedAt',
    metadata: 'metadata'
  };

  export type ReviewServiceScalarFieldEnum = (typeof ReviewServiceScalarFieldEnum)[keyof typeof ReviewServiceScalarFieldEnum]


  export const UserHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    serviceId: 'serviceId',
    service: 'service',
    viewedAt: 'viewedAt',
    metadata: 'metadata'
  };

  export type UserHistoryScalarFieldEnum = (typeof UserHistoryScalarFieldEnum)[keyof typeof UserHistoryScalarFieldEnum]


  export const ManagerHistoryScalarFieldEnum: {
    id: 'id',
    managerId: 'managerId',
    action: 'action',
    actionScope: 'actionScope',
    targetId: 'targetId',
    targetType: 'targetType',
    description: 'description',
    httpMethod: 'httpMethod',
    httpUrl: 'httpUrl',
    httpQuery: 'httpQuery',
    httpParams: 'httpParams',
    httpBody: 'httpBody',
    httpHeaders: 'httpHeaders',
    actedAt: 'actedAt'
  };

  export type ManagerHistoryScalarFieldEnum = (typeof ManagerHistoryScalarFieldEnum)[keyof typeof ManagerHistoryScalarFieldEnum]


  export const AdminHistoryScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    action: 'action',
    targetId: 'targetId',
    targetType: 'targetType',
    description: 'description',
    httpMethod: 'httpMethod',
    httpUrl: 'httpUrl',
    httpQuery: 'httpQuery',
    httpParams: 'httpParams',
    httpBody: 'httpBody',
    httpHeaders: 'httpHeaders',
    actedAt: 'actedAt'
  };

  export type AdminHistoryScalarFieldEnum = (typeof AdminHistoryScalarFieldEnum)[keyof typeof AdminHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber',
    avatar: 'avatar',
    language: 'language',
    theme: 'theme'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ProfileOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    gender: 'gender',
    location: 'location'
  };

  export type ProfileOrderByRelevanceFieldEnum = (typeof ProfileOrderByRelevanceFieldEnum)[keyof typeof ProfileOrderByRelevanceFieldEnum]


  export const PostOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  export const PartnerInfoOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    organization: 'organization',
    licenseNumber: 'licenseNumber',
    verifiedById: 'verifiedById'
  };

  export type PartnerInfoOrderByRelevanceFieldEnum = (typeof PartnerInfoOrderByRelevanceFieldEnum)[keyof typeof PartnerInfoOrderByRelevanceFieldEnum]


  export const StaffOrderByRelevanceFieldEnum: {
    id: 'id',
    partnerId: 'partnerId',
    name: 'name',
    position: 'position',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type StaffOrderByRelevanceFieldEnum = (typeof StaffOrderByRelevanceFieldEnum)[keyof typeof StaffOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ReviewServiceOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    serviceId: 'serviceId',
    comment: 'comment'
  };

  export type ReviewServiceOrderByRelevanceFieldEnum = (typeof ReviewServiceOrderByRelevanceFieldEnum)[keyof typeof ReviewServiceOrderByRelevanceFieldEnum]


  export const UserHistoryOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    serviceId: 'serviceId'
  };

  export type UserHistoryOrderByRelevanceFieldEnum = (typeof UserHistoryOrderByRelevanceFieldEnum)[keyof typeof UserHistoryOrderByRelevanceFieldEnum]


  export const ManagerHistoryOrderByRelevanceFieldEnum: {
    id: 'id',
    managerId: 'managerId',
    targetId: 'targetId',
    description: 'description',
    httpUrl: 'httpUrl'
  };

  export type ManagerHistoryOrderByRelevanceFieldEnum = (typeof ManagerHistoryOrderByRelevanceFieldEnum)[keyof typeof ManagerHistoryOrderByRelevanceFieldEnum]


  export const AdminHistoryOrderByRelevanceFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    targetId: 'targetId',
    description: 'description',
    httpUrl: 'httpUrl'
  };

  export type AdminHistoryOrderByRelevanceFieldEnum = (typeof AdminHistoryOrderByRelevanceFieldEnum)[keyof typeof AdminHistoryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'PartnerStatus'
   */
  export type EnumPartnerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartnerStatus'>
    


  /**
   * Reference to a field of type 'ServiceType'
   */
  export type EnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ManagerAction'
   */
  export type EnumManagerActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ManagerAction'>
    


  /**
   * Reference to a field of type 'TargetType'
   */
  export type EnumTargetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TargetType'>
    


  /**
   * Reference to a field of type 'HttpMethod'
   */
  export type EnumHttpMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HttpMethod'>
    


  /**
   * Reference to a field of type 'AdminAction'
   */
  export type EnumAdminActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminAction'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    language?: StringNullableFilter<"User"> | string | null
    theme?: StringNullableFilter<"User"> | string | null
    isBanned?: BoolFilter<"User"> | boolean
    isDeleted?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    posts?: PostListRelationFilter
    partnerInfo?: XOR<PartnerInfoNullableScalarRelationFilter, PartnerInfoWhereInput> | null
    userHistory?: UserHistoryListRelationFilter
    managerLogs?: ManagerHistoryListRelationFilter
    adminLogs?: AdminHistoryListRelationFilter
    verifiedPartners?: PartnerInfoListRelationFilter
    reviewServices?: ReviewServiceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    isBanned?: SortOrder
    isDeleted?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    partnerInfo?: PartnerInfoOrderByWithRelationInput
    userHistory?: UserHistoryOrderByRelationAggregateInput
    managerLogs?: ManagerHistoryOrderByRelationAggregateInput
    adminLogs?: AdminHistoryOrderByRelationAggregateInput
    verifiedPartners?: PartnerInfoOrderByRelationAggregateInput
    reviewServices?: ReviewServiceOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    language?: StringNullableFilter<"User"> | string | null
    theme?: StringNullableFilter<"User"> | string | null
    isBanned?: BoolFilter<"User"> | boolean
    isDeleted?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    posts?: PostListRelationFilter
    partnerInfo?: XOR<PartnerInfoNullableScalarRelationFilter, PartnerInfoWhereInput> | null
    userHistory?: UserHistoryListRelationFilter
    managerLogs?: ManagerHistoryListRelationFilter
    adminLogs?: AdminHistoryListRelationFilter
    verifiedPartners?: PartnerInfoListRelationFilter
    reviewServices?: ReviewServiceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    isBanned?: SortOrder
    isDeleted?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    language?: StringNullableWithAggregatesFilter<"User"> | string | null
    theme?: StringNullableWithAggregatesFilter<"User"> | string | null
    isBanned?: BoolWithAggregatesFilter<"User"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    userId?: StringFilter<"Profile"> | string
    bio?: StringNullableFilter<"Profile"> | string | null
    birthday?: DateTimeNullableFilter<"Profile"> | Date | string | null
    gender?: StringNullableFilter<"Profile"> | string | null
    location?: StringNullableFilter<"Profile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: ProfileOrderByRelevanceInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    bio?: StringNullableFilter<"Profile"> | string | null
    birthday?: DateTimeNullableFilter<"Profile"> | Date | string | null
    gender?: StringNullableFilter<"Profile"> | string | null
    location?: StringNullableFilter<"Profile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    userId?: StringWithAggregatesFilter<"Profile"> | string
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    birthday?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    location?: StringNullableWithAggregatesFilter<"Profile"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    isPublic?: BoolFilter<"Post"> | boolean
    isDeleted?: BoolFilter<"Post"> | boolean
    isDisabled?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    isDeleted?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    userId?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    isPublic?: BoolFilter<"Post"> | boolean
    isDeleted?: BoolFilter<"Post"> | boolean
    isDisabled?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    isDeleted?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    userId?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    isPublic?: BoolWithAggregatesFilter<"Post"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Post"> | boolean
    isDisabled?: BoolWithAggregatesFilter<"Post"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type PartnerInfoWhereInput = {
    AND?: PartnerInfoWhereInput | PartnerInfoWhereInput[]
    OR?: PartnerInfoWhereInput[]
    NOT?: PartnerInfoWhereInput | PartnerInfoWhereInput[]
    id?: StringFilter<"PartnerInfo"> | string
    userId?: StringFilter<"PartnerInfo"> | string
    organization?: StringNullableFilter<"PartnerInfo"> | string | null
    licenseNumber?: StringNullableFilter<"PartnerInfo"> | string | null
    status?: EnumPartnerStatusFilter<"PartnerInfo"> | $Enums.PartnerStatus
    verifiedById?: StringNullableFilter<"PartnerInfo"> | string | null
    createdAt?: DateTimeFilter<"PartnerInfo"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerInfo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    verifiedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    staffMembers?: StaffListRelationFilter
  }

  export type PartnerInfoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organization?: SortOrderInput | SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    verifiedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    verifiedBy?: UserOrderByWithRelationInput
    staffMembers?: StaffOrderByRelationAggregateInput
    _relevance?: PartnerInfoOrderByRelevanceInput
  }

  export type PartnerInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PartnerInfoWhereInput | PartnerInfoWhereInput[]
    OR?: PartnerInfoWhereInput[]
    NOT?: PartnerInfoWhereInput | PartnerInfoWhereInput[]
    organization?: StringNullableFilter<"PartnerInfo"> | string | null
    licenseNumber?: StringNullableFilter<"PartnerInfo"> | string | null
    status?: EnumPartnerStatusFilter<"PartnerInfo"> | $Enums.PartnerStatus
    verifiedById?: StringNullableFilter<"PartnerInfo"> | string | null
    createdAt?: DateTimeFilter<"PartnerInfo"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerInfo"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    verifiedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    staffMembers?: StaffListRelationFilter
  }, "id" | "userId">

  export type PartnerInfoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organization?: SortOrderInput | SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    verifiedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartnerInfoCountOrderByAggregateInput
    _max?: PartnerInfoMaxOrderByAggregateInput
    _min?: PartnerInfoMinOrderByAggregateInput
  }

  export type PartnerInfoScalarWhereWithAggregatesInput = {
    AND?: PartnerInfoScalarWhereWithAggregatesInput | PartnerInfoScalarWhereWithAggregatesInput[]
    OR?: PartnerInfoScalarWhereWithAggregatesInput[]
    NOT?: PartnerInfoScalarWhereWithAggregatesInput | PartnerInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartnerInfo"> | string
    userId?: StringWithAggregatesFilter<"PartnerInfo"> | string
    organization?: StringNullableWithAggregatesFilter<"PartnerInfo"> | string | null
    licenseNumber?: StringNullableWithAggregatesFilter<"PartnerInfo"> | string | null
    status?: EnumPartnerStatusWithAggregatesFilter<"PartnerInfo"> | $Enums.PartnerStatus
    verifiedById?: StringNullableWithAggregatesFilter<"PartnerInfo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PartnerInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PartnerInfo"> | Date | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: StringFilter<"Staff"> | string
    partnerId?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    position?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    phoneNumber?: StringFilter<"Staff"> | string
    partner?: XOR<PartnerInfoScalarRelationFilter, PartnerInfoWhereInput>
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    partnerId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    partner?: PartnerInfoOrderByWithRelationInput
    _relevance?: StaffOrderByRelevanceInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    partnerId?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    position?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    phoneNumber?: StringFilter<"Staff"> | string
    partner?: XOR<PartnerInfoScalarRelationFilter, PartnerInfoWhereInput>
  }, "id">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    partnerId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff"> | string
    partnerId?: StringWithAggregatesFilter<"Staff"> | string
    name?: StringWithAggregatesFilter<"Staff"> | string
    position?: StringWithAggregatesFilter<"Staff"> | string
    email?: StringWithAggregatesFilter<"Staff"> | string
    phoneNumber?: StringWithAggregatesFilter<"Staff"> | string
  }

  export type ReviewServiceWhereInput = {
    AND?: ReviewServiceWhereInput | ReviewServiceWhereInput[]
    OR?: ReviewServiceWhereInput[]
    NOT?: ReviewServiceWhereInput | ReviewServiceWhereInput[]
    id?: StringFilter<"ReviewService"> | string
    userId?: StringFilter<"ReviewService"> | string
    serviceId?: StringFilter<"ReviewService"> | string
    service?: EnumServiceTypeFilter<"ReviewService"> | $Enums.ServiceType
    reviewStars?: IntFilter<"ReviewService"> | number
    comment?: StringNullableFilter<"ReviewService"> | string | null
    reviewedAt?: DateTimeFilter<"ReviewService"> | Date | string
    metadata?: JsonNullableFilter<"ReviewService">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewServiceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    reviewStars?: SortOrder
    comment?: SortOrderInput | SortOrder
    reviewedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: ReviewServiceOrderByRelevanceInput
  }

  export type ReviewServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_serviceId_service?: ReviewServiceUserIdServiceIdServiceCompoundUniqueInput
    AND?: ReviewServiceWhereInput | ReviewServiceWhereInput[]
    OR?: ReviewServiceWhereInput[]
    NOT?: ReviewServiceWhereInput | ReviewServiceWhereInput[]
    userId?: StringFilter<"ReviewService"> | string
    serviceId?: StringFilter<"ReviewService"> | string
    service?: EnumServiceTypeFilter<"ReviewService"> | $Enums.ServiceType
    reviewStars?: IntFilter<"ReviewService"> | number
    comment?: StringNullableFilter<"ReviewService"> | string | null
    reviewedAt?: DateTimeFilter<"ReviewService"> | Date | string
    metadata?: JsonNullableFilter<"ReviewService">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_serviceId_service">

  export type ReviewServiceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    reviewStars?: SortOrder
    comment?: SortOrderInput | SortOrder
    reviewedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: ReviewServiceCountOrderByAggregateInput
    _avg?: ReviewServiceAvgOrderByAggregateInput
    _max?: ReviewServiceMaxOrderByAggregateInput
    _min?: ReviewServiceMinOrderByAggregateInput
    _sum?: ReviewServiceSumOrderByAggregateInput
  }

  export type ReviewServiceScalarWhereWithAggregatesInput = {
    AND?: ReviewServiceScalarWhereWithAggregatesInput | ReviewServiceScalarWhereWithAggregatesInput[]
    OR?: ReviewServiceScalarWhereWithAggregatesInput[]
    NOT?: ReviewServiceScalarWhereWithAggregatesInput | ReviewServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewService"> | string
    userId?: StringWithAggregatesFilter<"ReviewService"> | string
    serviceId?: StringWithAggregatesFilter<"ReviewService"> | string
    service?: EnumServiceTypeWithAggregatesFilter<"ReviewService"> | $Enums.ServiceType
    reviewStars?: IntWithAggregatesFilter<"ReviewService"> | number
    comment?: StringNullableWithAggregatesFilter<"ReviewService"> | string | null
    reviewedAt?: DateTimeWithAggregatesFilter<"ReviewService"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"ReviewService">
  }

  export type UserHistoryWhereInput = {
    AND?: UserHistoryWhereInput | UserHistoryWhereInput[]
    OR?: UserHistoryWhereInput[]
    NOT?: UserHistoryWhereInput | UserHistoryWhereInput[]
    id?: StringFilter<"UserHistory"> | string
    userId?: StringFilter<"UserHistory"> | string
    serviceId?: StringFilter<"UserHistory"> | string
    service?: EnumServiceTypeFilter<"UserHistory"> | $Enums.ServiceType
    viewedAt?: DateTimeFilter<"UserHistory"> | Date | string
    metadata?: JsonNullableFilter<"UserHistory">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    viewedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserHistoryOrderByRelevanceInput
  }

  export type UserHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserHistoryWhereInput | UserHistoryWhereInput[]
    OR?: UserHistoryWhereInput[]
    NOT?: UserHistoryWhereInput | UserHistoryWhereInput[]
    userId?: StringFilter<"UserHistory"> | string
    serviceId?: StringFilter<"UserHistory"> | string
    service?: EnumServiceTypeFilter<"UserHistory"> | $Enums.ServiceType
    viewedAt?: DateTimeFilter<"UserHistory"> | Date | string
    metadata?: JsonNullableFilter<"UserHistory">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    viewedAt?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: UserHistoryCountOrderByAggregateInput
    _max?: UserHistoryMaxOrderByAggregateInput
    _min?: UserHistoryMinOrderByAggregateInput
  }

  export type UserHistoryScalarWhereWithAggregatesInput = {
    AND?: UserHistoryScalarWhereWithAggregatesInput | UserHistoryScalarWhereWithAggregatesInput[]
    OR?: UserHistoryScalarWhereWithAggregatesInput[]
    NOT?: UserHistoryScalarWhereWithAggregatesInput | UserHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserHistory"> | string
    userId?: StringWithAggregatesFilter<"UserHistory"> | string
    serviceId?: StringWithAggregatesFilter<"UserHistory"> | string
    service?: EnumServiceTypeWithAggregatesFilter<"UserHistory"> | $Enums.ServiceType
    viewedAt?: DateTimeWithAggregatesFilter<"UserHistory"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"UserHistory">
  }

  export type ManagerHistoryWhereInput = {
    AND?: ManagerHistoryWhereInput | ManagerHistoryWhereInput[]
    OR?: ManagerHistoryWhereInput[]
    NOT?: ManagerHistoryWhereInput | ManagerHistoryWhereInput[]
    id?: StringFilter<"ManagerHistory"> | string
    managerId?: StringFilter<"ManagerHistory"> | string
    action?: EnumManagerActionFilter<"ManagerHistory"> | $Enums.ManagerAction
    actionScope?: JsonNullableFilter<"ManagerHistory">
    targetId?: StringNullableFilter<"ManagerHistory"> | string | null
    targetType?: EnumTargetTypeNullableFilter<"ManagerHistory"> | $Enums.TargetType | null
    description?: StringNullableFilter<"ManagerHistory"> | string | null
    httpMethod?: EnumHttpMethodNullableFilter<"ManagerHistory"> | $Enums.HttpMethod | null
    httpUrl?: StringNullableFilter<"ManagerHistory"> | string | null
    httpQuery?: JsonNullableFilter<"ManagerHistory">
    httpParams?: JsonNullableFilter<"ManagerHistory">
    httpBody?: JsonNullableFilter<"ManagerHistory">
    httpHeaders?: JsonNullableFilter<"ManagerHistory">
    actedAt?: DateTimeFilter<"ManagerHistory"> | Date | string
    manager?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ManagerHistoryOrderByWithRelationInput = {
    id?: SortOrder
    managerId?: SortOrder
    action?: SortOrder
    actionScope?: SortOrderInput | SortOrder
    targetId?: SortOrderInput | SortOrder
    targetType?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    httpMethod?: SortOrderInput | SortOrder
    httpUrl?: SortOrderInput | SortOrder
    httpQuery?: SortOrderInput | SortOrder
    httpParams?: SortOrderInput | SortOrder
    httpBody?: SortOrderInput | SortOrder
    httpHeaders?: SortOrderInput | SortOrder
    actedAt?: SortOrder
    manager?: UserOrderByWithRelationInput
    _relevance?: ManagerHistoryOrderByRelevanceInput
  }

  export type ManagerHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ManagerHistoryWhereInput | ManagerHistoryWhereInput[]
    OR?: ManagerHistoryWhereInput[]
    NOT?: ManagerHistoryWhereInput | ManagerHistoryWhereInput[]
    managerId?: StringFilter<"ManagerHistory"> | string
    action?: EnumManagerActionFilter<"ManagerHistory"> | $Enums.ManagerAction
    actionScope?: JsonNullableFilter<"ManagerHistory">
    targetId?: StringNullableFilter<"ManagerHistory"> | string | null
    targetType?: EnumTargetTypeNullableFilter<"ManagerHistory"> | $Enums.TargetType | null
    description?: StringNullableFilter<"ManagerHistory"> | string | null
    httpMethod?: EnumHttpMethodNullableFilter<"ManagerHistory"> | $Enums.HttpMethod | null
    httpUrl?: StringNullableFilter<"ManagerHistory"> | string | null
    httpQuery?: JsonNullableFilter<"ManagerHistory">
    httpParams?: JsonNullableFilter<"ManagerHistory">
    httpBody?: JsonNullableFilter<"ManagerHistory">
    httpHeaders?: JsonNullableFilter<"ManagerHistory">
    actedAt?: DateTimeFilter<"ManagerHistory"> | Date | string
    manager?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ManagerHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    managerId?: SortOrder
    action?: SortOrder
    actionScope?: SortOrderInput | SortOrder
    targetId?: SortOrderInput | SortOrder
    targetType?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    httpMethod?: SortOrderInput | SortOrder
    httpUrl?: SortOrderInput | SortOrder
    httpQuery?: SortOrderInput | SortOrder
    httpParams?: SortOrderInput | SortOrder
    httpBody?: SortOrderInput | SortOrder
    httpHeaders?: SortOrderInput | SortOrder
    actedAt?: SortOrder
    _count?: ManagerHistoryCountOrderByAggregateInput
    _max?: ManagerHistoryMaxOrderByAggregateInput
    _min?: ManagerHistoryMinOrderByAggregateInput
  }

  export type ManagerHistoryScalarWhereWithAggregatesInput = {
    AND?: ManagerHistoryScalarWhereWithAggregatesInput | ManagerHistoryScalarWhereWithAggregatesInput[]
    OR?: ManagerHistoryScalarWhereWithAggregatesInput[]
    NOT?: ManagerHistoryScalarWhereWithAggregatesInput | ManagerHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ManagerHistory"> | string
    managerId?: StringWithAggregatesFilter<"ManagerHistory"> | string
    action?: EnumManagerActionWithAggregatesFilter<"ManagerHistory"> | $Enums.ManagerAction
    actionScope?: JsonNullableWithAggregatesFilter<"ManagerHistory">
    targetId?: StringNullableWithAggregatesFilter<"ManagerHistory"> | string | null
    targetType?: EnumTargetTypeNullableWithAggregatesFilter<"ManagerHistory"> | $Enums.TargetType | null
    description?: StringNullableWithAggregatesFilter<"ManagerHistory"> | string | null
    httpMethod?: EnumHttpMethodNullableWithAggregatesFilter<"ManagerHistory"> | $Enums.HttpMethod | null
    httpUrl?: StringNullableWithAggregatesFilter<"ManagerHistory"> | string | null
    httpQuery?: JsonNullableWithAggregatesFilter<"ManagerHistory">
    httpParams?: JsonNullableWithAggregatesFilter<"ManagerHistory">
    httpBody?: JsonNullableWithAggregatesFilter<"ManagerHistory">
    httpHeaders?: JsonNullableWithAggregatesFilter<"ManagerHistory">
    actedAt?: DateTimeWithAggregatesFilter<"ManagerHistory"> | Date | string
  }

  export type AdminHistoryWhereInput = {
    AND?: AdminHistoryWhereInput | AdminHistoryWhereInput[]
    OR?: AdminHistoryWhereInput[]
    NOT?: AdminHistoryWhereInput | AdminHistoryWhereInput[]
    id?: StringFilter<"AdminHistory"> | string
    adminId?: StringFilter<"AdminHistory"> | string
    action?: EnumAdminActionFilter<"AdminHistory"> | $Enums.AdminAction
    targetId?: StringNullableFilter<"AdminHistory"> | string | null
    targetType?: EnumTargetTypeNullableFilter<"AdminHistory"> | $Enums.TargetType | null
    description?: StringNullableFilter<"AdminHistory"> | string | null
    httpMethod?: EnumHttpMethodNullableFilter<"AdminHistory"> | $Enums.HttpMethod | null
    httpUrl?: StringNullableFilter<"AdminHistory"> | string | null
    httpQuery?: JsonNullableFilter<"AdminHistory">
    httpParams?: JsonNullableFilter<"AdminHistory">
    httpBody?: JsonNullableFilter<"AdminHistory">
    httpHeaders?: JsonNullableFilter<"AdminHistory">
    actedAt?: DateTimeFilter<"AdminHistory"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminHistoryOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetId?: SortOrderInput | SortOrder
    targetType?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    httpMethod?: SortOrderInput | SortOrder
    httpUrl?: SortOrderInput | SortOrder
    httpQuery?: SortOrderInput | SortOrder
    httpParams?: SortOrderInput | SortOrder
    httpBody?: SortOrderInput | SortOrder
    httpHeaders?: SortOrderInput | SortOrder
    actedAt?: SortOrder
    admin?: UserOrderByWithRelationInput
    _relevance?: AdminHistoryOrderByRelevanceInput
  }

  export type AdminHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminHistoryWhereInput | AdminHistoryWhereInput[]
    OR?: AdminHistoryWhereInput[]
    NOT?: AdminHistoryWhereInput | AdminHistoryWhereInput[]
    adminId?: StringFilter<"AdminHistory"> | string
    action?: EnumAdminActionFilter<"AdminHistory"> | $Enums.AdminAction
    targetId?: StringNullableFilter<"AdminHistory"> | string | null
    targetType?: EnumTargetTypeNullableFilter<"AdminHistory"> | $Enums.TargetType | null
    description?: StringNullableFilter<"AdminHistory"> | string | null
    httpMethod?: EnumHttpMethodNullableFilter<"AdminHistory"> | $Enums.HttpMethod | null
    httpUrl?: StringNullableFilter<"AdminHistory"> | string | null
    httpQuery?: JsonNullableFilter<"AdminHistory">
    httpParams?: JsonNullableFilter<"AdminHistory">
    httpBody?: JsonNullableFilter<"AdminHistory">
    httpHeaders?: JsonNullableFilter<"AdminHistory">
    actedAt?: DateTimeFilter<"AdminHistory"> | Date | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdminHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetId?: SortOrderInput | SortOrder
    targetType?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    httpMethod?: SortOrderInput | SortOrder
    httpUrl?: SortOrderInput | SortOrder
    httpQuery?: SortOrderInput | SortOrder
    httpParams?: SortOrderInput | SortOrder
    httpBody?: SortOrderInput | SortOrder
    httpHeaders?: SortOrderInput | SortOrder
    actedAt?: SortOrder
    _count?: AdminHistoryCountOrderByAggregateInput
    _max?: AdminHistoryMaxOrderByAggregateInput
    _min?: AdminHistoryMinOrderByAggregateInput
  }

  export type AdminHistoryScalarWhereWithAggregatesInput = {
    AND?: AdminHistoryScalarWhereWithAggregatesInput | AdminHistoryScalarWhereWithAggregatesInput[]
    OR?: AdminHistoryScalarWhereWithAggregatesInput[]
    NOT?: AdminHistoryScalarWhereWithAggregatesInput | AdminHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminHistory"> | string
    adminId?: StringWithAggregatesFilter<"AdminHistory"> | string
    action?: EnumAdminActionWithAggregatesFilter<"AdminHistory"> | $Enums.AdminAction
    targetId?: StringNullableWithAggregatesFilter<"AdminHistory"> | string | null
    targetType?: EnumTargetTypeNullableWithAggregatesFilter<"AdminHistory"> | $Enums.TargetType | null
    description?: StringNullableWithAggregatesFilter<"AdminHistory"> | string | null
    httpMethod?: EnumHttpMethodNullableWithAggregatesFilter<"AdminHistory"> | $Enums.HttpMethod | null
    httpUrl?: StringNullableWithAggregatesFilter<"AdminHistory"> | string | null
    httpQuery?: JsonNullableWithAggregatesFilter<"AdminHistory">
    httpParams?: JsonNullableWithAggregatesFilter<"AdminHistory">
    httpBody?: JsonNullableWithAggregatesFilter<"AdminHistory">
    httpHeaders?: JsonNullableWithAggregatesFilter<"AdminHistory">
    actedAt?: DateTimeWithAggregatesFilter<"AdminHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoUncheckedCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryUncheckedCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryUncheckedCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryUncheckedCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUncheckedUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUncheckedUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUncheckedUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUncheckedUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    bio?: string | null
    birthday?: Date | string | null
    gender?: string | null
    location?: string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: string
    bio?: string | null
    birthday?: Date | string | null
    gender?: string | null
    location?: string | null
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: string
    bio?: string | null
    birthday?: Date | string | null
    gender?: string | null
    location?: string | null
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    isPublic?: boolean
    isDeleted?: boolean
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    content: string
    imageUrl?: string | null
    isPublic?: boolean
    isDeleted?: boolean
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: string
    userId: string
    title: string
    content: string
    imageUrl?: string | null
    isPublic?: boolean
    isDeleted?: boolean
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerInfoCreateInput = {
    id?: string
    organization?: string | null
    licenseNumber?: string | null
    status?: $Enums.PartnerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPartnerInfoInput
    verifiedBy?: UserCreateNestedOneWithoutVerifiedPartnersInput
    staffMembers?: StaffCreateNestedManyWithoutPartnerInput
  }

  export type PartnerInfoUncheckedCreateInput = {
    id?: string
    userId: string
    organization?: string | null
    licenseNumber?: string | null
    status?: $Enums.PartnerStatus
    verifiedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffMembers?: StaffUncheckedCreateNestedManyWithoutPartnerInput
  }

  export type PartnerInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPartnerInfoNestedInput
    verifiedBy?: UserUpdateOneWithoutVerifiedPartnersNestedInput
    staffMembers?: StaffUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffMembers?: StaffUncheckedUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerInfoCreateManyInput = {
    id?: string
    userId: string
    organization?: string | null
    licenseNumber?: string | null
    status?: $Enums.PartnerStatus
    verifiedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateInput = {
    id?: string
    name: string
    position: string
    email: string
    phoneNumber: string
    partner: PartnerInfoCreateNestedOneWithoutStaffMembersInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    partnerId: string
    name: string
    position: string
    email: string
    phoneNumber: string
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    partner?: PartnerInfoUpdateOneRequiredWithoutStaffMembersNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type StaffCreateManyInput = {
    id?: string
    partnerId: string
    name: string
    position: string
    email: string
    phoneNumber: string
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    partnerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewServiceCreateInput = {
    id?: string
    serviceId: string
    service: $Enums.ServiceType
    reviewStars: number
    comment?: string | null
    reviewedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutReviewServicesInput
  }

  export type ReviewServiceUncheckedCreateInput = {
    id?: string
    userId: string
    serviceId: string
    service: $Enums.ServiceType
    reviewStars: number
    comment?: string | null
    reviewedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    reviewStars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutReviewServicesNestedInput
  }

  export type ReviewServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    reviewStars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewServiceCreateManyInput = {
    id?: string
    userId: string
    serviceId: string
    service: $Enums.ServiceType
    reviewStars: number
    comment?: string | null
    reviewedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    reviewStars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    reviewStars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserHistoryCreateInput = {
    id?: string
    serviceId: string
    service: $Enums.ServiceType
    viewedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutUserHistoryInput
  }

  export type UserHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    serviceId: string
    service: $Enums.ServiceType
    viewedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutUserHistoryNestedInput
  }

  export type UserHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserHistoryCreateManyInput = {
    id?: string
    userId: string
    serviceId: string
    service: $Enums.ServiceType
    viewedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ManagerHistoryCreateInput = {
    id?: string
    action: $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: string | null
    targetType?: $Enums.TargetType | null
    description?: string | null
    httpMethod?: $Enums.HttpMethod | null
    httpUrl?: string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: Date | string
    manager: UserCreateNestedOneWithoutManagerLogsInput
  }

  export type ManagerHistoryUncheckedCreateInput = {
    id?: string
    managerId: string
    action: $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: string | null
    targetType?: $Enums.TargetType | null
    description?: string | null
    httpMethod?: $Enums.HttpMethod | null
    httpUrl?: string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: Date | string
  }

  export type ManagerHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumManagerActionFieldUpdateOperationsInput | $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutManagerLogsNestedInput
  }

  export type ManagerHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    action?: EnumManagerActionFieldUpdateOperationsInput | $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerHistoryCreateManyInput = {
    id?: string
    managerId: string
    action: $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: string | null
    targetType?: $Enums.TargetType | null
    description?: string | null
    httpMethod?: $Enums.HttpMethod | null
    httpUrl?: string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: Date | string
  }

  export type ManagerHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumManagerActionFieldUpdateOperationsInput | $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    managerId?: StringFieldUpdateOperationsInput | string
    action?: EnumManagerActionFieldUpdateOperationsInput | $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminHistoryCreateInput = {
    id?: string
    action: $Enums.AdminAction
    targetId?: string | null
    targetType?: $Enums.TargetType | null
    description?: string | null
    httpMethod?: $Enums.HttpMethod | null
    httpUrl?: string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: Date | string
    admin: UserCreateNestedOneWithoutAdminLogsInput
  }

  export type AdminHistoryUncheckedCreateInput = {
    id?: string
    adminId: string
    action: $Enums.AdminAction
    targetId?: string | null
    targetType?: $Enums.TargetType | null
    description?: string | null
    httpMethod?: $Enums.HttpMethod | null
    httpUrl?: string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: Date | string
  }

  export type AdminHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutAdminLogsNestedInput
  }

  export type AdminHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    action?: EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminHistoryCreateManyInput = {
    id?: string
    adminId: string
    action: $Enums.AdminAction
    targetId?: string | null
    targetType?: $Enums.TargetType | null
    description?: string | null
    httpMethod?: $Enums.HttpMethod | null
    httpUrl?: string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: Date | string
  }

  export type AdminHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    action?: EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type PartnerInfoNullableScalarRelationFilter = {
    is?: PartnerInfoWhereInput | null
    isNot?: PartnerInfoWhereInput | null
  }

  export type UserHistoryListRelationFilter = {
    every?: UserHistoryWhereInput
    some?: UserHistoryWhereInput
    none?: UserHistoryWhereInput
  }

  export type ManagerHistoryListRelationFilter = {
    every?: ManagerHistoryWhereInput
    some?: ManagerHistoryWhereInput
    none?: ManagerHistoryWhereInput
  }

  export type AdminHistoryListRelationFilter = {
    every?: AdminHistoryWhereInput
    some?: AdminHistoryWhereInput
    none?: AdminHistoryWhereInput
  }

  export type PartnerInfoListRelationFilter = {
    every?: PartnerInfoWhereInput
    some?: PartnerInfoWhereInput
    none?: PartnerInfoWhereInput
  }

  export type ReviewServiceListRelationFilter = {
    every?: ReviewServiceWhereInput
    some?: ReviewServiceWhereInput
    none?: ReviewServiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManagerHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartnerInfoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    avatar?: SortOrder
    language?: SortOrder
    theme?: SortOrder
    isBanned?: SortOrder
    isDeleted?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    avatar?: SortOrder
    language?: SortOrder
    theme?: SortOrder
    isBanned?: SortOrder
    isDeleted?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    avatar?: SortOrder
    language?: SortOrder
    theme?: SortOrder
    isBanned?: SortOrder
    isDeleted?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfileOrderByRelevanceInput = {
    fields: ProfileOrderByRelevanceFieldEnum | ProfileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    location?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    location?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    location?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PostOrderByRelevanceInput = {
    fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    isPublic?: SortOrder
    isDeleted?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    isPublic?: SortOrder
    isDeleted?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    isPublic?: SortOrder
    isDeleted?: SortOrder
    isDisabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPartnerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerStatus | EnumPartnerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PartnerStatus[]
    notIn?: $Enums.PartnerStatus[]
    not?: NestedEnumPartnerStatusFilter<$PrismaModel> | $Enums.PartnerStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartnerInfoOrderByRelevanceInput = {
    fields: PartnerInfoOrderByRelevanceFieldEnum | PartnerInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PartnerInfoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organization?: SortOrder
    licenseNumber?: SortOrder
    status?: SortOrder
    verifiedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organization?: SortOrder
    licenseNumber?: SortOrder
    status?: SortOrder
    verifiedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartnerInfoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organization?: SortOrder
    licenseNumber?: SortOrder
    status?: SortOrder
    verifiedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPartnerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerStatus | EnumPartnerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PartnerStatus[]
    notIn?: $Enums.PartnerStatus[]
    not?: NestedEnumPartnerStatusWithAggregatesFilter<$PrismaModel> | $Enums.PartnerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPartnerStatusFilter<$PrismaModel>
    _max?: NestedEnumPartnerStatusFilter<$PrismaModel>
  }

  export type PartnerInfoScalarRelationFilter = {
    is?: PartnerInfoWhereInput
    isNot?: PartnerInfoWhereInput
  }

  export type StaffOrderByRelevanceInput = {
    fields: StaffOrderByRelevanceFieldEnum | StaffOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    partnerId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    partnerId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    partnerId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type EnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReviewServiceOrderByRelevanceInput = {
    fields: ReviewServiceOrderByRelevanceFieldEnum | ReviewServiceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewServiceUserIdServiceIdServiceCompoundUniqueInput = {
    userId: string
    serviceId: string
    service: $Enums.ServiceType
  }

  export type ReviewServiceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    reviewStars?: SortOrder
    comment?: SortOrder
    reviewedAt?: SortOrder
    metadata?: SortOrder
  }

  export type ReviewServiceAvgOrderByAggregateInput = {
    reviewStars?: SortOrder
  }

  export type ReviewServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    reviewStars?: SortOrder
    comment?: SortOrder
    reviewedAt?: SortOrder
  }

  export type ReviewServiceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    reviewStars?: SortOrder
    comment?: SortOrder
    reviewedAt?: SortOrder
  }

  export type ReviewServiceSumOrderByAggregateInput = {
    reviewStars?: SortOrder
  }

  export type EnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserHistoryOrderByRelevanceInput = {
    fields: UserHistoryOrderByRelevanceFieldEnum | UserHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    viewedAt?: SortOrder
    metadata?: SortOrder
  }

  export type UserHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    viewedAt?: SortOrder
  }

  export type UserHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    service?: SortOrder
    viewedAt?: SortOrder
  }

  export type EnumManagerActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ManagerAction | EnumManagerActionFieldRefInput<$PrismaModel>
    in?: $Enums.ManagerAction[]
    notIn?: $Enums.ManagerAction[]
    not?: NestedEnumManagerActionFilter<$PrismaModel> | $Enums.ManagerAction
  }

  export type EnumTargetTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TargetType | EnumTargetTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TargetType[] | null
    notIn?: $Enums.TargetType[] | null
    not?: NestedEnumTargetTypeNullableFilter<$PrismaModel> | $Enums.TargetType | null
  }

  export type EnumHttpMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HttpMethod | EnumHttpMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.HttpMethod[] | null
    notIn?: $Enums.HttpMethod[] | null
    not?: NestedEnumHttpMethodNullableFilter<$PrismaModel> | $Enums.HttpMethod | null
  }

  export type ManagerHistoryOrderByRelevanceInput = {
    fields: ManagerHistoryOrderByRelevanceFieldEnum | ManagerHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ManagerHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    action?: SortOrder
    actionScope?: SortOrder
    targetId?: SortOrder
    targetType?: SortOrder
    description?: SortOrder
    httpMethod?: SortOrder
    httpUrl?: SortOrder
    httpQuery?: SortOrder
    httpParams?: SortOrder
    httpBody?: SortOrder
    httpHeaders?: SortOrder
    actedAt?: SortOrder
  }

  export type ManagerHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    action?: SortOrder
    targetId?: SortOrder
    targetType?: SortOrder
    description?: SortOrder
    httpMethod?: SortOrder
    httpUrl?: SortOrder
    actedAt?: SortOrder
  }

  export type ManagerHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    managerId?: SortOrder
    action?: SortOrder
    targetId?: SortOrder
    targetType?: SortOrder
    description?: SortOrder
    httpMethod?: SortOrder
    httpUrl?: SortOrder
    actedAt?: SortOrder
  }

  export type EnumManagerActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ManagerAction | EnumManagerActionFieldRefInput<$PrismaModel>
    in?: $Enums.ManagerAction[]
    notIn?: $Enums.ManagerAction[]
    not?: NestedEnumManagerActionWithAggregatesFilter<$PrismaModel> | $Enums.ManagerAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumManagerActionFilter<$PrismaModel>
    _max?: NestedEnumManagerActionFilter<$PrismaModel>
  }

  export type EnumTargetTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TargetType | EnumTargetTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TargetType[] | null
    notIn?: $Enums.TargetType[] | null
    not?: NestedEnumTargetTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TargetType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTargetTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumTargetTypeNullableFilter<$PrismaModel>
  }

  export type EnumHttpMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HttpMethod | EnumHttpMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.HttpMethod[] | null
    notIn?: $Enums.HttpMethod[] | null
    not?: NestedEnumHttpMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.HttpMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHttpMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumHttpMethodNullableFilter<$PrismaModel>
  }

  export type EnumAdminActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminAction | EnumAdminActionFieldRefInput<$PrismaModel>
    in?: $Enums.AdminAction[]
    notIn?: $Enums.AdminAction[]
    not?: NestedEnumAdminActionFilter<$PrismaModel> | $Enums.AdminAction
  }

  export type AdminHistoryOrderByRelevanceInput = {
    fields: AdminHistoryOrderByRelevanceFieldEnum | AdminHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetId?: SortOrder
    targetType?: SortOrder
    description?: SortOrder
    httpMethod?: SortOrder
    httpUrl?: SortOrder
    httpQuery?: SortOrder
    httpParams?: SortOrder
    httpBody?: SortOrder
    httpHeaders?: SortOrder
    actedAt?: SortOrder
  }

  export type AdminHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetId?: SortOrder
    targetType?: SortOrder
    description?: SortOrder
    httpMethod?: SortOrder
    httpUrl?: SortOrder
    actedAt?: SortOrder
  }

  export type AdminHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetId?: SortOrder
    targetType?: SortOrder
    description?: SortOrder
    httpMethod?: SortOrder
    httpUrl?: SortOrder
    actedAt?: SortOrder
  }

  export type EnumAdminActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminAction | EnumAdminActionFieldRefInput<$PrismaModel>
    in?: $Enums.AdminAction[]
    notIn?: $Enums.AdminAction[]
    not?: NestedEnumAdminActionWithAggregatesFilter<$PrismaModel> | $Enums.AdminAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminActionFilter<$PrismaModel>
    _max?: NestedEnumAdminActionFilter<$PrismaModel>
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PartnerInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<PartnerInfoCreateWithoutUserInput, PartnerInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: PartnerInfoCreateOrConnectWithoutUserInput
    connect?: PartnerInfoWhereUniqueInput
  }

  export type UserHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHistoryCreateWithoutUserInput, UserHistoryUncheckedCreateWithoutUserInput> | UserHistoryCreateWithoutUserInput[] | UserHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHistoryCreateOrConnectWithoutUserInput | UserHistoryCreateOrConnectWithoutUserInput[]
    createMany?: UserHistoryCreateManyUserInputEnvelope
    connect?: UserHistoryWhereUniqueInput | UserHistoryWhereUniqueInput[]
  }

  export type ManagerHistoryCreateNestedManyWithoutManagerInput = {
    create?: XOR<ManagerHistoryCreateWithoutManagerInput, ManagerHistoryUncheckedCreateWithoutManagerInput> | ManagerHistoryCreateWithoutManagerInput[] | ManagerHistoryUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ManagerHistoryCreateOrConnectWithoutManagerInput | ManagerHistoryCreateOrConnectWithoutManagerInput[]
    createMany?: ManagerHistoryCreateManyManagerInputEnvelope
    connect?: ManagerHistoryWhereUniqueInput | ManagerHistoryWhereUniqueInput[]
  }

  export type AdminHistoryCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminHistoryCreateWithoutAdminInput, AdminHistoryUncheckedCreateWithoutAdminInput> | AdminHistoryCreateWithoutAdminInput[] | AdminHistoryUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminHistoryCreateOrConnectWithoutAdminInput | AdminHistoryCreateOrConnectWithoutAdminInput[]
    createMany?: AdminHistoryCreateManyAdminInputEnvelope
    connect?: AdminHistoryWhereUniqueInput | AdminHistoryWhereUniqueInput[]
  }

  export type PartnerInfoCreateNestedManyWithoutVerifiedByInput = {
    create?: XOR<PartnerInfoCreateWithoutVerifiedByInput, PartnerInfoUncheckedCreateWithoutVerifiedByInput> | PartnerInfoCreateWithoutVerifiedByInput[] | PartnerInfoUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: PartnerInfoCreateOrConnectWithoutVerifiedByInput | PartnerInfoCreateOrConnectWithoutVerifiedByInput[]
    createMany?: PartnerInfoCreateManyVerifiedByInputEnvelope
    connect?: PartnerInfoWhereUniqueInput | PartnerInfoWhereUniqueInput[]
  }

  export type ReviewServiceCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewServiceCreateWithoutUserInput, ReviewServiceUncheckedCreateWithoutUserInput> | ReviewServiceCreateWithoutUserInput[] | ReviewServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewServiceCreateOrConnectWithoutUserInput | ReviewServiceCreateOrConnectWithoutUserInput[]
    createMany?: ReviewServiceCreateManyUserInputEnvelope
    connect?: ReviewServiceWhereUniqueInput | ReviewServiceWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PartnerInfoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PartnerInfoCreateWithoutUserInput, PartnerInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: PartnerInfoCreateOrConnectWithoutUserInput
    connect?: PartnerInfoWhereUniqueInput
  }

  export type UserHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHistoryCreateWithoutUserInput, UserHistoryUncheckedCreateWithoutUserInput> | UserHistoryCreateWithoutUserInput[] | UserHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHistoryCreateOrConnectWithoutUserInput | UserHistoryCreateOrConnectWithoutUserInput[]
    createMany?: UserHistoryCreateManyUserInputEnvelope
    connect?: UserHistoryWhereUniqueInput | UserHistoryWhereUniqueInput[]
  }

  export type ManagerHistoryUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<ManagerHistoryCreateWithoutManagerInput, ManagerHistoryUncheckedCreateWithoutManagerInput> | ManagerHistoryCreateWithoutManagerInput[] | ManagerHistoryUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ManagerHistoryCreateOrConnectWithoutManagerInput | ManagerHistoryCreateOrConnectWithoutManagerInput[]
    createMany?: ManagerHistoryCreateManyManagerInputEnvelope
    connect?: ManagerHistoryWhereUniqueInput | ManagerHistoryWhereUniqueInput[]
  }

  export type AdminHistoryUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminHistoryCreateWithoutAdminInput, AdminHistoryUncheckedCreateWithoutAdminInput> | AdminHistoryCreateWithoutAdminInput[] | AdminHistoryUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminHistoryCreateOrConnectWithoutAdminInput | AdminHistoryCreateOrConnectWithoutAdminInput[]
    createMany?: AdminHistoryCreateManyAdminInputEnvelope
    connect?: AdminHistoryWhereUniqueInput | AdminHistoryWhereUniqueInput[]
  }

  export type PartnerInfoUncheckedCreateNestedManyWithoutVerifiedByInput = {
    create?: XOR<PartnerInfoCreateWithoutVerifiedByInput, PartnerInfoUncheckedCreateWithoutVerifiedByInput> | PartnerInfoCreateWithoutVerifiedByInput[] | PartnerInfoUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: PartnerInfoCreateOrConnectWithoutVerifiedByInput | PartnerInfoCreateOrConnectWithoutVerifiedByInput[]
    createMany?: PartnerInfoCreateManyVerifiedByInputEnvelope
    connect?: PartnerInfoWhereUniqueInput | PartnerInfoWhereUniqueInput[]
  }

  export type ReviewServiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewServiceCreateWithoutUserInput, ReviewServiceUncheckedCreateWithoutUserInput> | ReviewServiceCreateWithoutUserInput[] | ReviewServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewServiceCreateOrConnectWithoutUserInput | ReviewServiceCreateOrConnectWithoutUserInput[]
    createMany?: ReviewServiceCreateManyUserInputEnvelope
    connect?: ReviewServiceWhereUniqueInput | ReviewServiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PartnerInfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<PartnerInfoCreateWithoutUserInput, PartnerInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: PartnerInfoCreateOrConnectWithoutUserInput
    upsert?: PartnerInfoUpsertWithoutUserInput
    disconnect?: PartnerInfoWhereInput | boolean
    delete?: PartnerInfoWhereInput | boolean
    connect?: PartnerInfoWhereUniqueInput
    update?: XOR<XOR<PartnerInfoUpdateToOneWithWhereWithoutUserInput, PartnerInfoUpdateWithoutUserInput>, PartnerInfoUncheckedUpdateWithoutUserInput>
  }

  export type UserHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHistoryCreateWithoutUserInput, UserHistoryUncheckedCreateWithoutUserInput> | UserHistoryCreateWithoutUserInput[] | UserHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHistoryCreateOrConnectWithoutUserInput | UserHistoryCreateOrConnectWithoutUserInput[]
    upsert?: UserHistoryUpsertWithWhereUniqueWithoutUserInput | UserHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHistoryCreateManyUserInputEnvelope
    set?: UserHistoryWhereUniqueInput | UserHistoryWhereUniqueInput[]
    disconnect?: UserHistoryWhereUniqueInput | UserHistoryWhereUniqueInput[]
    delete?: UserHistoryWhereUniqueInput | UserHistoryWhereUniqueInput[]
    connect?: UserHistoryWhereUniqueInput | UserHistoryWhereUniqueInput[]
    update?: UserHistoryUpdateWithWhereUniqueWithoutUserInput | UserHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHistoryUpdateManyWithWhereWithoutUserInput | UserHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHistoryScalarWhereInput | UserHistoryScalarWhereInput[]
  }

  export type ManagerHistoryUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ManagerHistoryCreateWithoutManagerInput, ManagerHistoryUncheckedCreateWithoutManagerInput> | ManagerHistoryCreateWithoutManagerInput[] | ManagerHistoryUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ManagerHistoryCreateOrConnectWithoutManagerInput | ManagerHistoryCreateOrConnectWithoutManagerInput[]
    upsert?: ManagerHistoryUpsertWithWhereUniqueWithoutManagerInput | ManagerHistoryUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ManagerHistoryCreateManyManagerInputEnvelope
    set?: ManagerHistoryWhereUniqueInput | ManagerHistoryWhereUniqueInput[]
    disconnect?: ManagerHistoryWhereUniqueInput | ManagerHistoryWhereUniqueInput[]
    delete?: ManagerHistoryWhereUniqueInput | ManagerHistoryWhereUniqueInput[]
    connect?: ManagerHistoryWhereUniqueInput | ManagerHistoryWhereUniqueInput[]
    update?: ManagerHistoryUpdateWithWhereUniqueWithoutManagerInput | ManagerHistoryUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ManagerHistoryUpdateManyWithWhereWithoutManagerInput | ManagerHistoryUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ManagerHistoryScalarWhereInput | ManagerHistoryScalarWhereInput[]
  }

  export type AdminHistoryUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminHistoryCreateWithoutAdminInput, AdminHistoryUncheckedCreateWithoutAdminInput> | AdminHistoryCreateWithoutAdminInput[] | AdminHistoryUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminHistoryCreateOrConnectWithoutAdminInput | AdminHistoryCreateOrConnectWithoutAdminInput[]
    upsert?: AdminHistoryUpsertWithWhereUniqueWithoutAdminInput | AdminHistoryUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminHistoryCreateManyAdminInputEnvelope
    set?: AdminHistoryWhereUniqueInput | AdminHistoryWhereUniqueInput[]
    disconnect?: AdminHistoryWhereUniqueInput | AdminHistoryWhereUniqueInput[]
    delete?: AdminHistoryWhereUniqueInput | AdminHistoryWhereUniqueInput[]
    connect?: AdminHistoryWhereUniqueInput | AdminHistoryWhereUniqueInput[]
    update?: AdminHistoryUpdateWithWhereUniqueWithoutAdminInput | AdminHistoryUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminHistoryUpdateManyWithWhereWithoutAdminInput | AdminHistoryUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminHistoryScalarWhereInput | AdminHistoryScalarWhereInput[]
  }

  export type PartnerInfoUpdateManyWithoutVerifiedByNestedInput = {
    create?: XOR<PartnerInfoCreateWithoutVerifiedByInput, PartnerInfoUncheckedCreateWithoutVerifiedByInput> | PartnerInfoCreateWithoutVerifiedByInput[] | PartnerInfoUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: PartnerInfoCreateOrConnectWithoutVerifiedByInput | PartnerInfoCreateOrConnectWithoutVerifiedByInput[]
    upsert?: PartnerInfoUpsertWithWhereUniqueWithoutVerifiedByInput | PartnerInfoUpsertWithWhereUniqueWithoutVerifiedByInput[]
    createMany?: PartnerInfoCreateManyVerifiedByInputEnvelope
    set?: PartnerInfoWhereUniqueInput | PartnerInfoWhereUniqueInput[]
    disconnect?: PartnerInfoWhereUniqueInput | PartnerInfoWhereUniqueInput[]
    delete?: PartnerInfoWhereUniqueInput | PartnerInfoWhereUniqueInput[]
    connect?: PartnerInfoWhereUniqueInput | PartnerInfoWhereUniqueInput[]
    update?: PartnerInfoUpdateWithWhereUniqueWithoutVerifiedByInput | PartnerInfoUpdateWithWhereUniqueWithoutVerifiedByInput[]
    updateMany?: PartnerInfoUpdateManyWithWhereWithoutVerifiedByInput | PartnerInfoUpdateManyWithWhereWithoutVerifiedByInput[]
    deleteMany?: PartnerInfoScalarWhereInput | PartnerInfoScalarWhereInput[]
  }

  export type ReviewServiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewServiceCreateWithoutUserInput, ReviewServiceUncheckedCreateWithoutUserInput> | ReviewServiceCreateWithoutUserInput[] | ReviewServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewServiceCreateOrConnectWithoutUserInput | ReviewServiceCreateOrConnectWithoutUserInput[]
    upsert?: ReviewServiceUpsertWithWhereUniqueWithoutUserInput | ReviewServiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewServiceCreateManyUserInputEnvelope
    set?: ReviewServiceWhereUniqueInput | ReviewServiceWhereUniqueInput[]
    disconnect?: ReviewServiceWhereUniqueInput | ReviewServiceWhereUniqueInput[]
    delete?: ReviewServiceWhereUniqueInput | ReviewServiceWhereUniqueInput[]
    connect?: ReviewServiceWhereUniqueInput | ReviewServiceWhereUniqueInput[]
    update?: ReviewServiceUpdateWithWhereUniqueWithoutUserInput | ReviewServiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewServiceUpdateManyWithWhereWithoutUserInput | ReviewServiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewServiceScalarWhereInput | ReviewServiceScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PartnerInfoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PartnerInfoCreateWithoutUserInput, PartnerInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: PartnerInfoCreateOrConnectWithoutUserInput
    upsert?: PartnerInfoUpsertWithoutUserInput
    disconnect?: PartnerInfoWhereInput | boolean
    delete?: PartnerInfoWhereInput | boolean
    connect?: PartnerInfoWhereUniqueInput
    update?: XOR<XOR<PartnerInfoUpdateToOneWithWhereWithoutUserInput, PartnerInfoUpdateWithoutUserInput>, PartnerInfoUncheckedUpdateWithoutUserInput>
  }

  export type UserHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHistoryCreateWithoutUserInput, UserHistoryUncheckedCreateWithoutUserInput> | UserHistoryCreateWithoutUserInput[] | UserHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHistoryCreateOrConnectWithoutUserInput | UserHistoryCreateOrConnectWithoutUserInput[]
    upsert?: UserHistoryUpsertWithWhereUniqueWithoutUserInput | UserHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHistoryCreateManyUserInputEnvelope
    set?: UserHistoryWhereUniqueInput | UserHistoryWhereUniqueInput[]
    disconnect?: UserHistoryWhereUniqueInput | UserHistoryWhereUniqueInput[]
    delete?: UserHistoryWhereUniqueInput | UserHistoryWhereUniqueInput[]
    connect?: UserHistoryWhereUniqueInput | UserHistoryWhereUniqueInput[]
    update?: UserHistoryUpdateWithWhereUniqueWithoutUserInput | UserHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHistoryUpdateManyWithWhereWithoutUserInput | UserHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHistoryScalarWhereInput | UserHistoryScalarWhereInput[]
  }

  export type ManagerHistoryUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ManagerHistoryCreateWithoutManagerInput, ManagerHistoryUncheckedCreateWithoutManagerInput> | ManagerHistoryCreateWithoutManagerInput[] | ManagerHistoryUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ManagerHistoryCreateOrConnectWithoutManagerInput | ManagerHistoryCreateOrConnectWithoutManagerInput[]
    upsert?: ManagerHistoryUpsertWithWhereUniqueWithoutManagerInput | ManagerHistoryUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ManagerHistoryCreateManyManagerInputEnvelope
    set?: ManagerHistoryWhereUniqueInput | ManagerHistoryWhereUniqueInput[]
    disconnect?: ManagerHistoryWhereUniqueInput | ManagerHistoryWhereUniqueInput[]
    delete?: ManagerHistoryWhereUniqueInput | ManagerHistoryWhereUniqueInput[]
    connect?: ManagerHistoryWhereUniqueInput | ManagerHistoryWhereUniqueInput[]
    update?: ManagerHistoryUpdateWithWhereUniqueWithoutManagerInput | ManagerHistoryUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ManagerHistoryUpdateManyWithWhereWithoutManagerInput | ManagerHistoryUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ManagerHistoryScalarWhereInput | ManagerHistoryScalarWhereInput[]
  }

  export type AdminHistoryUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminHistoryCreateWithoutAdminInput, AdminHistoryUncheckedCreateWithoutAdminInput> | AdminHistoryCreateWithoutAdminInput[] | AdminHistoryUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminHistoryCreateOrConnectWithoutAdminInput | AdminHistoryCreateOrConnectWithoutAdminInput[]
    upsert?: AdminHistoryUpsertWithWhereUniqueWithoutAdminInput | AdminHistoryUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminHistoryCreateManyAdminInputEnvelope
    set?: AdminHistoryWhereUniqueInput | AdminHistoryWhereUniqueInput[]
    disconnect?: AdminHistoryWhereUniqueInput | AdminHistoryWhereUniqueInput[]
    delete?: AdminHistoryWhereUniqueInput | AdminHistoryWhereUniqueInput[]
    connect?: AdminHistoryWhereUniqueInput | AdminHistoryWhereUniqueInput[]
    update?: AdminHistoryUpdateWithWhereUniqueWithoutAdminInput | AdminHistoryUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminHistoryUpdateManyWithWhereWithoutAdminInput | AdminHistoryUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminHistoryScalarWhereInput | AdminHistoryScalarWhereInput[]
  }

  export type PartnerInfoUncheckedUpdateManyWithoutVerifiedByNestedInput = {
    create?: XOR<PartnerInfoCreateWithoutVerifiedByInput, PartnerInfoUncheckedCreateWithoutVerifiedByInput> | PartnerInfoCreateWithoutVerifiedByInput[] | PartnerInfoUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: PartnerInfoCreateOrConnectWithoutVerifiedByInput | PartnerInfoCreateOrConnectWithoutVerifiedByInput[]
    upsert?: PartnerInfoUpsertWithWhereUniqueWithoutVerifiedByInput | PartnerInfoUpsertWithWhereUniqueWithoutVerifiedByInput[]
    createMany?: PartnerInfoCreateManyVerifiedByInputEnvelope
    set?: PartnerInfoWhereUniqueInput | PartnerInfoWhereUniqueInput[]
    disconnect?: PartnerInfoWhereUniqueInput | PartnerInfoWhereUniqueInput[]
    delete?: PartnerInfoWhereUniqueInput | PartnerInfoWhereUniqueInput[]
    connect?: PartnerInfoWhereUniqueInput | PartnerInfoWhereUniqueInput[]
    update?: PartnerInfoUpdateWithWhereUniqueWithoutVerifiedByInput | PartnerInfoUpdateWithWhereUniqueWithoutVerifiedByInput[]
    updateMany?: PartnerInfoUpdateManyWithWhereWithoutVerifiedByInput | PartnerInfoUpdateManyWithWhereWithoutVerifiedByInput[]
    deleteMany?: PartnerInfoScalarWhereInput | PartnerInfoScalarWhereInput[]
  }

  export type ReviewServiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewServiceCreateWithoutUserInput, ReviewServiceUncheckedCreateWithoutUserInput> | ReviewServiceCreateWithoutUserInput[] | ReviewServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewServiceCreateOrConnectWithoutUserInput | ReviewServiceCreateOrConnectWithoutUserInput[]
    upsert?: ReviewServiceUpsertWithWhereUniqueWithoutUserInput | ReviewServiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewServiceCreateManyUserInputEnvelope
    set?: ReviewServiceWhereUniqueInput | ReviewServiceWhereUniqueInput[]
    disconnect?: ReviewServiceWhereUniqueInput | ReviewServiceWhereUniqueInput[]
    delete?: ReviewServiceWhereUniqueInput | ReviewServiceWhereUniqueInput[]
    connect?: ReviewServiceWhereUniqueInput | ReviewServiceWhereUniqueInput[]
    update?: ReviewServiceUpdateWithWhereUniqueWithoutUserInput | ReviewServiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewServiceUpdateManyWithWhereWithoutUserInput | ReviewServiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewServiceScalarWhereInput | ReviewServiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserCreateNestedOneWithoutPartnerInfoInput = {
    create?: XOR<UserCreateWithoutPartnerInfoInput, UserUncheckedCreateWithoutPartnerInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartnerInfoInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVerifiedPartnersInput = {
    create?: XOR<UserCreateWithoutVerifiedPartnersInput, UserUncheckedCreateWithoutVerifiedPartnersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedPartnersInput
    connect?: UserWhereUniqueInput
  }

  export type StaffCreateNestedManyWithoutPartnerInput = {
    create?: XOR<StaffCreateWithoutPartnerInput, StaffUncheckedCreateWithoutPartnerInput> | StaffCreateWithoutPartnerInput[] | StaffUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutPartnerInput | StaffCreateOrConnectWithoutPartnerInput[]
    createMany?: StaffCreateManyPartnerInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutPartnerInput = {
    create?: XOR<StaffCreateWithoutPartnerInput, StaffUncheckedCreateWithoutPartnerInput> | StaffCreateWithoutPartnerInput[] | StaffUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutPartnerInput | StaffCreateOrConnectWithoutPartnerInput[]
    createMany?: StaffCreateManyPartnerInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type EnumPartnerStatusFieldUpdateOperationsInput = {
    set?: $Enums.PartnerStatus
  }

  export type UserUpdateOneRequiredWithoutPartnerInfoNestedInput = {
    create?: XOR<UserCreateWithoutPartnerInfoInput, UserUncheckedCreateWithoutPartnerInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartnerInfoInput
    upsert?: UserUpsertWithoutPartnerInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPartnerInfoInput, UserUpdateWithoutPartnerInfoInput>, UserUncheckedUpdateWithoutPartnerInfoInput>
  }

  export type UserUpdateOneWithoutVerifiedPartnersNestedInput = {
    create?: XOR<UserCreateWithoutVerifiedPartnersInput, UserUncheckedCreateWithoutVerifiedPartnersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedPartnersInput
    upsert?: UserUpsertWithoutVerifiedPartnersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerifiedPartnersInput, UserUpdateWithoutVerifiedPartnersInput>, UserUncheckedUpdateWithoutVerifiedPartnersInput>
  }

  export type StaffUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<StaffCreateWithoutPartnerInput, StaffUncheckedCreateWithoutPartnerInput> | StaffCreateWithoutPartnerInput[] | StaffUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutPartnerInput | StaffCreateOrConnectWithoutPartnerInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutPartnerInput | StaffUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: StaffCreateManyPartnerInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutPartnerInput | StaffUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutPartnerInput | StaffUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutPartnerNestedInput = {
    create?: XOR<StaffCreateWithoutPartnerInput, StaffUncheckedCreateWithoutPartnerInput> | StaffCreateWithoutPartnerInput[] | StaffUncheckedCreateWithoutPartnerInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutPartnerInput | StaffCreateOrConnectWithoutPartnerInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutPartnerInput | StaffUpsertWithWhereUniqueWithoutPartnerInput[]
    createMany?: StaffCreateManyPartnerInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutPartnerInput | StaffUpdateWithWhereUniqueWithoutPartnerInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutPartnerInput | StaffUpdateManyWithWhereWithoutPartnerInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type PartnerInfoCreateNestedOneWithoutStaffMembersInput = {
    create?: XOR<PartnerInfoCreateWithoutStaffMembersInput, PartnerInfoUncheckedCreateWithoutStaffMembersInput>
    connectOrCreate?: PartnerInfoCreateOrConnectWithoutStaffMembersInput
    connect?: PartnerInfoWhereUniqueInput
  }

  export type PartnerInfoUpdateOneRequiredWithoutStaffMembersNestedInput = {
    create?: XOR<PartnerInfoCreateWithoutStaffMembersInput, PartnerInfoUncheckedCreateWithoutStaffMembersInput>
    connectOrCreate?: PartnerInfoCreateOrConnectWithoutStaffMembersInput
    upsert?: PartnerInfoUpsertWithoutStaffMembersInput
    connect?: PartnerInfoWhereUniqueInput
    update?: XOR<XOR<PartnerInfoUpdateToOneWithWhereWithoutStaffMembersInput, PartnerInfoUpdateWithoutStaffMembersInput>, PartnerInfoUncheckedUpdateWithoutStaffMembersInput>
  }

  export type UserCreateNestedOneWithoutReviewServicesInput = {
    create?: XOR<UserCreateWithoutReviewServicesInput, UserUncheckedCreateWithoutReviewServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewServicesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumServiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutReviewServicesNestedInput = {
    create?: XOR<UserCreateWithoutReviewServicesInput, UserUncheckedCreateWithoutReviewServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewServicesInput
    upsert?: UserUpsertWithoutReviewServicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewServicesInput, UserUpdateWithoutReviewServicesInput>, UserUncheckedUpdateWithoutReviewServicesInput>
  }

  export type UserCreateNestedOneWithoutUserHistoryInput = {
    create?: XOR<UserCreateWithoutUserHistoryInput, UserUncheckedCreateWithoutUserHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserHistoryNestedInput = {
    create?: XOR<UserCreateWithoutUserHistoryInput, UserUncheckedCreateWithoutUserHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserHistoryInput
    upsert?: UserUpsertWithoutUserHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserHistoryInput, UserUpdateWithoutUserHistoryInput>, UserUncheckedUpdateWithoutUserHistoryInput>
  }

  export type UserCreateNestedOneWithoutManagerLogsInput = {
    create?: XOR<UserCreateWithoutManagerLogsInput, UserUncheckedCreateWithoutManagerLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagerLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumManagerActionFieldUpdateOperationsInput = {
    set?: $Enums.ManagerAction
  }

  export type NullableEnumTargetTypeFieldUpdateOperationsInput = {
    set?: $Enums.TargetType | null
  }

  export type NullableEnumHttpMethodFieldUpdateOperationsInput = {
    set?: $Enums.HttpMethod | null
  }

  export type UserUpdateOneRequiredWithoutManagerLogsNestedInput = {
    create?: XOR<UserCreateWithoutManagerLogsInput, UserUncheckedCreateWithoutManagerLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagerLogsInput
    upsert?: UserUpsertWithoutManagerLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagerLogsInput, UserUpdateWithoutManagerLogsInput>, UserUncheckedUpdateWithoutManagerLogsInput>
  }

  export type UserCreateNestedOneWithoutAdminLogsInput = {
    create?: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAdminActionFieldUpdateOperationsInput = {
    set?: $Enums.AdminAction
  }

  export type UserUpdateOneRequiredWithoutAdminLogsNestedInput = {
    create?: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminLogsInput
    upsert?: UserUpsertWithoutAdminLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminLogsInput, UserUpdateWithoutAdminLogsInput>, UserUncheckedUpdateWithoutAdminLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPartnerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerStatus | EnumPartnerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PartnerStatus[]
    notIn?: $Enums.PartnerStatus[]
    not?: NestedEnumPartnerStatusFilter<$PrismaModel> | $Enums.PartnerStatus
  }

  export type NestedEnumPartnerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartnerStatus | EnumPartnerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PartnerStatus[]
    notIn?: $Enums.PartnerStatus[]
    not?: NestedEnumPartnerStatusWithAggregatesFilter<$PrismaModel> | $Enums.PartnerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPartnerStatusFilter<$PrismaModel>
    _max?: NestedEnumPartnerStatusFilter<$PrismaModel>
  }

  export type NestedEnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumManagerActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ManagerAction | EnumManagerActionFieldRefInput<$PrismaModel>
    in?: $Enums.ManagerAction[]
    notIn?: $Enums.ManagerAction[]
    not?: NestedEnumManagerActionFilter<$PrismaModel> | $Enums.ManagerAction
  }

  export type NestedEnumTargetTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TargetType | EnumTargetTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TargetType[] | null
    notIn?: $Enums.TargetType[] | null
    not?: NestedEnumTargetTypeNullableFilter<$PrismaModel> | $Enums.TargetType | null
  }

  export type NestedEnumHttpMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HttpMethod | EnumHttpMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.HttpMethod[] | null
    notIn?: $Enums.HttpMethod[] | null
    not?: NestedEnumHttpMethodNullableFilter<$PrismaModel> | $Enums.HttpMethod | null
  }

  export type NestedEnumManagerActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ManagerAction | EnumManagerActionFieldRefInput<$PrismaModel>
    in?: $Enums.ManagerAction[]
    notIn?: $Enums.ManagerAction[]
    not?: NestedEnumManagerActionWithAggregatesFilter<$PrismaModel> | $Enums.ManagerAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumManagerActionFilter<$PrismaModel>
    _max?: NestedEnumManagerActionFilter<$PrismaModel>
  }

  export type NestedEnumTargetTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TargetType | EnumTargetTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.TargetType[] | null
    notIn?: $Enums.TargetType[] | null
    not?: NestedEnumTargetTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.TargetType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTargetTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumTargetTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumHttpMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HttpMethod | EnumHttpMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.HttpMethod[] | null
    notIn?: $Enums.HttpMethod[] | null
    not?: NestedEnumHttpMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.HttpMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHttpMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumHttpMethodNullableFilter<$PrismaModel>
  }

  export type NestedEnumAdminActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminAction | EnumAdminActionFieldRefInput<$PrismaModel>
    in?: $Enums.AdminAction[]
    notIn?: $Enums.AdminAction[]
    not?: NestedEnumAdminActionFilter<$PrismaModel> | $Enums.AdminAction
  }

  export type NestedEnumAdminActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminAction | EnumAdminActionFieldRefInput<$PrismaModel>
    in?: $Enums.AdminAction[]
    notIn?: $Enums.AdminAction[]
    not?: NestedEnumAdminActionWithAggregatesFilter<$PrismaModel> | $Enums.AdminAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminActionFilter<$PrismaModel>
    _max?: NestedEnumAdminActionFilter<$PrismaModel>
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    birthday?: Date | string | null
    gender?: string | null
    location?: string | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    birthday?: Date | string | null
    gender?: string | null
    location?: string | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    isPublic?: boolean
    isDeleted?: boolean
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    isPublic?: boolean
    isDeleted?: boolean
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PartnerInfoCreateWithoutUserInput = {
    id?: string
    organization?: string | null
    licenseNumber?: string | null
    status?: $Enums.PartnerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    verifiedBy?: UserCreateNestedOneWithoutVerifiedPartnersInput
    staffMembers?: StaffCreateNestedManyWithoutPartnerInput
  }

  export type PartnerInfoUncheckedCreateWithoutUserInput = {
    id?: string
    organization?: string | null
    licenseNumber?: string | null
    status?: $Enums.PartnerStatus
    verifiedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffMembers?: StaffUncheckedCreateNestedManyWithoutPartnerInput
  }

  export type PartnerInfoCreateOrConnectWithoutUserInput = {
    where: PartnerInfoWhereUniqueInput
    create: XOR<PartnerInfoCreateWithoutUserInput, PartnerInfoUncheckedCreateWithoutUserInput>
  }

  export type UserHistoryCreateWithoutUserInput = {
    id?: string
    serviceId: string
    service: $Enums.ServiceType
    viewedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    serviceId: string
    service: $Enums.ServiceType
    viewedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserHistoryCreateOrConnectWithoutUserInput = {
    where: UserHistoryWhereUniqueInput
    create: XOR<UserHistoryCreateWithoutUserInput, UserHistoryUncheckedCreateWithoutUserInput>
  }

  export type UserHistoryCreateManyUserInputEnvelope = {
    data: UserHistoryCreateManyUserInput | UserHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ManagerHistoryCreateWithoutManagerInput = {
    id?: string
    action: $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: string | null
    targetType?: $Enums.TargetType | null
    description?: string | null
    httpMethod?: $Enums.HttpMethod | null
    httpUrl?: string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: Date | string
  }

  export type ManagerHistoryUncheckedCreateWithoutManagerInput = {
    id?: string
    action: $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: string | null
    targetType?: $Enums.TargetType | null
    description?: string | null
    httpMethod?: $Enums.HttpMethod | null
    httpUrl?: string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: Date | string
  }

  export type ManagerHistoryCreateOrConnectWithoutManagerInput = {
    where: ManagerHistoryWhereUniqueInput
    create: XOR<ManagerHistoryCreateWithoutManagerInput, ManagerHistoryUncheckedCreateWithoutManagerInput>
  }

  export type ManagerHistoryCreateManyManagerInputEnvelope = {
    data: ManagerHistoryCreateManyManagerInput | ManagerHistoryCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type AdminHistoryCreateWithoutAdminInput = {
    id?: string
    action: $Enums.AdminAction
    targetId?: string | null
    targetType?: $Enums.TargetType | null
    description?: string | null
    httpMethod?: $Enums.HttpMethod | null
    httpUrl?: string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: Date | string
  }

  export type AdminHistoryUncheckedCreateWithoutAdminInput = {
    id?: string
    action: $Enums.AdminAction
    targetId?: string | null
    targetType?: $Enums.TargetType | null
    description?: string | null
    httpMethod?: $Enums.HttpMethod | null
    httpUrl?: string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: Date | string
  }

  export type AdminHistoryCreateOrConnectWithoutAdminInput = {
    where: AdminHistoryWhereUniqueInput
    create: XOR<AdminHistoryCreateWithoutAdminInput, AdminHistoryUncheckedCreateWithoutAdminInput>
  }

  export type AdminHistoryCreateManyAdminInputEnvelope = {
    data: AdminHistoryCreateManyAdminInput | AdminHistoryCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type PartnerInfoCreateWithoutVerifiedByInput = {
    id?: string
    organization?: string | null
    licenseNumber?: string | null
    status?: $Enums.PartnerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPartnerInfoInput
    staffMembers?: StaffCreateNestedManyWithoutPartnerInput
  }

  export type PartnerInfoUncheckedCreateWithoutVerifiedByInput = {
    id?: string
    userId: string
    organization?: string | null
    licenseNumber?: string | null
    status?: $Enums.PartnerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    staffMembers?: StaffUncheckedCreateNestedManyWithoutPartnerInput
  }

  export type PartnerInfoCreateOrConnectWithoutVerifiedByInput = {
    where: PartnerInfoWhereUniqueInput
    create: XOR<PartnerInfoCreateWithoutVerifiedByInput, PartnerInfoUncheckedCreateWithoutVerifiedByInput>
  }

  export type PartnerInfoCreateManyVerifiedByInputEnvelope = {
    data: PartnerInfoCreateManyVerifiedByInput | PartnerInfoCreateManyVerifiedByInput[]
    skipDuplicates?: boolean
  }

  export type ReviewServiceCreateWithoutUserInput = {
    id?: string
    serviceId: string
    service: $Enums.ServiceType
    reviewStars: number
    comment?: string | null
    reviewedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewServiceUncheckedCreateWithoutUserInput = {
    id?: string
    serviceId: string
    service: $Enums.ServiceType
    reviewStars: number
    comment?: string | null
    reviewedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewServiceCreateOrConnectWithoutUserInput = {
    where: ReviewServiceWhereUniqueInput
    create: XOR<ReviewServiceCreateWithoutUserInput, ReviewServiceUncheckedCreateWithoutUserInput>
  }

  export type ReviewServiceCreateManyUserInputEnvelope = {
    data: ReviewServiceCreateManyUserInput | ReviewServiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    isPublic?: BoolFilter<"Post"> | boolean
    isDeleted?: BoolFilter<"Post"> | boolean
    isDisabled?: BoolFilter<"Post"> | boolean
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type PartnerInfoUpsertWithoutUserInput = {
    update: XOR<PartnerInfoUpdateWithoutUserInput, PartnerInfoUncheckedUpdateWithoutUserInput>
    create: XOR<PartnerInfoCreateWithoutUserInput, PartnerInfoUncheckedCreateWithoutUserInput>
    where?: PartnerInfoWhereInput
  }

  export type PartnerInfoUpdateToOneWithWhereWithoutUserInput = {
    where?: PartnerInfoWhereInput
    data: XOR<PartnerInfoUpdateWithoutUserInput, PartnerInfoUncheckedUpdateWithoutUserInput>
  }

  export type PartnerInfoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedBy?: UserUpdateOneWithoutVerifiedPartnersNestedInput
    staffMembers?: StaffUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerInfoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffMembers?: StaffUncheckedUpdateManyWithoutPartnerNestedInput
  }

  export type UserHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserHistoryWhereUniqueInput
    update: XOR<UserHistoryUpdateWithoutUserInput, UserHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserHistoryCreateWithoutUserInput, UserHistoryUncheckedCreateWithoutUserInput>
  }

  export type UserHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserHistoryWhereUniqueInput
    data: XOR<UserHistoryUpdateWithoutUserInput, UserHistoryUncheckedUpdateWithoutUserInput>
  }

  export type UserHistoryUpdateManyWithWhereWithoutUserInput = {
    where: UserHistoryScalarWhereInput
    data: XOR<UserHistoryUpdateManyMutationInput, UserHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserHistoryScalarWhereInput = {
    AND?: UserHistoryScalarWhereInput | UserHistoryScalarWhereInput[]
    OR?: UserHistoryScalarWhereInput[]
    NOT?: UserHistoryScalarWhereInput | UserHistoryScalarWhereInput[]
    id?: StringFilter<"UserHistory"> | string
    userId?: StringFilter<"UserHistory"> | string
    serviceId?: StringFilter<"UserHistory"> | string
    service?: EnumServiceTypeFilter<"UserHistory"> | $Enums.ServiceType
    viewedAt?: DateTimeFilter<"UserHistory"> | Date | string
    metadata?: JsonNullableFilter<"UserHistory">
  }

  export type ManagerHistoryUpsertWithWhereUniqueWithoutManagerInput = {
    where: ManagerHistoryWhereUniqueInput
    update: XOR<ManagerHistoryUpdateWithoutManagerInput, ManagerHistoryUncheckedUpdateWithoutManagerInput>
    create: XOR<ManagerHistoryCreateWithoutManagerInput, ManagerHistoryUncheckedCreateWithoutManagerInput>
  }

  export type ManagerHistoryUpdateWithWhereUniqueWithoutManagerInput = {
    where: ManagerHistoryWhereUniqueInput
    data: XOR<ManagerHistoryUpdateWithoutManagerInput, ManagerHistoryUncheckedUpdateWithoutManagerInput>
  }

  export type ManagerHistoryUpdateManyWithWhereWithoutManagerInput = {
    where: ManagerHistoryScalarWhereInput
    data: XOR<ManagerHistoryUpdateManyMutationInput, ManagerHistoryUncheckedUpdateManyWithoutManagerInput>
  }

  export type ManagerHistoryScalarWhereInput = {
    AND?: ManagerHistoryScalarWhereInput | ManagerHistoryScalarWhereInput[]
    OR?: ManagerHistoryScalarWhereInput[]
    NOT?: ManagerHistoryScalarWhereInput | ManagerHistoryScalarWhereInput[]
    id?: StringFilter<"ManagerHistory"> | string
    managerId?: StringFilter<"ManagerHistory"> | string
    action?: EnumManagerActionFilter<"ManagerHistory"> | $Enums.ManagerAction
    actionScope?: JsonNullableFilter<"ManagerHistory">
    targetId?: StringNullableFilter<"ManagerHistory"> | string | null
    targetType?: EnumTargetTypeNullableFilter<"ManagerHistory"> | $Enums.TargetType | null
    description?: StringNullableFilter<"ManagerHistory"> | string | null
    httpMethod?: EnumHttpMethodNullableFilter<"ManagerHistory"> | $Enums.HttpMethod | null
    httpUrl?: StringNullableFilter<"ManagerHistory"> | string | null
    httpQuery?: JsonNullableFilter<"ManagerHistory">
    httpParams?: JsonNullableFilter<"ManagerHistory">
    httpBody?: JsonNullableFilter<"ManagerHistory">
    httpHeaders?: JsonNullableFilter<"ManagerHistory">
    actedAt?: DateTimeFilter<"ManagerHistory"> | Date | string
  }

  export type AdminHistoryUpsertWithWhereUniqueWithoutAdminInput = {
    where: AdminHistoryWhereUniqueInput
    update: XOR<AdminHistoryUpdateWithoutAdminInput, AdminHistoryUncheckedUpdateWithoutAdminInput>
    create: XOR<AdminHistoryCreateWithoutAdminInput, AdminHistoryUncheckedCreateWithoutAdminInput>
  }

  export type AdminHistoryUpdateWithWhereUniqueWithoutAdminInput = {
    where: AdminHistoryWhereUniqueInput
    data: XOR<AdminHistoryUpdateWithoutAdminInput, AdminHistoryUncheckedUpdateWithoutAdminInput>
  }

  export type AdminHistoryUpdateManyWithWhereWithoutAdminInput = {
    where: AdminHistoryScalarWhereInput
    data: XOR<AdminHistoryUpdateManyMutationInput, AdminHistoryUncheckedUpdateManyWithoutAdminInput>
  }

  export type AdminHistoryScalarWhereInput = {
    AND?: AdminHistoryScalarWhereInput | AdminHistoryScalarWhereInput[]
    OR?: AdminHistoryScalarWhereInput[]
    NOT?: AdminHistoryScalarWhereInput | AdminHistoryScalarWhereInput[]
    id?: StringFilter<"AdminHistory"> | string
    adminId?: StringFilter<"AdminHistory"> | string
    action?: EnumAdminActionFilter<"AdminHistory"> | $Enums.AdminAction
    targetId?: StringNullableFilter<"AdminHistory"> | string | null
    targetType?: EnumTargetTypeNullableFilter<"AdminHistory"> | $Enums.TargetType | null
    description?: StringNullableFilter<"AdminHistory"> | string | null
    httpMethod?: EnumHttpMethodNullableFilter<"AdminHistory"> | $Enums.HttpMethod | null
    httpUrl?: StringNullableFilter<"AdminHistory"> | string | null
    httpQuery?: JsonNullableFilter<"AdminHistory">
    httpParams?: JsonNullableFilter<"AdminHistory">
    httpBody?: JsonNullableFilter<"AdminHistory">
    httpHeaders?: JsonNullableFilter<"AdminHistory">
    actedAt?: DateTimeFilter<"AdminHistory"> | Date | string
  }

  export type PartnerInfoUpsertWithWhereUniqueWithoutVerifiedByInput = {
    where: PartnerInfoWhereUniqueInput
    update: XOR<PartnerInfoUpdateWithoutVerifiedByInput, PartnerInfoUncheckedUpdateWithoutVerifiedByInput>
    create: XOR<PartnerInfoCreateWithoutVerifiedByInput, PartnerInfoUncheckedCreateWithoutVerifiedByInput>
  }

  export type PartnerInfoUpdateWithWhereUniqueWithoutVerifiedByInput = {
    where: PartnerInfoWhereUniqueInput
    data: XOR<PartnerInfoUpdateWithoutVerifiedByInput, PartnerInfoUncheckedUpdateWithoutVerifiedByInput>
  }

  export type PartnerInfoUpdateManyWithWhereWithoutVerifiedByInput = {
    where: PartnerInfoScalarWhereInput
    data: XOR<PartnerInfoUpdateManyMutationInput, PartnerInfoUncheckedUpdateManyWithoutVerifiedByInput>
  }

  export type PartnerInfoScalarWhereInput = {
    AND?: PartnerInfoScalarWhereInput | PartnerInfoScalarWhereInput[]
    OR?: PartnerInfoScalarWhereInput[]
    NOT?: PartnerInfoScalarWhereInput | PartnerInfoScalarWhereInput[]
    id?: StringFilter<"PartnerInfo"> | string
    userId?: StringFilter<"PartnerInfo"> | string
    organization?: StringNullableFilter<"PartnerInfo"> | string | null
    licenseNumber?: StringNullableFilter<"PartnerInfo"> | string | null
    status?: EnumPartnerStatusFilter<"PartnerInfo"> | $Enums.PartnerStatus
    verifiedById?: StringNullableFilter<"PartnerInfo"> | string | null
    createdAt?: DateTimeFilter<"PartnerInfo"> | Date | string
    updatedAt?: DateTimeFilter<"PartnerInfo"> | Date | string
  }

  export type ReviewServiceUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewServiceWhereUniqueInput
    update: XOR<ReviewServiceUpdateWithoutUserInput, ReviewServiceUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewServiceCreateWithoutUserInput, ReviewServiceUncheckedCreateWithoutUserInput>
  }

  export type ReviewServiceUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewServiceWhereUniqueInput
    data: XOR<ReviewServiceUpdateWithoutUserInput, ReviewServiceUncheckedUpdateWithoutUserInput>
  }

  export type ReviewServiceUpdateManyWithWhereWithoutUserInput = {
    where: ReviewServiceScalarWhereInput
    data: XOR<ReviewServiceUpdateManyMutationInput, ReviewServiceUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewServiceScalarWhereInput = {
    AND?: ReviewServiceScalarWhereInput | ReviewServiceScalarWhereInput[]
    OR?: ReviewServiceScalarWhereInput[]
    NOT?: ReviewServiceScalarWhereInput | ReviewServiceScalarWhereInput[]
    id?: StringFilter<"ReviewService"> | string
    userId?: StringFilter<"ReviewService"> | string
    serviceId?: StringFilter<"ReviewService"> | string
    service?: EnumServiceTypeFilter<"ReviewService"> | $Enums.ServiceType
    reviewStars?: IntFilter<"ReviewService"> | number
    comment?: StringNullableFilter<"ReviewService"> | string | null
    reviewedAt?: DateTimeFilter<"ReviewService"> | Date | string
    metadata?: JsonNullableFilter<"ReviewService">
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoUncheckedCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryUncheckedCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryUncheckedCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryUncheckedCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUncheckedUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUncheckedUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUncheckedUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUncheckedUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    partnerInfo?: PartnerInfoCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    partnerInfo?: PartnerInfoUncheckedCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryUncheckedCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryUncheckedCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryUncheckedCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    partnerInfo?: PartnerInfoUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    partnerInfo?: PartnerInfoUncheckedUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUncheckedUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUncheckedUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUncheckedUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPartnerInfoInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userHistory?: UserHistoryCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPartnerInfoInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userHistory?: UserHistoryUncheckedCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryUncheckedCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryUncheckedCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPartnerInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPartnerInfoInput, UserUncheckedCreateWithoutPartnerInfoInput>
  }

  export type UserCreateWithoutVerifiedPartnersInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryCreateNestedManyWithoutAdminInput
    reviewServices?: ReviewServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerifiedPartnersInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoUncheckedCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryUncheckedCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryUncheckedCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryUncheckedCreateNestedManyWithoutAdminInput
    reviewServices?: ReviewServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerifiedPartnersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerifiedPartnersInput, UserUncheckedCreateWithoutVerifiedPartnersInput>
  }

  export type StaffCreateWithoutPartnerInput = {
    id?: string
    name: string
    position: string
    email: string
    phoneNumber: string
  }

  export type StaffUncheckedCreateWithoutPartnerInput = {
    id?: string
    name: string
    position: string
    email: string
    phoneNumber: string
  }

  export type StaffCreateOrConnectWithoutPartnerInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutPartnerInput, StaffUncheckedCreateWithoutPartnerInput>
  }

  export type StaffCreateManyPartnerInputEnvelope = {
    data: StaffCreateManyPartnerInput | StaffCreateManyPartnerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPartnerInfoInput = {
    update: XOR<UserUpdateWithoutPartnerInfoInput, UserUncheckedUpdateWithoutPartnerInfoInput>
    create: XOR<UserCreateWithoutPartnerInfoInput, UserUncheckedCreateWithoutPartnerInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPartnerInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPartnerInfoInput, UserUncheckedUpdateWithoutPartnerInfoInput>
  }

  export type UserUpdateWithoutPartnerInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userHistory?: UserHistoryUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPartnerInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userHistory?: UserHistoryUncheckedUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUncheckedUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUncheckedUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutVerifiedPartnersInput = {
    update: XOR<UserUpdateWithoutVerifiedPartnersInput, UserUncheckedUpdateWithoutVerifiedPartnersInput>
    create: XOR<UserCreateWithoutVerifiedPartnersInput, UserUncheckedCreateWithoutVerifiedPartnersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerifiedPartnersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerifiedPartnersInput, UserUncheckedUpdateWithoutVerifiedPartnersInput>
  }

  export type UserUpdateWithoutVerifiedPartnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUpdateManyWithoutAdminNestedInput
    reviewServices?: ReviewServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerifiedPartnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUncheckedUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUncheckedUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUncheckedUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUncheckedUpdateManyWithoutAdminNestedInput
    reviewServices?: ReviewServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StaffUpsertWithWhereUniqueWithoutPartnerInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutPartnerInput, StaffUncheckedUpdateWithoutPartnerInput>
    create: XOR<StaffCreateWithoutPartnerInput, StaffUncheckedCreateWithoutPartnerInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutPartnerInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutPartnerInput, StaffUncheckedUpdateWithoutPartnerInput>
  }

  export type StaffUpdateManyWithWhereWithoutPartnerInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutPartnerInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[]
    OR?: StaffScalarWhereInput[]
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[]
    id?: StringFilter<"Staff"> | string
    partnerId?: StringFilter<"Staff"> | string
    name?: StringFilter<"Staff"> | string
    position?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    phoneNumber?: StringFilter<"Staff"> | string
  }

  export type PartnerInfoCreateWithoutStaffMembersInput = {
    id?: string
    organization?: string | null
    licenseNumber?: string | null
    status?: $Enums.PartnerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPartnerInfoInput
    verifiedBy?: UserCreateNestedOneWithoutVerifiedPartnersInput
  }

  export type PartnerInfoUncheckedCreateWithoutStaffMembersInput = {
    id?: string
    userId: string
    organization?: string | null
    licenseNumber?: string | null
    status?: $Enums.PartnerStatus
    verifiedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartnerInfoCreateOrConnectWithoutStaffMembersInput = {
    where: PartnerInfoWhereUniqueInput
    create: XOR<PartnerInfoCreateWithoutStaffMembersInput, PartnerInfoUncheckedCreateWithoutStaffMembersInput>
  }

  export type PartnerInfoUpsertWithoutStaffMembersInput = {
    update: XOR<PartnerInfoUpdateWithoutStaffMembersInput, PartnerInfoUncheckedUpdateWithoutStaffMembersInput>
    create: XOR<PartnerInfoCreateWithoutStaffMembersInput, PartnerInfoUncheckedCreateWithoutStaffMembersInput>
    where?: PartnerInfoWhereInput
  }

  export type PartnerInfoUpdateToOneWithWhereWithoutStaffMembersInput = {
    where?: PartnerInfoWhereInput
    data: XOR<PartnerInfoUpdateWithoutStaffMembersInput, PartnerInfoUncheckedUpdateWithoutStaffMembersInput>
  }

  export type PartnerInfoUpdateWithoutStaffMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPartnerInfoNestedInput
    verifiedBy?: UserUpdateOneWithoutVerifiedPartnersNestedInput
  }

  export type PartnerInfoUncheckedUpdateWithoutStaffMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutReviewServicesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoCreateNestedManyWithoutVerifiedByInput
  }

  export type UserUncheckedCreateWithoutReviewServicesInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoUncheckedCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryUncheckedCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryUncheckedCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryUncheckedCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoUncheckedCreateNestedManyWithoutVerifiedByInput
  }

  export type UserCreateOrConnectWithoutReviewServicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewServicesInput, UserUncheckedCreateWithoutReviewServicesInput>
  }

  export type UserUpsertWithoutReviewServicesInput = {
    update: XOR<UserUpdateWithoutReviewServicesInput, UserUncheckedUpdateWithoutReviewServicesInput>
    create: XOR<UserCreateWithoutReviewServicesInput, UserUncheckedCreateWithoutReviewServicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewServicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewServicesInput, UserUncheckedUpdateWithoutReviewServicesInput>
  }

  export type UserUpdateWithoutReviewServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUpdateManyWithoutVerifiedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUncheckedUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUncheckedUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUncheckedUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUncheckedUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUncheckedUpdateManyWithoutVerifiedByNestedInput
  }

  export type UserCreateWithoutUserHistoryInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoCreateNestedOneWithoutUserInput
    managerLogs?: ManagerHistoryCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserHistoryInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoUncheckedCreateNestedOneWithoutUserInput
    managerLogs?: ManagerHistoryUncheckedCreateNestedManyWithoutManagerInput
    adminLogs?: AdminHistoryUncheckedCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserHistoryInput, UserUncheckedCreateWithoutUserHistoryInput>
  }

  export type UserUpsertWithoutUserHistoryInput = {
    update: XOR<UserUpdateWithoutUserHistoryInput, UserUncheckedUpdateWithoutUserHistoryInput>
    create: XOR<UserCreateWithoutUserHistoryInput, UserUncheckedCreateWithoutUserHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserHistoryInput, UserUncheckedUpdateWithoutUserHistoryInput>
  }

  export type UserUpdateWithoutUserHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUpdateOneWithoutUserNestedInput
    managerLogs?: ManagerHistoryUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUncheckedUpdateOneWithoutUserNestedInput
    managerLogs?: ManagerHistoryUncheckedUpdateManyWithoutManagerNestedInput
    adminLogs?: AdminHistoryUncheckedUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutManagerLogsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryCreateNestedManyWithoutUserInput
    adminLogs?: AdminHistoryCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagerLogsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoUncheckedCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryUncheckedCreateNestedManyWithoutUserInput
    adminLogs?: AdminHistoryUncheckedCreateNestedManyWithoutAdminInput
    verifiedPartners?: PartnerInfoUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagerLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerLogsInput, UserUncheckedCreateWithoutManagerLogsInput>
  }

  export type UserUpsertWithoutManagerLogsInput = {
    update: XOR<UserUpdateWithoutManagerLogsInput, UserUncheckedUpdateWithoutManagerLogsInput>
    create: XOR<UserCreateWithoutManagerLogsInput, UserUncheckedCreateWithoutManagerLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagerLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagerLogsInput, UserUncheckedUpdateWithoutManagerLogsInput>
  }

  export type UserUpdateWithoutManagerLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUpdateManyWithoutUserNestedInput
    adminLogs?: AdminHistoryUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUncheckedUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUncheckedUpdateManyWithoutUserNestedInput
    adminLogs?: AdminHistoryUncheckedUpdateManyWithoutAdminNestedInput
    verifiedPartners?: PartnerInfoUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAdminLogsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryCreateNestedManyWithoutManagerInput
    verifiedPartners?: PartnerInfoCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminLogsInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phoneNumber?: string | null
    avatar?: string | null
    language?: string | null
    theme?: string | null
    isBanned?: boolean
    isDeleted?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    partnerInfo?: PartnerInfoUncheckedCreateNestedOneWithoutUserInput
    userHistory?: UserHistoryUncheckedCreateNestedManyWithoutUserInput
    managerLogs?: ManagerHistoryUncheckedCreateNestedManyWithoutManagerInput
    verifiedPartners?: PartnerInfoUncheckedCreateNestedManyWithoutVerifiedByInput
    reviewServices?: ReviewServiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
  }

  export type UserUpsertWithoutAdminLogsInput = {
    update: XOR<UserUpdateWithoutAdminLogsInput, UserUncheckedUpdateWithoutAdminLogsInput>
    create: XOR<UserCreateWithoutAdminLogsInput, UserUncheckedCreateWithoutAdminLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminLogsInput, UserUncheckedUpdateWithoutAdminLogsInput>
  }

  export type UserUpdateWithoutAdminLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUpdateManyWithoutManagerNestedInput
    verifiedPartners?: PartnerInfoUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    partnerInfo?: PartnerInfoUncheckedUpdateOneWithoutUserNestedInput
    userHistory?: UserHistoryUncheckedUpdateManyWithoutUserNestedInput
    managerLogs?: ManagerHistoryUncheckedUpdateManyWithoutManagerNestedInput
    verifiedPartners?: PartnerInfoUncheckedUpdateManyWithoutVerifiedByNestedInput
    reviewServices?: ReviewServiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateManyUserInput = {
    id?: string
    title: string
    content: string
    imageUrl?: string | null
    isPublic?: boolean
    isDeleted?: boolean
    isDisabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserHistoryCreateManyUserInput = {
    id?: string
    serviceId: string
    service: $Enums.ServiceType
    viewedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ManagerHistoryCreateManyManagerInput = {
    id?: string
    action: $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: string | null
    targetType?: $Enums.TargetType | null
    description?: string | null
    httpMethod?: $Enums.HttpMethod | null
    httpUrl?: string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: Date | string
  }

  export type AdminHistoryCreateManyAdminInput = {
    id?: string
    action: $Enums.AdminAction
    targetId?: string | null
    targetType?: $Enums.TargetType | null
    description?: string | null
    httpMethod?: $Enums.HttpMethod | null
    httpUrl?: string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: Date | string
  }

  export type PartnerInfoCreateManyVerifiedByInput = {
    id?: string
    userId: string
    organization?: string | null
    licenseNumber?: string | null
    status?: $Enums.PartnerStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewServiceCreateManyUserInput = {
    id?: string
    serviceId: string
    service: $Enums.ServiceType
    reviewStars: number
    comment?: string | null
    reviewedAt?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    isDisabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ManagerHistoryUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumManagerActionFieldUpdateOperationsInput | $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerHistoryUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumManagerActionFieldUpdateOperationsInput | $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerHistoryUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumManagerActionFieldUpdateOperationsInput | $Enums.ManagerAction
    actionScope?: NullableJsonNullValueInput | InputJsonValue
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminHistoryUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminHistoryUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminHistoryUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumAdminActionFieldUpdateOperationsInput | $Enums.AdminAction
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    targetType?: NullableEnumTargetTypeFieldUpdateOperationsInput | $Enums.TargetType | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableEnumHttpMethodFieldUpdateOperationsInput | $Enums.HttpMethod | null
    httpUrl?: NullableStringFieldUpdateOperationsInput | string | null
    httpQuery?: NullableJsonNullValueInput | InputJsonValue
    httpParams?: NullableJsonNullValueInput | InputJsonValue
    httpBody?: NullableJsonNullValueInput | InputJsonValue
    httpHeaders?: NullableJsonNullValueInput | InputJsonValue
    actedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerInfoUpdateWithoutVerifiedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPartnerInfoNestedInput
    staffMembers?: StaffUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerInfoUncheckedUpdateWithoutVerifiedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffMembers?: StaffUncheckedUpdateManyWithoutPartnerNestedInput
  }

  export type PartnerInfoUncheckedUpdateManyWithoutVerifiedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPartnerStatusFieldUpdateOperationsInput | $Enums.PartnerStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewServiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    reviewStars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewServiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    reviewStars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReviewServiceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    reviewStars?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StaffCreateManyPartnerInput = {
    id?: string
    name: string
    position: string
    email: string
    phoneNumber: string
  }

  export type StaffUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type StaffUncheckedUpdateWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type StaffUncheckedUpdateManyWithoutPartnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}