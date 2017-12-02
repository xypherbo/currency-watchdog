export interface GetBoardPayload {
    key: String;
    token: String;
}

export interface GetBoardColumnPayload {
    key: String;
    token: String;
    board_id: String;
}

export interface Board {
    id: String;
    name: String;
}

export interface BoardColumn {
    id: String;
    name: String;
}

export interface Member {
    fullname: String;
    id: String;
    username: String;
}
