/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Games
// ====================================================

export interface Games_games_edges_node_record_metadata {
  __typename: "RecordMetadata";
  /**
   * The unique GUID of the metadata.
   */
  metadataId: any;
}

export interface Games_games_edges_node_record {
  __typename: "GameRecord";
  /**
   * The unique ID of the game.
   */
  gameId: any;
  /**
   * The original platform or game console of the game this object represents.
   */
  platformId: any | null;
  /**
   * The title of the game.
   */
  title: string | null;
  /**
   * The metadata associated with this game.
   */
  metadata: (Games_games_edges_node_record_metadata | null)[] | null;
}

export interface Games_games_edges_node {
  __typename: "Game";
  id: string;
  /**
   * Record metadata relating to this game.
   */
  record: Games_games_edges_node_record | null;
}

export interface Games_games_edges {
  __typename: "GameEdge";
  /**
   * The item at the end of the edge.
   */
  node: Games_games_edges_node | null;
}

export interface Games_games_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * Indicates whether more edges exist following the set defined by the clients arguments.
   */
  hasNextPage: boolean;
}

export interface Games_games {
  __typename: "GameConnection";
  /**
   * A list of edges.
   */
  edges: Games_games_edges[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: Games_games_pageInfo;
}

export interface Games {
  games: Games_games | null;
}

export interface GamesVariables {
  cursor?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Platforms
// ====================================================

export interface Platforms_stone_platforms_metadata {
  __typename: "StoneMetadata";
  /**
   * The metadata key.
   */
  key: string;
  /**
   * The metadata value.
   */
  value: string;
}

export interface Platforms_stone_platforms {
  __typename: "PlatformInfo";
  /**
   * The Stone Platform ID of this platform.
   */
  platformId: any;
  /**
   * The human readable name of this platform.
   */
  friendlyName: string;
  /**
   * Stone metadata for this platform.
   */
  metadata: Platforms_stone_platforms_metadata[] | null;
}

export interface Platforms_stone {
  __typename: "StoneQuery";
  /**
   * Gets the Stone platform definitions matching the search query.
   */
  platforms: Platforms_stone_platforms[];
}

export interface Platforms {
  /**
   * Provides access to Stone platform and controller definitions.
   */
  stone: Platforms_stone;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
