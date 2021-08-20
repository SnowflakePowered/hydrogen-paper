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

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
