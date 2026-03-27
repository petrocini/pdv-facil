
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
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model addon_groups
 * 
 */
export type addon_groups = $Result.DefaultSelection<Prisma.$addon_groupsPayload>
/**
 * Model addons
 * 
 */
export type addons = $Result.DefaultSelection<Prisma.$addonsPayload>
/**
 * Model product_addon_groups
 * 
 */
export type product_addon_groups = $Result.DefaultSelection<Prisma.$product_addon_groupsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model order_items
 * 
 */
export type order_items = $Result.DefaultSelection<Prisma.$order_itemsPayload>
/**
 * Model order_item_addons
 * 
 */
export type order_item_addons = $Result.DefaultSelection<Prisma.$order_item_addonsPayload>
/**
 * Model settings
 * 
 */
export type settings = $Result.DefaultSelection<Prisma.$settingsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs>;

  /**
   * `prisma.addon_groups`: Exposes CRUD operations for the **addon_groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addon_groups
    * const addon_groups = await prisma.addon_groups.findMany()
    * ```
    */
  get addon_groups(): Prisma.addon_groupsDelegate<ExtArgs>;

  /**
   * `prisma.addons`: Exposes CRUD operations for the **addons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addons
    * const addons = await prisma.addons.findMany()
    * ```
    */
  get addons(): Prisma.addonsDelegate<ExtArgs>;

  /**
   * `prisma.product_addon_groups`: Exposes CRUD operations for the **product_addon_groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_addon_groups
    * const product_addon_groups = await prisma.product_addon_groups.findMany()
    * ```
    */
  get product_addon_groups(): Prisma.product_addon_groupsDelegate<ExtArgs>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<ExtArgs>;

  /**
   * `prisma.order_item_addons`: Exposes CRUD operations for the **order_item_addons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_item_addons
    * const order_item_addons = await prisma.order_item_addons.findMany()
    * ```
    */
  get order_item_addons(): Prisma.order_item_addonsDelegate<ExtArgs>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.settingsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    categories: 'categories',
    products: 'products',
    addon_groups: 'addon_groups',
    addons: 'addons',
    product_addon_groups: 'product_addon_groups',
    orders: 'orders',
    order_items: 'order_items',
    order_item_addons: 'order_item_addons',
    settings: 'settings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "categories" | "products" | "addon_groups" | "addons" | "product_addon_groups" | "orders" | "order_items" | "order_item_addons" | "settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      addon_groups: {
        payload: Prisma.$addon_groupsPayload<ExtArgs>
        fields: Prisma.addon_groupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addon_groupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addon_groupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addon_groupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addon_groupsPayload>
          }
          findFirst: {
            args: Prisma.addon_groupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addon_groupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addon_groupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addon_groupsPayload>
          }
          findMany: {
            args: Prisma.addon_groupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addon_groupsPayload>[]
          }
          create: {
            args: Prisma.addon_groupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addon_groupsPayload>
          }
          createMany: {
            args: Prisma.addon_groupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.addon_groupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addon_groupsPayload>[]
          }
          delete: {
            args: Prisma.addon_groupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addon_groupsPayload>
          }
          update: {
            args: Prisma.addon_groupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addon_groupsPayload>
          }
          deleteMany: {
            args: Prisma.addon_groupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addon_groupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.addon_groupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addon_groupsPayload>
          }
          aggregate: {
            args: Prisma.Addon_groupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddon_groups>
          }
          groupBy: {
            args: Prisma.addon_groupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Addon_groupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.addon_groupsCountArgs<ExtArgs>
            result: $Utils.Optional<Addon_groupsCountAggregateOutputType> | number
          }
        }
      }
      addons: {
        payload: Prisma.$addonsPayload<ExtArgs>
        fields: Prisma.addonsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addonsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addonsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addonsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addonsPayload>
          }
          findFirst: {
            args: Prisma.addonsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addonsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addonsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addonsPayload>
          }
          findMany: {
            args: Prisma.addonsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addonsPayload>[]
          }
          create: {
            args: Prisma.addonsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addonsPayload>
          }
          createMany: {
            args: Prisma.addonsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.addonsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addonsPayload>[]
          }
          delete: {
            args: Prisma.addonsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addonsPayload>
          }
          update: {
            args: Prisma.addonsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addonsPayload>
          }
          deleteMany: {
            args: Prisma.addonsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addonsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.addonsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addonsPayload>
          }
          aggregate: {
            args: Prisma.AddonsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddons>
          }
          groupBy: {
            args: Prisma.addonsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddonsGroupByOutputType>[]
          }
          count: {
            args: Prisma.addonsCountArgs<ExtArgs>
            result: $Utils.Optional<AddonsCountAggregateOutputType> | number
          }
        }
      }
      product_addon_groups: {
        payload: Prisma.$product_addon_groupsPayload<ExtArgs>
        fields: Prisma.product_addon_groupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_addon_groupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_addon_groupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_addon_groupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_addon_groupsPayload>
          }
          findFirst: {
            args: Prisma.product_addon_groupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_addon_groupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_addon_groupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_addon_groupsPayload>
          }
          findMany: {
            args: Prisma.product_addon_groupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_addon_groupsPayload>[]
          }
          create: {
            args: Prisma.product_addon_groupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_addon_groupsPayload>
          }
          createMany: {
            args: Prisma.product_addon_groupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_addon_groupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_addon_groupsPayload>[]
          }
          delete: {
            args: Prisma.product_addon_groupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_addon_groupsPayload>
          }
          update: {
            args: Prisma.product_addon_groupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_addon_groupsPayload>
          }
          deleteMany: {
            args: Prisma.product_addon_groupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_addon_groupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.product_addon_groupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_addon_groupsPayload>
          }
          aggregate: {
            args: Prisma.Product_addon_groupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_addon_groups>
          }
          groupBy: {
            args: Prisma.product_addon_groupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_addon_groupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_addon_groupsCountArgs<ExtArgs>
            result: $Utils.Optional<Product_addon_groupsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      order_items: {
        payload: Prisma.$order_itemsPayload<ExtArgs>
        fields: Prisma.order_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findFirst: {
            args: Prisma.order_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findMany: {
            args: Prisma.order_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          create: {
            args: Prisma.order_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          createMany: {
            args: Prisma.order_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          delete: {
            args: Prisma.order_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          update: {
            args: Prisma.order_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          deleteMany: {
            args: Prisma.order_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          aggregate: {
            args: Prisma.Order_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_items>
          }
          groupBy: {
            args: Prisma.order_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsCountAggregateOutputType> | number
          }
        }
      }
      order_item_addons: {
        payload: Prisma.$order_item_addonsPayload<ExtArgs>
        fields: Prisma.order_item_addonsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_item_addonsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_item_addonsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_item_addonsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_item_addonsPayload>
          }
          findFirst: {
            args: Prisma.order_item_addonsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_item_addonsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_item_addonsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_item_addonsPayload>
          }
          findMany: {
            args: Prisma.order_item_addonsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_item_addonsPayload>[]
          }
          create: {
            args: Prisma.order_item_addonsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_item_addonsPayload>
          }
          createMany: {
            args: Prisma.order_item_addonsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_item_addonsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_item_addonsPayload>[]
          }
          delete: {
            args: Prisma.order_item_addonsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_item_addonsPayload>
          }
          update: {
            args: Prisma.order_item_addonsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_item_addonsPayload>
          }
          deleteMany: {
            args: Prisma.order_item_addonsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_item_addonsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.order_item_addonsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_item_addonsPayload>
          }
          aggregate: {
            args: Prisma.Order_item_addonsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_item_addons>
          }
          groupBy: {
            args: Prisma.order_item_addonsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_item_addonsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_item_addonsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_item_addonsCountAggregateOutputType> | number
          }
        }
      }
      settings: {
        payload: Prisma.$settingsPayload<ExtArgs>
        fields: Prisma.settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findFirst: {
            args: Prisma.settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findMany: {
            args: Prisma.settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          create: {
            args: Prisma.settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          createMany: {
            args: Prisma.settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.settingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          delete: {
            args: Prisma.settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          update: {
            args: Prisma.settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          deleteMany: {
            args: Prisma.settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.settingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    product_addon_groups: number
    order_items: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product_addon_groups?: boolean | ProductsCountOutputTypeCountProduct_addon_groupsArgs
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_addon_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_addon_groupsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type Addon_groupsCountOutputType
   */

  export type Addon_groupsCountOutputType = {
    addons: number
    product_addon_groups: number
  }

  export type Addon_groupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addons?: boolean | Addon_groupsCountOutputTypeCountAddonsArgs
    product_addon_groups?: boolean | Addon_groupsCountOutputTypeCountProduct_addon_groupsArgs
  }

  // Custom InputTypes
  /**
   * Addon_groupsCountOutputType without action
   */
  export type Addon_groupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addon_groupsCountOutputType
     */
    select?: Addon_groupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Addon_groupsCountOutputType without action
   */
  export type Addon_groupsCountOutputTypeCountAddonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addonsWhereInput
  }

  /**
   * Addon_groupsCountOutputType without action
   */
  export type Addon_groupsCountOutputTypeCountProduct_addon_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_addon_groupsWhereInput
  }


  /**
   * Count Type AddonsCountOutputType
   */

  export type AddonsCountOutputType = {
    order_item_addons: number
  }

  export type AddonsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item_addons?: boolean | AddonsCountOutputTypeCountOrder_item_addonsArgs
  }

  // Custom InputTypes
  /**
   * AddonsCountOutputType without action
   */
  export type AddonsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddonsCountOutputType
     */
    select?: AddonsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddonsCountOutputType without action
   */
  export type AddonsCountOutputTypeCountOrder_item_addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_item_addonsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type Order_itemsCountOutputType
   */

  export type Order_itemsCountOutputType = {
    order_item_addons: number
  }

  export type Order_itemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item_addons?: boolean | Order_itemsCountOutputTypeCountOrder_item_addonsArgs
  }

  // Custom InputTypes
  /**
   * Order_itemsCountOutputType without action
   */
  export type Order_itemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order_itemsCountOutputType
     */
    select?: Order_itemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Order_itemsCountOutputType without action
   */
  export type Order_itemsCountOutputTypeCountOrder_item_addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_item_addonsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image_path: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image_path: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image_path: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image_path?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image_path?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image_path?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    name: string
    description: string | null
    image_path: string | null
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image_path?: boolean
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image_path?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image_path?: boolean
  }

  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      image_path: string | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the categories model
   */ 
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'String'>
    readonly name: FieldRef<"categories", 'String'>
    readonly description: FieldRef<"categories", 'String'>
    readonly image_path: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    base_price: Decimal | null
  }

  export type ProductsSumAggregateOutputType = {
    base_price: Decimal | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    category_id: string | null
    name: string | null
    description: string | null
    base_price: Decimal | null
    image_path: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    category_id: string | null
    name: string | null
    description: string | null
    base_price: Decimal | null
    image_path: string | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    category_id: number
    name: number
    description: number
    base_price: number
    image_path: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    base_price?: true
  }

  export type ProductsSumAggregateInputType = {
    base_price?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    description?: true
    base_price?: true
    image_path?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    description?: true
    base_price?: true
    image_path?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    category_id?: true
    name?: true
    description?: true
    base_price?: true
    image_path?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    category_id: string
    name: string
    description: string | null
    base_price: Decimal
    image_path: string | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    base_price?: boolean
    image_path?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    product_addon_groups?: boolean | products$product_addon_groupsArgs<ExtArgs>
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    base_price?: boolean
    image_path?: boolean
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    category_id?: boolean
    name?: boolean
    description?: boolean
    base_price?: boolean
    image_path?: boolean
  }

  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
    product_addon_groups?: boolean | products$product_addon_groupsArgs<ExtArgs>
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      category: Prisma.$categoriesPayload<ExtArgs>
      product_addon_groups: Prisma.$product_addon_groupsPayload<ExtArgs>[]
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category_id: string
      name: string
      description: string | null
      base_price: Prisma.Decimal
      image_path: string | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product_addon_groups<T extends products$product_addon_groupsArgs<ExtArgs> = {}>(args?: Subset<T, products$product_addon_groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_addon_groupsPayload<ExtArgs>, T, "findMany"> | Null>
    order_items<T extends products$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the products model
   */ 
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'String'>
    readonly category_id: FieldRef<"products", 'String'>
    readonly name: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly base_price: FieldRef<"products", 'Decimal'>
    readonly image_path: FieldRef<"products", 'String'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
  }

  /**
   * products.product_addon_groups
   */
  export type products$product_addon_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsInclude<ExtArgs> | null
    where?: product_addon_groupsWhereInput
    orderBy?: product_addon_groupsOrderByWithRelationInput | product_addon_groupsOrderByWithRelationInput[]
    cursor?: product_addon_groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_addon_groupsScalarFieldEnum | Product_addon_groupsScalarFieldEnum[]
  }

  /**
   * products.order_items
   */
  export type products$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model addon_groups
   */

  export type AggregateAddon_groups = {
    _count: Addon_groupsCountAggregateOutputType | null
    _min: Addon_groupsMinAggregateOutputType | null
    _max: Addon_groupsMaxAggregateOutputType | null
  }

  export type Addon_groupsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type Addon_groupsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type Addon_groupsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type Addon_groupsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type Addon_groupsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type Addon_groupsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type Addon_groupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addon_groups to aggregate.
     */
    where?: addon_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addon_groups to fetch.
     */
    orderBy?: addon_groupsOrderByWithRelationInput | addon_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addon_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addon_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addon_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addon_groups
    **/
    _count?: true | Addon_groupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Addon_groupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Addon_groupsMaxAggregateInputType
  }

  export type GetAddon_groupsAggregateType<T extends Addon_groupsAggregateArgs> = {
        [P in keyof T & keyof AggregateAddon_groups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddon_groups[P]>
      : GetScalarType<T[P], AggregateAddon_groups[P]>
  }




  export type addon_groupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addon_groupsWhereInput
    orderBy?: addon_groupsOrderByWithAggregationInput | addon_groupsOrderByWithAggregationInput[]
    by: Addon_groupsScalarFieldEnum[] | Addon_groupsScalarFieldEnum
    having?: addon_groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Addon_groupsCountAggregateInputType | true
    _min?: Addon_groupsMinAggregateInputType
    _max?: Addon_groupsMaxAggregateInputType
  }

  export type Addon_groupsGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: Addon_groupsCountAggregateOutputType | null
    _min: Addon_groupsMinAggregateOutputType | null
    _max: Addon_groupsMaxAggregateOutputType | null
  }

  type GetAddon_groupsGroupByPayload<T extends addon_groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Addon_groupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Addon_groupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Addon_groupsGroupByOutputType[P]>
            : GetScalarType<T[P], Addon_groupsGroupByOutputType[P]>
        }
      >
    >


  export type addon_groupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    addons?: boolean | addon_groups$addonsArgs<ExtArgs>
    product_addon_groups?: boolean | addon_groups$product_addon_groupsArgs<ExtArgs>
    _count?: boolean | Addon_groupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addon_groups"]>

  export type addon_groupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["addon_groups"]>

  export type addon_groupsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type addon_groupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addons?: boolean | addon_groups$addonsArgs<ExtArgs>
    product_addon_groups?: boolean | addon_groups$product_addon_groupsArgs<ExtArgs>
    _count?: boolean | Addon_groupsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type addon_groupsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $addon_groupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "addon_groups"
    objects: {
      addons: Prisma.$addonsPayload<ExtArgs>[]
      product_addon_groups: Prisma.$product_addon_groupsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["addon_groups"]>
    composites: {}
  }

  type addon_groupsGetPayload<S extends boolean | null | undefined | addon_groupsDefaultArgs> = $Result.GetResult<Prisma.$addon_groupsPayload, S>

  type addon_groupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<addon_groupsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Addon_groupsCountAggregateInputType | true
    }

  export interface addon_groupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['addon_groups'], meta: { name: 'addon_groups' } }
    /**
     * Find zero or one Addon_groups that matches the filter.
     * @param {addon_groupsFindUniqueArgs} args - Arguments to find a Addon_groups
     * @example
     * // Get one Addon_groups
     * const addon_groups = await prisma.addon_groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addon_groupsFindUniqueArgs>(args: SelectSubset<T, addon_groupsFindUniqueArgs<ExtArgs>>): Prisma__addon_groupsClient<$Result.GetResult<Prisma.$addon_groupsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Addon_groups that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {addon_groupsFindUniqueOrThrowArgs} args - Arguments to find a Addon_groups
     * @example
     * // Get one Addon_groups
     * const addon_groups = await prisma.addon_groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addon_groupsFindUniqueOrThrowArgs>(args: SelectSubset<T, addon_groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addon_groupsClient<$Result.GetResult<Prisma.$addon_groupsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Addon_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addon_groupsFindFirstArgs} args - Arguments to find a Addon_groups
     * @example
     * // Get one Addon_groups
     * const addon_groups = await prisma.addon_groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addon_groupsFindFirstArgs>(args?: SelectSubset<T, addon_groupsFindFirstArgs<ExtArgs>>): Prisma__addon_groupsClient<$Result.GetResult<Prisma.$addon_groupsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Addon_groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addon_groupsFindFirstOrThrowArgs} args - Arguments to find a Addon_groups
     * @example
     * // Get one Addon_groups
     * const addon_groups = await prisma.addon_groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addon_groupsFindFirstOrThrowArgs>(args?: SelectSubset<T, addon_groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__addon_groupsClient<$Result.GetResult<Prisma.$addon_groupsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Addon_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addon_groupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addon_groups
     * const addon_groups = await prisma.addon_groups.findMany()
     * 
     * // Get first 10 Addon_groups
     * const addon_groups = await prisma.addon_groups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addon_groupsWithIdOnly = await prisma.addon_groups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends addon_groupsFindManyArgs>(args?: SelectSubset<T, addon_groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addon_groupsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Addon_groups.
     * @param {addon_groupsCreateArgs} args - Arguments to create a Addon_groups.
     * @example
     * // Create one Addon_groups
     * const Addon_groups = await prisma.addon_groups.create({
     *   data: {
     *     // ... data to create a Addon_groups
     *   }
     * })
     * 
     */
    create<T extends addon_groupsCreateArgs>(args: SelectSubset<T, addon_groupsCreateArgs<ExtArgs>>): Prisma__addon_groupsClient<$Result.GetResult<Prisma.$addon_groupsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Addon_groups.
     * @param {addon_groupsCreateManyArgs} args - Arguments to create many Addon_groups.
     * @example
     * // Create many Addon_groups
     * const addon_groups = await prisma.addon_groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addon_groupsCreateManyArgs>(args?: SelectSubset<T, addon_groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addon_groups and returns the data saved in the database.
     * @param {addon_groupsCreateManyAndReturnArgs} args - Arguments to create many Addon_groups.
     * @example
     * // Create many Addon_groups
     * const addon_groups = await prisma.addon_groups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addon_groups and only return the `id`
     * const addon_groupsWithIdOnly = await prisma.addon_groups.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends addon_groupsCreateManyAndReturnArgs>(args?: SelectSubset<T, addon_groupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addon_groupsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Addon_groups.
     * @param {addon_groupsDeleteArgs} args - Arguments to delete one Addon_groups.
     * @example
     * // Delete one Addon_groups
     * const Addon_groups = await prisma.addon_groups.delete({
     *   where: {
     *     // ... filter to delete one Addon_groups
     *   }
     * })
     * 
     */
    delete<T extends addon_groupsDeleteArgs>(args: SelectSubset<T, addon_groupsDeleteArgs<ExtArgs>>): Prisma__addon_groupsClient<$Result.GetResult<Prisma.$addon_groupsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Addon_groups.
     * @param {addon_groupsUpdateArgs} args - Arguments to update one Addon_groups.
     * @example
     * // Update one Addon_groups
     * const addon_groups = await prisma.addon_groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addon_groupsUpdateArgs>(args: SelectSubset<T, addon_groupsUpdateArgs<ExtArgs>>): Prisma__addon_groupsClient<$Result.GetResult<Prisma.$addon_groupsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Addon_groups.
     * @param {addon_groupsDeleteManyArgs} args - Arguments to filter Addon_groups to delete.
     * @example
     * // Delete a few Addon_groups
     * const { count } = await prisma.addon_groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addon_groupsDeleteManyArgs>(args?: SelectSubset<T, addon_groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addon_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addon_groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addon_groups
     * const addon_groups = await prisma.addon_groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addon_groupsUpdateManyArgs>(args: SelectSubset<T, addon_groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Addon_groups.
     * @param {addon_groupsUpsertArgs} args - Arguments to update or create a Addon_groups.
     * @example
     * // Update or create a Addon_groups
     * const addon_groups = await prisma.addon_groups.upsert({
     *   create: {
     *     // ... data to create a Addon_groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addon_groups we want to update
     *   }
     * })
     */
    upsert<T extends addon_groupsUpsertArgs>(args: SelectSubset<T, addon_groupsUpsertArgs<ExtArgs>>): Prisma__addon_groupsClient<$Result.GetResult<Prisma.$addon_groupsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Addon_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addon_groupsCountArgs} args - Arguments to filter Addon_groups to count.
     * @example
     * // Count the number of Addon_groups
     * const count = await prisma.addon_groups.count({
     *   where: {
     *     // ... the filter for the Addon_groups we want to count
     *   }
     * })
    **/
    count<T extends addon_groupsCountArgs>(
      args?: Subset<T, addon_groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Addon_groupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addon_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Addon_groupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Addon_groupsAggregateArgs>(args: Subset<T, Addon_groupsAggregateArgs>): Prisma.PrismaPromise<GetAddon_groupsAggregateType<T>>

    /**
     * Group by Addon_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addon_groupsGroupByArgs} args - Group by arguments.
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
      T extends addon_groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addon_groupsGroupByArgs['orderBy'] }
        : { orderBy?: addon_groupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, addon_groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddon_groupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the addon_groups model
   */
  readonly fields: addon_groupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for addon_groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addon_groupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addons<T extends addon_groups$addonsArgs<ExtArgs> = {}>(args?: Subset<T, addon_groups$addonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addonsPayload<ExtArgs>, T, "findMany"> | Null>
    product_addon_groups<T extends addon_groups$product_addon_groupsArgs<ExtArgs> = {}>(args?: Subset<T, addon_groups$product_addon_groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_addon_groupsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the addon_groups model
   */ 
  interface addon_groupsFieldRefs {
    readonly id: FieldRef<"addon_groups", 'String'>
    readonly name: FieldRef<"addon_groups", 'String'>
    readonly description: FieldRef<"addon_groups", 'String'>
  }
    

  // Custom InputTypes
  /**
   * addon_groups findUnique
   */
  export type addon_groupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addon_groups
     */
    select?: addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addon_groupsInclude<ExtArgs> | null
    /**
     * Filter, which addon_groups to fetch.
     */
    where: addon_groupsWhereUniqueInput
  }

  /**
   * addon_groups findUniqueOrThrow
   */
  export type addon_groupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addon_groups
     */
    select?: addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addon_groupsInclude<ExtArgs> | null
    /**
     * Filter, which addon_groups to fetch.
     */
    where: addon_groupsWhereUniqueInput
  }

  /**
   * addon_groups findFirst
   */
  export type addon_groupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addon_groups
     */
    select?: addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addon_groupsInclude<ExtArgs> | null
    /**
     * Filter, which addon_groups to fetch.
     */
    where?: addon_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addon_groups to fetch.
     */
    orderBy?: addon_groupsOrderByWithRelationInput | addon_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addon_groups.
     */
    cursor?: addon_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addon_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addon_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addon_groups.
     */
    distinct?: Addon_groupsScalarFieldEnum | Addon_groupsScalarFieldEnum[]
  }

  /**
   * addon_groups findFirstOrThrow
   */
  export type addon_groupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addon_groups
     */
    select?: addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addon_groupsInclude<ExtArgs> | null
    /**
     * Filter, which addon_groups to fetch.
     */
    where?: addon_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addon_groups to fetch.
     */
    orderBy?: addon_groupsOrderByWithRelationInput | addon_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addon_groups.
     */
    cursor?: addon_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addon_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addon_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addon_groups.
     */
    distinct?: Addon_groupsScalarFieldEnum | Addon_groupsScalarFieldEnum[]
  }

  /**
   * addon_groups findMany
   */
  export type addon_groupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addon_groups
     */
    select?: addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addon_groupsInclude<ExtArgs> | null
    /**
     * Filter, which addon_groups to fetch.
     */
    where?: addon_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addon_groups to fetch.
     */
    orderBy?: addon_groupsOrderByWithRelationInput | addon_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addon_groups.
     */
    cursor?: addon_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addon_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addon_groups.
     */
    skip?: number
    distinct?: Addon_groupsScalarFieldEnum | Addon_groupsScalarFieldEnum[]
  }

  /**
   * addon_groups create
   */
  export type addon_groupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addon_groups
     */
    select?: addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addon_groupsInclude<ExtArgs> | null
    /**
     * The data needed to create a addon_groups.
     */
    data: XOR<addon_groupsCreateInput, addon_groupsUncheckedCreateInput>
  }

  /**
   * addon_groups createMany
   */
  export type addon_groupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addon_groups.
     */
    data: addon_groupsCreateManyInput | addon_groupsCreateManyInput[]
  }

  /**
   * addon_groups createManyAndReturn
   */
  export type addon_groupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addon_groups
     */
    select?: addon_groupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many addon_groups.
     */
    data: addon_groupsCreateManyInput | addon_groupsCreateManyInput[]
  }

  /**
   * addon_groups update
   */
  export type addon_groupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addon_groups
     */
    select?: addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addon_groupsInclude<ExtArgs> | null
    /**
     * The data needed to update a addon_groups.
     */
    data: XOR<addon_groupsUpdateInput, addon_groupsUncheckedUpdateInput>
    /**
     * Choose, which addon_groups to update.
     */
    where: addon_groupsWhereUniqueInput
  }

  /**
   * addon_groups updateMany
   */
  export type addon_groupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addon_groups.
     */
    data: XOR<addon_groupsUpdateManyMutationInput, addon_groupsUncheckedUpdateManyInput>
    /**
     * Filter which addon_groups to update
     */
    where?: addon_groupsWhereInput
  }

  /**
   * addon_groups upsert
   */
  export type addon_groupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addon_groups
     */
    select?: addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addon_groupsInclude<ExtArgs> | null
    /**
     * The filter to search for the addon_groups to update in case it exists.
     */
    where: addon_groupsWhereUniqueInput
    /**
     * In case the addon_groups found by the `where` argument doesn't exist, create a new addon_groups with this data.
     */
    create: XOR<addon_groupsCreateInput, addon_groupsUncheckedCreateInput>
    /**
     * In case the addon_groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addon_groupsUpdateInput, addon_groupsUncheckedUpdateInput>
  }

  /**
   * addon_groups delete
   */
  export type addon_groupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addon_groups
     */
    select?: addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addon_groupsInclude<ExtArgs> | null
    /**
     * Filter which addon_groups to delete.
     */
    where: addon_groupsWhereUniqueInput
  }

  /**
   * addon_groups deleteMany
   */
  export type addon_groupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addon_groups to delete
     */
    where?: addon_groupsWhereInput
  }

  /**
   * addon_groups.addons
   */
  export type addon_groups$addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addonsInclude<ExtArgs> | null
    where?: addonsWhereInput
    orderBy?: addonsOrderByWithRelationInput | addonsOrderByWithRelationInput[]
    cursor?: addonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddonsScalarFieldEnum | AddonsScalarFieldEnum[]
  }

  /**
   * addon_groups.product_addon_groups
   */
  export type addon_groups$product_addon_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsInclude<ExtArgs> | null
    where?: product_addon_groupsWhereInput
    orderBy?: product_addon_groupsOrderByWithRelationInput | product_addon_groupsOrderByWithRelationInput[]
    cursor?: product_addon_groupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_addon_groupsScalarFieldEnum | Product_addon_groupsScalarFieldEnum[]
  }

  /**
   * addon_groups without action
   */
  export type addon_groupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addon_groups
     */
    select?: addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addon_groupsInclude<ExtArgs> | null
  }


  /**
   * Model addons
   */

  export type AggregateAddons = {
    _count: AddonsCountAggregateOutputType | null
    _avg: AddonsAvgAggregateOutputType | null
    _sum: AddonsSumAggregateOutputType | null
    _min: AddonsMinAggregateOutputType | null
    _max: AddonsMaxAggregateOutputType | null
  }

  export type AddonsAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type AddonsSumAggregateOutputType = {
    price: Decimal | null
  }

  export type AddonsMinAggregateOutputType = {
    id: string | null
    addon_group_id: string | null
    name: string | null
    image_path: string | null
    price: Decimal | null
  }

  export type AddonsMaxAggregateOutputType = {
    id: string | null
    addon_group_id: string | null
    name: string | null
    image_path: string | null
    price: Decimal | null
  }

  export type AddonsCountAggregateOutputType = {
    id: number
    addon_group_id: number
    name: number
    image_path: number
    price: number
    _all: number
  }


  export type AddonsAvgAggregateInputType = {
    price?: true
  }

  export type AddonsSumAggregateInputType = {
    price?: true
  }

  export type AddonsMinAggregateInputType = {
    id?: true
    addon_group_id?: true
    name?: true
    image_path?: true
    price?: true
  }

  export type AddonsMaxAggregateInputType = {
    id?: true
    addon_group_id?: true
    name?: true
    image_path?: true
    price?: true
  }

  export type AddonsCountAggregateInputType = {
    id?: true
    addon_group_id?: true
    name?: true
    image_path?: true
    price?: true
    _all?: true
  }

  export type AddonsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addons to aggregate.
     */
    where?: addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addons to fetch.
     */
    orderBy?: addonsOrderByWithRelationInput | addonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addons
    **/
    _count?: true | AddonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddonsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddonsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddonsMaxAggregateInputType
  }

  export type GetAddonsAggregateType<T extends AddonsAggregateArgs> = {
        [P in keyof T & keyof AggregateAddons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddons[P]>
      : GetScalarType<T[P], AggregateAddons[P]>
  }




  export type addonsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addonsWhereInput
    orderBy?: addonsOrderByWithAggregationInput | addonsOrderByWithAggregationInput[]
    by: AddonsScalarFieldEnum[] | AddonsScalarFieldEnum
    having?: addonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddonsCountAggregateInputType | true
    _avg?: AddonsAvgAggregateInputType
    _sum?: AddonsSumAggregateInputType
    _min?: AddonsMinAggregateInputType
    _max?: AddonsMaxAggregateInputType
  }

  export type AddonsGroupByOutputType = {
    id: string
    addon_group_id: string
    name: string
    image_path: string | null
    price: Decimal
    _count: AddonsCountAggregateOutputType | null
    _avg: AddonsAvgAggregateOutputType | null
    _sum: AddonsSumAggregateOutputType | null
    _min: AddonsMinAggregateOutputType | null
    _max: AddonsMaxAggregateOutputType | null
  }

  type GetAddonsGroupByPayload<T extends addonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddonsGroupByOutputType[P]>
            : GetScalarType<T[P], AddonsGroupByOutputType[P]>
        }
      >
    >


  export type addonsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    addon_group_id?: boolean
    name?: boolean
    image_path?: boolean
    price?: boolean
    addon_group?: boolean | addon_groupsDefaultArgs<ExtArgs>
    order_item_addons?: boolean | addons$order_item_addonsArgs<ExtArgs>
    _count?: boolean | AddonsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addons"]>

  export type addonsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    addon_group_id?: boolean
    name?: boolean
    image_path?: boolean
    price?: boolean
    addon_group?: boolean | addon_groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addons"]>

  export type addonsSelectScalar = {
    id?: boolean
    addon_group_id?: boolean
    name?: boolean
    image_path?: boolean
    price?: boolean
  }

  export type addonsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addon_group?: boolean | addon_groupsDefaultArgs<ExtArgs>
    order_item_addons?: boolean | addons$order_item_addonsArgs<ExtArgs>
    _count?: boolean | AddonsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type addonsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addon_group?: boolean | addon_groupsDefaultArgs<ExtArgs>
  }

  export type $addonsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "addons"
    objects: {
      addon_group: Prisma.$addon_groupsPayload<ExtArgs>
      order_item_addons: Prisma.$order_item_addonsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      addon_group_id: string
      name: string
      image_path: string | null
      price: Prisma.Decimal
    }, ExtArgs["result"]["addons"]>
    composites: {}
  }

  type addonsGetPayload<S extends boolean | null | undefined | addonsDefaultArgs> = $Result.GetResult<Prisma.$addonsPayload, S>

  type addonsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<addonsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AddonsCountAggregateInputType | true
    }

  export interface addonsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['addons'], meta: { name: 'addons' } }
    /**
     * Find zero or one Addons that matches the filter.
     * @param {addonsFindUniqueArgs} args - Arguments to find a Addons
     * @example
     * // Get one Addons
     * const addons = await prisma.addons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addonsFindUniqueArgs>(args: SelectSubset<T, addonsFindUniqueArgs<ExtArgs>>): Prisma__addonsClient<$Result.GetResult<Prisma.$addonsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Addons that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {addonsFindUniqueOrThrowArgs} args - Arguments to find a Addons
     * @example
     * // Get one Addons
     * const addons = await prisma.addons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addonsFindUniqueOrThrowArgs>(args: SelectSubset<T, addonsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addonsClient<$Result.GetResult<Prisma.$addonsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Addons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addonsFindFirstArgs} args - Arguments to find a Addons
     * @example
     * // Get one Addons
     * const addons = await prisma.addons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addonsFindFirstArgs>(args?: SelectSubset<T, addonsFindFirstArgs<ExtArgs>>): Prisma__addonsClient<$Result.GetResult<Prisma.$addonsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Addons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addonsFindFirstOrThrowArgs} args - Arguments to find a Addons
     * @example
     * // Get one Addons
     * const addons = await prisma.addons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addonsFindFirstOrThrowArgs>(args?: SelectSubset<T, addonsFindFirstOrThrowArgs<ExtArgs>>): Prisma__addonsClient<$Result.GetResult<Prisma.$addonsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Addons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addonsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addons
     * const addons = await prisma.addons.findMany()
     * 
     * // Get first 10 Addons
     * const addons = await prisma.addons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addonsWithIdOnly = await prisma.addons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends addonsFindManyArgs>(args?: SelectSubset<T, addonsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addonsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Addons.
     * @param {addonsCreateArgs} args - Arguments to create a Addons.
     * @example
     * // Create one Addons
     * const Addons = await prisma.addons.create({
     *   data: {
     *     // ... data to create a Addons
     *   }
     * })
     * 
     */
    create<T extends addonsCreateArgs>(args: SelectSubset<T, addonsCreateArgs<ExtArgs>>): Prisma__addonsClient<$Result.GetResult<Prisma.$addonsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Addons.
     * @param {addonsCreateManyArgs} args - Arguments to create many Addons.
     * @example
     * // Create many Addons
     * const addons = await prisma.addons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addonsCreateManyArgs>(args?: SelectSubset<T, addonsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addons and returns the data saved in the database.
     * @param {addonsCreateManyAndReturnArgs} args - Arguments to create many Addons.
     * @example
     * // Create many Addons
     * const addons = await prisma.addons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addons and only return the `id`
     * const addonsWithIdOnly = await prisma.addons.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends addonsCreateManyAndReturnArgs>(args?: SelectSubset<T, addonsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addonsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Addons.
     * @param {addonsDeleteArgs} args - Arguments to delete one Addons.
     * @example
     * // Delete one Addons
     * const Addons = await prisma.addons.delete({
     *   where: {
     *     // ... filter to delete one Addons
     *   }
     * })
     * 
     */
    delete<T extends addonsDeleteArgs>(args: SelectSubset<T, addonsDeleteArgs<ExtArgs>>): Prisma__addonsClient<$Result.GetResult<Prisma.$addonsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Addons.
     * @param {addonsUpdateArgs} args - Arguments to update one Addons.
     * @example
     * // Update one Addons
     * const addons = await prisma.addons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addonsUpdateArgs>(args: SelectSubset<T, addonsUpdateArgs<ExtArgs>>): Prisma__addonsClient<$Result.GetResult<Prisma.$addonsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Addons.
     * @param {addonsDeleteManyArgs} args - Arguments to filter Addons to delete.
     * @example
     * // Delete a few Addons
     * const { count } = await prisma.addons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addonsDeleteManyArgs>(args?: SelectSubset<T, addonsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addons
     * const addons = await prisma.addons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addonsUpdateManyArgs>(args: SelectSubset<T, addonsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Addons.
     * @param {addonsUpsertArgs} args - Arguments to update or create a Addons.
     * @example
     * // Update or create a Addons
     * const addons = await prisma.addons.upsert({
     *   create: {
     *     // ... data to create a Addons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addons we want to update
     *   }
     * })
     */
    upsert<T extends addonsUpsertArgs>(args: SelectSubset<T, addonsUpsertArgs<ExtArgs>>): Prisma__addonsClient<$Result.GetResult<Prisma.$addonsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addonsCountArgs} args - Arguments to filter Addons to count.
     * @example
     * // Count the number of Addons
     * const count = await prisma.addons.count({
     *   where: {
     *     // ... the filter for the Addons we want to count
     *   }
     * })
    **/
    count<T extends addonsCountArgs>(
      args?: Subset<T, addonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddonsAggregateArgs>(args: Subset<T, AddonsAggregateArgs>): Prisma.PrismaPromise<GetAddonsAggregateType<T>>

    /**
     * Group by Addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addonsGroupByArgs} args - Group by arguments.
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
      T extends addonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addonsGroupByArgs['orderBy'] }
        : { orderBy?: addonsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, addonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the addons model
   */
  readonly fields: addonsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for addons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addonsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addon_group<T extends addon_groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, addon_groupsDefaultArgs<ExtArgs>>): Prisma__addon_groupsClient<$Result.GetResult<Prisma.$addon_groupsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    order_item_addons<T extends addons$order_item_addonsArgs<ExtArgs> = {}>(args?: Subset<T, addons$order_item_addonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_item_addonsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the addons model
   */ 
  interface addonsFieldRefs {
    readonly id: FieldRef<"addons", 'String'>
    readonly addon_group_id: FieldRef<"addons", 'String'>
    readonly name: FieldRef<"addons", 'String'>
    readonly image_path: FieldRef<"addons", 'String'>
    readonly price: FieldRef<"addons", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * addons findUnique
   */
  export type addonsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addonsInclude<ExtArgs> | null
    /**
     * Filter, which addons to fetch.
     */
    where: addonsWhereUniqueInput
  }

  /**
   * addons findUniqueOrThrow
   */
  export type addonsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addonsInclude<ExtArgs> | null
    /**
     * Filter, which addons to fetch.
     */
    where: addonsWhereUniqueInput
  }

  /**
   * addons findFirst
   */
  export type addonsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addonsInclude<ExtArgs> | null
    /**
     * Filter, which addons to fetch.
     */
    where?: addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addons to fetch.
     */
    orderBy?: addonsOrderByWithRelationInput | addonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addons.
     */
    cursor?: addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addons.
     */
    distinct?: AddonsScalarFieldEnum | AddonsScalarFieldEnum[]
  }

  /**
   * addons findFirstOrThrow
   */
  export type addonsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addonsInclude<ExtArgs> | null
    /**
     * Filter, which addons to fetch.
     */
    where?: addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addons to fetch.
     */
    orderBy?: addonsOrderByWithRelationInput | addonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addons.
     */
    cursor?: addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addons.
     */
    distinct?: AddonsScalarFieldEnum | AddonsScalarFieldEnum[]
  }

  /**
   * addons findMany
   */
  export type addonsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addonsInclude<ExtArgs> | null
    /**
     * Filter, which addons to fetch.
     */
    where?: addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addons to fetch.
     */
    orderBy?: addonsOrderByWithRelationInput | addonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addons.
     */
    cursor?: addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addons.
     */
    skip?: number
    distinct?: AddonsScalarFieldEnum | AddonsScalarFieldEnum[]
  }

  /**
   * addons create
   */
  export type addonsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addonsInclude<ExtArgs> | null
    /**
     * The data needed to create a addons.
     */
    data: XOR<addonsCreateInput, addonsUncheckedCreateInput>
  }

  /**
   * addons createMany
   */
  export type addonsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addons.
     */
    data: addonsCreateManyInput | addonsCreateManyInput[]
  }

  /**
   * addons createManyAndReturn
   */
  export type addonsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many addons.
     */
    data: addonsCreateManyInput | addonsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addonsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * addons update
   */
  export type addonsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addonsInclude<ExtArgs> | null
    /**
     * The data needed to update a addons.
     */
    data: XOR<addonsUpdateInput, addonsUncheckedUpdateInput>
    /**
     * Choose, which addons to update.
     */
    where: addonsWhereUniqueInput
  }

  /**
   * addons updateMany
   */
  export type addonsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addons.
     */
    data: XOR<addonsUpdateManyMutationInput, addonsUncheckedUpdateManyInput>
    /**
     * Filter which addons to update
     */
    where?: addonsWhereInput
  }

  /**
   * addons upsert
   */
  export type addonsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addonsInclude<ExtArgs> | null
    /**
     * The filter to search for the addons to update in case it exists.
     */
    where: addonsWhereUniqueInput
    /**
     * In case the addons found by the `where` argument doesn't exist, create a new addons with this data.
     */
    create: XOR<addonsCreateInput, addonsUncheckedCreateInput>
    /**
     * In case the addons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addonsUpdateInput, addonsUncheckedUpdateInput>
  }

  /**
   * addons delete
   */
  export type addonsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addonsInclude<ExtArgs> | null
    /**
     * Filter which addons to delete.
     */
    where: addonsWhereUniqueInput
  }

  /**
   * addons deleteMany
   */
  export type addonsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addons to delete
     */
    where?: addonsWhereInput
  }

  /**
   * addons.order_item_addons
   */
  export type addons$order_item_addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsInclude<ExtArgs> | null
    where?: order_item_addonsWhereInput
    orderBy?: order_item_addonsOrderByWithRelationInput | order_item_addonsOrderByWithRelationInput[]
    cursor?: order_item_addonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_item_addonsScalarFieldEnum | Order_item_addonsScalarFieldEnum[]
  }

  /**
   * addons without action
   */
  export type addonsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addonsInclude<ExtArgs> | null
  }


  /**
   * Model product_addon_groups
   */

  export type AggregateProduct_addon_groups = {
    _count: Product_addon_groupsCountAggregateOutputType | null
    _avg: Product_addon_groupsAvgAggregateOutputType | null
    _sum: Product_addon_groupsSumAggregateOutputType | null
    _min: Product_addon_groupsMinAggregateOutputType | null
    _max: Product_addon_groupsMaxAggregateOutputType | null
  }

  export type Product_addon_groupsAvgAggregateOutputType = {
    min_selections: number | null
    max_selections: number | null
    sort_order: number | null
  }

  export type Product_addon_groupsSumAggregateOutputType = {
    min_selections: number | null
    max_selections: number | null
    sort_order: number | null
  }

  export type Product_addon_groupsMinAggregateOutputType = {
    id: string | null
    product_id: string | null
    addon_group_id: string | null
    min_selections: number | null
    max_selections: number | null
    sort_order: number | null
  }

  export type Product_addon_groupsMaxAggregateOutputType = {
    id: string | null
    product_id: string | null
    addon_group_id: string | null
    min_selections: number | null
    max_selections: number | null
    sort_order: number | null
  }

  export type Product_addon_groupsCountAggregateOutputType = {
    id: number
    product_id: number
    addon_group_id: number
    min_selections: number
    max_selections: number
    sort_order: number
    _all: number
  }


  export type Product_addon_groupsAvgAggregateInputType = {
    min_selections?: true
    max_selections?: true
    sort_order?: true
  }

  export type Product_addon_groupsSumAggregateInputType = {
    min_selections?: true
    max_selections?: true
    sort_order?: true
  }

  export type Product_addon_groupsMinAggregateInputType = {
    id?: true
    product_id?: true
    addon_group_id?: true
    min_selections?: true
    max_selections?: true
    sort_order?: true
  }

  export type Product_addon_groupsMaxAggregateInputType = {
    id?: true
    product_id?: true
    addon_group_id?: true
    min_selections?: true
    max_selections?: true
    sort_order?: true
  }

  export type Product_addon_groupsCountAggregateInputType = {
    id?: true
    product_id?: true
    addon_group_id?: true
    min_selections?: true
    max_selections?: true
    sort_order?: true
    _all?: true
  }

  export type Product_addon_groupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_addon_groups to aggregate.
     */
    where?: product_addon_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_addon_groups to fetch.
     */
    orderBy?: product_addon_groupsOrderByWithRelationInput | product_addon_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_addon_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_addon_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_addon_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_addon_groups
    **/
    _count?: true | Product_addon_groupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_addon_groupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_addon_groupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_addon_groupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_addon_groupsMaxAggregateInputType
  }

  export type GetProduct_addon_groupsAggregateType<T extends Product_addon_groupsAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_addon_groups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_addon_groups[P]>
      : GetScalarType<T[P], AggregateProduct_addon_groups[P]>
  }




  export type product_addon_groupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_addon_groupsWhereInput
    orderBy?: product_addon_groupsOrderByWithAggregationInput | product_addon_groupsOrderByWithAggregationInput[]
    by: Product_addon_groupsScalarFieldEnum[] | Product_addon_groupsScalarFieldEnum
    having?: product_addon_groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_addon_groupsCountAggregateInputType | true
    _avg?: Product_addon_groupsAvgAggregateInputType
    _sum?: Product_addon_groupsSumAggregateInputType
    _min?: Product_addon_groupsMinAggregateInputType
    _max?: Product_addon_groupsMaxAggregateInputType
  }

  export type Product_addon_groupsGroupByOutputType = {
    id: string
    product_id: string
    addon_group_id: string
    min_selections: number
    max_selections: number
    sort_order: number
    _count: Product_addon_groupsCountAggregateOutputType | null
    _avg: Product_addon_groupsAvgAggregateOutputType | null
    _sum: Product_addon_groupsSumAggregateOutputType | null
    _min: Product_addon_groupsMinAggregateOutputType | null
    _max: Product_addon_groupsMaxAggregateOutputType | null
  }

  type GetProduct_addon_groupsGroupByPayload<T extends product_addon_groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_addon_groupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_addon_groupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_addon_groupsGroupByOutputType[P]>
            : GetScalarType<T[P], Product_addon_groupsGroupByOutputType[P]>
        }
      >
    >


  export type product_addon_groupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    addon_group_id?: boolean
    min_selections?: boolean
    max_selections?: boolean
    sort_order?: boolean
    product?: boolean | productsDefaultArgs<ExtArgs>
    addon_group?: boolean | addon_groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_addon_groups"]>

  export type product_addon_groupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    addon_group_id?: boolean
    min_selections?: boolean
    max_selections?: boolean
    sort_order?: boolean
    product?: boolean | productsDefaultArgs<ExtArgs>
    addon_group?: boolean | addon_groupsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_addon_groups"]>

  export type product_addon_groupsSelectScalar = {
    id?: boolean
    product_id?: boolean
    addon_group_id?: boolean
    min_selections?: boolean
    max_selections?: boolean
    sort_order?: boolean
  }

  export type product_addon_groupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productsDefaultArgs<ExtArgs>
    addon_group?: boolean | addon_groupsDefaultArgs<ExtArgs>
  }
  export type product_addon_groupsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productsDefaultArgs<ExtArgs>
    addon_group?: boolean | addon_groupsDefaultArgs<ExtArgs>
  }

  export type $product_addon_groupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_addon_groups"
    objects: {
      product: Prisma.$productsPayload<ExtArgs>
      addon_group: Prisma.$addon_groupsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      product_id: string
      addon_group_id: string
      min_selections: number
      max_selections: number
      sort_order: number
    }, ExtArgs["result"]["product_addon_groups"]>
    composites: {}
  }

  type product_addon_groupsGetPayload<S extends boolean | null | undefined | product_addon_groupsDefaultArgs> = $Result.GetResult<Prisma.$product_addon_groupsPayload, S>

  type product_addon_groupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<product_addon_groupsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Product_addon_groupsCountAggregateInputType | true
    }

  export interface product_addon_groupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_addon_groups'], meta: { name: 'product_addon_groups' } }
    /**
     * Find zero or one Product_addon_groups that matches the filter.
     * @param {product_addon_groupsFindUniqueArgs} args - Arguments to find a Product_addon_groups
     * @example
     * // Get one Product_addon_groups
     * const product_addon_groups = await prisma.product_addon_groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_addon_groupsFindUniqueArgs>(args: SelectSubset<T, product_addon_groupsFindUniqueArgs<ExtArgs>>): Prisma__product_addon_groupsClient<$Result.GetResult<Prisma.$product_addon_groupsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product_addon_groups that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {product_addon_groupsFindUniqueOrThrowArgs} args - Arguments to find a Product_addon_groups
     * @example
     * // Get one Product_addon_groups
     * const product_addon_groups = await prisma.product_addon_groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_addon_groupsFindUniqueOrThrowArgs>(args: SelectSubset<T, product_addon_groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_addon_groupsClient<$Result.GetResult<Prisma.$product_addon_groupsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product_addon_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_addon_groupsFindFirstArgs} args - Arguments to find a Product_addon_groups
     * @example
     * // Get one Product_addon_groups
     * const product_addon_groups = await prisma.product_addon_groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_addon_groupsFindFirstArgs>(args?: SelectSubset<T, product_addon_groupsFindFirstArgs<ExtArgs>>): Prisma__product_addon_groupsClient<$Result.GetResult<Prisma.$product_addon_groupsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product_addon_groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_addon_groupsFindFirstOrThrowArgs} args - Arguments to find a Product_addon_groups
     * @example
     * // Get one Product_addon_groups
     * const product_addon_groups = await prisma.product_addon_groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_addon_groupsFindFirstOrThrowArgs>(args?: SelectSubset<T, product_addon_groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_addon_groupsClient<$Result.GetResult<Prisma.$product_addon_groupsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Product_addon_groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_addon_groupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_addon_groups
     * const product_addon_groups = await prisma.product_addon_groups.findMany()
     * 
     * // Get first 10 Product_addon_groups
     * const product_addon_groups = await prisma.product_addon_groups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_addon_groupsWithIdOnly = await prisma.product_addon_groups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_addon_groupsFindManyArgs>(args?: SelectSubset<T, product_addon_groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_addon_groupsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product_addon_groups.
     * @param {product_addon_groupsCreateArgs} args - Arguments to create a Product_addon_groups.
     * @example
     * // Create one Product_addon_groups
     * const Product_addon_groups = await prisma.product_addon_groups.create({
     *   data: {
     *     // ... data to create a Product_addon_groups
     *   }
     * })
     * 
     */
    create<T extends product_addon_groupsCreateArgs>(args: SelectSubset<T, product_addon_groupsCreateArgs<ExtArgs>>): Prisma__product_addon_groupsClient<$Result.GetResult<Prisma.$product_addon_groupsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Product_addon_groups.
     * @param {product_addon_groupsCreateManyArgs} args - Arguments to create many Product_addon_groups.
     * @example
     * // Create many Product_addon_groups
     * const product_addon_groups = await prisma.product_addon_groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_addon_groupsCreateManyArgs>(args?: SelectSubset<T, product_addon_groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_addon_groups and returns the data saved in the database.
     * @param {product_addon_groupsCreateManyAndReturnArgs} args - Arguments to create many Product_addon_groups.
     * @example
     * // Create many Product_addon_groups
     * const product_addon_groups = await prisma.product_addon_groups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_addon_groups and only return the `id`
     * const product_addon_groupsWithIdOnly = await prisma.product_addon_groups.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_addon_groupsCreateManyAndReturnArgs>(args?: SelectSubset<T, product_addon_groupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_addon_groupsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product_addon_groups.
     * @param {product_addon_groupsDeleteArgs} args - Arguments to delete one Product_addon_groups.
     * @example
     * // Delete one Product_addon_groups
     * const Product_addon_groups = await prisma.product_addon_groups.delete({
     *   where: {
     *     // ... filter to delete one Product_addon_groups
     *   }
     * })
     * 
     */
    delete<T extends product_addon_groupsDeleteArgs>(args: SelectSubset<T, product_addon_groupsDeleteArgs<ExtArgs>>): Prisma__product_addon_groupsClient<$Result.GetResult<Prisma.$product_addon_groupsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product_addon_groups.
     * @param {product_addon_groupsUpdateArgs} args - Arguments to update one Product_addon_groups.
     * @example
     * // Update one Product_addon_groups
     * const product_addon_groups = await prisma.product_addon_groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_addon_groupsUpdateArgs>(args: SelectSubset<T, product_addon_groupsUpdateArgs<ExtArgs>>): Prisma__product_addon_groupsClient<$Result.GetResult<Prisma.$product_addon_groupsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Product_addon_groups.
     * @param {product_addon_groupsDeleteManyArgs} args - Arguments to filter Product_addon_groups to delete.
     * @example
     * // Delete a few Product_addon_groups
     * const { count } = await prisma.product_addon_groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_addon_groupsDeleteManyArgs>(args?: SelectSubset<T, product_addon_groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_addon_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_addon_groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_addon_groups
     * const product_addon_groups = await prisma.product_addon_groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_addon_groupsUpdateManyArgs>(args: SelectSubset<T, product_addon_groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product_addon_groups.
     * @param {product_addon_groupsUpsertArgs} args - Arguments to update or create a Product_addon_groups.
     * @example
     * // Update or create a Product_addon_groups
     * const product_addon_groups = await prisma.product_addon_groups.upsert({
     *   create: {
     *     // ... data to create a Product_addon_groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_addon_groups we want to update
     *   }
     * })
     */
    upsert<T extends product_addon_groupsUpsertArgs>(args: SelectSubset<T, product_addon_groupsUpsertArgs<ExtArgs>>): Prisma__product_addon_groupsClient<$Result.GetResult<Prisma.$product_addon_groupsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Product_addon_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_addon_groupsCountArgs} args - Arguments to filter Product_addon_groups to count.
     * @example
     * // Count the number of Product_addon_groups
     * const count = await prisma.product_addon_groups.count({
     *   where: {
     *     // ... the filter for the Product_addon_groups we want to count
     *   }
     * })
    **/
    count<T extends product_addon_groupsCountArgs>(
      args?: Subset<T, product_addon_groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_addon_groupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_addon_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_addon_groupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Product_addon_groupsAggregateArgs>(args: Subset<T, Product_addon_groupsAggregateArgs>): Prisma.PrismaPromise<GetProduct_addon_groupsAggregateType<T>>

    /**
     * Group by Product_addon_groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_addon_groupsGroupByArgs} args - Group by arguments.
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
      T extends product_addon_groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_addon_groupsGroupByArgs['orderBy'] }
        : { orderBy?: product_addon_groupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, product_addon_groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_addon_groupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_addon_groups model
   */
  readonly fields: product_addon_groupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_addon_groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_addon_groupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    addon_group<T extends addon_groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, addon_groupsDefaultArgs<ExtArgs>>): Prisma__addon_groupsClient<$Result.GetResult<Prisma.$addon_groupsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the product_addon_groups model
   */ 
  interface product_addon_groupsFieldRefs {
    readonly id: FieldRef<"product_addon_groups", 'String'>
    readonly product_id: FieldRef<"product_addon_groups", 'String'>
    readonly addon_group_id: FieldRef<"product_addon_groups", 'String'>
    readonly min_selections: FieldRef<"product_addon_groups", 'Int'>
    readonly max_selections: FieldRef<"product_addon_groups", 'Int'>
    readonly sort_order: FieldRef<"product_addon_groups", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * product_addon_groups findUnique
   */
  export type product_addon_groupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsInclude<ExtArgs> | null
    /**
     * Filter, which product_addon_groups to fetch.
     */
    where: product_addon_groupsWhereUniqueInput
  }

  /**
   * product_addon_groups findUniqueOrThrow
   */
  export type product_addon_groupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsInclude<ExtArgs> | null
    /**
     * Filter, which product_addon_groups to fetch.
     */
    where: product_addon_groupsWhereUniqueInput
  }

  /**
   * product_addon_groups findFirst
   */
  export type product_addon_groupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsInclude<ExtArgs> | null
    /**
     * Filter, which product_addon_groups to fetch.
     */
    where?: product_addon_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_addon_groups to fetch.
     */
    orderBy?: product_addon_groupsOrderByWithRelationInput | product_addon_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_addon_groups.
     */
    cursor?: product_addon_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_addon_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_addon_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_addon_groups.
     */
    distinct?: Product_addon_groupsScalarFieldEnum | Product_addon_groupsScalarFieldEnum[]
  }

  /**
   * product_addon_groups findFirstOrThrow
   */
  export type product_addon_groupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsInclude<ExtArgs> | null
    /**
     * Filter, which product_addon_groups to fetch.
     */
    where?: product_addon_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_addon_groups to fetch.
     */
    orderBy?: product_addon_groupsOrderByWithRelationInput | product_addon_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_addon_groups.
     */
    cursor?: product_addon_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_addon_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_addon_groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_addon_groups.
     */
    distinct?: Product_addon_groupsScalarFieldEnum | Product_addon_groupsScalarFieldEnum[]
  }

  /**
   * product_addon_groups findMany
   */
  export type product_addon_groupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsInclude<ExtArgs> | null
    /**
     * Filter, which product_addon_groups to fetch.
     */
    where?: product_addon_groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_addon_groups to fetch.
     */
    orderBy?: product_addon_groupsOrderByWithRelationInput | product_addon_groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_addon_groups.
     */
    cursor?: product_addon_groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_addon_groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_addon_groups.
     */
    skip?: number
    distinct?: Product_addon_groupsScalarFieldEnum | Product_addon_groupsScalarFieldEnum[]
  }

  /**
   * product_addon_groups create
   */
  export type product_addon_groupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsInclude<ExtArgs> | null
    /**
     * The data needed to create a product_addon_groups.
     */
    data: XOR<product_addon_groupsCreateInput, product_addon_groupsUncheckedCreateInput>
  }

  /**
   * product_addon_groups createMany
   */
  export type product_addon_groupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_addon_groups.
     */
    data: product_addon_groupsCreateManyInput | product_addon_groupsCreateManyInput[]
  }

  /**
   * product_addon_groups createManyAndReturn
   */
  export type product_addon_groupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many product_addon_groups.
     */
    data: product_addon_groupsCreateManyInput | product_addon_groupsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_addon_groups update
   */
  export type product_addon_groupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsInclude<ExtArgs> | null
    /**
     * The data needed to update a product_addon_groups.
     */
    data: XOR<product_addon_groupsUpdateInput, product_addon_groupsUncheckedUpdateInput>
    /**
     * Choose, which product_addon_groups to update.
     */
    where: product_addon_groupsWhereUniqueInput
  }

  /**
   * product_addon_groups updateMany
   */
  export type product_addon_groupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_addon_groups.
     */
    data: XOR<product_addon_groupsUpdateManyMutationInput, product_addon_groupsUncheckedUpdateManyInput>
    /**
     * Filter which product_addon_groups to update
     */
    where?: product_addon_groupsWhereInput
  }

  /**
   * product_addon_groups upsert
   */
  export type product_addon_groupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsInclude<ExtArgs> | null
    /**
     * The filter to search for the product_addon_groups to update in case it exists.
     */
    where: product_addon_groupsWhereUniqueInput
    /**
     * In case the product_addon_groups found by the `where` argument doesn't exist, create a new product_addon_groups with this data.
     */
    create: XOR<product_addon_groupsCreateInput, product_addon_groupsUncheckedCreateInput>
    /**
     * In case the product_addon_groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_addon_groupsUpdateInput, product_addon_groupsUncheckedUpdateInput>
  }

  /**
   * product_addon_groups delete
   */
  export type product_addon_groupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsInclude<ExtArgs> | null
    /**
     * Filter which product_addon_groups to delete.
     */
    where: product_addon_groupsWhereUniqueInput
  }

  /**
   * product_addon_groups deleteMany
   */
  export type product_addon_groupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_addon_groups to delete
     */
    where?: product_addon_groupsWhereInput
  }

  /**
   * product_addon_groups without action
   */
  export type product_addon_groupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_addon_groups
     */
    select?: product_addon_groupsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_addon_groupsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    ticket_number: number | null
    total_amount: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    ticket_number: number | null
    total_amount: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    ticket_number: number | null
    created_at: Date | null
    total_amount: Decimal | null
    status: string | null
    cancel_reason: string | null
    payment_method: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    ticket_number: number | null
    created_at: Date | null
    total_amount: Decimal | null
    status: string | null
    cancel_reason: string | null
    payment_method: string | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    ticket_number: number
    created_at: number
    total_amount: number
    status: number
    cancel_reason: number
    payment_method: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    ticket_number?: true
    total_amount?: true
  }

  export type OrdersSumAggregateInputType = {
    ticket_number?: true
    total_amount?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    ticket_number?: true
    created_at?: true
    total_amount?: true
    status?: true
    cancel_reason?: true
    payment_method?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    ticket_number?: true
    created_at?: true
    total_amount?: true
    status?: true
    cancel_reason?: true
    payment_method?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    ticket_number?: true
    created_at?: true
    total_amount?: true
    status?: true
    cancel_reason?: true
    payment_method?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    ticket_number: number
    created_at: Date
    total_amount: Decimal
    status: string
    cancel_reason: string | null
    payment_method: string | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_number?: boolean
    created_at?: boolean
    total_amount?: boolean
    status?: boolean
    cancel_reason?: boolean
    payment_method?: boolean
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_number?: boolean
    created_at?: boolean
    total_amount?: boolean
    status?: boolean
    cancel_reason?: boolean
    payment_method?: boolean
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    ticket_number?: boolean
    created_at?: boolean
    total_amount?: boolean
    status?: boolean
    cancel_reason?: boolean
    payment_method?: boolean
  }

  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticket_number: number
      created_at: Date
      total_amount: Prisma.Decimal
      status: string
      cancel_reason: string | null
      payment_method: string | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_items<T extends orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the orders model
   */ 
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'String'>
    readonly ticket_number: FieldRef<"orders", 'Int'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
    readonly total_amount: FieldRef<"orders", 'Decimal'>
    readonly status: FieldRef<"orders", 'String'>
    readonly cancel_reason: FieldRef<"orders", 'String'>
    readonly payment_method: FieldRef<"orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
  }

  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model order_items
   */

  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    quantity: number | null
    unit_price: Decimal | null
  }

  export type Order_itemsSumAggregateOutputType = {
    quantity: number | null
    unit_price: Decimal | null
  }

  export type Order_itemsMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    product_id: string | null
    quantity: number | null
    unit_price: Decimal | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    product_id: string | null
    quantity: number | null
    unit_price: Decimal | null
  }

  export type Order_itemsCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    unit_price: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    quantity?: true
    unit_price?: true
  }

  export type Order_itemsSumAggregateInputType = {
    quantity?: true
    unit_price?: true
  }

  export type Order_itemsMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
  }

  export type Order_itemsCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type order_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithAggregationInput | order_itemsOrderByWithAggregationInput[]
    by: Order_itemsScalarFieldEnum[] | Order_itemsScalarFieldEnum
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }

  export type Order_itemsGroupByOutputType = {
    id: string
    order_id: string
    product_id: string
    quantity: number
    unit_price: Decimal
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
    order_item_addons?: boolean | order_items$order_item_addonsArgs<ExtArgs>
    _count?: boolean | Order_itemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
  }

  export type order_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
    order_item_addons?: boolean | order_items$order_item_addonsArgs<ExtArgs>
    _count?: boolean | Order_itemsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type order_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ordersDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $order_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items"
    objects: {
      order: Prisma.$ordersPayload<ExtArgs>
      product: Prisma.$productsPayload<ExtArgs>
      order_item_addons: Prisma.$order_item_addonsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      product_id: string
      quantity: number
      unit_price: Prisma.Decimal
    }, ExtArgs["result"]["order_items"]>
    composites: {}
  }

  type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = $Result.GetResult<Prisma.$order_itemsPayload, S>

  type order_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items'], meta: { name: 'order_items' } }
    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemsFindUniqueArgs>(args: SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order_items that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemsFindFirstArgs>(args?: SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_itemsFindManyArgs>(args?: SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
     */
    create<T extends order_itemsCreateArgs>(args: SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Order_items.
     * @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemsCreateManyArgs>(args?: SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_items and returns the data saved in the database.
     * @param {order_itemsCreateManyAndReturnArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_items and only return the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, order_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
     */
    delete<T extends order_itemsDeleteArgs>(args: SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemsUpdateArgs>(args: SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemsUpdateManyArgs>(args: SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
     */
    upsert<T extends order_itemsUpsertArgs>(args: SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsGroupByArgs} args - Group by arguments.
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
      T extends order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: order_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items model
   */
  readonly fields: order_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    order_item_addons<T extends order_items$order_item_addonsArgs<ExtArgs> = {}>(args?: Subset<T, order_items$order_item_addonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_item_addonsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the order_items model
   */ 
  interface order_itemsFieldRefs {
    readonly id: FieldRef<"order_items", 'String'>
    readonly order_id: FieldRef<"order_items", 'String'>
    readonly product_id: FieldRef<"order_items", 'String'>
    readonly quantity: FieldRef<"order_items", 'Int'>
    readonly unit_price: FieldRef<"order_items", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * order_items findUnique
   */
  export type order_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findFirst
   */
  export type order_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items create
   */
  export type order_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_items.
     */
    data: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }

  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
  }

  /**
   * order_items createManyAndReturn
   */
  export type order_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items update
   */
  export type order_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
  }

  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }

  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
  }

  /**
   * order_items.order_item_addons
   */
  export type order_items$order_item_addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsInclude<ExtArgs> | null
    where?: order_item_addonsWhereInput
    orderBy?: order_item_addonsOrderByWithRelationInput | order_item_addonsOrderByWithRelationInput[]
    cursor?: order_item_addonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_item_addonsScalarFieldEnum | Order_item_addonsScalarFieldEnum[]
  }

  /**
   * order_items without action
   */
  export type order_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
  }


  /**
   * Model order_item_addons
   */

  export type AggregateOrder_item_addons = {
    _count: Order_item_addonsCountAggregateOutputType | null
    _avg: Order_item_addonsAvgAggregateOutputType | null
    _sum: Order_item_addonsSumAggregateOutputType | null
    _min: Order_item_addonsMinAggregateOutputType | null
    _max: Order_item_addonsMaxAggregateOutputType | null
  }

  export type Order_item_addonsAvgAggregateOutputType = {
    quantity: number | null
    charged_price: Decimal | null
  }

  export type Order_item_addonsSumAggregateOutputType = {
    quantity: number | null
    charged_price: Decimal | null
  }

  export type Order_item_addonsMinAggregateOutputType = {
    id: string | null
    order_item_id: string | null
    addon_id: string | null
    quantity: number | null
    charged_price: Decimal | null
  }

  export type Order_item_addonsMaxAggregateOutputType = {
    id: string | null
    order_item_id: string | null
    addon_id: string | null
    quantity: number | null
    charged_price: Decimal | null
  }

  export type Order_item_addonsCountAggregateOutputType = {
    id: number
    order_item_id: number
    addon_id: number
    quantity: number
    charged_price: number
    _all: number
  }


  export type Order_item_addonsAvgAggregateInputType = {
    quantity?: true
    charged_price?: true
  }

  export type Order_item_addonsSumAggregateInputType = {
    quantity?: true
    charged_price?: true
  }

  export type Order_item_addonsMinAggregateInputType = {
    id?: true
    order_item_id?: true
    addon_id?: true
    quantity?: true
    charged_price?: true
  }

  export type Order_item_addonsMaxAggregateInputType = {
    id?: true
    order_item_id?: true
    addon_id?: true
    quantity?: true
    charged_price?: true
  }

  export type Order_item_addonsCountAggregateInputType = {
    id?: true
    order_item_id?: true
    addon_id?: true
    quantity?: true
    charged_price?: true
    _all?: true
  }

  export type Order_item_addonsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_item_addons to aggregate.
     */
    where?: order_item_addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_item_addons to fetch.
     */
    orderBy?: order_item_addonsOrderByWithRelationInput | order_item_addonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_item_addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_item_addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_item_addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_item_addons
    **/
    _count?: true | Order_item_addonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_item_addonsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_item_addonsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_item_addonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_item_addonsMaxAggregateInputType
  }

  export type GetOrder_item_addonsAggregateType<T extends Order_item_addonsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_item_addons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_item_addons[P]>
      : GetScalarType<T[P], AggregateOrder_item_addons[P]>
  }




  export type order_item_addonsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_item_addonsWhereInput
    orderBy?: order_item_addonsOrderByWithAggregationInput | order_item_addonsOrderByWithAggregationInput[]
    by: Order_item_addonsScalarFieldEnum[] | Order_item_addonsScalarFieldEnum
    having?: order_item_addonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_item_addonsCountAggregateInputType | true
    _avg?: Order_item_addonsAvgAggregateInputType
    _sum?: Order_item_addonsSumAggregateInputType
    _min?: Order_item_addonsMinAggregateInputType
    _max?: Order_item_addonsMaxAggregateInputType
  }

  export type Order_item_addonsGroupByOutputType = {
    id: string
    order_item_id: string
    addon_id: string
    quantity: number
    charged_price: Decimal
    _count: Order_item_addonsCountAggregateOutputType | null
    _avg: Order_item_addonsAvgAggregateOutputType | null
    _sum: Order_item_addonsSumAggregateOutputType | null
    _min: Order_item_addonsMinAggregateOutputType | null
    _max: Order_item_addonsMaxAggregateOutputType | null
  }

  type GetOrder_item_addonsGroupByPayload<T extends order_item_addonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_item_addonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_item_addonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_item_addonsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_item_addonsGroupByOutputType[P]>
        }
      >
    >


  export type order_item_addonsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_item_id?: boolean
    addon_id?: boolean
    quantity?: boolean
    charged_price?: boolean
    order_item?: boolean | order_itemsDefaultArgs<ExtArgs>
    addon?: boolean | addonsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item_addons"]>

  export type order_item_addonsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_item_id?: boolean
    addon_id?: boolean
    quantity?: boolean
    charged_price?: boolean
    order_item?: boolean | order_itemsDefaultArgs<ExtArgs>
    addon?: boolean | addonsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_item_addons"]>

  export type order_item_addonsSelectScalar = {
    id?: boolean
    order_item_id?: boolean
    addon_id?: boolean
    quantity?: boolean
    charged_price?: boolean
  }

  export type order_item_addonsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | order_itemsDefaultArgs<ExtArgs>
    addon?: boolean | addonsDefaultArgs<ExtArgs>
  }
  export type order_item_addonsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_item?: boolean | order_itemsDefaultArgs<ExtArgs>
    addon?: boolean | addonsDefaultArgs<ExtArgs>
  }

  export type $order_item_addonsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_item_addons"
    objects: {
      order_item: Prisma.$order_itemsPayload<ExtArgs>
      addon: Prisma.$addonsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_item_id: string
      addon_id: string
      quantity: number
      charged_price: Prisma.Decimal
    }, ExtArgs["result"]["order_item_addons"]>
    composites: {}
  }

  type order_item_addonsGetPayload<S extends boolean | null | undefined | order_item_addonsDefaultArgs> = $Result.GetResult<Prisma.$order_item_addonsPayload, S>

  type order_item_addonsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<order_item_addonsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Order_item_addonsCountAggregateInputType | true
    }

  export interface order_item_addonsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_item_addons'], meta: { name: 'order_item_addons' } }
    /**
     * Find zero or one Order_item_addons that matches the filter.
     * @param {order_item_addonsFindUniqueArgs} args - Arguments to find a Order_item_addons
     * @example
     * // Get one Order_item_addons
     * const order_item_addons = await prisma.order_item_addons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_item_addonsFindUniqueArgs>(args: SelectSubset<T, order_item_addonsFindUniqueArgs<ExtArgs>>): Prisma__order_item_addonsClient<$Result.GetResult<Prisma.$order_item_addonsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order_item_addons that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {order_item_addonsFindUniqueOrThrowArgs} args - Arguments to find a Order_item_addons
     * @example
     * // Get one Order_item_addons
     * const order_item_addons = await prisma.order_item_addons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_item_addonsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_item_addonsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_item_addonsClient<$Result.GetResult<Prisma.$order_item_addonsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order_item_addons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_item_addonsFindFirstArgs} args - Arguments to find a Order_item_addons
     * @example
     * // Get one Order_item_addons
     * const order_item_addons = await prisma.order_item_addons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_item_addonsFindFirstArgs>(args?: SelectSubset<T, order_item_addonsFindFirstArgs<ExtArgs>>): Prisma__order_item_addonsClient<$Result.GetResult<Prisma.$order_item_addonsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order_item_addons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_item_addonsFindFirstOrThrowArgs} args - Arguments to find a Order_item_addons
     * @example
     * // Get one Order_item_addons
     * const order_item_addons = await prisma.order_item_addons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_item_addonsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_item_addonsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_item_addonsClient<$Result.GetResult<Prisma.$order_item_addonsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Order_item_addons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_item_addonsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_item_addons
     * const order_item_addons = await prisma.order_item_addons.findMany()
     * 
     * // Get first 10 Order_item_addons
     * const order_item_addons = await prisma.order_item_addons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_item_addonsWithIdOnly = await prisma.order_item_addons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_item_addonsFindManyArgs>(args?: SelectSubset<T, order_item_addonsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_item_addonsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order_item_addons.
     * @param {order_item_addonsCreateArgs} args - Arguments to create a Order_item_addons.
     * @example
     * // Create one Order_item_addons
     * const Order_item_addons = await prisma.order_item_addons.create({
     *   data: {
     *     // ... data to create a Order_item_addons
     *   }
     * })
     * 
     */
    create<T extends order_item_addonsCreateArgs>(args: SelectSubset<T, order_item_addonsCreateArgs<ExtArgs>>): Prisma__order_item_addonsClient<$Result.GetResult<Prisma.$order_item_addonsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Order_item_addons.
     * @param {order_item_addonsCreateManyArgs} args - Arguments to create many Order_item_addons.
     * @example
     * // Create many Order_item_addons
     * const order_item_addons = await prisma.order_item_addons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_item_addonsCreateManyArgs>(args?: SelectSubset<T, order_item_addonsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_item_addons and returns the data saved in the database.
     * @param {order_item_addonsCreateManyAndReturnArgs} args - Arguments to create many Order_item_addons.
     * @example
     * // Create many Order_item_addons
     * const order_item_addons = await prisma.order_item_addons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_item_addons and only return the `id`
     * const order_item_addonsWithIdOnly = await prisma.order_item_addons.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_item_addonsCreateManyAndReturnArgs>(args?: SelectSubset<T, order_item_addonsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_item_addonsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order_item_addons.
     * @param {order_item_addonsDeleteArgs} args - Arguments to delete one Order_item_addons.
     * @example
     * // Delete one Order_item_addons
     * const Order_item_addons = await prisma.order_item_addons.delete({
     *   where: {
     *     // ... filter to delete one Order_item_addons
     *   }
     * })
     * 
     */
    delete<T extends order_item_addonsDeleteArgs>(args: SelectSubset<T, order_item_addonsDeleteArgs<ExtArgs>>): Prisma__order_item_addonsClient<$Result.GetResult<Prisma.$order_item_addonsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order_item_addons.
     * @param {order_item_addonsUpdateArgs} args - Arguments to update one Order_item_addons.
     * @example
     * // Update one Order_item_addons
     * const order_item_addons = await prisma.order_item_addons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_item_addonsUpdateArgs>(args: SelectSubset<T, order_item_addonsUpdateArgs<ExtArgs>>): Prisma__order_item_addonsClient<$Result.GetResult<Prisma.$order_item_addonsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Order_item_addons.
     * @param {order_item_addonsDeleteManyArgs} args - Arguments to filter Order_item_addons to delete.
     * @example
     * // Delete a few Order_item_addons
     * const { count } = await prisma.order_item_addons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_item_addonsDeleteManyArgs>(args?: SelectSubset<T, order_item_addonsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_item_addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_item_addonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_item_addons
     * const order_item_addons = await prisma.order_item_addons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_item_addonsUpdateManyArgs>(args: SelectSubset<T, order_item_addonsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order_item_addons.
     * @param {order_item_addonsUpsertArgs} args - Arguments to update or create a Order_item_addons.
     * @example
     * // Update or create a Order_item_addons
     * const order_item_addons = await prisma.order_item_addons.upsert({
     *   create: {
     *     // ... data to create a Order_item_addons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_item_addons we want to update
     *   }
     * })
     */
    upsert<T extends order_item_addonsUpsertArgs>(args: SelectSubset<T, order_item_addonsUpsertArgs<ExtArgs>>): Prisma__order_item_addonsClient<$Result.GetResult<Prisma.$order_item_addonsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Order_item_addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_item_addonsCountArgs} args - Arguments to filter Order_item_addons to count.
     * @example
     * // Count the number of Order_item_addons
     * const count = await prisma.order_item_addons.count({
     *   where: {
     *     // ... the filter for the Order_item_addons we want to count
     *   }
     * })
    **/
    count<T extends order_item_addonsCountArgs>(
      args?: Subset<T, order_item_addonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_item_addonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_item_addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_item_addonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_item_addonsAggregateArgs>(args: Subset<T, Order_item_addonsAggregateArgs>): Prisma.PrismaPromise<GetOrder_item_addonsAggregateType<T>>

    /**
     * Group by Order_item_addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_item_addonsGroupByArgs} args - Group by arguments.
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
      T extends order_item_addonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_item_addonsGroupByArgs['orderBy'] }
        : { orderBy?: order_item_addonsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_item_addonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_item_addonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_item_addons model
   */
  readonly fields: order_item_addonsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_item_addons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_item_addonsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_item<T extends order_itemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, order_itemsDefaultArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    addon<T extends addonsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, addonsDefaultArgs<ExtArgs>>): Prisma__addonsClient<$Result.GetResult<Prisma.$addonsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the order_item_addons model
   */ 
  interface order_item_addonsFieldRefs {
    readonly id: FieldRef<"order_item_addons", 'String'>
    readonly order_item_id: FieldRef<"order_item_addons", 'String'>
    readonly addon_id: FieldRef<"order_item_addons", 'String'>
    readonly quantity: FieldRef<"order_item_addons", 'Int'>
    readonly charged_price: FieldRef<"order_item_addons", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * order_item_addons findUnique
   */
  export type order_item_addonsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsInclude<ExtArgs> | null
    /**
     * Filter, which order_item_addons to fetch.
     */
    where: order_item_addonsWhereUniqueInput
  }

  /**
   * order_item_addons findUniqueOrThrow
   */
  export type order_item_addonsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsInclude<ExtArgs> | null
    /**
     * Filter, which order_item_addons to fetch.
     */
    where: order_item_addonsWhereUniqueInput
  }

  /**
   * order_item_addons findFirst
   */
  export type order_item_addonsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsInclude<ExtArgs> | null
    /**
     * Filter, which order_item_addons to fetch.
     */
    where?: order_item_addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_item_addons to fetch.
     */
    orderBy?: order_item_addonsOrderByWithRelationInput | order_item_addonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_item_addons.
     */
    cursor?: order_item_addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_item_addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_item_addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_item_addons.
     */
    distinct?: Order_item_addonsScalarFieldEnum | Order_item_addonsScalarFieldEnum[]
  }

  /**
   * order_item_addons findFirstOrThrow
   */
  export type order_item_addonsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsInclude<ExtArgs> | null
    /**
     * Filter, which order_item_addons to fetch.
     */
    where?: order_item_addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_item_addons to fetch.
     */
    orderBy?: order_item_addonsOrderByWithRelationInput | order_item_addonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_item_addons.
     */
    cursor?: order_item_addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_item_addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_item_addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_item_addons.
     */
    distinct?: Order_item_addonsScalarFieldEnum | Order_item_addonsScalarFieldEnum[]
  }

  /**
   * order_item_addons findMany
   */
  export type order_item_addonsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsInclude<ExtArgs> | null
    /**
     * Filter, which order_item_addons to fetch.
     */
    where?: order_item_addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_item_addons to fetch.
     */
    orderBy?: order_item_addonsOrderByWithRelationInput | order_item_addonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_item_addons.
     */
    cursor?: order_item_addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_item_addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_item_addons.
     */
    skip?: number
    distinct?: Order_item_addonsScalarFieldEnum | Order_item_addonsScalarFieldEnum[]
  }

  /**
   * order_item_addons create
   */
  export type order_item_addonsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_item_addons.
     */
    data: XOR<order_item_addonsCreateInput, order_item_addonsUncheckedCreateInput>
  }

  /**
   * order_item_addons createMany
   */
  export type order_item_addonsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_item_addons.
     */
    data: order_item_addonsCreateManyInput | order_item_addonsCreateManyInput[]
  }

  /**
   * order_item_addons createManyAndReturn
   */
  export type order_item_addonsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many order_item_addons.
     */
    data: order_item_addonsCreateManyInput | order_item_addonsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_item_addons update
   */
  export type order_item_addonsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_item_addons.
     */
    data: XOR<order_item_addonsUpdateInput, order_item_addonsUncheckedUpdateInput>
    /**
     * Choose, which order_item_addons to update.
     */
    where: order_item_addonsWhereUniqueInput
  }

  /**
   * order_item_addons updateMany
   */
  export type order_item_addonsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_item_addons.
     */
    data: XOR<order_item_addonsUpdateManyMutationInput, order_item_addonsUncheckedUpdateManyInput>
    /**
     * Filter which order_item_addons to update
     */
    where?: order_item_addonsWhereInput
  }

  /**
   * order_item_addons upsert
   */
  export type order_item_addonsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_item_addons to update in case it exists.
     */
    where: order_item_addonsWhereUniqueInput
    /**
     * In case the order_item_addons found by the `where` argument doesn't exist, create a new order_item_addons with this data.
     */
    create: XOR<order_item_addonsCreateInput, order_item_addonsUncheckedCreateInput>
    /**
     * In case the order_item_addons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_item_addonsUpdateInput, order_item_addonsUncheckedUpdateInput>
  }

  /**
   * order_item_addons delete
   */
  export type order_item_addonsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsInclude<ExtArgs> | null
    /**
     * Filter which order_item_addons to delete.
     */
    where: order_item_addonsWhereUniqueInput
  }

  /**
   * order_item_addons deleteMany
   */
  export type order_item_addonsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_item_addons to delete
     */
    where?: order_item_addonsWhereInput
  }

  /**
   * order_item_addons without action
   */
  export type order_item_addonsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_item_addons
     */
    select?: order_item_addonsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_item_addonsInclude<ExtArgs> | null
  }


  /**
   * Model settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    company_name: string | null
    company_document: string | null
    logo_path: string | null
    images_directory: string | null
    updated_at: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    company_name: string | null
    company_document: string | null
    logo_path: string | null
    images_directory: string | null
    updated_at: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    company_name: number
    company_document: number
    logo_path: number
    images_directory: number
    updated_at: number
    _all: number
  }


  export type SettingsMinAggregateInputType = {
    id?: true
    company_name?: true
    company_document?: true
    logo_path?: true
    images_directory?: true
    updated_at?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    company_name?: true
    company_document?: true
    logo_path?: true
    images_directory?: true
    updated_at?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    company_name?: true
    company_document?: true
    logo_path?: true
    images_directory?: true
    updated_at?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to aggregate.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settingsWhereInput
    orderBy?: settingsOrderByWithAggregationInput | settingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    company_name: string | null
    company_document: string | null
    logo_path: string | null
    images_directory: string | null
    updated_at: Date
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    company_document?: boolean
    logo_path?: boolean
    images_directory?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_name?: boolean
    company_document?: boolean
    logo_path?: boolean
    images_directory?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectScalar = {
    id?: boolean
    company_name?: boolean
    company_document?: boolean
    logo_path?: boolean
    images_directory?: boolean
    updated_at?: boolean
  }


  export type $settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_name: string | null
      company_document: string | null
      logo_path: string | null
      images_directory: string | null
      updated_at: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type settingsGetPayload<S extends boolean | null | undefined | settingsDefaultArgs> = $Result.GetResult<Prisma.$settingsPayload, S>

  type settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<settingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['settings'], meta: { name: 'settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {settingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settingsFindUniqueArgs>(args: SelectSubset<T, settingsFindUniqueArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {settingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settingsFindFirstArgs>(args?: SelectSubset<T, settingsFindFirstArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends settingsFindManyArgs>(args?: SelectSubset<T, settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Settings.
     * @param {settingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends settingsCreateArgs>(args: SelectSubset<T, settingsCreateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Settings.
     * @param {settingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settingsCreateManyArgs>(args?: SelectSubset<T, settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {settingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends settingsCreateManyAndReturnArgs>(args?: SelectSubset<T, settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Settings.
     * @param {settingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends settingsDeleteArgs>(args: SelectSubset<T, settingsDeleteArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Settings.
     * @param {settingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settingsUpdateArgs>(args: SelectSubset<T, settingsUpdateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {settingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settingsDeleteManyArgs>(args?: SelectSubset<T, settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settingsUpdateManyArgs>(args: SelectSubset<T, settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settings.
     * @param {settingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends settingsUpsertArgs>(args: SelectSubset<T, settingsUpsertArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingsCountArgs>(
      args?: Subset<T, settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsGroupByArgs} args - Group by arguments.
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
      T extends settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settingsGroupByArgs['orderBy'] }
        : { orderBy?: settingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the settings model
   */
  readonly fields: settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the settings model
   */ 
  interface settingsFieldRefs {
    readonly id: FieldRef<"settings", 'String'>
    readonly company_name: FieldRef<"settings", 'String'>
    readonly company_document: FieldRef<"settings", 'String'>
    readonly logo_path: FieldRef<"settings", 'String'>
    readonly images_directory: FieldRef<"settings", 'String'>
    readonly updated_at: FieldRef<"settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * settings findUnique
   */
  export type settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findUniqueOrThrow
   */
  export type settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findFirst
   */
  export type settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findFirstOrThrow
   */
  export type settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findMany
   */
  export type settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings create
   */
  export type settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * The data needed to create a settings.
     */
    data: XOR<settingsCreateInput, settingsUncheckedCreateInput>
  }

  /**
   * settings createMany
   */
  export type settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
  }

  /**
   * settings createManyAndReturn
   */
  export type settingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
  }

  /**
   * settings update
   */
  export type settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * The data needed to update a settings.
     */
    data: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
    /**
     * Choose, which settings to update.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings updateMany
   */
  export type settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
  }

  /**
   * settings upsert
   */
  export type settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * The filter to search for the settings to update in case it exists.
     */
    where: settingsWhereUniqueInput
    /**
     * In case the settings found by the `where` argument doesn't exist, create a new settings with this data.
     */
    create: XOR<settingsCreateInput, settingsUncheckedCreateInput>
    /**
     * In case the settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
  }

  /**
   * settings delete
   */
  export type settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter which settings to delete.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings deleteMany
   */
  export type settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to delete
     */
    where?: settingsWhereInput
  }

  /**
   * settings without action
   */
  export type settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image_path: 'image_path'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    name: 'name',
    description: 'description',
    base_price: 'base_price',
    image_path: 'image_path'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Addon_groupsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type Addon_groupsScalarFieldEnum = (typeof Addon_groupsScalarFieldEnum)[keyof typeof Addon_groupsScalarFieldEnum]


  export const AddonsScalarFieldEnum: {
    id: 'id',
    addon_group_id: 'addon_group_id',
    name: 'name',
    image_path: 'image_path',
    price: 'price'
  };

  export type AddonsScalarFieldEnum = (typeof AddonsScalarFieldEnum)[keyof typeof AddonsScalarFieldEnum]


  export const Product_addon_groupsScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    addon_group_id: 'addon_group_id',
    min_selections: 'min_selections',
    max_selections: 'max_selections',
    sort_order: 'sort_order'
  };

  export type Product_addon_groupsScalarFieldEnum = (typeof Product_addon_groupsScalarFieldEnum)[keyof typeof Product_addon_groupsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    ticket_number: 'ticket_number',
    created_at: 'created_at',
    total_amount: 'total_amount',
    status: 'status',
    cancel_reason: 'cancel_reason',
    payment_method: 'payment_method'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity',
    unit_price: 'unit_price'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const Order_item_addonsScalarFieldEnum: {
    id: 'id',
    order_item_id: 'order_item_id',
    addon_id: 'addon_id',
    quantity: 'quantity',
    charged_price: 'charged_price'
  };

  export type Order_item_addonsScalarFieldEnum = (typeof Order_item_addonsScalarFieldEnum)[keyof typeof Order_item_addonsScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    company_name: 'company_name',
    company_document: 'company_document',
    logo_path: 'logo_path',
    images_directory: 'images_directory',
    updated_at: 'updated_at'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: StringFilter<"categories"> | string
    name?: StringFilter<"categories"> | string
    description?: StringNullableFilter<"categories"> | string | null
    image_path?: StringNullableFilter<"categories"> | string | null
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image_path?: SortOrderInput | SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    name?: StringFilter<"categories"> | string
    description?: StringNullableFilter<"categories"> | string | null
    image_path?: StringNullableFilter<"categories"> | string | null
    products?: ProductsListRelationFilter
  }, "id">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image_path?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"categories"> | string
    name?: StringWithAggregatesFilter<"categories"> | string
    description?: StringNullableWithAggregatesFilter<"categories"> | string | null
    image_path?: StringNullableWithAggregatesFilter<"categories"> | string | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: StringFilter<"products"> | string
    category_id?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    base_price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    image_path?: StringNullableFilter<"products"> | string | null
    category?: XOR<CategoriesRelationFilter, categoriesWhereInput>
    product_addon_groups?: Product_addon_groupsListRelationFilter
    order_items?: Order_itemsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    base_price?: SortOrder
    image_path?: SortOrderInput | SortOrder
    category?: categoriesOrderByWithRelationInput
    product_addon_groups?: product_addon_groupsOrderByRelationAggregateInput
    order_items?: order_itemsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    category_id?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    base_price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    image_path?: StringNullableFilter<"products"> | string | null
    category?: XOR<CategoriesRelationFilter, categoriesWhereInput>
    product_addon_groups?: Product_addon_groupsListRelationFilter
    order_items?: Order_itemsListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    base_price?: SortOrder
    image_path?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"products"> | string
    category_id?: StringWithAggregatesFilter<"products"> | string
    name?: StringWithAggregatesFilter<"products"> | string
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    base_price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
    image_path?: StringNullableWithAggregatesFilter<"products"> | string | null
  }

  export type addon_groupsWhereInput = {
    AND?: addon_groupsWhereInput | addon_groupsWhereInput[]
    OR?: addon_groupsWhereInput[]
    NOT?: addon_groupsWhereInput | addon_groupsWhereInput[]
    id?: StringFilter<"addon_groups"> | string
    name?: StringFilter<"addon_groups"> | string
    description?: StringNullableFilter<"addon_groups"> | string | null
    addons?: AddonsListRelationFilter
    product_addon_groups?: Product_addon_groupsListRelationFilter
  }

  export type addon_groupsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    addons?: addonsOrderByRelationAggregateInput
    product_addon_groups?: product_addon_groupsOrderByRelationAggregateInput
  }

  export type addon_groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: addon_groupsWhereInput | addon_groupsWhereInput[]
    OR?: addon_groupsWhereInput[]
    NOT?: addon_groupsWhereInput | addon_groupsWhereInput[]
    name?: StringFilter<"addon_groups"> | string
    description?: StringNullableFilter<"addon_groups"> | string | null
    addons?: AddonsListRelationFilter
    product_addon_groups?: Product_addon_groupsListRelationFilter
  }, "id">

  export type addon_groupsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: addon_groupsCountOrderByAggregateInput
    _max?: addon_groupsMaxOrderByAggregateInput
    _min?: addon_groupsMinOrderByAggregateInput
  }

  export type addon_groupsScalarWhereWithAggregatesInput = {
    AND?: addon_groupsScalarWhereWithAggregatesInput | addon_groupsScalarWhereWithAggregatesInput[]
    OR?: addon_groupsScalarWhereWithAggregatesInput[]
    NOT?: addon_groupsScalarWhereWithAggregatesInput | addon_groupsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"addon_groups"> | string
    name?: StringWithAggregatesFilter<"addon_groups"> | string
    description?: StringNullableWithAggregatesFilter<"addon_groups"> | string | null
  }

  export type addonsWhereInput = {
    AND?: addonsWhereInput | addonsWhereInput[]
    OR?: addonsWhereInput[]
    NOT?: addonsWhereInput | addonsWhereInput[]
    id?: StringFilter<"addons"> | string
    addon_group_id?: StringFilter<"addons"> | string
    name?: StringFilter<"addons"> | string
    image_path?: StringNullableFilter<"addons"> | string | null
    price?: DecimalFilter<"addons"> | Decimal | DecimalJsLike | number | string
    addon_group?: XOR<Addon_groupsRelationFilter, addon_groupsWhereInput>
    order_item_addons?: Order_item_addonsListRelationFilter
  }

  export type addonsOrderByWithRelationInput = {
    id?: SortOrder
    addon_group_id?: SortOrder
    name?: SortOrder
    image_path?: SortOrderInput | SortOrder
    price?: SortOrder
    addon_group?: addon_groupsOrderByWithRelationInput
    order_item_addons?: order_item_addonsOrderByRelationAggregateInput
  }

  export type addonsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: addonsWhereInput | addonsWhereInput[]
    OR?: addonsWhereInput[]
    NOT?: addonsWhereInput | addonsWhereInput[]
    addon_group_id?: StringFilter<"addons"> | string
    name?: StringFilter<"addons"> | string
    image_path?: StringNullableFilter<"addons"> | string | null
    price?: DecimalFilter<"addons"> | Decimal | DecimalJsLike | number | string
    addon_group?: XOR<Addon_groupsRelationFilter, addon_groupsWhereInput>
    order_item_addons?: Order_item_addonsListRelationFilter
  }, "id">

  export type addonsOrderByWithAggregationInput = {
    id?: SortOrder
    addon_group_id?: SortOrder
    name?: SortOrder
    image_path?: SortOrderInput | SortOrder
    price?: SortOrder
    _count?: addonsCountOrderByAggregateInput
    _avg?: addonsAvgOrderByAggregateInput
    _max?: addonsMaxOrderByAggregateInput
    _min?: addonsMinOrderByAggregateInput
    _sum?: addonsSumOrderByAggregateInput
  }

  export type addonsScalarWhereWithAggregatesInput = {
    AND?: addonsScalarWhereWithAggregatesInput | addonsScalarWhereWithAggregatesInput[]
    OR?: addonsScalarWhereWithAggregatesInput[]
    NOT?: addonsScalarWhereWithAggregatesInput | addonsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"addons"> | string
    addon_group_id?: StringWithAggregatesFilter<"addons"> | string
    name?: StringWithAggregatesFilter<"addons"> | string
    image_path?: StringNullableWithAggregatesFilter<"addons"> | string | null
    price?: DecimalWithAggregatesFilter<"addons"> | Decimal | DecimalJsLike | number | string
  }

  export type product_addon_groupsWhereInput = {
    AND?: product_addon_groupsWhereInput | product_addon_groupsWhereInput[]
    OR?: product_addon_groupsWhereInput[]
    NOT?: product_addon_groupsWhereInput | product_addon_groupsWhereInput[]
    id?: StringFilter<"product_addon_groups"> | string
    product_id?: StringFilter<"product_addon_groups"> | string
    addon_group_id?: StringFilter<"product_addon_groups"> | string
    min_selections?: IntFilter<"product_addon_groups"> | number
    max_selections?: IntFilter<"product_addon_groups"> | number
    sort_order?: IntFilter<"product_addon_groups"> | number
    product?: XOR<ProductsRelationFilter, productsWhereInput>
    addon_group?: XOR<Addon_groupsRelationFilter, addon_groupsWhereInput>
  }

  export type product_addon_groupsOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    addon_group_id?: SortOrder
    min_selections?: SortOrder
    max_selections?: SortOrder
    sort_order?: SortOrder
    product?: productsOrderByWithRelationInput
    addon_group?: addon_groupsOrderByWithRelationInput
  }

  export type product_addon_groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: product_addon_groupsWhereInput | product_addon_groupsWhereInput[]
    OR?: product_addon_groupsWhereInput[]
    NOT?: product_addon_groupsWhereInput | product_addon_groupsWhereInput[]
    product_id?: StringFilter<"product_addon_groups"> | string
    addon_group_id?: StringFilter<"product_addon_groups"> | string
    min_selections?: IntFilter<"product_addon_groups"> | number
    max_selections?: IntFilter<"product_addon_groups"> | number
    sort_order?: IntFilter<"product_addon_groups"> | number
    product?: XOR<ProductsRelationFilter, productsWhereInput>
    addon_group?: XOR<Addon_groupsRelationFilter, addon_groupsWhereInput>
  }, "id">

  export type product_addon_groupsOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    addon_group_id?: SortOrder
    min_selections?: SortOrder
    max_selections?: SortOrder
    sort_order?: SortOrder
    _count?: product_addon_groupsCountOrderByAggregateInput
    _avg?: product_addon_groupsAvgOrderByAggregateInput
    _max?: product_addon_groupsMaxOrderByAggregateInput
    _min?: product_addon_groupsMinOrderByAggregateInput
    _sum?: product_addon_groupsSumOrderByAggregateInput
  }

  export type product_addon_groupsScalarWhereWithAggregatesInput = {
    AND?: product_addon_groupsScalarWhereWithAggregatesInput | product_addon_groupsScalarWhereWithAggregatesInput[]
    OR?: product_addon_groupsScalarWhereWithAggregatesInput[]
    NOT?: product_addon_groupsScalarWhereWithAggregatesInput | product_addon_groupsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"product_addon_groups"> | string
    product_id?: StringWithAggregatesFilter<"product_addon_groups"> | string
    addon_group_id?: StringWithAggregatesFilter<"product_addon_groups"> | string
    min_selections?: IntWithAggregatesFilter<"product_addon_groups"> | number
    max_selections?: IntWithAggregatesFilter<"product_addon_groups"> | number
    sort_order?: IntWithAggregatesFilter<"product_addon_groups"> | number
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: StringFilter<"orders"> | string
    ticket_number?: IntFilter<"orders"> | number
    created_at?: DateTimeFilter<"orders"> | Date | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"orders"> | string
    cancel_reason?: StringNullableFilter<"orders"> | string | null
    payment_method?: StringNullableFilter<"orders"> | string | null
    order_items?: Order_itemsListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    ticket_number?: SortOrder
    created_at?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    cancel_reason?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    order_items?: order_itemsOrderByRelationAggregateInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    ticket_number?: IntFilter<"orders"> | number
    created_at?: DateTimeFilter<"orders"> | Date | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"orders"> | string
    cancel_reason?: StringNullableFilter<"orders"> | string | null
    payment_method?: StringNullableFilter<"orders"> | string | null
    order_items?: Order_itemsListRelationFilter
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    ticket_number?: SortOrder
    created_at?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    cancel_reason?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"orders"> | string
    ticket_number?: IntWithAggregatesFilter<"orders"> | number
    created_at?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    total_amount?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"orders"> | string
    cancel_reason?: StringNullableWithAggregatesFilter<"orders"> | string | null
    payment_method?: StringNullableWithAggregatesFilter<"orders"> | string | null
  }

  export type order_itemsWhereInput = {
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    id?: StringFilter<"order_items"> | string
    order_id?: StringFilter<"order_items"> | string
    product_id?: StringFilter<"order_items"> | string
    quantity?: IntFilter<"order_items"> | number
    unit_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    order?: XOR<OrdersRelationFilter, ordersWhereInput>
    product?: XOR<ProductsRelationFilter, productsWhereInput>
    order_item_addons?: Order_item_addonsListRelationFilter
  }

  export type order_itemsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    order?: ordersOrderByWithRelationInput
    product?: productsOrderByWithRelationInput
    order_item_addons?: order_item_addonsOrderByRelationAggregateInput
  }

  export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    order_id?: StringFilter<"order_items"> | string
    product_id?: StringFilter<"order_items"> | string
    quantity?: IntFilter<"order_items"> | number
    unit_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    order?: XOR<OrdersRelationFilter, ordersWhereInput>
    product?: XOR<ProductsRelationFilter, productsWhereInput>
    order_item_addons?: Order_item_addonsListRelationFilter
  }, "id">

  export type order_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    OR?: order_itemsScalarWhereWithAggregatesInput[]
    NOT?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order_items"> | string
    order_id?: StringWithAggregatesFilter<"order_items"> | string
    product_id?: StringWithAggregatesFilter<"order_items"> | string
    quantity?: IntWithAggregatesFilter<"order_items"> | number
    unit_price?: DecimalWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsWhereInput = {
    AND?: order_item_addonsWhereInput | order_item_addonsWhereInput[]
    OR?: order_item_addonsWhereInput[]
    NOT?: order_item_addonsWhereInput | order_item_addonsWhereInput[]
    id?: StringFilter<"order_item_addons"> | string
    order_item_id?: StringFilter<"order_item_addons"> | string
    addon_id?: StringFilter<"order_item_addons"> | string
    quantity?: IntFilter<"order_item_addons"> | number
    charged_price?: DecimalFilter<"order_item_addons"> | Decimal | DecimalJsLike | number | string
    order_item?: XOR<Order_itemsRelationFilter, order_itemsWhereInput>
    addon?: XOR<AddonsRelationFilter, addonsWhereInput>
  }

  export type order_item_addonsOrderByWithRelationInput = {
    id?: SortOrder
    order_item_id?: SortOrder
    addon_id?: SortOrder
    quantity?: SortOrder
    charged_price?: SortOrder
    order_item?: order_itemsOrderByWithRelationInput
    addon?: addonsOrderByWithRelationInput
  }

  export type order_item_addonsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: order_item_addonsWhereInput | order_item_addonsWhereInput[]
    OR?: order_item_addonsWhereInput[]
    NOT?: order_item_addonsWhereInput | order_item_addonsWhereInput[]
    order_item_id?: StringFilter<"order_item_addons"> | string
    addon_id?: StringFilter<"order_item_addons"> | string
    quantity?: IntFilter<"order_item_addons"> | number
    charged_price?: DecimalFilter<"order_item_addons"> | Decimal | DecimalJsLike | number | string
    order_item?: XOR<Order_itemsRelationFilter, order_itemsWhereInput>
    addon?: XOR<AddonsRelationFilter, addonsWhereInput>
  }, "id">

  export type order_item_addonsOrderByWithAggregationInput = {
    id?: SortOrder
    order_item_id?: SortOrder
    addon_id?: SortOrder
    quantity?: SortOrder
    charged_price?: SortOrder
    _count?: order_item_addonsCountOrderByAggregateInput
    _avg?: order_item_addonsAvgOrderByAggregateInput
    _max?: order_item_addonsMaxOrderByAggregateInput
    _min?: order_item_addonsMinOrderByAggregateInput
    _sum?: order_item_addonsSumOrderByAggregateInput
  }

  export type order_item_addonsScalarWhereWithAggregatesInput = {
    AND?: order_item_addonsScalarWhereWithAggregatesInput | order_item_addonsScalarWhereWithAggregatesInput[]
    OR?: order_item_addonsScalarWhereWithAggregatesInput[]
    NOT?: order_item_addonsScalarWhereWithAggregatesInput | order_item_addonsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order_item_addons"> | string
    order_item_id?: StringWithAggregatesFilter<"order_item_addons"> | string
    addon_id?: StringWithAggregatesFilter<"order_item_addons"> | string
    quantity?: IntWithAggregatesFilter<"order_item_addons"> | number
    charged_price?: DecimalWithAggregatesFilter<"order_item_addons"> | Decimal | DecimalJsLike | number | string
  }

  export type settingsWhereInput = {
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    id?: StringFilter<"settings"> | string
    company_name?: StringNullableFilter<"settings"> | string | null
    company_document?: StringNullableFilter<"settings"> | string | null
    logo_path?: StringNullableFilter<"settings"> | string | null
    images_directory?: StringNullableFilter<"settings"> | string | null
    updated_at?: DateTimeFilter<"settings"> | Date | string
  }

  export type settingsOrderByWithRelationInput = {
    id?: SortOrder
    company_name?: SortOrderInput | SortOrder
    company_document?: SortOrderInput | SortOrder
    logo_path?: SortOrderInput | SortOrder
    images_directory?: SortOrderInput | SortOrder
    updated_at?: SortOrder
  }

  export type settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    company_name?: StringNullableFilter<"settings"> | string | null
    company_document?: StringNullableFilter<"settings"> | string | null
    logo_path?: StringNullableFilter<"settings"> | string | null
    images_directory?: StringNullableFilter<"settings"> | string | null
    updated_at?: DateTimeFilter<"settings"> | Date | string
  }, "id">

  export type settingsOrderByWithAggregationInput = {
    id?: SortOrder
    company_name?: SortOrderInput | SortOrder
    company_document?: SortOrderInput | SortOrder
    logo_path?: SortOrderInput | SortOrder
    images_directory?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: settingsCountOrderByAggregateInput
    _max?: settingsMaxOrderByAggregateInput
    _min?: settingsMinOrderByAggregateInput
  }

  export type settingsScalarWhereWithAggregatesInput = {
    AND?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    OR?: settingsScalarWhereWithAggregatesInput[]
    NOT?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"settings"> | string
    company_name?: StringNullableWithAggregatesFilter<"settings"> | string | null
    company_document?: StringNullableWithAggregatesFilter<"settings"> | string | null
    logo_path?: StringNullableWithAggregatesFilter<"settings"> | string | null
    images_directory?: StringNullableWithAggregatesFilter<"settings"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"settings"> | Date | string
  }

  export type categoriesCreateInput = {
    id?: string
    name: string
    description?: string | null
    image_path?: string | null
    products?: productsCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    image_path?: string | null
    products?: productsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    image_path?: string | null
  }

  export type categoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsCreateInput = {
    id?: string
    name: string
    description?: string | null
    base_price: Decimal | DecimalJsLike | number | string
    image_path?: string | null
    category: categoriesCreateNestedOneWithoutProductsInput
    product_addon_groups?: product_addon_groupsCreateNestedManyWithoutProductInput
    order_items?: order_itemsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateInput = {
    id?: string
    category_id: string
    name: string
    description?: string | null
    base_price: Decimal | DecimalJsLike | number | string
    image_path?: string | null
    product_addon_groups?: product_addon_groupsUncheckedCreateNestedManyWithoutProductInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    product_addon_groups?: product_addon_groupsUpdateManyWithoutProductNestedInput
    order_items?: order_itemsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    product_addon_groups?: product_addon_groupsUncheckedUpdateManyWithoutProductNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsCreateManyInput = {
    id?: string
    category_id: string
    name: string
    description?: string | null
    base_price: Decimal | DecimalJsLike | number | string
    image_path?: string | null
  }

  export type productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type addon_groupsCreateInput = {
    id?: string
    name: string
    description?: string | null
    addons?: addonsCreateNestedManyWithoutAddon_groupInput
    product_addon_groups?: product_addon_groupsCreateNestedManyWithoutAddon_groupInput
  }

  export type addon_groupsUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    addons?: addonsUncheckedCreateNestedManyWithoutAddon_groupInput
    product_addon_groups?: product_addon_groupsUncheckedCreateNestedManyWithoutAddon_groupInput
  }

  export type addon_groupsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addons?: addonsUpdateManyWithoutAddon_groupNestedInput
    product_addon_groups?: product_addon_groupsUpdateManyWithoutAddon_groupNestedInput
  }

  export type addon_groupsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addons?: addonsUncheckedUpdateManyWithoutAddon_groupNestedInput
    product_addon_groups?: product_addon_groupsUncheckedUpdateManyWithoutAddon_groupNestedInput
  }

  export type addon_groupsCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type addon_groupsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type addon_groupsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type addonsCreateInput = {
    id?: string
    name: string
    image_path?: string | null
    price: Decimal | DecimalJsLike | number | string
    addon_group: addon_groupsCreateNestedOneWithoutAddonsInput
    order_item_addons?: order_item_addonsCreateNestedManyWithoutAddonInput
  }

  export type addonsUncheckedCreateInput = {
    id?: string
    addon_group_id: string
    name: string
    image_path?: string | null
    price: Decimal | DecimalJsLike | number | string
    order_item_addons?: order_item_addonsUncheckedCreateNestedManyWithoutAddonInput
  }

  export type addonsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addon_group?: addon_groupsUpdateOneRequiredWithoutAddonsNestedInput
    order_item_addons?: order_item_addonsUpdateManyWithoutAddonNestedInput
  }

  export type addonsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addon_group_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_item_addons?: order_item_addonsUncheckedUpdateManyWithoutAddonNestedInput
  }

  export type addonsCreateManyInput = {
    id?: string
    addon_group_id: string
    name: string
    image_path?: string | null
    price: Decimal | DecimalJsLike | number | string
  }

  export type addonsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type addonsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    addon_group_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type product_addon_groupsCreateInput = {
    id?: string
    min_selections?: number
    max_selections: number
    sort_order?: number
    product: productsCreateNestedOneWithoutProduct_addon_groupsInput
    addon_group: addon_groupsCreateNestedOneWithoutProduct_addon_groupsInput
  }

  export type product_addon_groupsUncheckedCreateInput = {
    id?: string
    product_id: string
    addon_group_id: string
    min_selections?: number
    max_selections: number
    sort_order?: number
  }

  export type product_addon_groupsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_selections?: IntFieldUpdateOperationsInput | number
    max_selections?: IntFieldUpdateOperationsInput | number
    sort_order?: IntFieldUpdateOperationsInput | number
    product?: productsUpdateOneRequiredWithoutProduct_addon_groupsNestedInput
    addon_group?: addon_groupsUpdateOneRequiredWithoutProduct_addon_groupsNestedInput
  }

  export type product_addon_groupsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    addon_group_id?: StringFieldUpdateOperationsInput | string
    min_selections?: IntFieldUpdateOperationsInput | number
    max_selections?: IntFieldUpdateOperationsInput | number
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type product_addon_groupsCreateManyInput = {
    id?: string
    product_id: string
    addon_group_id: string
    min_selections?: number
    max_selections: number
    sort_order?: number
  }

  export type product_addon_groupsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_selections?: IntFieldUpdateOperationsInput | number
    max_selections?: IntFieldUpdateOperationsInput | number
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type product_addon_groupsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    addon_group_id?: StringFieldUpdateOperationsInput | string
    min_selections?: IntFieldUpdateOperationsInput | number
    max_selections?: IntFieldUpdateOperationsInput | number
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type ordersCreateInput = {
    id?: string
    ticket_number: number
    created_at?: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string
    cancel_reason?: string | null
    payment_method?: string | null
    order_items?: order_itemsCreateNestedManyWithoutOrderInput
  }

  export type ordersUncheckedCreateInput = {
    id?: string
    ticket_number: number
    created_at?: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string
    cancel_reason?: string | null
    payment_method?: string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ordersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    cancel_reason?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUpdateManyWithoutOrderNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    cancel_reason?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ordersCreateManyInput = {
    id?: string
    ticket_number: number
    created_at?: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string
    cancel_reason?: string | null
    payment_method?: string | null
  }

  export type ordersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    cancel_reason?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    cancel_reason?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_itemsCreateInput = {
    id?: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    order: ordersCreateNestedOneWithoutOrder_itemsInput
    product: productsCreateNestedOneWithoutOrder_itemsInput
    order_item_addons?: order_item_addonsCreateNestedManyWithoutOrder_itemInput
  }

  export type order_itemsUncheckedCreateInput = {
    id?: string
    order_id: string
    product_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    order_item_addons?: order_item_addonsUncheckedCreateNestedManyWithoutOrder_itemInput
  }

  export type order_itemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
    product?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
    order_item_addons?: order_item_addonsUpdateManyWithoutOrder_itemNestedInput
  }

  export type order_itemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_item_addons?: order_item_addonsUncheckedUpdateManyWithoutOrder_itemNestedInput
  }

  export type order_itemsCreateManyInput = {
    id?: string
    order_id: string
    product_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsCreateInput = {
    id?: string
    quantity: number
    charged_price: Decimal | DecimalJsLike | number | string
    order_item: order_itemsCreateNestedOneWithoutOrder_item_addonsInput
    addon: addonsCreateNestedOneWithoutOrder_item_addonsInput
  }

  export type order_item_addonsUncheckedCreateInput = {
    id?: string
    order_item_id: string
    addon_id: string
    quantity: number
    charged_price: Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    charged_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_item?: order_itemsUpdateOneRequiredWithoutOrder_item_addonsNestedInput
    addon?: addonsUpdateOneRequiredWithoutOrder_item_addonsNestedInput
  }

  export type order_item_addonsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_item_id?: StringFieldUpdateOperationsInput | string
    addon_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    charged_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsCreateManyInput = {
    id?: string
    order_item_id: string
    addon_id: string
    quantity: number
    charged_price: Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    charged_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_item_id?: StringFieldUpdateOperationsInput | string
    addon_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    charged_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type settingsCreateInput = {
    id?: string
    company_name?: string | null
    company_document?: string | null
    logo_path?: string | null
    images_directory?: string | null
    updated_at?: Date | string
  }

  export type settingsUncheckedCreateInput = {
    id?: string
    company_name?: string | null
    company_document?: string | null
    logo_path?: string | null
    images_directory?: string | null
    updated_at?: Date | string
  }

  export type settingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_document?: NullableStringFieldUpdateOperationsInput | string | null
    logo_path?: NullableStringFieldUpdateOperationsInput | string | null
    images_directory?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_document?: NullableStringFieldUpdateOperationsInput | string | null
    logo_path?: NullableStringFieldUpdateOperationsInput | string | null
    images_directory?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsCreateManyInput = {
    id?: string
    company_name?: string | null
    company_document?: string | null
    logo_path?: string | null
    images_directory?: string | null
    updated_at?: Date | string
  }

  export type settingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_document?: NullableStringFieldUpdateOperationsInput | string | null
    logo_path?: NullableStringFieldUpdateOperationsInput | string | null
    images_directory?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    company_document?: NullableStringFieldUpdateOperationsInput | string | null
    logo_path?: NullableStringFieldUpdateOperationsInput | string | null
    images_directory?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image_path?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image_path?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image_path?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoriesRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type Product_addon_groupsListRelationFilter = {
    every?: product_addon_groupsWhereInput
    some?: product_addon_groupsWhereInput
    none?: product_addon_groupsWhereInput
  }

  export type Order_itemsListRelationFilter = {
    every?: order_itemsWhereInput
    some?: order_itemsWhereInput
    none?: order_itemsWhereInput
  }

  export type product_addon_groupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type order_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    base_price?: SortOrder
    image_path?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    base_price?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    base_price?: SortOrder
    image_path?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    base_price?: SortOrder
    image_path?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    base_price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type AddonsListRelationFilter = {
    every?: addonsWhereInput
    some?: addonsWhereInput
    none?: addonsWhereInput
  }

  export type addonsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type addon_groupsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type addon_groupsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type addon_groupsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type Addon_groupsRelationFilter = {
    is?: addon_groupsWhereInput
    isNot?: addon_groupsWhereInput
  }

  export type Order_item_addonsListRelationFilter = {
    every?: order_item_addonsWhereInput
    some?: order_item_addonsWhereInput
    none?: order_item_addonsWhereInput
  }

  export type order_item_addonsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type addonsCountOrderByAggregateInput = {
    id?: SortOrder
    addon_group_id?: SortOrder
    name?: SortOrder
    image_path?: SortOrder
    price?: SortOrder
  }

  export type addonsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type addonsMaxOrderByAggregateInput = {
    id?: SortOrder
    addon_group_id?: SortOrder
    name?: SortOrder
    image_path?: SortOrder
    price?: SortOrder
  }

  export type addonsMinOrderByAggregateInput = {
    id?: SortOrder
    addon_group_id?: SortOrder
    name?: SortOrder
    image_path?: SortOrder
    price?: SortOrder
  }

  export type addonsSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type ProductsRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type product_addon_groupsCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    addon_group_id?: SortOrder
    min_selections?: SortOrder
    max_selections?: SortOrder
    sort_order?: SortOrder
  }

  export type product_addon_groupsAvgOrderByAggregateInput = {
    min_selections?: SortOrder
    max_selections?: SortOrder
    sort_order?: SortOrder
  }

  export type product_addon_groupsMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    addon_group_id?: SortOrder
    min_selections?: SortOrder
    max_selections?: SortOrder
    sort_order?: SortOrder
  }

  export type product_addon_groupsMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    addon_group_id?: SortOrder
    min_selections?: SortOrder
    max_selections?: SortOrder
    sort_order?: SortOrder
  }

  export type product_addon_groupsSumOrderByAggregateInput = {
    min_selections?: SortOrder
    max_selections?: SortOrder
    sort_order?: SortOrder
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

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    ticket_number?: SortOrder
    created_at?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    cancel_reason?: SortOrder
    payment_method?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    ticket_number?: SortOrder
    total_amount?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    ticket_number?: SortOrder
    created_at?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    cancel_reason?: SortOrder
    payment_method?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    ticket_number?: SortOrder
    created_at?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    cancel_reason?: SortOrder
    payment_method?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    ticket_number?: SortOrder
    total_amount?: SortOrder
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

  export type OrdersRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type order_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type Order_itemsRelationFilter = {
    is?: order_itemsWhereInput
    isNot?: order_itemsWhereInput
  }

  export type AddonsRelationFilter = {
    is?: addonsWhereInput
    isNot?: addonsWhereInput
  }

  export type order_item_addonsCountOrderByAggregateInput = {
    id?: SortOrder
    order_item_id?: SortOrder
    addon_id?: SortOrder
    quantity?: SortOrder
    charged_price?: SortOrder
  }

  export type order_item_addonsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    charged_price?: SortOrder
  }

  export type order_item_addonsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_item_id?: SortOrder
    addon_id?: SortOrder
    quantity?: SortOrder
    charged_price?: SortOrder
  }

  export type order_item_addonsMinOrderByAggregateInput = {
    id?: SortOrder
    order_item_id?: SortOrder
    addon_id?: SortOrder
    quantity?: SortOrder
    charged_price?: SortOrder
  }

  export type order_item_addonsSumOrderByAggregateInput = {
    quantity?: SortOrder
    charged_price?: SortOrder
  }

  export type settingsCountOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    company_document?: SortOrder
    logo_path?: SortOrder
    images_directory?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    company_document?: SortOrder
    logo_path?: SortOrder
    images_directory?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsMinOrderByAggregateInput = {
    id?: SortOrder
    company_name?: SortOrder
    company_document?: SortOrder
    logo_path?: SortOrder
    images_directory?: SortOrder
    updated_at?: SortOrder
  }

  export type productsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productsCreateWithoutCategoryInput, productsUncheckedCreateWithoutCategoryInput> | productsCreateWithoutCategoryInput[] | productsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoryInput | productsCreateOrConnectWithoutCategoryInput[]
    createMany?: productsCreateManyCategoryInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productsCreateWithoutCategoryInput, productsUncheckedCreateWithoutCategoryInput> | productsCreateWithoutCategoryInput[] | productsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoryInput | productsCreateOrConnectWithoutCategoryInput[]
    createMany?: productsCreateManyCategoryInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type productsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productsCreateWithoutCategoryInput, productsUncheckedCreateWithoutCategoryInput> | productsCreateWithoutCategoryInput[] | productsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoryInput | productsCreateOrConnectWithoutCategoryInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoryInput | productsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productsCreateManyCategoryInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoryInput | productsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoryInput | productsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productsCreateWithoutCategoryInput, productsUncheckedCreateWithoutCategoryInput> | productsCreateWithoutCategoryInput[] | productsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoryInput | productsCreateOrConnectWithoutCategoryInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoryInput | productsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productsCreateManyCategoryInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoryInput | productsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoryInput | productsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type product_addon_groupsCreateNestedManyWithoutProductInput = {
    create?: XOR<product_addon_groupsCreateWithoutProductInput, product_addon_groupsUncheckedCreateWithoutProductInput> | product_addon_groupsCreateWithoutProductInput[] | product_addon_groupsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_addon_groupsCreateOrConnectWithoutProductInput | product_addon_groupsCreateOrConnectWithoutProductInput[]
    createMany?: product_addon_groupsCreateManyProductInputEnvelope
    connect?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
  }

  export type order_itemsCreateNestedManyWithoutProductInput = {
    create?: XOR<order_itemsCreateWithoutProductInput, order_itemsUncheckedCreateWithoutProductInput> | order_itemsCreateWithoutProductInput[] | order_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductInput | order_itemsCreateOrConnectWithoutProductInput[]
    createMany?: order_itemsCreateManyProductInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type product_addon_groupsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<product_addon_groupsCreateWithoutProductInput, product_addon_groupsUncheckedCreateWithoutProductInput> | product_addon_groupsCreateWithoutProductInput[] | product_addon_groupsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_addon_groupsCreateOrConnectWithoutProductInput | product_addon_groupsCreateOrConnectWithoutProductInput[]
    createMany?: product_addon_groupsCreateManyProductInputEnvelope
    connect?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<order_itemsCreateWithoutProductInput, order_itemsUncheckedCreateWithoutProductInput> | order_itemsCreateWithoutProductInput[] | order_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductInput | order_itemsCreateOrConnectWithoutProductInput[]
    createMany?: order_itemsCreateManyProductInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type categoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type product_addon_groupsUpdateManyWithoutProductNestedInput = {
    create?: XOR<product_addon_groupsCreateWithoutProductInput, product_addon_groupsUncheckedCreateWithoutProductInput> | product_addon_groupsCreateWithoutProductInput[] | product_addon_groupsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_addon_groupsCreateOrConnectWithoutProductInput | product_addon_groupsCreateOrConnectWithoutProductInput[]
    upsert?: product_addon_groupsUpsertWithWhereUniqueWithoutProductInput | product_addon_groupsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: product_addon_groupsCreateManyProductInputEnvelope
    set?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    disconnect?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    delete?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    connect?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    update?: product_addon_groupsUpdateWithWhereUniqueWithoutProductInput | product_addon_groupsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: product_addon_groupsUpdateManyWithWhereWithoutProductInput | product_addon_groupsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: product_addon_groupsScalarWhereInput | product_addon_groupsScalarWhereInput[]
  }

  export type order_itemsUpdateManyWithoutProductNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductInput, order_itemsUncheckedCreateWithoutProductInput> | order_itemsCreateWithoutProductInput[] | order_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductInput | order_itemsCreateOrConnectWithoutProductInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductInput | order_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: order_itemsCreateManyProductInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductInput | order_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductInput | order_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type product_addon_groupsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<product_addon_groupsCreateWithoutProductInput, product_addon_groupsUncheckedCreateWithoutProductInput> | product_addon_groupsCreateWithoutProductInput[] | product_addon_groupsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: product_addon_groupsCreateOrConnectWithoutProductInput | product_addon_groupsCreateOrConnectWithoutProductInput[]
    upsert?: product_addon_groupsUpsertWithWhereUniqueWithoutProductInput | product_addon_groupsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: product_addon_groupsCreateManyProductInputEnvelope
    set?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    disconnect?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    delete?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    connect?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    update?: product_addon_groupsUpdateWithWhereUniqueWithoutProductInput | product_addon_groupsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: product_addon_groupsUpdateManyWithWhereWithoutProductInput | product_addon_groupsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: product_addon_groupsScalarWhereInput | product_addon_groupsScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductInput, order_itemsUncheckedCreateWithoutProductInput> | order_itemsCreateWithoutProductInput[] | order_itemsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductInput | order_itemsCreateOrConnectWithoutProductInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductInput | order_itemsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: order_itemsCreateManyProductInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductInput | order_itemsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductInput | order_itemsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type addonsCreateNestedManyWithoutAddon_groupInput = {
    create?: XOR<addonsCreateWithoutAddon_groupInput, addonsUncheckedCreateWithoutAddon_groupInput> | addonsCreateWithoutAddon_groupInput[] | addonsUncheckedCreateWithoutAddon_groupInput[]
    connectOrCreate?: addonsCreateOrConnectWithoutAddon_groupInput | addonsCreateOrConnectWithoutAddon_groupInput[]
    createMany?: addonsCreateManyAddon_groupInputEnvelope
    connect?: addonsWhereUniqueInput | addonsWhereUniqueInput[]
  }

  export type product_addon_groupsCreateNestedManyWithoutAddon_groupInput = {
    create?: XOR<product_addon_groupsCreateWithoutAddon_groupInput, product_addon_groupsUncheckedCreateWithoutAddon_groupInput> | product_addon_groupsCreateWithoutAddon_groupInput[] | product_addon_groupsUncheckedCreateWithoutAddon_groupInput[]
    connectOrCreate?: product_addon_groupsCreateOrConnectWithoutAddon_groupInput | product_addon_groupsCreateOrConnectWithoutAddon_groupInput[]
    createMany?: product_addon_groupsCreateManyAddon_groupInputEnvelope
    connect?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
  }

  export type addonsUncheckedCreateNestedManyWithoutAddon_groupInput = {
    create?: XOR<addonsCreateWithoutAddon_groupInput, addonsUncheckedCreateWithoutAddon_groupInput> | addonsCreateWithoutAddon_groupInput[] | addonsUncheckedCreateWithoutAddon_groupInput[]
    connectOrCreate?: addonsCreateOrConnectWithoutAddon_groupInput | addonsCreateOrConnectWithoutAddon_groupInput[]
    createMany?: addonsCreateManyAddon_groupInputEnvelope
    connect?: addonsWhereUniqueInput | addonsWhereUniqueInput[]
  }

  export type product_addon_groupsUncheckedCreateNestedManyWithoutAddon_groupInput = {
    create?: XOR<product_addon_groupsCreateWithoutAddon_groupInput, product_addon_groupsUncheckedCreateWithoutAddon_groupInput> | product_addon_groupsCreateWithoutAddon_groupInput[] | product_addon_groupsUncheckedCreateWithoutAddon_groupInput[]
    connectOrCreate?: product_addon_groupsCreateOrConnectWithoutAddon_groupInput | product_addon_groupsCreateOrConnectWithoutAddon_groupInput[]
    createMany?: product_addon_groupsCreateManyAddon_groupInputEnvelope
    connect?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
  }

  export type addonsUpdateManyWithoutAddon_groupNestedInput = {
    create?: XOR<addonsCreateWithoutAddon_groupInput, addonsUncheckedCreateWithoutAddon_groupInput> | addonsCreateWithoutAddon_groupInput[] | addonsUncheckedCreateWithoutAddon_groupInput[]
    connectOrCreate?: addonsCreateOrConnectWithoutAddon_groupInput | addonsCreateOrConnectWithoutAddon_groupInput[]
    upsert?: addonsUpsertWithWhereUniqueWithoutAddon_groupInput | addonsUpsertWithWhereUniqueWithoutAddon_groupInput[]
    createMany?: addonsCreateManyAddon_groupInputEnvelope
    set?: addonsWhereUniqueInput | addonsWhereUniqueInput[]
    disconnect?: addonsWhereUniqueInput | addonsWhereUniqueInput[]
    delete?: addonsWhereUniqueInput | addonsWhereUniqueInput[]
    connect?: addonsWhereUniqueInput | addonsWhereUniqueInput[]
    update?: addonsUpdateWithWhereUniqueWithoutAddon_groupInput | addonsUpdateWithWhereUniqueWithoutAddon_groupInput[]
    updateMany?: addonsUpdateManyWithWhereWithoutAddon_groupInput | addonsUpdateManyWithWhereWithoutAddon_groupInput[]
    deleteMany?: addonsScalarWhereInput | addonsScalarWhereInput[]
  }

  export type product_addon_groupsUpdateManyWithoutAddon_groupNestedInput = {
    create?: XOR<product_addon_groupsCreateWithoutAddon_groupInput, product_addon_groupsUncheckedCreateWithoutAddon_groupInput> | product_addon_groupsCreateWithoutAddon_groupInput[] | product_addon_groupsUncheckedCreateWithoutAddon_groupInput[]
    connectOrCreate?: product_addon_groupsCreateOrConnectWithoutAddon_groupInput | product_addon_groupsCreateOrConnectWithoutAddon_groupInput[]
    upsert?: product_addon_groupsUpsertWithWhereUniqueWithoutAddon_groupInput | product_addon_groupsUpsertWithWhereUniqueWithoutAddon_groupInput[]
    createMany?: product_addon_groupsCreateManyAddon_groupInputEnvelope
    set?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    disconnect?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    delete?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    connect?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    update?: product_addon_groupsUpdateWithWhereUniqueWithoutAddon_groupInput | product_addon_groupsUpdateWithWhereUniqueWithoutAddon_groupInput[]
    updateMany?: product_addon_groupsUpdateManyWithWhereWithoutAddon_groupInput | product_addon_groupsUpdateManyWithWhereWithoutAddon_groupInput[]
    deleteMany?: product_addon_groupsScalarWhereInput | product_addon_groupsScalarWhereInput[]
  }

  export type addonsUncheckedUpdateManyWithoutAddon_groupNestedInput = {
    create?: XOR<addonsCreateWithoutAddon_groupInput, addonsUncheckedCreateWithoutAddon_groupInput> | addonsCreateWithoutAddon_groupInput[] | addonsUncheckedCreateWithoutAddon_groupInput[]
    connectOrCreate?: addonsCreateOrConnectWithoutAddon_groupInput | addonsCreateOrConnectWithoutAddon_groupInput[]
    upsert?: addonsUpsertWithWhereUniqueWithoutAddon_groupInput | addonsUpsertWithWhereUniqueWithoutAddon_groupInput[]
    createMany?: addonsCreateManyAddon_groupInputEnvelope
    set?: addonsWhereUniqueInput | addonsWhereUniqueInput[]
    disconnect?: addonsWhereUniqueInput | addonsWhereUniqueInput[]
    delete?: addonsWhereUniqueInput | addonsWhereUniqueInput[]
    connect?: addonsWhereUniqueInput | addonsWhereUniqueInput[]
    update?: addonsUpdateWithWhereUniqueWithoutAddon_groupInput | addonsUpdateWithWhereUniqueWithoutAddon_groupInput[]
    updateMany?: addonsUpdateManyWithWhereWithoutAddon_groupInput | addonsUpdateManyWithWhereWithoutAddon_groupInput[]
    deleteMany?: addonsScalarWhereInput | addonsScalarWhereInput[]
  }

  export type product_addon_groupsUncheckedUpdateManyWithoutAddon_groupNestedInput = {
    create?: XOR<product_addon_groupsCreateWithoutAddon_groupInput, product_addon_groupsUncheckedCreateWithoutAddon_groupInput> | product_addon_groupsCreateWithoutAddon_groupInput[] | product_addon_groupsUncheckedCreateWithoutAddon_groupInput[]
    connectOrCreate?: product_addon_groupsCreateOrConnectWithoutAddon_groupInput | product_addon_groupsCreateOrConnectWithoutAddon_groupInput[]
    upsert?: product_addon_groupsUpsertWithWhereUniqueWithoutAddon_groupInput | product_addon_groupsUpsertWithWhereUniqueWithoutAddon_groupInput[]
    createMany?: product_addon_groupsCreateManyAddon_groupInputEnvelope
    set?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    disconnect?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    delete?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    connect?: product_addon_groupsWhereUniqueInput | product_addon_groupsWhereUniqueInput[]
    update?: product_addon_groupsUpdateWithWhereUniqueWithoutAddon_groupInput | product_addon_groupsUpdateWithWhereUniqueWithoutAddon_groupInput[]
    updateMany?: product_addon_groupsUpdateManyWithWhereWithoutAddon_groupInput | product_addon_groupsUpdateManyWithWhereWithoutAddon_groupInput[]
    deleteMany?: product_addon_groupsScalarWhereInput | product_addon_groupsScalarWhereInput[]
  }

  export type addon_groupsCreateNestedOneWithoutAddonsInput = {
    create?: XOR<addon_groupsCreateWithoutAddonsInput, addon_groupsUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: addon_groupsCreateOrConnectWithoutAddonsInput
    connect?: addon_groupsWhereUniqueInput
  }

  export type order_item_addonsCreateNestedManyWithoutAddonInput = {
    create?: XOR<order_item_addonsCreateWithoutAddonInput, order_item_addonsUncheckedCreateWithoutAddonInput> | order_item_addonsCreateWithoutAddonInput[] | order_item_addonsUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: order_item_addonsCreateOrConnectWithoutAddonInput | order_item_addonsCreateOrConnectWithoutAddonInput[]
    createMany?: order_item_addonsCreateManyAddonInputEnvelope
    connect?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
  }

  export type order_item_addonsUncheckedCreateNestedManyWithoutAddonInput = {
    create?: XOR<order_item_addonsCreateWithoutAddonInput, order_item_addonsUncheckedCreateWithoutAddonInput> | order_item_addonsCreateWithoutAddonInput[] | order_item_addonsUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: order_item_addonsCreateOrConnectWithoutAddonInput | order_item_addonsCreateOrConnectWithoutAddonInput[]
    createMany?: order_item_addonsCreateManyAddonInputEnvelope
    connect?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
  }

  export type addon_groupsUpdateOneRequiredWithoutAddonsNestedInput = {
    create?: XOR<addon_groupsCreateWithoutAddonsInput, addon_groupsUncheckedCreateWithoutAddonsInput>
    connectOrCreate?: addon_groupsCreateOrConnectWithoutAddonsInput
    upsert?: addon_groupsUpsertWithoutAddonsInput
    connect?: addon_groupsWhereUniqueInput
    update?: XOR<XOR<addon_groupsUpdateToOneWithWhereWithoutAddonsInput, addon_groupsUpdateWithoutAddonsInput>, addon_groupsUncheckedUpdateWithoutAddonsInput>
  }

  export type order_item_addonsUpdateManyWithoutAddonNestedInput = {
    create?: XOR<order_item_addonsCreateWithoutAddonInput, order_item_addonsUncheckedCreateWithoutAddonInput> | order_item_addonsCreateWithoutAddonInput[] | order_item_addonsUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: order_item_addonsCreateOrConnectWithoutAddonInput | order_item_addonsCreateOrConnectWithoutAddonInput[]
    upsert?: order_item_addonsUpsertWithWhereUniqueWithoutAddonInput | order_item_addonsUpsertWithWhereUniqueWithoutAddonInput[]
    createMany?: order_item_addonsCreateManyAddonInputEnvelope
    set?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    disconnect?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    delete?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    connect?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    update?: order_item_addonsUpdateWithWhereUniqueWithoutAddonInput | order_item_addonsUpdateWithWhereUniqueWithoutAddonInput[]
    updateMany?: order_item_addonsUpdateManyWithWhereWithoutAddonInput | order_item_addonsUpdateManyWithWhereWithoutAddonInput[]
    deleteMany?: order_item_addonsScalarWhereInput | order_item_addonsScalarWhereInput[]
  }

  export type order_item_addonsUncheckedUpdateManyWithoutAddonNestedInput = {
    create?: XOR<order_item_addonsCreateWithoutAddonInput, order_item_addonsUncheckedCreateWithoutAddonInput> | order_item_addonsCreateWithoutAddonInput[] | order_item_addonsUncheckedCreateWithoutAddonInput[]
    connectOrCreate?: order_item_addonsCreateOrConnectWithoutAddonInput | order_item_addonsCreateOrConnectWithoutAddonInput[]
    upsert?: order_item_addonsUpsertWithWhereUniqueWithoutAddonInput | order_item_addonsUpsertWithWhereUniqueWithoutAddonInput[]
    createMany?: order_item_addonsCreateManyAddonInputEnvelope
    set?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    disconnect?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    delete?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    connect?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    update?: order_item_addonsUpdateWithWhereUniqueWithoutAddonInput | order_item_addonsUpdateWithWhereUniqueWithoutAddonInput[]
    updateMany?: order_item_addonsUpdateManyWithWhereWithoutAddonInput | order_item_addonsUpdateManyWithWhereWithoutAddonInput[]
    deleteMany?: order_item_addonsScalarWhereInput | order_item_addonsScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutProduct_addon_groupsInput = {
    create?: XOR<productsCreateWithoutProduct_addon_groupsInput, productsUncheckedCreateWithoutProduct_addon_groupsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_addon_groupsInput
    connect?: productsWhereUniqueInput
  }

  export type addon_groupsCreateNestedOneWithoutProduct_addon_groupsInput = {
    create?: XOR<addon_groupsCreateWithoutProduct_addon_groupsInput, addon_groupsUncheckedCreateWithoutProduct_addon_groupsInput>
    connectOrCreate?: addon_groupsCreateOrConnectWithoutProduct_addon_groupsInput
    connect?: addon_groupsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsUpdateOneRequiredWithoutProduct_addon_groupsNestedInput = {
    create?: XOR<productsCreateWithoutProduct_addon_groupsInput, productsUncheckedCreateWithoutProduct_addon_groupsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_addon_groupsInput
    upsert?: productsUpsertWithoutProduct_addon_groupsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_addon_groupsInput, productsUpdateWithoutProduct_addon_groupsInput>, productsUncheckedUpdateWithoutProduct_addon_groupsInput>
  }

  export type addon_groupsUpdateOneRequiredWithoutProduct_addon_groupsNestedInput = {
    create?: XOR<addon_groupsCreateWithoutProduct_addon_groupsInput, addon_groupsUncheckedCreateWithoutProduct_addon_groupsInput>
    connectOrCreate?: addon_groupsCreateOrConnectWithoutProduct_addon_groupsInput
    upsert?: addon_groupsUpsertWithoutProduct_addon_groupsInput
    connect?: addon_groupsWhereUniqueInput
    update?: XOR<XOR<addon_groupsUpdateToOneWithWhereWithoutProduct_addon_groupsInput, addon_groupsUpdateWithoutProduct_addon_groupsInput>, addon_groupsUncheckedUpdateWithoutProduct_addon_groupsInput>
  }

  export type order_itemsCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemsCreateWithoutOrderInput, order_itemsUncheckedCreateWithoutOrderInput> | order_itemsCreateWithoutOrderInput[] | order_itemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrderInput | order_itemsCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemsCreateManyOrderInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<order_itemsCreateWithoutOrderInput, order_itemsUncheckedCreateWithoutOrderInput> | order_itemsCreateWithoutOrderInput[] | order_itemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrderInput | order_itemsCreateOrConnectWithoutOrderInput[]
    createMany?: order_itemsCreateManyOrderInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type order_itemsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrderInput, order_itemsUncheckedCreateWithoutOrderInput> | order_itemsCreateWithoutOrderInput[] | order_itemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrderInput | order_itemsCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrderInput | order_itemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemsCreateManyOrderInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrderInput | order_itemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrderInput | order_itemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrderInput, order_itemsUncheckedCreateWithoutOrderInput> | order_itemsCreateWithoutOrderInput[] | order_itemsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrderInput | order_itemsCreateOrConnectWithoutOrderInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrderInput | order_itemsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: order_itemsCreateManyOrderInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrderInput | order_itemsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrderInput | order_itemsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type order_item_addonsCreateNestedManyWithoutOrder_itemInput = {
    create?: XOR<order_item_addonsCreateWithoutOrder_itemInput, order_item_addonsUncheckedCreateWithoutOrder_itemInput> | order_item_addonsCreateWithoutOrder_itemInput[] | order_item_addonsUncheckedCreateWithoutOrder_itemInput[]
    connectOrCreate?: order_item_addonsCreateOrConnectWithoutOrder_itemInput | order_item_addonsCreateOrConnectWithoutOrder_itemInput[]
    createMany?: order_item_addonsCreateManyOrder_itemInputEnvelope
    connect?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
  }

  export type order_item_addonsUncheckedCreateNestedManyWithoutOrder_itemInput = {
    create?: XOR<order_item_addonsCreateWithoutOrder_itemInput, order_item_addonsUncheckedCreateWithoutOrder_itemInput> | order_item_addonsCreateWithoutOrder_itemInput[] | order_item_addonsUncheckedCreateWithoutOrder_itemInput[]
    connectOrCreate?: order_item_addonsCreateOrConnectWithoutOrder_itemInput | order_item_addonsCreateOrConnectWithoutOrder_itemInput[]
    createMany?: order_item_addonsCreateManyOrder_itemInputEnvelope
    connect?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
  }

  export type ordersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_itemsInput, ordersUpdateWithoutOrder_itemsInput>, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    upsert?: productsUpsertWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_itemsInput, productsUpdateWithoutOrder_itemsInput>, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type order_item_addonsUpdateManyWithoutOrder_itemNestedInput = {
    create?: XOR<order_item_addonsCreateWithoutOrder_itemInput, order_item_addonsUncheckedCreateWithoutOrder_itemInput> | order_item_addonsCreateWithoutOrder_itemInput[] | order_item_addonsUncheckedCreateWithoutOrder_itemInput[]
    connectOrCreate?: order_item_addonsCreateOrConnectWithoutOrder_itemInput | order_item_addonsCreateOrConnectWithoutOrder_itemInput[]
    upsert?: order_item_addonsUpsertWithWhereUniqueWithoutOrder_itemInput | order_item_addonsUpsertWithWhereUniqueWithoutOrder_itemInput[]
    createMany?: order_item_addonsCreateManyOrder_itemInputEnvelope
    set?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    disconnect?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    delete?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    connect?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    update?: order_item_addonsUpdateWithWhereUniqueWithoutOrder_itemInput | order_item_addonsUpdateWithWhereUniqueWithoutOrder_itemInput[]
    updateMany?: order_item_addonsUpdateManyWithWhereWithoutOrder_itemInput | order_item_addonsUpdateManyWithWhereWithoutOrder_itemInput[]
    deleteMany?: order_item_addonsScalarWhereInput | order_item_addonsScalarWhereInput[]
  }

  export type order_item_addonsUncheckedUpdateManyWithoutOrder_itemNestedInput = {
    create?: XOR<order_item_addonsCreateWithoutOrder_itemInput, order_item_addonsUncheckedCreateWithoutOrder_itemInput> | order_item_addonsCreateWithoutOrder_itemInput[] | order_item_addonsUncheckedCreateWithoutOrder_itemInput[]
    connectOrCreate?: order_item_addonsCreateOrConnectWithoutOrder_itemInput | order_item_addonsCreateOrConnectWithoutOrder_itemInput[]
    upsert?: order_item_addonsUpsertWithWhereUniqueWithoutOrder_itemInput | order_item_addonsUpsertWithWhereUniqueWithoutOrder_itemInput[]
    createMany?: order_item_addonsCreateManyOrder_itemInputEnvelope
    set?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    disconnect?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    delete?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    connect?: order_item_addonsWhereUniqueInput | order_item_addonsWhereUniqueInput[]
    update?: order_item_addonsUpdateWithWhereUniqueWithoutOrder_itemInput | order_item_addonsUpdateWithWhereUniqueWithoutOrder_itemInput[]
    updateMany?: order_item_addonsUpdateManyWithWhereWithoutOrder_itemInput | order_item_addonsUpdateManyWithWhereWithoutOrder_itemInput[]
    deleteMany?: order_item_addonsScalarWhereInput | order_item_addonsScalarWhereInput[]
  }

  export type order_itemsCreateNestedOneWithoutOrder_item_addonsInput = {
    create?: XOR<order_itemsCreateWithoutOrder_item_addonsInput, order_itemsUncheckedCreateWithoutOrder_item_addonsInput>
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrder_item_addonsInput
    connect?: order_itemsWhereUniqueInput
  }

  export type addonsCreateNestedOneWithoutOrder_item_addonsInput = {
    create?: XOR<addonsCreateWithoutOrder_item_addonsInput, addonsUncheckedCreateWithoutOrder_item_addonsInput>
    connectOrCreate?: addonsCreateOrConnectWithoutOrder_item_addonsInput
    connect?: addonsWhereUniqueInput
  }

  export type order_itemsUpdateOneRequiredWithoutOrder_item_addonsNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrder_item_addonsInput, order_itemsUncheckedCreateWithoutOrder_item_addonsInput>
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrder_item_addonsInput
    upsert?: order_itemsUpsertWithoutOrder_item_addonsInput
    connect?: order_itemsWhereUniqueInput
    update?: XOR<XOR<order_itemsUpdateToOneWithWhereWithoutOrder_item_addonsInput, order_itemsUpdateWithoutOrder_item_addonsInput>, order_itemsUncheckedUpdateWithoutOrder_item_addonsInput>
  }

  export type addonsUpdateOneRequiredWithoutOrder_item_addonsNestedInput = {
    create?: XOR<addonsCreateWithoutOrder_item_addonsInput, addonsUncheckedCreateWithoutOrder_item_addonsInput>
    connectOrCreate?: addonsCreateOrConnectWithoutOrder_item_addonsInput
    upsert?: addonsUpsertWithoutOrder_item_addonsInput
    connect?: addonsWhereUniqueInput
    update?: XOR<XOR<addonsUpdateToOneWithWhereWithoutOrder_item_addonsInput, addonsUpdateWithoutOrder_item_addonsInput>, addonsUncheckedUpdateWithoutOrder_item_addonsInput>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type productsCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    base_price: Decimal | DecimalJsLike | number | string
    image_path?: string | null
    product_addon_groups?: product_addon_groupsCreateNestedManyWithoutProductInput
    order_items?: order_itemsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    base_price: Decimal | DecimalJsLike | number | string
    image_path?: string | null
    product_addon_groups?: product_addon_groupsUncheckedCreateNestedManyWithoutProductInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutCategoryInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoryInput, productsUncheckedCreateWithoutCategoryInput>
  }

  export type productsCreateManyCategoryInputEnvelope = {
    data: productsCreateManyCategoryInput | productsCreateManyCategoryInput[]
  }

  export type productsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoryInput, productsUncheckedUpdateWithoutCategoryInput>
    create: XOR<productsCreateWithoutCategoryInput, productsUncheckedCreateWithoutCategoryInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoryInput, productsUncheckedUpdateWithoutCategoryInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoryInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: StringFilter<"products"> | string
    category_id?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    base_price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    image_path?: StringNullableFilter<"products"> | string | null
  }

  export type categoriesCreateWithoutProductsInput = {
    id?: string
    name: string
    description?: string | null
    image_path?: string | null
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    description?: string | null
    image_path?: string | null
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type product_addon_groupsCreateWithoutProductInput = {
    id?: string
    min_selections?: number
    max_selections: number
    sort_order?: number
    addon_group: addon_groupsCreateNestedOneWithoutProduct_addon_groupsInput
  }

  export type product_addon_groupsUncheckedCreateWithoutProductInput = {
    id?: string
    addon_group_id: string
    min_selections?: number
    max_selections: number
    sort_order?: number
  }

  export type product_addon_groupsCreateOrConnectWithoutProductInput = {
    where: product_addon_groupsWhereUniqueInput
    create: XOR<product_addon_groupsCreateWithoutProductInput, product_addon_groupsUncheckedCreateWithoutProductInput>
  }

  export type product_addon_groupsCreateManyProductInputEnvelope = {
    data: product_addon_groupsCreateManyProductInput | product_addon_groupsCreateManyProductInput[]
  }

  export type order_itemsCreateWithoutProductInput = {
    id?: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    order: ordersCreateNestedOneWithoutOrder_itemsInput
    order_item_addons?: order_item_addonsCreateNestedManyWithoutOrder_itemInput
  }

  export type order_itemsUncheckedCreateWithoutProductInput = {
    id?: string
    order_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    order_item_addons?: order_item_addonsUncheckedCreateNestedManyWithoutOrder_itemInput
  }

  export type order_itemsCreateOrConnectWithoutProductInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutProductInput, order_itemsUncheckedCreateWithoutProductInput>
  }

  export type order_itemsCreateManyProductInputEnvelope = {
    data: order_itemsCreateManyProductInput | order_itemsCreateManyProductInput[]
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_addon_groupsUpsertWithWhereUniqueWithoutProductInput = {
    where: product_addon_groupsWhereUniqueInput
    update: XOR<product_addon_groupsUpdateWithoutProductInput, product_addon_groupsUncheckedUpdateWithoutProductInput>
    create: XOR<product_addon_groupsCreateWithoutProductInput, product_addon_groupsUncheckedCreateWithoutProductInput>
  }

  export type product_addon_groupsUpdateWithWhereUniqueWithoutProductInput = {
    where: product_addon_groupsWhereUniqueInput
    data: XOR<product_addon_groupsUpdateWithoutProductInput, product_addon_groupsUncheckedUpdateWithoutProductInput>
  }

  export type product_addon_groupsUpdateManyWithWhereWithoutProductInput = {
    where: product_addon_groupsScalarWhereInput
    data: XOR<product_addon_groupsUpdateManyMutationInput, product_addon_groupsUncheckedUpdateManyWithoutProductInput>
  }

  export type product_addon_groupsScalarWhereInput = {
    AND?: product_addon_groupsScalarWhereInput | product_addon_groupsScalarWhereInput[]
    OR?: product_addon_groupsScalarWhereInput[]
    NOT?: product_addon_groupsScalarWhereInput | product_addon_groupsScalarWhereInput[]
    id?: StringFilter<"product_addon_groups"> | string
    product_id?: StringFilter<"product_addon_groups"> | string
    addon_group_id?: StringFilter<"product_addon_groups"> | string
    min_selections?: IntFilter<"product_addon_groups"> | number
    max_selections?: IntFilter<"product_addon_groups"> | number
    sort_order?: IntFilter<"product_addon_groups"> | number
  }

  export type order_itemsUpsertWithWhereUniqueWithoutProductInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutProductInput, order_itemsUncheckedUpdateWithoutProductInput>
    create: XOR<order_itemsCreateWithoutProductInput, order_itemsUncheckedCreateWithoutProductInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutProductInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutProductInput, order_itemsUncheckedUpdateWithoutProductInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutProductInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutProductInput>
  }

  export type order_itemsScalarWhereInput = {
    AND?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    OR?: order_itemsScalarWhereInput[]
    NOT?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    id?: StringFilter<"order_items"> | string
    order_id?: StringFilter<"order_items"> | string
    product_id?: StringFilter<"order_items"> | string
    quantity?: IntFilter<"order_items"> | number
    unit_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
  }

  export type addonsCreateWithoutAddon_groupInput = {
    id?: string
    name: string
    image_path?: string | null
    price: Decimal | DecimalJsLike | number | string
    order_item_addons?: order_item_addonsCreateNestedManyWithoutAddonInput
  }

  export type addonsUncheckedCreateWithoutAddon_groupInput = {
    id?: string
    name: string
    image_path?: string | null
    price: Decimal | DecimalJsLike | number | string
    order_item_addons?: order_item_addonsUncheckedCreateNestedManyWithoutAddonInput
  }

  export type addonsCreateOrConnectWithoutAddon_groupInput = {
    where: addonsWhereUniqueInput
    create: XOR<addonsCreateWithoutAddon_groupInput, addonsUncheckedCreateWithoutAddon_groupInput>
  }

  export type addonsCreateManyAddon_groupInputEnvelope = {
    data: addonsCreateManyAddon_groupInput | addonsCreateManyAddon_groupInput[]
  }

  export type product_addon_groupsCreateWithoutAddon_groupInput = {
    id?: string
    min_selections?: number
    max_selections: number
    sort_order?: number
    product: productsCreateNestedOneWithoutProduct_addon_groupsInput
  }

  export type product_addon_groupsUncheckedCreateWithoutAddon_groupInput = {
    id?: string
    product_id: string
    min_selections?: number
    max_selections: number
    sort_order?: number
  }

  export type product_addon_groupsCreateOrConnectWithoutAddon_groupInput = {
    where: product_addon_groupsWhereUniqueInput
    create: XOR<product_addon_groupsCreateWithoutAddon_groupInput, product_addon_groupsUncheckedCreateWithoutAddon_groupInput>
  }

  export type product_addon_groupsCreateManyAddon_groupInputEnvelope = {
    data: product_addon_groupsCreateManyAddon_groupInput | product_addon_groupsCreateManyAddon_groupInput[]
  }

  export type addonsUpsertWithWhereUniqueWithoutAddon_groupInput = {
    where: addonsWhereUniqueInput
    update: XOR<addonsUpdateWithoutAddon_groupInput, addonsUncheckedUpdateWithoutAddon_groupInput>
    create: XOR<addonsCreateWithoutAddon_groupInput, addonsUncheckedCreateWithoutAddon_groupInput>
  }

  export type addonsUpdateWithWhereUniqueWithoutAddon_groupInput = {
    where: addonsWhereUniqueInput
    data: XOR<addonsUpdateWithoutAddon_groupInput, addonsUncheckedUpdateWithoutAddon_groupInput>
  }

  export type addonsUpdateManyWithWhereWithoutAddon_groupInput = {
    where: addonsScalarWhereInput
    data: XOR<addonsUpdateManyMutationInput, addonsUncheckedUpdateManyWithoutAddon_groupInput>
  }

  export type addonsScalarWhereInput = {
    AND?: addonsScalarWhereInput | addonsScalarWhereInput[]
    OR?: addonsScalarWhereInput[]
    NOT?: addonsScalarWhereInput | addonsScalarWhereInput[]
    id?: StringFilter<"addons"> | string
    addon_group_id?: StringFilter<"addons"> | string
    name?: StringFilter<"addons"> | string
    image_path?: StringNullableFilter<"addons"> | string | null
    price?: DecimalFilter<"addons"> | Decimal | DecimalJsLike | number | string
  }

  export type product_addon_groupsUpsertWithWhereUniqueWithoutAddon_groupInput = {
    where: product_addon_groupsWhereUniqueInput
    update: XOR<product_addon_groupsUpdateWithoutAddon_groupInput, product_addon_groupsUncheckedUpdateWithoutAddon_groupInput>
    create: XOR<product_addon_groupsCreateWithoutAddon_groupInput, product_addon_groupsUncheckedCreateWithoutAddon_groupInput>
  }

  export type product_addon_groupsUpdateWithWhereUniqueWithoutAddon_groupInput = {
    where: product_addon_groupsWhereUniqueInput
    data: XOR<product_addon_groupsUpdateWithoutAddon_groupInput, product_addon_groupsUncheckedUpdateWithoutAddon_groupInput>
  }

  export type product_addon_groupsUpdateManyWithWhereWithoutAddon_groupInput = {
    where: product_addon_groupsScalarWhereInput
    data: XOR<product_addon_groupsUpdateManyMutationInput, product_addon_groupsUncheckedUpdateManyWithoutAddon_groupInput>
  }

  export type addon_groupsCreateWithoutAddonsInput = {
    id?: string
    name: string
    description?: string | null
    product_addon_groups?: product_addon_groupsCreateNestedManyWithoutAddon_groupInput
  }

  export type addon_groupsUncheckedCreateWithoutAddonsInput = {
    id?: string
    name: string
    description?: string | null
    product_addon_groups?: product_addon_groupsUncheckedCreateNestedManyWithoutAddon_groupInput
  }

  export type addon_groupsCreateOrConnectWithoutAddonsInput = {
    where: addon_groupsWhereUniqueInput
    create: XOR<addon_groupsCreateWithoutAddonsInput, addon_groupsUncheckedCreateWithoutAddonsInput>
  }

  export type order_item_addonsCreateWithoutAddonInput = {
    id?: string
    quantity: number
    charged_price: Decimal | DecimalJsLike | number | string
    order_item: order_itemsCreateNestedOneWithoutOrder_item_addonsInput
  }

  export type order_item_addonsUncheckedCreateWithoutAddonInput = {
    id?: string
    order_item_id: string
    quantity: number
    charged_price: Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsCreateOrConnectWithoutAddonInput = {
    where: order_item_addonsWhereUniqueInput
    create: XOR<order_item_addonsCreateWithoutAddonInput, order_item_addonsUncheckedCreateWithoutAddonInput>
  }

  export type order_item_addonsCreateManyAddonInputEnvelope = {
    data: order_item_addonsCreateManyAddonInput | order_item_addonsCreateManyAddonInput[]
  }

  export type addon_groupsUpsertWithoutAddonsInput = {
    update: XOR<addon_groupsUpdateWithoutAddonsInput, addon_groupsUncheckedUpdateWithoutAddonsInput>
    create: XOR<addon_groupsCreateWithoutAddonsInput, addon_groupsUncheckedCreateWithoutAddonsInput>
    where?: addon_groupsWhereInput
  }

  export type addon_groupsUpdateToOneWithWhereWithoutAddonsInput = {
    where?: addon_groupsWhereInput
    data: XOR<addon_groupsUpdateWithoutAddonsInput, addon_groupsUncheckedUpdateWithoutAddonsInput>
  }

  export type addon_groupsUpdateWithoutAddonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product_addon_groups?: product_addon_groupsUpdateManyWithoutAddon_groupNestedInput
  }

  export type addon_groupsUncheckedUpdateWithoutAddonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    product_addon_groups?: product_addon_groupsUncheckedUpdateManyWithoutAddon_groupNestedInput
  }

  export type order_item_addonsUpsertWithWhereUniqueWithoutAddonInput = {
    where: order_item_addonsWhereUniqueInput
    update: XOR<order_item_addonsUpdateWithoutAddonInput, order_item_addonsUncheckedUpdateWithoutAddonInput>
    create: XOR<order_item_addonsCreateWithoutAddonInput, order_item_addonsUncheckedCreateWithoutAddonInput>
  }

  export type order_item_addonsUpdateWithWhereUniqueWithoutAddonInput = {
    where: order_item_addonsWhereUniqueInput
    data: XOR<order_item_addonsUpdateWithoutAddonInput, order_item_addonsUncheckedUpdateWithoutAddonInput>
  }

  export type order_item_addonsUpdateManyWithWhereWithoutAddonInput = {
    where: order_item_addonsScalarWhereInput
    data: XOR<order_item_addonsUpdateManyMutationInput, order_item_addonsUncheckedUpdateManyWithoutAddonInput>
  }

  export type order_item_addonsScalarWhereInput = {
    AND?: order_item_addonsScalarWhereInput | order_item_addonsScalarWhereInput[]
    OR?: order_item_addonsScalarWhereInput[]
    NOT?: order_item_addonsScalarWhereInput | order_item_addonsScalarWhereInput[]
    id?: StringFilter<"order_item_addons"> | string
    order_item_id?: StringFilter<"order_item_addons"> | string
    addon_id?: StringFilter<"order_item_addons"> | string
    quantity?: IntFilter<"order_item_addons"> | number
    charged_price?: DecimalFilter<"order_item_addons"> | Decimal | DecimalJsLike | number | string
  }

  export type productsCreateWithoutProduct_addon_groupsInput = {
    id?: string
    name: string
    description?: string | null
    base_price: Decimal | DecimalJsLike | number | string
    image_path?: string | null
    category: categoriesCreateNestedOneWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutProduct_addon_groupsInput = {
    id?: string
    category_id: string
    name: string
    description?: string | null
    base_price: Decimal | DecimalJsLike | number | string
    image_path?: string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutProduct_addon_groupsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_addon_groupsInput, productsUncheckedCreateWithoutProduct_addon_groupsInput>
  }

  export type addon_groupsCreateWithoutProduct_addon_groupsInput = {
    id?: string
    name: string
    description?: string | null
    addons?: addonsCreateNestedManyWithoutAddon_groupInput
  }

  export type addon_groupsUncheckedCreateWithoutProduct_addon_groupsInput = {
    id?: string
    name: string
    description?: string | null
    addons?: addonsUncheckedCreateNestedManyWithoutAddon_groupInput
  }

  export type addon_groupsCreateOrConnectWithoutProduct_addon_groupsInput = {
    where: addon_groupsWhereUniqueInput
    create: XOR<addon_groupsCreateWithoutProduct_addon_groupsInput, addon_groupsUncheckedCreateWithoutProduct_addon_groupsInput>
  }

  export type productsUpsertWithoutProduct_addon_groupsInput = {
    update: XOR<productsUpdateWithoutProduct_addon_groupsInput, productsUncheckedUpdateWithoutProduct_addon_groupsInput>
    create: XOR<productsCreateWithoutProduct_addon_groupsInput, productsUncheckedCreateWithoutProduct_addon_groupsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_addon_groupsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_addon_groupsInput, productsUncheckedUpdateWithoutProduct_addon_groupsInput>
  }

  export type productsUpdateWithoutProduct_addon_groupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_addon_groupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type addon_groupsUpsertWithoutProduct_addon_groupsInput = {
    update: XOR<addon_groupsUpdateWithoutProduct_addon_groupsInput, addon_groupsUncheckedUpdateWithoutProduct_addon_groupsInput>
    create: XOR<addon_groupsCreateWithoutProduct_addon_groupsInput, addon_groupsUncheckedCreateWithoutProduct_addon_groupsInput>
    where?: addon_groupsWhereInput
  }

  export type addon_groupsUpdateToOneWithWhereWithoutProduct_addon_groupsInput = {
    where?: addon_groupsWhereInput
    data: XOR<addon_groupsUpdateWithoutProduct_addon_groupsInput, addon_groupsUncheckedUpdateWithoutProduct_addon_groupsInput>
  }

  export type addon_groupsUpdateWithoutProduct_addon_groupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addons?: addonsUpdateManyWithoutAddon_groupNestedInput
  }

  export type addon_groupsUncheckedUpdateWithoutProduct_addon_groupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addons?: addonsUncheckedUpdateManyWithoutAddon_groupNestedInput
  }

  export type order_itemsCreateWithoutOrderInput = {
    id?: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    product: productsCreateNestedOneWithoutOrder_itemsInput
    order_item_addons?: order_item_addonsCreateNestedManyWithoutOrder_itemInput
  }

  export type order_itemsUncheckedCreateWithoutOrderInput = {
    id?: string
    product_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    order_item_addons?: order_item_addonsUncheckedCreateNestedManyWithoutOrder_itemInput
  }

  export type order_itemsCreateOrConnectWithoutOrderInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrderInput, order_itemsUncheckedCreateWithoutOrderInput>
  }

  export type order_itemsCreateManyOrderInputEnvelope = {
    data: order_itemsCreateManyOrderInput | order_itemsCreateManyOrderInput[]
  }

  export type order_itemsUpsertWithWhereUniqueWithoutOrderInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutOrderInput, order_itemsUncheckedUpdateWithoutOrderInput>
    create: XOR<order_itemsCreateWithoutOrderInput, order_itemsUncheckedCreateWithoutOrderInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutOrderInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutOrderInput, order_itemsUncheckedUpdateWithoutOrderInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutOrderInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrderInput>
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    id?: string
    ticket_number: number
    created_at?: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string
    cancel_reason?: string | null
    payment_method?: string | null
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    id?: string
    ticket_number: number
    created_at?: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status?: string
    cancel_reason?: string | null
    payment_method?: string | null
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productsCreateWithoutOrder_itemsInput = {
    id?: string
    name: string
    description?: string | null
    base_price: Decimal | DecimalJsLike | number | string
    image_path?: string | null
    category: categoriesCreateNestedOneWithoutProductsInput
    product_addon_groups?: product_addon_groupsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutOrder_itemsInput = {
    id?: string
    category_id: string
    name: string
    description?: string | null
    base_price: Decimal | DecimalJsLike | number | string
    image_path?: string | null
    product_addon_groups?: product_addon_groupsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutOrder_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type order_item_addonsCreateWithoutOrder_itemInput = {
    id?: string
    quantity: number
    charged_price: Decimal | DecimalJsLike | number | string
    addon: addonsCreateNestedOneWithoutOrder_item_addonsInput
  }

  export type order_item_addonsUncheckedCreateWithoutOrder_itemInput = {
    id?: string
    addon_id: string
    quantity: number
    charged_price: Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsCreateOrConnectWithoutOrder_itemInput = {
    where: order_item_addonsWhereUniqueInput
    create: XOR<order_item_addonsCreateWithoutOrder_itemInput, order_item_addonsUncheckedCreateWithoutOrder_itemInput>
  }

  export type order_item_addonsCreateManyOrder_itemInputEnvelope = {
    data: order_item_addonsCreateManyOrder_itemInput | order_item_addonsCreateManyOrder_itemInput[]
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    cancel_reason?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticket_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    cancel_reason?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUpsertWithoutOrder_itemsInput = {
    update: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    product_addon_groups?: product_addon_groupsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    product_addon_groups?: product_addon_groupsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type order_item_addonsUpsertWithWhereUniqueWithoutOrder_itemInput = {
    where: order_item_addonsWhereUniqueInput
    update: XOR<order_item_addonsUpdateWithoutOrder_itemInput, order_item_addonsUncheckedUpdateWithoutOrder_itemInput>
    create: XOR<order_item_addonsCreateWithoutOrder_itemInput, order_item_addonsUncheckedCreateWithoutOrder_itemInput>
  }

  export type order_item_addonsUpdateWithWhereUniqueWithoutOrder_itemInput = {
    where: order_item_addonsWhereUniqueInput
    data: XOR<order_item_addonsUpdateWithoutOrder_itemInput, order_item_addonsUncheckedUpdateWithoutOrder_itemInput>
  }

  export type order_item_addonsUpdateManyWithWhereWithoutOrder_itemInput = {
    where: order_item_addonsScalarWhereInput
    data: XOR<order_item_addonsUpdateManyMutationInput, order_item_addonsUncheckedUpdateManyWithoutOrder_itemInput>
  }

  export type order_itemsCreateWithoutOrder_item_addonsInput = {
    id?: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    order: ordersCreateNestedOneWithoutOrder_itemsInput
    product: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutOrder_item_addonsInput = {
    id?: string
    order_id: string
    product_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateOrConnectWithoutOrder_item_addonsInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrder_item_addonsInput, order_itemsUncheckedCreateWithoutOrder_item_addonsInput>
  }

  export type addonsCreateWithoutOrder_item_addonsInput = {
    id?: string
    name: string
    image_path?: string | null
    price: Decimal | DecimalJsLike | number | string
    addon_group: addon_groupsCreateNestedOneWithoutAddonsInput
  }

  export type addonsUncheckedCreateWithoutOrder_item_addonsInput = {
    id?: string
    addon_group_id: string
    name: string
    image_path?: string | null
    price: Decimal | DecimalJsLike | number | string
  }

  export type addonsCreateOrConnectWithoutOrder_item_addonsInput = {
    where: addonsWhereUniqueInput
    create: XOR<addonsCreateWithoutOrder_item_addonsInput, addonsUncheckedCreateWithoutOrder_item_addonsInput>
  }

  export type order_itemsUpsertWithoutOrder_item_addonsInput = {
    update: XOR<order_itemsUpdateWithoutOrder_item_addonsInput, order_itemsUncheckedUpdateWithoutOrder_item_addonsInput>
    create: XOR<order_itemsCreateWithoutOrder_item_addonsInput, order_itemsUncheckedCreateWithoutOrder_item_addonsInput>
    where?: order_itemsWhereInput
  }

  export type order_itemsUpdateToOneWithWhereWithoutOrder_item_addonsInput = {
    where?: order_itemsWhereInput
    data: XOR<order_itemsUpdateWithoutOrder_item_addonsInput, order_itemsUncheckedUpdateWithoutOrder_item_addonsInput>
  }

  export type order_itemsUpdateWithoutOrder_item_addonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
    product?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrder_item_addonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type addonsUpsertWithoutOrder_item_addonsInput = {
    update: XOR<addonsUpdateWithoutOrder_item_addonsInput, addonsUncheckedUpdateWithoutOrder_item_addonsInput>
    create: XOR<addonsCreateWithoutOrder_item_addonsInput, addonsUncheckedCreateWithoutOrder_item_addonsInput>
    where?: addonsWhereInput
  }

  export type addonsUpdateToOneWithWhereWithoutOrder_item_addonsInput = {
    where?: addonsWhereInput
    data: XOR<addonsUpdateWithoutOrder_item_addonsInput, addonsUncheckedUpdateWithoutOrder_item_addonsInput>
  }

  export type addonsUpdateWithoutOrder_item_addonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addon_group?: addon_groupsUpdateOneRequiredWithoutAddonsNestedInput
  }

  export type addonsUncheckedUpdateWithoutOrder_item_addonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    addon_group_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type productsCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    base_price: Decimal | DecimalJsLike | number | string
    image_path?: string | null
  }

  export type productsUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    product_addon_groups?: product_addon_groupsUpdateManyWithoutProductNestedInput
    order_items?: order_itemsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    product_addon_groups?: product_addon_groupsUncheckedUpdateManyWithoutProductNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    base_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type product_addon_groupsCreateManyProductInput = {
    id?: string
    addon_group_id: string
    min_selections?: number
    max_selections: number
    sort_order?: number
  }

  export type order_itemsCreateManyProductInput = {
    id?: string
    order_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
  }

  export type product_addon_groupsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_selections?: IntFieldUpdateOperationsInput | number
    max_selections?: IntFieldUpdateOperationsInput | number
    sort_order?: IntFieldUpdateOperationsInput | number
    addon_group?: addon_groupsUpdateOneRequiredWithoutProduct_addon_groupsNestedInput
  }

  export type product_addon_groupsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    addon_group_id?: StringFieldUpdateOperationsInput | string
    min_selections?: IntFieldUpdateOperationsInput | number
    max_selections?: IntFieldUpdateOperationsInput | number
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type product_addon_groupsUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    addon_group_id?: StringFieldUpdateOperationsInput | string
    min_selections?: IntFieldUpdateOperationsInput | number
    max_selections?: IntFieldUpdateOperationsInput | number
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemsUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
    order_item_addons?: order_item_addonsUpdateManyWithoutOrder_itemNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_item_addons?: order_item_addonsUncheckedUpdateManyWithoutOrder_itemNestedInput
  }

  export type order_itemsUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type addonsCreateManyAddon_groupInput = {
    id?: string
    name: string
    image_path?: string | null
    price: Decimal | DecimalJsLike | number | string
  }

  export type product_addon_groupsCreateManyAddon_groupInput = {
    id?: string
    product_id: string
    min_selections?: number
    max_selections: number
    sort_order?: number
  }

  export type addonsUpdateWithoutAddon_groupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_item_addons?: order_item_addonsUpdateManyWithoutAddonNestedInput
  }

  export type addonsUncheckedUpdateWithoutAddon_groupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_item_addons?: order_item_addonsUncheckedUpdateManyWithoutAddonNestedInput
  }

  export type addonsUncheckedUpdateManyWithoutAddon_groupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image_path?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type product_addon_groupsUpdateWithoutAddon_groupInput = {
    id?: StringFieldUpdateOperationsInput | string
    min_selections?: IntFieldUpdateOperationsInput | number
    max_selections?: IntFieldUpdateOperationsInput | number
    sort_order?: IntFieldUpdateOperationsInput | number
    product?: productsUpdateOneRequiredWithoutProduct_addon_groupsNestedInput
  }

  export type product_addon_groupsUncheckedUpdateWithoutAddon_groupInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    min_selections?: IntFieldUpdateOperationsInput | number
    max_selections?: IntFieldUpdateOperationsInput | number
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type product_addon_groupsUncheckedUpdateManyWithoutAddon_groupInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    min_selections?: IntFieldUpdateOperationsInput | number
    max_selections?: IntFieldUpdateOperationsInput | number
    sort_order?: IntFieldUpdateOperationsInput | number
  }

  export type order_item_addonsCreateManyAddonInput = {
    id?: string
    order_item_id: string
    quantity: number
    charged_price: Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsUpdateWithoutAddonInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    charged_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_item?: order_itemsUpdateOneRequiredWithoutOrder_item_addonsNestedInput
  }

  export type order_item_addonsUncheckedUpdateWithoutAddonInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    charged_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsUncheckedUpdateManyWithoutAddonInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    charged_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateManyOrderInput = {
    id?: string
    product_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
    order_item_addons?: order_item_addonsUpdateManyWithoutOrder_itemNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_item_addons?: order_item_addonsUncheckedUpdateManyWithoutOrder_itemNestedInput
  }

  export type order_itemsUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsCreateManyOrder_itemInput = {
    id?: string
    addon_id: string
    quantity: number
    charged_price: Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsUpdateWithoutOrder_itemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    charged_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    addon?: addonsUpdateOneRequiredWithoutOrder_item_addonsNestedInput
  }

  export type order_item_addonsUncheckedUpdateWithoutOrder_itemInput = {
    id?: StringFieldUpdateOperationsInput | string
    addon_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    charged_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_item_addonsUncheckedUpdateManyWithoutOrder_itemInput = {
    id?: StringFieldUpdateOperationsInput | string
    addon_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    charged_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoriesCountOutputTypeDefaultArgs instead
     */
    export type CategoriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductsCountOutputTypeDefaultArgs instead
     */
    export type ProductsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Addon_groupsCountOutputTypeDefaultArgs instead
     */
    export type Addon_groupsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Addon_groupsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddonsCountOutputTypeDefaultArgs instead
     */
    export type AddonsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AddonsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdersCountOutputTypeDefaultArgs instead
     */
    export type OrdersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Order_itemsCountOutputTypeDefaultArgs instead
     */
    export type Order_itemsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Order_itemsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoriesDefaultArgs instead
     */
    export type categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productsDefaultArgs instead
     */
    export type productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use addon_groupsDefaultArgs instead
     */
    export type addon_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = addon_groupsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use addonsDefaultArgs instead
     */
    export type addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = addonsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use product_addon_groupsDefaultArgs instead
     */
    export type product_addon_groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = product_addon_groupsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ordersDefaultArgs instead
     */
    export type ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ordersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_itemsDefaultArgs instead
     */
    export type order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_itemsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use order_item_addonsDefaultArgs instead
     */
    export type order_item_addonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = order_item_addonsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use settingsDefaultArgs instead
     */
    export type settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = settingsDefaultArgs<ExtArgs>

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